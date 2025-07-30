#!/usr/bin/env python3
import http.server
import socketserver
import urllib.parse
import os
from pathlib import Path

class RewriteHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        self._handle_request()
    
    def do_HEAD(self):
        self._handle_request()
        
    def _handle_request(self):
        # URL重写规则
        rewrites = {
            '/jpg2webp': '/jpg2webp.html',
            '/jpg2avif': '/jpg2avif.html', 
            '/jpg2png': '/jpg2png.html',
            '/jpg2tiff': '/jpg2tiff.html',
            '/about': '/about.html'
        }
        
        # 解析URL路径
        parsed_path = urllib.parse.urlparse(self.path)
        path = parsed_path.path
        
        # 检查是否需要重写
        if path in rewrites:
            self.path = rewrites[path]
            if parsed_path.query:
                self.path += '?' + parsed_path.query
            print(f"重写URL: {path} -> {self.path}")
        
        # 调用父类方法处理请求
        if self.command == 'GET':
            super().do_GET()
        elif self.command == 'HEAD':
            super().do_HEAD()

if __name__ == '__main__':
    PORT = 3000
    
    with socketserver.TCPServer(("", PORT), RewriteHTTPRequestHandler) as httpd:
        print(f"Server running at http://localhost:{PORT}")
        print("URL重写规则已启用，可以访问:")
        print(f"- http://localhost:{PORT}/jpg2webp")
        print(f"- http://localhost:{PORT}/jpg2avif")
        print(f"- http://localhost:{PORT}/jpg2png")
        print(f"- http://localhost:{PORT}/jpg2tiff")
        print(f"- http://localhost:{PORT}/about")
        print("\n按 Ctrl+C 停止服务器")
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n服务器已停止")
            httpd.shutdown()