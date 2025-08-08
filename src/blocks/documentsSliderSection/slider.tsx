import { useRef } from "react";

function useSwipe(onSwipeLeft: () => void, onSwipeRight: () => void) {
    const touchStartX = useRef<number | null>(null);

    const onTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const onTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        const deltaX = e.changedTouches[0].clientX - touchStartX.current;
        if (deltaX > 50) onSwipeRight();
        else if (deltaX < -50) onSwipeLeft();
        touchStartX.current = null;
    };

    return { onTouchStart, onTouchEnd };
}

export default useSwipe;