import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import AppDrawer from '@/components/sections/AppDrawer.tsx';
import { experiments } from '@/components/sections/WebExperiments';

const ExperimentPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const experiment = experiments.find((exp) => exp.id === id);
  if (!experiment) return <Navigate to="/experiments" />;
  return (
    <>
      <AppDrawer />
      <section className="pt-24 px-4 max-w-3xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4 text-center">
          {experiment.title}
        </h1>
        <p className="text-muted-foreground mb-8 text-center">
          {experiment.description}
        </p>
        <div className="w-full h-[500px]">{experiment.component}</div>
      </section>
    </>
  );
};

export default ExperimentPage;
