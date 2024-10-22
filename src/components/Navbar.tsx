import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <a className="text-xl font-semibold"> 
                <img src="/path/to/logo.png" alt="Logo" className="h-8 w-auto" />
              </a>
            </Link>
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex space-x-8">
            <Link href="/">
              <a className="text-gray-700 hover:text-black">Beranda</a>
            </Link>
            <Link href="/peluang-deposito">
              <a className="text-gray-700 hover:text-black">Peluang Deposito</a>
            </Link>
            <Link href="/kalkulator">
              <a className="text-gray-700 hover:text-black">Kalkulator</a>
            </Link>
            <Link href="/promo">
              <a className="text-gray-700 hover:text-black">Promo</a>
            </Link>
            <Link href="/blog">
              <a className="text-gray-700 hover:text-black">Blog</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
