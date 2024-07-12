
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is properly imported

const TimeTable = () => {
  const [classData, setClassData] = useState([]);
  const [teacherData, setTeacherData] = useState([]);
  const [subjectData, setSubjectData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const daysOfWeek = ['Period No', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const periods = [0,1, 2, 3, 4, 5, 6];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const classResponse = await axios.get('http://192.168.1.2:8080/api/classes/af7ede72-5039-4b89-b1db-d14171a1ddb7/classes');
        const teacherResponse = await axios.get('http://192.168.1.2:8080/api/teachers/teacher/af7ede72-5039-4b89-b1db-d14171a1ddb7');
        const subjectResponse = await axios.get('http://192.168.1.2:8080/api/subjects/af7ede72-5039-4b89-b1db-d14171a1ddb7');

        setClassData(classResponse.data);
        setTeacherData(teacherResponse.data);
        setSubjectData(subjectResponse.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderGrid = () => {
    return (
      <div className='grid grid-cols-7 grid-rows-6 px-5 py-5 w-full items-center justify-center'>
        {periods.map((day, idx1) => {
          return daysOfWeek.map((period, idx2) => {
            if (idx1 > 0 && idx2 > 0) {
              return (
                <span key={`${idx1}-${idx2}`} className='bg-white border-2 text-center vertical-center place-content-center border-solid w-full h-24 border-black'>
                  <div className="flex flex-col">
                    <select className="w-full h-full" defaultValue="">
                      <option value="" disabled hidden>Select Teacher</option>
                      {teacherData.map(teacher => (
                        <option key={teacher.teacherId} value={teacher.teacherId}>{teacher.teacherName}</option>
                      ))}
                    </select>
                    <select className="w-full h-full mt-1">
                      <option value="" disabled hidden>Select Subject</option>
                      {subjectData.map(subject => (
                        <option key={subject.subjectId} value={subject.subjectId}>{subject.subjectName}</option>
                      ))}
                    </select>
                  </div>
                </span>
              );
            } else {
              return (
                <span key={`${idx1}-${idx2}`} className='bg-white border-2 text-center vertical-center place-content-center border-solid w-full h-24 border-black'>
                  {idx2 === 0 && idx1 !== 0 ? day : ''}
                  {idx1 === 0 ? period : ''}
                </span>
              );
            }
          });
        })}
      </div>
    );
  };

  if (loading) return <div className="container mx-auto p-4">Loading...</div>;
  if (error) return <div className="container mx-auto p-4">Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      {/* Render Grid */}
      {renderGrid()}
    </div>
  );
};

export default TimeTable;
