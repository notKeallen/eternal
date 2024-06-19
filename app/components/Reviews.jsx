"use client"
import Review from './Review';

function Reviews() {
  const reviews = [
    { name: 'Helen Wait', stars: '87', comment: "My documents were approved in two minutes, it may be because I used exactly the same username and email as I used at Mr O.. I submitted the withdrawal and was paid the $100 in LTC within 15 minutes. 8:00 PM Received LCB email about Eternal Slots 8:30. Joined Eternal Slots 10:43, submitted verification docs 10:45. Docs approved 10:56, requested withdrawal 11:01, withdrawal approved 11:10 LTC confirmed in wallet. That is absolutely amazing, bravo Eternal Slots! And Mr O.!" },
    { name: 'JoJoi051Cal0', stars: '90', comment: "I think this site has better potential than most! First of all, this is a sister site to Mr O. which I am very impressed with. Having been a daily online gambler at many sites over the last 5 years, I like to think that I've gained some insight into what someone who plans on actually spending their own money should look for in an online casino." },
    { name: 'pd77', stars: '100', comment: "Mr O.’s casino sister brand — great bonuses and quick cash outs which are most important to me, but basically same RTG slots like at Casino Exteme, Kudos, etc." }
  ];

  return (
    <div className='w-[90%] md:w-[75%] flex flex-col md:flex-row justify-between m-auto'>
      <Review reviews={reviews.slice(0, 1)} />
      {window.innerWidth >= 768 && <Review reviews={reviews.slice(1)} />}
    </div>
  );
}

export default Reviews;