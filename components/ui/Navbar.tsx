import Image from 'next/image'
import React from 'react'
import MobileNav from './MobileNav'
import { navLinks } from '@/constants'
import { Button } from './button'

  
const Navbar = () => {
  return (
 <section className='p-4 sticky top-0'>
   <div className='flex items-center justify-between'>
     <div>
      <Image src='/assets/lightLogo.svg' alt='logo' width={70} height={80} />  
     </div>
      <div className=' hidden md:flex items-center space-x-8'>
       {navLinks.map((nav, index) => {
           return (
            <nav className='md:text-16 hover:text-primary hover:text-semibold cursor-pointer whitespace-nowrap' key={index}>
             <div>
              <p>{nav.link}</p>
             </div>
             </nav>
          )
        })}
        <div>
          <Button className='rounded-full md:text-16 text-light hover:bg-secondary hover:text-dark'>Download App</Button>
        </div>
      </div>

 {/* mobile */}
      <div className='md:hidden'>
       <MobileNav />
      </div>
    </div>
  </section>
  )
}

export default Navbar