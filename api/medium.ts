import type { VercelRequest, VercelResponse } from '@vercel/node';
import Parser = require('rss-parser');

const parser = new Parser();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const feed = await parser.parseURL(
      'https://medium.com/feed/@gurnish-singh'
    ); // Replace with your Medium username
    const posts = feed.items.slice(0, 5).map((item) => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      contentSnippet: item.contentSnippet,
      thumbnail: item.enclosure?.url || null,
    }));
    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching Medium feed:', error);
    res.status(500).json({ error: 'Failed to fetch Medium feed' });
  }
}
