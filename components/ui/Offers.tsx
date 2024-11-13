import { foodOffers } from '@/constants'
import Image from 'next/image'
import React from 'react'
import { Avatar, AvatarImage } from './avatar'
import { Star } from 'lucide-react'

const Offers = () => {
  return (
    <section className='min-h-[90vh] w-full mt-[-12rem] md:mt-0'>
     <div className='container px-4 md:px-8'>
      <div className='flex flex-col items-center md:space-y-[7rem] space-y-2'>
       <div className='flex flex-col items-center'>
        <h1 className='header-3'>Today <span className='text-primary'> special</span> offers</h1>
        <p className='text-12 md:text-16 w-[] md:w-[44rem] text-center'>
        Indulge in your favorite dishes at unbeatable prices! Our exclusive offers are designed to satisfy your cravings and save you money. Enjoy!  
        </p>
       </div>  
       <div className='flex flex-col md:flex-row gap-4 items-center justify-center'>
        {foodOffers.map((items) => (
            <div key={items.id} className='cards'>
             <div className='flex-col items-center'>
              <Image src='/assets/ellipse.svg' alt='ellipse' className='rotate-180 w-[12rem] md:w-[12rem] md:h-[13rem] relative top-[1rem] md:top-0' width={80} height={40} />
              <Image src={items.image} alt='food' width={80} height={40} className='relative w-[10rem] mt-[-1rem] bottom-[9rem] md:bottom-[10.5rem] mx-[18px]' />
             </div> 
             <div className='flex items-center relative top-[-8rem] md:top-[-9rem] space-x-4 justify-center '>
    {/* Avatars and ratings */}
              <div className='flex items-center justify-center relative'>
                <Avatar>
                 <AvatarImage src={items.avatar}/>
                </Avatar>
                <Avatar className='mx-[-20px]'>
                 <AvatarImage src={items.avatar2}/>
                </Avatar>
                <Avatar>
                 <AvatarImage src={items.avatar3}/>
                </Avatar>
              </div>
              <Star className='text-yellow-500'/>
              <p className='text-12 md:text-16 font-medium'>({items.ratings})</p>
             </div>
             <div className='flex flex-col items-center relative top-[-7rem] space-y-4 '>
              <p className='text-primary font-semibold text-18'>
              {items.foodTitle}
              </p>   
              <p className='font-normal text-center w-[10rem] md:w-[12rem] text-14'>
              {items.foodDescription} 
              </p>   
             </div>
            </div>
        ))}
       </div>
      </div>
     </div>  
    </section>
  )
}

export default Offers