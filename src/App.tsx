// App.tsx
import { Routes, Route } from 'react-router-dom';
import PortfolioLanding from '@/pages/PortFolioLanding.tsx';
import BlogPost from '@/pages/AllBlogs.tsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioLanding />} />
      <Route path="/blogs" element={<BlogPost />} />
    </Routes>
  );
}

export default App;
