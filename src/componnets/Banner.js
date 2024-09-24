import React from 'react'
import webLogo from '../design/images/Web-logo 1.png';

export default function Banner() {
  return (
    <div className='w-full h-[300px] mt-8 flex justify-center'>
        <div className='w-[71%] rounded-3xl flex justify-center bg-gradient-to-tr from-[#C3F6B6] via-[#50A7F4] to-[#5664C4]'>
            <img src={webLogo} alt='Web-logo' className='p-6'/>
        </div>
    </div>
  )
}
