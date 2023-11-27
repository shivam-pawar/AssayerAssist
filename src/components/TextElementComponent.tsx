import { TextElementProps } from "../interfaces/printSettings";

export const TextElementComponent: React.FC<TextElementProps> = ({
  textConfig,
  onDoubleClick,
}) => {
  return (
    <div
      className="relative"
      style={{
        position: "absolute",
        left: textConfig.x,
        top: textConfig.y,
        fontSize: `${textConfig.fontSize}px`,
        fontWeight: textConfig.bold ? "bold" : "normal",
        cursor: "grab",
        display: "flex",
        textAlign: "start",
      }}
      onDoubleClick={() => onDoubleClick(textConfig.id)}
    >
      {textConfig.content}
    </div>
  );
};
