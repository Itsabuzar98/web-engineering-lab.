import { getPage } from './page.mjs';
import { writeFile, mkdir } from 'node:fs/promises';

await mkdir('./demo/dist', { recursive: true });

const html = getPage();

await writeFile('./demo/dist/ssg.html', html);

console.log('SSG page generated successfully!');
