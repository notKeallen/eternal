import Image from "next/image"


function Review({reviews}) {
  return (
    <>
        {reviews.map((review, index)=>(
            <div key={index} className="z-20 bg-bgBannerColor w-full md:w-[32.5%] rounded-[20px] p-20px">
                <p>{review.name}</p>
                <div className="relative w-[100px] h-20px my-20px"> 
                    <div className="absolute inset-0 z-10 bg-loginColor" style={{ width: `${review.stars}px` }}></div>
                        <div className="absolute inset-0 z-20 w-full">
                            <Image
                                src='data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0A%3C!--%20Generator%3A%20Adobe%20Illustrator%2026.0.0%2C%20SVG%20Export%20Plug-In%20.%20SVG%20Version%3A%206.00%20Build%200)%20%20--%3E%0A%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0A%09%20viewBox%3D%220%200%20100%2020%22%20style%3D%22enable-background%3Anew%200%200%20100%2020%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cstyle%20type%3D%22text%2Fcss%22%3E%0A%09.st0%7Bfill%3A%23001C04%3B%7D%0A%3C%2Fstyle%3E%0A%3Cg%3E%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M0%2C0v20h100V0H0z%20M15%2C17.8l-5-3.7l-5%2C3.7l1.9-5.9l-5-3.7h6.2L10%2C2.2l1.9%2C5.9h6.2l-5%2C3.7L15%2C17.8z%20M35%2C17.8%0A%09%09l-5-3.7l-5%2C3.7l1.9-5.9l-5-3.7h6.2L30%2C2.2l1.9%2C5.9h6.2l-5%2C3.7L35%2C17.8z%20M55%2C17.8l-5-3.7l-5%2C3.7l1.9-5.9l-5-3.7h6.2L50%2C2.2l1.9%2C5.9%0A%09%09h6.2l-5%2C3.7L55%2C17.8z%20M75%2C17.8l-5-3.7l-5%2C3.7l1.9-5.9l-5-3.7h6.2L70%2C2.2l1.9%2C5.9h6.2l-5%2C3.7L75%2C17.8z%20M95%2C17.8l-5-3.7l-5%2C3.7%0A%09%09l1.9-5.9l-5-3.7h6.2L90%2C2.2l1.9%2C5.9h6.2l-5%2C3.7L95%2C17.8z%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A'
                                alt='Star rating'
                                width={500}
                                height={500}
                            />
                    </div> 
                </div>
                <p className="text-sm">{review.comment}</p>
            </div>
        ))}
    </>
  )
}

export default Review