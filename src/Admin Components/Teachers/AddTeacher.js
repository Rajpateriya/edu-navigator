import axios from 'axios'
import React, { useEffect, useState } from 'react'
import swal from 'sweetalert'

function AddTeacher({ setShowAddTeacherModal }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contactNo, setContactNo] = useState('')
  const [isClassTeacher, setIsClassTeacher] = useState(false)
  const [classes, setClasses] = useState(null)
  const [classTeacher, setClassTeacher] = useState('')

  const AddTeacher = async () => {
    try {
      const data = {
        teacherName: name,
        email: email,
        schoolId: 'af7ede72-5039-4b89-b1db-d14171a1ddb7',
        classId: classTeacher,
        contactNumber: contactNo
      }
      await axios.post(`http://192.168.1.2:8080/api/teachers/teacher`, data)
      setShowAddTeacherModal(false)
      swal({
        title: "Success",
        text: `${isClassTeacher ? 'Class Teacher' : 'Teacher'} added successfully!`,
        icon: "success",
      })
        .then(() => {
          setName('')
          setEmail('')
          setIsClassTeacher(false)
          setContactNo('')
          setClassTeacher('')
        })
    } catch (error) {
      setShowAddTeacherModal(false)
      swal({
        title: "Failed",
        text: `${isClassTeacher ? 'Class Teacher' : 'Teacher'} is not added!`,
        icon: "error",
      })
        .then(() => {
          setName('')
          setEmail('')
          setIsClassTeacher(false)
          setContactNo('')
          setClassTeacher('')
        })
      console.log(error)
    }
  }

  const fetchClasses = async () => {
    try {
      const response = await axios.get(`http://192.168.1.2:8080/api/classes/af7ede72-5039-4b89-b1db-d14171a1ddb7/classes`)
      setClasses(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchClasses()
  }, [])

  return (
    <div className='flex items-center justify-center w-full max-w-md bg-white rounded-2xl'>
      <div className='flex flex-col items-center justify-center w-full py-8 px-8'>

        <span className='grid grid-cols-1 gap-x-3.5 gap-y-5 items-center justify-center w-full'>
          <span className='flex flex-col gap-y-2.5 items-start justify-center w-full'>
            <span className='text-base font-semibold'>Full Name</span>
            <input
              type="text"
              id='name'
              placeholder='Enter full name'
              name='name'
              value={name}
              className='outline-none px-3 py-1.5 border-2 border-solid border-black bg-transparent rounded-md w-full'
              onChange={(ele) => setName(ele.currentTarget.value)}
              required />
          </span>

          <span className='flex flex-col gap-y-2.5 items-start justify-center w-full'>
            <span className='text-base font-semibold'>Email</span>
            <input
              type="text"
              id='name'
              placeholder='Enter email address'
              name='email'
              value={email}
              className='outline-none px-3 py-1.5 border-2 border-solid border-black bg-transparent rounded-md w-full'
              onChange={(ele) => setEmail(ele.currentTarget.value)}
              required />
          </span>

          <span className='flex flex-col gap-y-2.5 items-start justify-center w-full'>
            <span className='text-base font-semibold'>Contact No.</span>
            <input
              type="text"
              id='number'
              placeholder='Enter Contact No.'
              name='number'
              value={contactNo}
              className='outline-none px-3 py-1.5 border-2 border-solid border-black bg-transparent rounded-md w-full'
              onChange={(ele) => setContactNo(ele.currentTarget.value)}
              required />
          </span>

          <span className='flex flex-col gap-y-2.5 items-start justify-center w-full'>
            <span className='text-base font-semibold'>Are you assigned a class teacher ?</span>
            <select name='classTeacher'
              id='classTeacher'
              onChange={(ele) => setIsClassTeacher(ele.target.value)} value={isClassTeacher}
              className='outline-none px-3 py-1.5 border-2 border-solid border-black bg-transparent rounded-md w-full'>
              <option value={false}>No</option>
              <option value={true}>Yes</option>
            </select>
          </span>


          {isClassTeacher ?
            <span className={`${isClassTeacher ? 'flex' : 'hidden'} flex-col gap-y-2.5 items-start justify-center w-full`}>
              <span className='text-base font-semibold'>Assign a class</span>
              <select onChange={(ele) => setClassTeacher(ele.currentTarget.value)} value={classTeacher} className='outline-none px-3 py-1.5 border-2 border-solid border-black bg-transparent rounded-md w-full'>
                ({
                  classes ?
                    classes.map((std, index) => {
                      return (<option key={std.classId + index} value={std.classId} selected>{std.className}</option>)
                    })
                    :
                    <option value='noClass'>There is no class</option>
                })
              </select>
            </span>
            :
            <></>
          }


          <span className='flex items-center justify-center mt-2.5 w-full'>
            <button className='py-1.5 bg-pink-700 hover:bg-pink-500 px-5 text-white font-semibold rounded-md' onClick={() => AddTeacher()}>
              Add
            </button>
          </span>

        </span>

      </div>
    </div>
  )
}

export default AddTeacher