import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// react-icons
import { MdOutlineKeyboardArrowDown as DownArrow, MdKeyboardArrowRight as RightArrow } from "react-icons/md";
import { FaUser as Teachers } from "react-icons/fa";
import { FaUserGroup as Students } from "react-icons/fa6";
import { TfiAnnouncement as Announcements } from "react-icons/tfi";
import { MdClass as Classes } from "react-icons/md";
import { GiProgression as Overview } from "react-icons/gi";
import { PiExamFill as Exams } from "react-icons/pi";

import Dashboard from '../Dashboard';
import AllTeachers from '../Teachers/AllTeachers';
import AddTeacher from '../Teachers/AddTeacher';
import EditTeacher from '../Teachers/EditTeacher';
import DeleteTeacher from '../Teachers/DeleteTeacher';
import AddClass from '../Classes/AddClass';
import EditClass from '../Classes/EditClass';
import DeleteClass from '../Classes/DeleteClass';
import AllClass from '../Classes/AllClass';
import AllStudents from '../Students/AllStudents';
import EditStudent from '../Students/EditStudent';
import AddStudent from '../Students/AddStudent';
import DeleteStudent from '../Students/DeleteStudent';
import { tab } from '@testing-library/user-event/dist/tab';
import AddTimeTable from '../TimeTable/AddTimeTable';
import TimeTable from '../TimeTable/TimeTable';


export var slideRight;

