import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion.tsx';
import { Card, CardContent, CardTitle } from '@/components/ui/card.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Link } from 'react-router-dom';
import AppDrawer from '@/components/sections/AppDrawer.tsx';
import { experiments } from '@/components/sections/WebExperiments.tsx';
function AllExperiments() {
  return (
    <>
      <AppDrawer />
      <section className="pt-24 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">All Blog Posts</h2>

        <Accordion type="multiple" className="space-y-4">
          {experiments.map((exp, index) => (
            <AccordionItem key={index} value={`post-${index}`}>
              <AccordionTrigger className="px-3 py-2 flex items-center justify-between text-left text-base font-medium hover:bg-muted rounded-md">
                <span className="font-semibold truncate flex-1">
                  {exp.title}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-3 pb-4">
                <Card className="flex flex-col h-full border border-muted rounded-md shadow-sm">
                  <CardContent className="p-3 space-y-2">
                    <CardTitle className="text-lg">{exp.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {exp.description}
                    </p>
                    <Link to={`/experiments/${exp.id}`} target="_blank">
                      <Button variant="link" className="text-blue-600 p-0">
                        Read more →
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}

export default AllExperiments;
