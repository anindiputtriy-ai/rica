import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Eye, Lock, Database } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10 text-orange-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Kebijakan Privasi</h1>
            <p className="text-gray-600">
              Kebijakan Privasi <span className="text-orange-600 font-semibold">RICA SUPARTINI</span>
            </p>
            <p className="text-sm text-gray-500 mt-2">Terakhir diperbarui: {new Date().toLocaleDateString('id-ID')}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Eye className="h-6 w-6 text-orange-600 mr-3" />
                Pendahuluan
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Selamat datang di RICA SUPARTINI. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. 
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda 
                saat Anda menggunakan layanan kami.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Database className="h-6 w-6 text-orange-600 mr-3" />
                Informasi yang Kami Kumpulkan
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Informasi Pribadi</h3>
                  <p className="text-gray-700">
                    Kami dapat mengumpulkan informasi pribadi seperti nama, alamat email, nomor telepon, dan alamat pengiriman 
                    saat Anda berinteraksi dengan kami untuk pembelian produk atau layanan.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Informasi Transaksi</h3>
                  <p className="text-gray-700">
                    Detail pembelian, riwayat transaksi, dan informasi pembayaran yang diperlukan untuk memproses pesanan Anda.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Informasi Penggunaan</h3>
                  <p className="text-gray-700">
                    Data tentang bagaimana Anda menggunakan layanan kami untuk meningkatkan pengalaman pelanggan.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Lock className="h-6 w-6 text-orange-600 mr-3" />
                Penggunaan Informasi
              </h2>
              <p className="text-gray-700 mb-4">
                Kami menggunakan informasi yang dikumpulkan untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Memproses dan menyelesaikan transaksi pembelian</li>
                <li>Menyediakan layanan pelanggan dan dukungan</li>
                <li>Mengirim informasi produk dan penawaran khusus</li>
                <li>Meningkatkan kualitas produk dan layanan kami</li>
                <li>Mematuhi kewajiban hukum dan peraturan yang berlaku</li>
                <li>Melindungi dari aktivitas penipuan dan penyalahgunaan</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Perlindungan Data</h2>
              <p className="text-gray-700 mb-4">
                RICA SUPARTINI berkomitmen untuk melindungi data pribadi Anda dengan:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Enkripsi data sensitif saat transmisi dan penyimpanan</li>
                <li>Akses terbatas hanya untuk personel yang berwenang</li>
                <li>System keamanan yang terus diperbarui</li>
                <li>Audit keamanan secara berkala</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Berbagi Informasi</h2>
              <p className="text-gray-700">
                Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga 
                tanpa persetujuan Anda, kecuali:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
                <li>Diperlukan untuk memproses transaksi (misalnya kurir pengiriman)</li>
                <li>Diminta oleh hukum atau otoritas yang berwenang</li>
                <li>Untuk melindungi hak, properti, atau keselamatan kami atau pelanggan lainnya</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hak Privasi Anda</h2>
              <p className="text-gray-700 mb-4">
                Sebagai pelanggan, Anda memiliki hak untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Mengakses informasi pribadi yang kami simpan tentang Anda</li>
                <li>Memperbaiki informasi yang tidak akurat</li>
                <li>Menghapus informasi pribadi Anda (dengan batasan tertentu)</li>
                <li>Menolak pemasaran langsung dari kami</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kebijakan Cookies</h2>
              <p className="text-gray-700">
                Website kami mungkin menggunakan cookies untuk meningkatkan pengalaman browsing Anda. 
                Cookies membantu kami mengingat preferensi Anda dan menyediakan konten yang relevan. 
                Anda dapat mengatur browser untuk menolak cookies jika diinginkan.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Perubahan Kebijakan</h2>
              <p className="text-gray-700">
                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan diberitahukan 
                melalui website kami atau media komunikasi lainnya. Penggunaan layanan kami yang berkelanjutan 
                berarti Anda menerima perubahan tersebut.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kontak Kami</h2>
              <p className="text-gray-700 mb-4">
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau perlakuan data pribadi Anda, 
                silakan hubungi kami:
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