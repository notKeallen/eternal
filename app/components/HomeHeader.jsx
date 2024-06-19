import Image from "next/image"
import ProBoxes from "./ProBoxes"
import Link from "next/link"


function HomeHeader() {
  return (
    <> 
    <div className="w-full relative h-[900px]">
        <div className="p-50px 2xl:w-[84%] float-right h-[750px] w-full bg-contain md:bg-center md:bg-cover bg-header-mobile bg-no-repeat md:bg-header-image mt-[90px]">
            <div className="2xl:w-[30%] w-[85%] relative top-[280px] md:top-[0px] m-[30px]">
                <Image 
                    src='/img/eternal-slots-free-spins-forever-instant-withdrawals-328062ac.svg'
                    alt='Free Spins Forever'
                    width={500}
                    height={500}
                />
                <div className="w-[190px] mx-auto mt-20px">
                <Link href='https://download.eternalslots.com/affiliate/remote/aiddownload.asp?casinoID=1084&gAID=135839&subGid=0&bannerID=0' target='_blank'><button className="z-20 w-full rounded-[5px] h-50px text-white bg-loginColor font-bold transform transition-transform duration-300 hover:scale-120 hover:bg-white hover:text-loginColor">Claim Now</button></Link>
                </div>
            </div>
        </div>
        <ProBoxes/>
    </div>

    </>
  )
}

export default HomeHeader