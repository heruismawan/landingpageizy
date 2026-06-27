import React from 'react';

export function Navbar() {
  const menuItems = [
    { label: 'Beranda', href: '#' },
    { label: 'Katalog iPhone', href: '#' },
    { label: 'Keunggulan', href: '#' },
    { label: 'Simulasi Cicilan', href: '#' },
    { label: 'Hubungi Toko', href: '#' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-pure-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex items-center justify-center gap-8 md:gap-12 h-16">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a 
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
