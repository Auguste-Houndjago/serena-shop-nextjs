import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import { SearchBox } from './SearchBox'
import LordIcon from '../ui/LordIcon'

const Header = () => {
  return (
    <header>
      <nav>
        <div className="navbar border border-gray-500 hover:border-y-yellow-400 shadow-gray-400 justify-between bg-base-300">
          <div>
            <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <Link href="/" className="btn btn-ghost text-lg">
              Serena Shop
            </Link>
          </div>


          <div className='hidden lg:flex rounded-xl border p-1 gap-2 flex-row justify-center items-center border-transparent'>
          <Link className='translate-y-1' href="/"> 
          <LordIcon 
        src="https://cdn.lordicon.com/eiekfffz.json"
        trigger="hover"
        size=""
        
       />
      <script src="https://cdn.lordicon.com/lordicon.js" async></script>
       </Link>
          </div>

          <Menu />
        </div>
        <div className="bg-base-300 block md:hidden text-center pb-3">
          <SearchBox />
        </div>
      </nav>
    </header>
  )
}

export default Header
