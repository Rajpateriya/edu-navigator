import React, { useContext, useState } from 'react'

import UserDashboardSidebar from '../Components/SideBars/UserDashboardSidebar'
import Dashboard from '../Components/User Components/Dashboard'
import { MyContext } from '../Components/MyContext'
import { SpinnerCircular } from 'spinners-react'
import UserNavbar from '../Components/NavBars/UserNavbar'
import TeacherProfile from '../Components/User Components/Teachers/TeacherProfile'
import StudentProfile from '../Components/User Components/Students/StudentProfile'

function User() {

    const [UserComponent, setUserComponent] = useState()
    const { students, teachers } = useContext(MyContext)

    return (
        <>
            <section className='flex items-center justify-center '>
                <div className='flex h-screen relative w-full items-center justify-between'>
                    <UserDashboardSidebar setUserComponent={setUserComponent} />

                    <div className='flex flex-col items-center justify-start overflow-y-scroll h-full w-full' style={{ backgroundColor: '#021025fc' }}>
                        {/* <div className='w-6/12 bg-red-600' style={{height: '2000px'}}></div> */}
                        <UserNavbar />

                        {(students && teachers) || true ?
                            UserComponent
                            :
                            <span className='bg-black flex items-center justify-center h-screen w-full'>
                                <SpinnerCircular color='#ae0790' size={150} />
                                
                            </span>
                            
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default User