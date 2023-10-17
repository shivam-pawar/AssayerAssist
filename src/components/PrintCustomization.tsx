import React, { useState, useEffect } from "react";
import { DraggableText } from "./DraggableText";

interface TextElement {
  id: number;
  defaultText: string;
  defaultPosition: { top: string; left: string };
  defaultFontSize: number;
  defaultBold: boolean;
}

const PrintCustomization: React.FC = () => {
  const [textElements, setTextElements] = useState<TextElement[]>([
    {
      id: 1,
      defaultText: "Text 1",
      defaultPosition: {
        top: localStorage.getItem("top_1") ?? "100px",
        left: localStorage.getItem("left_1") ?? "100px",
      },
      defaultFontSize: Number(localStorage.getItem("fontSize_1")) || 16,
      defaultBold: Boolean(localStorage.getItem("bold_1")) || true,
    },
    {
      id: 2,
      defaultText: "Text 2",
      defaultPosition: {
        top: localStorage.getItem("top_2") ?? "200px",
        left: localStorage.getItem("left_2") ?? "200px",
      },
      defaultFontSize: Number(localStorage.getItem("fontSize_2")) || 22,
      defaultBold: Boolean(localStorage.getItem("bold_2")) || true,
    },
    // Add more text elements here
  ]);

  useEffect(() => {
    textElements.forEach((element) => {
      const top = localStorage.getItem(`top_${element.id}`);
      const left = localStorage.getItem(`left_${element.id}`);
      element.defaultPosition = { top: top ?? "100px", left: left ?? "100px" };
    });
    setTextElements([...textElements]);
  }, []);

  return (
    <div>
      {textElements.map((element) => (
        <DraggableText
          key={element.id}
          textId={element.id}
          defaultText={element.defaultText}
          defaultPosition={element.defaultPosition}
          defaultFontSize={element.defaultFontSize}
          defaultBold={element.defaultBold}
        />
      ))}
      <div></div>
    </div>
  );
};

export default PrintCustomization;
