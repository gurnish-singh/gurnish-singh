// App.tsx
import { Routes, Route } from 'react-router-dom';
import PortfolioLanding from '@/pages/PortFolioLanding.tsx';
import AllBlogs from '@/pages/AllBlogs.tsx';
import BlogPostPage from '@/pages/BlogPostPage.tsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioLanding />} />
      <Route path="/blogs" element={<AllBlogs />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
    </Routes>
  );
}

export default App;
