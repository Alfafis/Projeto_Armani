import { Buttons } from './style';

export interface IButton {
  text: string | JSX.Element;
  handle?: () => void;
  size?: string;
  color?: string;
  bg?: string;
  font?: string;
}

export function Button({ text, handle, size, color, bg, font }: IButton) {
  return (
    <Buttons onClick={handle} size={size} color={color} bg={bg} font={font}>
      {text}
    </Buttons>
  );
}
