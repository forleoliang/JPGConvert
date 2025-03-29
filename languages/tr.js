// tr 语言文件

// 将翻译添加到全局翻译对象
window.translations = window.translations || {};

window.translations['tr'] = {
        // Header
        'title': 'JPG Dönüştürücü',
        
        // Upload Area
        'drag_drop': 'Görüntünüzü buraya sürükleyip bırakın veya',
        'browse': 'göz atın',
        
        // Controls
        'convert_to': 'Dönüştür:',
        'quality': 'Kalite:',
        'convert_all': 'Tümünü Dönüştür',
        
        // Conversion Options Section
        'conversion_options': 'Dönüşüm Seçenekleri',
        'jpg_to_webp': 'JPG → WebP',
        'jpg_to_webp_desc': 'JPG görüntülerini kaliteyi korurken dosya boyutunu küçültmek için modern WebP formatına dönüştürün.',
        'jpg_to_avif': 'JPG → AVIF',
        'jpg_to_avif_desc': 'En iyi sıkıştırma oranı ve daha hızlı web sitesi yükleme için gelişmiş AVIF formatını kullanın.',
        'jpg_to_png': 'JPG → PNG',
        'jpg_to_png_desc': 'Şeffaflık veya yüksek kalite gerektiren görüntüler için ideal olan kayıpsız PNG formatına dönüştürün.',
        'jpg_to_tiff': 'JPG → TIFF',
        'jpg_to_tiff_desc': 'Baskı, yayın ve profesyonel düzenleme iş akışları için uygun profesyonel TIFF formatına dönüştürün.',
        
        // Format descriptions
        'webp_desc': 'WebP - İyi sıkıştırma, geniş destek',
        'avif_desc': 'AVIF - En iyi sıkıştırma, daha yeni format',
        
        // AVIF specific messages
        'avif_processing': 'AVIF işleniyor (daha uzun sürebilir)...',
        'avif_not_supported': 'AVIF kodlaması tarayıcınızda desteklenmiyor',
        'using_avif_encoder': 'AVIF dönüşümü için Squoosh kullanılıyor...',
        'avif_conversion_failed': 'AVIF dönüşümü başarısız oldu',
        'avif_not_available': 'AVIF kodlayıcı kullanılamıyor, başka bir format deneyin',
        
        // Preview Area
        'original': 'Orijinal',
        'converted': 'Dönüştürülmüş',
        
        // Conversion status messages
        'converting': 'Dönüştürülüyor...',
        'converting_fallback': 'Yedek yöntemle dönüştürülüyor...',
        'conversion_failed': 'Dönüşüm başarısız oldu',
        'converted_size': 'Dönüştürüldü ({0} KB)',
        'original_kept': 'Orijinal korundu ({0} KB)',
        'size_info': 'Boyut: {0} KB',
        'files_skipped': 'Bazı dosyalar atlandı. Yalnızca JPEG ve PNG dosyaları desteklenir.',
        
        // Buttons
        'clear_all': 'Tümünü Temizle',
        'download': 'İndir',
        'download_all': 'Tümünü İndir',
        
        // Metadata removal message
        'metadata_note': 'Not: EXIF gibi meta veriler dönüşüm sırasında kaldırılacaktır',
        
        // Key features section
        'key_features': 'Temel Özellikler',
        'no_uploads': 'Sunucuya Yükleme Yok',
        'privacy_desc': 'Görüntüleriniz gizli kalır. Herhangi bir sunucuya veri gönderilmez.',
        'local_processing': 'Yerel İşleme',
        'local_desc': 'Tüm işlemler tarayıcınızda yerel olarak yapılır.',
        'best_web': 'Web için En İyi',
        'web_desc': 'Web siteleri ve web uygulamaları için mükemmel şekilde optimize edilmiş görüntüler.',
        'removes_metadata': 'Meta verileri kaldır',
        'metadata_desc': 'Meta verileri otomatik olarak dönüşüm sırasında kaldırır.',
        'fast_conversion': 'Hızlı dönüşüm',
        'fast_desc': 'Hızlı ve verimli bir dönüşüm işlemi.',
        'top_performance': 'Üst düzey performans',
        'performance_desc': 'Web için en iyi performansı elde etmek için görüntülerinizi optimize edin.',
        'batch_processing': 'Toplu işleme',
        'batch_desc': 'Birden çok görüntüyü birden fazla işlemle dönüştürün.',
        'size_reduction': 'Boyut azaltma',
        'size_desc': 'Görüntü kalitesini korumaya devam ederken dosya boyutunu azaltın.',
        
        // Reviews section
        'user_reviews': 'Kullanıcı tanıklıkları',
        'review1_name': 'Robert Thompson',
        'review1_text': 'Bu görüntü dönüştürücü, fotoğrafçılık işim için çok önemli bir araç oldu. Toplu işlem özelliği, çok sayıda iş saatimi tasarruf etmeme yardımcı oldu ve kalite kontrolü harikaydı.',
        'review2_name': 'Jennifer Parker',
        'review2_text': 'Grafik tasarımcı olarak, bu aracın hassasiyetini ve güvenilirliğini takdir ediyorum. Arayüzü sezgisel ve dönüşüm kalitesi sürekli olarak mükemmel, bu da benim için çok değerli.',
        'review3_name': 'William Chen',
        'review3_text': 'Yerel işlem özelliği, müşterilerime ait hassas görüntüleri işlerken içim rahat olmasını sağladı. Hızlı, güvenli ve profesyonel - tam olarak ihtiyacım olan şey.',
        'review4_name': 'Emilie Rodriguez',
        'review4_text': 'Her gün sosyal medya içeriğim için bu aracı kullanıyorum. Görüntü kalitesini korurken dosya boyutunu azaltma yeteneği benim işim için çok değerli.',
        'review5_name': 'Daniel Martinez',
        'review5_text': 'Web geliştirme projelerim için mükemmel. Toplu dönüşüm özelliği ve format esnekliği, bu aracı iş akışımın vazgeçilmez bir parçası haline getirdi.',
        'review6_name': 'Sophie Anderson',
        'review6_text': 'Bu dönüştürücünün hızı ve verimliliği inanılmaz. Büyük resim gruplarını sorunsuz bir şekilde işler ve tasarım işimde bana değerli zaman kazandırır.',
        
        // FAQ Section
        'faq': 'Sıkça Sorulan Sorular',
        'faq1_q': 'Hangileri WebP formatına dönüştürebilirim?',
        'faq1_a': 'Bu araç, özel olarak JPG/JPEG 및 PNG 이미지를 WebP 형식으로 변환하도록 설계되었습니다. 현재 다른 형식은 지원되지 않습니다.',
        'faq2_q': 'Bu araç kullanırken verilerim güvenli mi?',
        'faq2_a': 'Tabii! Tüm işlemler, tarayıcınızda yerel olarak gerçekleştirilir. Görüntünüz, cihazınızdan hiç ayrılmaz ve hiçbir veri sunucuya gönderilmez, böylece tam bir gizlilik ve güvenlik sağlar.',
        'faq3_q': 'WebP nedir ve neden kullanmalıyım?',
        'faq3_a': 'WebP, Google tarafından geliştirilen modern bir görüntü formatıdır ve web görüntüleri için üstün kayıpsız ve kayıpsız sıkıştırma sağlar. WebP görüntüleri, genellikle JPEG veya PNG ile karşılaştırılabilir görüntü kalitesini korumaya devam ederken, web sitelerinin yükleme hızını artırır ve bant genişliği kullanımını azaltır.',
        'faq4_q': 'Ne kadar bir kalite ayarı kullanmalıyım?',
        'faq4_a': 'Çoğunluk web kullanımı için, 70-85% arasındaki kalite ayarı, dosya boyutu ve görüntü kalitesi arasındaki en iyi dengeyi sağlar. Daha düşük değerler (70% altında), daha küçük dosyalar oluşturur, ancak daha fazla sıkıştırma arızası gösterebilir. Daha yüksek değerler (85% üzerinde), daha yüksek kaliteyi korur, ancak dosya boyutunu azaltma kazancı azalır.',
        'faq5_q': 'Birden çok görüntüyü aynı anda dönüştürebilir miyim?',
        'faq5_a': 'Hiçbir sabit sınır yok, ancak cihazınızın kapasitesine bağlıdır. En iyi performans için, 20-30 görüntüyü aynı anda dönüştürmeyi öneririz. Daha büyük gruplar, tarayıcınızın hızını yavaşlatabilir.',
        'faq6_q': 'WebP görüntüleri tüm tarayıcılarda destekleniyor mu?',
        'faq6_a': 'WebP, artık Chrome, Firefox, Edge, Safari ve Opera gibi tüm önemli modern tarayıcılarda destekleniyor. Ancak, eski tarayıcı versiyonları WebP desteklemeyebilir. Web siteleri için, picture öğesini kullanarak yedek formatlar sağlamayı öneririz.',
        
        // Email
        'email': 'E-posta:'
    };