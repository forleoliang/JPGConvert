// ja 语言文件

// 将翻译添加到全局翻译对象
window.translations = window.translations || {};

window.translations['ja'] = {
        // Header
        'title': 'JPG 変換ツール',
        
        // Upload Area
        'drag_drop': '画像をここにドラッグ＆ドロップするか',
        'browse': '参照',
        
        // Controls
        'convert_to': '変換形式:',
        'quality': '品質:',
        'convert_all': 'すべて変換',
        
        // Conversion Options Section
        'conversion_options': '変換オプション',
        'jpg_to_webp': 'JPG → WebP',
        'jpg_to_webp_desc': 'JPG画像を最新のWebP形式に変換し、品質を維持しながらファイルサイズを削減します。',
        'jpg_to_avif': 'JPG → AVIF',
        'jpg_to_avif_desc': '最高の圧縮率と高速なウェブサイト読み込みのために先進的なAVIF形式を使用します。',
        'jpg_to_png': 'JPG → PNG',
        'jpg_to_png_desc': '透明度や高品質が必要な画像に最適な可逆圧縮PNG形式に変換します。',
        'jpg_to_tiff': 'JPG → TIFF',
        'jpg_to_tiff_desc': '印刷、出版、プロフェッショナルな編集ワークフローに適したプロ仕様のTIFF形式に変換します。',
        
        // Format descriptions
        'webp_desc': 'WebP - 良好な圧縮率、幅広いサポート',
        'avif_desc': 'AVIF - 最高の圧縮率、より新しい形式',
        
        // AVIF specific messages
        'avif_processing': 'AVIF処理中（時間がかかる場合があります）...',
        'avif_not_supported': 'お使いのブラウザではAVIFエンコーディングがサポートされていません',
        'using_avif_encoder': 'AVIF変換にSquooshを使用しています...',
        'avif_conversion_failed': 'AVIF変換に失敗しました',
        'avif_not_available': 'AVIFエンコーダーが利用できません、他の形式をお試しください',
        
        // Preview Area
        'original': 'オリジナル',
        'converted': '変換後',
        
        // Conversion status messages
        'converting': '変換中...',
        'converting_fallback': 'フォールバックで変換中...',
        'conversion_failed': '変換失敗',
        'converted_size': '変換済 ({0} KB)',
        'original_kept': '元画像を保持 ({0} KB)',
        'size_info': 'サイズ: {0} KB',
        'files_skipped': '一部のファイルはスキップされました。JPEGとPNGファイルのみサポートされています。',
        
        // Buttons
        'clear_all': 'すべてクリア',
        'download': 'ダウンロード',
        'download_all': 'すべてダウンロード',
        
        // Features Section
        'key_features': '主な機能',
        'no_uploads': 'サーバーにアップロードなし',
        'privacy_desc': '画像はプライベートに保たれます。データはサーバーに送信されません。',
        'local_processing': 'ローカル処理',
        'local_desc': 'すべての処理はブラウザ内で行われます。',
        'best_web': 'ウェブに最適',
        'web_desc': 'ウェブサイトやウェブアプリに最適化された画像。',
        'removes_metadata': 'メタデータを削除',
        'metadata_desc': '変換中に不要なメタデータを自動的に削除します。',
        'fast_conversion': '高速変換',
        'fast_desc': '高性能で超高速の変換プロセス。',
        'top_performance': 'トップパフォーマンス',
        'performance_desc': 'ローカル画像コンバーターとして最高のパフォーマンス。',
        'batch_processing': 'バッチ処理',
        'batch_desc': '一括処理で複数の画像を一度に変換。',
        'size_reduction': 'サイズ削減',
        'size_desc': '品質を維持しながらファイルサイズを大幅に削減。',
        
        // Reviews Section
        'user_reviews': 'ユーザー証言',
        'review1_name': 'ロバート・トンプソン',
        'review1_text': 'この画像変換ツールは私の写真ビジネスにとって革新的です。バッチ処理機能で何時間もの作業時間を節約でき、品質管理も優れています。',
        'review2_name': 'ジェニファー・パーカー',
        'review2_text': 'グラフィックデザイナーとして、このツールの精度と信頼性に感謝しています。インターフェースは直感的で、変換品質は常に優れています。',
        'review3_name': 'ウィリアム・チェン',
        'review3_text': 'ローカル処理機能により、クライアントの機密画像を扱う際に安心感があります。高速、安全、プロフェッショナル - まさに私が必要としていたものです。',
        'review4_name': 'エミリー・ロドリゲス',
        'review4_text': 'ソーシャルメディアのコンテンツ用に毎日このツールを使用しています。ファイルサイズを削減しながら画像品質を維持する機能は、私の仕事に非常に価値があります。',
        'review5_name': 'ダニエル・マルティネス',
        'review5_text': 'ウェブ開発プロジェクトに最適です。バッチ変換機能とフォーマットの柔軟性により、このツールは私のワークフローに欠かせないものになっています。',
        'review6_name': 'ソフィー・アンダーソン',
        'review6_text': 'このコンバーターの速度と効率性は素晴らしいです。大量の画像をシームレスに処理し、デザイン作業において貴重な時間を節約できます。',
        
        // FAQ Section
        'faq': 'よくある質問',
        'faq1_q': 'どの画像形式をWebPに変換できますか？',
        'faq1_a': 'このツールは特にJPG/JPEGおよびPNG画像をWebP形式に変換するように設計されています。現時点では他の形式はサポートされていません。',
        'faq2_q': 'このツールを使用する際、データは安全ですか？',
        'faq2_a': '絶対に安全です！すべての処理はブラウザ内でローカルに行われます。画像はデバイスから出ることはなく、データはサーバーに送信されないため、完全なプライバシーとセキュリティが確保されます。',
        'faq3_q': 'WebPとは何ですか？なぜ使用すべきですか？',
        'faq3_a': 'WebPはGoogleによって開発された最新の画像形式で、ウェブ画像に優れた可逆圧縮と非可逆圧縮を提供します。WebP画像は通常、同等の視覚品質を維持しながらJPEGやPNGファイルよりも25〜35％小さくなり、ウェブサイトの読み込み時間の短縮と帯域幅使用量の削減につながります。',
        'faq4_q': 'どの品質設定を使用すべきですか？',
        'faq4_a': 'ほとんどのウェブ使用では、70〜85％の品質設定がファイルサイズと画像品質のバランスが最も良いです。低い値（70％未満）ではファイルが小さくなりますが、圧縮アーティファクトが目立つ場合があります。高い値（85％以上）では高い品質が維持されますが、ファイルサイズの削減効果は徐々に小さくなります。',
        'faq5_q': '一度に変換できる画像数に制限はありますか？',
        'faq5_a': '固定の制限はありませんが、パフォーマンスはお使いのデバイスの性能に依存します。最適なパフォーマンスのために、一度に20〜30枚の画像のバッチ変換をお勧めします。それ以上の大きなバッチではブラウザの動作が遅くなる場合があります。',
        'faq6_q': 'WebP画像はすべてのブラウザでサポートされていますか？',
        'faq6_a': 'WebPは現在、Chrome、Firefox、Edge、Safari、Operaなどのすべての主要な最新ブラウザでサポートされています。ただし、古いバージョンのブラウザではWebPをサポートしていない場合があります。ウェブサイトでは、pictureエレメントを使用してフォールバック形式を提供することをお勧めします。',
        
        // About Us Page
        'about_nav': '私たちについて',
        'about_title': '私たちについて',
        'our_mission': '私たちのミッション',
        'mission_content': 'LensClear.netでは、ユーザーに強力で安全、使いやすい画像変換ツールを提供することが私たちのミッションです。高品質な画像処理は、プライバシーやセキュリティを犠牲にすることなく、すべての人がアクセスできるべきだと信じています。',
        'our_story': '私たちのストーリー',
        'story_content': 'LensClear.netは、高速で信頼性の高い画像変換ソリューションを必要とするウェブ開発者やデザイナーの増大するニーズに応えて設立されました。既存のツールは遅い、プライバシーの問題がある、または必要な機能が不足していることがわかりました。そこで、より良いソリューションを構築することにしました。',
        'about_lensclear': 'LensClear.netについて',
        'lensclear_content': 'LensClear.netは現代的な画像変換技術のパイオニアです。私たちのプラットフォームは完全にブラウザベースで、画像がデバイスから出ることはありません。WebP、AVIF、PNG、TIFFなどの最新の画像形式をサポートし、特定のニーズに適した形式を選択する柔軟性を提供します。',
        'our_values': '私たちの価値観',
        'privacy_title': 'プライバシー',
        'privacy_content': 'あなたの画像はあなたのものです。すべての処理はブラウザ内でローカルに行われます。',
        'speed_title': 'スピード',
        'speed_content': '高速な変換時間と効率的なバッチ処理のために最適化されています。',
        'quality_title': '品質',
        'quality_content': '私たちのアルゴリズムは、ファイルサイズと画像品質の最適なバランスを保証します。',
        'accessibility_title': 'アクセシビリティ',
        'accessibility_content': '私たちのツールは、技術的専門知識に関係なく、すべての人のために設計されています。',
        'get_in_touch': 'お問い合わせ',
        'contact_content': 'ご質問やご提案はありますか？ぜひお聞かせください！お問い合わせいただき、LensClear.netをより良くする方法をお教えください。',
        
        // Footer
        'footer_about': '私たちについて',
        'footer_privacy': 'プライバシーポリシー',
        'footer_terms': '利用規約',
        'footer_contact': 'お問い合わせ',
        'footer_support': 'サポート',
        'footer_blog': 'ブログ',
        'footer_news': 'ニュース',
        'footer_updates': 'アップデート',
        'footer_social': 'ソーシャル',
        'footer_twitter': 'Twitter',
        'footer_facebook': 'Facebook',
        'footer_instagram': 'Instagram',
        'footer_linkedin': 'LinkedIn',
        'footer_tools': 'ツール',
        'footer_jpg_webp': 'JPGからWebP',
        'footer_jpg_avif': 'JPGからAVIF',
        'footer_jpg_png': 'JPGからPNG',
        'footer_jpg_tiff': 'JPGからTIFF',
        'footer_copyright': '© 2024 LensClear.net. 全著作権所有。',
        
        // Email
        'email': 'メール:'
    };