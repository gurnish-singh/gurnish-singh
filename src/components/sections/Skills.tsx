import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaVuejs,
    FaPowerOff,
    FaJava,
    FaAws,
    FaDatabase,
    FaGithubSquare,
} from "react-icons/fa";

const skills = [
    {title: "HTML5", Icon: FaHtml5},
    {title: "CSS3", Icon: FaCss3Alt},
    {title: "JavaScript", Icon: FaJs},
    {title: "ReactJS", Icon: FaReact},
    {title: "NodeJS", Icon: FaNodeJs},
    {title: "VueJS", Icon: FaVuejs},
    {title: "Spring Boot", Icon: FaPowerOff},
    {title: "Java", Icon: FaJava},
    {title: "AWS", Icon: FaAws},
    {title: "SQL", Icon: FaDatabase},
    {title: "GitHub", Icon: FaGithubSquare},
];

function Skills() {
    return (
        <section id="skills" className="py-10">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold mb-6">Skills</h2>
                <TooltipProvider>
                    <div className="flex flex-wrap gap-6 justify-center">
                        {skills.map((skill) => (
                            <Tooltip key={skill.title}>
                                <TooltipTrigger asChild>
                                    <span>
                                        <skill.Icon
                                            className="text-4xl transition-transform duration-300 hover:scale-110"
                                            aria-hidden="true"
                                        />
                                    </span>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{skill.title}</p>
                                </TooltipContent>
                            </Tooltip>
                        ))}
                    </div>
                </TooltipProvider>
            </div>
        </section>
    );
}

export default Skills;