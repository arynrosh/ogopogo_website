// scripts/broadcast-latest.ts
// Usage:
//  BROADCAST_KEY=... node -r ts-node/register scripts/broadcast-latest.ts
//  BROADCAST_KEY=... node -r ts-node/register scripts/broadcast-latest.ts --id 4
//  BROADCAST_KEY=... BROADCAST_FORCE=1 node -r ts-node/register scripts/broadcast-latest.ts
//  (GitHub Actions sets BROADCAST_KEY via secrets)

import { blogPosts } from '../src/data/blogs';

// --- config from env ---------------------------------------------------
const key = process.env.BROADCAST_KEY;
if (!key) {
  console.error('Missing BROADCAST_KEY env');
  process.exit(1);
}

// --- CLI/env helpers ---------------------------------------------------
const args = process.argv.slice(2);
const hasFlag = (f: string) => args.includes(f);
const getArgVal = (name: string) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : undefined;
};

const force =
  hasFlag('--force') ||
  process.env.BROADCAST_FORCE === '1' ||
  process.env.BROADCAST_FORCE === 'true';

const explicitIdStr = getArgVal('--id') ?? process.env.BROADCAST_POST_ID;
const explicitId = explicitIdStr ? Number(explicitIdStr) : undefined;
if (explicitIdStr && Number.isNaN(explicitId)) {
  console.error('Invalid --id / BROADCAST_POST_ID (must be a number)');
  process.exit(1);
}

// --- pick post: by id or latest ---------------------------------------
const pickLatest = () =>
  [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )[0];

const post = explicitId
  ? blogPosts.find((p) => p.id === explicitId)
  : pickLatest();

if (!post) {
  console.error(explicitId ? `Post id ${explicitId} not found` : 'No blog posts found');
  process.exit(0);
}

// build email URL to the post on site
const url = `https://ogopogosolar.ca/news?post=${post.id}#post-${post.id}`;

// payload to server
const body: Record<string, unknown> = {
  key,
  postId: post.id,
  title: post.title,
  url,
  excerpt: post.excerpt,
};
if (force) body.force = true;

// Use global fetch (Node 18+). Cast to avoid TS DOM lib requirement.
const fetchAny: any = (globalThis as any).fetch;

(async () => {
  console.log(
    `Broadcasting post id=${post.id} "${post.title}"${force ? ' (FORCED)' : ''} → ${url}`
  );

  try {
    const res = await fetchAny('https://ogopogosolar.ca/api/newsletter/broadcast.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const text = await res.text();

    if (!res.ok) {
      console.error('Broadcast failed', res.status, text);
      process.exit(1);
    }
    console.log('Broadcast ok:', text);
  } catch (e) {
    console.error('Broadcast error:', (e as Error).message || e);
    process.exit(1);
  }
})();
