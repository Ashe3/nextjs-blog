import Link from 'next/link';

const socialLinks = [
  { label: 'Twitter', href: 'https://twitter.com/username' },
  { label: 'GitHub', href: 'https://github.com/username' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/username' },
];

const Footer = () => (
  <footer className="bg-gray-800 text-white py-6">
    <div className="max-w-4xl mx-auto text-center space-y-4">
      <p>© 2025 My Blog. All rights reserved.</p>
      <ul className="flex justify-center space-x-6">
        {socialLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);

export default Footer;
