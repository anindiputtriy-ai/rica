import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo.png" 
                alt="RICA SUPARTINI Logo" 
                className="h-10 w-10 rounded-full bg-white p-1"
              />
              <h3 className="text-xl font-bold">RICA SUPARTINI</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Perdagangan eceran berbagai macam barang utamanya makanan, minuman, atau tembakau dengan pelayanan terbaik dan terpercaya.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Link Cepat</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-orange-500 transition-colors">Beranda</Link></li>
              <li><Link href="#tentang" className="text-gray-400 hover:text-orange-500 transition-colors">Tentang Kami</Link></li>
              <li><Link href="#produk" className="text-gray-400 hover:text-orange-500 transition-colors">Produk</Link></li>
              <li><Link href="#kontak" className="text-gray-400 hover:text-orange-500 transition-colors">Kontak</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-orange-500 transition-colors">Kebijakan Privasi</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-orange-500 transition-colors">Syarat & Ketentuan</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak Kami</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">JL. KEBANTENAN NO 26 GG SWADAYA</p>
                  <p className="text-gray-400">Desa/Kelurahan Semper Timur</p>
                  <p className="text-gray-400">Kec. Cilincing, Jakarta Utara</p>
                  <p className="text-gray-400">DKI Jakarta</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <a href="tel:085353876138" className="text-gray-400 hover:text-orange-500 transition-colors">
                  085353876138
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-400">Email tersedia segera</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} RICA SUPARTINI. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}