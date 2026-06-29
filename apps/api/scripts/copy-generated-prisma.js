import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const source = path.join(projectRoot, 'src', 'generated', 'prisma');
const destination = path.join(projectRoot, 'dist', 'src', 'generated', 'prisma');

if (!fs.existsSync(source)) {
  console.error(`Source Prisma client directory not found: ${source}`);
  process.exit(1);
}

fs.rmSync(destination, { recursive: true, force: true });
fs.mkdirSync(destination, { recursive: true });
fs.cpSync(source, destination, { recursive: true });
console.log(`Copied Prisma client from ${source} to ${destination}`);
