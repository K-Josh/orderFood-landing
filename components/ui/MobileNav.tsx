import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import { navLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { Button } from './button'

const MobileNav = () => {
  return (
 <section className='container'>
   <Sheet>
    <SheetTrigger className='my-2'>
      <Image src='/assets/menu.svg' 
        alt='logo' width={15} 
       height={30} className={cn('brightness-[1] invert-0 sm:hidden')} />
    </SheetTrigger>
    <SheetContent side="left" className='bg-white border-none'>
     <SheetTitle>
       <Image src='/assets/lightLogo.svg' alt='logo' width={50} height={30} className='-my-4' />
     </SheetTitle>

      <div className='mobilenav-sheet space-y-4 my-8'>
       {navLinks.map((nav, index) => {
           return (
            <nav className='text-12 pt-2 hover:text-primary hover:text-semibold' key={index}>
             <div>
              <p>{nav.link}</p>
             </div>
            </nav>
          )
        })}
        <div>
         <Button className='btn'>Download App</Button>
        </div>
      </div>
     </SheetContent>
   </Sheet>
 </section>
  )
}

export default MobileNav