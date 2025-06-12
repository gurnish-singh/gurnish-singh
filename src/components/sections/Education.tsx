import { Card, CardContent } from '@/components/ui/card';
import type { ResumeData } from '@/ts/resumeData.ts';

function Education({ resumeData }: { resumeData: ResumeData['resume'] }) {
  if (!resumeData?.education) return null;

  return (
    <section id="education" className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">Education</h2>
        <div className="grid gap-6">
          {resumeData.education.map((edu) => (
            <Card key={edu.school}>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium">{edu.school}</h3>
                <p className="text-muted-foreground text-sm mb-1">
                  {edu.degree} <span className="mx-2">&bull;</span>{' '}
                  <em>{edu.graduated}</em>
                </p>
                <p>{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
