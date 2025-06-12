export default interface BlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt: string;
  };
  publishedAt: string;
  excerpt: string;
  body: string;
}
