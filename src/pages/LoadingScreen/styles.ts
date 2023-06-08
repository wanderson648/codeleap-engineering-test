import styled from "styled-components"


export const Container = styled.div`
  background: #fff;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  img {
    width: 500px;
    height: 165px;    
  }

  p {
    color: #999;
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
      height: 165px;
    } 
  }  
`

