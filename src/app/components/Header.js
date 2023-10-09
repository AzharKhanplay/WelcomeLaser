import Image from 'next/image';
import Link from 'next/link';
import LaserVideo from './LaserVideo';

const Header = () => {
  return (
    <header className=" bg-slate-200 py-20 flex justify-between items-center">
     <div className='container'>
      <div className="flex items-center">
       <div className='md:w-1/2'>
        <h1 className="text-4xl leading-normal font-bold">Crafting Perfection: WelcomeLaser&apos;s Expertise in Leather, Rexine, and Fabric Services</h1>
        <Link href="#contact" className="btn-primary mt-5">
          Get Started
        </Link>
       </div>
       <div className='md:w-1/2 text-center'>
        <Image src="/laser_cutting_machine.png" alt="Image" width="650" height="483" className='inline-block' />
       </div>
      </div>

     </div>
    </header>
  );
};

export default Header;
