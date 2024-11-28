import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cloneElement, useRef } from 'react';

export function Slider({ children, step = 150 }) {
  const sliderRef = useRef(null);

  function scrollToLeft() {
    sliderRef.current.scrollLeft -= step;
  }
  function scrollToRigth() {
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
