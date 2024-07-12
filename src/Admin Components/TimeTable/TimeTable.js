import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is properly imported

const TimeTable = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [classData, setClassData] = useState([]);
  const [teacherData, setTeacherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [daysOfWeek, setDaysOfWeek] = useState(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']);

  const periods = [1, 2, 3, 4, 5, 6, 7, 8];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const classResponse = await axios.get('http://192.168.1.2:8080/api/timetables/school-timetable/af7ede72-5039-4b89-b1db-d14171a1ddb7');
        setClassData(classResponse.data);

        const teacherResponse = await axios.get('http://192.168.1.2:8080/api/teachers/teacher/af7ede72-5039-4b89-b1db-d14171a1ddb7');
        const teacherNames = teacherResponse.data.map(teacher => teacher.teacherName);
        setDaysOfWeek(['Period No', ...teacherNames]);

        const teacherTimeTableResponse = await axios.get('http://192.168.1.2:8080/api/timetables/teacher-timetable/af7ede72-5039-4b89-b1db-d14171a1ddb7');
        setTeacherData(teacherTimeTableResponse.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderClassTimeTable = () => {
    return classData.map(classItem => (
      <div key={classItem.classId} className="mb-8">
        <h2 className="text-xl font-semibold mb-2">{classItem.className}</h2>
        <div className="grid grid-cols-6 grid-rows-9 gap-2">
          <span className="col-span-1 row-span-1"></span>
          {daysOfWeek.map((day, idx) => (
            <span key={idx} className="bg-gray-200 text-center border p-2">{day}</span>
          ))}
          {periods.map((period, idx1) => (
            <React.Fragment key={idx1}>
              <span className="bg-gray-200 text-center border p-2">{period}</span>
              {daysOfWeek.slice(1).map((teacherName, idx2) => {
                const schedule = classItem.periods.find(p => p.teacherName === teacherName && p.periodNumber === period);
                return (
                  <span key={idx2} className="bg-white border text-center p-2 h-24">
                    {schedule ? (
                      <>
                        <div>{schedule.subjectName}</div>
                        <div>{schedule.teacherName}</div>
                      </>
                    ) : (
                      ''
                    )}
                  </span>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    ));
  };

  const renderTeacherTimeTable = () => {
    return teacherData.map(teacherItem => (
      <div key={teacherItem.teacherId} className="mb-8">
        <h2 className="text-xl font-semibold mb-2">{teacherItem.teacherName}</h2>
        <div className="grid grid-cols-6 grid-rows-9 gap-2">
          <span className="col-span-1 row-span-1"></span>
          {daysOfWeek.map((day, idx) => (
            <span key={idx} className="bg-gray-200 text-center border p-2">{day}</span>
          ))}
          {periods.map((period, idx1) => (
            <React.Fragment key={idx1}>
              <span className="bg-gray-200 text-center border p-2">{period}</span>
              {daysOfWeek.slice(1).map((teacherName, idx2) => {
                const schedule = teacherItem.periods.find(p => p.teacherName === teacherName && p.periodNumber === period);
                return (
                  <span key={idx2} className="bg-white border text-center p-2 h-24">
                    {schedule ? (
                      <>
                        <div>{schedule.subjectName}</div>
                        <div>{schedule.className}</div>
                      </>
                    ) : (
                      ''
                    )}
                  </span>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    ));
  };

  if (loading) return <div className="container mx-auto p-4">Loading...</div>;
  if (error) return <div className="container mx-auto p-4">Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex space-x-4 mb-4">
        <button
          className={`py-2 px-4 -mb-px border-b-2 transition-colors duration-300 ${
            activeTab === 0
              ? 'border-blue-500 text-blue-500'
              : 'border-transparent hover:text-blue-500'
          }`}
          onClick={() => setActiveTab(0)}
        >
          Class Time Table
        </button>
        <button
          className={`py-2 px-4 -mb-px border-b-2 transition-colors duration-300 ${
            activeTab === 1
              ? 'border-blue-500 text-blue-500'
              : 'border-transparent hover:text-blue-500'
          }`}
          onClick={() => setActiveTab(1)}
        >
          Teacher Time Table
        </button>
      </div>
      <div className="p-4">
        {activeTab === 0 ? renderClassTimeTable() : renderTeacherTimeTable()}
      </div>
    </div>
  );
};

export default TimeTable;
