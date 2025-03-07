// id 语言文件

// 将翻译添加到全局翻译对象
window.translations = window.translations || {};

window.translations['id'] = {
        // Header
        'title': 'Konverter JPG',
        
        // Upload Area
        'drag_drop': 'Tarik dan lepaskan gambar Anda di sini atau',
        'browse': 'jelajahi',
        
        // Controls
        'convert_to': 'Konversi ke:',
        'quality': 'Kualitas:',
        'convert_all': 'Konversi Semua',
        
        // Conversion Options Section
        'conversion_options': 'Opsi Konversi',
        'jpg_to_webp': 'JPG → WebP',
        'jpg_to_webp_desc': 'Konversikan gambar JPG ke format WebP modern untuk ukuran file yang lebih kecil sambil mempertahankan kualitas.',
        'jpg_to_avif': 'JPG → AVIF',
        'jpg_to_avif_desc': 'Gunakan format AVIF canggih untuk rasio kompresi terbaik dan pemuatan situs web yang lebih cepat.',
        'jpg_to_png': 'JPG → PNG',
        'jpg_to_png_desc': 'Konversikan ke format PNG tanpa kehilangan, ideal untuk gambar yang memerlukan transparansi atau kualitas tinggi.',
        'jpg_to_tiff': 'JPG → TIFF',
        'jpg_to_tiff_desc': 'Konversikan ke format TIFF profesional, cocok untuk pencetakan, publikasi, dan alur kerja pengeditan profesional.',
        
        // Format descriptions
        'webp_desc': 'WebP - Kompresi baik, dukungan luas',
        'avif_desc': 'AVIF - Kompresi terbaik, format lebih baru',
        
        // AVIF specific messages
        'avif_processing': 'Memproses AVIF (mungkin membutuhkan waktu lebih lama)...',
        'avif_not_supported': 'Pengkodean AVIF tidak didukung di browser Anda',
        'using_avif_encoder': 'Menggunakan Squoosh untuk konversi AVIF...',
        'avif_conversion_failed': 'Konversi AVIF gagal',
        'avif_not_available': 'Encoder AVIF tidak tersedia, coba format lain',
        
        // Preview Area
        'original': 'Asli',
        'converted': 'Dikonversi',
        
        // Conversion status messages
        'converting': 'Mengkonversi...',
        'converting_fallback': 'Mengkonversi dengan metode cadangan...',
        'conversion_failed': 'Konversi gagal',
        'converted_size': 'Dikonversi ({0} KB)',
        'original_kept': 'Asli dipertahankan ({0} KB)',
        'size_info': 'Ukuran: {0} KB',
        'files_skipped': 'Beberapa file dilewati. Hanya file JPEG dan PNG yang didukung.',
        
        // Buttons
        'clear_all': 'Hapus Semua',
        'download': 'Unduh',
        'download_all': 'Unduh Semua',
        
        // Metadata removal message
        'metadata_note': 'Catatan: Metadata seperti EXIF akan dihapus selama konversi',
        
        // Key features section
        'key_features': 'Fitur Utama',
        'no_uploads': 'Tidak Ada Upload ke Server',
        'privacy_desc': 'Gambar Anda tetap pribadi. Tidak ada data yang dikirim ke server mana pun.',
        'local_processing': 'Pemrosesan Lokal',
        'local_desc': 'Semua pemrosesan dilakukan secara lokal di browser Anda.',
        'best_web': 'Terbaik untuk Web',
        'web_desc': 'Gambar teroptimasi yang sangat cocok untuk situs web dan aplikasi web.',
        'removes_metadata': 'Menghapus Metadata',
        'metadata_desc': 'Secara otomatis menghapus metadata yang tidak perlu selama konversi.',
        'fast_conversion': 'Konversi Cepat',
        'fast_desc': 'Proses konversi yang efisien dan sangat cepat.',
        'top_performance': 'Performa Terbaik',
        'performance_desc': 'Performa terbaik di kelasnya untuk konverter gambar lokal.',
        'batch_processing': 'Pemrosesan Batch',
        'batch_desc': 'Konversikan beberapa gambar sekaligus dengan pemrosesan massal.',
        'size_reduction': 'Pengurangan Ukuran',
        'size_desc': 'Secara signifikan mengurangi ukuran file sambil mempertahankan kualitas.',
        
        // Reviews section
        'user_reviews': 'Ulasan Pengguna',
        'review1_name': 'Robert Thompson',
        'review1_text': 'Konverter gambar ini mengubah permainan untuk bisnis fotografi saya. Fitur pemrosesan batch menghemat waktu kerja saya berjam-jam, dan kontrol kualitasnya luar biasa.',
        'review2_name': 'Jennifer Parker',
        'review2_text': 'Sebagai desainer grafis, saya menghargai presisi dan keandalan alat ini. Antarmukanya intuitif, dan kualitas konversi selalu sangat baik.',
        'review3_name': 'William Chen',
        'review3_text': 'Fitur pemrosesan lokal memberi saya ketenangan pikiran saat menangani gambar klien yang sensitif. Cepat, aman, dan profesional - persis yang saya butuhkan.',
        'review4_name': 'Emily Rodriguez',
        'review4_text': 'Saya menggunakan alat ini setiap hari untuk konten media sosial saya. Kemampuan untuk mempertahankan kualitas gambar sambil mengurangi ukuran file sangat berharga untuk pekerjaan saya.',
        'review5_name': 'Daniel Martinez',
        'review5_text': 'Sempurna untuk proyek pengembangan web saya. Fitur konversi batch dan fleksibilitas format menjadikan alat ini bagian penting dari alur kerja saya.',
        'review6_name': 'Sophie Anderson',
        'review6_text': 'Kecepatan dan efisiensi konverter ini luar biasa. Ini menangani batch gambar besar dengan mulus, menghemat waktu berharga dalam pekerjaan desain saya.',
        
        // FAQ Section
        'faq': 'Pertanyaan yang Sering Diajukan',
        'faq1_q': 'Format gambar apa yang bisa saya konversi ke WebP?',
        'faq1_a': 'Alat ini secara khusus dirancang untuk mengkonversi gambar JPG/JPEG dan PNG ke format WebP. Format lain tidak didukung saat ini.',
        'faq2_q': 'Apakah data saya aman saat menggunakan alat ini?',
        'faq2_a': 'Tentu saja! Semua pemrosesan dilakukan secara lokal di browser Anda. Gambar Anda tidak pernah meninggalkan perangkat Anda, dan tidak ada data yang dikirim ke server mana pun, memastikan privasi dan keamanan sepenuhnya.',
        'faq3_q': 'Apa itu WebP dan mengapa saya harus menggunakannya?',
        'faq3_a': 'WebP adalah format gambar modern yang dikembangkan oleh Google yang menyediakan kompresi lossless dan lossy yang unggul untuk gambar web. Gambar WebP biasanya 25-35% lebih kecil daripada file JPEG atau PNG yang sebanding sambil mempertahankan kualitas visual yang mirip, menghasilkan waktu pemuatan situs web yang lebih cepat dan penggunaan bandwidth yang berkurang.',
        'faq4_q': 'Pengaturan kualitas apa yang harus saya gunakan?',
        'faq4_a': 'Untuk sebagian besar penggunaan web, pengaturan kualitas antara 70-85% menawarkan keseimbangan terbaik antara ukuran file dan kualitas gambar. Nilai yang lebih rendah (di bawah 70%) akan menghasilkan file yang lebih kecil tetapi mungkin menunjukkan lebih banyak artefak kompresi. Nilai yang lebih tinggi (di atas 85%) akan mempertahankan kualitas yang lebih tinggi tetapi dengan hasil yang semakin berkurang pada pengurangan ukuran file.',
        'faq5_q': 'Apakah ada batasan berapa banyak gambar yang bisa saya konversi sekaligus?',
        'faq5_a': 'Tidak ada batasan tetap, tetapi kinerja tergantung pada kemampuan perangkat Anda. Untuk kinerja optimal, kami merekomendasikan untuk mengkonversi batch 20-30 gambar sekaligus. Batch yang lebih besar dapat menyebabkan browser Anda melambat.',
        'faq6_q': 'Apakah gambar WebP didukung di semua browser?',
        'faq6_a': 'WebP sekarang didukung di semua browser modern utama termasuk Chrome, Firefox, Edge, Safari, dan Opera. Namun, versi browser yang lebih lama mungkin tidak mendukung WebP. Untuk situs web, disarankan untuk menyediakan format fallback menggunakan elemen picture.',
        
        // Email
        'email': 'Email:'
    };