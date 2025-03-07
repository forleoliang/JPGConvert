const translations = {
    'en': {
        // Header
        'title': 'JPG Convert',
        
        // Upload Area
        'drag_drop': 'Drag and drop your image here or',
        'browse': 'browse',
        
        // Controls
        'convert_to': 'Convert to:',
        'quality': 'Quality:',
        'convert_all': 'Convert All',
        
        // Conversion Options Section
        'conversion_options': 'Conversion Options',
        'jpg_to_webp': 'JPG → WebP',
        'jpg_to_webp_desc': 'Convert JPG images to modern WebP format for smaller file size while maintaining quality.',
        'jpg_to_avif': 'JPG → AVIF',
        'jpg_to_avif_desc': 'Use advanced AVIF format for best compression ratio and faster website loading.',
        'jpg_to_png': 'JPG → PNG',
        'jpg_to_png_desc': 'Convert to lossless PNG format, ideal for images requiring transparency or high quality.',
        'jpg_to_tiff': 'JPG → TIFF',
        'jpg_to_tiff_desc': 'Convert to professional TIFF format, suitable for printing, publishing, and pro editing workflows.',
        
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
        'title': 'JPG Convertir',
        
        // Upload Area
        'drag_drop': 'Arrastra y suelta tu imagen aquí o',
        'browse': 'examinar',
        
        // Controls
        'convert_to': 'Convertir a:',
        'quality': 'Calidad:',
        'convert_all': 'Convertir Todo',
        
        // Conversion Options Section
        'conversion_options': 'Opciones de Conversión',
        'jpg_to_webp': 'JPG → WebP',
        'jpg_to_webp_desc': 'Convierte imágenes JPG al formato moderno WebP para obtener archivos más pequeños manteniendo la calidad.',
        'jpg_to_avif': 'JPG → AVIF',
        'jpg_to_avif_desc': 'Utiliza el formato avanzado AVIF para obtener la mejor relación de compresión y carga más rápida de sitios web.',
        'jpg_to_png': 'JPG → PNG',
        'jpg_to_png_desc': 'Convierte a formato PNG sin pérdida, ideal para imágenes que requieren transparencia o alta calidad.',
        'jpg_to_tiff': 'JPG → TIFF',
        'jpg_to_tiff_desc': 'Convierte al formato profesional TIFF, adecuado para impresión, publicación y flujos de trabajo de edición profesional.',
        
        // Format descriptions
        'webp_desc': 'WebP - Buena compresión, amplio soporte',
        'avif_desc': 'AVIF - Mejor compresión, formato más nuevo',
        
        // AVIF specific messages
        'avif_processing': 'Procesando AVIF (puede tardar más)...',
        'avif_not_supported': 'Codificación AVIF no compatible en tu navegador',
        'using_avif_encoder': 'Usando Squoosh para la conversión AVIF...',
        'avif_conversion_failed': 'Falló la conversión AVIF',
        'avif_not_available': 'Codificador AVIF no disponible, prueba con otro formato',
        
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
        'faq3_a': 'WebP es un formato de imagen moderno desarrollado por Google que proporciona una compresión superior, con o sin pérdida, para imágenes web. Las imágenes WebP son típicamente un 25-35% más pequeñas que los archivos JPEG o PNG comparables, manteniendo una calidad visual similar, lo que resulta en tiempos de carga de sitios web más rápidos y reducido uso de ancho de banda.',
        'faq4_q': '¿Qué configuración de calidad debería usar?',
        'faq4_a': 'Para la mayoría de los usos web, una configuración de calidad entre 70-85% ofrece el mejor equilibrio entre tamaño de archivo y calidad de imagen. Valores más bajos (por debajo del 70%) will produce smaller files but may show more compression artifacts. Higher values (above 85%) will maintain higher quality but with diminishing returns on file size reduction.',
        'faq5_q': '¿Hay un límite de cuántas imágenes puedo convertir a la vez?',
        'faq5_a': 'No hay un límite fijo, pero el rendimiento depende de las capacidades de tu dispositivo. Para un rendimiento óptimo, recomendamos convertir batches of 20-30 images at a time. Larger batches may cause your browser to slow down.',
        'faq6_q': '¿Las imágenes WebP son compatibles con todos los navegadores?',
        'faq6_a': 'WebP ahora es compatible con todos los principales modern browsers including Chrome, Firefox, Edge, Safari, and Opera. However, older browser versions might not support WebP. For websites, it\'s recommended to provide fallback formats using the picture element.',
        
        // Footer
        'email': 'Correo electrónico:'
    },
    'pt': {
        // Header
        'title': 'JPG Converter',
        
        // Upload Area
        'drag_drop': 'Arraste e solte sua imagem aqui ou',
        'browse': 'procurar',
        
        // Controls
        'convert_to': 'Converter para:',
        'quality': 'Qualidade:',
        'convert_all': 'Converter Tudo',
        
        // Conversion Options Section
        'conversion_options': 'Opções de Conversão',
        'jpg_to_webp': 'JPG → WebP',
        'jpg_to_webp_desc': 'Converta imagens JPG para o formato moderno WebP para tamanhos de arquivo menores mantendo a qualidade.',
        'jpg_to_avif': 'JPG → AVIF',
        'jpg_to_avif_desc': 'Use o formato avançado AVIF para melhor taxa de compressão e carregamento mais rápido de sites.',
        'jpg_to_png': 'JPG → PNG',
        'jpg_to_png_desc': 'Converta para formato PNG sem perdas, ideal para imagens que requerem transparência ou alta qualidade.',
        'jpg_to_tiff': 'JPG → TIFF',
        'jpg_to_tiff_desc': 'Converta para o formato profissional TIFF, adequado para impressão, publicação e fluxos de trabalho de edição profissional.',
        
        // Format descriptions
        'webp_desc': 'WebP - Boa compressão, amplo suporte',
        'avif_desc': 'AVIF - Melhor compressão, formato mais novo',
        
        // AVIF specific messages
        'avif_processing': 'Processando AVIF (pode demorar mais)...',
        'avif_not_supported': 'Codificação AVIF não é suportada em seu navegador',
        'using_avif_encoder': 'Usando Squoosh para conversão AVIF...',
        'avif_conversion_failed': 'Falha na conversão AVIF',
        'avif_not_available': 'Codificador AVIF não disponível, tente outro formato',
        
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
        'faq4_a': 'Para a maioria dos usos na web, um\'impostação de qualidade entre 70-85% oferece o melhor equilíbrio entre tamanho de arquivo e qualité de imagem. Valores mais baixos (abaixo de 70%) produrrão arquivos menores, mas podem mostrar mais artefaitos de compressão. Valores mais altos (acima de 85%) manterão uma qualité mais elevado mas com rendimentos decrescentes na redução do tamanho do arquivo.',
        'faq5_q': 'Existe um limite de quantas imagens posso converter de uma vez?',
        'faq5_a': 'Não há um limite fixo, mas o desempenho depende das capacidades do seu dispositivo. Para um desempenho ideal, recomendamos converter lotes de 20-30 imagens por vez. Lotes maiores podem fazer com que seu navegador fique lento.',
        'faq6_q': 'As imagens WebP são suportadas em todos os navegadores?',
        'faq6_a': 'WebP agora é suportado em todos os principais navegadores modernos, incluindo Chrome, Firefox, Edge, Safari, y Opera. No entanto, versões mais antigas de navegadores podem não suportar WebP. Para sitios web, se recomenda fornecer formatos alternativos utilizando o elemento picture.',
        
        // Footer
        'email': 'Email:'
    },
    'fr': {
        // Header
        'title': 'JPG Convertisseur',
        
        // Upload Area
        'drag_drop': 'Glissez et déposez votre image ici ou',
        'browse': 'parcourir',
        
        // Controls
        'convert_to': 'Convertir en:',
        'quality': 'Qualité:',
        'convert_all': 'Tout Convertir',
        
        // Conversion Options Section
        'conversion_options': 'Options de Conversion',
        'jpg_to_webp': 'JPG → WebP',
        'jpg_to_webp_desc': 'Convertissez les images JPG au format moderne WebP pour des fichiers plus petits tout en maintenant la qualité.',
        'jpg_to_avif': 'JPG → AVIF',
        'jpg_to_avif_desc': 'Utilisez le format avancé AVIF pour un meilleur taux de compression et un chargement plus rapide des sites web.',
        'jpg_to_png': 'JPG → PNG',
        'jpg_to_png_desc': 'Convertissez au format PNG sans perte, idéal pour les images nécessitant de la transparence ou une haute qualité.',
        'jpg_to_tiff': 'JPG → TIFF',
        'jpg_to_tiff_desc': 'Convertissez au format professionnel TIFF, adapté à l\'impression, à la publication et aux flux de travail d\'édition professionnels.',
        
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
    },
    'it': {
        // Header
        'title': 'JPG Convertitore',
        
        // Upload Area
        'drag_drop': 'Trascina e rilascia la tua immagine qui o',
        'browse': 'sfoglia',
        
        // Controls
        'convert_to': 'Converti in:',
        'quality': 'Qualità:',
        'convert_all': 'Converti Tutto',
        
        // Conversion Options Section
        'conversion_options': 'Opzioni di Conversione',
        'jpg_to_webp': 'JPG → WebP',
        'jpg_to_webp_desc': 'Converti immagini JPG nel moderno formato WebP per file più piccoli mantenendo la qualità.',
        'jpg_to_avif': 'JPG → AVIF',
        'jpg_to_avif_desc': 'Utilizza il formato avanzato AVIF per il miglior rapporto di compressione e caricamento più veloce dei siti web.',
        'jpg_to_png': 'JPG → PNG',
        'jpg_to_png_desc': 'Converti nel formato PNG senza perdita, ideale per immagini che richiedono trasparenza o alta qualità.',
        'jpg_to_tiff': 'JPG → TIFF',
        'jpg_to_tiff_desc': 'Converti nel formato professionale TIFF, adatto per stampa, pubblicazione e flussi di lavoro di editing professionale.',
        
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
        'title': 'JPG Μετατροπέας',
        
        // Upload Area
        'drag_drop': 'Σύρετε και αποθέστε την εικόνα σας εδώ ή',
        'browse': 'αναζήτηση',
        
        // Controls
        'convert_to': 'Μετατροπή σε:',
        'quality': 'Ποιότητα:',
        'convert_all': 'Μετατροπή Όλων',
        
        // Conversion Options Section
        'conversion_options': 'Επιλογές Μετατροπής',
        'jpg_to_webp': 'JPG → WebP',
        'jpg_to_webp_desc': 'Μετατρέψτε εικόνες JPG στο σύγχρονο φορμάτ WebP για μικρότερο μέγεθος αρχείου διατηρώντας την ποιότητα.',
        'jpg_to_avif': 'JPG → AVIF',
        'jpg_to_avif_desc': 'Χρησιμοποιήστε το προηγμένο φορμάτ AVIF για καλύτερη αναλογία συμπίεσης και ταχύτερη φόρτωση ιστοσελίδων.',
        'jpg_to_png': 'JPG → PNG',
        'jpg_to_png_desc': 'Μετατρέψτε σε φορμάτ PNG χωρίς απώλειες, ιδανικό για εικόνες που απαιτούν διαφάνεια ή υψηλή ποιότητα.',
        'jpg_to_tiff': 'JPG → TIFF',
        'jpg_to_tiff_desc': 'Μετατρέψτε στο επαγγελματικό φορμάτ TIFF, κατάλληλο για εκτύπωση, δημοσίευση και επαγγελματικές ροές εργασίας επεξεργασίας.',
        
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
        
        // Email
        'email': 'Email:'
    },
    'zh': {
        // 标题
        'title': 'JPG 转换器',
        
        // 上传区域
        'drag_drop': '拖放您的图片到这里或',
        'browse': '浏览',
        
        // 控制区
        'convert_to': '转换为:',
        'quality': '质量:',
        'convert_all': '全部转换',
        
        // 转换选项部分
        'conversion_options': '转换选项',
        'jpg_to_webp': 'JPG → WebP',
        'jpg_to_webp_desc': '将JPG图像转换为现代WebP格式，减小文件大小并保持高质量。',
        'jpg_to_avif': 'JPG → AVIF',
        'jpg_to_avif_desc': '使用先进的AVIF格式获得最佳压缩比，为网站提供更快加载速度。',
        'jpg_to_png': 'JPG → PNG',
        'jpg_to_png_desc': '转换为无损PNG格式，适用于需要透明背景或高质量图像的场景。',
        'jpg_to_tiff': 'JPG → TIFF',
        'jpg_to_tiff_desc': '转换为专业TIFF格式，适合印刷、出版和专业图像编辑工作流程。',
        // 格式描述
        'webp_desc': 'WebP - 良好压缩率，广泛支持',
        'avif_desc': 'AVIF - 最佳压缩率，较新格式',
        
        // AVIF特定消息
        'avif_processing': '正在处理AVIF（可能需要更长时间）...',
        'avif_not_supported': '您的浏览器不支持AVIF编码',
        'using_avif_encoder': '正在使用Squoosh进行AVIF转换...',
        'avif_conversion_failed': 'AVIF转换失败',
        'avif_not_available': 'AVIF编码器不可用，请尝试其他格式',
        
        // 预览区域
        'original': '原图',
        'converted': '已转换',
        
        // 转换状态消息
        'converting': '转换中...',
        'converting_fallback': '使用备用方法转换中...',
        'conversion_failed': '转换失败',
        'converted_size': '已转换 ({0} KB)',
        'original_kept': '保留原图 ({0} KB)',
        'size_info': '大小: {0} KB',
        'files_skipped': '部分文件被跳过。仅支持JPEG和PNG文件。',
        
        // 按钮
        'clear_all': '全部清除',
        'download': '下载',
        'download_all': '全部下载',
        
        // 元数据移除信息
        'metadata_note': '注意：转换过程中将移除EXIF等元数据',
        
        // 核心功能部分
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
        
        // 用户评价部分
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
        
        // 常见问题部分
        'faq': '常见问题',
        'faq1_q': '我可以将哪些图像格式转换为WebP和AVIF？',
        'faq1_a': '该工具专为将JPG/JPEG和PNG图像转换为WebP或AVIF格式而设计。目前不支持其他格式。',
        'faq2_q': '使用此工具时我的数据安全吗？',
        'faq2_a': '绝对安全！所有处理都在您的浏览器本地完成。您的图像永远不会离开您的设备，也不会将任何数据发送到任何服务器，确保完全的隐私和安全。',
        'faq3_q': '什么是WebP和AVIF，为什么我应该使用它们？',
        'faq3_a': 'WebP是由谷歌开发的现代图像格式，为网络图像提供了更好的有损和无损压缩。AVIF是更新的格式，提供更高的压缩率，但浏览器支持相对较新。这两种格式通常比同等质量的JPEG或PNG文件小25-50%，同时保持相似的视觉质量，从而缩短网站加载时间并减少带宽使用。',
        'faq4_q': '我应该使用什么质量设置？',
        'faq4_a': '对于大多数网络用途，70-85%的质量设置提供了文件大小和图像质量之间的最佳平衡。较低的值（低于70%）将产生更小的文件，但可能显示更多的压缩失真。较高的值（高于85%）将保持更高的质量，但文件大小减少的效果将逐渐减弱。',
        'faq5_q': '我一次可以转换多少图像？',
        'faq5_a': '没有固定限制，但性能取决于您设备的能力。为了获得最佳性能，我们建议一次转换20-30张图像。更大批量的转换可能会导致浏览器速度变慢。',
        'faq6_q': 'WebP和AVIF图像是否被所有浏览器支持？',
        'faq6_a': 'WebP现在被所有主要的现代浏览器支持，包括Chrome、Firefox、Edge、Safari和Opera。AVIF支持较新，主要在Chrome、Firefox和Opera中提供。对于网站，建议使用picture元素提供后备格式。',
        
        // 邮箱
        'email': '邮箱:'
    },
    'ja': {
        // Header
        'title': 'JPG 変換ツール',
        
        // Upload Area
        'drag_drop': '画像をここにドラッグ＆ドロップするか',
        'browse': '参照',
        
        // Controls
        'convert_to': '変換形式:',
        'quality': '品質:',
        'convert_all': 'すべて変換',
        
        // Conversion Options Section
        'conversion_options': '変換オプション',
        'jpg_to_webp': 'JPG → WebP',
        'jpg_to_webp_desc': 'JPG画像を最新のWebP形式に変換し、品質を維持しながらファイルサイズを削減します。',
        'jpg_to_avif': 'JPG → AVIF',
        'jpg_to_avif_desc': '最高の圧縮率と高速なウェブサイト読み込みのために先進的なAVIF形式を使用します。',
        'jpg_to_png': 'JPG → PNG',
        'jpg_to_png_desc': '透明度や高品質が必要な画像に最適な可逆圧縮PNG形式に変換します。',
        'jpg_to_tiff': 'JPG → TIFF',
        'jpg_to_tiff_desc': '印刷、出版、プロフェッショナルな編集ワークフローに適したプロ仕様のTIFF形式に変換します。',
        
        // Format descriptions
        'webp_desc': 'WebP - 良好な圧縮率、幅広いサポート',
        'avif_desc': 'AVIF - 最高の圧縮率、より新しい形式',
        
        // AVIF specific messages
        'avif_processing': 'AVIF処理中（時間がかかる場合があります）...',
        'avif_not_supported': 'お使いのブラウザではAVIFエンコーディングがサポートされていません',
        'using_avif_encoder': 'AVIF変換にSquooshを使用しています...',
        'avif_conversion_failed': 'AVIF変換に失敗しました',
        'avif_not_available': 'AVIFエンコーダーが利用できません、他の形式をお試しください',
        
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
        'title': 'JPG 변환기',
        
        // Upload Area
        'drag_drop': '이미지를 여기에 끌어다 놓거나',
        'browse': '찾아보기',
        
        // Controls
        'convert_to': '변환 형식:',
        'quality': '품질:',
        'convert_all': '모두 변환',
        
        // Conversion Options Section
        'conversion_options': '변환 옵션',
        'jpg_to_webp': 'JPG → WebP',
        'jpg_to_webp_desc': 'JPG 이미지를 현대적인 WebP 형식으로 변환하여 품질은 유지하면서 파일 크기를 줄입니다.',
        'jpg_to_avif': 'JPG → AVIF',
        'jpg_to_avif_desc': '최고의 압축률과 더 빠른 웹사이트 로딩을 위해 고급 AVIF 형식을 사용합니다.',
        'jpg_to_png': 'JPG → PNG',
        'jpg_to_png_desc': '투명한 배경이나 고품질이 필요한 이미지에 이상적인 무손실 PNG 형식으로 변환합니다.',
        'jpg_to_tiff': 'JPG → TIFF',
        'jpg_to_tiff_desc': '인쇄, 출판 및 전문 편집 워크플로우에 적합한 전문 TIFF 형식으로 변환합니다.',
        
        // Format descriptions
        'webp_desc': 'WebP - 좋은 압축률, 넓은 지원',
        'avif_desc': 'AVIF - 최고의 압축률, 더 새로운 형식',
        
        // AVIF specific messages
        'avif_processing': 'AVIF 처리 중(더 오래 걸릴 수 있음)...',
        'avif_not_supported': '브라우저에서 AVIF 인코딩이 지원되지 않습니다',
        'using_avif_encoder': 'AVIF 변환에 Squoosh 사용 중...',
        'avif_conversion_failed': 'AVIF 변환 실패',
        'avif_not_available': 'AVIF 인코더를 사용할 수 없습니다. 다른 형식을 시도하세요',
        
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
        'faq5_q': '한 번에 몇 개의 이미지를 변환할 수 있나요?',
        'faq5_a': '한 번에 변환할 수 있는 이미지 수는 장치의 성능에 따라 달라집니다. 최적의 성능을 위해 20-30개의 이미지를 한 번에 변환하는 것을 권장합니다. 더 큰 그룹은 브라우저의 속도를 늦출 수 있습니다.',
        'faq6_q': 'WebP 이미지는 모든 브라우저에서 지원되나요?',
        'faq6_a': 'WebP는 이제 Chrome, Firefox, Edge, Safari, Opera 등 모든 주요 최신 브라우저에서 지원됩니다. 그러나 오래된 브라우저 버전은 WebP를 지원하지 않을 수 있습니다. 웹사이트에서는 picture 요소를 사용하여 백업 형식을 제공하는 것을 권장합니다.',
        
        // Email
        'email': '이메일:'
    },
    // 俄语翻译
    'ru': {
        // Header
        'title': 'JPG Конвертер',
        
        // Upload Area
        'drag_drop': 'Перетащите изображение сюда или',
        'browse': 'выберите файл',
        
        // Controls
        'convert_to': 'Конвертировать в:',
        'quality': 'Качество:',
        'convert_all': 'Конвертировать все',
        
        // Conversion Options Section
        'conversion_options': 'Варианты конвертации',
        'jpg_to_webp': 'JPG → WebP',
        'jpg_to_webp_desc': 'Конвертируйте JPG изображения в современный формат WebP для уменьшения размера файла при сохранении качества.',
        'jpg_to_avif': 'JPG → AVIF',
        'jpg_to_avif_desc': 'Используйте продвинутый формат AVIF для лучшего сжатия и более быстрой загрузки веб-сайтов.',
        'jpg_to_png': 'JPG → PNG',
        'jpg_to_png_desc': 'Конвертируйте в формат PNG без потерь, идеально для изображений, требующих прозрачности или высокого качества.',
        'jpg_to_tiff': 'JPG → TIFF',
        'jpg_to_tiff_desc': 'Конвертируйте в профессиональный формат TIFF, подходящий для печати, публикации и профессиональных рабочих процессов редактирования.',
        
        // Format descriptions
        'webp_desc': 'WebP - Хорошее сжатие, широкая поддержка',
        'avif_desc': 'AVIF - Лучшее сжатие, более новый формат',
        
        // AVIF specific messages
        'avif_processing': 'Обработка AVIF (может занять больше времени)...',
        'avif_not_supported': 'Кодирование AVIF не поддерживается в вашем браузере',
        'using_avif_encoder': 'Использование Squoosh для конвертации AVIF...',
        'avif_conversion_failed': 'Конвертация AVIF не удалась',
        'avif_not_available': 'Кодировщик AVIF недоступен, попробуйте другой формат',
        
        // Preview Area
        'original': 'Оригинал',
        'converted': 'Конвертированное',
        
        // Conversion status messages
        'converting': 'Конвертация...',
        'converting_fallback': 'Конвертация с использованием запасного метода...',
        'conversion_failed': 'Конвертация не удалась',
        'converted_size': 'Конвертировано ({0} КБ)',
        'original_kept': 'Оригинал сохранен ({0} КБ)',
        'size_info': 'Размер: {0} КБ',
        'files_skipped': 'Некоторые файлы были пропущены. Поддерживаются только файлы JPEG и PNG.',
        
        // Buttons
        'clear_all': 'Очистить все',
        'download': 'Скачать',
        'download_all': 'Скачать все',
        
        // Metadata removal message
        'metadata_note': 'Примечание: Метаданные, такие как EXIF, будут удалены при конвертации',
        
        // Key features section
        'key_features': 'Ключевые особенности',
        'no_uploads': 'Без загрузки на сервер',
        'privacy_desc': 'Ваши изображения остаются приватными. Никакие данные не отправляются на сервер.',
        'local_processing': 'Локальная обработка',
        'local_desc': 'Вся обработка выполняется локально в вашем браузере.',
        'best_web': 'Лучшее для веба',
        'web_desc': 'Оптимизированные изображения, идеально подходящие для веб-сайтов и веб-приложений.',
        'removes_metadata': 'Удаляет метаданные',
        'metadata_desc': 'Автоматически удаляет ненужные метаданные при конвертации.',
        'fast_conversion': 'Быстрая конвертация',
        'fast_desc': 'Производительный и молниеносный процесс конвертации.',
        'top_performance': 'Высокая производительность',
        'performance_desc': 'Лучшая в своем классе производительность для локальных конвертеров изображений.',
        'batch_processing': 'Пакетная обработка',
        'batch_desc': 'Конвертируйте несколько изображений одновременно с помощью массовой обработки.',
        'size_reduction': 'Уменьшение размера',
        'size_desc': 'Значительно уменьшает размер файла при сохранении качества.',
        
        // Reviews section
        'user_reviews': 'Отзывы пользователей',
        'review1_name': 'Роберт Томпсон',
        'review1_text': 'Этот конвертер изображений изменил правила игры для моего фотобизнеса. Функция пакетной обработки экономит мне часы работы, а контроль качества исключителен.',
        'review2_name': 'Дженнифер Паркер',
        'review2_text': 'Как графический дизайнер, я ценю точность и надежность этого инструмента. Интерфейс интуитивно понятен, а качество конвертации неизменно отличное.',
        'review3_name': 'Уильям Чен',
        'review3_text': 'Локальная функция обработки дает мне спокойствие при работе с конфиденциальными изображениями клиентов. Быстро, безопасно и профессионально - именно то, что мне нужно.',
        'review4_name': 'Эмили Родригес',
        'review4_text': 'Я использую этот инструмент ежедневно для своего контента в социальных сетях. Возможность сохранять качество изображения при уменьшении размера файла бесценна для моей работы.',
        'review5_name': 'Даниэль Мартинес',
        'review5_text': 'Идеально подходит для моих проектов веб-разработки. Функция пакетной конвертации и гибкость формата делают этот инструмент неотъемлемой частью моего рабочего процесса.',
        'review6_name': 'София Андерсон',
        'review6_text': 'Скорость и эффективность этого конвертера замечательны. Он обрабатывает большие партии изображений без проблем, экономя мне ценное время в моей дизайнерской работе.',
        
        // FAQ Section
        'faq': 'Часто задаваемые вопросы',
        'faq1_q': 'Какие форматы изображений я могу конвертировать в WebP?',
        'faq1_a': 'Этот инструмент специально разработан для конвертации изображений JPG/JPEG и PNG в формат WebP. Другие форматы в настоящее время не поддерживаются.',
        'faq2_q': 'Безопасны ли мои данные при использовании этого инструмента?',
        'faq2_a': 'Абсолютно! Вся обработка выполняется локально в вашем браузере. Ваши изображения никогда не покидают ваше устройство, и никакие данные не отправляются на какой-либо сервер, обеспечивая полную конфиденциальность и безопасность.',
        'faq3_q': 'Что такое WebP и почему я должен его использовать?',
        'faq3_a': 'WebP - это современный формат изображений, разработанный Google, который обеспечивает превосходное сжатие без потерь и с потерями для веб-изображений. Изображения WebP обычно на 25-35% меньше, чем сопоставимые файлы JPEG или PNG, при сохранении аналогичного визуального качества, что приводит к более быстрой загрузке веб-сайтов и уменьшению использования пропускной способности.',
        'faq4_q': 'Какую настройку качества я должен использовать?',
        'faq4_a': 'Для большинства веб-использования настройка качества между 70-85% предлагает наилучший баланс между размером файла и качеством изображения. Более низкие значения (ниже 70%) будут производить меньшие файлы, но могут показывать больше артефактов сжатия. Более высокие значения (выше 85%) сохранят более высокое качество, но с уменьшающейся отдачей от уменьшения размера файла.',
        'faq5_q': 'Есть ли ограничение на количество изображений, которые я могу конвертировать одновременно?',
        'faq5_a': 'Фиксированного ограничения нет, но производительность зависит от возможностей вашего устройства. Для оптимальной производительности мы рекомендуем конвертировать партии по 20-30 изображений за раз. Более крупные партии могут привести к замедлению работы вашего браузера.',
        'faq6_q': 'Поддерживаются ли изображения WebP во всех браузерах?',
        'faq6_a': 'WebP теперь поддерживается во всех основных современных браузерах, включая Chrome, Firefox, Edge, Safari и Opera. Однако более старые версии браузеров могут не поддерживать WebP. Для веб-сайтов рекомендуется предоставлять резервные форматы с использованием элемента picture.',
        
        // Email
        'email': 'Электронная почта:'
    },
    // 阿拉伯语翻译
    'ar': {
        // Header
        'title': 'محول JPG',
        
        // Upload Area
        'drag_drop': 'اسحب وأفلت الصورة هنا أو',
        'browse': 'تصفح',
        
        // Controls
        'convert_to': 'تحويل إلى:',
        'quality': 'الجودة:',
        'convert_all': 'تحويل الكل',
        
        // Conversion Options Section
        'conversion_options': 'خيارات التحويل',
        'jpg_to_webp': 'JPG → WebP',
        'jpg_to_webp_desc': 'حوّل صور JPG إلى تنسيق WebP الحديث لتقليل حجم الملف مع الحفاظ على الجودة.',
        'jpg_to_avif': 'JPG → AVIF',
        'jpg_to_avif_desc': 'استخدم تنسيق AVIF المتقدم للحصول على أفضل نسبة ضغط وتحميل أسرع للمواقع.',
        'jpg_to_png': 'JPG → PNG',
        'jpg_to_png_desc': 'حوّل إلى تنسيق PNG بدون فقدان، مثالي للصور التي تتطلب خلفية شفافة أو جودة عالية.',
        'jpg_to_tiff': 'JPG → TIFF',
        'jpg_to_tiff_desc': 'حوّل إلى تنسيق TIFF الاحترافي، مناسب للطباعة والنشر وسير عمل التحرير الاحترافية.',
        
        // Format descriptions
        'webp_desc': 'WebP - ضغط جيد، دعم واسع',
        'avif_desc': 'AVIF - أفضل ضغط، تنسيق أحدث',
        
        // AVIF specific messages
        'avif_processing': 'معالجة AVIF (قد تستغرق وقتًا أطول)...',
        'avif_not_supported': 'ترميز AVIF غير مدعوم في متصفحك',
        'using_avif_encoder': 'استخدام Squoosh لتحويل AVIF...',
        'avif_conversion_failed': 'فشل تحويل AVIF',
        'avif_not_available': 'مشفر AVIF غير متوفر، جرب تنسيقًا آخر',
        
        // Preview Area
        'original': 'الأصلي',
        'converted': 'المحول',
        
        // Conversion status messages
        'converting': 'جاري التحويل...',
        'converting_fallback': 'التحويل باستخدام الطريقة البديلة...',
        'conversion_failed': 'فشل التحويل',
        'converted_size': 'تم التحويل ({0} كيلوبايت)',
        'original_kept': 'تم الاحتفاظ بالأصل ({0} كيلوبايت)',
        'size_info': 'الحجم: {0} كيلوبايت',
        'files_skipped': 'تم تخطي بعض الملفات. يتم دعم ملفات JPEG و PNG فقط.',
        
        // Buttons
        'clear_all': 'مسح الكل',
        'download': 'تنزيل',
        'download_all': 'تنزيل الكل',
        
        // Metadata removal message
        'metadata_note': 'ملاحظة: سيتم إزالة البيانات الوصفية مثل EXIF أثناء التحويل',
        
        // Key features section
        'key_features': 'الميزات الرئيسية',
        'no_uploads': 'لا تحميل للخادم',
        'privacy_desc': 'تبقى صورك خاصة. لا يتم إرسال أي بيانات إلى أي خادم.',
        'local_processing': 'معالجة محلية',
        'local_desc': 'تتم جميع المعالجة محليًا في متصفحك.',
        'best_web': 'الأفضل للويب',
        'web_desc': 'صور محسنة مناسبة تمامًا لمواقع الويب وتطبيقات الويب.',
        'removes_metadata': 'يزيل البيانات الوصفية',
        'metadata_desc': 'يزيل تلقائيًا البيانات الوصفية غير الضرورية أثناء التحويل.',
        'fast_conversion': 'تحويل سريع',
        'fast_desc': 'عملية تحويل عالية الأداء وسريعة كالبرق.',
        'top_performance': 'أداء متميز',
        'performance_desc': 'أفضل أداء في فئته لمحولات الصور المحلية.',
        'batch_processing': 'معالجة دفعية',
        'batch_desc': 'حوّل عدة صور دفعة واحدة باستخدام المعالجة الجماعية.',
        'size_reduction': 'تقليل الحجم',
        'size_desc': 'نحافظ على جودة الصورة مع تقليل حجم الملف بشكل كبير.',
        
        // Reviews section
        'user_reviews': 'آراء المستخدمين',
        'review1_name': 'روبرت طومسون',
        'review1_text': 'محول الصور هذا غيّر قواعد اللعبة لعملي في التصوير. توفر ميزة المعالجة الدفعية ساعات من العمل، والتحكم في الجودة استثنائي.',
        'review2_name': 'جينيفر باركر',
        'review2_text': 'كمصممة جرافيك، أقدر دقة وموثوقية هذه الأداة. الواجهة بديهية، وجودة التحويل ممتازة باستمرار.',
        'review3_name': 'وليام تشن',
        'review3_text': 'تمنحني ميزة المعالجة المحلية راحة البال عند التعامل مع صور العملاء الحساسة. سريع وآمن واحترافي - بالضبط ما كنت أحتاجه.',
        'review4_name': 'إيميلي رودريغيز',
        'review4_text': 'أستخدم هذه الأداة يوميًا لمحتوى وسائل التواصل الاجتماعي الخاص بي. القدرة على الحفاظ على جودة الصورة مع تقليل حجم الملف لا تقدر بثمن لعملي.',
        'review5_name': 'دانيال مارتينيز',
        'review5_text': 'مثالي لمشاريع تطوير الويب الخاصة بي. تجعل ميزة التحويل الدفعي ومرونة التنسيق هذه الأداة جزءًا أساسيًا من سير عملي.',
        'review6_name': 'صوفيا أندرسون',
        'review6_text': 'سرعة وكفاءة هذا المحول رائعة. يتعامل مع دفعات كبيرة من الصور بسلاسة، مما يوفر لي وقتًا ثمينًا في عملي التصميمي.',
        
        // FAQ Section
        'faq': 'الأسئلة الشائعة',
        'faq1_q': 'ما هي تنسيقات الصور التي يمكنني تحويلها إلى WebP؟',
        'faq1_a': 'تم تصميم هذه الأداة خصيصًا لتحويل صور JPG/JPEG و PNG إلى تنسيق WebP. التنسيقات الأخرى غير مدعومة في الوقت الحالي.',
        'faq2_q': 'هل بياناتي آمنة عند استخدام هذه الأداة؟',
        'faq2_a': 'بالتأكيد! تتم جميع المعالجة محليًا في متصفحك. لا تغادر صورك جهازك أبدًا، ولا يتم إرسال أي بيانات إلى أي خادم، مما يضمن الخصوصية والأمان الكاملين.',
        'faq3_q': 'ما هو WebP ولماذا يجب أن أستخدمه؟',
        'faq3_a': 'WebP هو تنسيق صور حديث طورته Google يوفر ضغطًا متفوقًا بدون فقدان وبفقدان لصور الويب. صور WebP عادة ما تكون أصغر بنسبة 25-35% من ملفات JPEG أو PNG المماثلة مع الحفاظ على جودة بصرية مماثلة، مما يؤدي إلى أوقات تحميل أسرع للمواقع وتقليل استخدام النطاق الترددي.',
        'faq4_q': 'ما إعداد الجودة الذي يجب أن أستخدمه؟',
        'faq4_a': 'لمعظم استخدامات الويب، يوفر إعداد الجودة بين 70-85% أفضل توازن بين حجم الملف وجودة الصورة. القيم الأقل (أقل من 70%) ستنتج ملفات أصغر ولكن قد تظهر المزيد من تشوهات الضغط. القيم الأعلى (فوق 85%) ستحافظ على جودة أعلى ولكن مع عوائد متناقصة على تقليل حجم الملف.',
        'faq5_q': 'هل هناك حد لعدد الصور التي يمكنني تحويلها دفعة واحدة؟',
        'faq5_a': 'لا يوجد حد ثابت، لكن الأداء يعتمد على قدرات جهازك. للحصول على أداء مثالي، نوصي بتحويل دفعات من 20-30 صورة في المرة الواحدة. قد تتسبب الدفعات الأكبر في إبطاء متصفحك.',
        'faq6_q': 'هل صور WebP مدعومة في جميع المتصفحات؟',
        'faq6_a': 'يتم الآن دعم WebP في جميع المتصفحات الحديثة الرئيسية بما في ذلك Chrome و Firefox و Edge و Safari و Opera. ومع ذلك، قد لا تدعم إصدارات المتصفح القديمة WebP. بالنسبة لمواقع الويب، يوصى بتوفير تنسيقات بديلة باستخدام عنصر picture.',
        
        // Email
        'email': 'البريد الإلكتروني:'
    },
    // 荷兰语翻译
    'nl': {
        // Header
        'title': 'JPG Convert',
        
        // Upload Area
        'drag_drop': 'Sleep uw afbeelding hier of',
        'browse': 'doorzoeken',
        
        // Controls
        'convert_to': 'Converteer naar:',
        'quality': 'Kwaliteit:',
        'convert_all': 'Converteer Alles',
        
        // Conversion Options Section
        'conversion_options': 'Conversie Opties',
        'jpg_to_webp': 'JPG → WebP',
        'jpg_to_webp_desc': 'Converteer JPG afbeeldingen naar moderne WebP-indeling voor kleinere bestandsgrootte terwijl de kwaliteit behouden blijft.',
        'jpg_to_avif': 'JPG → AVIF',
        'jpg_to_avif_desc': 'Gebruik geavanceerde AVIF-indeling voor de beste compressieverhouding en snellere website-laadtijden.',
        'jpg_to_png': 'JPG → PNG',
        'jpg_to_png_desc': 'Converteer naar lossless PNG-indeling, ideaal voor afbeeldingen die transparantie of hoge kwaliteit vereisen.',
        'jpg_to_tiff': 'JPG → TIFF',
        'jpg_to_tiff_desc': 'Converteer naar professionele TIFF-indeling, geschikt voor afdrukken, publiceren en professionele werkstromen van bewerking.',
        
        // Format descriptions
        'webp_desc': 'WebP - Goede compressie, brede ondersteuning',
        'avif_desc': 'AVIF - Beste compressie, nieuwere indeling',
        
        // AVIF specific messages
        'avif_processing': 'AVIF verwerken (kan langer duren)...',
        'avif_not_supported': 'AVIF coderen niet ondersteund in uw browser',
        'using_avif_encoder': 'Squoosh gebruiken voor AVIF-conversie...',
        'avif_conversion_failed': 'AVIF conversie mislukt',
        'avif_not_available': 'AVIF encoder niet beschikbaar, probeer een andere indeling',
        
        // Preview Area
        'original': 'Origineel',
        'converted': 'Geconverteerd',
        
        // Conversion status messages
        'converting': 'Converteren...',
        'converting_fallback': 'Converteren met alternatieve methode...',
        'conversion_failed': 'Conversie mislukt',
        'converted_size': 'Geconverteerd ({0} KB)',
        'original_kept': 'Origineel behouden ({0} KB)',
        'size_info': 'Grootte: {0} KB',
        'files_skipped': 'Sommige bestanden zijn overgeslagen. Alleen JPEG en PNG bestanden worden ondersteund.',
        
        // Buttons
        'clear_all': 'Alles wissen',
        'download': 'Downloaden',
        'download_all': 'Alles downloaden',
        
        // Metadata removal message
        'metadata_note': 'Opmerking: Meta-gegevens zoals EXIF worden verwijderd tijdens de conversie',
        
        // Key features section
        'key_features': 'Belangrijkste functies',
        'no_uploads': 'Geen upload naar server',
        'privacy_desc': 'Uw afbeeldingen blijven privé. Geen gegevens worden naar een server verstuurd.',
        'local_processing': 'Lokale verwerking',
        'local_desc': 'Alle verwerking gebeurt lokaal in uw browser.',
        'best_web': 'Ideaal voor web',
        'web_desc': 'Geoptimaliseerde afbeeldingen perfect geschikt voor websites en webapplicaties.',
        'removes_metadata': 'Meta-gegevens verwijderen',
        'metadata_desc': 'Meta-gegevens worden automatisch verwijderd tijdens de conversie.',
        'fast_conversion': 'Snel coderen',
        'fast_desc': 'Efficiënte en snelle conversie-processen.',
        'top_performance': 'Top prestaties',
        'performance_desc': 'Beste prestaties in de categorie van lokale afbeeldingsconverters.',
        'batch_processing': 'Batchverwerking',
        'batch_desc': 'Converteer meerdere afbeeldingen tegelijkertijd met batchverwerking.',
        'size_reduction': 'Grootte verminderen',
        'size_desc': 'Betekenisvol grootte verminderen terwijl kwaliteit behouden blijft.',
        
        // Reviews section
        'user_reviews': 'Gebruikersbeoordelingen',
        'review1_name': 'Robert Thompson',
        'review1_text': 'Deze afbeeldingsconverter is een game-changer voor mijn fotobusiness. De batchverwerkingfunctie bespaart mij uren werk, en de kwaliteitscontrole is uitstekend.',
        'review2_name': 'Jennifer Parker',
        'review2_text': 'Als grafisch ontwerper, waardeer ik de precisie en betrouwbaarheid van dit hulpmiddel. De interface is intuïtief, en de kwaliteit van conversie is continu uitstekend.',
        'review3_name': 'William Chen',
        'review3_text': 'De lokale verwerkingfunctie geeft mij een rustgevend gevoel bij het omgaan met gevoelige klantafbeeldingen. Snel, veilig en professioneel - precies wat ik nodig had.',
        'review4_name': 'Emily Rodriguez',
        'review4_text': 'Ik gebruik deze tool dagelijks voor mijn sociale media-inhoud. De mogelijkheid om beeldkwaliteit te behouden terwijl de bestandsgrootte wordt verkleind, is onmisbaar voor mijn werk.',
        'review5_name': 'Daniel Martinez',
        'review5_text': 'Perfect voor mijn webontwikkelingsprojecten. De batchconversiefunctie en de flexibiliteit van het formaat maken dit hulpmiddel een essentieel onderdeel van mijn werkstroom.',
        'review6_name': 'Sophie Anderson',
        'review6_text': 'De snelheid en efficiëntie van deze converter zijn indrukwekkend. Het behandelt grote afbeeldingsgroepen zonder problemen, waardoor ik waardevolle tijd bespaar in mijn ontwerpwerk.',
        
        // FAQ Section
        'faq': 'Veelgestelde vragen',
        'faq1_q': 'Welke afbeeldingsformaten kan ik converteren naar WebP?',
        'faq1_a': 'Deze tool is speciaal ontworpen om afbeeldingen JPG/JPEG en PNG naar WebP te converteren. Andere formaten zijn momenteel niet ondersteund.',
        'faq2_q': 'Zijn mijn gegevens veilig wanneer ik deze tool gebruik?',
        'faq2_a': 'Absoluut! Alle verwerking gebeurt lokaal in uw browser. Uw afbeeldingen verlaten nooit uw apparaat, en er worden geen gegevens naar een server verstuurd, wat volledige privacy en veiligheid garandeert.',
        'faq3_q': 'Wat is WebP en waarom zou ik het gebruiken?',
        'faq3_a': 'WebP is een moderne afbeeldingsindeling ontwikkeld door Google die een betere compressie biedt zowel met als zonder verlies voor webafbeeldingen. WebP afbeeldingen zijn typisch 25-35% kleiner dan vergelijkbare JPEG- of PNG-dateien bij vergelijkbare visuele kwaliteit, wat resulteert in kortere laadtijden van websites en gereduceerd bandbreedtegebruik.',
        'faq4_q': 'Welk kwaliteitsniveau zou ik moeten gebruiken?',
        'faq4_a': 'Voor de meeste webgebruikssituaties biedt een kwaliteitsinstelling tussen 70-85% de beste balans tussen bestandsgrootte en beeldkwaliteit. Lagere waarden (onder de 70%) zullen kleinere bestanden opleveren maar kunnen meer compressie-artefacten tonen. Hogere waarden (boven de 85%) zullen een hogere kwaliteit behouden maar met afnemende opbrengsten op de bestandsgrootte-reductie.',
        'faq5_q': 'Is er een limiet aan het aantal afbeeldingen dat ik tegelijkertijd kan converteren?',
        'faq5_a': 'Er is geen vaste limiet, maar de prestaties hangen af van de mogelijkheden van uw apparaat. Voor optimale prestaties raden we aan om batches van 20-30 afbeeldingen tegelijkertijd te converteren. Groter batches kunnen ervoor zorgen dat uw browser trager wordt.',
        'faq6_q': 'Worden WebP-afbeeldingen ondersteund in alle browsers?',
        'faq6_a': 'WebP wordt nu ondersteund in alle belangrijkste moderne browsers, inclusief Chrome, Firefox, Edge, Safari en Opera. Echter, oudere browserversies zouden WebP mogelijk niet ondersteunen. Voor websites wordt aangeraden om fallback-indelingen te leveren met behulp van het picture-element.',
        
        // Email
        'email': 'E-mail:'
    },
    // 波兰语翻译
    'pl': {
        // Header
        'title': 'Konwerter JPG',
        
        // Upload Area
        'drag_drop': 'Przeciągnij i upuść obraz tutaj lub',
        'browse': 'przeglądaj',
        
        // Controls
        'convert_to': 'Konwertuj na:',
        'quality': 'Jakość:',
        'convert_all': 'Konwertuj wszystko',
        
        // Conversion Options Section
        'conversion_options': 'Opcje konwersji',
        'jpg_to_webp': 'JPG → WebP',
        'jpg_to_webp_desc': 'Konwertuj obrazy JPG na nowoczesny format WebP, aby zmniejszyć rozmiar pliku przy zachowaniu jakości.',
        'jpg_to_avif': 'JPG → AVIF',
        'jpg_to_avif_desc': 'Użyj zaawansowanego formatu AVIF dla najlepszego współczynnika kompresji i szybszego ładowania stron.',
        'jpg_to_png': 'JPG → PNG',
        'jpg_to_png_desc': 'Konwertuj do bezstratnego formatu PNG, idealnego dla obrazów wymagających przezroczystości lub wysokiej jakości.',
        'jpg_to_tiff': 'JPG → TIFF',
        'jpg_to_tiff_desc': 'Konwertuj do profesjonalnego formatu TIFF, odpowiedniego do druku, publikacji i profesjonalnych przepływów pracy edycji.',
        
        // Format descriptions
        'webp_desc': 'WebP - Dobra kompresja, szerokie wsparcie',
        'avif_desc': 'AVIF - Najlepsza kompresja, nowszy format',
        
        // AVIF specific messages
        'avif_processing': 'Przetwarzanie AVIF (może potrwać dłużej)...',
        'avif_not_supported': 'Kodowanie AVIF nie jest obsługiwane w Twojej przeglądarce',
        'using_avif_encoder': 'Używanie Squoosh do konwersji AVIF...',
        'avif_conversion_failed': 'Konwersja AVIF nie powiodła się',
        'avif_not_available': 'Koder AVIF niedostępny, wypróbuj inny format',
        
        // Preview Area
        'original': 'Oryginał',
        'converted': 'Przekonwertowany',
        
        // Conversion status messages
        'converting': 'Konwertowanie...',
        'converting_fallback': 'Konwertowanie z użyciem metody zapasowej...',
        'conversion_failed': 'Konwersja nie powiodła się',
        'converted_size': 'Przekonwertowano ({0} KB)',
        'original_kept': 'Zachowano oryginał ({0} KB)',
        'size_info': 'Rozmiar: {0} KB',
        'files_skipped': 'Niektóre pliki zostały pominięte. Obsługiwane są tylko pliki JPEG i PNG.',
        
        // Buttons
        'clear_all': 'Wyczyść wszystko',
        'download': 'Pobierz',
        'download_all': 'Pobierz wszystko',
        
        // Metadata removal message
        'metadata_note': 'Uwaga: Metadane, takie jak EXIF, zostaną usunięte podczas konwersji',
        
        // Key features section
        'key_features': 'Kluczowe funkcje',
        'no_uploads': 'Brak przesyłania na serwer',
        'privacy_desc': 'Twoje obrazy pozostają prywatne. Żadne dane nie są wysyłane na żaden serwer.',
        'local_processing': 'Lokalne przetwarzanie',
        'local_desc': 'Całe przetwarzanie odbywa się lokalnie w Twojej przeglądarce.',
        'best_web': 'Najlepsze dla sieci',
        'web_desc': 'Zoptymalizowane obrazy idealnie dopasowane do stron internetowych i aplikacji webowych.',
        'removes_metadata': 'Usuwa metadane',
        'metadata_desc': 'Automatycznie usuwa niepotrzebne metadane podczas konwersji.',
        'fast_conversion': 'Szybka konwersja',
        'fast_desc': 'Wydajny i błyskawiczny proces konwersji.',
        'top_performance': 'Najwyższa wydajność',
        'performance_desc': 'Najlepsza w swojej klasie wydajność dla lokalnych konwerterów obrazów.',
        'batch_processing': 'Przetwarzanie wsadowe',
        'batch_desc': 'Konwertuj wiele obrazów jednocześnie dzięki przetwarzaniu zbiorczemu.',
        'size_reduction': 'Redukcja rozmiaru',
        'size_desc': 'Znacznie zmniejsza rozmiar pliku przy zachowaniu jakości.',
        
        // Reviews section
        'user_reviews': 'Opinie użytkowników',
        'review1_name': 'Robert Thompson',
        'review1_text': 'Ten konwerter obrazów to prawdziwa rewolucja dla mojej firmy fotograficznej. Funkcja przetwarzania wsadowego oszczędza mi godziny pracy, a kontrola jakości jest wyjątkowa.',
        'review2_name': 'Jennifer Parker',
        'review2_text': 'Jako grafik, doceniam precyzję i niezawodność tego narzędzia. Interfejs jest intuicyjny, a jakość konwersji jest niezmiennie doskonała.',
        'review3_name': 'William Chen',
        'review3_text': 'Funkcja lokalnego przetwarzania daje mi spokój ducha podczas obsługi wrażliwych obrazów klientów. Szybko, bezpiecznie i profesjonalnie - dokładnie to, czego potrzebowałem.',
        'review4_name': 'Emily Rodriguez',
        'review4_text': 'Używam tego narzędzia codziennie do moich treści w mediach społecznościowych. Możliwość zachowania jakości obrazu przy jednoczesnym zmniejszeniu rozmiaru pliku jest nieoceniona dla mojej pracy.',
        'review5_name': 'Daniel Martinez',
        'review5_text': 'Idealne dla moich projektów tworzenia stron internetowych. Funkcja konwersji wsadowej i elastyczność formatu sprawiają, że to narzędzie jest niezbędnym elementem mojego przepływu pracy.',
        'review6_name': 'Sophie Anderson',
        'review6_text': 'Szybkość i wydajność tego konwertera są godne uwagi. Obsługuje duże partie obrazów bez problemów, oszczędzając mi cenny czas w mojej pracy projektowej.',
        
        // FAQ Section
        'faq': 'Często zadawane pytania',
        'faq1_q': 'Jakie formaty obrazów mogę konwertować na WebP?',
        'faq1_a': 'To narzędzie jest specjalnie zaprojektowane do konwersji obrazów JPG/JPEG i PNG na format WebP. Inne formaty nie są obecnie obsługiwane.',
        'faq2_q': 'Czy moje dane są bezpieczne podczas korzystania z tego narzędzia?',
        'faq2_a': 'Absolutnie! Całe przetwarzanie odbywa się lokalnie w Twojej przeglądarce. Twoje obrazy nigdy nie opuszczają Twojego urządzenia, a żadne dane nie są wysyłane na żaden serwer, zapewniając pełną prywatność i bezpieczeństwo.',
        'faq3_q': 'Co to jest WebP i dlaczego powinienem go używać?',
        'faq3_a': 'WebP to nowoczesny format obrazu opracowany przez Google, który zapewnia lepszą kompresję bezstratną i stratną dla obrazów internetowych. Obrazy WebP są zazwyczaj o 25-35% mniejsze niż porównywalne pliki JPEG lub PNG, zachowując podobną jakość wizualną, co skutkuje szybszym ładowaniem stron internetowych i zmniejszonym wykorzystaniem przepustowości.',
        'faq4_q': 'Jakiego ustawienia jakości powinienem użyć?',
        'faq4_a': 'Dla większości zastosowań internetowych ustawienie jakości między 70-85% oferuje najlepszą równowagę między rozmiarem pliku a jakością obrazu. Niższe wartości (poniżej 70%) będą generować mniejsze pliki, ale mogą pokazywać więcej artefaktów kompresji. Wyższe wartości (powyżej 85%) zachowają wyższą jakość, ale z malejącymi korzyściami w zakresie redukcji rozmiaru pliku.',
        'faq5_q': 'Czy istnieje limit liczby obrazów, które mogę konwertować jednocześnie?',
        'faq5_a': 'Nie ma stałego limitu, ale wydajność zależy od możliwości Twojego urządzenia. Dla optymalnej wydajności zalecamy konwertowanie partii 20-30 obrazów naraz. Większe partie mogą spowodować spowolnienie przeglądarki.',
        'faq6_q': 'Czy obrazy WebP są obsługiwane we wszystkich przeglądarkach?',
        'faq6_a': 'WebP jest teraz obsługiwany we wszystkich głównych nowoczesnych przeglądarkach, w tym Chrome, Firefox, Edge, Safari i Opera. Jednak starsze wersje przeglądarek mogą nie obsługiwać WebP. W przypadku stron internetowych zaleca się zapewnienie formatów zapasowych za pomocą elementu picture.',
        
        // Email
        'email': 'E-mail:'
    },
    // 土耳其语翻译
    'tr': {
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
        'user_reviews': 'Kullanıcı görüşleri',
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
    },
    // 泰语翻译
    'th': {
        // Header
        'title': 'เครื่องมือแปลง JPG',
        
        // Upload Area
        'drag_drop': 'ลากและวางรูปภาพของคุณที่นี่หรือ',
        'browse': 'เรียกดู',
        
        // Controls
        'convert_to': 'แปลงเป็น:',
        'quality': 'คุณภาพ:',
        'convert_all': 'แปลงทั้งหมด',
        
        // Conversion Options Section
        'conversion_options': 'ตัวเลือกการแปลง',
        'jpg_to_webp': 'JPG → WebP',
        'jpg_to_webp_desc': 'แปลงรูปภาพ JPG เป็นรูปแบบ WebP ที่ทันสมัยเพื่อลดขนาดไฟล์โดยยังคงรักษาคุณภาพไว้',
        'jpg_to_avif': 'JPG → AVIF',
        'jpg_to_avif_desc': 'ใช้รูปแบบ AVIF ขั้นสูงเพื่อการบีบอัดที่ดีที่สุดและการโหลดเว็บไซต์ที่เร็วขึ้น',
        'jpg_to_png': 'JPG → PNG',
        'jpg_to_png_desc': 'แปลงเป็นรูปแบบ PNG แบบไม่สูญเสียคุณภาพ เหมาะสำหรับรูปภาพที่ต้องการความโปร่งใสหรือคุณภาพสูง',
        'jpg_to_tiff': 'JPG → TIFF',
        'jpg_to_tiff_desc': 'แปลงเป็นรูปแบบ TIFF ระดับมืออาชีพ เหมาะสำหรับการพิมพ์ การเผยแพร่ และเวิร์กโฟลว์การแก้ไขระดับมืออาชีพ',
        
        // Format descriptions
        'webp_desc': 'WebP - การบีบอัดที่ดี การสนับสนุนอย่างกว้างขวาง',
        'avif_desc': 'AVIF - การบีบอัดที่ดีที่สุด รูปแบบใหม่กว่า',
        
        // AVIF specific messages
        'avif_processing': 'กำลังประมวลผล AVIF (อาจใช้เวลานานขึ้น)...',
        'avif_not_supported': 'การเข้ารหัส AVIF ไม่รองรับในเบราว์เซอร์ของคุณ',
        'using_avif_encoder': 'กำลังใช้ Squoosh สำหรับการแปลง AVIF...',
        'avif_conversion_failed': 'การแปลง AVIF ล้มเหลว',
        'avif_not_available': 'ตัวเข้ารหัส AVIF ไม่พร้อมใช้งาน ลองใช้รูปแบบอื่น',
        
        // Preview Area
        'original': 'ต้นฉบับ',
        'converted': 'แปลงแล้ว',
        
        // Conversion status messages
        'converting': 'กำลังแปลง...',
        'converting_fallback': 'กำลังแปลงด้วยวิธีสำรอง...',
        'conversion_failed': 'การแปลงล้มเหลว',
        'converted_size': 'แปลงแล้ว ({0} KB)',
        'original_kept': 'เก็บต้นฉบับไว้ ({0} KB)',
        'size_info': 'ขนาด: {0} KB',
        'files_skipped': 'ข้ามไฟล์บางไฟล์ รองรับเฉพาะไฟล์ JPEG และ PNG เท่านั้น',
        
        // Buttons
        'clear_all': 'ล้างทั้งหมด',
        'download': 'ดาวน์โหลด',
        'download_all': 'ดาวน์โหลดทั้งหมด',
        
        // Metadata removal message
        'metadata_note': 'หมายเหตุ: เมทาดาต้าเช่น EXIF จะถูกลบออกระหว่างการแปลง',
        
        // Key features section
        'key_features': 'คุณสมบัติหลัก',
        'no_uploads': 'ไม่มีการอัปโหลดไปยังเซิร์ฟเวอร์',
        'privacy_desc': 'รูปภาพของคุณยังคงเป็นส่วนตัว ไม่มีข้อมูลถูกส่งไปยังเซิร์ฟเวอร์ใดๆ',
        'local_processing': 'การประมวลผลเฉพาะที่',
        'local_desc': 'การประมวลผลทั้งหมดทำในเบราว์เซอร์ของคุณเท่านั้น',
        'best_web': 'ดีที่สุดสำหรับเว็บ',
        'web_desc': 'รูปภาพที่ปรับให้เหมาะสมกับเว็บไซต์และเว็บแอปพลิเคชัน',
        'removes_metadata': 'ลบเมทาดาต้า',
        'metadata_desc': 'ลบเมทาดาต้าที่ไม่จำเป็นออกโดยอัตโนมัติระหว่างการแปลง',
        'fast_conversion': 'การแปลงอย่างรวดเร็ว',
        'fast_desc': 'กระบวนการแปลงที่มีประสิทธิภาพและรวดเร็วทันใจ',
        'top_performance': 'ประสิทธิภาพสูงสุด',
        'performance_desc': 'ประสิทธิภาพที่ดีที่สุดในระดับเดียวกันสำหรับตัวแปลงรูปภาพในเครื่อง',
        'batch_processing': 'การประมวลผลเป็นชุด',
        'batch_desc': 'แปลงรูปภาพหลายรูปพร้อมกันด้วยการประมวลผลแบบกลุ่ม',
        'size_reduction': 'การลดขนาด',
        'size_desc': 'ลดขนาดไฟล์อย่างมีนัยสำคัญในขณะที่ยังคงรักษาคุณภาพ',
        
        // Reviews section
        'user_reviews': 'รีวิวจากผู้ใช้',
        'review1_name': 'โรเบิร์ต ทอมป์สัน',
        'review1_text': 'เครื่องมือแปลงรูปภาพนี้เปลี่ยนเกมสำหรับธุรกิจถ่ายภาพของฉัน คุณสมบัติการประมวลผลเป็นชุดช่วยประหยัดเวลาหลายชั่วโมง และการควบคุมคุณภาพนั้นยอดเยี่ยม',
        'review2_name': 'เจนนิเฟอร์ พาร์คเกอร์',
        'review2_text': 'ในฐานะนักออกแบบกราฟิก ฉันชื่นชมความแม่นยำและความน่าเชื่อถือของเครื่องมือนี้ อินเทอร์เฟซเข้าใจง่ายและคุณภาพการแปลงนั้นยอดเยี่ยมอย่างสม่ำเสมอ',
        'review3_name': 'วิลเลียม เฉิน',
        'review3_text': 'คุณสมบัติการประมวลผลเฉพาะที่ทำให้ฉันสบายใจเมื่อจัดการกับรูปภาพของลูกค้าที่เป็นความลับ เร็ว ปลอดภัย และมืออาชีพ - ตรงกับที่ฉันต้องการพอดี',
        'review4_name': 'เอมิลี โรดริเกซ',
        'review4_text': 'ฉันใช้เครื่องมือนี้ทุกวันสำหรับเนื้อหาโซเชียลมีเดียของฉัน ความสามารถในการรักษาคุณภาพของรูปภาพในขณะที่ลดขนาดของไฟล์นั้นมีค่ามากสำหรับงานของฉัน',
        'review5_name': 'แดเนียล มาร์ติเนซ',
        'review5_text': 'สมบูรณ์แบบสำหรับโปรเจกต์พัฒนาเว็บของฉัน คุณสมบัติการแปลงเป็นชุดและความยืดหยุ่นของรูปแบบทำให้เครื่องมือนี้เป็นส่วนสำคัญของเวิร์กโฟลว์ของฉัน',
        'review6_name': 'โซฟี แอนเดอร์สัน',
        'review6_text': 'ความเร็วและประสิทธิภาพของเครื่องมือแปลงนี้น่าทึ่ง มันจัดการกับรูปภาพจำนวนมากได้อย่างราบรื่น ช่วยประหยัดเวลาอันมีค่าในงานออกแบบของฉัน',
        
        // FAQ Section
        'faq': 'คำถามที่พบบ่อย',
        'faq1_q': 'ฉันสามารถแปลงรูปแบบรูปภาพใดไปเป็น WebP ได้บ้าง?',
        'faq1_a': 'เครื่องมือนี้ออกแบบมาโดยเฉพาะเพื่อแปลงรูปภาพ JPG/JPEG และ PNG เป็นรูปแบบ WebP รูปแบบอื่นๆ ไม่รองรับในขณะนี้',
        'faq2_q': 'ข้อมูลของฉันปลอดภัยเมื่อใช้เครื่องมือนี้หรือไม่?',
        'faq2_a': 'แน่นอน! การประมวลผลทั้งหมดทำในเบราว์เซอร์ของคุณเท่านั้น รูปภาพของคุณไม่เคยออกจากอุปกรณ์ของคุณ และไม่มีข้อมูลถูกส่งไปยังเซิร์ฟเวอร์ใดๆ ซึ่งรับประกันความเป็นส่วนตัวและความปลอดภัยอย่างสมบูรณ์',
        'faq3_q': 'WebP คืออะไรและเหตุใดฉันจึงควรใช้?',
        'faq3_a': 'WebP เป็นรูปแบบรูปภาพสมัยใหม่ที่พัฒนาโดย Google ซึ่งให้การบีบอัดแบบไม่สูญเสียและแบบสูญเสียที่เหนือกว่าสำหรับรูปภาพบนเว็บ รูปภาพ WebP มักมีขนาดเล็กกว่าไฟล์ JPEG หรือ PNG ที่เทียบเคียงได้ 25-35% ในขณะที่ยังคงรักษาคุณภาพภาพที่คล้ายกัน ส่งผลให้เวลาในการโหลดเว็บไซต์เร็วขึ้นและลดการใช้แบนด์วิดธ์',
        'faq4_q': 'ฉันควรใช้การตั้งค่าคุณภาพเท่าไร?',
        'faq4_a': 'สำหรับการใช้งานบนเว็บส่วนใหญ่ การตั้งค่าคุณภาพระหว่าง 70-85% ให้ความสมดุลที่ดีที่สุดระหว่างขนาดไฟล์และคุณภาพของรูปภาพ ค่าที่ต่ำกว่า (ต่ำกว่า 70%) จะให้ไฟล์ที่เล็กกว่าแต่อาจแสดงความผิดเพี้ยนจากการบีบอัดมากขึ้น ค่าที่สูงกว่า (สูงกว่า 85%) จะรักษาคุณภาพที่สูงกว่าแต่ให้ผลตอบแทนที่ลดลงในการลดขนาดไฟล์',
        'faq5_q': 'มีข้อจำกัดในการแปลงรูปภาพพร้อมกันกี่รูปหรือไม่?',
        'faq5_a': 'ไม่มีข้อจำกัดที่แน่นอน แต่ประสิทธิภาพขึ้นอยู่กับความสามารถของอุปกรณ์ของคุณ สำหรับประสิทธิภาพที่ดีที่สุด เราแนะนำให้แปลงเป็นชุดครั้งละ 20-30 รูป ชุดที่ใหญ่กว่าอาจทำให้เบราว์เซอร์ของคุณช้าลง',
        'faq6_q': 'รูปภาพ WebP ได้รับการสนับสนุนในทุกเบราว์เซอร์หรือไม่?',
        'faq6_a': 'WebP, artık Chrome, Firefox, Edge, Safari และ Opera gibi tüm önemli modern tarayıcılarda destekleniyor. Ancak, eski tarayıcı versiyonları WebP desteklemeyebilir. Web siteleri için, picture öğesini kullanarak yedek formatlar sağlamayı öneririz.',
        
        // Email
        'email': 'อีเมล:'
    },
    // 越南语翻译
    'vi': {
        // Header
        'title': 'Công cụ chuyển đổi JPG',
        
        // Upload Area
        'drag_drop': 'Kéo và thả hình ảnh của bạn vào đây hoặc',
        'browse': 'duyệt tìm',
        
        // Controls
        'convert_to': 'Chuyển đổi sang:',
        'quality': 'Chất lượng:',
        'convert_all': 'Chuyển đổi tất cả',
        
        // Conversion Options Section
        'conversion_options': 'Tùy chọn chuyển đổi',
        'jpg_to_webp': 'JPG → WebP',
        'jpg_to_webp_desc': 'Chuyển đổi hình ảnh JPG sang định dạng WebP hiện đại để giảm kích thước tệp trong khi vẫn duy trì chất lượng.',
        'jpg_to_avif': 'JPG → AVIF',
        'jpg_to_avif_desc': 'Sử dụng định dạng AVIF tiên tiến để có tỷ lệ nén tốt nhất và tải trang web nhanh hơn.',
        'jpg_to_png': 'JPG → PNG',
        'jpg_to_png_desc': 'Chuyển đổi sang định dạng PNG không mất dữ liệu, lý tưởng cho hình ảnh yêu cầu độ trong suốt hoặc chất lượng cao.',
        'jpg_to_tiff': 'JPG → TIFF',
        'jpg_to_tiff_desc': 'Chuyển đổi sang định dạng TIFF chuyên nghiệp, phù hợp cho in ấn, xuất bản và quy trình chỉnh sửa chuyên nghiệp.',
        
        // Format descriptions
        'webp_desc': 'WebP - Nén tốt, hỗ trợ rộng rãi',
        'avif_desc': 'AVIF - Nén tốt nhất, định dạng mới hơn',
        
        // AVIF specific messages
        'avif_processing': 'Đang xử lý AVIF (có thể mất nhiều thời gian hơn)...',
        'avif_not_supported': 'Mã hóa AVIF không được hỗ trợ trong trình duyệt của bạn',
        'using_avif_encoder': 'Đang sử dụng Squoosh để chuyển đổi AVIF...',
        'avif_conversion_failed': 'Chuyển đổi AVIF thất bại',
        'avif_not_available': 'Bộ mã hóa AVIF không khả dụng, hãy thử một định dạng khác',
        
        // Preview Area
        'original': 'Gốc',
        'converted': 'Đã chuyển đổi',
        
        // Conversion status messages
        'converting': 'Đang chuyển đổi...',
        'converting_fallback': 'Đang chuyển đổi với phương pháp dự phòng...',
        'conversion_failed': 'Chuyển đổi thất bại',
        'converted_size': 'Đã chuyển đổi ({0} KB)',
        'original_kept': 'Giữ nguyên bản gốc ({0} KB)',
        'size_info': 'Kích thước: {0} KB',
        'files_skipped': 'Một số tệp đã bị bỏ qua. Chỉ hỗ trợ tệp JPEG và PNG.',
        
        // Buttons
        'clear_all': 'Xóa tất cả',
        'download': 'Tải xuống',
        'download_all': 'Tải xuống tất cả',
        
        // Metadata removal message
        'metadata_note': 'Lưu ý: Metadata như EXIF sẽ bị xóa trong quá trình chuyển đổi',
        
        // Key features section
        'key_features': 'Tính năng chính',
        'no_uploads': 'Không tải lên máy chủ',
        'privacy_desc': 'Hình ảnh của bạn vẫn riêng tư. Không có dữ liệu nào được gửi đến bất kỳ máy chủ nào.',
        'local_processing': 'Xử lý cục bộ',
        'local_desc': 'Tất cả xử lý được thực hiện cục bộ trong trình duyệt của bạn.',
        'best_web': 'Tốt nhất cho Web',
        'web_desc': 'Hình ảnh được tối ưu hóa hoàn hảo cho trang web và ứng dụng web.',
        'removes_metadata': 'Xóa Metadata',
        'metadata_desc': 'Tự động loại bỏ metadata không cần thiết trong quá trình chuyển đổi.',
        'fast_conversion': 'Chuyển đổi nhanh',
        'fast_desc': 'Quy trình chuyển đổi hiệu quả và nhanh như chớp.',
        'top_performance': 'Hiệu suất hàng đầu',
        'performance_desc': 'Hiệu suất tốt nhất trong lớp cho các bộ chuyển đổi hình ảnh cục bộ.',
        'batch_processing': 'Xử lý hàng loạt',
        'batch_desc': 'Chuyển đổi nhiều hình ảnh cùng một lúc với xử lý hàng loạt.',
        'size_reduction': 'Giảm kích thước',
        'size_desc': 'Giảm đáng kể kích thước tệp trong khi vẫn duy trì chất lượng.',
        
        // Reviews section
        'user_reviews': 'Đánh giá của người dùng',
        'review1_name': 'Robert Thompson',
        'review1_text': 'Công cụ chuyển đổi hình ảnh này là một bước đột phá cho doanh nghiệp nhiếp ảnh của tôi. Tính năng xử lý hàng loạt tiết kiệm cho tôi hàng giờ làm việc, và việc kiểm soát chất lượng thì xuất sắc.',
        'review2_name': 'Jennifer Parker',
        'review2_text': 'Là một nhà thiết kế đồ họa, tôi đánh giá cao độ chính xác và độ tin cậy của công cụ này. Giao diện trực quan và chất lượng chuyển đổi luôn xuất sắc.',
        'review3_name': 'William Chen',
        'review3_text': 'Tính năng xử lý cục bộ mang lại cho tôi sự yên tâm khi xử lý hình ảnh nhạy cảm của khách hàng. Nhanh, an toàn và chuyên nghiệp - chính xác những gì tôi cần.',
        'review4_name': 'Emily Rodriguez',
        'review4_text': 'Tôi sử dụng công cụ này hàng ngày cho nội dung mạng xã hội của mình. Khả năng duy trì chất lượng hình ảnh trong khi giảm kích thước tệp là vô giá cho công việc của tôi.',
        'review5_name': 'Daniel Martinez',
        'review5_text': 'Hoàn hảo cho các dự án phát triển web của tôi. Tính năng chuyển đổi hàng loạt và tính linh hoạt của định dạng làm cho công cụ này trở thành một phần thiết yếu trong quy trình làm việc của tôi.',
        'review6_name': 'Sophie Anderson',
        'review6_text': 'Tốc độ và hiệu quả của bộ chuyển đổi này thật đáng kinh ngạc. Nó xử lý các lô hình ảnh lớn một cách liền mạch, tiết kiệm thời gian quý báu trong công việc thiết kế của tôi.',
        
        // FAQ Section
    },
    // 印度尼西亚语翻译
    'id': {
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
    },
    // 瑞典语翻译
    'sv': {
        // Header
        'title': 'JPG Konverterare',
        
        // Upload Area
        'drag_drop': 'Dra och släpp din bild här eller',
        'browse': 'bläddra',
        
        // Controls
        'convert_to': 'Konvertera till:',
        'quality': 'Kvalitet:',
        'convert_all': 'Konvertera alla',
        
        // Conversion Options Section
        'conversion_options': 'Konverteringsalternativ',
        'jpg_to_webp': 'JPG → WebP',
        'jpg_to_webp_desc': 'Konvertera JPG-bilder till det moderna WebP-formatet för mindre filstorlek med bibehållen kvalitet.',
        'jpg_to_avif': 'JPG → AVIF',
        'jpg_to_avif_desc': 'Använd det avancerade AVIF-formatet för bästa kompressionsförhållande och snabbare webbplatsladdning.',
        'jpg_to_png': 'JPG → PNG',
        'jpg_to_png_desc': 'Konvertera till förlustfritt PNG-format, perfekt för bilder som kräver transparens eller hög kvalitet.',
        'jpg_to_tiff': 'JPG → TIFF',
        'jpg_to_tiff_desc': 'Konvertera till professionellt TIFF-format, lämpligt för utskrift, publicering och professionella redigeringsarbetsflöden.',
        
        // Format descriptions
        'webp_desc': 'WebP - Bra kompression, brett stöd',
        'avif_desc': 'AVIF - Bäst kompression, nyare format',
        
        // AVIF specific messages
        'avif_processing': 'Bearbetar AVIF (kan ta längre tid)...',
        'avif_not_supported': 'AVIF-kodning stöds inte i din webbläsare',
        'using_avif_encoder': 'Använder Squoosh för AVIF-konvertering...',
        'avif_conversion_failed': 'AVIF-konvertering misslyckades',
        'avif_not_available': 'AVIF-kodare inte tillgänglig, prova ett annat format',
        
        // Preview Area
        'original': 'Original',
        'converted': 'Konverterad',
        
        // Conversion status messages
        'converting': 'Konverterar...',
        'converting_fallback': 'Konverterar med fallback-metod...',
        'conversion_failed': 'Konvertering misslyckades',
        'converted_size': 'Konverterad ({0} KB)',
        'original_kept': 'Original behållet ({0} KB)',
        'size_info': 'Storlek: {0} KB',
        'files_skipped': 'Vissa filer hoppades över. Endast JPEG- och PNG-filer stöds.',
        
        // Buttons
        'clear_all': 'Rensa alla',
        'download': 'Ladda ner',
        'download_all': 'Ladda ner alla',
        
        // Metadata removal message
        'metadata_note': 'Obs: Metadata som EXIF kommer att tas bort vid konvertering',
        
        // Key features section
        'key_features': 'Nyckelfunktioner',
        'no_uploads': 'Inga uppladdningar till server',
        'privacy_desc': 'Dina bilder förblir privata. Ingen data skickas till någon server.',
        'local_processing': 'Lokal bearbetning',
        'local_desc': 'All bearbetning görs lokalt i din webbläsare.',
        'best_web': 'Bäst för webben',
        'web_desc': 'Optimerade bilder perfekt anpassade för webbplatser och webbappar.',
        'removes_metadata': 'Tar bort metadata',
        'metadata_desc': 'Tar automatiskt bort onödig metadata vid konvertering.',
        'fast_conversion': 'Snabb konvertering',
        'fast_desc': 'Effektiv och blixtsnabb konverteringsprocess.',
        'top_performance': 'Topprestanda',
        'performance_desc': 'Bästa prestanda i klassen för lokala bildkonverterare.',
        'batch_processing': 'Batchbearbetning',
        'batch_desc': 'Konvertera flera bilder samtidigt med massbearbetning.',
        'size_reduction': 'Storleksminskning',
        'size_desc': 'Minskar avsevärt filstorleken samtidigt som kvaliteten bibehålls.',
        
        // Reviews section
        'user_reviews': 'Användarrecensioner',
        'review1_name': 'Robert Thompson',
        'review1_text': 'Denna bildkonverterare är en spelchanger för min fotograferingsverksamhet. Batchbearbetningsfunktionen sparar mig timmar av arbete, och kvalitetskontrollen är exceptionell.',
        'review2_name': 'Jennifer Parker',
        'review2_text': 'Som grafisk designer uppskattar jag precisionen och tillförlitligheten hos detta verktyg. Gränssnittet är intuitivt, och konverteringskvaliteten är konsekvent utmärkt.',
        'review3_name': 'William Chen',
        'review3_text': 'Funktionen för lokal bearbetning ger mig sinnesro när jag hanterar känsliga kundbilder. Snabbt, säkert och professionellt - exakt vad jag behövde.',
        'review4_name': 'Emily Rodriguez',
        'review4_text': 'Jag använder detta verktyg dagligen för mitt innehåll på sociala medier. Förmågan att bibehålla bildkvalitet samtidigt som filstorleken minskas är ovärderlig för mitt arbete.',
        'review5_name': 'Daniel Martinez',
        'review5_text': 'Perfekt för mina webbutvecklingsprojekt. Batchkonverteringsfunktionen och formatflexibiliteten gör detta verktyg till en väsentlig del av mitt arbetsflöde.',
        'review6_name': 'Sophie Anderson',
        'review6_text': 'Hastigheten och effektiviteten hos denna konverterare är anmärkningsvärda. Den hanterar stora batcher av bilder sömlöst, vilket sparar mig värdefull tid i mitt designarbete.',
        
        // FAQ Section
        'faq': 'Vanliga frågor',
        'faq1_q': 'Vilka bildformat kan jag konvertera till WebP?',
        'faq1_a': 'Detta verktyg är specifikt utformat för att konvertera JPG/JPEG- och PNG-bilder till WebP-format. Andra format stöds inte för närvarande.',
        'faq2_q': 'Är mina data säkra när jag använder detta verktyg?',
        'faq2_a': 'Absolut! All bearbetning görs lokalt i din webbläsare. Dina bilder lämnar aldrig din enhet, och ingen data skickas till någon server, vilket säkerställer fullständig integritet och säkerhet.',
        'faq3_q': 'Vad är WebP och varför bör jag använda det?',
        'faq3_a': 'WebP är ett modernt bildformat utvecklat av Google som ger överlägsen förlustfri och förlustbringande komprimering för webbbilder. WebP-bilder är vanligtvis 25-35% mindre än jämförbara JPEG- eller PNG-filer samtidigt som de bibehåller liknande visuell kvalitet, vilket resulterar i snabbare webbplatsladdningstider och minskad bandbreddsanvändning.',
        'faq4_q': 'Vilken kvalitetsinställning bör jag använda?',
        'faq4_a': 'För de flesta webbanvändningar erbjuder en kvalitetsinställning mellan 70-85% den bästa balansen mellan filstorlek och bildkvalitet. Lägre värden (under 70%) kommer att producera mindre filer men kan visa fler kompressionsartefakter. Högre värden (över 85%) kommer att bibehålla högre kvalitet men med minskande avkastning på filstorleksminskning.',
        'faq5_q': 'Finns det en gräns för hur många bilder jag kan konvertera samtidigt?',
        'faq5_a': 'Det finns ingen fast gräns, men prestanda beror på din enhets kapacitet. För optimal prestanda rekommenderar vi att konvertera batchar på 20-30 bilder åt gången. Större batchar kan göra att din webbläsare blir långsammare.',
        'faq6_q': 'Stöds WebP-bilder i alla webbläsare?',
        'faq6_a': 'WebP stöds nu i alla större moderna webbläsare inklusive Chrome, Firefox, Edge, Safari och Opera. Äldre webbläsarversioner kanske dock inte stöder WebP. För webbplatser rekommenderas att tillhandahålla reservformat med hjälp av picture-elementet.',
        
        // Email
        'email': 'E-post:'
    },
    // 印地语翻译
    'hi': {
        // Header
        'title': 'JPG कन्वर्टर',
        
        // Upload Area
        'drag_drop': 'अपनी छवि यहां खींचें और छोड़ें या',
        'browse': 'ब्राउज़ करें',
        
        // Controls
        'convert_to': 'इसमें बदलें:',
        'quality': 'गुणवत्ता:',
        'convert_all': 'सभी को बदलें',
        
        // Conversion Options Section
        'conversion_options': 'रूपांतरण विकल्प',
        'jpg_to_webp': 'JPG → WebP',
        'jpg_to_webp_desc': 'गुणवत्ता बनाए रखते हुए छोटे फ़ाइल आकार के लिए JPG छवियों को आधुनिक WebP प्रारूप में बदलें।',
        'jpg_to_avif': 'JPG → AVIF',
        'jpg_to_avif_desc': 'सर्वोत्तम संपीड़न अनुपात और तेज़ वेबसाइट लोडिंग के लिए उन्नत AVIF प्रारूप का उपयोग करें।',
        'jpg_to_png': 'JPG → PNG',
        'jpg_to_png_desc': 'हानिरहित PNG प्रारूप में बदलें, पारदर्शिता या उच्च गुणवत्ता वाली छवियों के लिए आदर्श।',
        'jpg_to_tiff': 'JPG → TIFF',
        'jpg_to_tiff_desc': 'प्रिंटिंग, प्रकाशन और पेशेवर संपादन कार्यप्रवाह के लिए उपयुक्त पेशेवर TIFF प्रारूप में बदलें।',
        
        // Format descriptions
        'webp_desc': 'WebP - अच्छा संपीड़न, व्यापक समर्थन',
        'avif_desc': 'AVIF - सर्वोत्तम संपीड़न, नया प्रारूप',
        
        // AVIF specific messages
        'avif_processing': 'AVIF प्रोसेसिंग (अधिक समय लग सकता है)...',
        'avif_not_supported': 'आपके ब्राउज़र में AVIF एन्कोडिंग समर्थित नहीं है',
        'using_avif_encoder': 'AVIF रूपांतरण के लिए Squoosh का उपयोग कर रहे हैं...',
        'avif_conversion_failed': 'AVIF रूपांतरण विफल रहा',
        'avif_not_available': 'AVIF एनकोडर उपलब्ध नहीं है, अन्य प्रारूप का प्रयास करें',
        
        // Preview Area
        'original': 'मूल',
        'converted': 'परिवर्तित',
        
        // Conversion status messages
        'converting': 'परिवर्तित कर रहे हैं...',
        'converting_fallback': 'फॉलबैक के साथ परिवर्तित कर रहे हैं...',
        'conversion_failed': 'रूपांतरण विफल रहा',
        'converted_size': 'परिवर्तित ({0} KB)',
        'original_kept': 'मूल रखा गया ({0} KB)',
        'size_info': 'आकार: {0} KB',
        'files_skipped': 'कुछ फ़ाइलें छोड़ी गईं। केवल JPEG और PNG फ़ाइलें समर्थित हैं।',
        
        // Buttons
        'clear_all': 'सभी साफ़ करें',
        'download': 'डाउनलोड करें',
        'download_all': 'सभी डाउनलोड करें',
        
        // Metadata removal message
        'metadata_note': 'नोट: EXIF जैसे मेटाडेटा रूपांतरण के दौरान हटा दिए जाएंगे',
        
        // Key features section
        'key_features': 'मुख्य विशेषताएँ',
        'no_uploads': 'सर्वर पर कोई अपलोड नहीं',
        'privacy_desc': 'आपकी छवियां निजी रहती हैं। किसी भी सर्वर पर कोई डेटा नहीं भेजा जाता है।',
        'local_processing': 'स्थानीय प्रोसेसिंग',
        'local_desc': 'सभी प्रोसेसिंग आपके ब्राउज़र में स्थानीय रूप से की जाती है।',
        'best_web': 'वेब के लिए सर्वोत्तम',
        'web_desc': 'वेबसाइटों और वेब ऐप्स के लिए पूरी तरह से अनुकूलित छवियां।',
        'removes_metadata': 'मेटाडेटा हटाता है',
        'metadata_desc': 'रूपांतरण करते समय अनावश्यक मेटाडेटा को स्वचालित रूप से हटाता है।',
        'fast_conversion': 'तेज़ रूपांतरण',
        'fast_desc': 'प्रदर्शनकारी और बिजली की गति से रूपांतरण प्रक्रिया।',
        'top_performance': 'शीर्ष प्रदर्शन',
        'performance_desc': 'स्थानीय छवि कन्वर्टर्स के लिए अपनी श्रेणी में सर्वश्रेष्ठ प्रदर्शन।',
        'batch_processing': 'बैच प्रोसेसिंग',
        'batch_desc': 'बल्क प्रोसेसिंग के साथ एक साथ कई छवियों को परिवर्तित करें।',
        'size_reduction': 'आकार में कमी',
        'size_desc': 'गुणवत्ता बनाए रखते हुए फ़ाइल के आकार को काफी कम करता है।',
        
        // Reviews section
        'user_reviews': 'उपयोगकर्ता समीक्षाएँ',
        'review1_name': 'रॉबर्ट थॉम्पसन',
        'review1_text': 'यह छवि कन्वर्टर मेरे फोटोग्राफी व्यवसाय के लिए गेम-चेंजर है। बैच प्रोसेसिंग सुविधा मुझे घंटों का काम बचाती है, और गुणवत्ता नियंत्रण असाधारण है।',
        'review2_name': 'जेनिफर पार्कर',
        'review2_text': 'एक ग्राफिक डिजाइनर के रूप में, मैं इस उपकरण की सटीकता और विश्वसनीयता की सराहना करती हूँ। इंटरफेस सहज है, और रूपांतरण गुणवत्ता लगातार उत्कृष्ट है।',
        'review3_name': 'विलियम चेन',
        'review3_text': 'स्थानीय प्रोसेसिंग सुविधा मुझे संवेदनशील क्लाइंट छवियों को संभालते समय मानसिक शांति देती है। तेज़, सुरक्षित और पेशेवर - बिल्कुल वही जो मुझे चाहिए था।',
        'review4_name': 'एमिली रोड्रिगेज',
        'review4_text': 'मैं अपनी सोशल मीडिया सामग्री के लिए इस उपकरण का दैनिक उपयोग करती हूँ। फ़ाइल के आकार को कम करते हुए छवि गुणवत्ता बनाए रखने की क्षमता मेरे काम के लिए अमूल्य है।',
        'review5_name': 'डैनियल मार्टिनेज',
        'review5_text': 'मेरे वेब विकास प्रोजेक्ट्स के लिए एकदम सही। बैच रूपांतरण सुविधा और प्रारूप लचीलापन इस उपकरण को मेरे कार्यप्रवाह का एक अनिवार्य हिस्सा बनाते हैं।',
        'review6_name': 'सोफी एंडरसन',
        'review6_text': 'इस कन्वर्टर की गति और दक्षता उल्लेखनीय है। यह छवियों के बड़े बैच को निर्बाध रूप से संभालता है, जिससे मेरे डिज़ाइन कार्य में मूल्यवान समय बचता है।',
        
        // FAQ Section
        'faq': 'अक्सर पूछे जाने वाले प्रश्न',
        'faq1_q': 'मैं किन छवि प्रारूपों को WebP में बदल सकता हूँ?',
        'faq1_a': 'यह उपकरण विशेष रूप से JPG/JPEG और PNG छवियों को WebP प्रारूप में बदलने के लिए डिज़ाइन किया गया है। इस समय अन्य प्रारूप समर्थित नहीं हैं।',
        'faq2_q': 'क्या इस उपकरण का उपयोग करते समय मेरा डेटा सुरक्षित है?',
        'faq2_a': 'बिल्कुल! सभी प्रोसेसिंग आपके ब्राउज़र में स्थानीय रूप से की जाती है। आपकी छवियां कभी भी आपके डिवाइस से बाहर नहीं जातीं, और किसी भी सर्वर पर कोई डेटा नहीं भेजा जाता है, जिससे पूर्ण गोपनीयता और सुरक्षा सुनिश्चित होती है।',
        'faq3_q': 'WebP क्या है और मुझे इसका उपयोग क्यों करना चाहिए?',
        'faq3_a': 'WebP Google द्वारा विकसित एक आधुनिक छवि प्रारूप है जो वेब छवियों के लिए बेहतर हानिरहित और हानिपूर्ण संपीड़न प्रदान करता है। WebP छवियां आमतौर पर समान दृश्य गुणवत्ता बनाए रखते हुए तुलनीय JPEG या PNG फ़ाइलों से 25-35% छोटी होती हैं, जिससे वेबसाइट लोडिंग समय तेज़ होता है और बैंडविड्थ उपयोग कम होता है।',
        'faq4_q': 'मुझे कौन सी गुणवत्ता सेटिंग का उपयोग करना चाहिए?',
        'faq4_a': 'अधिकांश वेब उपयोग के लिए, 70-85% के बीच की गुणवत्ता सेटिंग फ़ाइल आकार और छवि गुणवत्ता के बीच सबसे अच्छा संतुलन प्रदान करती है। कम मान (70% से नीचे) छोटी फ़ाइलें उत्पन्न करेंगे लेकिन अधिक संपीड़न आर्टिफैक्ट दिखा सकते हैं। उच्च मान (85% से ऊपर) उच्च गुणवत्ता बनाए रखेंगे लेकिन फ़ाइल आकार में कमी पर घटते रिटर्न के साथ।',
        'faq5_q': 'क्या एक बार में मैं कितनी छवियों को बदल सकता हूँ, इसकी कोई सीमा है?',
        'faq5_a': 'कोई निश्चित सीमा नहीं है, लेकिन प्रदर्शन आपके डिवाइस की क्षमताओं पर निर्भर करता है। इष्टतम प्रदर्शन के लिए, हम एक बार में 20-30 छवियों के बैच को बदलने की सलाह देते हैं। बड़े बैच आपके ब्राउज़र को धीमा कर सकते हैं।',
        'faq6_q': 'क्या WebP छवियां सभी ब्राउज़रों में समर्थित हैं?',
        'faq6_a': 'WebP अब Chrome, Firefox, Edge, Safari और Opera सहित सभी प्रमुख आधुनिक ब्राउज़रों में समर्थित है। हालांकि, पुराने ब्राउज़र संस्करण WebP का समर्थन नहीं कर सकते हैं। वेबसाइटों के लिए, picture तत्व का उपयोग करके फॉलबैक प्रारूप प्रदान करने की सिफारिश की जाती है।',
        
        // Email
        'email': 'ईमेल:'
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
    // Check URL parameters first
    const urlParams = new URLSearchParams(window.location.search);
    let lang = urlParams.get('lang');
    
    // 如果URL中没有指定语言，或者指定的语言不存在，则默认使用英文
    if (!lang || !translations[lang]) {
        // 忽略localStorage和浏览器设置，直接使用英文
        lang = 'en';
    }
    
    // Set the language
    setLanguage(lang);
    
    // 设置初始语言选项的active状态
    document.querySelectorAll('.language-option').forEach(option => {
        if (option.getAttribute('data-lang') === lang) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
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