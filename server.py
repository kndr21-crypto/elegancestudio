from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import socket
import sys
import os

class FastHandler(SimpleHTTPRequestHandler):
    def address_string(self):
        return self.client_address[0]
        
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, must-revalidate')
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

class DualStackServer(ThreadingHTTPServer):
    address_family = socket.AF_INET6
    def server_bind(self):
        try:
            self.socket.setsockopt(socket.IPPROTO_IPV6, socket.IPV6_V6ONLY, 0)
        except Exception:
            pass
        return super().server_bind()

def run(port=3000):
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    server = DualStackServer(('::', port), FastHandler)
    print(f"[*] Servidor pronto em http://localhost:{port}")
    server.serve_forever()

if __name__ == '__main__':
    p = int(sys.argv[1]) if len(sys.argv) > 1 else 3000
    run(p)
