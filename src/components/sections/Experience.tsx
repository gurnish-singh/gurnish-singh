import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SiSamsung } from 'react-icons/si';
import type { ResumeData, Work } from '@/ts/resumeData.ts';

function Experience({ resumeData }: { resumeData: ResumeData['resume'] }) {
  // Grouping roles by company
  type GroupedByCompany = { [key: string]: Work[] };

  const groupedByCompany: GroupedByCompany = resumeData.work.reduce(
    (acc: GroupedByCompany, role: Work) => {
      if (!acc[role.company]) acc[role.company] = [];
      acc[role.company].push(role);
      return acc;
    },
    {}
  );

  return (
    <section id="experience" className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">Experience</h2>
        <div className="grid ">
          {Object.entries(groupedByCompany).map(([company, roles]) => (
            <Card
              key={company}
              className="rounded-2xl shadow-md dark:bg-gray-900"
            >
              <CardHeader className="flex flex-row items-center gap-4">
                {company.includes('Samsung') && (
                  <SiSamsung className="w-20 h-20 " />
                )}
                <CardTitle className="text-xl font-bold">{company}</CardTitle>
              </CardHeader>
              <CardContent>
                {roles.map((role, index) => (
                  <div key={index} className="mb-4">
                    <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                      {role.title}
                      <span className="mx-2 text-gray-500 dark:text-gray-400">
                        •
                      </span>
                      <em className="text-sm text-gray-600 dark:text-gray-400">
                        {role.years}
                      </em>
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">
                      {role.description}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
