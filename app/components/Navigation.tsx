import Link from 'next/link';

export default function Navigation() {
  const navItems = [
    { name: 'Profile', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experiences', href: '/experiences' },
    { name: 'Hobbies', href: '/hobbies' },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="flex justify-center items-center py-4 space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-md uppercase font-semibold text-black hover:text-primary-500 cursor-pointer transition-colors duration-300"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
