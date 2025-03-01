const translations = {
    'en': {
        // Header
        'title': 'JPG/PNG to WebP Converter',
        
        // Upload Area
        'drag_drop': 'Drag and drop your image here or',
        'browse': 'browse',
        
        // Controls
        'convert_to': 'Convert to:',
        'quality': 'Quality:',
        'convert_all': 'Convert All',
        
        // Preview Area
        'original': 'Original',
        'converted': 'Converted',
        
        // Conversion status messages
        'converting': 'Converting...',
        'converting_fallback': 'Converting with fallback...',
        'conversion_failed': 'Conversion failed',
        'converted_size': 'Converted ({0} KB)',
        'original_kept': 'Original kept ({0} KB)',
        'size_info': 'Size: {0} KB',
        'files_skipped': 'Some files were skipped. Only JPEG and PNG files are supported.',
        
        // Buttons
        'clear_all': 'Clear All',
        'download': 'Download',
        'download_all': 'Download All',
        
        // Metadata removal message
        'metadata_note': 'Note: Metadata like EXIF will be removed during conversion',
        
        // Key features section
        'key_features': 'Key Features',
        'no_uploads': 'No Uploads to Server',
        'privacy_desc': 'Your images stay private. No data is sent to any server.',
        'local_processing': 'Local Processing',
        'local_desc': 'All processing is done locally in your browser.',
        'best_web': 'Best for Web',
        'web_desc': 'Optimized images perfectly suited for websites and web apps.',
        'removes_metadata': 'Removes Metadata',
        'metadata_desc': 'Automatically strips unnecessary metadata while converting.',
        'fast_conversion': 'Fast Conversion',
        'fast_desc': 'Performant and lightning-fast conversion process.',
        'top_performance': 'Top Performance',
        'performance_desc': 'Best-in-class performance for local image converters.',
        'batch_processing': 'Batch Processing',
        'batch_desc': 'Convert multiple images at once with bulk processing.',
        'size_reduction': 'Size Reduction',
        'size_desc': 'Significantly reduces file size while maintaining quality.',
        
        // Reviews section
        'user_reviews': 'User Reviews',
        'review1_name': 'Robert Thompson',
        'review1_text': 'This image converter is a game-changer for my photography business. The batch processing feature saves me hours of work, and the quality control is exceptional.',
        'review2_name': 'Jennifer Parker',
        'review2_text': 'As a graphic designer, I appreciate the precision and reliability of this tool. The interface is intuitive, and the conversion quality is consistently excellent.',
        'review3_name': 'William Chen',
        'review3_text': 'The local processing feature gives me peace of mind when handling sensitive client images. Fast, secure, and professional - exactly what I needed.',
        'review4_name': 'Emily Rodriguez',
        'review4_text': 'I use this tool daily for my social media content. The ability to maintain image quality while reducing file size is invaluable for my work.',
        'review5_name': 'Daniel Martinez',
        'review5_text': 'Perfect for my web development projects. The batch conversion feature and format flexibility make this tool an essential part of my workflow.',
        'review6_name': 'Sophie Anderson',
        'review6_text': 'The speed and efficiency of this converter are remarkable. It handles large batches of images seamlessly, saving me valuable time in my design work.',
        
        // FAQ Section
        'faq': 'Frequently Asked Questions',
        'faq1_q': 'What image formats can I convert to WebP?',
        'faq1_a': 'This tool is specifically designed to convert JPG/JPEG and PNG images to WebP format. Other formats are not supported at this time.',
        'faq2_q': 'Is my data secure when using this tool?',
        'faq2_a': 'Absolutely! All processing is done locally in your browser. Your images never leave your device, and no data is sent to any server, ensuring complete privacy and security.',
        'faq3_q': 'What is WebP and why should I use it?',
        'faq3_a': 'WebP is a modern image format developed by Google that provides superior lossless and lossy compression for web images. WebP images are typically 25-35% smaller than comparable JPEG or PNG files while maintaining similar visual quality, resulting in faster website loading times and reduced bandwidth usage.',
        'faq4_q': 'What quality setting should I use?',
        'faq4_a': 'For most web usage, a quality setting between 70-85% offers the best balance between file size and image quality. Lower values (below 70%) will produce smaller files but may show more compression artifacts. Higher values (above 85%) will maintain higher quality but with diminishing returns on file size reduction.',
        'faq5_q': 'Is there a limit to how many images I can convert at once?',
        'faq5_a': 'There\'s no fixed limit, but performance depends on your device\'s capabilities. For optimal performance, we recommend converting batches of 20-30 images at a time. Larger batches may cause your browser to slow down.',
        'faq6_q': 'Are WebP images supported in all browsers?',
        'faq6_a': 'WebP is now supported in all major modern browsers including Chrome, Firefox, Edge, Safari, and Opera. However, older browser versions might not support WebP. For websites, it\'s recommended to provide fallback formats using the picture element.',
        
        // Email
        'email': 'Email:'
    },
    'es': {
        // Header
        'title': 'Conversor de JPG/PNG a WebP',
        
        // Upload Area
        'drag_drop': 'Arrastra y suelta tu imagen aquí o',
        'browse': 'examinar',
        
        // Controls
        'convert_to': 'Convertir a:',
        'quality': 'Calidad:',
        'convert_all': 'Convertir Todo',
        
        // Preview Area
        'original': 'Original',
        'converted': 'Convertido',
        
        // Conversion status messages
        'converting': 'Convirtiendo...',
        'converting_fallback': 'Convirtiendo con método alternativo...',
        'conversion_failed': 'Conversión fallida',
        'converted_size': 'Convertido ({0} KB)',
        'original_kept': 'Original mantenido ({0} KB)',
        'size_info': 'Tamaño: {0} KB',
        'files_skipped': 'Se omitieron algunos archivos. Solo se admiten archivos JPEG y PNG.',
        
        // Buttons
        'clear_all': 'Borrar Todo',
        'download': 'Descargar',
        
        // Features Section
        'key_features': 'Características Principales',
        'no_uploads': 'Sin Cargas al Servidor',
        'privacy_desc': 'Tus imágenes permanecen privadas. No se envían datos a ningún servidor.',
        'local_processing': 'Procesamiento Local',
        'local_desc': 'Todo el procesamiento se realiza localmente en tu navegador.',
        'best_web': 'Ideal para Web',
        'web_desc': 'Imágenes optimizadas perfectamente adecuadas para sitios web y aplicaciones web.',
        'removes_metadata': 'Elimina Metadatos',
        'metadata_desc': 'Elimina automáticamente los metadatos innecesarios durante la conversión.',
        'fast_conversion': 'Conversión Rápida',
        'fast_desc': 'Proceso de conversión eficiente y ultrarrápido.',
        'top_performance': 'Máximo Rendimiento',
        'performance_desc': 'El mejor rendimiento para conversores de imágenes locales.',
        'batch_processing': 'Procesamiento por Lotes',
        'batch_desc': 'Convierte múltiples imágenes a la vez con procesamiento masivo.',
        'size_reduction': 'Reducción de Tamaño',
        'size_desc': 'Reduce significativamente el tamaño del archivo manteniendo la calidad.',
        
        // Reviews Section
        'user_reviews': 'Opiniones de Usuarios',
        'review1_name': 'Roberto Torres',
        'review1_text': 'Este conversor de imágenes ha cambiado mi negocio de fotografía. La función de procesamiento por lotes me ahorra horas de trabajo, y el control de calidad es excepcional.',
        'review2_name': 'Juana Pérez',
        'review2_text': 'Como diseñadora gráfica, aprecio la precisión y fiabilidad de esta herramienta. La interfaz es intuitiva y la calidad de conversión es constantemente excelente.',
        'review3_name': 'Guillermo Chen',
        'review3_text': 'La función de procesamiento local me da tranquilidad al manejar imágenes confidenciales de clientes. Rápido, seguro y profesional, exactamente lo que necesitaba.',
        'review4_name': 'Elena Rodríguez',
        'review4_text': 'Uso esta herramienta diariamente para mi contenido en redes sociales. La capacidad de mantener la calidad de imagen mientras se reduce el tamaño del archivo es invaluable para mi trabajo.',
        'review5_name': 'Daniel Martínez',
        'review5_text': 'Perfecto para mis proyectos de desarrollo web. La función de conversión por lotes y la flexibilidad de formato hacen que esta herramienta sea una parte esencial de mi flujo de trabajo.',
        'review6_name': 'Sofía Andrade',
        'review6_text': 'La velocidad y eficiencia de este conversor son notables. Maneja grandes lotes de imágenes sin problemas, ahorrándome un tiempo valioso en mi trabajo de diseño.',
        
        // FAQ Section
        'faq': 'Preguntas Frecuentes',
        'faq1_q': '¿Qué formatos de imagen puedo convertir a WebP?',
        'faq1_a': 'Esta herramienta está diseñada específicamente para convertir imágenes JPG/JPEG y PNG al formato WebP. Otros formatos no son compatibles por el momento.',
        'faq2_q': '¿Están seguros mis datos al usar esta herramienta?',
        'faq2_a': '¡Absolutamente! Todo el procesamiento se realiza localmente en tu navegador. Tus imágenes nunca salen de tu dispositivo y no se envían datos a ningún servidor, lo que garantiza total privacidad y seguridad.',
        'faq3_q': '¿Qué es WebP y por qué debería usarlo?',
        'faq3_a': 'WebP es un formato de imagen moderno desarrollado por Google que proporciona una compresión superior, con o sin pérdida, para imágenes web. Las imágenes WebP son típicamente un 25-35% más pequeñas que los archivos JPEG o PNG comparables, manteniendo una calidad visual similar, lo que resulta en tiempos de carga de sitios web más rápidos y un menor uso de ancho de banda.',
        'faq4_q': '¿Qué configuración de calidad debería usar?',
        'faq4_a': 'Para la mayoría de los usos web, una configuración de calidad entre 70-85% ofrece el mejor equilibrio entre tamaño de archivo y calidad de imagen. Valores más bajos (por debajo del 70%) will produce smaller files but may show more compression artifacts. Higher values (above 85%) will maintain higher quality but with diminishing returns on file size reduction.',
        'faq5_q': '¿Hay un límite de cuántas imágenes puedo convertir a la vez?',
        'faq5_a': 'No hay un límite fijo, pero el rendimiento depende de las capacidades de tu dispositivo. Para un rendimiento óptimo, recomendamos convertir lotes de 20-30 imágenes a la vez. Lotes más grandes pueden hacer que tu navegador se ralentice.',
        'faq6_q': '¿Las imágenes WebP son compatibles con todos los navegadores?',
        'faq6_a': 'WebP ahora es compatible con todos los principales navegadores modernos, incluyendo Chrome, Firefox, Edge, Safari y Opera. Sin embargo, las versiones más antiguas de navegadores podrían no admitir WebP. Para sitios web, se recomienda proporcionar formatos alternativos utilizando el elemento picture.',
        
        // Footer
        'email': 'Correo electrónico:'
    },
    'pt': {
        // Header
        'title': 'Conversor de JPG/PNG para WebP',
        
        // Upload Area
        'drag_drop': 'Arraste e solte sua imagem aqui ou',
        'browse': 'procurar',
        
        // Controls
        'convert_to': 'Converter para:',
        'quality': 'Qualidade:',
        'convert_all': 'Converter Tudo',
        
        // Preview Area
        'original': 'Original',
        'converted': 'Convertido',
        
        // Conversion status messages
        'converting': 'Convertendo...',
        'converting_fallback': 'Convertendo com método alternativo...',
        'conversion_failed': 'Falha na conversão',
        'converted_size': 'Convertido ({0} KB)',
        'original_kept': 'Original mantido ({0} KB)',
        'size_info': 'Tamanho: {0} KB',
        'files_skipped': 'Alguns arquivos foram ignorados. Apenas arquivos JPEG e PNG são suportados.',
        
        // Buttons
        'clear_all': 'Limpar Tudo',
        'download': 'Baixar',
        
        // Features Section
        'key_features': 'Principais Recursos',
        'no_uploads': 'Sem Uploads para Servidor',
        'privacy_desc': 'Suas imagens permanecem privadas. Nenhum dado é enviado para qualquer servidor.',
        'local_processing': 'Processamento Local',
        'local_desc': 'Todo o processamento é feito localmente em seu navegador.',
        'best_web': 'Ideal para Web',
        'web_desc': 'Imagens otimizadas perfeitamente adequadas para sites e aplicativos web.',
        'removes_metadata': 'Remove Metadados',
        'metadata_desc': 'Remove automaticamente metadados desnecessários durante a conversão.',
        'fast_conversion': 'Conversão Rápida',
        'fast_desc': 'Processo de conversão eficiente e extremamente rápido.',
        'top_performance': 'Desempenho Superior',
        'performance_desc': 'Melhor desempenho da categoria para conversores de imagem locais.',
        'batch_processing': 'Processamento em Lote',
        'batch_desc': 'Converta várias imagens de uma só vez com processamento em massa.',
        'size_reduction': 'Riduzione di Tamanho',
        'size_desc': 'Riduce significativamente la dimensione del file mantenendo la qualità.',
        
        // Reviews Section
        'user_reviews': 'Avaliações dos Usuários',
        'review1_name': 'Roberto Silva',
        'review1_text': 'Este conversor de imagens revolucionou meu negócio de fotografia. O recurso de processamento em lote me economiza horas de trabalho, e o controle de qualidade é excepcional.',
        'review2_name': 'Juliana Parreira',
        'review2_text': 'Como designer gráfica, aprecio a precisão e confiabilidade desta ferramenta. A interface é intuitiva e a qualidade da conversão é consistentemente excelente.',
        'review3_name': 'Wilson Chang',
        'review3_text': 'O recurso de processamento local me dá tranquilidade ao lidar com imagens confidenciais de clientes. Rápido, seguro e profissional - exatamente o que eu precisava.',
        'review4_name': 'Eduarda Rodrigues',
        'review4_text': 'Uso esta ferramenta diariamente para meu conteúdo de mídia social. A capacidade de manter a qualidade da imagem enquanto reduz o tamanho do arquivo é inestimável para meu trabalho.',
        'review5_name': 'Daniel Martins',
        'review5_text': 'Perfeito para meus projetos de desenvolvimento web. O recurso de conversão em lote e a flexibilidade de formato tornam esta ferramenta uma parte essencial do meu fluxo de trabalho.',
        'review6_name': 'Sofia Andrade',
        'review6_text': 'A velocidade e eficiência deste conversor são notáveis. Ele processa grandes lotes de imagens sem problemas, economizando um tempo valioso no meu trabalho de design.',
        
        // FAQ Section
        'faq': 'Perguntas Frequentes',
        'faq1_q': 'Quais formatos de imagem posso converter para WebP?',
        'faq1_a': 'Esta ferramenta foi projetada especificamente para converter imagens JPG/JPEG e PNG para o formato WebP. Outros formatos não são suportados no momento.',
        'faq2_q': 'Meus dados estão seguros ao usar esta ferramenta?',
        'faq2_a': 'Absolutamente! Todo o processamento é feito localmente no seu navegador. Suas imagens nunca saem do seu dispositivo, e nenhum dado é enviado para qualquer servidor, garantindo total privacidade e segurança.',
        'faq3_q': 'O que é WebP e por que devo usá-lo?',
        'faq3_a': 'WebP é um formato de imagem moderno desenvolvido pelo Google que fornece compressão superior com ou sem perdas para imagens web. As imagens WebP são tipicamente 25-35% menores que arquivos JPEG ou PNG comparáveis, mantendo qualidade visual similar, resultando em tempos de carregamento de sites mais rápidos e uso reduzido de largura de banda.',
        'faq4_q': 'Qual configuração de qualidade devo usar?',
        'faq4_a': 'Para a maioria dos usos na web, uma configuração de qualité entre 70-85% oferece o melhor equilíbrio entre tamanho de arquivo e qualité de imagem. Valores mais baixos (abaixo de 70%) produrrão arquivos menores, mas podem mostrar mais artefatos de compressão. Valores mais altos (acima de 85%) manterão maior qualidade, mas com retornos decrescentes na redução do tamanho do arquivo.',
        'faq5_q': 'Existe um limite de quantas imagens posso converter de uma vez?',
        'faq5_a': 'Não há um limite fixo, mas o desempenho depende das capacidades do seu dispositivo. Para um desempenho ideal, recomendamos converter lotes de 20-30 imagens por vez. Lotes maiores podem fazer com que seu navegador fique lento.',
        'faq6_q': 'As imagens WebP são suportadas em todos os navegadores?',
        'faq6_a': 'WebP agora é suportado em todos os principais navegadores modernos, incluindo Chrome, Firefox, Edge, Safari e Opera. No entanto, versões mais antigas de navegadores podem não suportar WebP. Para sites, é recomendável fornecer formatos alternativos usando o elemento picture.',
        
        // Footer
        'email': 'Email:'
    },
    'fr': {
        // Header
        'title': 'Convertisseur JPG/PNG en WebP',
        
        // Upload Area
        'drag_drop': 'Glissez et déposez votre image ici ou',
        'browse': 'parcourir',
        
        // Controls
        'convert_to': 'Convertir en:',
        'quality': 'Qualité:',
        'convert_all': 'Tout Convertir',
        
        // Preview Area
        'original': 'Original',
        'converted': 'Converti',
        
        // Conversion status messages
        'converting': 'Conversion en cours...',
        'converting_fallback': 'Conversion avec méthode alternative...',
        'conversion_failed': 'Échec de la conversion',
        'converted_size': 'Converti ({0} Ko)',
        'original_kept': 'Original conservé ({0} Ko)',
        'size_info': 'Taille: {0} Ko',
        'files_skipped': 'Certains fichiers ont été ignorés. Seuls les fichiers JPEG et PNG sont pris en charge.',
        
        // Buttons
        'clear_all': 'Tout Effacer',
        'download': 'Télécharger',
        
        // Features Section
        'key_features': 'Fonctionnalités Clés',
        'no_uploads': 'Pas d\'Envoi au Serveur',
        'privacy_desc': 'Vos images restent privées. Aucune donnée n\'est envoyée à un serveur.',
        'local_processing': 'Traitement Local',
        'local_desc': 'Tout le traitement est effectué localement dans votre navigateur.',
        'best_web': 'Idéal pour le Web',
        'web_desc': 'Images optimisées parfaitement adaptées aux sites et applications web.',
        'removes_metadata': 'Supprime les Métadonnées',
        'metadata_desc': 'Élimine automatiquement les métadonnées inutiles lors de la conversion.',
        'fast_conversion': 'Conversion Rapide',
        'fast_desc': 'Processus de conversion performant et ultra-rapide.',
        'top_performance': 'Performance Optimale',
        'performance_desc': 'Meilleures performances pour les convertisseurs d\'images locaux.',
        'batch_processing': 'Traitement par Lots',
        'batch_desc': 'Convertissez plusieurs images à la fois avec le traitement en masse.',
        'size_reduction': 'Réduction de Taille',
        'size_desc': 'Réduit considérablement la taille du fichier tout en maintenant la qualité.',
        
        // Reviews Section
        'user_reviews': 'Avis des Utilisateurs',
        'review1_name': 'Robert Dupont',
        'review1_text': 'Ce convertisseur d\'images a changé la donne pour mon entreprise de photographie. La fonction de traitement par lots me fait gagner des heures de travail, et le contrôle de la qualité est exceptionnel.',
        'review2_name': 'Jeanne Parquet',
        'review2_text': 'En tant que graphiste, j\'apprécie la précision et la fiabilité de cet outil. L\'interface est intuitive et la qualité de conversion est toujours excellente.',
        'review3_name': 'William Chen',
        'review3_text': 'La fonction de traitement local me rassure lorsque je manipule des images sensibles de clients. Rapide, sécurisé et professionnel - exactement ce dont j\'avais besoin.',
        'review4_name': 'Émilie Rodriguez',
        'review4_text': 'J\'utilise cet outil quotidiennement pour mon contenu de médias sociaux. La capacité à maintenir la qualité d\'image tout en réduisant la taille du fichier est inestimable pour mon travail.',
        'review5_name': 'Daniel Martin',
        'review5_text': 'Parfait pour mes projets de développement web. La fonction de conversion par lots et la flexibilité du format font de cet outil une partie essentielle de mon flux de travail.',
        'review6_name': 'Sophie André',
        'review6_text': 'La vitesse et l\'efficacité de ce convertisseur sont remarquables. Il gère de grands lots d\'images sans problème, me faisant gagner un temps précieux dans mon travail de conception.',
        
        // FAQ Section
        'faq': 'Questions Fréquemment Posées',
        'faq1_q': 'Quels formats d\'image puis-je convertir en WebP?',
        'faq1_a': 'Cet outil est spécialement conçu pour convertir des images JPG/JPEG et PNG au format WebP. Les autres formats ne sont pas pris en charge pour le moment.',
        'faq2_q': 'Mes données sont-elles sécurisées lors de l\'utilisation de cet outil?',
        'faq2_a': 'Absolument! Tout le traitement est effectué localement dans votre navigateur. Vos images ne quittent jamais votre appareil et aucune donnée n\'est envoyée à un serveur, assurant une confidentialité et une sécurité complètes.',
        'faq3_q': 'Qu\'est-ce que WebP et pourquoi devrais-je l\'utiliser?',
        'faq3_a': 'WebP est un format d\'image moderne développé par Google qui offre une compression supérieure avec ou sans perte pour les images web. Les images WebP sont généralement 25-35% plus petites que les fichiers JPEG ou PNG comparables tout en maintenant une qualité visuelle similaire, ce qui se traduit par des temps de chargement de site web plus rapides et une utilisation réduite de la bande passante.',
        'faq4_q': 'Quel réglage de qualité devrais-je utiliser?',
        'faq4_a': 'Pour la plupart des usages web, un réglage de qualité entre 70-85% offre le meilleur équilibre entre taille de fichier et qualité d\'image. Des valeurs plus basses (inférieures à 70%) produiront des fichiers plus petits mais peuvent montrer plus d\'artefacts de compression. Des valeurs plus élevées (supérieures à 85%) maintiendront une qualité plus élevée mais avec des rendements décroissants sur la réduction de la taille du fichier.',
        'faq5_q': 'Y a-t-il une limite au nombre d\'images que je peux convertir à la fois?',
        'faq5_a': 'Il n\'y a pas de limite fixe, mais les performances dépendent des capacités de votre appareil. Pour des performances optimales, nous recommandons de convertir des lots de 20-30 images à la fois. Des lots plus importants peuvent ralentir votre navigateur.',
        'faq6_q': 'Les images WebP sont-elles prises en charge dans tous les navigateurs?',
        'faq6_a': 'WebP est désormais pris en charge dans tous les principaux navigateurs modernes, notamment Chrome, Firefox, Edge, Safari et Opera. Cependant, les versions plus anciennes des navigateurs pourraient ne pas prendre en charge WebP. Pour les sites web, il est recommandé de fournir des formats de secours en utilisant l\'élément picture.',
        
        // Footer
        'email': 'Email:'
    },
    'de': {
        // Header
        'title': 'JPG/PNG zu WebP Konverter',
        
        // Upload Area
        'drag_drop': 'Ziehen Sie Ihr Bild hierher oder',
        'browse': 'durchsuchen',
        
        // Controls
        'convert_to': 'Konvertieren zu:',
        'quality': 'Qualität:',
        'convert_all': 'Alle Konvertieren',
        
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
        'faq4_a': 'Für die meisten Web-Anwendungen bietet eine Qualitätseinstellung zwischen 70-85% die beste Balance zwischen Dateigröße und Bildqualität. Niedrigere Werte (unter 70%) erzeugen kleinere Dateien, können aber mehr Kompressionsartefakte zeigen. Höhere Werte (über 85%) behalten eine höhere Qualität bei, jedoch mit abnehmenden Erträgen bei der Reduzierung der Dateigröße.',
        'faq5_q': 'Gibt es eine Begrenzung für die Anzahl der Bilder, die ich gleichzeitig konvertieren kann?',
        'faq5_a': 'Es gibt keine feste Grenze, aber die Leistung hängt von den Fähigkeiten Ihres Geräts ab. Für optimale Leistung empfehlen wir, Stapel von 20-30 Bildern auf einmal zu konvertieren. Größere Stapel können dazu führen, dass Ihr Browser langsamer wird.',
        'faq6_q': 'Werden WebP-Bilder in allen Browsern unterstützt?',
        'faq6_a': 'WebP wird jetzt in allen wichtigen modernen Browsern unterstützt, einschließlich Chrome, Firefox, Edge, Safari und Opera. Ältere Browser-Versionen unterstützen WebP möglicherweise nicht. Für Websites wird empfohlen, Fallback-Formate mit dem picture-Element bereitzustellen.',
        
        // Footer
        'email': 'E-Mail:'
    },
    'it': {
        // Header
        'title': 'Convertitore da JPG/PNG a WebP',
        
        // Upload Area
        'drag_drop': 'Trascina e rilascia la tua immagine qui o',
        'browse': 'sfoglia',
        
        // Controls
        'convert_to': 'Converti in:',
        'quality': 'Qualità:',
        'convert_all': 'Converti Tutto',
        
        // Preview Area
        'original': 'Originale',
        'converted': 'Convertito',
        
        // Conversion status messages
        'converting': 'Conversione in corso...',
        'converting_fallback': 'Conversione con metodo alternativo...',
        'conversion_failed': 'Conversione fallita',
        'converted_size': 'Convertito ({0} KB)',
        'original_kept': 'Originale mantenuto ({0} KB)',
        'size_info': 'Dimensione: {0} KB',
        'files_skipped': 'Alcuni file sono stati ignorati. Sono supportati solo file JPEG e PNG.',
        
        // Buttons
        'clear_all': 'Cancella Tutto',
        'download': 'Scarica',
        
        // Features Section
        'key_features': 'Caratteristiche Principali',
        'no_uploads': 'Nessun Caricamento sul Server',
        'privacy_desc': 'Le tue immagini rimangono private. Nessun dato viene inviato a server esterni.',
        'local_processing': 'Elaborazione Locale',
        'local_desc': 'Tutta l\'elaborazione avviene localmente nel tuo browser.',
        'best_web': 'Ideale per il Web',
        'web_desc': 'Immagini ottimizzate perfettamente adatte per siti web e applicazioni web.',
        'removes_metadata': 'Rimuove i Metadati',
        'metadata_desc': 'Elimina automaticamente i metadati non necessari durante la conversione.',
        'fast_conversion': 'Conversione Rapida',
        'fast_desc': 'Processo di conversione performante e velocissimo.',
        'top_performance': 'Prestazioni Ottimali',
        'performance_desc': 'Le migliori prestazioni per i convertitori di immagini locali.',
        'batch_processing': 'Elaborazione in Batch',
        'batch_desc': 'Converti più immagini contemporaneamente con l\'elaborazione in massa.',
        'size_reduction': 'Riduzione delle Dimensioni',
        'size_desc': 'Riduce significativamente la dimensione del file mantenendo la qualità.',
        
        // Reviews Section
        'user_reviews': 'Recensioni degli Utenti',
        'review1_name': 'Roberto Tomasi',
        'review1_text': 'Questo convertitore di immagini ha rivoluzionato la mia attività fotografica. La funzione di elaborazione batch mi fa risparmiare ore di lavoro e il controllo della qualità è eccezionale.',
        'review2_name': 'Gianna Parisi',
        'review2_text': 'Come graphic designer, apprezzo la precisione e l\'affidabilità di questo strumento. L\'interfaccia è intuitiva e la qualità di conversione è costantemente eccellente.',
        'review3_name': 'William Chen',
        'review3_text': 'La funzione di elaborazione locale mi dà tranquillità quando gestisco immagini sensibili dei clienti. Veloce, sicuro e professionale - esattamente ciò di cui avevo bisogno.',
        'review4_name': 'Emilia Rodriguez',
        'review4_text': 'Uso questo strumento quotidianamente per i miei contenuti sui social media. La capacità di mantenere la qualità dell\'immagine riducendo al contempo le dimensioni del file è inestimabile per il mio lavoro.',
        'review5_name': 'Daniele Martini',
        'review5_text': 'Perfetto per i miei progetti di sviluppo web. La funzione di conversione batch e la flessibilità del formato rendono questo strumento una parte essenziale del mio flusso di lavoro.',
        'review6_name': 'Sofia Andolini',
        'review6_text': 'La velocità e l\'efficienza di questo convertitore sono notevoli. Gestisce grandi batch di immagini senza problemi, facendomi risparmiare tempo prezioso nel mio lavoro di design.',
        
        // FAQ Section
        'faq': 'Domande Frequenti',
        'faq1_q': 'Quali formati di immagine posso convertire in WebP?',
        'faq1_a': 'Questo strumento è specificamente progettato per convertire immagini JPG/JPEG e PNG nel formato WebP. Altri formati non sono supportati al momento.',
        'faq2_q': 'I miei dati sono sicuri quando uso questo strumento?',
        'faq2_a': 'Assolutamente! Tutta l\'elaborazione viene effettuata localmente nel tuo browser. Le tue immagini non lasciano mai il tuo dispositivo e nessun dato viene inviato a server esterni, garantendo completa privacy e sicurezza.',
        'faq3_q': 'Cos\'è WebP e perché dovrei usarlo?',
        'faq3_a': 'WebP è un formato di immagine moderno sviluppato da Google che fornisce una compressione superiore sia con perdita che senza perdita per le immagini web. Le immagini WebP sono tipicamente del 25-35% più piccole rispetto a file JPEG o PNG comparabili mantenendo una qualità visiva simile, risultando in tempi di caricamento più rapidi dei siti web e un uso ridotto della larghezza di banda.',
        'faq4_q': 'Quale impostazione di qualità dovrei usare?',
        'faq4_a': 'Per la maggior parte degli usi web, un\'impostazione di qualità tra il 70-85% offre il miglior equilibrio tra dimensione del file e qualità dell\'immagine. Valori più bassi (sotto il 70%) produrranno file più piccoli ma potrebbero mostrare più artefatti di compressione. Valori più alti (sopra l\'85%) manterranno una qualità più elevata ma con rendimenti decrescenti sulla riduzione della dimensione del file.',
        'faq5_q': 'C\'è un limite a quante immagini posso convertire contemporaneamente?',
        'faq5_a': 'Non c\'è un limite fisso, ma le prestazioni dipendono dalle capacità del tuo dispositivo. Per prestazioni ottimali, consigliamo di convertire batch di 20-30 immagini alla volta. Batch più grandi potrebbero causare rallentamenti del browser.',
        'faq6_q': 'Le immagini WebP sono supportate in tutti i browser?',
        'faq6_a': 'WebP è ora supportato in tutti i principali browser moderni tra cui Chrome, Firefox, Edge, Safari e Opera. Tuttavia, le versioni più vecchie dei browser potrebbero non supportare WebP. Per i siti web, si consiglia di fornire formati alternativi utilizzando l\'elemento picture.',
        
        // Footer
        'email': 'Email:'
    },
    'el': {
        // Header
        'title': 'Μετατροπέας JPG/PNG σε WebP',
        
        // Upload Area
        'drag_drop': 'Σύρετε και αποθέστε την εικόνα σας εδώ ή',
        'browse': 'αναζήτηση',
        
        // Controls
        'convert_to': 'Μετατροπή σε:',
        'quality': 'Ποιότητα:',
        'convert_all': 'Μετατροπή Όλων',
        
        // Preview Area
        'original': 'Αρχική',
        'converted': 'Μετατραπείσα',
        
        // Conversion status messages
        'converting': 'Μετατροπή...',
        'converting_fallback': 'Μετατροπή με εναλλακτική μέθοδο...',
        'conversion_failed': 'Η μετατροπή απέτυχε',
        'converted_size': 'Μετατράπηκε ({0} KB)',
        'original_kept': 'Διατηρήθηκε το πρωτότυπο ({0} KB)',
        'size_info': 'Μέγεθος: {0} KB',
        'files_skipped': 'Ορισμένα αρχεία παραλείφθηκαν. Υποστηρίζονται μόνο αρχεία JPEG και PNG.',
        
        // Buttons
        'clear_all': 'Καθαρισμός Όλων',
        'download': 'Λήψη',
        
        // Features Section
        'key_features': 'Βασικά Χαρακτηριστικά',
        'no_uploads': 'Χωρίς Μεταφορτώσεις στον Διακομιστή',
        'privacy_desc': 'Οι εικόνες σας παραμένουν ιδιωτικές. Δεν αποστέλλονται δεδομένα σε κανέναν διακομιστή.',
        'local_processing': 'Τοπική Επεξεργασία',
        'local_desc': 'Όλη η επεξεργασία γίνεται τοπικά στο πρόγραμμα περιήγησής σας.',
        'best_web': 'Ιδανικό για τον Ιστό',
        'web_desc': 'Βελτιστοποιημένες εικόνες κατάλληλες για ιστοσελίδες και διαδικτυακές εφαρμογές.',
        'removes_metadata': 'Αφαίρεση Μεταδεδομένων',
        'metadata_desc': 'Αυτόματη αφαίρεση περιττών μεταδεδομένων κατά τη μετατροπή.',
        'fast_conversion': 'Γρήγορη Μετατροπή',
        'fast_desc': 'Αποδοτική και αστραπιαία διαδικασία μετατροπής.',
        'top_performance': 'Κορυφαία Απόδοση',
        'performance_desc': 'Η καλύτερη απόδοση στην κατηγορία των τοπικών μετατροπέων εικόνας.',
        'batch_processing': 'Μαζική Επεξεργασία',
        'batch_desc': 'Μετατροπή πολλαπλών εικόνων ταυτόχρονα με μαζική επεξεργασία.',
        'size_reduction': 'Μείωση Μεγέθους',
        'size_desc': 'Σημαντική μείωση του μεγέθους του αρχείου διατηρώντας την ποιότητα.',
        
        // Reviews Section
        'user_reviews': 'Κριτικές Χρηστών',
        'review1_name': 'Ρόμπερτ Θωμόπουλος',
        'review1_text': 'Αυτός ο μετατροπέας εικόνων άλλαξε το παιχνίδι για την επιχείρηση φωτογραφίας μου. Η λειτουργία επεξεργασίας παρτίδας μου εξοικονομεί ώρες εργασίας, και ο έλεγχος ποιότητας είναι εξαιρετικός.',
        'review2_name': 'Τζένιφερ Παπαδοπούλου',
        'review2_text': 'Ως γραφίστρια, εκτιμώ την ακρίβεια και την αξιοπιστία αυτού του εργαλείου. Η διεπαφή είναι διαισθητική και η ποιότητα μετατροπής είναι σταθερά εξαιρετική.',
        'review3_name': 'Βασίλης Τσεν',
        'review3_text': 'Η λειτουργία τοπικής επεξεργασίας μου δίνει ηρεμία όταν χειρίζομαι ευαίσθητες εικόνες πελατών. Γρήγορο, ασφαλές και επαγγελματικό - ακριβώς αυτό που χρειαζόμουν.',
        'review4_name': 'Αιμιλία Ροδρίγκεζ',
        'review4_text': 'Χρησιμοποιώ αυτό το εργαλείο καθημερινά για το περιεχόμενο των κοινωνικών μου δικτύων. Η δυνατότητα διατήρησης της ποιότητας εικόνας ενώ μειώνεται το μέγεθος του αρχείου είναι ανεκτίμητη για τη δουλειά μου.',
        'review5_name': 'Δανιήλ Μαρτίνεζ',
        'review5_text': 'Τέλειο για τα έργα ανάπτυξης ιστοσελίδων μου. Η λειτουργία μαζικής μετατροπής και η ευελιξία μορφής καθιστούν αυτό το εργαλείο απαραίτητο μέρος της ροής εργασίας μου.',
        'review6_name': 'Σοφία Ανδρέου',
        'review6_text': 'Η ταχύτητα και η αποτελεσματικότητα αυτού του μετατροπέα είναι αξιοσημείωτες. Χειρίζεται μεγάλες παρτίδες εικόνων απρόσκοπτα, εξοικονομώντας μου πολύτιμο χρόνο στη σχεδιαστική μου εργασία.',
        
        // FAQ Section
        'faq': 'Συχνές Ερωτήσεις',
        'faq1_q': 'Ποιες μορφές εικόνας μπορώ να μετατρέψω σε WebP;',
        'faq1_a': 'Αυτό το εργαλείο είναι ειδικά σχεδιασμένο για τη μετατροπή εικόνων JPG/JPEG και PNG σε μορφή WebP. Άλλες μορφές δεν υποστηρίζονται προς το παρόν.',
        'faq2_q': 'Είναι ασφαλή τα δεδομένα μου όταν χρησιμοποιώ αυτό το εργαλείο;',
        'faq2_a': 'Απολύτως! Όλη η επεξεργασία γίνεται τοπικά στο πρόγραμμα περιήγησής σας. Οι εικόνες σας δεν φεύγουν ποτέ από τη συσκευή σας και δεν αποστέλλονται δεδομένα σε κανέναν διακομιστή, διασφαλίζοντας πλήρη ιδιωτικότητα και ασφάλεια.',
        'faq3_q': 'Τι είναι το WebP και γιατί να το χρησιμοποιήσω;',
        'faq3_a': 'Το WebP είναι μια σύγχρονη μορφή εικόνας που αναπτύχθηκε από την Google και παρέχει ανώτερη συμπίεση με απώλειες και χωρίς απώλειες για εικόνες στον ιστό. Οι εικόνες WebP είναι συνήθως 25-35% μικρότερες από συγκρίσιμα αρχεία JPEG ή PNG διατηρώντας παρόμοια οπτική ποιότητα, με αποτέλεσμα ταχύτερους χρόνους φόρτωσης ιστοσελίδων και μειωμένη χρήση εύρους ζώνης.',
        'faq4_q': 'Ποια ρύθμιση ποιότητας πρέπει να χρησιμοποιήσω;',
        'faq4_a': 'Για τις περισσότερες διαδικτυακές χρήσεις, μια ρύθμιση ποιότητας μεταξύ 70-85% προσφέρει την καλύτερη ισορροπία μεταξύ μεγέθους αρχείου και ποιότητας εικόνας. Χαμηλότερες τιμές (κάτω από 70%) θα παράγουν μικρότερα αρχεία αλλά μπορεί να εμφανίσουν περισσότερα τεχνουργήματα συμπίεσης. Υψηλότερες τιμές (πάνω από 85%) θα διατηρήσουν υψηλότερη ποιότητα αλλά με φθίνουσα απόδοση στη μείωση του μεγέθους του αρχείου.',
        'faq5_q': 'Υπάρχει όριο στο πόσες εικόνες μπορώ να μετατρέψω ταυτόχρονα;',
        'faq5_a': 'Δεν υπάρχει σταθερό όριο, αλλά η απόδοση εξαρτάται από τις δυνατότητες της συσκευής σας. Για βέλτιστη απόδοση, συνιστούμε τη μετατροπή παρτίδων 20-30 εικόνων τη φορά. Μεγαλύτερες παρτίδες μπορεί να προκαλέσουν επιβράδυνση του προγράμματος περιήγησής σας.',
        'faq6_q': 'Υποστηρίζονται οι εικόνες WebP σε όλα τα προγράμματα περιήγησης;',
        'faq6_a': 'Το WebP υποστηρίζεται πλέον σε όλα τα κύρια σύγχρονα προγράμματα περιήγησης, συμπεριλαμβανομένων των Chrome, Firefox, Edge, Safari και Opera. Ωστόσο, παλαιότερες εκδόσεις προγραμμάτων περιήγησης ενδέχεται να μην υποστηρίζουν το WebP. Για ιστότοπους, συνιστάται η παροχή εναλλακτικών μορφών χρησιμοποιώντας το στοιχείο picture.',
        
        // Footer
        'email': 'Email:'
    },
    'zh': {
        // Header
        'title': 'JPG/PNG转WebP转换器',
        
        // Upload Area
        'drag_drop': '拖放您的图片到这里或',
        'browse': '浏览',
        
        // Controls
        'convert_to': '转换为:',
        'quality': '质量:',
        'convert_all': '全部转换',
        
        // Preview Area
        'original': '原图',
        'converted': '已转换',
        
        // Conversion status messages
        'converting': '转换中...',
        'converting_fallback': '使用备用方法转换中...',
        'conversion_failed': '转换失败',
        'converted_size': '已转换 ({0} KB)',
        'original_kept': '保留原图 ({0} KB)',
        'size_info': '大小: {0} KB',
        'files_skipped': '部分文件被跳过。仅支持JPEG和PNG文件。',
        
        // Buttons
        'clear_all': '全部清除',
        'download': '下载',
        
        // Features Section
        'key_features': '核心功能',
        'no_uploads': '无需上传到服务器',
        'privacy_desc': '您的图片保持私密。不会发送任何数据到服务器。',
        'local_processing': '本地处理',
        'local_desc': '所有处理都在您的浏览器中完成。',
        'best_web': '网页最佳选择',
        'web_desc': '为网站和Web应用优化的图像。',
        'removes_metadata': '移除元数据',
        'metadata_desc': '在转换过程中自动去除不必要的元数据。',
        'fast_conversion': '快速转换',
        'fast_desc': '高性能且极速的转换过程。',
        'top_performance': '顶级性能',
        'performance_desc': '本地图像转换器中的最佳性能。',
        'batch_processing': '批量处理',
        'batch_desc': '通过批量处理一次转换多张图片。',
        'size_reduction': '减小文件大小',
        'size_desc': '在保持质量的同时显著减少文件大小。',
        
        // Reviews Section
        'user_reviews': '用户评价',
        'review1_name': '李明',
        'review1_text': '这个图像转换器对我的摄影业务是个改变游戏规则的工具。批量处理功能为我节省了数小时的工作时间，而且质量控制非常出色。',
        'review2_name': '张颖',
        'review2_text': '作为一名平面设计师，我非常欣赏这个工具的精确性和可靠性。界面直观，转换质量始终如一地出色。',
        'review3_name': '王伟',
        'review3_text': '本地处理功能让我在处理客户敏感图像时倍感安心。快速、安全、专业 - 正是我所需要的。',
        'review4_name': '刘婷',
        'review4_text': '我每天都使用这个工具处理我的社交媒体内容。在减小文件大小的同时保持图像质量的能力对我的工作来说是无价的。',
        'review5_name': '赵军',
        'review5_text': '非常适合我的网站开发项目。批量转换功能和格式灵活性使这个工具成为我工作流程中不可或缺的部分。',
        'review6_name': '孙丽',
        'review6_text': '这个转换器的速度和效率令人印象深刻。它无缝处理大批量图像，为我的设计工作节省了宝贵的时间。',
        
        // FAQ Section
        'faq': '常见问题',
        'faq1_q': '我可以将哪些图像格式转换为WebP？',
        'faq1_a': '该工具专为将JPG/JPEG和PNG图像转换为WebP格式而设计。目前不支持其他格式。',
        'faq2_q': '使用此工具时我的数据安全吗？',
        'faq2_a': '绝对安全！所有处理都在您的浏览器本地完成。您的图像永远不会离开您的设备，也不会将任何数据发送到任何服务器，确保完全的隐私和安全。',
        'faq3_q': '什么是WebP，为什么我应该使用它？',
        'faq3_a': 'WebP是由谷歌开发的现代图像格式，为网络图像提供了更好的有损和无损压缩。WebP图像通常比同等质量的JPEG或PNG文件小25-35%，同时保持相似的视觉质量，从而缩短网站加载时间并减少带宽使用。',
        'faq4_q': '我应该使用什么质量设置？',
        'faq4_a': '对于大多数网络用途，70-85%的质量设置提供了文件大小和图像质量之间的最佳平衡。较低的值（低于70%）将产生更小的文件，但可能显示更多的压缩失真。较高的值（高于85%）将保持更高的质量，但文件大小减少的效果将逐渐减弱。',
        'faq5_q': '我一次可以转换多少图像？',
        'faq5_a': '没有固定限制，但性能取决于您设备的能力。为了获得最佳性能，我们建议一次转换20-30张图像。更大批量的转换可能会导致浏览器速度变慢。',
        'faq6_q': 'WebP图像是否被所有浏览器支持？',
        'faq6_a': 'WebP现在被所有主要的现代浏览器支持，包括Chrome、Firefox、Edge、Safari和Opera。然而，较旧的浏览器版本可能不支持WebP。对于网站，建议使用picture元素提供后备格式。',
        
        // Footer
        'email': '邮箱:'
    },
    'ja': {
        // Header
        'title': 'JPG/PNGからWebP変換ツール',
        
        // Upload Area
        'drag_drop': '画像をここにドラッグ＆ドロップするか',
        'browse': '参照',
        
        // Controls
        'convert_to': '変換形式:',
        'quality': '品質:',
        'convert_all': 'すべて変換',
        
        // Preview Area
        'original': 'オリジナル',
        'converted': '変換後',
        
        // Conversion status messages
        'converting': '変換中...',
        'converting_fallback': 'フォールバックで変換中...',
        'conversion_failed': '変換失敗',
        'converted_size': '変換済 ({0} KB)',
        'original_kept': '元画像を保持 ({0} KB)',
        'size_info': 'サイズ: {0} KB',
        'files_skipped': '一部のファイルはスキップされました。JPEGとPNGファイルのみサポートされています。',
        
        // Buttons
        'clear_all': 'すべてクリア',
        'download': 'ダウンロード',
        'download_all': 'すべてダウンロード',
        
        // Features Section
        'key_features': '主な機能',
        'no_uploads': 'サーバーにアップロードなし',
        'privacy_desc': '画像はプライベートに保たれます。データはサーバーに送信されません。',
        'local_processing': 'ローカル処理',
        'local_desc': 'すべての処理はブラウザ内で行われます。',
        'best_web': 'ウェブに最適',
        'web_desc': 'ウェブサイトやウェブアプリに最適化された画像。',
        'removes_metadata': 'メタデータを削除',
        'metadata_desc': '変換中に不要なメタデータを自動的に削除します。',
        'fast_conversion': '高速変換',
        'fast_desc': '高性能で超高速の変換プロセス。',
        'top_performance': 'トップパフォーマンス',
        'performance_desc': 'ローカル画像コンバーターとして最高のパフォーマンス。',
        'batch_processing': 'バッチ処理',
        'batch_desc': '一括処理で複数の画像を一度に変換。',
        'size_reduction': 'サイズ削減',
        'size_desc': '品質を維持しながらファイルサイズを大幅に削減。',
        
        // Reviews Section
        'user_reviews': 'ユーザーレビュー',
        'review1_name': 'ロバート・トンプソン',
        'review1_text': 'この画像変換ツールは私の写真ビジネスにとって革新的です。バッチ処理機能で何時間もの作業時間を節約でき、品質管理も優れています。',
        'review2_name': 'ジェニファー・パーカー',
        'review2_text': 'グラフィックデザイナーとして、このツールの精度と信頼性に感謝しています。インターフェースは直感的で、変換品質は常に優れています。',
        'review3_name': 'ウィリアム・チェン',
        'review3_text': 'ローカル処理機能により、クライアントの機密画像を扱う際に安心感があります。高速、安全、プロフェッショナル - まさに私が必要としていたものです。',
        'review4_name': 'エミリー・ロドリゲス',
        'review4_text': 'ソーシャルメディアのコンテンツ用に毎日このツールを使用しています。ファイルサイズを削減しながら画像品質を維持する機能は、私の仕事に非常に価値があります。',
        'review5_name': 'ダニエル・マルティネス',
        'review5_text': 'ウェブ開発プロジェクトに最適です。バッチ変換機能とフォーマットの柔軟性により、このツールは私のワークフローに欠かせないものになっています。',
        'review6_name': 'ソフィー・アンダーソン',
        'review6_text': 'このコンバーターの速度と効率性は素晴らしいです。大量の画像をシームレスに処理し、デザイン作業において貴重な時間を節約できます。',
        
        // FAQ Section
        'faq': 'よくある質問',
        'faq1_q': 'どの画像形式をWebPに変換できますか？',
        'faq1_a': 'このツールは特にJPG/JPEGおよびPNG画像をWebP形式に変換するように設計されています。現時点では他の形式はサポートされていません。',
        'faq2_q': 'このツールを使用する際、データは安全ですか？',
        'faq2_a': '絶対に安全です！すべての処理はブラウザ内でローカルに行われます。画像はデバイスから出ることはなく、データはサーバーに送信されないため、完全なプライバシーとセキュリティが確保されます。',
        'faq3_q': 'WebPとは何ですか？なぜ使用すべきですか？',
        'faq3_a': 'WebPはGoogleによって開発された最新の画像形式で、ウェブ画像に優れた可逆圧縮と非可逆圧縮を提供します。WebP画像は通常、同等の視覚品質を維持しながらJPEGやPNGファイルよりも25〜35％小さくなり、ウェブサイトの読み込み時間の短縮と帯域幅使用量の削減につながります。',
        'faq4_q': 'どの品質設定を使用すべきですか？',
        'faq4_a': 'ほとんどのウェブ使用では、70〜85％の品質設定がファイルサイズと画像品質のバランスが最も良いです。低い値（70％未満）ではファイルが小さくなりますが、圧縮アーティファクトが目立つ場合があります。高い値（85％以上）では高い品質が維持されますが、ファイルサイズの削減効果は徐々に小さくなります。',
        'faq5_q': '一度に変換できる画像数に制限はありますか？',
        'faq5_a': '固定の制限はありませんが、パフォーマンスはお使いのデバイスの性能に依存します。最適なパフォーマンスのために、一度に20〜30枚の画像のバッチ変換をお勧めします。それ以上の大きなバッチではブラウザの動作が遅くなる場合があります。',
        'faq6_q': 'WebP画像はすべてのブラウザでサポートされていますか？',
        'faq6_a': 'WebPは現在、Chrome、Firefox、Edge、Safari、Operaなどのすべての主要な最新ブラウザでサポートされています。ただし、古いバージョンのブラウザではWebPをサポートしていない場合があります。ウェブサイトでは、pictureエレメントを使用してフォールバック形式を提供することをお勧めします。',
        
        // Email
        'email': 'メール:'
    },
    // 新添加韩语翻译
    'ko': {
        // Header
        'title': 'JPG/PNG에서 WebP 변환기',
        
        // Upload Area
        'drag_drop': '이미지를 여기에 끌어다 놓거나',
        'browse': '찾아보기',
        
        // Controls
        'convert_to': '변환 형식:',
        'quality': '품질:',
        'convert_all': '모두 변환',
        
        // Preview Area
        'original': '원본',
        'converted': '변환됨',
        
        // Conversion status messages
        'converting': '변환 중...',
        'converting_fallback': '대체 방법으로 변환 중...',
        'conversion_failed': '변환 실패',
        'converted_size': '변환됨 ({0} KB)',
        'original_kept': '원본 유지됨 ({0} KB)',
        'size_info': '크기: {0} KB',
        'files_skipped': '일부 파일이 건너뛰어졌습니다. JPEG와 PNG 파일만 지원됩니다.',
        
        // Buttons
        'clear_all': '모두 지우기',
        'download': '다운로드',
        'download_all': '모두 다운로드',
        
        // Metadata removal message
        'metadata_note': '참고: EXIF와 같은 메타데이터는 변환 과정에서 제거됩니다',
        
        // Key features section
        'key_features': '주요 기능',
        'no_uploads': '서버에 업로드 없음',
        'privacy_desc': '이미지는 비공개로 유지됩니다. 어떤 데이터도 서버로 전송되지 않습니다.',
        'local_processing': '로컬 처리',
        'local_desc': '모든 처리는 브라우저에서 로컬로 수행됩니다.',
        'best_web': '웹에 최적화',
        'web_desc': '웹사이트 및 웹 앱에 완벽하게 적합한 최적화된 이미지.',
        'removes_metadata': '메타데이터 제거',
        'metadata_desc': '변환하는 동안 불필요한 메타데이터를 자동으로 제거합니다.',
        'fast_conversion': '빠른 변환',
        'fast_desc': '성능이 뛰어나고 빠른 변환 프로세스.',
        'top_performance': '최고의 성능',
        'performance_desc': '로컬 이미지 변환기 중 최고의 성능.',
        'batch_processing': '일괄 처리',
        'batch_desc': '대량 처리로 여러 이미지를 한 번에 변환.',
        'size_reduction': '크기 감소',
        'size_desc': '품질을 유지하면서 파일 크기를 크게 줄입니다.',
        
        // Reviews section
        'user_reviews': '사용자 리뷰',
        'review1_name': '로버트 톰슨',
        'review1_text': '이 이미지 변환기는 내 사진 비즈니스에 혁신적입니다. 일괄 처리 기능으로 수시간의 작업 시간을 절약할 수 있으며, 품질 관리도 뛰어납니다.',
        'review2_name': '제니퍼 파커',
        'review2_text': '그래픽 디자이너로서, 이 도구의 정밀함과 신뢰성에 감사드립니다. 인터페이스가 직관적이고 변환 품질이 지속적으로 우수합니다.',
        'review3_name': '윌리엄 첸',
        'review3_text': '로컬 처리 기능으로 민감한 고객 이미지를 처리할 때 마음의 평화를 얻을 수 있습니다. 빠르고, 안전하며, 전문적인 - 정확히 내가 필요로 하던 것입니다.',
        'review4_name': '에밀리 로드리게스',
        'review4_text': '소셜 미디어 콘텐츠를 위해 매일 이 도구를 사용합니다. 파일 크기를 줄이면서도 이미지 품질을 유지하는 능력은 내 작업에 매우 가치 있습니다.',
        'review5_name': '다니엘 마르티네즈',
        'review5_text': '내 웹 개발 프로젝트에 완벽합니다. 일괄 변환 기능과 형식의 유연성으로 이 도구는 내 워크플로우의 필수적인 부분이 되었습니다.',
        'review6_name': '소피 앤더슨',
        'review6_text': '이 변환기의 속도와 효율성은 놀랍습니다. 많은 양의 이미지를 원활하게 처리하여 디자인 작업에서 귀중한 시간을 절약할 수 있습니다.',
        
        // FAQ Section
        'faq': '자주 묻는 질문',
        'faq1_q': '어떤 이미지 형식을 WebP로 변환할 수 있나요?',
        'faq1_a': '이 도구는 특별히 JPG/JPEG 및 PNG 이미지를 WebP 형식으로 변환하도록 설계되었습니다. 현재 다른 형식은 지원되지 않습니다.',
        'faq2_q': '이 도구를 사용할 때 내 데이터는 안전한가요?',
        'faq2_a': '물론입니다! 모든 처리는 브라우저에서 로컬로 이루어집니다. 이미지는 귀하의 기기를 떠나지 않으며, 어떤 데이터도 서버로 전송되지 않아 완전한 개인 정보 보호와 보안을 보장합니다.',
        'faq3_q': 'WebP란 무엇이며 왜 사용해야 하나요?',
        'faq3_a': 'WebP는 Google에서 개발한 현대적인 이미지 형식으로, 웹 이미지를 위한 우수한 무손실 및 손실 압축을 제공합니다. WebP 이미지는 비슷한 시각적 품질을 유지하면서도 일반적으로 JPEG나 PNG 파일보다 25-35% 더 작아 웹사이트 로딩 시간을 단축하고 대역폭 사용량을 줄입니다.',
        'faq4_q': '어떤 품질 설정을 사용해야 하나요?',
        'faq4_a': '대부분의 웹 사용에는 70-85% 사이의 품질 설정이 파일 크기와 이미지 품질 사이에 최상의 균형을 제공합니다. 낮은 값(70% 미만)은 더 작은 파일을 생성하지만 압축 아티팩트가 더 많이 나타날 수 있습니다. 높은 값(85% 이상)은 더 높은 품질을 유지하지만 파일 크기 감소 효과는 점점 줄어듭니다.',
        'faq5_q': '한 번에 변환할 수 있는 이미지 수에 제한이 있나요?',
        'faq5_a': '고정된 제한은 없지만, 성능은 귀하의 장치 능력에 따라 달라집니다. 최적의 성능을 위해 한 번에 20-30개의 이미지 배치를 변환하는 것이 좋습니다. 더 큰 배치는 브라우저 속도를 저하시킬 수 있습니다.',
        'faq6_q': 'WebP 이미지는 모든 브라우저에서 지원되나요?',
        'faq6_a': 'WebP는 현재 Chrome, Firefox, Edge, Safari, Opera를 포함한 모든 주요 현대 브라우저에서 지원됩니다. 그러나 오래된 브라우저 버전에서는 WebP를 지원하지 않을 수 있습니다. 웹사이트의 경우, picture 요소를 사용하여 대체 형식을 제공하는 것이 좋습니다.',
        
        // Email
        'email': '이메일:'
    }
};

