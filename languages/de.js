// de 语言文件

// 将翻译添加到全局翻译对象
window.translations = window.translations || {};

window.translations['de'] = {
        // Header
        'title': 'JPG Konverter',
        
        // Upload Area
        'drag_drop': 'Ziehen Sie Ihr Bild hierher oder',
        'browse': 'durchsuchen',
        
        // Controls
        'convert_to': 'Konvertieren zu:',
        'quality': 'Qualität:',
        'convert_all': 'Alle Konvertieren',
        
        // Conversion Options Section
        'conversion_options': 'Konvertierungsoptionen',
        'jpg_to_webp': 'JPG → WebP',
        'jpg_to_webp_desc': 'Konvertieren Sie JPG-Bilder in das moderne WebP-Format für kleinere Dateigröße bei gleichbleibender Qualität.',
        'jpg_to_avif': 'JPG → AVIF',
        'jpg_to_avif_desc': 'Verwenden Sie das fortschrittliche AVIF-Format für das beste Kompressionsverhältnis und schnelleres Website-Laden.',
        'jpg_to_png': 'JPG → PNG',
        'jpg_to_png_desc': 'Konvertieren Sie in das verlustfreie PNG-Format, ideal für Bilder, die Transparenz oder hohe Qualität erfordern.',
        'jpg_to_tiff': 'JPG → TIFF',
        'jpg_to_tiff_desc': 'Konvertieren Sie in das professionelle TIFF-Format, geeignet für Druck, Veröffentlichung und professionelle Bearbeitungsabläufe.',
        
        // Format descriptions
        'webp_desc': 'WebP - Good compression, wide support',
        'avif_desc': 'AVIF - Best compression, newer format',
        
        // AVIF specific messages
        'avif_processing': 'Processing AVIF (may take longer)...',
        'avif_not_supported': 'AVIF encoding not supported in your browser',
        'using_avif_encoder': 'Using Squoosh for AVIF conversion...',
        'avif_conversion_failed': 'AVIF conversion failed',
        'avif_not_available': 'AVIF encoder not available, try another format',
        
        // Preview Area
        'original': 'Original',
        'converted': 'Konvertiert',
        
        // Conversion status messages
        'converting': 'Konvertiere...',
        'converting_fallback': 'Konvertiere mit Fallback-Methode...',
        'conversion_failed': 'Konvertierung fehlgeschlagen',
        'converted_size': 'Konvertiert ({0} KB)',
        'original_kept': 'Original gehalten ({0} KB)',
        'size_info': 'Größe: {0} KB',
        'files_skipped': 'Einige Dateien wurden übersprungen. Nur JPEG und PNG-Dateien werden unterstützt.',
        
        // Buttons
        'clear_all': 'Alle Löschen',
        'download': 'Herunterladen',
        
        // Features Section
        'key_features': 'Hauptfunktionen',
        'no_uploads': 'Keine Uploads auf Server',
        'privacy_desc': 'Ihre Bilder bleiben privat. Es werden keine Daten an einen Server gesendet.',
        'local_processing': 'Lokale Verarbeitung',
        'local_desc': 'Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser.',
        'best_web': 'Optimal für das Web',
        'web_desc': 'Optimierte Bilder, die perfekt für Websites und Web-Apps geeignet sind.',
        'removes_metadata': 'Entfernt Metadaten',
        'metadata_desc': 'Entfernt automatisch unnötige Metadaten während der Konvertierung.',
        'fast_conversion': 'Schnelle Konvertierung',
        'fast_desc': 'Leistungsstarker und blitzschneller Konvertierungsprozess.',
        'top_performance': 'Höchste Leistung',
        'performance_desc': 'Beste Leistung für lokale Bildkonverter.',
        'batch_processing': 'Stapelverarbeitung',
        'batch_desc': 'Konvertieren Sie mehrere Bilder gleichzeitig mit Massenverarbeitung.',
        'size_reduction': 'Größenreduzierung',
        'size_desc': 'Reduziert die Dateigröße erheblich bei gleichbleibender Qualität.',
        
        // Reviews Section
        'user_reviews': 'Nutzerbewertungen',
        'review1_name': 'Robert Müller',
        'review1_text': 'Dieser Bildkonverter ist ein Wendepunkt für mein Fotografiegeschäft. Die Stapelverarbeitungsfunktion spart mir stundenlange Arbeit, und die Qualitätskontrolle ist außergewöhnlich.',
        'review2_name': 'Jennifer Weber',
        'review2_text': 'Als Grafikdesignerin schätze ich die Präzision und Zuverlässigkeit dieses Tools. Die Benutzeroberfläche ist intuitiv, und die Konvertierungsqualität ist durchgehend hervorragend.',
        'review3_name': 'Wilhelm Chen',
        'review3_text': 'Die lokale Verarbeitungsfunktion gibt mir ein beruhigendes Gefühl bei der Bearbeitung sensibler Kundenbilder. Schnell, sicher und professionell - genau das, was ich brauchte.',
        'review4_name': 'Emily Schneider',
        'review4_text': 'Ich benutze dieses Tool täglich für meine Social-Media-Inhalte. Die Fähigkeit, Bildqualität zu erhalten und gleichzeitig die Dateigröße zu reduzieren, ist für meine Arbeit von unschätzbarem Wert.',
        'review5_name': 'Daniel Martinez',
        'review5_text': 'Perfekt für meine Webentwicklungsprojekte. Die Stapelkonvertierungsfunktion und die Formatflexibilität machen dieses Tool zu einem wesentlichen Bestandteil meines Workflows.',
        'review6_name': 'Sophie Anderson',
        'review6_text': 'Die Geschwindigkeit und Effizienz dieses Konverters sind bemerkenswert. Er verarbeitet große Bildermengen nahtlos und spart mir wertvolle Zeit bei meiner Designarbeit.',
        
        // FAQ Section
        'faq': 'Häufig gestellte Fragen',
        'faq1_q': 'Welche Bildformate kann ich in WebP konvertieren?',
        'faq1_a': 'Dieses Tool ist speziell für die Konvertierung von JPG/JPEG- und PNG-Bildern in das WebP-Format konzipiert. Andere Formate werden derzeit nicht unterstützt.',
        'faq2_q': 'Sind meine Daten bei der Verwendung dieses Tools sicher?',
        'faq2_a': 'Absolut! Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser. Ihre Bilder verlassen niemals Ihr Gerät, und es werden keine Daten an einen Server gesendet, was vollständige Privatsphäre und Sicherheit gewährleistet.',
        'faq3_q': 'Was ist WebP und warum sollte ich es verwenden?',
        'faq3_a': 'WebP ist ein modernes Bildformat, das von Google entwickelt wurde und überlegene verlustfreie und verlustbehaftete Komprimierung für Webbilder bietet. WebP-Bilder sind typischerweise 25-35% kleiner als vergleichbare JPEG- oder PNG-Dateien bei ähnlicher visueller Qualität, was zu schnelleren Website-Ladezeiten und reduzierter Bandbreitennutzung führt.',
        'faq4_q': 'Welche Qualitätseinstellung sollte ich verwenden?',
        'faq4_a': 'Für die meisten Web-Anwendungen bietet eine Qualitätseinstellung zwischen 70-85% die beste Balance zwischen Dateigröße und Bildqualität. Niedrigere Werte (unter 70%) erzeugen kleinere Dateien, können aber mehr Kompressionsartefakte zeigen. Höhere Werte (über 85%) will maintain higher quality but with diminishing returns on file size reduction.',
        'faq4_a': 'Für die meisten Web-Anwendungen bietet eine Qualitätseinstellung zwischen 70-85% die beste Balance zwischen Dateigröße und Bildqualität. Niedrigere Werte (unter 70%) erzeugen kleinere Dateien, können aber mehr Kompressionsartefakte zeigen. Höhere Werte (über 85%) behalten eine höhere Qualität bei, jedoch mit abnehmenden Erträgen bei der Reduzierung der Dateigröße.',
        'faq5_q': 'Gibt es eine Begrenzung für die Anzahl der Bilder, die ich gleichzeitig konvertieren kann?',
        'faq5_a': 'Es gibt keine feste Grenze, aber die Leistung hängt von den Fähigkeiten Ihres Geräts ab. Für optimale Leistung empfehlen wir, Stapel von 20-30 Bildern auf einmal zu konvertieren. Größere Stapel können dazu führen, dass Ihr Browser langsamer wird.',
        'faq6_q': 'Werden WebP-Bilder in allen Browsern unterstützt?',
        'faq6_a': 'WebP wird jetzt in allen wichtigen modernen Browsern unterstützt, einschließlich Chrome, Firefox, Edge, Safari und Opera. Ältere Browser-Versionen unterstützen WebP möglicherweise nicht. Für Websites wird empfohlen, Fallback-Formate mit dem picture-Element bereitzustellen.',
        
        // Footer
        'email': 'E-Mail:'
    };