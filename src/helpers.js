import { useState, useRef, useEffect } from "react";

export function useMoreThanOneHoverOverSelected(isSelected) {
  const [
    isMoreThanOneHoverOverSelected,
    setIsMoreThanOneHoverOverSelected,
  ] = useState(false);
  const hoverNodeRef = useRef(null);
  const hoverCount = useRef(0);

  useEffect(() => {
    !isSelected && setIsMoreThanOneHoverOverSelected(false);

    const handleMouseOver = () => {
      isSelected ? hoverCount.current++ : (hoverCount.current = 0);
      setIsMoreThanOneHoverOverSelected(hoverCount.current > 0);
    };
    const handleMouseOut = () => setIsMoreThanOneHoverOverSelected(false);

    const node = hoverNodeRef.current;
    node.addEventListener("mouseover", handleMouseOver);
    node.addEventListener("mouseout", handleMouseOut);
    return () => {
      node.removeEventListener("mouseover", handleMouseOver);
      node.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isMoreThanOneHoverOverSelected, isSelected]);

  return [hoverNodeRef, isMoreThanOneHoverOverSelected];
}
