"use client"
import { useState } from "react";
import Text from "./Text"
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";


function ContentText({text}) {
    const texts = [
        {heading:'Instant Withdrawals and Crypto Magic', text:'In our enchanted realm, we believe in making your gaming experience as seamless as possible. With our instant withdrawals, you can enjoy your winnings in the blink of an eye, allowing you to continue your magical journey without delay. Plus, as a crypto casino, we offer a secure and convenient way to make deposits and withdrawals using various popular cryptocurrencies like Bitcoin and Litecoin.', hasHeading2:'', hasText2:''},
        {heading:'Lucrative Bonuses', text:"At Eternal Slots, we're known for our generous bonuses that are sure to enchant even the most seasoned of players. From our Free Spins Forever bonus that grants you 224 free spins as your first bonus and 30 freebies every day forever, to our 111% no rules first deposit bonus, there's no shortage of magic to be found at Eternal Slots.", hasHeading2:['Free Spins Forever', '111% No Rules First Deposit Bonus', '333% No Max Cashout First Deposit Bonus', '999% Boost First Deposit Bonus', 'No Rules Bonus 5 Times a Day', 'Weekend Bonus', 'Daily Cash Bandits Bonuses' ], hasText2:["As a new player at Eternal Slots, you'll be greeted with an enchanting offer of 224 free spins as your first bonus. But the magic doesn't end there! You'll also receive an additional 30 free spins every day to keep the excitement going. With Free Spins Forever, the thrill of winning is never far away.", "Make your first deposit at Eternal Slots and receive a generous 111% bonus with no wagering and no max cashout requirements. This means that you can enjoy your bonus winnings without having to meet any restrictions, giving you more freedom to play and win.", "Get ready for a magical experience with our 333% no max cashout first deposit bonus. Make your first deposit at Eternal Slots and receive a massive 333% bonus with no maximum cashout limit. This means that there's no limit to how much you can win with this incredible bonus offer.", "Make your first deposit at Eternal Slots and receive an extraordinary 999% bonus to boost your winnings. With this incredible offer, you'll have plenty of extra funds to explore all the exciting games that Eternal Slots has to offer.", "Need a little extra boost? The 25% no rules bonus is here to help. Available five times per day, this bonus offers a 25% boost with no wagering requirements. This means that you can enjoy your bonus winnings without any restrictions, giving you more chances to win big.", "Make your weekends even more exciting with our generous bonus. Enjoy a 100% boost on weekends, along with 40 free spins to use on your favorite games. With this bonus, the weekend fun never has to end.", "Dive into the world of Cash Bandits, one of the most popular RTG slots ever, with our exciting bonuses. On your first deposit of the day, you'll receive a 50% bonus along with 50 free spins on Cash Bandits. On your second deposit, enjoy a 75% bonus with 75 free spins on Cash Bandits 2. And on your third deposit, get a 100% bonus with 100 free spins on Cash Bandits 3. These bonuses give you plenty of chances to win big on these popular games."]},
        {heading:'VIP Treats and Fairy-Tale Rewards', text:"As a VIP member at Eternal Slots, you'll be treated to a host of exclusive perks fit for royalty. Enjoy personalized service, higher deposit and withdrawal limits, and access to exclusive promotions and events. Plus, our loyalty rewards program offers comp points for every wager you make, which can be redeemed for cash, as well as a 15% no rules cashback bonus on your losses.", hasHeading2:'', hasText2:''},
        {heading:'24/7 Support', text:"In our enchanted forest, help is never far away. Our friendly and knowledgeable customer support team is available 24/7 via live chat and email, ready to assist you with any questions or concerns you may have along your magical journey.", hasHeading22:'', hasText2:''},
        {heading:'RTG Games with Classic and Modern Design', text:"Eternal Slots is proud to offer a wide selection of Real Time Gaming (RTG) games that combine classic casino elements with modern design features. Whether you're a fan of classic slots or prefer more modern titles, you'll find something to suit your taste at Eternal Slots.", heading2:'', hasText2:''},
        {heading:'Join Eternal Slots and Discover a World of Magic', text:"With our instant withdrawals, magical bonuses, and enchanting RTG games, Eternal Slots offers a gaming experience like no other. Join us today and discover why we're the ultimate online casino destination for players seeking a touch of magic in their gaming experience.", heading2:'', hasText2:''}
    ]

    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
      setShowMore(!showMore);
    };
  
    return (
      <div className="w-[90%] md:w-[75%] m-auto mt-50px">
        <div>
          <h1 className="text-white text-xl font-semibold">
            Welcome to the Enchanted Realm of{" "}
            <span className="text-loginColor">Eternal</span> Slots
          </h1>
          <p className="my-[5px]">
            At Eternal Slots, we're not just another online casino. We're a
            one-stop destination for all your gaming needs, offering a wide range
            of exciting games, lucrative bonuses, and unparalleled convenience.
            Step into a world where magic reigns supreme and the possibilities
            are endless. At Eternal Slots, we invite you to explore the wonders
            of our enchanted forest, where wizards, fairies, and mystical
            creatures dwell. Immerse yourself in a gaming experience like no
            other, where every spin of the reels could lead to untold riches and
            endless adventure.
          </p>
          {!showMore && (
            <button
              className="text-loginColor font-semibold underline cursor-pointer"
              onClick={toggleShowMore}
            >
              Show more
            </button>
          )}
        </div>
        {showMore && (
          <div>
            {texts.map((text, index) => (
              <Text key={index} texts={text} />
            ))}
          </div>
        )}
        <FrequentlyAskedQuestions/>
      </div>
    );
  }
  
  export default ContentText;