import ProBox from './ProBox';

function ProBoxes() {
const boxes = [
  { src: '/img/eternal-slots-166-boost-instant-withdrawals-e90edf39.webp', alt: 'Green mushrooms', text: '166% BOOST,\n 2X A WEEK', prefix: 'Up to', buttonText: 'Grab it!' },
  { src: '/img/eternal-slots-vip-instant-withdrawals-f35a6785.webp', alt: 'Green crown', text: 'VIP \n PROGRAM', prefix: 'Our', buttonText: 'Join us!' },
  { src: '/img/eternal-slots-25-no-rules-boost-instant-withdrawals-42a67249.webp', alt: 'Flowers', text: '25% NO \n RULES 5X \n A DAY!', prefix: '', buttonText: 'Grab it!' }
];

return (
  <div className='w-[90%] lg:w-[75%] m-auto flex flex-wrap justify-between relative top-[-200px]'>
    <ProBox boxes={boxes.slice(0, 1)} className="" />
    <ProBox boxes={boxes.slice(1, 2)} className="hidden md:block" />
    <ProBox boxes={boxes.slice(2, 3)} className="hidden 2xl:block" />
  </div>
  );
}

export default ProBoxes;