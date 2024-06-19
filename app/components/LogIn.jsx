import Link from 'next/link'
import React from 'react'

function LogIn() {
  return (
    <div className='text-white w-[270px] flex justify-evenly mt-10px md:mt-[0px]'>
        <Link href='https://download.eternalslots.com/affiliate/remote/aiddownload.asp?casinoID=1084&gAID=135839&subGid=0&bannerID=0' target='_blank'>
            <button className='border border-solid border-loginColor rounded-buttonRadius flex items-center justify-center w-[120px] h-[40px] hover:bg-white hover:border-white hover:text-loginColor'>LOGIN</button>
        </Link>
        <Link href='https://download.eternalslots.com/affiliate/remote/aiddownload.asp?casinoID=1084&gAID=135839&subGid=0&bannerID=0' target='_blank'>
            <button className='border border-solid rounded-buttonRadius flex items-center justify-center w-[120px] h-[40px] bg-bgSignUp hover:bg-loginColor hover:border-loginColor'>SIGN UP</button>
        </Link>
    </div>
  )
}

export default LogIn