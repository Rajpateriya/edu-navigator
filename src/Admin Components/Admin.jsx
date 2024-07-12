import React, { useContext, useState ,createContext } from 'react'
import AdminNavbar from './NavBars/AdminNavbar'
import AdminDashboardSidebar from './SideBars/AdminDashboardSidebar'
import Dashboard from './Dashboard'
import { MyContext } from './MyContext'
import { SpinnerCircular } from 'spinners-react'

function Admin() {

    const [AdminComponent, setAdminComponent] = useState(<Dashboard/>)
    const { students, teachers, emptyPeriods } = createContext(MyContext)

    return (
        <>
            <section className='flex items-center justify-center '>
                <div className='flex h-screen relative w-full items-center justify-between'>
                    <AdminDashboardSidebar setAdminComponent={setAdminComponent} />

                    <div className='flex flex-col items-center justify-start overflow-y-scroll h-full w-full' style={{ backgroundColor: '#021025fc' }}>
                        {/* <div className='w-6/12 bg-red-600' style={{height: '2000px'}}></div> */}
                        <AdminNavbar />

                        {students && teachers && emptyPeriods ?
                            AdminComponent
                            :
                            <span className='bg-black flex items-center justify-center h-screen w-full'>
                                {/* <SpinnerCircular color='#ae0790' size={150} /> */}
                            </span>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Admin