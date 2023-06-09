import styled from "styled-components"


export const Container = styled.div`
  background: #fff;
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
  
  img {
    margin-top: 12rem;
    width: 600px;  
  }

  p {
    color: #999;
    font-size: 1.5rem;
    animation: blink 1s steps(1, end) infinite;

    @keyframes blink {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }

  @media (max-width: 667px) {
    img {
      width: 300px;
    } 
    p {
      font-size: 1rem;
    }
  }  
`

