// import React, { useState, useEffect } from 'react';
// import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is properly imported

// const ClassTimeTable = () => {
//   const [classData, setClassData] = useState([
//     { classId: '1', className: 'Class 1' },
//     { classId: '2', className: 'Class 2' }
//   ]);
//   const [sectionData, setSectionData] = useState([
//     { sectionId: 'A', sectionName: 'Section A' },
//     { sectionId: 'B', sectionName: 'Section B' }
//   ]);
//   const [teacherData, setTeacherData] = useState([
//     { teacherId: '1', teacherName: 'Teacher A' },
//     { teacherId: '2', teacherName: 'Teacher B' }
//   ]);
//   const [subjectData, setSubjectData] = useState([
//     { subjectId: '1', subjectName: 'Math' },
//     { subjectId: '2', subjectName: 'Science' }
//   ]);
//   const [selectedClass, setSelectedClass] = useState('');
//   const [selectedSection, setSelectedSection] = useState('');
//   const [selectedTeacher, setSelectedTeacher] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const daysOfWeek = ['Period No', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//   const periods = [0, 1, 2, 3, 4, 5, 6];

//   useEffect(() => {
//     // The API calls are commented out, so no actual data fetching will happen.
//     // const fetchData = async () => {
//     //   try {
//     //     const classResponse = await axios.get('http://192.168.1.2:8080/api/classes/af7ede72-5039-4b89-b1db-d14171a1ddb7/classes');
//     //     const teacherResponse = await axios.get('http://192.168.1.2:8080/api/teachers/teacher/af7ede72-5039-4b89-b1db-d14171a1ddb7');
//     //     const subjectResponse = await axios.get('http://192.168.1.2:8080/api/subjects/af7ede72-5039-4b89-b1db-d14171a1ddb7');
//     //
//     //     setClassData(classResponse.data);
//     //     setTeacherData(teacherResponse.data);
//     //     setSubjectData(subjectResponse.data);
//     //   } catch (error) {
//     //     setError(error);
//     //   } finally {
//     //     setLoading(false);
//     //   }
//     // };

//     // fetchData();
//   }, []);

//   const renderGrid = () => {
//     return (
//       <div className='grid grid-cols-7 grid-rows-6 px-5 py-5 w-full items-center justify-center'>
//         {periods.map((day, idx1) => {
//           return daysOfWeek.map((period, idx2) => {
//             if (idx1 > 0 && idx2 > 0) {
//               return (
//                 <span key={`${idx1}-${idx2}`} className='bg-white border-2 text-center vertical-center place-content-center border-solid w-full h-24 border-black'>
//                   <div className="flex flex-col">
//                     <select className="w-full h-full" defaultValue="">
//                       <option value="" disabled hidden>Select Teacher</option>
//                       {teacherData.map(teacher => (
//                         <option key={teacher.teacherId} value={teacher.teacherId}>{teacher.teacherName}</option>
//                       ))}
//                     </select>
//                     <select className="w-full h-full mt-1">
//                       <option value="" disabled hidden>Select Subject</option>
//                       {subjectData.map(subject => (
//                         <option key={subject.subjectId} value={subject.subjectId}>{subject.subjectName}</option>
//                       ))}
//                     </select>
//                   </div>
//                 </span>
//               );
//             } else {
//               return (
//                 <span key={`${idx1}-${idx2}`} className='bg-white border-2 text-center vertical-center place-content-center border-solid w-full h-24 border-black'>
//                   {idx2 === 0 && idx1 !== 0 ? day : ''}
//                   {idx1 === 0 ? period : ''}
//                 </span>
//               );
//             }
//           });
//         })}
//       </div>
//     );
//   };

//   if (loading) return <div className="container mx-auto p-4">Loading...</div>;
//   if (error) return <div className="container mx-auto p-4">Error: {error.message}</div>;

//   return (
//     <div className="container mx-auto p-4">
//       {/* Top Selection Dropdowns */}
//       <div className="flex justify-between items-center mb-4">
//         <div>
//           <label htmlFor="classSelect" className="block mb-2">Select Class</label>
//           <select
//             id="classSelect"
//             className="p-2 border border-gray-300 rounded"
//             value={selectedClass}
//             onChange={(e) => setSelectedClass(e.target.value)}
//           >
//             <option value="" disabled hidden> Class</option>
//             {classData.map((cls) => (
//               <option key={cls.classId} value={cls.classId}>{cls.className}</option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label htmlFor="sectionSelect" className="block mb-2">Select Section</label>
//           <select
//             id="sectionSelect"
//             className="p-2 border border-gray-300 rounded"
//             value={selectedSection}
//             onChange={(e) => setSelectedSection(e.target.value)}
//           >
//             <option value="" disabled hidden> Section</option>
//             {sectionData.map((section) => (
//               <option key={section.sectionId} value={section.sectionId}>{section.sectionName}</option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label htmlFor="teacherSelect" className="block mb-2">Select Teacher</label>
//           <select
//             id="teacherSelect"
//             className="p-2 border border-gray-300 rounded"
//             value={selectedTeacher}
//             onChange={(e) => setSelectedTeacher(e.target.value)}
//           >
//             <option value="" disabled hidden> Teacher</option>
//             {teacherData.map((teacher) => (
//               <option key={teacher.teacherId} value={teacher.teacherId}>{teacher.teacherName}</option>
//             ))}
//           </select>
//         </div>
//         <div>
//             <button  className="p-2 border border-gray-300 rounded">Create Time Table</button>
//         </div>
//       </div>

