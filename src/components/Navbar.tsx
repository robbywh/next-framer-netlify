import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-black">Beranda</a>
            <a href="/peluang-deposito" className="text-gray-700 hover:text-black">Peluang Deposito</a>
            <a href="/kalkulator" className="text-gray-700 hover:text-black">Kalkulator</a>
            <a href="/promo" className="text-gray-700 hover:text-black">Promo</a>
            <a href="/blog" className="text-gray-700 hover:text-black">Blog</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
