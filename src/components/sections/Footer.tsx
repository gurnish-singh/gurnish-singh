import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaGlobe,
  FaArrowUp,
  FaTwitter,
  FaInstagram,
  FaMediumM,
} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import type { ResumeData } from '@/ts/resumeData.ts';
import type { JSX } from 'react';
const iconMap: { [key: string]: JSX.Element } = {
  linkedin: <FaLinkedin size={20} />,
  github: <FaGithub size={20} />,
  leetcode: <SiLeetcode size={20} />,
  instagram: <FaInstagram size={20} />,
  twitter: <FaTwitter size={20} />,
  mail: <FaEnvelope size={20} />,
  medium: <FaMediumM size={20} />,
};

function Footer({ resumeData }: { resumeData: ResumeData['main']['social'] }) {
  if (!resumeData) return null;

  return (
    <footer className="py-6 border-t">
      <div className="container mx-auto px-4 flex flex-col items-center gap-6 sm:grid sm:grid-cols-3 sm:items-center sm:gap-4">
        {/* Left - Social Icons */}
        <div className="w-full flex justify-center sm:justify-start">
          <ul className="flex gap-4">
            {resumeData.map((network) => (
              <li key={network.name}>
                <a
                  href={network.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {iconMap[network.name] || <FaGlobe size={20} />}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Center - Copyright */}
        <div className="w-full text-center text-sm text-muted-foreground leading-relaxed">
          <p>&copy; {new Date().getFullYear()} Gurnish Singh</p>
          <p>
            Design by{' '}
            <a
              href="https://www.linkedin.com/in/gurnish-singh/"
              className="underline hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gurnish Singh
            </a>{' '}
            and styled using{' '}
            <a
              href="https://ui.shadcn.com/"
              className="underline hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shadcn
            </a>
          </p>
        </div>

        {/* Right - Go Top */}
        <div className="w-full flex justify-center sm:justify-end">
          <a
            href="#about"
            className="hover:text-primary transition-all"
            title="Back to top"
          >
            <FaArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
