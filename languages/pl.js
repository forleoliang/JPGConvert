// pl 语言文件

// 将翻译添加到全局翻译对象
window.translations = window.translations || {};

window.translations['pl'] = {
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
        'user_reviews': 'Świadectwa użytkowników',
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
        'email': 'E-mail:',
        
        // About Page
        'nav_home': 'Strona główna',
        'nav_about': 'O nas',
        'about_title': 'O JPG Convert',
        'about_subtitle': 'Twoje niezawodne narzędzie do konwersji obrazów',
        'mission_title': 'Nasza Misja',
        'mission_text': 'W JPG Convert dedykujemy się dostarczaniu szybkich, bezpiecznych i łatwych w użyciu narzędzi do konwersji obrazów. Wierzymy, że wysokiej jakości konwersja obrazów powinna być dostępna dla wszystkich, bez kompromisów w zakresie prywatności czy bezpieczeństwa.',
        'story_title': 'Nasza Historia',
        'story_text': 'JPG Convert powstał z potrzeby prostego, ale potężnego rozwiązania do konwersji obrazów. Nasz zespół programistów i projektantów połączył siły, aby stworzyć narzędzie, które priorytetowo traktuje prywatność użytkowników, wydajność i łatwość użytkowania.',
        'lensclear_title': 'O LensClear.net',
        'lensclear_text': 'JPG Convert jest rozwijany i utrzymywany przez LensClear.net, firmę technologiczną specjalizującą się w narzędziach do przetwarzania obrazów i rozwiązaniach webowych. LensClear.net zobowiązuje się do tworzenia innowacyjnego oprogramowania, które wzmacnia użytkowników, jednocześnie chroniąc ich prywatność.',
        'values_title': 'Nasze Wartości',
        'privacy_first': 'Prywatność przede wszystkim',
        'privacy_first_desc': 'Wszystkie konwersje są wykonywane lokalnie w Twojej przeglądarce. Twoje obrazy nigdy nie opuszczają Twojego urządzenia.',
        'user_friendly': 'Przyjazny użytkownikowi',
        'user_friendly_desc': 'Prosty i intuicyjny interfejs, który sprawia, że konwersja obrazów jest dostępna dla wszystkich.',
        'high_quality': 'Wysoka jakość',
        'high_quality_desc': 'Zaawansowane algorytmy konwersji, które zachowują jakość obrazu przy jednoczesnej optymalizacji rozmiaru pliku.',
        'open_source': 'Open Source',
        'open_source_desc': 'Zobowiązani do przejrzystości i ciągłego doskonalenia poprzez rozwój open source.',
        'contact_title': 'Skontaktuj się z nami',
        'contact_text': 'Masz pytania, sugestie lub uwagi? Chcielibyśmy Cię usłyszeć.',
        'footer_home': 'Strona główna',
        'footer_about': 'O nas',
        'footer_company': 'Firma',
        'footer_lensclear': 'LensClear.net',
        'footer_rights': 'Wszystkie prawa zastrzeżone.'
    };