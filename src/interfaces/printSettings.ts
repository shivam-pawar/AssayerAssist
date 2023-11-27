export interface TextConfig {
  id: number;
  content: string;
  x: number;
  y: number;
  fontSize: number;
  bold: boolean;
}

export interface TextElementProps {
  textConfig: TextConfig;
  onDoubleClick: (id: number) => void;
}
