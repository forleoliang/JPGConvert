// it 语言文件

// 将翻译添加到全局翻译对象
window.translations = window.translations || {};

window.translations['it'] = {
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
        'webp_desc': 'WebP - Buona compressione, ampio supporto',
        'avif_desc': 'AVIF - Migliore compressione, formato più recente',
        
        // AVIF specific messages
        'avif_processing': 'Elaborazione AVIF (potrebbe richiedere più tempo)...',
        'avif_not_supported': 'Codifica AVIF non supportata nel tuo browser',
        'using_avif_encoder': 'Utilizzo di Squoosh per la conversione AVIF...',
        'avif_conversion_failed': 'Conversione AVIF fallita',
        'avif_not_available': 'Encoder AVIF non disponibile, prova un altro formato',
        
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
        'user_reviews': 'Testimonianze degli Utenti',
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
        'email': 'Email:',
        
        // About Page
        'about_us': 'Chi Siamo',
        'our_mission': 'La Nostra Missione',
        'mission_content': 'Crediamo che l\'elaborazione delle immagini non dovrebbe dipendere da software complessi o flussi di lavoro ingombranti. La nostra missione su JPG Convert è semplice: rendere la conversione e compressione JPG facile, efficiente e sicura per tutti. Che tu stia lavorando su desktop, tablet, dispositivi mobili o integrando i nostri strumenti nel tuo flusso di lavoro, forniamo soluzioni veloci, affidabili e user-friendly.',
        'our_story': 'La Nostra Storia',
        'story_content': 'JPG Convert è lanciato da LensClear.net — una piattaforma indipendente focalizzata sull\'educazione fotografica e recensioni di attrezzature. Dopo anni di creazione di contenuti e interazione con gli utenti, abbiamo compreso i punti dolenti comuni che i fotografi affrontano quando gestiscono immagini JPG: compatibilità dei formati, file troppo grandi, perdita di qualità e altro ancora.',
        'story_content2': 'Per soddisfare le nostre esigenze pratiche di ottimizzazione delle immagini e quelle del nostro pubblico, abbiamo creato JPG Convert — uno strumento costruito con una mentalità "immagine-prima". L\'obiettivo era chiaro fin dall\'inizio: concentrarsi sulla conversione, compressione e ottimizzazione del formato JPG — niente funzioni extra, niente distrazioni.',
        'story_content3': 'Dalla conversione base JPG a WebP e AVIF, alle funzionalità avanzate come compressione lossless, elaborazione batch, rimozione dati Exif e gestione sfondi trasparenti, manteniamo sempre un principio: costruire strumenti di cui i fotografi hanno realmente bisogno, dalla prospettiva di un fotografo.',
        'about_lensclear': 'Informazioni su LensClear.net',
        'lensclear_content': 'LensClear.net è una piattaforma di contenuti indipendente per appassionati di fotografia in tutto il mondo. Si concentra su risorse educative, guide all\'uso delle attrezzature e prospettive originali sulla fotografia. JPG Convert è un\'estensione della nostra filosofia "fotografia + tecnologia" — segnando il nostro primo passo nel mondo degli strumenti di elaborazione immagini.',
        'visit_lensclear': 'Visita LensClear.net →',
        'our_values': 'I Nostri Valori',
        'privacy_title': 'Privacy Prima di Tutto',
        'privacy_content': 'Tutta l\'elaborazione delle immagini avviene localmente nel tuo browser. Le tue immagini non lasciano mai il tuo dispositivo, garantendo completa privacy e sicurezza.',
        'speed_title': 'Velocità Fulminea',
        'speed_content': 'Algoritmi ottimizzati ed elaborazione locale garantiscono conversioni rapide senza necessità di upload o download su server.',
        'quality_title': 'Focalizzato sulla Qualità',
        'quality_content': 'Tecniche di compressione avanzate mantengono la qualità visiva riducendo significativamente le dimensioni dei file per prestazioni web ottimali.',
        'accessibility_title': 'Accesso Universale',
        'accessibility_content': 'Funziona perfettamente su tutti i dispositivi e piattaforme — desktop, tablet e mobile — senza installazione di software.',
        'get_in_touch': 'Contattaci',
        'contact_content': 'Hai domande, suggerimenti o feedback? Ci piacerebbe sentirti. Contattaci per aiutarci a rendere JPG Convert ancora migliore.',
        'footer_navigation': 'Navigazione',
        'footer_operated_by': 'JPG Convert è gestito da LensClear.net',
        'footer_visit_lensclear': 'Visita LensClear.net',
        'footer_privacy_note': 'Rispettiamo la tua privacy. Tutte le conversioni sono elaborate localmente nel tuo browser.',
        'footer_copyright': '© 2025 JPG Convert. Tutti i diritti riservati.'
    };