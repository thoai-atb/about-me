import Link from "next/link";

export default function Navigation() {
  const navItems = [
    { name: "Profile", href: "/", theme: "hover:text-primary-600" },
    { name: "Projects", href: "/projects", theme: "hover:text-secondary-600" },
    { name: "Others", href: "/others", theme: "hover:text-tertiary-600" },
  ];

  return (
    <nav className="bg-white">
      <div className="flex justify-center items-center py-4 space-x-8 font-sans">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`text-md uppercase font-semibold text-black ${item.theme} cursor-pointer transition-colors duration-300`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
