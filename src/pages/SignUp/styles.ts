import styled from 'styled-components'


export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  width: 500px;
  height: 205px;

  display: flex;
  flex-direction: column;
  border-radius: 16px;
  padding: 1.5rem;
  position: relative;
  background: #FFF;
  border: 1px solid #CCC;

  

  strong {
    width: 313px;
    height: 26px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 1.375rem;
    line-height: 1.2;
    color: #000000;
  }

  form {
    margin-top: 1.5rem;
    display:flex;
    flex-direction: column;
    
    label {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.2;
      color: color: #000000;
    }

    input {
      padding: 8px;
      margin-top: 8px;
      margin-bottom: 16px;
      width: 452px;
      height: 32px;

      background: #FFF;
      border: 1px solid #777;
      border-radius: 8px;
    }

    button {
      width: 111px;
      height: 32px;
      border-radius: 8px;

      display: flex;
      align-items: center;
      justify-content:center;

      position: absolute;
      bottom: 1.5rem;
      right: 1.5rem;
    
      background: #7695ec;
      font-weight: 700;
      font-size: 1rem;
      line-height: 1.6;
      color: #fff;
      border: 0;

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        cursor:pointer
      }
    }
  }

  @media (max-width: 667px) {
    width: 350px;
    height: 205px;

    strong {
      font-size: 1.25rem;
    }

    form {
      input {
        padding: 8px;
        margin-top: 8px;
        margin-bottom: 16px;
        width: 100%;
        height: 32px;
      }
    }

    
  }  

  
`
