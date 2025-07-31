// pt 语言文件

// 将翻译添加到全局翻译对象
window.translations = window.translations || {};

window.translations['pt'] = {
        // Header
        'title': 'JPG Converter',
        
        // Upload Area
        'drag_drop': 'Arraste e solte sua imagem aqui ou',
        'browse': 'procurar',
        
        // Controls
        'convert_to': 'Converter para:',
        'quality': 'Qualidade:',
        'convert_all': 'Converter Tudo',
        
        // Conversion Options Section
        'conversion_options': 'Opções de Conversão',
        'jpg_to_webp': 'JPG → WebP',
        'jpg_to_webp_desc': 'Converta imagens JPG para o formato moderno WebP para tamanhos de arquivo menores mantendo a qualidade.',
        'jpg_to_avif': 'JPG → AVIF',
        'jpg_to_avif_desc': 'Use o formato avançado AVIF para melhor taxa de compressão e carregamento mais rápido de sites.',
        'jpg_to_png': 'JPG → PNG',
        'jpg_to_png_desc': 'Converta para formato PNG sem perdas, ideal para imagens que requerem transparência ou alta qualidade.',
        'jpg_to_tiff': 'JPG → TIFF',
        'jpg_to_tiff_desc': 'Converta para o formato profissional TIFF, adequado para impressão, publicação e fluxos de trabalho de edição profissional.',
        
        // Format descriptions
        'webp_desc': 'WebP - Boa compressão, amplo suporte',
        'avif_desc': 'AVIF - Melhor compressão, formato mais novo',
        
        // AVIF specific messages
        'avif_processing': 'Processando AVIF (pode demorar mais)...',
        'avif_not_supported': 'Codificação AVIF não é suportada em seu navegador',
        'using_avif_encoder': 'Usando Squoosh para conversão AVIF...',
        'avif_conversion_failed': 'Falha na conversão AVIF',
        'avif_not_available': 'Codificador AVIF não disponível, tente outro formato',
        
        // Preview Area
        'original': 'Original',
        'converted': 'Convertido',
        
        // Conversion status messages
        'converting': 'Convertendo...',
        'converting_fallback': 'Convertendo com método alternativo...',
        'conversion_failed': 'Falha na conversão',
        'converted_size': 'Convertido ({0} KB)',
        'original_kept': 'Original mantido ({0} KB)',
        'size_info': 'Tamanho: {0} KB',
        'files_skipped': 'Alguns arquivos foram ignorados. Apenas arquivos JPEG e PNG são suportados.',
        
        // Buttons
        'clear_all': 'Limpar Tudo',
        'download': 'Baixar',
        
        // Features Section
        'key_features': 'Principais Recursos',
        'no_uploads': 'Sem Uploads para Servidor',
        'privacy_desc': 'Suas imagens permanecem privadas. Nenhum dado é enviado para qualquer servidor.',
        'local_processing': 'Processamento Local',
        'local_desc': 'Todo o processamento é feito localmente em seu navegador.',
        'best_web': 'Ideal para Web',
        'web_desc': 'Imagens otimizadas perfeitamente adequadas para sites e aplicativos web.',
        'removes_metadata': 'Remove Metadados',
        'metadata_desc': 'Remove automaticamente metadados desnecessários durante a conversão.',
        'fast_conversion': 'Conversão Rápida',
        'fast_desc': 'Processo de conversão eficiente e extremamente rápido.',
        'top_performance': 'Desempenho Superior',
        'performance_desc': 'Melhor desempenho da categoria para conversores de imagem locais.',
        'batch_processing': 'Processamento em Lote',
        'batch_desc': 'Converta várias imagens de uma só vez com processamento em massa.',
        'size_reduction': 'Redução de Tamanho',
        'size_desc': 'Reduz significativamente o tamanho do arquivo mantendo a qualidade.',
        
        // Reviews Section
        'user_reviews': 'Depoimentos dos Usuários',
        'review1_name': 'Roberto Silva',
        'review1_text': 'Este conversor de imagens revolucionou meu negócio de fotografia. O recurso de processamento em lote me economiza horas de trabalho, e o controle de qualidade é excepcional.',
        'review2_name': 'Juliana Parreira',
        'review2_text': 'Como designer gráfica, aprecio a precisão e confiabilidade desta ferramenta. A interface é intuitiva e a qualidade da conversão é consistentemente excelente.',
        'review3_name': 'Wilson Chang',
        'review3_text': 'O recurso de processamento local me dá tranquilidade ao lidar com imagens confidenciais de clientes. Rápido, seguro e profissional - exatamente o que eu precisava.',
        'review4_name': 'Eduarda Rodrigues',
        'review4_text': 'Uso esta ferramenta diariamente para meu conteúdo de mídia social. A capacidade de manter a qualidade da imagem enquanto reduz o tamanho do arquivo é inestimável para meu trabalho.',
        'review5_name': 'Daniel Martins',
        'review5_text': 'Perfeito para meus projetos de desenvolvimento web. O recurso de conversão em lote e a flexibilidade de formato tornam esta ferramenta uma parte essencial do meu fluxo de trabalho.',
        'review6_name': 'Sofia Andrade',
        'review6_text': 'A velocidade e eficiência deste conversor são notáveis. Ele processa grandes lotes de imagens sem problemas, economizando um tempo valioso no meu trabalho de design.',
        
        // FAQ Section
        'faq': 'Perguntas Frequentes',
        'faq1_q': 'Quais formatos de imagem posso converter para WebP?',
        'faq1_a': 'Esta ferramenta foi projetada especificamente para converter imagens JPG/JPEG e PNG para o formato WebP. Outros formatos não são suportados no momento.',
        'faq2_q': 'Meus dados estão seguros ao usar esta ferramenta?',
        'faq2_a': 'Absolutamente! Todo o processamento é feito localmente no seu navegador. Suas imagens nunca saem do seu dispositivo, e nenhum dado é enviado para qualquer servidor, garantindo total privacidade e segurança.',
        'faq3_q': 'O que é WebP e por que devo usá-lo?',
        'faq3_a': 'WebP é um formato de imagem moderno desenvolvido pelo Google que fornece compressão superior com ou sem perdas para imagens web. As imagens WebP são tipicamente 25-35% menores que arquivos JPEG ou PNG comparáveis, mantendo qualidade visual similar, resultando em tempos de carregamento de sites mais rápidos e uso reduzido de largura de banda.',
        'faq4_q': 'Qual configuração de qualidade devo usar?',
        'faq4_a': 'Para a maioria dos usos na web, uma configuração de qualidade entre 70-85% oferece o melhor equilíbrio entre tamanho de arquivo e qualidade de imagem. Valores mais baixos (abaixo de 70%) produzirão arquivos menores, mas podem mostrar mais artefatos de compressão. Valores mais altos (acima de 85%) manterão uma qualidade mais elevada mas com rendimentos decrescentes na redução do tamanho do arquivo.',
        'faq5_q': 'Existe um limite de quantas imagens posso converter de uma vez?',
        'faq5_a': 'Não há um limite fixo, mas o desempenho depende das capacidades do seu dispositivo. Para um desempenho ideal, recomendamos converter lotes de 20-30 imagens por vez. Lotes maiores podem fazer com que seu navegador fique lento.',
        'faq6_q': 'As imagens WebP são suportadas em todos os navegadores?',
        'faq6_a': 'WebP agora é suportado em todos os principais navegadores modernos, incluindo Chrome, Firefox, Edge, Safari e Opera. No entanto, versões mais antigas de navegadores podem não suportar WebP. Para sites web, recomenda-se fornecer formatos alternativos utilizando o elemento picture.',
        
        // About Us Page
        'about_nav': 'Sobre Nós',
        'about_title': 'Sobre Nós',
        'our_mission': 'Nossa Missão',
        'mission_content': 'Na LensClear.net, nossa missão é fornecer aos usuários ferramentas de conversão de imagem poderosas, seguras e fáceis de usar. Acreditamos que o processamento de imagem de alta qualidade deve ser acessível a todos, sem comprometer a privacidade ou segurança.',
        'our_story': 'Nossa História',
        'story_content': 'A LensClear.net foi fundada em resposta às crescentes necessidades de desenvolvedores web e designers que precisavam de soluções de conversão de imagem rápidas e confiáveis. Vimos que as ferramentas existentes eram lentas, tinham problemas de privacidade ou faltavam recursos necessários. Então decidimos construir uma solução melhor.',
        'about_lensclear': 'Sobre a LensClear.net',
        'lensclear_content': 'A LensClear.net é pioneira em tecnologia moderna de conversão de imagem. Nossa plataforma é totalmente baseada em navegador, o que significa que suas imagens nunca saem do seu dispositivo. Suportamos os formatos de imagem mais recentes, incluindo WebP, AVIF, PNG e TIFF, dando-lhe a flexibilidade para escolher o formato certo para suas necessidades específicas.',
        'our_values': 'Nossos Valores',
        'privacy_title': 'Privacidade',
        'privacy_content': 'Suas imagens são suas. Todo nosso processamento é feito localmente no seu navegador.',
        'speed_title': 'Velocidade',
        'speed_content': 'Somos otimizados para tempos de conversão rápidos e processamento em lote eficiente.',
        'quality_title': 'Qualidade',
        'quality_content': 'Nossos algoritmos garantem o melhor equilíbrio entre tamanho de arquivo e qualidade de imagem.',
        'accessibility_title': 'Acessibilidade',
        'accessibility_content': 'Nossas ferramentas são projetadas para todos, independentemente da expertise técnica.',
        'get_in_touch': 'Entre em Contato',
        'contact_content': 'Tem perguntas ou sugestões? Adoraríamos ouvir de você! Entre em contato conosco e nos diga como podemos tornar a LensClear.net ainda melhor.',
        
        // Footer
        'footer_about': 'Sobre Nós',
        'footer_privacy': 'Política de Privacidade',
        'footer_terms': 'Termos de Serviço',
        'footer_contact': 'Contato',
        'footer_support': 'Suporte',
        'footer_blog': 'Blog',
        'footer_news': 'Notícias',
        'footer_updates': 'Atualizações',
        'footer_social': 'Social',
        'footer_twitter': 'Twitter',
        'footer_facebook': 'Facebook',
        'footer_instagram': 'Instagram',
        'footer_linkedin': 'LinkedIn',
        'footer_tools': 'Ferramentas',
        'footer_jpg_webp': 'JPG para WebP',
        'footer_jpg_avif': 'JPG para AVIF',
        'footer_jpg_png': 'JPG para PNG',
        'footer_jpg_tiff': 'JPG para TIFF',
        'footer_copyright': '© 2024 LensClear.net. Todos os direitos reservados.',
        
        // Email
        'email': 'Email:'
    };