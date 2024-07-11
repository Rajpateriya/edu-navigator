import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../MyContext'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import axios from 'axios'
import { IoMdCloseCircle as Close } from "react-icons/io";

function Dashboard() {
    const { students, teachers, emptyPeriods } = useContext(MyContext)

    const [unAssignedTeachersModal, setUnassignedTeachersModal] = useState(false)
    const [availableTeachers, setAvailableTeachers] = useState(null)

    const fetchAvailableTeachers = async () => {
        try {
            const response = await axios.get(`http://192.168.1.2:8080/api/timetables/available-teachers?schoolId=af7ede72-5039-4b89-b1db-d14171a1ddb7&periodId=afe55250-af8a-48f0-9e5b-699581ee78c0`)
            setAvailableTeachers(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleUnAssignedTeachers = async () => {
        try {
            
        } catch (error) {
            
        }
    }

    useEffect(() => {
        fetchAvailableTeachers()
    }, [])

    return (
        <div className='flex items-center justify-center w-full'>
            <div className='flex flex-col gap-y-8 items-center justify-center py-6 px-3 sm:px-6 md:px-8 w-full'>

                <div className='grid grid-cols-1 gap-x-5 gap-y-5 items-center justify-start w-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    <span className='flex flex-col gap-y-2 items-start justify-center py-3 px-3.5 rounded-2xl text-white border-2 border-solid border-white bg-[#020d1e] w-full'>
                        {students ?
                            <span className='text-5xl'>{students.length} </span>
                            :
                            <Skeleton className='text-5xl bg-red-500' />
                        }
                        <span className='text-2xl'>Total Students</span>
                    </span>

                    <span className='flex flex-col gap-y-2 items-start justify-center py-3 px-3.5 rounded-2xl text-white border-2 border-solid border-white bg-[#020d1e] w-full'>
                        {teachers ?
                            <span className='text-5xl'>{teachers.length} </span>
                            :
                            <Skeleton className='text-5xl bg-red-500' />
                        }
                        <span className='text-2xl'>Total Teachers</span>
                    </span>

                    <span className='flex flex-col gap-y-2 items-start justify-center py-3 px-3.5 rounded-2xl text-white border-2 border-solid border-white bg-[#020d1e] w-full'>
                        <span className='text-5xl'>5</span>
                        <span className='text-2xl'>Teachers Absents</span>
                    </span>

                    <span className='flex flex-col gap-y-2 items-start justify-center py-3 px-3.5 rounded-2xl text-white border-2 border-solid border-white bg-[#020d1e] w-full'>
                        {emptyPeriods ?
                            <span className='text-5xl'>{emptyPeriods.length} </span>
                            :
                            <Skeleton className='text-5xl bg-red-500' />
                        }
                        <span className='text-2xl'>Empty Periods</span>
                    </span>
                </div>

                <span className='flex flex-col items-center gap-y-3 justify-center w-full'>
                    <span className='text-2xl font-semibold w-full text-left text-white'>Unassigned Periods</span>
                    <span className="overflow-x-auto w-full rounded-2xl">
                        <table className="w-full bg-white border border-gray-200">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b">Period No.</th>
                                    <th className="py-2 px-4 border-b">Teacher Name</th>
                                    <th className="py-2 px-4 border-b">Class</th>
                                    <th className="py-2 px-4 border-b">Subject</th>
                                    <th className="py-2 px-4 border-b">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {emptyPeriods ? emptyPeriods.map((emptypPeriod, index) => (
                                    <tr key={emptyPeriods.id + index} className={`text-center`}>
                                        <td className="py-2 text-left px-4 border-b">{emptypPeriod.periodNumber}</td>
                                        <td className="py-2 text-left px-4 border-b">{emptypPeriod.teacherName}</td>
                                        <td className="py-2 text-left px-4 border-b">{emptypPeriod.className}</td>
                                        <td className="py-2 text-left px-4 border-b">{emptypPeriod.subjectName}</td>
                                        <td className="py-2 text-left px-4 border-b" onClick={() => setUnassignedTeachersModal(!unAssignedTeachersModal)}>
                                            <button className="bg-green-500 text-white font-bold py-1 px-2 rounded">
                                                Assign
                                            </button>
                                        </td>
                                    </tr>
                                ))
                                    :
                                    <tr className='w-full text-center py-2.5 px-3'>
                                        <td></td>
                                        <td></td>
                                        <td className='text-left'>Loading Empty Periods...</td>
                                        <td></td>
                                    </tr>}
                            </tbody>
                        </table>
                    </span>
                </span>

                <span className={`${unAssignedTeachersModal ? 'flex' : 'hidden'} py-12 bg-[#000000bd] z-10 fixed items-center justify-center top-0 left-0 h-screen w-screen`}>
                    <Close className='absolute text-white cursor-pointer text-3xl right-10 top-5 md:text-5xl' onClick={() => setUnassignedTeachersModal(false)}/>
                    {availableTeachers ?
                        <span className="relative overflow-x-auto w-full max-w-2xl max-h-screen overflow-y-scroll rounded-2xl">
                            <table className="w-full bg-white border border-gray-200">
                                <thead>
                                    <tr>
                                        <th className="py-2 px-4 border-b">Name</th>
                                        <th className="py-2 px-4 border-b">Email</th>
                                        <th className="py-2 px-4 border-b">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {availableTeachers ? availableTeachers.map((teacher, index) => (
                                        <tr key={teacher.teacherId + index} className={`text-center`}>
                                            <td className="py-2 text-left px-4 border-b">{teacher.teacherName}</td>
                                            <td className="py-2 text-left px-4 border-b">{teacher.email}</td>
                                            <td className="py-2 text-left px-4 border-b">
                                                <button className="bg-green-500 text-white font-bold py-1 px-2 rounded">
                                                    Assign
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                        :
                                        <tr className='w-full text-center py-2.5 px-3'>
                                            <td></td>
                                            <td></td>
                                            <td className='text-left'>Loading Students...</td>
                                            <td></td>
                                        </tr>}
                                </tbody>
                            </table>
                        </span>
                        :
                        <></>
                    }
                </span>
            </div>
        </div>
    )
}

export default Dashboard