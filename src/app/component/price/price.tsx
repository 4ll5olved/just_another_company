import React from 'react'

interface Item  {
    time: string,
    price: string,
    desc: string
}
export default function PriceItem ({time, price, desc}:Item)  {
  return (
      <div className='bg-white rounded-lg p-8 relative border-t-4 border-red-400'>
          <h1 className="text-sky-500 font-bold text-xl">{time} Membership</h1>
          <p className="mt-4 text-slate-500 font-medium">{desc}</p>
          <div className="mt-8">
              <div className="text-slate-700 font-semibold  text-lg">
                  <span className='text-4xl font-bold text-black'>${price}</span>
              </div>
          </div>
          <div className="mt-12">
          <a href="#_" className="relative px-10 py-3 font-medium text-white transition duration-300 bg-green-400 rounded-md hover:bg-green-500 ease">
    <span className="absolute bottom-0 left-0 h-full -ml-2">
        <svg viewBox="0 0 487 487" className="w-auto h-full opacity-100 object-stretch" xmlns="http://www.w3.org/2000/svg"><path d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z" fill="#FFF" fill-rule="nonzero" fill-opacity=".1"></path></svg>
    </span>
    <span className="absolute top-0 right-0 w-12 h-full -mr-3">
        <svg viewBox="0 0 487 487" className="object-cover w-full h-full" xmlns="http://www.w3.org/2000/svg"><path d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z" fill="#FFF" fill-rule="nonzero" fill-opacity=".1"></path></svg>
    </span>
    <span className="relative">Purchase</span>
</a>
          </div>
    </div>
  )
}
