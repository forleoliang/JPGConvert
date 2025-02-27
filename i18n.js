// 语言配置
const translations = {
    en: {
        title: 'JPG/PNG to WebP Converter',
        dragDropText: 'Drag and drop your image here or',
        browse: 'browse',
        convertTo: 'Convert to:',
        quality: 'Quality:',
        convertButton: 'Convert All',
        clearButton: 'Clear All',
        downloadButton: 'Download',
        features: {
            noUpload: 'No Uploads to Server',
            noUploadDesc: 'Your images stay private. No data is sent to any server.',
            localProcessing: 'Local Processing',
            localProcessingDesc: 'All processing is done locally in your browser.',
            batchProcessing: 'Batch Processing',
            batchProcessingDesc: 'Convert multiple images at once with bulk processing.',
            sizeReduction: 'Size Reduction',
            sizeReductionDesc: 'Significantly reduces file size while maintaining quality.'
        },
        faq: {
            formats: {
                question: 'What image formats can I convert to WebP?',
                answer: 'This tool is specifically designed to convert JPG/JPEG and PNG images to WebP format. Other formats are not supported at this time.'
            },
            security: {
                question: 'Is my data secure when using this tool?',
                answer: 'Absolutely! All processing is done locally in your browser. Your images never leave your device, and no data is sent to any server, ensuring complete privacy and security.'
            },
            webp: {
                question: 'What is WebP and why should I use it?',
                answer: 'WebP is a modern image format developed by Google that provides superior lossless and lossy compression for web images. WebP images are typically 25-35% smaller than comparable JPEG or PNG files while maintaining similar visual quality, resulting in faster website loading times and reduced bandwidth usage.'
            },
            quality: {
                question: 'What quality setting should I use?',
                answer: 'The recommended quality setting is 80%, which provides a good balance between file size reduction and image quality. You can adjust this based on your specific needs - higher values maintain better quality but result in larger files, while lower values provide smaller files but may reduce image quality.'
            }
        }
    },
    zh: {
        title: 'JPG/PNG转WebP转换器',
        dragDropText: '拖拽图片到这里或',
        browse: '浏览',
        convertTo: '转换为：',
        quality: '质量：',
        convertButton: '全部转换',
        clearButton: '清除全部',
        downloadButton: '下载',
        features: {
            noUpload: '无需上传服务器',
            noUploadDesc: '您的图片保持私密。无需向任何服务器发送数据。',
            localProcessing: '本地处理',
            localProcessingDesc: '所有处理都在您的浏览器中完成。',
            batchProcessing: '批量处理',
            batchProcessingDesc: '一次转换多个图片。',
            sizeReduction: '文件大小减小',
            sizeReductionDesc: '在保持图片质量的同时显著减小文件大小。'
        },
        faq: {
            formats: {
                question: '我可以将哪些图片格式转换为WebP？',
                answer: '该工具专门用于将JPG/JPEG和PNG图片转换为WebP格式。目前不支持其他格式。'
            },
            security: {
                question: '使用这个工具时我的数据安全吗？',
                answer: '完全安全！所有处理都在您的浏览器中本地完成。您的图片不会离开您的设备，也不会向任何服务器发送数据，确保完全的隐私和安全。'
            },
            webp: {
                question: '什么是WebP，为什么要使用它？',
                answer: 'WebP是由谷歌开发的现代图片格式，为网络图片提供更优秀的无损和有损压缩。WebP图片通常比同等质量的JPEG或PNG文件小25-35%，同时保持相似的视觉质量，从而实现更快的网站加载速度和更少的带宽使用。'
            },
            quality: {
                question: '我应该使用什么质量设置？',
                answer: '推荐使用80%的质量设置，这可以在文件大小减小和图片质量之间取得良好平衡。您可以根据具体需求调整 - 更高的值保持更好的质量但文件更大，更低的值提供更小的文件但可能降低图片质量。'
            }
        }
    },
    es: {
        title: 'Convertidor de JPG/PNG a WebP',
        dragDropText: 'Arrastra y suelta tu imagen aquí o',
        browse: 'explorar',
        convertTo: 'Convertir a:',
        quality: 'Calidad:',
        convertButton: 'Convertir Todo',
        clearButton: 'Limpiar Todo',
        downloadButton: 'Descargar',
        features: {
            noUpload: 'Sin Subidas al Servidor',
            noUploadDesc: 'Tus imágenes permanecen privadas. No se envían datos a ningún servidor.',
            localProcessing: 'Procesamiento Local',
            localProcessingDesc: 'Todo el procesamiento se realiza localmente en tu navegador.',
            batchProcessing: 'Procesamiento por Lotes',
            batchProcessingDesc: 'Convierte múltiples imágenes a la vez.',
            sizeReduction: 'Reducción de Tamaño',
            sizeReductionDesc: 'Reduce significativamente el tamaño del archivo manteniendo la calidad.'
        },
        faq: {
            formats: {
                question: '¿Qué formatos de imagen puedo convertir a WebP?',
                answer: 'Esta herramienta está diseñada específicamente para convertir imágenes JPG/JPEG y PNG al formato WebP. Otros formatos no son compatibles en este momento.'
            },
            security: {
                question: '¿Están seguros mis datos al usar esta herramienta?',
                answer: '¡Absolutamente! Todo el procesamiento se realiza localmente en tu navegador. Tus imágenes nunca salen de tu dispositivo y no se envían datos a ningún servidor, garantizando total privacidad y seguridad.'
            },
            webp: {
                question: '¿Qué es WebP y por qué debería usarlo?',
                answer: 'WebP es un formato de imagen moderno desarrollado por Google que proporciona una compresión superior sin pérdida y con pérdida para imágenes web. Las imágenes WebP son típicamente 25-35% más pequeñas que los archivos JPEG o PNG comparables mientras mantienen una calidad visual similar, resultando en tiempos de carga más rápidos y menor uso de ancho de banda.'
            },
            quality: {
                question: '¿Qué configuración de calidad debería usar?',
                answer: 'La configuración de calidad recomendada es 80%, que proporciona un buen equilibrio entre reducción de tamaño de archivo y calidad de imagen. Puedes ajustar esto según tus necesidades específicas - valores más altos mantienen mejor calidad pero resultan en archivos más grandes, mientras que valores más bajos proporcionan archivos más pequeños pero pueden reducir la calidad de la imagen.'
            }
        }
    },
    fr: {
        title: 'Convertisseur JPG/PNG vers WebP',
        dragDropText: 'Glissez et déposez votre image ici ou',
        browse: 'parcourir',
        convertTo: 'Convertir en :',
        quality: 'Qualité :',
        convertButton: 'Tout Convertir',
        clearButton: 'Tout Effacer',
        downloadButton: 'Télécharger',
        features: {
            noUpload: 'Pas d\'Upload au Serveur',
            noUploadDesc: 'Vos images restent privées. Aucune donnée n\'est envoyée à un serveur.',
            localProcessing: 'Traitement Local',
            localProcessingDesc: 'Tout le traitement est effectué localement dans votre navigateur.',
            batchProcessing: 'Traitement par Lots',
            batchProcessingDesc: 'Convertissez plusieurs images à la fois.',
            sizeReduction: 'Réduction de Taille',
            sizeReductionDesc: 'Réduit significativement la taille du fichier tout en maintenant la qualité.'
        },
        faq: {
            formats: {
                question: 'Quels formats d\'image puis-je convertir en WebP ?',
                answer: 'Cet outil est spécifiquement conçu pour convertir les images JPG/JPEG et PNG au format WebP. Les autres formats ne sont pas pris en charge pour le moment.'
            },
            security: {
                question: 'Mes données sont-elles sécurisées lors de l\'utilisation de cet outil ?',
                answer: 'Absolument ! Tout le traitement est effectué localement dans votre navigateur. Vos images ne quittent jamais votre appareil et aucune donnée n\'est envoyée à un serveur, assurant une confidentialité et une sécurité totales.'
            },
            webp: {
                question: 'Qu\'est-ce que WebP et pourquoi devrais-je l\'utiliser ?',
                answer: 'WebP est un format d\'image moderne développé par Google qui offre une compression supérieure avec et sans perte pour les images web. Les images WebP sont généralement 25-35% plus petites que les fichiers JPEG ou PNG comparables tout en maintenant une qualité visuelle similaire, résultant en des temps de chargement plus rapides et une utilisation réduite de la bande passante.'
            },
            quality: {
                question: 'Quel paramètre de qualité devrais-je utiliser ?',
                answer: 'Le paramètre de qualité recommandé est de 80%, ce qui offre un bon équilibre entre réduction de la taille du fichier et qualité d\'image. Vous pouvez ajuster cela en fonction de vos besoins spécifiques - des valeurs plus élevées maintiennent une meilleure qualité mais résultent en des fichiers plus volumineux, tandis que des valeurs plus basses fournissent des fichiers plus petits mais peuvent réduire la qualité de l\'image.'
            }
        }
    },
    pt: {
        title: 'Conversor de JPG/PNG para WebP',
        dragDropText: 'Arraste e solte sua imagem aqui ou',
        browse: 'procurar',
        convertTo: 'Converter para:',
        quality: 'Qualidade:',
        convertButton: 'Converter Tudo',
        clearButton: 'Limpar Tudo',
        downloadButton: 'Baixar',
        features: {
            noUpload: 'Sem Upload para Servidor',
            noUploadDesc: 'Suas imagens permanecem privadas. Nenhum dado é enviado para qualquer servidor.',
            localProcessing: 'Processamento Local',
            localProcessingDesc: 'Todo o processamento é feito localmente em seu navegador.',
            batchProcessing: 'Processamento em Lote',
            batchProcessingDesc: 'Converta múltiplas imagens de uma vez.',
            sizeReduction: 'Redução de Tamanho',
            sizeReductionDesc: 'Reduz significativamente o tamanho do arquivo mantendo a qualidade.'
        },
        faq: {
            formats: {
                question: 'Quais formatos de imagem posso converter para WebP?',
                answer: 'Esta ferramenta é especificamente projetada para converter imagens JPG/JPEG e PNG para o formato WebP. Outros formatos não são suportados no momento.'
            },
            security: {
                question: 'Meus dados estão seguros ao usar esta ferramenta?',
                answer: 'Absolutamente! Todo o processamento é feito localmente em seu navegador. Suas imagens nunca saem do seu dispositivo e nenhum dado é enviado para qualquer servidor, garantindo total privacidade e segurança.'
            },
            webp: {
                question: 'O que é WebP e por que devo usá-lo?',
                answer: 'WebP é um formato de imagem moderno desenvolvido pelo Google que fornece compressão superior com e sem perdas para imagens web. As imagens WebP são tipicamente 25-35% menores que arquivos JPEG ou PNG comparáveis mantendo qualidade visual similar, resultando em tempos de carregamento mais rápidos e uso reduzido de banda.'
            },
            quality: {
                question: 'Qual configuração de qualidade devo usar?',
                answer: 'A configuração de qualidade recomendada é 80%, que fornece um bom equilíbrio entre redução de tamanho de arquivo e qualidade de imagem. Você pode ajustar isso com base em suas necessidades específicas - valores mais altos mantêm melhor qualidade mas resultam em arquivos maiores, enquanto valores mais baixos fornecem arquivos menores mas podem reduzir a qualidade da imagem.'
            }
        }
    }
};

