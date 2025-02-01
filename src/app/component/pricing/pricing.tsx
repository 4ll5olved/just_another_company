import React from 'react'
import PriceItem from '../price/price'

export default function Pricing () {
  return (
      <div className='pt-16 pb-16 bg-slate-300'>
          <h1 className='text-center text-2xl text-orange-700 font-bold'>Choose our plan</h1>
          <p className='text-center text-slate-600 mt-4 w-[90%] sm:w-[70%] mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, est numquam doloremque itaque aperiam quidem ratione, hic blanditiis eos vitae voluptate beatae distinctio? Quia, unde?</p>
          <div className=' w-[80%] mx-auto mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center'>
        <PriceItem
          time= '1 month'
          price= '$29'
          desc= 'Starter package for solo founders'
        />
        <PriceItem
          time={'6 months'}
          price={'$149'}
          desc={'Growth package for small teams'}
        />
        <PriceItem
          time={'1 year'}
          price={'$299'}
          desc={'Enterprise package for large teams'}
        />
          </div>
      </div>
  )
}
