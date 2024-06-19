import Image from 'next/image'
import LogIn from './LogIn'
import Link from 'next/link'

function BarTop() {
  return (
    <div className='z-50 w-full h-[120px] md:h-[90px] flex flex-col justify-center items-center md:flex-row md:justify-between p-20px bg-barTop fixed'>
         <Link href='https://download.eternalslots.com/affiliate/remote/aiddownload.asp?casinoID=1084&gAID=135839&subGid=0&bannerID=0' target='_blank'><Image src='/img/main-logo-959ac785.svg' alt='Eternal Slots Logo' width={235} height={70}/></Link>
         <LogIn/>
    </div>
  )
}

export default BarTop