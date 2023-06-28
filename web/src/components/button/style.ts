import styled from 'styled-components';
import { IButton } from '.';

export const Buttons = styled.button<IButton>`
  background-color: ${(p: IButton) => p.bg};
  font-size: ${(p: IButton) => p.font};
  color: ${(p: IButton) => p.color};
  width: ${(p: IButton) => p.size};
  border-radius: 5px;
  margin-right: auto;
  font-weight: bold;
  margin-left: auto;
  cursor: pointer;
  padding: 10px;
  border: none;
  transition: all 0.2s ease-out;
  &:hover {
    background-color: ${(p: IButton) => p.color};
    color: ${(p: IButton) => p.bg};
  }
`;
