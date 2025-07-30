// vi 语言文件

// 将翻译添加到全局翻译对象
window.translations = window.translations || {};

window.translations['vi'] = {
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
        
        // User Reviews
        'user_reviews': 'Lời chứng thực của người dùng',
        'review1_name': 'Robert Thompson',
        'review1_text': 'Bộ chuyển đổi hình ảnh này đã thay đổi cuộc chơi cho doanh nghiệp nhiếp ảnh của tôi. Tính năng xử lý hàng loạt giúp tôi tiết kiệm hàng giờ làm việc, và kiểm soát chất lượng thật đặc biệt.',
        'review2_name': 'Jennifer Parker',
        'review2_text': 'Là một nhà thiết kế đồ họa, tôi đánh giá cao độ chính xác và độ tin cậy của công cụ này. Giao diện trực quan và chất lượng chuyển đổi luôn xuất sắc.',
        'review3_name': 'William Chen',
        'review3_text': 'Tính năng xử lý cục bộ mang lại cho tôi sự an tâm khi xử lý hình ảnh nhạy cảm của khách hàng. Nhanh, an toàn và chuyên nghiệp - chính xác những gì tôi cần.',
        'review4_name': 'Emily Rodriguez',
        'review4_text': 'Tôi sử dụng công cụ này hàng ngày cho nội dung mạng xã hội của mình. Khả năng duy trì chất lượng hình ảnh trong khi giảm kích thước tệp là vô giá đối với công việc của tôi.',
        'review5_name': 'Daniel Martinez',
        'review5_text': 'Hoàn hảo cho các dự án phát triển web của tôi. Tính năng chuyển đổi hàng loạt và tính linh hoạt của định dạng làm cho công cụ này trở thành một phần thiết yếu trong quy trình làm việc của tôi.',
        'review6_name': 'Sophie Anderson',
        'review6_text': 'Tốc độ và hiệu quả của bộ chuyển đổi này thật đáng chú ý. Nó xử lý các lô hình ảnh lớn một cách mượt mà, tiết kiệm thời gian quý báu trong công việc thiết kế của tôi.',
        
        // FAQ Section
        'faq': 'Câu hỏi thường gặp',
        'faq1_q': 'Tôi có thể chuyển đổi những định dạng hình ảnh nào sang WebP?',
        'faq1_a': 'Công cụ này được thiết kế đặc biệt để chuyển đổi hình ảnh JPG/JPEG và PNG sang định dạng WebP. Các định dạng khác hiện không được hỗ trợ.',
        'faq2_q': 'Dữ liệu của tôi có an toàn khi sử dụng công cụ này không?',
        'faq2_a': 'Hoàn toàn! Tất cả quá trình xử lý được thực hiện cục bộ trong trình duyệt của bạn. Hình ảnh của bạn không bao giờ rời khỏi thiết bị của bạn và không có dữ liệu nào được gửi đến bất kỳ máy chủ nào, đảm bảo quyền riêng tư và bảo mật hoàn toàn.',
        'faq3_q': 'WebP là gì và tại sao tôi nên sử dụng nó?',
        'faq3_a': 'WebP là một định dạng hình ảnh hiện đại được phát triển bởi Google, cung cấp khả năng nén vượt trội cả có mất mát và không mất mát cho hình ảnh web. Hình ảnh WebP thường nhỏ hơn 25-35% so với các tệp JPEG hoặc PNG tương đương trong khi vẫn duy trì chất lượng hình ảnh tương tự, dẫn đến thời gian tải trang web nhanh hơn và giảm sử dụng băng thông.',
        'faq4_q': 'Tôi nên sử dụng cài đặt chất lượng nào?',
        'faq4_a': 'Đối với hầu hết các mục đích sử dụng web, cài đặt chất lượng từ 70-85% cung cấp sự cân bằng tốt nhất giữa kích thước tệp và chất lượng hình ảnh. Giá trị thấp hơn (dưới 70%) sẽ tạo ra các tệp nhỏ hơn nhưng có thể hiển thị nhiều hiện tượng nén hơn. Giá trị cao hơn (trên 85%) sẽ duy trì chất lượng cao hơn nhưng với lợi ích giảm dần về việc giảm kích thước tệp.',
        'faq5_q': 'Có giới hạn số lượng hình ảnh tôi có thể chuyển đổi cùng một lúc không?',
        'faq5_a': 'Không có giới hạn cố định, nhưng hiệu suất phụ thuộc vào khả năng của thiết bị của bạn. Để có hiệu suất tối ưu, chúng tôi khuyến nghị chuyển đổi từng lô 20-30 hình ảnh một lần. Các lô lớn hơn có thể làm chậm trình duyệt của bạn.',
        'faq6_q': 'Hình ảnh WebP có được hỗ trợ trong tất cả các trình duyệt không?',
        'faq6_a': 'WebP hiện được hỗ trợ trong tất cả các trình duyệt hiện đại chính bao gồm Chrome, Firefox, Edge, Safari và Opera. Tuy nhiên, các phiên bản trình duyệt cũ hơn có thể không hỗ trợ WebP. Đối với các trang web, khuyến nghị cung cấp các định dạng dự phòng bằng cách sử dụng phần tử picture.',
        
        // Reviews section
        'user_reviews': 'Lời chứng thực của người dùng',
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
        
        // About Us page
        'about_us': 'Về chúng tôi',
        'about_title': 'Về chúng tôi',
        'our_mission': 'Sứ mệnh của chúng tôi',
        'mission_text': 'Chúng tôi cam kết cung cấp các công cụ chuyển đổi hình ảnh tốt nhất, nhanh chóng và an toàn. Sứ mệnh của chúng tôi là làm cho việc chuyển đổi hình ảnh trở nên đơn giản, hiệu quả và có thể truy cập được cho mọi người.',
        'our_story': 'Câu chuyện của chúng tôi',
        'story_text': 'Được thành lập với tầm nhìn tạo ra các công cụ web mạnh mẽ và thân thiện với người dùng, chúng tôi đã phát triển nền tảng này để đáp ứng nhu cầu ngày càng tăng về chuyển đổi hình ảnh hiệu quả. Đội ngũ của chúng tôi bao gồm các nhà phát triển và nhà thiết kế có kinh nghiệm, những người hiểu tầm quan trọng của chất lượng, tốc độ và bảo mật.',
        'lensclear_info': 'LensClear.net',
        'lensclear_text': 'Công cụ chuyển đổi JPG này là một phần của bộ sưu tập công cụ hình ảnh toàn diện tại LensClear.net. Chúng tôi chuyên về các giải pháp xử lý hình ảnh tiên tiến giúp các chuyên gia và người dùng thông thường đạt được kết quả tốt nhất.',
        'our_values': 'Giá trị của chúng tôi',
        'privacy_first': 'Quyền riêng tư là ưu tiên hàng đầu',
        'privacy_value': 'Chúng tôi tin rằng hình ảnh của bạn thuộc về bạn. Đó là lý do tại sao tất cả quá trình xử lý diễn ra cục bộ trong trình duyệt của bạn.',
        'quality_excellence': 'Chất lượng xuất sắc',
        'quality_value': 'Chúng tôi không bao giờ thỏa hiệp về chất lượng. Các công cụ của chúng tôi được thiết kế để cung cấp kết quả tốt nhất có thể.',
        'user_experience': 'Trải nghiệm người dùng',
        'ux_value': 'Chúng tôi tin vào việc tạo ra các giao diện trực quan và dễ sử dụng mà bất kỳ ai cũng có thể điều hướng.',
        'innovation': 'Đổi mới',
        'innovation_value': 'Chúng tôi liên tục cập nhật các công cụ của mình với các công nghệ và tính năng mới nhất.',
        'contact_us': 'Liên hệ với chúng tôi',
        'contact_text': 'Có câu hỏi, đề xuất hoặc phản hồi? Chúng tôi rất muốn nghe từ bạn!',
        'email_us': 'Gửi email cho chúng tôi tại',
        'footer_about': 'Về chúng tôi',
        'footer_contact': 'Liên hệ',
        'footer_privacy': 'Quyền riêng tư',
        'footer_terms': 'Điều khoản'
    };