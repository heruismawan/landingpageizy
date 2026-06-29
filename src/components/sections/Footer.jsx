import React from 'react';

export const Footer = () => {
  return (
    <footer className="relative z-10 bg-pure-black pt-20 pb-10 border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-semibold text-white mb-6">izystore</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Destinasi produk Apple baru & second terpercaya dan termurah se-Malang Raya dengan garansi terjamin dan pelayanan terbaik.
            </p>
          </div>

          {/* Produk */}
          <div>
            <h4 className="text-white font-medium mb-6 text-lg">Produk</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">iPhone</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">iPad</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">Aksesoris</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">Sparepart</a></li>
            </ul>
          </div>

          {/* Dukungan */}
          <div>
            <h4 className="text-white font-medium mb-6 text-lg">Dukungan</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">Pusat Bantuan</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">Cek Garansi</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">Servis & Perbaikan</a></li>
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <h4 className="text-white font-medium mb-6 text-lg">Perusahaan</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">Tentang Kami</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">Karir</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">Hubungi Kami</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">Blog</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} izystore. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
