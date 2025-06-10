import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

function About({ resumeData }) {
    const {
        name,
        bio,
        resumeDownload,
    } = resumeData;

    return (
        <section id="about" className="py-10 mt-10">
            <div className="w-full px-4 mt-20">
                <Card className="w-full">
                    <CardContent className="text-left">
                        <img
                            src="src/assets/images/IMG_7265.jpg"
                            alt={`${name} profile`}
                            className="rounded-2xl w-40 h-40 object-cover shadow-lg float-right ml-4 mb-2 hidden sm:block"
                        />
                        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
                        <p className="text-muted-foreground whitespace-pre-line mb-4">
                            {bio}
                        </p>
                        <div className="flex gap-2 justify-end clear-both">
                            <Button asChild variant="default">
                                <a href={resumeDownload} download>
                                    <Download className="mr-2 h-4 w-4"/>
                                    Download Resume
                                </a>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}

export default About;