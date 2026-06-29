import React from 'react';

export function Navbar() {
  const menuItems = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Katalog', href: '#katalog' },
    { label: 'Layanan', href: '#layanan' },
    { label: 'Tukar Tambah', href: '#tradein' },
    { label: 'Ulasan', href: '#ulasan' },
    { label: 'Hubungi Kami', href: '#hubungi' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-pure-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto w-full">
        <ul className="flex items-center justify-start md:justify-center gap-4 md:gap-12 h-16 overflow-x-auto no-scrollbar w-full px-6 md:px-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a 
                href={item.href}
                className="text-xs md:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap"
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
