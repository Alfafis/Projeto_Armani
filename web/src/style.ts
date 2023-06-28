import styled from 'styled-components';
import BgTeache from './assets/images/bg_teacher.png';

export const Container = styled.div`
  display: flex;
  place-content: center;
  width: 100vw;
  height: 100%;
`;

export const BgTeacher = styled.div`
  background-image: url(${BgTeache});
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  position: fixed;
  height: 800px;
  width: 600px;
  bottom: 0;
  left: 0;
  margin: 0;
  @media (max-width: 1280px) {
    height: 500px;
    width: 350px;
  }
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 375px) {
    display: none;
  }
`;
