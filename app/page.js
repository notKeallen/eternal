import BarTop from './components/BarTop';
import HomeHeader from './components/HomeHeader';
import Games from './components/Games';
import Particles from './components/Particles';
import Reviews from './components/Reviews';
import ContentText from './components/ContentText';
import Footer from './components/Footer';
import Link from 'next/link';
import FrequentlyAskedQuestions from './components/FrequentlyAskedQuestions'

const HomePage = () => {
  return (
    <div>
      <BarTop />
      <HomeHeader />
      <Games />
      <Link href='https://download.eternalslots.com/affiliate/remote/aiddownload.asp?casinoID=1084&gAID=135839&subGid=0&bannerID=0' target='_blank'>
      <div className="w-[90%] m-auto h-[550px] md:h-[650px] bg-banner-mobile bg-no-repeat md:bg-banner-image rounded-[40px] my-[50px]"></div>
      </Link>
      <Reviews/>
      <ContentText/>
      <Footer/>
      <Particles/>
    </div>
  );
};

export default HomePage;
