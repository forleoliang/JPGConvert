// sv 语言文件

// 将翻译添加到全局翻译对象
window.translations = window.translations || {};

window.translations['sv'] = {
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
        'user_reviews': 'Användarintyg',
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
        
        // About Us Page
        'about_nav': 'Om oss',
        'about_title': 'Om oss',
        'our_mission': 'Vårt uppdrag',
        'mission_content': 'På LensClear.net är vårt uppdrag att förse användare med kraftfulla, säkra och lättanvända bildkonverteringsverktyg. Vi tror att högkvalitativ bildbehandling ska vara tillgänglig för alla utan att kompromissa med integritet eller säkerhet.',
        'our_story': 'Vår historia',
        'story_content': 'LensClear.net grundades som svar på de växande behoven hos webbutvecklare och designers som behövde snabba och pålitliga bildkonverteringslösningar. Vi såg att befintliga verktyg var långsamma, hade integritetsproblem eller saknade nödvändiga funktioner. Så vi bestämde oss för att bygga en bättre lösning.',
        'about_lensclear': 'Om LensClear.net',
        'lensclear_content': 'LensClear.net är pionjär inom modern bildkonverteringsteknik. Vår plattform är helt webbläsarbaserad, vilket betyder att dina bilder aldrig lämnar din enhet. Vi stöder de senaste bildformaten inklusive WebP, AVIF, PNG och TIFF, vilket ger dig flexibiliteten att välja rätt format för dina specifika behov.',
        'our_values': 'Våra värderingar',
        'privacy_title': 'Integritet',
        'privacy_content': 'Dina bilder är dina. All vår bearbetning görs lokalt i din webbläsare.',
        'speed_title': 'Hastighet',
        'speed_content': 'Vi är optimerade för snabba konverteringstider och effektiv batchbearbetning.',
        'quality_title': 'Kvalitet',
        'quality_content': 'Våra algoritmer säkerställer den bästa balansen mellan filstorlek och bildkvalitet.',
        'accessibility_title': 'Tillgänglighet',
        'accessibility_content': 'Våra verktyg är designade för alla, oavsett teknisk expertis.',
        'get_in_touch': 'Kontakta oss',
        'contact_content': 'Har du frågor eller förslag? Vi skulle älska att höra från dig! Kontakta oss och berätta hur vi kan göra LensClear.net ännu bättre.',
        
        // Footer
        'footer_about': 'Om oss',
        'footer_privacy': 'Integritetspolicy',
        'footer_terms': 'Användarvillkor',
        'footer_contact': 'Kontakt',
        'footer_support': 'Support',
        'footer_blog': 'Blogg',
        'footer_news': 'Nyheter',
        'footer_updates': 'Uppdateringar',
        'footer_social': 'Sociala medier',
        'footer_twitter': 'Twitter',
        'footer_facebook': 'Facebook',
        'footer_instagram': 'Instagram',
        'footer_linkedin': 'LinkedIn',
        'footer_tools': 'Verktyg',
        'footer_jpg_webp': 'JPG till WebP',
        'footer_jpg_avif': 'JPG till AVIF',
        'footer_jpg_png': 'JPG till PNG',
        'footer_jpg_tiff': 'JPG till TIFF',
        'footer_copyright': '© 2024 LensClear.net. Alla rättigheter förbehållna.',
        
        // Email
        'email': 'E-post:'
    };