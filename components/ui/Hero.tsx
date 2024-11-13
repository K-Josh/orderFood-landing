import Image from 'next/image'
import React from 'react'
import { Input } from './input'
import { Button } from './button'
import { PlayIcon } from 'lucide-react'

const Hero = () => {
  return (
    <section className='hero pt-8 pb-20'>
      <div className='md:w-[40rem] w-[14rem] md:h-[40rem] h-[14rem] rounded-full blur-[90rem] opacity-45 bg-gradient-to-t from-[#F54748] to-[#F54748] absolute -z-10 right-[2rem] md:right-[10rem] md:top-[-4rem] top-[2rem]' />
       <div className='md:w-[50rem] w-[16rem] md:h-[50rem] h-[16rem] rounded-full blur-[50rem] bg-[#FDC55E] opacity-75 absolute -z-10 md:right-[-28rem] right-[2rem] top-[15rem] md:top-[2rem]' />
      <div className='md:container mx-auto px-1 md:px-8'>
        <div className='flex w-full md:justify-between '>
        <div className='flex-col'>
  {/* people and orange */}
          <div className='flex justify-between'>
            <div className='text-12 md:text-14 gap-2 bg-primary/20 flex items-center space-x-2 p-2 h-[26px] cursor-pointer rounded-full'>
              <Image src='/assets/love.svg' alt='icon' width={20} height={20} />
              People Trust us
            </div>
            <Image src='/assets/orange.svg' alt='orange' width={50} height={30} className='relative top-[3rem]' />  
          </div>
  {/* text and input */}
          <div className='flex-col space-y-4'>
          <p className='header-2 md:leading-normal font-extrabold'>
            We&apos;re <span className='text-primary'>Serious</span> For <span className='text-primary'>Food</span> &  
            <span className='flex-col'>
            <span className='text-secondary'> Delivery</span>.
            <Image src='/assets/decore1.svg' alt='decore' width={130} height={40} className='md:w-[20rem] md:relative md:mx-[5rem]' />
            </span> 
          </p>  
            <p className='text-12 md:text-20 text-gray-800 font-medium w-[14rem] md:w-[26rem]'>
              Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.
            </p>
            <Input className='rounded-full input-class' placeholder='Search food' type='search'/>
              {/* <Image src='/assets/searchIcon.svg' alt='search' width={30} height={30} className='bg-secondary -mx-10 rounded-full p-1' />  */}
            <div className='flex items-center gap-4'>
            <Button className='btn'>Download App</Button>
              <Button className='btn-text' variant='ghost'>
                <span className='rounded-full bg-light drop-shadow-md p-1 shadow-button'><PlayIcon className='text-primary'/></span> watch video
              </Button> 
            </div>
          </div>
        </div> 

  {/* image */}
        <div className='hidden md:block flex-col -z-10'>
          <div className='relative'>
            <div className='bg-[#F54748] rounded-full md:w-[25rem] md:h-[25rem] absolute md:top-[2.5rem] md:my-[2rem] md:right-[8.4rem]'/>
            <Image src='/assets/fire.svg' alt='fire' width={30} height={20} className='absolute md:top-[-3.5rem] md:right-[19.5rem]' />
            <div className='flex gap-4'>
              <div className='relative flex gap-2 p-1 rounded-md bg-light mx-[-2rem] top-[5rem]'>
                <Image src='/assets/pizza.svg' alt='pizza' width={70} height={30} />
                <div>
                  <p className='font-semibold text-16'>Italian Pizza</p>
                  <p>$9,5</p>
                </div>
              </div>
            <Image src='/assets/hero.svg' alt='hero' width={350} height={50} className='absolute md:top-[-1.5rem] md:left-[3.8rem]' />
            <div className='relative flex gap-2 p-1 rounded-md bg-light mx-[8rem] h-[3rem] top-[10rem]'>
                <Image src='/assets/emoji.svg' alt='pizza' width={50} height={30} />
                <div>
                  <p className='font-semibold text-16'>Happy Customer</p>
                  <p className='text-12 font-semibold'>
                    4.9
                    <span className='text-gray-400 font-normal'> (1.2k reviews)</span>
                  </p>
                </div>
              </div>
            </div>
            <div className='box'>
              <Image src='/assets/ellipse.svg' alt='ellipse' width={600} height={200} className='ellipse' />
              <Image src='/assets/mint.svg' alt='mint' width={200} height={200} className='absolute left-[29rem] top-[12rem]' />
              <Image src='/assets/grass.svg' alt='mint' width={180} height={200} className='absolute left-[19rem] top-[-2rem]' />
            </div>
          </div>
          <div className='flex relative gap-4 md:mt-[-14rem]'>
            <Image src='/assets/food1.svg' alt='food' width={160} height={50} className='md:mx-[-5rem] md:mt-[-18rem]' />
            <Image src='/assets/food2.svg' alt='food' width={130} height={50} className='md:mt-[-2rem] md:mx-[2rem]'/>
            <Image src='/assets/food3.svg' alt='food' width={150} height={50} className='md:mt-[-3rem] md:mx-[3rem]'/>
            <Image src='/assets/food4.svg' alt='food' width={130} height={50} className='absolute top-[-12rem] left-[24rem]'/>
          </div>
        </div>
      </div>
      </div>  
    </section>
  )
}
export default Hero