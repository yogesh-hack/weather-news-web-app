import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen p-3 bg-transparent shadow w-15">
        <div className="space-y-3">
          <div className="flex items-center">
            <h2 className="text-xl font-bold text-white">🌤️</h2>
          </div>
          <div className="flex-1 items-center">
            <ul className="pt-10 space-y-10 text-sm">
              <li className="rounded-sm hover:bg-yellow-500 hover:rounded-xl hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out">
                <Link
                  to="/"
                  title='Home'
                  className="flex-col p-1 rounded-md"
                >
                  
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-auto text-gray-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span className='p-1 text-white'>Home</span>  
                </Link>
              </li>
              <li className="rounded-sm hover:bg-yellow-500 hover:rounded-xl hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out">
                <Link
                  to="/login"
                  title='Logout'
                  className="flex-col items-center p-1 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-auto text-gray-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                  <span className='p-1 text-white'>Logout</span>  
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>    
  )
}

export default Sidebar