// th 语言文件

// 将翻译添加到全局翻译对象
window.translations = window.translations || {};

window.translations['th'] = {
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
        'user_reviews': 'คำรับรองจากผู้ใช้',
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
    };