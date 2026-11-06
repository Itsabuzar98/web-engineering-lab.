import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { getPage } from './page.mjs';

const server = http.createServer(async (req, res) => {

    if (req.url === '/csr') {
        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.end(`
            <html>
            <body>
                <div id="app">Loading...</div>

                <script>
                    document.getElementById('app').innerHTML =
                    '<h1>CSR Demo</h1><p>Rendered by browser JavaScript.</p>';
                </script>
            </body>
            </html>
        `);
    }

    else if (req.url === '/ssr') {
        res.writeHead(200, { 'Content-Type': 'text/html' });

        const html = getPage();

        res.end(html);
    }

    else if (req.url === '/ssg') {
        const html = await readFile('./demo/dist/ssg.html');

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);
    }

    else if (req.url === '/isr') {
        res.writeHead(200, { 'Content-Type': 'text/html' });

        const html = getPage().replace(
            'Static Site Generation',
            'Incremental Static Regeneration'
        );

        res.end(html);
    }

    else if (req.url === '/stream') {
        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.write('<html><body><h1>Streaming SSR</h1>');

        setTimeout(() => {
            res.write('<p>This content arrived in another chunk.</p>');
            res.end('</body></html>');
        }, 2000);
    }

    else {
        res.writeHead(404);
        res.end('Page Not Found');
    }

});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
