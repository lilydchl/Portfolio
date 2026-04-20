import type { Picture } from './picture';

const modules = import.meta.glob<Picture>(
  '../assets/{projects,categories,shakes,igloo-projects}/**/*.{png,jpg,jpeg}',
  { eager: true, query: '?w=256;512;1024&format=avif;webp;png&as=picture', import: 'default' },
);

const map: Record<string, Picture> = {};
for (const [key, value] of Object.entries(modules)) {
  const normalized = key.replace(/^\.\.\/assets\//, '');
  map[normalized] = value;
}

export function getCover(assetPath: string | undefined): Picture | undefined {
  if (!assetPath) return undefined;
  return map[assetPath];
}