// 当前语言
let currentLang = localStorage.getItem('lang') || 'en';

// 初始化语言
function initLanguage() {
    // 设置HTML lang属性
    document.documentElement.lang = currentLang;

    // 更新所有需要翻译的元素
    updateContent();

    // 设置语言按钮状态
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === currentLang) {
            btn.classList.add('active');
        }
    });
}

// 更新页面内容
function updateContent() {
    const t = translations[currentLang];

    // 更新标题
    document.title = t.title;
    const titleElement = document.querySelector('h1');
    if (titleElement) titleElement.textContent = t.title;

    // 更新上传区域文本
    const uploadText = document.querySelector('.upload-content p');
    if (uploadText) {
        uploadText.innerHTML = `${t.dragDropText} <label for="fileInput" class="upload-button">${t.browse}</label>`;
    }

    // 更新转换选项
    const formatLabel = document.querySelector('.format-label');
    const qualityLabel = document.querySelector('.quality-label');
    const qualityValue = document.getElementById('qualityValue');
    const convertButton = document.getElementById('convertButton');

    if (formatLabel) formatLabel.textContent = t.convertTo;
    if (qualityLabel && qualityValue) {
        qualityLabel.textContent = `${t.quality} ${qualityValue.textContent}%`;
    }
    if (convertButton) convertButton.textContent = t.convertButton;

    // 更新功能区文本
    const features = document.querySelectorAll('.feature-card');
    if (features.length > 0) {
        const titles = [t.features.noUpload, t.features.localProcessing, t.features.batchProcessing, t.features.sizeReduction];
        const descriptions = [t.features.noUploadDesc, t.features.localProcessingDesc, t.features.batchProcessingDesc, t.features.sizeReductionDesc];
        
        features.forEach((card, index) => {
            const titleElement = card.querySelector('h3');
            const descElement = card.querySelector('p');
            if (titleElement && index < titles.length) titleElement.textContent = titles[index];
            if (descElement && index < descriptions.length) descElement.textContent = descriptions[index];
        });
    }

    // 更新FAQ文本
    const faqs = {
        'formats': t.faq.formats,
        'security': t.faq.security,
        'webp': t.faq.webp,
        'quality': t.faq.quality
    };

    document.querySelectorAll('.faq-item').forEach((item, index) => {
        const faqKey = Object.keys(faqs)[index];
        if (faqs[faqKey]) {
            const questionElement = item.querySelector('.faq-question');
            const answerElement = item.querySelector('.faq-answer p');
            if (questionElement) questionElement.textContent = faqs[faqKey].question;
            if (answerElement) answerElement.textContent = faqs[faqKey].answer;
        }
    });

    // 更新按钮文本
    const clearButton = document.querySelector('.clear-button');
    const batchDownloadButton = document.querySelector('.batch-download-button');
    
    if (clearButton) clearButton.textContent = t.clearButton;
    if (batchDownloadButton) batchDownloadButton.textContent = t.downloadButton;
}

// 语言切换处理
document.addEventListener('DOMContentLoaded', () => {
    const langMenu = document.getElementById('langMenu');
    const langMenuBtn = document.getElementById('langMenuBtn');

    if (!langMenu || !langMenuBtn) return;

    // 初始化语言
    initLanguage();

    // 语言菜单显示/隐藏
    langMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langMenu.classList.toggle('show');
    });

    // 点击其他地方关闭菜单
    document.addEventListener('click', () => {
        if (langMenu.classList.contains('show')) {
            langMenu.classList.remove('show');
        }
    });

    // 阻止菜单内部点击事件冒泡
    langMenu.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // 语言切换
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const newLang = btn.dataset.lang;
            if (newLang && newLang !== currentLang) {
                currentLang = newLang;
                localStorage.setItem('lang', newLang);
                initLanguage();
            }
            langMenu.classList.remove('show');
        });
    });
});