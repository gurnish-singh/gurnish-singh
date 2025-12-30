import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import TangledSine from '@/components/webExperiments/tangledSine.tsx';
import Chess from '../webExperiments/Chess';
type Experiment = {
  id: string;
  title: string;
  description: string;
  component: React.ReactNode;
};

export const experiments: Experiment[] = [
  {
    id: 'tangled-sine',
    title: 'Tangled Sine Waves',
    description:
      'A generative art experiment using sine waves that all start and end together, creating tangled ribbon-like patterns.',
    component: <TangledSine />,
  },
  {
    id: 'chess',
    title: 'Interactive Chess game',
    description:
      'Maybe I just want to play a game of chess thats why...',
    component: <Chess />,
  },
];

function WebExperiments() {
  return (
    <section id="blogs" className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">Some Experiments</h2>

        <Carousel className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          <CarouselContent className="gap-x-2">
            {experiments.map((experiment, index) => (
              <CarouselItem
                key={index}
                className="basis-full xs:basis-1/2 sm:basis-1/3 lg:basis-1/4 flex-shrink-0"
              >
                <Card className="flex flex-col h-full">
                  <CardContent className="flex-1 p-4 space-y-2">
                    <div className="flex justify-between items-center text-xs text-gray-500"></div>
                    <CardTitle>{experiment.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {experiment.description}
                    </p>
                    <Link to={`/experiments/${experiment.id}`} target="_blank">
                      <Button variant="link" className="text-blue-600 p-0">
                        Read more →
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10" />
        </Carousel>

        <div className="mt-6 text-center">
          <Link to="/experiments">
            <Button variant="outline">View All Experiments</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WebExperiments;
