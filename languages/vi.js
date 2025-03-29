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
    };