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
        'faq4_a': 'Para la mayoría de los usos web, una configuración de calidad entre 70-85% ofrece el mejor equilibrio entre tamaño de archivo y calidad de imagen. Valores más bajos (por debajo del 70%) producirán archivos más pequeños pero pueden mostrar más artefactos de compresión. Valores más altos (por encima del 85%) mantendrán mayor calidad pero con rendimientos decrecientes en la reducción del tamaño del archivo.',
        'faq5_q': '¿Hay un límite de cuántas imágenes puedo convertir a la vez?',
        'faq5_a': 'No hay un límite fijo, pero el rendimiento depende de las capacidades de tu dispositivo. Para un rendimiento óptimo, recomendamos convertir lotes de 20-30 imágenes a la vez. Lotes más grandes pueden hacer que tu navegador se ralentice.',
        'faq6_q': '¿Las imágenes WebP son compatibles con todos los navegadores?',
        'faq6_a': 'WebP ahora es compatible con todos los principales navegadores modernos incluyendo Chrome, Firefox, Edge, Safari y Opera. Sin embargo, las versiones más antiguas de navegadores podrían no soportar WebP. Para sitios web, se recomienda proporcionar formatos de respaldo usando el elemento picture.',
        
        // Footer
        'email': 'Correo electrónico:',
        
        // About Us Page
        'nav_home': 'Inicio',
        'nav_about': 'Acerca de',
        'about_title': 'Acerca de JPG Convert',
        'about_subtitle': 'Tu herramienta confiable para conversión de imágenes',
        'mission_title': 'Nuestra Misión',
        'mission_text': 'En JPG Convert, nos dedicamos a proporcionar herramientas de conversión de imágenes rápidas, seguras y fáciles de usar. Creemos que la conversión de imágenes de alta calidad debería ser accesible para todos, sin comprometer la privacidad o la seguridad.',
        'story_title': 'Nuestra Historia',
        'story_text': 'JPG Convert nació de la necesidad de una solución de conversión de imágenes simple pero poderosa. Nuestro equipo de desarrolladores y diseñadores se unió para crear una herramienta que prioriza la privacidad del usuario, el rendimiento y la facilidad de uso.',
        'lensclear_title': 'Acerca de LensClear.net',
        'lensclear_text': 'JPG Convert es desarrollado y mantenido por LensClear.net, una empresa de tecnología especializada en herramientas de procesamiento de imágenes y soluciones web. LensClear.net se compromete a crear software innovador que empodere a los usuarios mientras protege su privacidad.',
        'values_title': 'Nuestros Valores',
        'privacy_first': 'Privacidad Primero',
        'privacy_first_desc': 'Todas las conversiones se realizan localmente en tu navegador. Tus imágenes nunca salen de tu dispositivo.',
        'user_friendly': 'Fácil de Usar',
        'user_friendly_desc': 'Interfaz simple e intuitiva que hace que la conversión de imágenes sea accesible para todos.',
        'high_quality': 'Alta Calidad',
        'high_quality_desc': 'Algoritmos de conversión avanzados que mantienen la calidad de imagen mientras optimizan el tamaño del archivo.',
        'open_source': 'Código Abierto',
        'open_source_desc': 'Comprometidos con la transparencia y la mejora continua a través del desarrollo de código abierto.',
        'contact_title': 'Contáctanos',
        'contact_text': 'Tienes preguntas, sugerencias o comentarios? Nos encantaría saber de ti.',
        'footer_home': 'Inicio',
        'footer_about': 'Acerca de',
        'footer_company': 'Empresa',
        'footer_lensclear': 'LensClear.net',
        'footer_rights': 'Todos los derechos reservados.'
    };