// 通用格式化字符串函数
function formatString(str, ...args) {
    return str.replace(/{(\d+)}/g, function(match, number) { 
        return typeof args[number] != 'undefined' ? args[number] : match;
    });
}

// Function to switch language
function setLanguage(language) {
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    elementsToTranslate.forEach(element => {
        const translationKey = element.getAttribute('data-i18n');
        if (translations[language] && translations[language][translationKey]) {
            if (element.tagName === 'INPUT' && element.type === 'placeholder') {
                element.placeholder = translations[language][translationKey];
            } else {
                element.textContent = translations[language][translationKey];
            }
        }
    });
    
    // 更新页面标题
    const titleElement = document.querySelector('title');
    if (titleElement && titleElement.getAttribute('data-i18n-head')) {
        const titleKey = titleElement.getAttribute('data-i18n-head');
        if (translations[language] && translations[language][titleKey]) {
            // 添加 "- macOS Style" 到标题
            let styleText;
            if (language === 'en') {
                styleText = '- macOS Style';
            } else if (language === 'es') {
                styleText = '- Estilo macOS';
            } else if (language === 'pt') {
                styleText = '- Estilo macOS';
            } else if (language === 'fr') {
                styleText = '- Style macOS';
            } else if (language === 'de') {
                styleText = '- macOS-Stil';
            } else if (language === 'it') {
                styleText = '- Stile macOS';
            } else if (language === 'el') {
                styleText = '- Στυλ macOS';
            } else if (language === 'zh') {
                styleText = '- macOS风格';
            } else if (language === 'ja') {
                styleText = '- macOSスタイル';
            } else if (language === 'ko') {
                styleText = '- macOS 스타일';
            }
            titleElement.textContent = `${translations[language][titleKey]} ${styleText}`;
        }
    }
    
    // 更新 meta description 标签
    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) {
        if (language === 'es') {
            const esDesc = document.querySelector('meta[name="description:es"]');
            if (esDesc) {
                descTag.setAttribute('content', esDesc.getAttribute('content'));
            }
        } else if (language === 'pt') {
            const ptDesc = document.querySelector('meta[name="description:pt"]');
            if (ptDesc) {
                descTag.setAttribute('content', ptDesc.getAttribute('content'));
            }
        } else if (language === 'fr') {
            const frDesc = document.querySelector('meta[name="description:fr"]');
            if (frDesc) {
                descTag.setAttribute('content', frDesc.getAttribute('content'));
            }
        } else if (language === 'de') {
            const deDesc = document.querySelector('meta[name="description:de"]');
            if (deDesc) {
                descTag.setAttribute('content', deDesc.getAttribute('content'));
            }
        } else if (language === 'it') {
            const itDesc = document.querySelector('meta[name="description:it"]');
            if (itDesc) {
                descTag.setAttribute('content', itDesc.getAttribute('content'));
            }
        } else if (language === 'el') {
            const elDesc = document.querySelector('meta[name="description:el"]');
            if (elDesc) {
                descTag.setAttribute('content', elDesc.getAttribute('content'));
            }
        } else if (language === 'zh') {
            const zhDesc = document.querySelector('meta[name="description:zh"]');
            if (zhDesc) {
                descTag.setAttribute('content', zhDesc.getAttribute('content'));
            }
        } else if (language === 'ja') {
            const jaDesc = document.querySelector('meta[name="description:ja"]');
            if (jaDesc) {
                descTag.setAttribute('content', jaDesc.getAttribute('content'));
            }
        } else if (language === 'ko') {
            const koDesc = document.querySelector('meta[name="description:ko"]');
            if (koDesc) {
                descTag.setAttribute('content', koDesc.getAttribute('content'));
            }
        } else {
            // 恢复英文描述
            descTag.setAttribute('content', 'Free online tool to convert JPG/PNG to WebP. Fast local processing, batch conversion, and quality control for optimized web images. No server uploads needed.');
        }
    }
    
    // Update lang attribute
    document.documentElement.lang = language;
    
    // 同时更新旧的和新的语言选择器
    // 旧的下拉框选择器
    const languageSelector = document.getElementById('language-selector');
    if (languageSelector) {
        languageSelector.value = language;
    }
    
    // 新的地球图标选择器
    const languageOptions = document.querySelectorAll('.language-option');
    languageOptions.forEach(option => {
        if (option.getAttribute('data-lang') === language) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
    
    // Save language preference
    localStorage.setItem('preferredLanguage', language);
    
    // Update the alternate links for SEO
    updateAlternateLinks(language);
    
    // Update og:locale for SEO
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
        if (language === 'en') {
            ogLocale.setAttribute('content', 'en_US');
        } else if (language === 'es') {
            ogLocale.setAttribute('content', 'es_ES');
        } else if (language === 'pt') {
            ogLocale.setAttribute('content', 'pt_PT');
        } else if (language === 'fr') {
            ogLocale.setAttribute('content', 'fr_FR');
        } else if (language === 'de') {
            ogLocale.setAttribute('content', 'de_DE');
        } else if (language === 'it') {
            ogLocale.setAttribute('content', 'it_IT');
        } else if (language === 'el') {
            ogLocale.setAttribute('content', 'el_GR');
        } else if (language === 'zh') {
            ogLocale.setAttribute('content', 'zh_CN');
        } else if (language === 'ja') {
            ogLocale.setAttribute('content', 'ja_JP');
        } else if (language === 'ko') {
            ogLocale.setAttribute('content', 'ko_KR');
        }
    }
    
    // 更新转换状态相关动态文本
    updateDynamicTranslations(language);
}

