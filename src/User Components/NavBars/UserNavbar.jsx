import React from 'react'
import { slideRight } from '../SideBars/UserDashboardSidebar'


function UserNavbar() {
    return (
        <div className='flex sticky top-0 items-center w-[100%] justify-between py-1 px-3.5 sm:px-5 xl:justify-between' style={{ backgroundColor: 'rgb(2 13 30)', borderBottom: '1px solid rgb(12 32 63)' }}>
            <span className='flex items-center gap-3 justify-center py-2 xl:hidden'>
                <i onClick={() => slideRight()} className="fa-sharp text-2xl text-cyan-100 fa-solid fa-bars cursor-pointer"></i>
                <span className='flex items-center justify-center py-1 cursor-pointer'>
                    <h3 className='text-2xl text-cyan-100 text-100'>LOGO</h3>
                </span>
            </span>

            <span className='flex-1 flex justify-center px-4'>
                <input
                    type='text'
                    placeholder='Search...'
                    className='w-full p-2 rounded'
                    style={{ backgroundColor: '#2b2b2b', color: 'white' }}
                />
            </span>

            <span className='flex items-center justify-center gap-4 sm:gap-12'>
                <span className='flex items-center justify-center gap-2 cursor-pointer'>
                    <span className=' h-12 w-12 overflow-hidden' style={{ borderRadius: '50%' }}>
                        <img className='h-full w-full object-cover' src="https://e7.pngegg.com/pngimages/136/22/png-clipart-user-profile-computer-icons-girl-customer-avatar-angle-heroes-thumbnail.png" alt="loading error" />
                    </span>

                    <span className='hidden flex-col items-center justify-center gap-0.5 sm:flex'>
                        <i className='text-sm text-blue-500'>Administrator</i>
                        <h5 className='text-md'>User Name</h5>
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

export default UserNavbar
