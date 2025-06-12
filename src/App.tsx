// App.tsx
import { Routes, Route } from 'react-router-dom';
import PortfolioLanding from '@/components/PortFolioLanding.tsx';
import BlogPost from '@/components/modals/BlogPost.tsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioLanding />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
    </Routes>
  );
}

export default App;