// 更新动态创建的转换状态文本
function updateDynamicTranslations(language) {
    // 更新动态创建的元素的文本
    if (translations && translations[language]) {
        // 清除按钮
        const clearButton = document.querySelector('.clear-button');
        if (clearButton) {
            clearButton.textContent = translations[language].clear_all;
        }
        
        // 下载按钮
        const batchDownloadButton = document.querySelector('.batch-download-button');
        if (batchDownloadButton) {
            batchDownloadButton.textContent = translations[language].download;
        }
        
        // 转换状态文本
        document.querySelectorAll('.file-status').forEach(status => {
            const text = status.textContent;
            const loadingSpinner = status.querySelector('.loading-spinner');
            
            if (text.includes('Converting...') || text.includes('Convirtiendo...')) {
                status.innerHTML = '';
                if (loadingSpinner) status.appendChild(loadingSpinner);
                status.appendChild(document.createTextNode(translations[language].converting));
            } 
            else if (text.includes('Converting with fallback') || text.includes('Convirtiendo con método')) {
                status.innerHTML = '';
                if (loadingSpinner) status.appendChild(loadingSpinner);
                status.appendChild(document.createTextNode(translations[language].converting_fallback));
            }
            else if (text.includes('Conversion failed') || text.includes('Conversión fallida')) {
                status.textContent = translations[language].conversion_failed;
            }
            else if (text.match(/Converted \([\d.]+ KB\)/) || text.match(/Convertido \([\d.]+ KB\)/)) {
                const size = text.match(/\(([\d.]+) KB\)/);
                if (size) {
                    status.textContent = formatString(translations[language].converted_size, size[1]);
                }
            }
        });
        
        // 图片信息
        document.querySelectorAll('.image-info').forEach(info => {
            const text = info.textContent;
            const size = text.match(/Size: ([\d.]+) KB/) || text.match(/Tamaño: ([\d.]+) KB/);
            if (size) {
                info.textContent = formatString(translations[language].size_info, size[1]);
            }
        });
    }
}

