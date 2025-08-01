// hi 语言文件

// 将翻译添加到全局翻译对象
window.translations = window.translations || {};

window.translations['hi'] = {
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
        'user_reviews': 'उपयोगकर्ता प्रमाण',
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
        
        // About Us Page
        'about_nav': 'हमारे बारे में',
        'about_title': 'हमारे बारे में',
        'our_mission': 'हमारा मिशन',
        'mission_content': 'LensClear.net में, हमारा मिशन उपयोगकर्ताओं को शक्तिशाली, सुरक्षित और उपयोग में आसान छवि रूपांतरण उपकरण प्रदान करना है। हम मानते हैं कि उच्च-गुणवत्ता वाली छवि प्रसंस्करण सभी के लिए सुलभ होनी चाहिए, बिना गोपनीयता या सुरक्षा से समझौता किए।',
        'our_story': 'हमारी कहानी',
        'story_content': 'LensClear.net की स्थापना वेब डेवलपर्स और डिजाइनरों की बढ़ती आवश्यकताओं के जवाब में की गई थी जिन्हें तेज़, विश्वसनीय छवि रूपांतरण समाधान की आवश्यकता थी। हमने देखा कि मौजूदा उपकरण या तो धीमे थे, गोपनीयता संबंधी चिंताएं थीं, या आवश्यक सुविधाओं की कमी थी। इसलिए हमने एक बेहतर समाधान बनाने का फैसला किया।',
        'about_lensclear': 'LensClear.net के बारे में',
        'lensclear_content': 'LensClear.net आधुनिक छवि रूपांतरण तकनीक में अग्रणी है। हमारा प्लेटफॉर्म पूरी तरह से ब्राउज़र-आधारित है, जिसका अर्थ है कि आपकी छवियां कभी भी आपके डिवाइस को नहीं छोड़तीं। हम WebP, AVIF, PNG, और TIFF सहित नवीनतम छवि प्रारूपों का समर्थन करते हैं, जो आपको अपनी विशिष्ट आवश्यकताओं के लिए सही प्रारूप चुनने की लचीलापन देता है।',
        'our_values': 'हमारे मूल्य',
        'privacy_title': 'गोपनीयता',
        'privacy_content': 'आपकी छवियां आपकी हैं। हमारी सभी प्रसंस्करण स्थानीय रूप से आपके ब्राउज़र में होती है।',
        'speed_title': 'गति',
        'speed_content': 'हम तेज़ रूपांतरण समय और कुशल बैच प्रसंस्करण के लिए अनुकूलित हैं।',
        'quality_title': 'गुणवत्ता',
        'quality_content': 'हमारे एल्गोरिदम फ़ाइल आकार और छवि गुणवत्ता के बीच सर्वोत्तम संतुलन सुनिश्चित करते हैं।',
        'accessibility_title': 'पहुंच',
        'accessibility_content': 'हमारे उपकरण सभी के लिए डिज़ाइन किए गए हैं, तकनीकी विशेषज्ञता की परवाह किए बिना।',
        'get_in_touch': 'संपर्क में रहें',
        'contact_content': 'क्या आपके कोई प्रश्न हैं या सुझाव हैं? हम आपसे सुनना पसंद करेंगे! हमसे संपर्क करें और हमें बताएं कि हम LensClear.net को और भी बेहतर कैसे बना सकते हैं।',
        
        // Footer
        'footer_about': 'हमारे बारे में',
        'footer_privacy': 'गोपनीयता नीति',
        'footer_terms': 'सेवा की शर्तें',
        'footer_contact': 'संपर्क',
        'footer_support': 'सहायता',
        'footer_blog': 'ब्लॉग',
        'footer_news': 'समाचार',
        'footer_updates': 'अपडेट',
        'footer_social': 'सामाजिक',
        'footer_twitter': 'ट्विटर',
        'footer_facebook': 'फेसबुक',
        'footer_instagram': 'इंस्टाग्राम',
        'footer_linkedin': 'लिंक्डइन',
        'footer_tools': 'उपकरण',
        'footer_jpg_webp': 'JPG से WebP',
        'footer_jpg_avif': 'JPG से AVIF',
        'footer_jpg_png': 'JPG से PNG',
        'footer_jpg_tiff': 'JPG से TIFF',
        'footer_copyright': '© 2024 LensClear.net। सभी अधिकार सुरक्षित।',
        
        // Email
        'email': 'ईमेल:'
    };