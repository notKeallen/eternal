import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className='w-[90%] md:w-[70%] m-auto my-50px'>
        <div className='flex justify-between mb-20px'>
            <div className='w-20%'>
                <Image
                    src='/img/18-year-logo-743eacc0.svg'cds-437b92ad
                    alt='18+'
                    width={50}
                    height={50}
                />
            </div>
            <div className='w-20%'>
                <Image
                    src='/img/cds-437b92ad.svg'
                    alt='CDS'
                    width={200}
                    height={150}
                />
            </div>
            <div className='w-20%'>
                <Image
                    src='/img/rtg-logo-8d09b7a4.svg'
                    alt='Spin Logic Gaming'
                    width={200}
                    height={150}
                />
            </div>
        </div>
        <div>
            <p className='text-sm font-medium'>Copyright &copy;<strong>2024</strong>. All rights reserved.</p>
        </div>
    </div>

  )
}

export default Footer