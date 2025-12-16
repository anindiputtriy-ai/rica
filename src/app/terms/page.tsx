import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText, ShoppingCart, Shield, AlertCircle } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="h-10 w-10 text-orange-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Syarat & Ketentuan</h1>
            <p className="text-gray-600">
              Syarat & Ketentuan Layanan <span className="text-orange-600 font-semibold">RICA SUPARTINI</span>
            </p>
            <p className="text-sm text-gray-500 mt-2">Terakhir diperbarui: {new Date().toLocaleDateString('id-ID')}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <ShoppingCart className="h-6 w-6 text-orange-600 mr-3" />
                Pendahuluan
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Selamat datang di RICA SUPARTINI. Syarat dan Ketentuan ini mengatur penggunaan layanan kami 
                dan hubungan hukum antara Anda dan RICA SUPARTINI. Dengan menggunakan layanan kami, 
                Anda setuju untuk mematuhi syarat dan ketentuan ini.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Definisi</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">"Perusahaan"</h3>
                  <p className="text-gray-700">Merujuk pada RICA SUPARTINI, usaha perdagangan eceran yang berlokasi di Jakarta Utara.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">"Pelanggan"</h3>
                  <p className="text-gray-700">Merujuk pada individu atau entitas yang menggunakan layanan atau membeli produk dari Perusahaan.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">"Produk"</h3>
                  <p className="text-gray-700">Merujuk pada barang yang diperdagangkan oleh Perusahaan termasuk makanan, minuman, dan tembakau.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">"Layanan"</h3>
                  <p className="text-gray-700">Merujuk pada semua layanan yang disediakan oleh Perusahaan terkait penjualan produk.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Shield className="h-6 w-6 text-orange-600 mr-3" />
                Syarat Penggunaan Layanan
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Kelayakan</h3>
                  <p className="text-gray-700">
                    Untuk menggunakan layanan kami, Anda harus:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
                    <li>Berusia minimal 18 tahun atau memiliki persetujuan orang tua/wali</li>
                    <li>Memiliki kapasitas hukum untuk mengikat kontrak</li>
                    <li>Memberikan informasi yang akurat dan lengkap</li>
                    <li>Mematuhi semua syarat dan ketentuan yang berlaku</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Pendaftaran Akun</h3>
                  <p className="text-gray-700">
                    Anda mungkin perlu membuat akun untuk mengakses layanan tertentu. Anda bertanggung jawab untuk:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
                    <li>Menjaga kerahasiaan informasi akun Anda</li>
                    <li>Memberitahukan kami segera jika ada penggunaan yang tidak sah</li>
                    <li>Memastikan semua informasi yang diberikan akurat dan terkini</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Produk dan Harga</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Ketersediaan Produk</h3>
                  <p className="text-gray-700">
                    Kami berusaha untuk memastikan ketersediaan semua produk yang ditampilkan. 
                    Namun, ketersediaan produk dapat berubah tanpa pemberitahuan sebelumnya.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Harga</h3>
                  <p className="text-gray-700">
                    Harga produk dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya. 
                    Harga yang berlaku adalah harga yang tercantum pada saat transaksi.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Deskripsi Produk</h3>
                  <p className="text-gray-700">
                    Kami berusaha untuk menyediakan deskripsi produk yang akurat. 
                    Namun, kami tidak menjamin bahwa deskripsi produk bebas dari kesalahan.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pembayaran</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Metode Pembayaran</h3>
                  <p className="text-gray-700">
                    Kami menerima berbagai metode pembayaran yang tersedia. Semua transaksi pembayaran 
                    harus diselesaikan sebelum produk dikirim.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Keamanan Pembayaran</h3>
                  <p className="text-gray-700">
                    Kami menggunakan sistem pembayaran yang aman untuk melindungi informasi finansial Anda. 
                    Informasi pembayaran Anda akan dienkripsi dan dilindungi.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pengiriman dan Pengembalian</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Pengiriman</h3>
                  <p className="text-gray-700">
                    Kami akan berusaha untuk mengirimkan produk sesuai dengan jadwal yang ditentukan. 
                    Waktu pengiriman dapat bervariasi tergantung pada lokasi dan ketersediaan produk.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Kebijakan Pengembalian</h3>
                  <p className="text-gray-700">
                    Produk dapat dikembalikan dalam kondisi tertentu:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
                    <li>Produk rusak saat diterima</li>
                    <li>Produk tidak sesuai dengan pesanan</li>
                    <li>Produk kedaluwarsa</li>
                    <li>Pengembalian harus dilakukan dalam waktu 3 hari sejak penerimaan</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <AlertCircle className="h-6 w-6 text-orange-600 mr-3" />
                Batasan Tanggung Jawab
              </h2>
              <p className="text-gray-700 mb-4">
                Sejauh diizinkan oleh hukum, RICA SUPARTINI tidak bertanggung jawab atas:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Kerugian tidak langsung, insidental, atau konsekuensial</li>
                <li>Kehilangan keuntungan atau data</li>
                <li>Kerusakan yang timbul dari penggunaan atau ketidakmampuan menggunakan layanan</li>
                <li>Keterlambatan atau gangguan layanan</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hak Kekayaan Intelektual</h2>
              <p className="text-gray-700">
                Semua konten, merek dagang, logo, dan hak kekayaan intelektual lainnya yang terkait dengan 
                RICA SUPARTINI adalah milik eksklusif Perusahaan. Anda tidak diperbolehkan menggunakan 
                hak kekayaan intelektual kami tanpa izin tertulis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Privasi</h2>
              <p className="text-gray-700">
                Privasi Anda penting bagi kami. Penggunaan data pribadi Anda diatur oleh Kebijakan Privasi kami 
                yang dapat diakses melalui website kami.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Perubahan Syarat & Ketentuan</h2>
              <p className="text-gray-700">
                Kami berhak untuk mengubah Syarat & Ketentuan ini sewaktu-waktu. Perubahan akan diberitahukan 
                melalui website kami atau media komunikasi lainnya. Penggunaan layanan yang berkelanjutan 
                setelah perubahan berarti Anda menerima syarat dan ketentuan yang diperbarui.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hukum yang Berlaku</h2>
              <p className="text-gray-700">
                Syarat & Ketentuan ini diatur oleh hukum Republik Indonesia. Setiap sengketa yang timbul 
                dari atau berhubungan dengan Syarat & Ketentuan ini akan diselesaikan melalui perundingan 
                atau melalui pengadilan yang berwenang di Jakarta.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kontak Kami</h2>
              <p className="text-gray-700 mb-4">
                Jika Anda memiliki pertanyaan tentang Syarat & Ketentuan ini, silakan hubungi kami:
              </p>
              <div className="bg-orange-50 p-6 rounded-lg">
                <p className="font-semibold text-orange-900 mb-2">RICA SUPARTINI</p>
                <p className="text-gray-700">Alamat: JL. KEBANTENAN NO 26 GG SWADAYA, Semper Timur, Cilincing, Jakarta Utara</p>
                <p className="text-gray-700">Telepon: 085353876138</p>
                <p className="text-gray-700">Email: Email tersedia segera</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}