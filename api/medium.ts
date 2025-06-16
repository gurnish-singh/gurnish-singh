import type { VercelRequest, VercelResponse } from '@vercel/node';
import Parser from 'rss-parser';

const parser = new Parser({
  customFields: {
    item: ['content:encoded'],
  },
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const feed = await parser.parseURL(
      'https://medium.com/feed/@gurnish-singh'
    );

    const posts = feed.items.slice(0, 5).map((item) => {
      const content = (item as any)['content:encoded'] || '';
      const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
      const thumbnail = imgMatch ? imgMatch[1] : null;

      return {
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        thumbnail,
        excerpt: item.contentSnippet,
        source: 'Medium',
      };
    });

    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching Medium feed:', error);
    res.status(500).json({ error: 'Failed to fetch Medium posts' });
  }
}
