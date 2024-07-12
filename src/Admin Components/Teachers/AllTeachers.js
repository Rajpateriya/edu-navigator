import React, { useContext, useEffect, useState } from 'react'
import { IoMdSearch as Search } from "react-icons/io";
import { MyContext } from '../MyContext';
import axios from 'axios';
import { IoMdCloseCircle as Close } from "react-icons/io";
import AddTeacher from './AddTeacher';


function AllTeachers() {
  const [search, setSearch] = useState('')
  const { teachers } = useContext(MyContext)
  const [showAddTeacherModal, setShowAddTeacherModal] = useState(false)

  const [filter, setFilter] = useState({
    all: true,
    present: false,
    absent: false
  })

  const [todayAttendance, setTodayAttendance] = useState(null)

  const fetchTodayTeachersAttendance = async () => {
    try {
      const response = await axios.get(`http://192.168.1.2:8080/api/attendance/getSchoolTeachersAttendanceForToday/af7ede72-5039-4b89-b1db-d14171a1ddb7`)
      setTodayAttendance(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  // Function to handle attendance button click
  const markAttendance = async (id) => {
    try {
      const response = await axios.post(`http://192.168.1.2:8080/api/attendance/setTeacherAttendance`, { teacherId: id })
      console.log(response.data.message)
      fetchTodayTeachersAttendance()
    } catch (error) {
      console.log(error)
    }
  };

  const filterTeachers = (filter) => {
    if (filter === 'all') {
      setFilter({
        all: true,
        present: false,
        absent: false
      })
    }
    else if (filter === 'present') {
      setFilter({
        all: false,
        present: true,
        absent: false
      })
    }
    else if (filter === 'absent') {
      setFilter({
        all: false,
        present: false,
        absent: true
      })
    }
  }

  useEffect(() => {
    fetchTodayTeachersAttendance()
  }, [])

  return (
    <div className='flex items-center justify-center w-full'>
      <div className='flex flex-col gap-y-5 items-center justify-center py-8 w-full px-3 sm:px-6 md:px-8'>

        <span className='flex px-3 gap-x-2.5 items-center bg-white rounded-md justify-center w-full'>
          <Search className='text-2xl ' />
          <input type="text"
            name="teacher"
            id="teacher"
            placeholder='search teacher by name'
            value={search}
            className='w-full py-2.5 outline-none rounded-md bg-transparent text-black'
            onChange={(ele) => setSearch(ele.currentTarget.value)} />
        </span>


        <span className='flex items-center justify-between w-full'>
          <span className='flex gap-x-10 items-center justify-start w-full'>
            <span className='flex text-white text-base items-center justify-start'>
              All Teachers
              <input type="checkbox"
                name='all'
                id='all'
                className='ml-1.5 mt-1'
                checked={filter.all}
                onClick={() => filterTeachers('all')} />
            </span>

            <span className='flex text-white text-base items-center justify-start'>
              Present Teachers
              <input type="checkbox"
                name='prsent'
                id='prsent'
                checked={filter.present}
                onClick={() => filterTeachers('present')}
                className='ml-1.5 mt-1' />
            </span>

            <span className='flex text-white text-base items-center justify-start'>
              Absent Teachers
              <input type="checkbox"
                name='all'
                id='all'
                className='ml-1.5 mt-1'
                checked={filter.absent}
                onClick={() => filterTeachers('absent')} />
            </span>
          </span>

          <button
           className='py-1.5 bg-pink-700 hover:bg-pink-500 px-3.5 text-white text-nowrap font-semibold rounded-md' 
           onClick={() => setShowAddTeacherModal(true)}
          >
            Add Teacher
          </button>
        </span>

        <span className='flex flex-col items-center justify-center w-full'>
          <span className="overflow-x-auto w-full">
            <table className="w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Name</th>
                  <th className="py-2 px-4 border-b">Subject</th>
                  <th className="py-2 px-4 border-b">Email</th>
                  <th className="py-2 px-4 border-b">Attendance</th>
                </tr>
              </thead>
              <tbody>
                {teachers && todayAttendance ? teachers.map((teacher, index) => (
                  <tr key={teacher.teacherId + index} className={`text-center ${teacher.teacherName.toLowerCase().includes(search) ? '' : 'hidden'} 
                  ${filter.all ? '' : ''}
                  ${filter.present ? todayAttendance[teacher.teacherId] ? '' : 'hidden' : ''} 
                  ${filter.absent ? todayAttendance[teacher.teacherId] ? 'hidden' : '' : ''}`}>
                    <td className="py-2 text-left px-4 border-b">{teacher.teacherName}</td>
                    <td className="py-2 text-left px-4 border-b">{teacher.subject ? teacher.subject : 'subject'}</td>
                    <td className="py-2 text-left px-4 border-b">{teacher.email}</td>
                    <td className="py-2 text-left px-4 border-b">

                      {
                        todayAttendance[teacher.teacherId] ?
                          <button
                            className="bg-green-500 text-white font-bold py-1 px-2 rounded"
                          >
                            Present
                          </button>
                          :
                          <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                            onClick={() => markAttendance(teacher.teacherId)}
                          >
                            Absent
                          </button>
                      }
                    </td>
                  </tr>
                ))
                  :
                  <tr className='w-full text-center py-2.5 px-3'>
                    <td></td>
                    <td></td>
                    <td className='text-left'>Loading Teachers...</td>
                    <td></td>
                  </tr>}
              </tbody>
            </table>
          </span>
        </span>

        <span className={`${showAddTeacherModal ? 'flex' : 'hidden'} py-12 bg-[#000000bd] z-10 fixed items-center justify-center top-0 left-0 h-screen w-screen`}>
          <Close className='absolute text-white cursor-pointer text-3xl right-10 top-5 md:text-5xl' onClick={() => setShowAddTeacherModal(false)} />
          <AddTeacher setShowAddTeacherModal={setShowAddTeacherModal} />
        </span>
      </div>
    </div>
  )
}

export default AllTeachers