import React from 'react'
import { slideRight } from '../SideBars/AdminDashboardSidebar'


function AdminNavbar() {
    return (
        <div className='flex items-center w-full justify-between py-1 px-3.5 sm:px-5 xl:justify-end' style={{backgroundColor: 'rgb(2 13 30)', borderBottom: '1px solid rgb(12 32 63)'}}>
            {/* <span className='flex items-center gap-3 justify-center py-2 xl:hidden'>
                <i onClick={() => slideRight()} className="fa-sharp text-2xl text-cyan-100 fa-solid fa-bars cursor-pointer"></i>
                <span className='flex items-center justify-center py-1 cursor-pointer'>
                    <h3 className='text-2xl text-cyan-100 text-100'>LOGO</h3>
                </span>
            </span> */}

            <span className='flex items-center justify-center gap-4 sm:gap-12 md:'>
                <span className='flex items-center justify-center gap-2 cursor-pointer'>
                    <span className=' h-12 w-12 overflow-hidden' style={{ borderRadius: '50%' }}>
                        <img className='h-full w-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnwguLPh2SY6Nfqwcz1Aw_3cSiElE3dQxNbQ&s" alt="loading error" />
                    </span>

                    <span className='hidden flex-col items-center justify-center gap-0.5 sm:flex'>
                        <i className='text-sm text-blue-500'>Administrator</i>
                        <h5 className='text-md'>Admin Name</h5>
                    </span>
                </span>

                <span className='flex relative items-center justify-center cursor-pointer'>
                    <i className="fa-solid text-lg fa-bell"></i>
                    <i className=" absolute top-0 -right-1 fa-sharp text-xs text-blue-500 fa-solid fa-circle"></i>
                </span>
            </span>
        </div>
    )
}

export default AdminNavbar