function AdminDashboardSidebar(props) {
    const { setAdminComponent } = props;
    const [expand, setExpand] = useState(false)
    const [showSubOptionsForClasses, setShowSubOptionsForClasses] = useState(false)
    const [showSubOptionsForTeachers, setShowSubOptionsForTeachers] = useState(false)
    const [showSubOptionsForStudents, setShowSubOptionsForStudents] = useState(false)
    const [showSubOptionsForTimeTable, setShowSubOptionsForTimeTable] = useState(false)

    const navigate = useNavigate()

    const handleComponent = (component) => {
        if (component === 'dashboard') {
            setAdminComponent(<Dashboard />)
        }
        else if (component === 'teachers') {
            setAdminComponent(<AllTeachers />)
            setShowSubOptionsForTeachers(!showSubOptionsForTeachers)
        }
        else if (component === 'classes') {
            setAdminComponent(<AllClass />)
            setShowSubOptionsForClasses(!showSubOptionsForClasses)
        }
        else if (component === 'students') {
            setAdminComponent(<AllStudents />)
            setShowSubOptionsForStudents(!showSubOptionsForStudents)
        }
        else if (component === 'payment') {
            setAdminComponent(<Dashboard />)
        }
        else if (component === 'settings') {
            setAdminComponent(<Dashboard />)
        }
        else if (component === 'timetable') {
            setAdminComponent(<TimeTable />)
            setShowSubOptionsForTimeTable(!showSubOptionsForTimeTable)
        }
    }

    return (
        <div className={`${expand ? 'w-auto' : 'w-80 xl:w-96'} flex fixed left-0 z-10 top-0 h-full flex-col items-start ease-in-out duration-1000 -translate-x-96 justify-start xl:static xl:translate-x-0`} style={{ backgroundColor: '#020d1e', borderRight: '1px solid rgb(12 32 63)' }}>
            <span className='flex items-center gap-3 justify-start py-2 px-4 w-full' style={{ borderBottom: '1px solid rgb(12 32 63)' }}>
                <i onClick={() => setExpand(!expand)} className="fa-sharp text-2xl text-cyan-100 hidden fa-solid fa-bars cursor-pointer xl:block"></i>
                <i onClick={() => setExpand(!expand)} className="fa-sharp fa-solid text-2xl text-cyan-100 cursor-pointer fa-arrow-left-long xl:hidden"></i>
                <span className='flex items-center justify-center py-1 cursor-pointer'>
                    <h3 className={`${expand ? 'hidden' : 'inline-block'} text-2xl text-cyan-100 text-100`}>LOGO</h3>
                </span>
            </span>

            <ul className='flex items-center justify-center mt-3 w-full flex-col px-4 py-2'>
                {/* dashboard */}
                <li className=' flex cursor-pointer items-center mb-4 justify-between w-full text-cyan-100' onClick={() => handleComponent('dashboard')}>
                    <a className='flex items-center justify-center gap-2.5'>
                        <Overview className='text-white text-2xl mr-1' />
                        <b className={`${expand ? 'hidden' : 'inline-block'} tracking-wide font-normal text-md`} >
                            Overview
                        </b>
                    </a>
                </li>

                {/* teachers */}
                <li className={`${showSubOptionsForTeachers ? 'mb-0.5' : 'mb-4'} flex flex-col cursor-pointer items-start justify-between w-full text-cyan-100`} onClick={() => handleComponent('teachers')}>
                    <a className='relative flex items-center justify-center gap-2.5'>
                        <Teachers className='text-white text-2xl mr-1' />
                        <b className={`${expand ? 'hidden' : 'inline-block'} tracking-wide font-normal text-md`} >
                            Teachers
                        </b>
                    </a>
                    {/* <RightArrow className={`${expand ? 'hidden' : 'inline-block'} ${showSubOptionsForTeachers ? 'rotate-90' : 'rotate-0'}  absolute text-white text-2xl font-bold right-1.5 top-auto`} /> */}
                </li>
                <span className={`${showSubOptionsForTeachers ? 'flex' : 'hidden'} relative flex-col mb-4 gap-y-1.5 text-gray-300 px-4 items-start justify-center w-full`}>
                    {/* <a className='cursor-pointer text-sm pl-4' onClick={() => setAdminComponent(<EditTeacher />)}>Change Teacher</a>
                    <a className='cursor-pointer text-sm pl-4' onClick={() => setAdminComponent(<DeleteTeacher />)}>Delete Teacher</a> */}
                </span>

                {/* classes */}
                <li className={`${showSubOptionsForClasses ? 'mb-0.5' : 'mb-4'} flex flex-col cursor-pointer items-start justify-between w-full text-cyan-100`} onClick={() => handleComponent('classes')}>
                    <a className='relative flex items-center justify-center gap-2.5'>
                        <Classes className='text-white text-2xl mr-1' />
                        <b className={`${expand ? 'hidden' : 'inline-block'} tracking-wide font-normal text-md`} >
                            Classes
                        </b>
                    </a>
                    {/* <RightArrow className={`${expand ? 'hidden' : 'inline-block'} ${showSubOptionsForClasses ? 'rotate-90' : 'rotate-0'} absolute text-white text-2xl font-bold right-1.5 top-auto`} /> */}
                </li>
                <span className={`${showSubOptionsForClasses ? 'flex' : 'hidden'} relative flex-col mb-4 gap-y-1.5 text-gray-300 px-4 items-start justify-center w-full`}>
                    {/* <a className='cursor-pointer text-sm pl-4' onClick={() => setAdminComponent(<AddClass />)}>Add Class</a>
                    <a className='cursor-pointer text-sm pl-4' onClick={() => setAdminComponent(<EditClass />)}>Edit Class</a>
                    <a className='cursor-pointer text-sm pl-4' onClick={() => setAdminComponent(<DeleteClass />)}>Delete Class</a> */}
                </span>

                {/* students */}
                <li className={`${showSubOptionsForStudents ? 'mb-0.5' : 'mb-4'} flex flex-col cursor-pointer items-start justify-between w-full text-cyan-100`} onClick={() => handleComponent('students')}>
                    <a className='relative flex items-center justify-center gap-2.5'>
                        <Students className='text-white text-2xl mr-1' />
                        <b className={`${expand ? 'hidden' : 'inline-block'} tracking-wide font-normal text-md`} >
                            Students
                        </b>
                    </a>
                    <RightArrow className={`${expand ? 'hidden' : 'inline-block'} ${showSubOptionsForStudents ? 'rotate-90' : 'rotate-0'} absolute text-white text-2xl font-bold right-1.5 top-auto`} />
                </li>
                <span className={`${showSubOptionsForStudents ? 'flex' : 'hidden'} relative flex-col mb-4 gap-y-1.5 text-gray-300 px-4 items-start justify-center w-full`}>
                    <a className='cursor-pointer text-sm pl-4 w-full' onClick={() => setAdminComponent(<AddStudent />)}>Add Student</a>
                    {/* <a className='cursor-pointer text-sm pl-4' onClick={() => setAdminComponent(<EditStudent />)}>Edit Student</a>
                    <a className='cursor-pointer text-sm pl-4' onClick={() => setAdminComponent(<DeleteStudent />)}>Delete Student</a> */}
                </span>

                {/* announcenments */}
                <li className=' flex cursor-pointer items-center justify-between w-full mb-4 text-cyan-100' onClick={() => handleComponent('payments')}>
                    <a className='flex items-center justify-center gap-2.5'>
                        <Announcements className='text-white text-2xl mr-1' />
                        <b className={`${expand ? 'hidden' : 'inline-block'} tracking-wide font-normal text-md`} >
                            Announcements
                        </b>
                    </a>
                </li>

                {/* exams */}
                <li className=' flex cursor-pointer items-center justify-between mb-4 w-full text-cyan-100' onClick={() => handleComponent('settings')}>
                    <a className='flex items-center justify-center gap-2.5'>
                        <Exams className='text-white text-2xl mr-1' />
                        <b className={`${expand ? 'hidden' : 'inline-block'} tracking-wide font-normal text-md`} >
                            Exams
                        </b>
                    </a>
                </li>

                {/* {time-table} */}
                <li className=' flex cursor-pointer items-center justify-between w-full text-cyan-100' onClick={() => handleComponent('timetable')}>
                    <a className='flex items-center justify-center gap-2.5'>
                        <Exams className='text-white text-2xl mr-1' />
                        <b className={`${expand ? 'hidden' : 'inline-block'} tracking-wide font-normal text-md`} >
                            Time-Table
                        </b>
                    </a>
                    <RightArrow className={`${expand ? 'hidden' : 'inline-block'} ${showSubOptionsForTimeTable ? 'rotate-90' : 'rotate-0'} absolute text-white text-2xl font-bold right-1.5 top-auto`} />
                </li>
                <span className={`${showSubOptionsForTimeTable ? 'flex' : 'hidden'} relative flex-col mb-4 gap-y-1.5 text-gray-300 px-4 items-start justify-center w-full`}>
                    <a className='cursor-pointer text-sm pl-4 w-full' onClick={() => setAdminComponent(<AddTimeTable />)}>Add TimeTable</a>
                    {/* <a className='cursor-pointer text-sm pl-4' onClick={() => setAdminComponent(<EditStudent />)}>Edit Student</a>
                    <a className='cursor-pointer text-sm pl-4' onClick={() => setAdminComponent(<DeleteStudent />)}>Delete Student</a> */}
                </span>
            </ul>
        </div>
    )
}

export default AdminDashboardSidebar