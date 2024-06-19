import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Game({ src, alt }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href="https://download.eternalslots.com/affiliate/remote/aiddownload.asp?casinoID=1084&gAID=135839&subGid=0&bannerID=0" target="_blank">
      <div
        className={`relative rounded-lg overflow-hidden ${
          hovered ? "border-loginColor border" : ""
        }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image
          src={src}
          alt={alt}
          height={500}
          width={500}
          className={`transition-transform duration-500 ${
            hovered ? "scale-105 blur-[2px]" : ""
          }`}
        />
        {/* Dark overlay */}
        {hovered && (
          <div className="absolute inset-0 bg-black opacity-40"></div>
        )}

        {hovered && (
          <div className="w-full h-full absolute inset-0 flex items-center justify-center">
            <Image
              src="/img/playicon.svg"
              alt="Play Icon"
              height={40}
              width={40}
              className={`transition-transform ${
                hovered ? "scale-100" : ""
              }`}
            />
          </div>
        )}
      </div>
    </Link>
  );
}

export default Game;
