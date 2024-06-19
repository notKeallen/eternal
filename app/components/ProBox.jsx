import Image from 'next/image';
import Link from 'next/link';

function ProBox({ boxes, className }) {
  return (
    <>
      {boxes.map((box, index) => (
        <div 
          key={index} 
          className={`mb-4 w-full md:w-[42.5%] 2xl:w-[32.3%] h-[215px] bg-bgBannerColor rounded-[20px] relative overflow-hidden z-30 ${className}`}
        >
          <div className="absolute p-[30px] whitespace-pre-line z-20">
            {box.prefix && <div className="text-white font-semibold text-lg">{box.prefix}</div>}
            <div className="my-20px text-loginColor text-3xl font-semibold leading-[27px]">{box.text}</div>
            <Link href='https://download.eternalslots.com/affiliate/remote/aiddownload.asp?casinoID=1084&gAID=135839&subGid=0&bannerID=0' target='_blank'>
              <div className='border border-solid border-loginColor rounded-buttonRadius text-loginColor flex items-center justify-center w-[120px] h-[40px]'>
                {box.buttonText}
              </div>
            </Link>
          </div>
          <div className="w-[50%] md:w-[55%] h-full float-right md:relative md:top-[-20px] md:mr-20px z-10">
            <Image
              src={box.src}
              alt={box.alt}
              width={500}
              height={500}
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default ProBox;
