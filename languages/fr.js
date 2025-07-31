// fr 语言文件

// 将翻译添加到全局翻译对象
window.translations = window.translations || {};

window.translations['fr'] = {
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
        'webp_desc': 'WebP - Bonne compression, support étendu',
        'avif_desc': 'AVIF - Meilleure compression, format plus récent',
        
        // AVIF specific messages
        'avif_processing': 'Traitement AVIF (peut prendre plus de temps)...',
        'avif_not_supported': 'L\'encodage AVIF n\'est pas pris en charge par votre navigateur',
        'using_avif_encoder': 'Utilisation de Squoosh pour la conversion AVIF...',
        'avif_conversion_failed': 'Échec de la conversion AVIF',
        'avif_not_available': 'Encodeur AVIF non disponible, essayez un autre format',
        
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
        
        // Testimonials Section
        'user_reviews': 'Témoignages des Utilisateurs',
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
        'email': 'Email:',
        
        // About Us Page
        'nav_home': 'Accueil',
        'nav_about': 'À propos',
        'about_title': 'À propos de JPG Convert',
        'about_subtitle': 'Votre outil fiable pour la conversion d\'images',
        'mission_title': 'Notre Mission',
        'mission_text': 'Chez JPG Convert, nous nous consacrons à fournir des outils de conversion d\'images rapides, sécurisés et faciles à utiliser. Nous croyons que la conversion d\'images de haute qualité devrait être accessible à tous, sans compromettre la confidentialité ou la sécurité.',
        'story_title': 'Notre Histoire',
        'story_text': 'JPG Convert est né du besoin d\'une solution de conversion d\'images simple mais puissante. Notre équipe de développeurs et de designers s\'est unie pour créer un outil qui priorise la confidentialité des utilisateurs, les performances et la facilité d\'utilisation.',
        'lensclear_title': 'À propos de LensClear.net',
        'lensclear_text': 'JPG Convert est développé et maintenu par LensClear.net, une entreprise technologique spécialisée dans les outils de traitement d\'images et les solutions web. LensClear.net s\'engage à créer des logiciels innovants qui autonomisent les utilisateurs tout en protégeant leur confidentialité.',
        'values_title': 'Nos Valeurs',
        'privacy_first': 'Confidentialité d\'abord',
        'privacy_first_desc': 'Toutes les conversions sont effectuées localement dans votre navigateur. Vos images ne quittent jamais votre appareil.',
        'user_friendly': 'Facile à utiliser',
        'user_friendly_desc': 'Interface simple et intuitive qui rend la conversion d\'images accessible à tous.',
        'high_quality': 'Haute Qualité',
        'high_quality_desc': 'Algorithmes de conversion avancés qui maintiennent la qualité d\'image tout en optimisant la taille du fichier.',
        'open_source': 'Open Source',
        'open_source_desc': 'Engagés dans la transparence et l\'amélioration continue grâce au développement open source.',
        'contact_title': 'Contactez-nous',
        'contact_text': 'Vous avez des questions, suggestions ou commentaires? Nous aimerions avoir de vos nouvelles.',
        'footer_home': 'Accueil',
        'footer_about': 'À propos',
        'footer_company': 'Entreprise',
        'footer_lensclear': 'LensClear.net',
        'footer_rights': 'Tous droits réservés.'
    };