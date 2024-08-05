import React, { useEffect, useState } from 'react'
import Eye from './Eye';

function Eyes() {
  return (
    <div className='w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-speed="-.6" className="relative w-full h-full  bg-cover bg-center bg-[url('https://cdn.pixabay.com/photo/2016/12/29/18/44/background-1939128_1280.jpg')]">
            <div className="absolute flex gap-10 w-1/3 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                <Eye/>
                <Eye/>
            </div>
        </div>
        

    </div>
  )
}

export default Eyes