// Function to update alternate links for SEO
function updateAlternateLinks(currentLang) {
    // Remove existing alternate links
    const existingLinks = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingLinks.forEach(link => link.remove());
    
    // Add new alternate links
    const languages = Object.keys(translations);
    const head = document.querySelector('head');
    
    // 添加x-default链接
    const defaultLink = document.createElement('link');
    defaultLink.rel = 'alternate';
    defaultLink.hreflang = 'x-default';
    const defaultUrl = new URL(window.location.href);
    defaultUrl.search = '';
    defaultLink.href = defaultUrl.toString();
    head.appendChild(defaultLink);
    
    languages.forEach(lang => {
        const link = document.createElement('link');
        link.rel = 'alternate';
        link.hreflang = lang;
        // Create URL with language parameter
        const url = new URL(window.location.href);
        url.searchParams.set('lang', lang);
        link.href = url.toString();
        head.appendChild(link);
    });
}

// Initialize language based on URL parameter, localStorage, or browser settings
function initializeLanguage() {
    // 总是优先使用英语作为默认语言
    let lang = 'en';
    
    // 然后检查URL参数（如果用户明确要求其他语言）
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    if (urlLang && translations[urlLang]) {
        lang = urlLang;
    }
    
    // 设置语言
    setLanguage(lang);
    
    // 同时保存到localStorage以便将来访问
    localStorage.setItem('preferredLanguage', lang);
}

// Event listener for language selector
document.addEventListener('DOMContentLoaded', function() {
    const languageSelector = document.getElementById('language-selector');
    if (languageSelector) {
        languageSelector.addEventListener('change', function() {
            setLanguage(this.value);
        });
    }
    
    // Initialize language
    initializeLanguage();
    
    // 修补window.alert，支持多语言
    if (window.alert) {
        const originalAlert = window.alert;
        window.alert = function(message) {
            const currentLang = document.documentElement.lang || 'en';
            
            if (message === 'Some files were skipped. Only JPEG and PNG files are supported.' ||
                message === 'Se omitieron algunos archivos. Solo se admiten archivos JPEG y PNG.') {
                originalAlert(translations[currentLang].files_skipped);
            } else {
                originalAlert(message);
            }
        };
    }
}); 