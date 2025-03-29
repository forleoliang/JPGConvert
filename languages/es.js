// es 语言文件

// 将翻译添加到全局翻译对象
window.translations = window.translations || {};

window.translations['es'] = {
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
        'user_reviews': 'Testimonios de Usuarios',
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
    };