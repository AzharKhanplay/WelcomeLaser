import Link from 'next/link';
import { TbMenu2 } from 'react-icons/tb'

const Navbar = () => {
  return (
    <nav className="bg-secondary-700 py-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-white font-bold text-xl">
              WelcomeLaser
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="#services" className="text-white">
              Services
            </Link>
            <Link href="#portfolio" className="text-white">
              Portfolio
            </Link>
            <Link href="#pricing" className="text-white">
              Pricing
            </Link>
            <Link href="#contact" className="text-white">
              Contact
            </Link>
          </div>
          <div className="md:hidden flex items-center text-white text-3xl">
            <TbMenu2/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
