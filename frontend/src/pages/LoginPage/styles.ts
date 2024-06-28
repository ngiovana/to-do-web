import styled from 'styled-components'

interface ImageContainerProps {
  isCreateActive: boolean;
}

export const LoginPageContainer = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  font-family: 'Space Grotesk', sans-serif;
`

export const ImageContainer = styled.div<ImageContainerProps>`
  position: absolute;
  top: 0;
  left: ${props => props.isCreateActive ? '50%' : '0'};
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: all 0.6s ease-in-out;
  border-radius: ${props => props.isCreateActive ? '150px 0 0 100px': ' 0 150px 100px 0'};
  z-index: 1000;

  box-shadow: 0 0 5px var(--red-4);
  background: linear-gradient(to right, var(--red-3), var(--red-7));

  img {
    display: flex;
    margin: 10% auto 0 auto;
    width: 90%;
    max-width: 45rem;
  }
`

export const ImageLabelContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 90%;

  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 0 auto;

  h1 {
    color: var(--red-11);
    text-align: center;
  }

  p {
    color: var(--gray-11);
  }

  @media (max-height: 520px) {
    font-size: 0.8rem;
  }
`
