import Link from 'next/link';

const headerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const Header = () => (
  <header className="bg-blue-500 text-white p-4">
    <nav className="flex justify-between items-center max-w-4xl mx-auto">
      <h1 className="text-lg font-bold">My Blog</h1>
      <ul className="flex space-x-4">
        {headerLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
