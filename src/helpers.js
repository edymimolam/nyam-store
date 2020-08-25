import { useState, useRef, useEffect, useCallback } from "react";

export function useMoreThanOneHoverOverSelected(isSelected) {
  const [
    isMoreThanOneHoverOverSelected,
    setIsMoreThanOneHoverOverSelected,
  ] = useState(false);
  const hoverNodeRef = useRef(null);
  const hoverCount = useRef(0);

  const handleMouseOver = useCallback(() => {
    isSelected ? hoverCount.current++ : (hoverCount.current = 0);
    setIsMoreThanOneHoverOverSelected(hoverCount.current > 0);
  }, [isSelected]);

  const handleMouseOut = useCallback(() => {
    setIsMoreThanOneHoverOverSelected(false);
  }, []);

  useEffect(() => {
    const node = hoverNodeRef.current;

    node.addEventListener("mouseover", handleMouseOver);
    node.addEventListener("mouseout", handleMouseOut);
    return () => {
      node.removeEventListener("mouseover", handleMouseOver);
      node.removeEventListener("mouseout", handleMouseOut);
    };
  }, [handleMouseOver, handleMouseOut]);

  useEffect(() => {
    !isSelected && setIsMoreThanOneHoverOverSelected(false);
  }, [isSelected]);

  return [hoverNodeRef, isMoreThanOneHoverOverSelected];
}
