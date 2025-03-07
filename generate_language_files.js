// 脚本用于从languages.js中提取所有语言并生成单独的语言文件
const fs = require('fs');
const path = require('path');

// 读取languages.js文件
const languagesFile = fs.readFileSync('languages.js', 'utf8');

// 支持的语言代码数组
const languageCodes = [
    'en', 'es', 'pt', 'fr', 'de', 'it', 'el', 'zh', 'ja', 'ko', 
    'ru', 'ar', 'nl', 'pl', 'tr', 'th', 'vi', 'id', 'sv', 'hi'
];

// 确保languages目录存在
const languagesDir = path.join(__dirname, 'languages');
if (!fs.existsSync(languagesDir)) {
    fs.mkdirSync(languagesDir);
}

// 为每种语言创建一个索引位置映射
const langPositions = {};

// 查找每种语言在文件中的开始位置
languageCodes.forEach(code => {
    // 查找语言代码定义 'xx': {
    const langPattern = new RegExp(`'${code}'\\s*:\\s*\\{`);
    const match = languagesFile.match(langPattern);
    
    if (match) {
        langPositions[code] = match.index;
    }
});

// 按位置排序语言代码
const sortedCodes = languageCodes.sort((a, b) => langPositions[a] - langPositions[b]);

// 为每种语言提取其内容并创建单独的文件
sortedCodes.forEach((code, index) => {
    const startPos = langPositions[code];
    
    // 查找下一个大括号的结束位置
    let bracketCount = 0;
    let endPos = startPos;
    let foundOpeningBracket = false;
    
    for (let i = startPos; i < languagesFile.length; i++) {
        const char = languagesFile[i];
        
        if (char === '{') {
            bracketCount++;
            foundOpeningBracket = true;
        } else if (char === '}') {
            bracketCount--;
            if (foundOpeningBracket && bracketCount === 0) {
                endPos = i + 1;
                break;
            }
        }
    }
    
    // 提取语言部分
    let content = languagesFile.substring(startPos, endPos);
    
    // 替换开头的 'xx': { 为合适的格式
    content = content.replace(/^\s*'[a-z]{2}'\s*:\s*\{/, `window.translations['${code}'] = {`);
    
    // 创建单独的语言文件
    const languageFileContent = `// ${code} 语言文件

// 将翻译添加到全局翻译对象
window.translations = window.translations || {};

${content};`;
    
    fs.writeFileSync(path.join(languagesDir, `${code}.js`), languageFileContent);
    console.log(`Created language file: ${code}.js`);
});

// 创建languages_main.js文件
const importsCode = sortedCodes.map(code => `import './${code}.js';`).join('\n');

const languagesMainContent = `// 导入所有语言文件
${importsCode}

// 全局翻译对象，将由各个语言文件填充
window.translations = window.translations || {};

// 通用格式化字符串函数
function formatString(str, ...args) {
    return str.replace(/{(\\d+)}/g, function(match, number) { 
        return typeof args[number] != 'undefined' ? args[number] : match;
    });
}

// 设置语言的函数
function setLanguage(language) {
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    elementsToTranslate.forEach(element => {
        const translationKey = element.getAttribute('data-i18n');
        if (window.translations[language] && window.translations[language][translationKey]) {
            if (element.tagName === 'INPUT' && element.type === 'placeholder') {
                element.placeholder = window.translations[language][translationKey];
            } else {
                element.textContent = window.translations[language][translationKey];
            }
        }
    });
    
    // 更新页面标题
    const titleElement = document.querySelector('title');
    if (titleElement && titleElement.getAttribute('data-i18n-head')) {
        const titleKey = titleElement.getAttribute('data-i18n-head');
        if (window.translations[language] && window.translations[language][titleKey]) {
            // 添加 "- macOS Style" 到标题
            let styleText;
            if (language === 'en') {
                styleText = '- macOS Style';
            } else if (language === 'es') {
                styleText = '- Estilo macOS';
            } else if (language === 'pt') {
                styleText = '- Estilo macOS';
            } else if (language === 'fr') {
                styleText = '- Style macOS';
            } else if (language === 'de') {
                styleText = '- macOS-Stil';
            } else if (language === 'it') {
                styleText = '- Stile macOS';
            } else if (language === 'el') {
                styleText = '- Στυλ macOS';
            } else if (language === 'zh') {
                styleText = '- macOS风格';
            } else if (language === 'ja') {
                styleText = '- macOSスタイル';
            } else if (language === 'ko') {
                styleText = '- macOS 스타일';
            } else if (language === 'ru') {
                styleText = '- Стиль macOS';
            } else if (language === 'ar') {
                styleText = '- نمط macOS';
            } else if (language === 'nl') {
                styleText = '- macOS-stijl';
            } else if (language === 'pl') {
                styleText = '- Styl macOS';
            } else if (language === 'tr') {
                styleText = '- macOS Tarzı';
            } else if (language === 'th') {
                styleText = '- สไตล์ macOS';
            } else if (language === 'vi') {
                styleText = '- Phong cách macOS';
            } else if (language === 'id') {
                styleText = '- Gaya macOS';
            } else if (language === 'sv') {
                styleText = '- macOS-stil';
            } else if (language === 'hi') {
                styleText = '- macOS शैली';
            }
            titleElement.textContent = \`\${window.translations[language][titleKey]} \${styleText}\`;
        }
    }
    
    // 更新 meta description 标签
    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) {
        const langDesc = document.querySelector(\`meta[name="description:\${language}"]\`);
        if (langDesc) {
            descTag.setAttribute('content', langDesc.getAttribute('content'));
        }
    }
    
    // 更新动态创建的元素
    updateDynamicTranslations(language);
    
    // 更新SEO友好的alternate链接
    updateAlternateLinks(language);
    
    // 保存用户语言选择
    localStorage.setItem('preferred_language', language);
    
    // 更新文档的lang属性
    document.documentElement.lang = language;
    
    // 更新RTL布局
    if (language === 'ar') {
        document.documentElement.dir = 'rtl';
        document.body.classList.add('rtl');
    } else {
        document.documentElement.dir = 'ltr';
        document.body.classList.remove('rtl');
    }
}

// 更新动态创建的转换状态文本
function updateDynamicTranslations(language) {
    // 更新动态创建的元素的文本
    if (window.translations && window.translations[language]) {
        // 清除按钮
        const clearButton = document.querySelector('.clear-button');
        if (clearButton) {
            clearButton.textContent = window.translations[language].clear_all;
        }
        
        // 下载按钮
        const batchDownloadButton = document.querySelector('.batch-download-button');
        if (batchDownloadButton) {
            batchDownloadButton.textContent = window.translations[language].download;
        }
        
        // 转换状态文本
        document.querySelectorAll('.file-status').forEach(status => {
            const text = status.textContent;
            const loadingSpinner = status.querySelector('.loading-spinner');
            
            if (text.includes('Converting...') || text.includes('Convirtiendo...')) {
                status.innerHTML = '';
                if (loadingSpinner) status.appendChild(loadingSpinner);
                status.appendChild(document.createTextNode(window.translations[language].converting));
            } 
            else if (text.includes('Converting with fallback') || text.includes('Convirtiendo con método')) {
                status.innerHTML = '';
                if (loadingSpinner) status.appendChild(loadingSpinner);
                status.appendChild(document.createTextNode(window.translations[language].converting_fallback));
            }
            else if (text.includes('Conversion failed') || text.includes('Conversión fallida')) {
                status.textContent = window.translations[language].conversion_failed;
            }
            else if (text.match(/Converted \\([\\d.]+ KB\\)/) || text.match(/Convertido \\([\\d.]+ KB\\)/)) {
                const size = text.match(/\\(([\\d.]+) KB\\)/);
                if (size) {
                    status.textContent = formatString(window.translations[language].converted_size, size[1]);
                }
            }
        });
        
        // 图片信息
        document.querySelectorAll('.image-info').forEach(info => {
            const text = info.textContent;
            const size = text.match(/Size: ([\\d.]+) KB/) || text.match(/Tamaño: ([\\d.]+) KB/);
            if (size) {
                info.textContent = formatString(window.translations[language].size_info, size[1]);
            }
        });
    }
}

// 更新SEO友好的alternate链接
function updateAlternateLinks(currentLang) {
    // 移除现有的alternate链接
    const existingLinks = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingLinks.forEach(link => link.remove());
    
    // 添加新的alternate链接
    const languages = Object.keys(window.translations);
    const head = document.querySelector('head');
    
    // 添加x-default链接
    const defaultLink = document.createElement('link');
    defaultLink.rel = 'alternate';
    defaultLink.hreflang = 'x-default';
    const defaultUrl = new URL(window.location.href);
    defaultUrl.search = '';
    defaultLink.href = defaultUrl.toString();
    head.appendChild(defaultLink);
    
    languages.forEach(lang => {
        const link = document.createElement('link');
        link.rel = 'alternate';
        link.hreflang = lang;
        // 创建带有语言参数的URL
        const url = new URL(window.location.href);
        url.searchParams.set('lang', lang);
        link.href = url.toString();
        head.appendChild(link);
    });
}

// 根据URL参数、localStorage或浏览器设置初始化语言
function initializeLanguage() {
    // 首先检查URL参数
    const urlParams = new URLSearchParams(window.location.search);
    let lang = urlParams.get('lang');
    
    // 如果URL中没有指定语言，或者指定的语言不存在
    if (!lang || !window.translations[lang]) {
        // 忽略localStorage和浏览器设置，直接使用英文
        lang = 'en';
    }
    
    // 设置语言
    setLanguage(lang);
    
    // 设置初始语言选项的active状态
    document.querySelectorAll('.language-option').forEach(option => {
        if (option.getAttribute('data-lang') === lang) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

// 获取翻译的工具函数，供其他脚本使用
window.getTranslation = function(key) {
    const currentLang = document.documentElement.lang || 'en';
    if (window.translations[currentLang] && window.translations[currentLang][key]) {
        return window.translations[currentLang][key];
    }
    // 如果当前语言没有该翻译，回退到英文
    if (window.translations['en'] && window.translations['en'][key]) {
        return window.translations['en'][key];
    }
    // 如果没有找到翻译，返回键名
    return key;
};

// 语言选择器事件监听器
document.addEventListener('DOMContentLoaded', function() {
    const languageSelector = document.getElementById('language-selector');
    if (languageSelector) {
        languageSelector.addEventListener('change', function() {
            setLanguage(this.value);
        });
    }
    
    // 初始化语言
    initializeLanguage();
    
    // 修补window.alert，支持多语言
    if (window.alert) {
        const originalAlert = window.alert;
        window.alert = function(message) {
            const currentLang = document.documentElement.lang || 'en';
            
            if (message === 'Some files were skipped. Only JPEG and PNG files are supported.' ||
                message === 'Se omitieron algunos archivos. Solo se admiten archivos JPEG y PNG.') {
                originalAlert(window.translations[currentLang].files_skipped);
            } else {
                originalAlert(message);
            }
        };
    }
});

// 导出函数供其他模块使用
export { setLanguage, formatString, updateDynamicTranslations, initializeLanguage };`;

fs.writeFileSync(path.join(languagesDir, 'languages_main.js'), languagesMainContent);
console.log('Created languages_main.js file');

console.log('All language files have been generated successfully!'); 