"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import { Phone, Mail, MapPin, ShoppingBag, Clock, Star, ChevronRight, Package, Truck, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <SmoothScroll />
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-red-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Selamat Datang di <span className="text-orange-600">RICA SUPARTINI</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Perdagangan eceran terpercaya untuk berbagai macam barang utamanya makanan, minuman, dan tembakau. 
                Kualitas terbaik dengan harga yang kompetitif.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#kontak" 
                  className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Hubungi Kami
                </a>
                <a 
                  href="#produk" 
                  className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors flex items-center justify-center"
                >
                  Lihat Produk
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="RICA SUPARTINI" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mengapa Memilih Kami?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami berkomitmen untuk memberikan produk berkualitas dengan pelayanan terbaik untuk kepuasan pelanggan.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-orange-50 hover:bg-orange-100 transition-colors">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Produk Berkualitas</h3>
              <p className="text-gray-600">
                Menyediakan berbagai macam barang berkualitas tinggi dengan harga yang terjangkau.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-red-50 hover:bg-red-100 transition-colors">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Pengiriman Cepat</h3>
              <p className="text-gray-600">
                Pengiriman produk yang cepat dan tepat waktu untuk memenuhi kebutuhan Anda.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-yellow-50 hover:bg-yellow-100 transition-colors">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Terpercaya</h3>
              <p className="text-gray-600">
                Reputasi terpercaya dalam perdagangan eceran dengan pelayanan yang memuaskan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Tentang <span className="text-orange-600">RICA SUPARTINI</span></h2>
              <p className="text-gray-700 mb-4">
                RICA SUPARTINI adalah usaha perdagangan eceran yang berlokasi di Jakarta Utara. 
                Kami bergerak dalam bidang perdagangan berbagai macam barang dengan fokus utama pada makanan, minuman, dan tembakau.
              </p>
              <p className="text-gray-700 mb-6">
                Dengan pengalaman dalam melayani pelanggan, kami berkomitmen untuk menyediakan produk berkualitas 
                dengan harga yang kompetitif. Lokasi kami yang strategis di Cilincing, Jakarta Utara, 
                memudahkan pelanggan untuk mengakses berbagai kebutuhan sehari-hari.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-orange-600" />
                  <span className="text-gray-700">Buka Setiap Hari</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-orange-600" />
                  <span className="text-gray-700">Kualitas Terjamin</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Alamat</p>
                    <p className="text-gray-600">JL. KEBANTENAN NO 26 GG SWADAYA</p>
                    <p className="text-gray-600">Semper Timur, Cilincing</p>
                    <p className="text-gray-600">Jakarta Utara, DKI Jakarta</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-orange-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Telepon</p>
                    <a href="tel:085353876138" className="text-orange-600 hover:underline">
                      085353876138
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-orange-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">Email tersedia segera</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produk" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Produk Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Menyediakan berbagai macam produk kebutuhan sehari-hari dengan kualitas terbaik.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <ShoppingBag className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Makanan</h3>
              <p className="text-gray-600">
                Berbagai macam makanan segar dan kemasan dengan kualitas terjamin.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Package className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Minuman</h3>
              <p className="text-gray-600">
                Aneka minuman segar dan kemasan untuk memenuhi kebutuhan harian Anda.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Tembakau</h3>
              <p className="text-gray-600">
                Produk tembakau berkualitas dengan berbagai pilihan merek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="kontak" className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Butuh Produk? Hubungi Kami Sekarang!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Dapatkan produk berkualitas dengan harga terbaik hanya di RICA SUPARTINI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:085353876138" 
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              085353876138
            </a>
            <a 
              href="mailto:info@ricasupartini.com" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors flex items-center justify-center"
            >
              <Mail className="mr-2 h-5 w-5" />
              Kirim Email
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}