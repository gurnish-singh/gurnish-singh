// App.tsx
import { Routes, Route } from 'react-router-dom';
import PortfolioLanding from '@/pages/PortFolioLanding.tsx';
import AllBlogs from '@/pages/AllBlogs.tsx';
import BlogPostPage from '@/pages/BlogPostPage.tsx';
import { ThemeProvider } from '@/components/nightMode/theme-provider.tsx';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<PortfolioLanding />} />
        <Route path="/blogs" element={<AllBlogs />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
