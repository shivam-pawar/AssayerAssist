import { useEffect, useState } from "react";

interface DraggableTextProps {
  textId: number;
  defaultText: string;
  defaultPosition: { top: string; left: string };
  defaultFontSize: number;
  defaultBold: boolean;
}

export const DraggableText: React.FC<DraggableTextProps> = ({
  textId,
  defaultText,
  defaultPosition,
  defaultFontSize,
  defaultBold,
}) => {
  const [dragging, setDragging] = useState<string | null>(null);
  const [text] = useState(defaultText);
  const [position, setPosition] = useState(defaultPosition);

  useEffect(() => {
    localStorage.setItem(`droppedText_${textId}`, text);
    localStorage.setItem(`top_${textId}`, position.top);
    localStorage.setItem(`left_${textId}`, position.left);
    localStorage.setItem(`fontSize_${textId}`, defaultFontSize.toString());
    localStorage.setItem(`bold_${textId}`, defaultBold.toString());
  }, [text, position, textId, defaultFontSize, defaultBold]);

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    setDragging(text);
    const img = new Image();
    img.src = "https://img.icons8.com/fluency-systems-regular/16/move.png";
    event.dataTransfer.setDragImage(img, 10, 10);
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setDragImage(img, 0, 0);
  };

  const handleDragEnd = () => {
    setDragging(null);
  };

  const handleDrop = () => {
    setDragging(null);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    setPosition({
      top: e.clientY + "px",
      left: e.clientX + "px",
    });
  };

  return (
    <div
      style={{ position: "absolute", top: position.top, left: position.left }}
    >
      <div
        style={{
          cursor: "grabbing",
          opacity: dragging === null ? 1 : 0.5,
          fontSize: defaultFontSize,
          fontWeight: defaultBold ? "bold" : "normal",
        }}
        draggable
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDrag={handleDrag}
      >
        {text}
      </div>
    </div>
  );
};
