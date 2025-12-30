import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

// --- TYPES ---
type Section = {
  id: string;
  title: string;
  top: number;
  height: number;
};
type ReadingOutlineProps = {
  sectionsSelector?: string;
  children: ReactNode;
};

// --- COMPONENT ---
export default function ReadingOutline({
                                         sectionsSelector = "section[data-outline]",
                                         children,
                                       }: ReadingOutlineProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [sections, setSections] = useState<Section[]>([]);
  const [scrollY, setScrollY] = useState(0);

  // 1. Collect sections from landing page
  useEffect(() => {
    if (!containerRef.current) return;

    const nodes = Array.from(
      containerRef.current.querySelectorAll(sectionsSelector)
    ) as HTMLElement[];

    const computed: Section[] = nodes.map((el) => ({
      id: el.id,
      title: el.dataset.title || el.id,
      top: el.offsetTop,
      height: el.offsetHeight,
    }));

    setSections(computed);
  }, [sectionsSelector]);

  // 2. Track scroll position
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 3. Progress calculation per section
 const getProgress = (section: Section) => {
      const sectionTop = section.top;
      const sectionBottom = section.top + section.height;

      const viewportTop = scrollY;
      const viewportBottom = scrollY + window.innerHeight;

      // 1️⃣ Section fully visible → 100%
      if (
        viewportTop <= sectionTop &&
        viewportBottom >= sectionBottom
      ) {
        return 1;
      }

      // 2️⃣ Section not reached yet
      if (viewportBottom <= sectionTop) {
        return 0;
      }

      // 3️⃣ Section completely passed
      if (viewportTop >= sectionBottom) {
        return 1;
      }

      // 4️⃣ Partial scroll through section
      const visibleScrolled = viewportBottom - sectionTop;
      return Math.min(
        Math.max(visibleScrolled / section.height, 0),
        1
      );
    };

  return (
    <div ref={containerRef} className="relative flex">
      {/* Outline Rail */}
      <aside className="sticky top-56 h-fit w-6 mr-6 ml-8 block">
        <div className="flex flex-col gap-2">
          {sections.map((section) => {
            const progress = getProgress(section);
            return (
              <div
                key={section.id}
                className="relative w-1 rounded bg-muted overflow-hidden"
                style={{ height: Math.max(20, section.height / 30) }}
              >
                <div
                  className="absolute top-0 w-full bg-primary transition-all"
                  style={{ height: `${progress * 100}%` }}
                />
              </div>
            );
          })}
        </div>
      </aside>

      {/* Page Content */}
      <div className="flex-1">{children}</div>
    </div>
  );
}