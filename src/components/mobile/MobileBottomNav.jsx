import React from 'react';
import { Home, Search, ShoppingBag, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function MobileBottomNav() {
  const location = useLocation();
  const pathname = location.pathname;

  const navItems = [
    { icon: Home, label: 'Home', path: '/mobile' },
    { icon: Search, label: 'Search', path: '/mobile/search' },
    { icon: ShoppingBag, label: 'Cart', path: '/mobile/cart' },
    { icon: User, label: 'Profile', path: '/mobile/profile' },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-pure-black/80 backdrop-blur-xl border-t border-white/10 px-6 pb-4 pt-3 flex justify-between items-center z-40">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.path || pathname === item.path + '/';
        
        return (
          <Link 
            key={item.label}
            to={item.path}
            className="flex flex-col items-center gap-1 group"
          >
            <div className={`p-1.5 rounded-full transition-all duration-300 ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
              <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
            </div>
            <span className={`text-[10px] font-medium transition-colors ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
              {item.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
