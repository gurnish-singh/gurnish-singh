// src/pages/PortfolioLanding.tsx
import AppDrawer from '@/components/sections/AppDrawer.tsx';
import About from '@/components/sections/About.tsx';
import ResumeData from '@/assets/resumeData.json';
import Education from '@/components/sections/Education.tsx';
import Skills from '@/components/sections/Skills.tsx';
import Experience from '@/components/sections/Experience.tsx';
import WorkTogether from '@/components/sections/WorkTogether.tsx';
import Footer from '@/components/sections/Footer.tsx';
import Blogs from '@/components/sections/Blogs.tsx';
import WebExperiments from '@/components/sections/WebExperiments.tsx';
import ReadingOutline from '@/components/ui/ReadingOutline.tsx';

function PortfolioLanding() {
  return (
    <>
      <AppDrawer />
      <ReadingOutline>
        <main className="p-4">
          <section id="about" data-outline data-title="About">
            <About resumeData={ResumeData.main} />
          </section>

          <section id="education" data-outline data-title="Education">
            <Education resumeData={ResumeData.resume} />
          </section>

          <section id="skills" data-outline data-title="Skills">
            <Skills />
          </section>

          <section id="experience" data-outline data-title="Experience">
            <Experience resumeData={ResumeData.resume} />
          </section>

          <section id="blogs" data-outline data-title="Blogs">
            <Blogs />
          </section>

          <section id="experiments" data-outline data-title="Experiments">
            <WebExperiments />
          </section>

          <section id="contact" data-outline data-title="Work Together">
            <WorkTogether />
          </section>
          <Footer resumeData={ResumeData.main.social} />
        </main>
      </ReadingOutline>
    </>
  );
}

export default PortfolioLanding;
