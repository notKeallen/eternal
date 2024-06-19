"use client"
import { useState } from 'react';
import Link from 'next/link';
import ListOfGames from './ListOfGames';
import { useMediaQuery } from '@react-hook/media-query';

function Games() {
    const gameList1 = [
        { src: '/img/tall_BARSVS418~7E56F05152BED1D90FCF3887AF9AA83A.jpg', alt: "BUFFALO MANIA DELUXE" },
        { src: '/img/tall_bagf351~9AD0B622421192823CC5D7C81723C409.jpg', alt: "32 CARDS" },
        { src: '/img/tall_bagf353~2DBBA829442FFA5E0FE1A088A5E1D629.jpg', alt: "ANDAR BAHAR" },
        { src: '/img/tall_bagf354~C05C83BE4F1FE4B8E36F19019BB43B42.jpg', alt: "TEEN PATTI" },
        { src: '/img/tall_barsvs412~1353B69FDF64F9ED0DB91C3610FAB990.jpg', alt: "COSMIC CRUSADE" },
        { src: '/img/tall_barsvs413~21DD4ADCDF3AC509345ACD94961D74AC.jpg', alt: "WODER REELS" },
        { src: '/img/tall_bagf352~FCB8B43882A86C8D5776E1E7E44AC388.jpg', alt: "AKBAR ROMEO WALTER" },
        { src: '/img/tall_BAShelltasticWins~20F915481FD7626A23468913C9F1AF08.jpg', alt: "SHELLTASTIC WINS" },
        { src: '/img/tall_BAPyramidPets~151BEAB22D84A59C85E03F3E66D31D89.jpg', alt: "PYRAMID PETS" },
        { src: '/img/tall_BAMegaMonster~6C00B1ED362DE75DA4C020420776532C.jpg', alt: "MEGA MONSER" },
        { src: '/img/tall_bagf350~DE9E04600B8239F84EA5C514020DB77F.jpg', alt: "LUCKY 7" },
        { src: '/img/tall_BABearyWild~336C6F018956BEF66EA24E8276BF66A1.jpg', alt: "BEARY WILD" },
        { src: '/img/tall_BAKongFu~7C50C80A39F53999A78F818E3E8E6C00.jpg', alt: "KONG FU" },
        { src: '/img/tall_BAPlanetOfTheRoos~5D2A2F53CCB83D60A2ED83A9F5BE454D.jpg', alt: "PLANET OF THE ROOS" },
        { src: '/img/tall_BATRexWildAttack~FF8E1B79784AD868E0DC580BD0BDC24F.jpg', alt: "T-REX WILD ATTACK" },
        { src: '/img/tall_BARobinHoodsRiches~DA04A2155EAE360CA75350D8430C0407.jpg', alt: "ROBIN HOOD'S RICHES" }


    ];

    const gameList2 = [
        { src: '/img/tall_BARobinHoodsRiches~DA04A2155EAE360CA75350D8430C0407.jpg', alt: "ROBIN HOOD'S RICHES" },
        { src: '/img/tall_BAGreatGoldenLion~306F134D46E241FC03EF98F8D13CA52D.jpg', alt: "GREAT GOLDEN LION" },
        { src: '/img/tall_BABigCatLinks~35010A9CF0B2903C07C624A2CD17F3BB.jpg', alt: "BIG CAT LINKS" },
        { src: '/img/tall_BAIcyHotMultiGame~F5362B324830B7BD09F70103C9B7B4F3.jpg', alt: "ICY HOT MULTI-GAME" },
        { src: '/img/tall_BAMightyDrums~8C1F212D6D090F194657A44255234FF5.jpg', alt: "MIGHTY DRUMS" },
        { src: '/img/tall_BAFortunesofOlympus~CAB1ABF2C59D091D1EFEACA890519BDB.jpg', alt: "FORTUNES OF OLYMPUS" },
        { src: '/img/tall_BAAlienWins~75AF06AF76B5BE1979A39C39AAC27EDD.jpg', alt: "ALIEN WINS" },
        { src: '/img/tall_BATarotDestiny~424AA80CD3B00FE2D7DC449F6C582B9B.jpg', alt: "TAROT DESTINY" },
        { src: '/img/tall_BAMerlinsRiches~2BD14B4508C81656F36763C154F69493.jpg', alt: "MERLIN'S RICHES" },
        { src: '/img/tall_BADesertRaider~3E41A4986D02A49D854FC0B3BADD2BEA.jpg', alt: "DESERT RAIDER" },
        { src: '/img/tall_BANeonWheel7s~950EC2E9A82B843FCF16150E3D574001.jpg', alt: "NEON WHEEL 7S" },
        { src: '/img/tall_BASweet16Blast~EB1E378589DDE52A6C4CB3EFCE482B75.jpg', alt: "SWEET 16 BLAST!" },
        { src: '/img/tall_BAFortunateBuddha~95A8FAF4A28DFFCC8919C1B6AEA69126.jpg', alt: "FORTUNATE BUDDHA" },
        { src: '/img/tall_BACopyCatFortune~5E760034C6823799F5A1C2AC75824207.jpg', alt: "COPY CAT FORTUNE" },
        { src: '/img/tall_BALegendOfHelios~C61EAF4B87A452B06BD69F8BC465447D.jpg', alt: "LEGEND OF HELIOS" },
        { src: '/img/tall_BAWildFire7s~5D30F48EDD5D87D1F02ADC810386BDE4.jpg', alt: "WILD FIRE 7S" }
    ];

    const gameList3 = [
        { src: '/img/tall_bagf352~FCB8B43882A86C8D5776E1E7E44AC388.jpg', alt: "AKBAR ROMEO WALTER" },
        { src: '/img/tall_bagf354~C05C83BE4F1FE4B8E36F19019BB43B42.jpg', alt: "TEEN PATTI" },
        { src: '/img/tall_bagf353~2DBBA829442FFA5E0FE1A088A5E1D629.jpg', alt: "ANDAR BAHAR" },
        { src: '/img/tall_bagf351~9AD0B622421192823CC5D7C81723C409.jpg', alt: "32 CARDS" },
        { src: '/img/tall_bagf350~DE9E04600B8239F84EA5C514020DB77F.jpg', alt: "LUCKY 7" },
        { src: '/img/tall_BABaccarat~8B44345310ACE08B11A657B17BF441F7.jpg', alt: "BACCARAT" },
        { src: '/img/tall_BASuitEmUp~FCE7C94AEC5BC1778FF1DB1B30C9806B.jpg', alt: "21 SUIT 'EM UP BLACKJAC" },
        { src: '/img/tall_BAPerfectPairs~E46AA24903662CDEDD156B56CAA0AF20.jpg', alt: "BLACKJACK + PERFECT PAIR" },
        { src: '/img/tall_BACaribbeanDraw~74CEBF319E30536AFFAE16FA9E5690A7.jpg', alt: "CARIBBEAN DRAW POKER" },
        { src: '/img/tall_BACaribbeanStud~9A988A71298940E8DB365AFA4B72184A.jpg', alt: "CARIBBEAN STUD POKER" },
        { src: '/img/tall_BACaribbeanHoldEm~6D4F4B0FE0EAB18F5211D7B87B92ED84.jpg', alt: "CARIBBEAN HOLD'EM POKER" },
        { src: '/img/tall_BABlackJack~F5493F206E8B5AC80BDD5E321845C1D5.jpg', alt: "21 BLACKJACK" },
        { src: '/img/tall_BALetEmRide~32748816D10A1C11233FCBA83D160751.jpg', alt: "LET 'EM RIDE" },
        { src: '/img/tall_BATri-CardPoker~4B88710B6E3F78ED7176A39245C83ABD.jpg', alt: "TRI CARD POKER" }
    ];

    const [index1, setIndex1] = useState(0);
    const [index2, setIndex2] = useState(0);
    const [index3, setIndex3] = useState(0);
    const maxItemsToShow = useMediaQuery('(max-width: 768px)') ? 3 : 8; // Adjust breakpoint as necessary

    const handleLeftClick = (setIndex, index, length) => {
        setIndex(index === 0 ? length - 1 : index - 1);
    };

    const handleRightClick = (setIndex, index, length) => {
        setIndex((index + 1) % length);
    };

    return (
        <div className="text-loginColor w-[95%] 2xl:w-[75%] m-auto p-[30px] border border-solid border-loginColor rounded-[20px]">
            <div className="pt-[30px]">
                {/* Previous/Next buttons */}
                <div className='w-full '>
                    <button className="float-right bg-button-image p-2 bg-gray-800 bg-no-repeat bg-center bg-contain w-[40px] h-[40px] text-white mx-1 rounded-[10px] -rotate-90" style={{backgroundSize:'50%'}} onClick={() => handleRightClick(setIndex1, index1, gameList1.length)}>{""}</button>
                    <button className="float-right bg-button-image p-2 bg-gray-800 bg-no-repeat bg-center bg-contain w-[40px] h-[40px] text-white mx-1 rounded-[10px] rotate-90" style={{backgroundSize:'50%'}} onClick={() => handleLeftClick(setIndex1, index1, gameList1.length)}>{""}</button>
                </div>
                <div className='w-full'>
                    <h2 className="my-20px md:mx-[30px] md:text-xl">Latest games:</h2>
                </div>
                {/* ListOfGames component with sliced array */}
                <ListOfGames games={gameList1.slice(index1, index1 + maxItemsToShow).concat(gameList1.slice(0, Math.max(0, index1 + maxItemsToShow - gameList1.length)))} />
            </div>
            <div className="pt-[30px]">
                {/* Previous/Next buttons */}
                <div className='w-full '>
                    <button className="float-right bg-button-image p-2 bg-gray-800 bg-no-repeat bg-center bg-contain w-[40px] h-[40px] text-white mx-1 rounded-[10px] -rotate-90" style={{backgroundSize:'50%'}} onClick={() => handleRightClick(setIndex2, index2, gameList2.length)}>{""}</button>
                    <button className="float-right bg-button-image p-2 bg-gray-800 bg-no-repeat bg-center bg-contain w-[40px] h-[40px] text-white mx-1 rounded-[10px] rotate-90" style={{backgroundSize:'50%'}} onClick={() => handleLeftClick(setIndex2, index2, gameList2.length)}>{""}</button>
                </div>
                <div className='w-full'>
                    <h2 className="my-20px md:mx-[30px] md:text-xl">Top games:</h2>
                </div>
                {/* ListOfGames component with sliced array */}
                <ListOfGames games={gameList2.slice(index2, index2 + maxItemsToShow).concat(gameList2.slice(0, Math.max(0, index2 + maxItemsToShow - gameList2.length)))} />
            </div>
            <div className="pt-[30px]">
                {/* Previous/Next buttons */}
                <div className='w-full '>
                    <button className="float-right bg-button-image p-2 bg-gray-800 bg-no-repeat bg-center bg-contain w-[40px] h-[40px] text-white mx-1 rounded-[10px] -rotate-90" style={{backgroundSize:'50%'}} onClick={() => handleRightClick(setIndex3, index3, gameList3.length)}>{""}</button>
                    <button className="float-right bg-button-image p-2 bg-gray-800 bg-no-repeat bg-center bg-contain w-[40px] h-[40px] text-white mx-1 rounded-[10px] rotate-90" style={{backgroundSize:'50%'}} onClick={() => handleLeftClick(setIndex3, index3, gameList3.length)}>{""}</button>
                </div>
                <div className='w-full'>
                    <h2 className="my-20px md:mx-[30px] md:text-xl">Table games:</h2>
                </div>
                {/* ListOfGames component with sliced array */}
                <ListOfGames games={gameList3.slice(index3, index3 + maxItemsToShow).concat(gameList3.slice(0, Math.max(0, index3 + maxItemsToShow - gameList3.length)))} />
            </div>
            {/* Repeat for other game lists */}
            {/* ... */}
            {/* Link to view all games */}
            <div className="w-[66%] md:w-[33%] m-auto mt-[40px]">
                <Link href='https://download.eternalslots.com/affiliate/remote/aiddownload.asp?casinoID=1084&gAID=135839&subGid=0&bannerID=0' target='_blank'>
                    <button className="w-full rounded-[5px] h-50px text-white bg-loginColor font-bold transform transition-transform duration-300 hover:scale-110 hover:bg-white hover:text-loginColor">
                        View All Games!
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Games;