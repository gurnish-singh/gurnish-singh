// src/pages/PortfolioLanding.tsx
import AppDrawer from '@/components/sections/AppDrawer';
import { ThemeProvider } from '@/components/nightMode/theme-provider';
import About from '@/components/sections/About';
import ResumeData from '@/assets/resumeData.json';
import Education from '@/components/sections/Education';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import WorkTogether from '@/components/sections/WorkTogether';
import Footer from '@/components/sections/Footer';
import Blogs from '@/components/sections/Blogs.tsx';

function PortfolioLanding() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AppDrawer />
      <main className="p-4">
        <About resumeData={ResumeData.main} />
        <Education resumeData={ResumeData.resume} />
        <Skills />
        <Experience resumeData={ResumeData.resume} />
        <Blogs />
        <WorkTogether />
        <Footer resumeData={ResumeData.main.social} />
      </main>
    </ThemeProvider>
  );
}

export default PortfolioLanding;
