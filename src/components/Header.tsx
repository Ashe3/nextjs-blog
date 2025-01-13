import Link from 'next/link';

const headerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const Header = () => (
  <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
    <nav className="flex justify-between items-center mx-24">
      <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200">
        My Blog
      </h1>
      <ul className="flex space-x-4">
        {headerLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="hover:underline hover:underline-offset-4 transition duration-300"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
