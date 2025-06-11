import {FaLinkedin, FaGithub, FaEnvelope, FaGlobe, FaArrowUp, FaTwitter, FaInstagram} from "react-icons/fa";
import {SiLeetcode} from "react-icons/si";
import type {ResumeData} from "src/ts/types.ts";
import type {JSX} from "react";
const iconMap: { [key: string]: JSX.Element } = {
    linkedin: <FaLinkedin size={20}/>,
    github: <FaGithub size={20}/>,
    leetcode: <SiLeetcode size={20}/>,
    instagram: <FaInstagram size={20}/>,
    twitter: <FaTwitter size={20}/>,
    mail: <FaEnvelope size={20}/>,
};

function Footer({resumeData}:{resumeData:ResumeData['main']['social']}) {
    if (!resumeData) return null;

    return (
        <footer className="py-6 border-t">
            <div className="container mx-auto px-4 grid grid-cols-3 items-center">
                {/* Left - Social Icons */}
                <ul className="flex gap-4 justify-start">
                    {resumeData.map((network) => (
                        <li key={network.name}>
                            <a
                                href={network.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary transition-colors"
                            >
                                {iconMap[network.name] || <FaGlobe size={20}/>}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Center - Copyright */}
                <ul className="text-sm text-muted-foreground text-center">
                    <li>&copy; {new Date().getFullYear()} Gurnish Singh</li>
                    <li>
                        Design by{" "}
                        <a
                            href="https://www.linkedin.com/in/gurnish-singh/"
                            className="underline hover:text-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Gurnish Singh <span> </span>
                        </a>
                        and styled using {" "}
                        <a
                            href="https://ui.shadcn.com/"
                            className="underline hover:text-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Shadcn
                        </a>
                    </li>
                </ul>

                {/* Right - Go Top */}
                <div className="flex justify-end">
                    <a
                        href="#about"
                        className="hover:text-primary transition-all"
                        title="Back to top"
                    >
                        <FaArrowUp size={20}/>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;