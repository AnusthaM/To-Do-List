import React from 'react'
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='w-full shadow-lg'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-16'>

                {/* Logo Section */}
                <div className='flex items-center space-x-3'>
                    <h1 className='text-2xl font-bold tracking-tight'>Google Keeper</h1>
                </div>

                <div className='flex gap-3'>
                  <input type='search' placeholder='Search...' className='border px-4 py-2 rounded'></input>
                  <button className='border-0 px-3 rounded text-center bg-gray-300 cursor-pointer'><FaSearch /></button>
                </div>
            </div>
        </div>
    </nav>  
  )
}

export default Navbar