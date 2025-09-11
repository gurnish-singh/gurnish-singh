import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const ColorfulSine: React.FC = () => {
  const sketchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const myP5 = new p5((p: p5) => {
      const numWaves = 10;
      const waves: {
        amp: number;
        cycles: number;
        phase: number;
        col: p5.Color;
      }[] = [];
      const speed = 0.02;
      p.setup = () => {
        p.createCanvas(400, 80).parent(sketchRef.current!);
        p.colorMode(p.HSB, 360, 100, 100, 100);
        p.noFill();
        p.strokeWeight(4);
        const margin = 5;
        const maxAmp = p.height / 2 - margin;
        for (let i = 0; i < numWaves; i++) {
          waves.push({
            amp: p.random(10, maxAmp),
            cycles: p.int(p.random(1, 4)),
            phase: p.random(p.TWO_PI),
            col: p.color(p.map(i, 0, numWaves, 0, 360), 90, 100, 100),
          });
        }
      };
      p.draw = () => {
        p.background(0); // no shadows, solid black bg
        const t = p.frameCount * speed;

        for (const w of waves) {
          p.stroke(w.col);
          p.beginShape();

          for (let x = 0; x <= p.width; x += 5) {
            const progress = x / p.width;
            const envelope = p.sin(progress * p.PI);
            const y =
              p.height / 2 +
              w.amp *
                envelope *
                p.sin(progress * w.cycles * p.TWO_PI + w.phase + t);
            p.vertex(x, y);
          }

          p.endShape();
        }
      };
      p.windowResized = () => {
        p.resizeCanvas(window.innerWidth, sketchRef.current!.offsetHeight);
      };
    });
    return () => {
      myP5.remove();
    };
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div ref={sketchRef}></div>
    </div>
  );
};

export default ColorfulSine;
