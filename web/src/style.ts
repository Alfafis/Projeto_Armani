import styled, { createGlobalStyle } from 'styled-components';
import NoTeacher from './assets/images/bg_novo_fundo.png';
import Teacher from './assets/images//bg_fundo_teacher.png';

export const Container = styled.div`
  display: flex;
  place-content: center;
  width: 100%;
  min-height: 600px;
  height: fit-content;
  margin-bottom: 24px;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    background-image: ${(props: { path: string }) =>
      props.path !== '/contact' && props.path !== '/'
        ? `url(${NoTeacher})`
        : `url(${Teacher})`};
    background-color: #222727;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    min-height: 100vh;
    height:100%;
    margin: 0;
  }
`;
