import Link from "next/link";

export default function Navigation() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Experiences", href: "/experiences" },
    { name: "Hobbies", href: "/hobbies" },
  ];

  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="flex justify-around items-center py-4">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-lg font-semibold hover:text-gray-400 cursor-pointer"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