//       {/* Render Grid */}
//       {renderGrid()}
//     </div>
//   );
// };

// export default ClassTimeTable;


import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is properly imported

const ClassTimeTable = () => {
  const [classData, setClassData] = useState([
    { classId: '1', className: 'Class 1' },
    { classId: '2', className: 'Class 2' }
  ]);
  const [sectionData, setSectionData] = useState([
    { sectionId: 'A', sectionName: 'Section A' },
    { sectionId: 'B', sectionName: 'Section B' }
  ]);
  const [teacherData, setTeacherData] = useState([
    { teacherId: '1', teacherName: 'Teacher A' },
    { teacherId: '2', teacherName: 'Teacher B' }
  ]);
  const [subjectData, setSubjectData] = useState([
    { subjectId: '1', subjectName: 'Math' },
    { subjectId: '2', subjectName: 'Science' }
  ]);
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const daysOfWeek = ['Period No', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const periods = [0, 1, 2, 3, 4, 5, 6,7];

  useEffect(() => {
    // The API calls are commented out, so no actual data fetching will happen.
    // const fetchData = async () => {
    //   try {
    //     const classResponse = await axios.get('http://192.168.1.2:8080/api/classes/af7ede72-5039-4b89-b1db-d14171a1ddb7/classes');
    //     const teacherResponse = await axios.get('http://192.168.1.2:8080/api/teachers/teacher/af7ede72-5039-4b89-b1db-d14171a1ddb7');
    //     const subjectResponse = await axios.get('http://192.168.1.2:8080/api/subjects/af7ede72-5039-4b89-b1db-d14171a1ddb7');
    //
    //     setClassData(classResponse.data);
    //     setTeacherData(teacherResponse.data);
    //     setSubjectData(subjectResponse.data);
    //   } catch (error) {
    //     setError(error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    // fetchData();
  }, []);

  const renderGrid = () => {
    return (
      <div className='grid grid-cols-7 gap-2'>
        {daysOfWeek.map((day, idx) => (
          <div key={idx} className='bg-gray-200 border border-gray-400 text-center font-bold p-2'>
            {day}
          </div>
        ))}
        {periods.slice(1).map((period, idx1) => (
          daysOfWeek.map((day, idx2) => (
            <div key={`${idx1}-${idx2}`} className={`border p-2 ${idx2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
              {idx2 === 0 ? period : (
                <div className="flex flex-col h-full">
                  <select className="w-full mb-1 p-1 border border-gray-300 rounded" defaultValue="">
                    <option value="" disabled hidden>Select Teacher</option>
                    {teacherData.map(teacher => (
                      <option key={teacher.teacherId} value={teacher.teacherId}>{teacher.teacherName}</option>
                    ))}
                  </select>
                  <select className="w-full p-1 border border-gray-300 rounded">
                    <option value="" disabled hidden>Select Subject</option>
                    {subjectData.map(subject => (
                      <option key={subject.subjectId} value={subject.subjectId}>{subject.subjectName}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          ))
        ))}
      </div>
    );
  };

  if (loading) return <div className="container mx-auto p-4">Loading...</div>;
  if (error) return <div className="container mx-auto p-4">Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      {/* Top Selection Dropdowns */}
      <div className="flex justify-between items-center mb-4 space-x-4">
        <div>
          <label htmlFor="classSelect" className="block mb-2">Select Class</label>
          <select
            id="classSelect"
            className="p-2 border border-gray-300 rounded w-full"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            <option value="" disabled hidden>Class</option>
            {classData.map((cls) => (
              <option key={cls.classId} value={cls.classId}>{cls.className}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="sectionSelect" className="block mb-2">Select Section</label>
          <select
            id="sectionSelect"
            className="p-2 border border-gray-300 rounded w-full"
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value)}
          >
            <option value="" disabled hidden>Section</option>
            {sectionData.map((section) => (
              <option key={section.sectionId} value={section.sectionId}>{section.sectionName}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="teacherSelect" className="block mb-2">Select Teacher</label>
          <select
            id="teacherSelect"
            className="p-2 border border-gray-300 rounded w-full"
            value={selectedTeacher}
            onChange={(e) => setSelectedTeacher(e.target.value)}
          >
            <option value="" disabled hidden>Teacher</option>
            {teacherData.map((teacher) => (
              <option key={teacher.teacherId} value={teacher.teacherId}>{teacher.teacherName}</option>
            ))}
          </select>
        </div>
        <div>
          <button className="p-2 bg-blue-500 text-white rounded w-full">Create Time Table</button>
        </div>
      </div>

      {/* Render Grid */}
      {renderGrid()}
    </div>
  );
};

export default ClassTimeTable;
