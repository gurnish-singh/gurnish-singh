// src/pages/PortfolioLanding.tsx
import AppDrawer from '@/components/sections/AppDrawer.tsx';
import { ThemeProvider } from '@/components/nightMode/theme-provider.tsx';
import About from '@/components/sections/About.tsx';
import ResumeData from '@/assets/resumeData.json';
import Education from '@/components/sections/Education.tsx';
import Skills from '@/components/sections/Skills.tsx';
import Experience from '@/components/sections/Experience.tsx';
import WorkTogether from '@/components/sections/WorkTogether.tsx';
import Footer from '@/components/sections/Footer.tsx';
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
