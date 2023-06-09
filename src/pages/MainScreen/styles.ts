import styled from "styled-components"

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  /* height: 100%; */
  background: #FFF;
  padding-bottom: 3.125rem;

  header {
    width: 800px;
    height: 80px; 
    background: #7695EC;
    font-weight: 700;
    font-size: 1.375rem;
    line-height: 1.6;
    color: #fff;
    padding-left: 37px;
    padding-top: 27px;

    display: flex;
    justify-content: space-between;
    
    a {
      margin-right: 1.5rem;
      cursor: pointer;
      color: #FFF;

      &:hover {
        color: #1e40af;
        transition: 0.2s;
      }
    }
  }

  @media (max-width: 870px){
    width: 780px;

    header {
      width: 780px;
    }
  }

  @media (max-width: 667px){
    width: 100%;

    header {
      width: 100%;
      font-size: 1.3rem;
    }
  }

  @media (max-width: 425px){
    width: 620px;

    header {
      width: 100%;
      font-size: 1.3rem;
    }
  }
`;

export const Content = styled.div`
  width: 750px;
  height: 334px;
  margin: 1.5rem auto;
  background: #FFF;
  border: 1px solid #999;
  border-radius: 1rem;
  position: relative;

  form {
    display:flex;
    flex-direction: column;
    padding: 1.5rem;
  
    strong {
      font-style: normal;
      font-weight: 700;
      font-size: 1.375rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    label {
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.6;
    }

    input {
      width: 100%;
      height: 2rem;
      background: #FFF;
      border: 1px solid #777;
      border-radius: 8px;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      padding: 0.5rem;

      &::placeholder {
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.6;
        color: #CCC;
      }
    }

    textarea {
      width: 100%;
      height: 74px;
      margin-top: 0.5rem;
      resize: none;
      background: #FFF;
      border: 1px solid #777;
      border-radius: 8px;
      padding: 0.5rem;

      &::placeholder {
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.6;
        color: #CCC;
      }
    }

    button {
      width: 120px;
      height: 32px;
      background: #7695EC;
      border-radius: 8px;
      border: 0;   
      position: absolute;
      right: 1.5rem;
      bottom: 1.5rem;
      color: #fff;

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        cursor:pointer
      }
    }
  }

  @media (max-width: 870px){
    width: 700px;
  }

  @media (max-width: 667px){
    width: 600px;

    form {
      strong {
        font-size: 1.3rem;
      }
    }
  }

  @media (max-width: 425px){
    width: 580px;
  }
`;

export const Card = styled.div`
  width: 750px;
  height: 300px;
  margin: 0 auto;
  border-radius: 16px;
  padding-bottom: 50px;
  border: 1px solid #999;
  margin-bottom: 1.5rem;

  header {
    width: 100%;
    height: 70px;
    border-radius: 16px 16px 0 0;
    display: flex;
    align-items:center;
    justify-content: space-between;

    h1 {
      font-weight: 700;
      font-size: 1.375rem;
      line-height: 1.6;
      padding-bottom: 1.5rem;
    }

    div {
      margin-bottom: 1.5rem;

      .trash {
        margin-right: 2.125rem;

        &:hover {
          color: #7e22ce;
          transition: 0.2s;
        }
      }

      .edit {
        margin-right: 0;

        &:hover {
          color:  #1e40af;
          transition: 0.2s;
        }
      }

      svg {
        cursor:pointer;
        &:hover {
          width: 28px;
          transition: 0.2s;
        }
      }
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    aling-items:center;
    padding: 1.5rem;

    strong {
      font-style: normal;
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 1.6;
      color: #777;
    }

    span {
      font-style: normal;
      font-weight: 400;
      font-size: 1.125rem;
      line-height: 1.6;
      text-align: right;
      color: #777;
    }
  }

  p {
    padding: 1.5rem;
    font-style: normal;
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.6;
    color: #000000;
  }


  @media (max-width: 870px) {
    width: 700px;
  }

  @media (max-width: 667px) {
    width: 600px;

     p {
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.6;
      color: #000000;
    }
  }

  @media (max-width: 425px){
    width: 580px;
  }
`


