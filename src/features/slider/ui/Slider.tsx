import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cloneElement, useRef } from 'react';

interface Props {
  children: React.ReactElement;
  step?: number;
}

export function Slider({ children, step = 150 }: Props) {
  const sliderRef = useRef<HTMLElement | null>(null);

  function scrollToLeft() {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft -= step;
  }
  function scrollToRigth() {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft += step;
  }
  return (
    <div className="flex gap-2">
      <button onClick={scrollToLeft}>
        <ChevronLeft />
      </button>
      {cloneElement(children, { ref: sliderRef })}
      <button onClick={scrollToRigth}>
        <ChevronRight />
      </button>
    </div>
  );
}
