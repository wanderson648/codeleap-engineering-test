import styled from "styled-components"
import * as Dialog from '@radix-ui/react-dialog';


export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  inset: 0;
  background: rgba(119, 119, 119, 0.8);

  @media (max-width: 870px) {
    width: 100%;
  }

  @media (max-width: 667px) {
    width: 100%;
  }
`;

export const Title = styled(Dialog.Title)`
  margin-top: 0;
`

export const Content = styled(Dialog.Content)`
  width: 600px;
  height: 334px;
  border-radius: 6px;
  padding: 1.5rem;
  border: 1px solid #999;
  color: black;
  border-radius: 16px;
  background: #FFF;
  margin-borrom: 1.5rem;


  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    
    label {
      margin-bottom: 0.5rem;
    }

    input, textarea {
      border-radius: 6px;
      border: 0;
      padding: 0.5rem;
      border: 1px solid #777777;

      &::placeholder {
        color: #ccc;
      }
    }

    input {
      margin-bottom: 0.5rem;
    }

    textarea {
      resize: none;
      padding:
      margin-bottom: 5rem;
    }
  }

  @media (max-width: 870px) {
    width: 580px;
  }

  @media (max-width: 667px) {
    width: 480px;
  }
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  bottom: 1.5rem;
  right: 1.5rem;
  line-height: 0;

  .btn-cancel {
    color: #000;
    background: #fff;
    border: 1px solid #999;
    margin-right: 1rem;
  }

  button {
    background: #47B960;
    width: 120px;
    height: 32px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    border-radius: 8px;
    border: 0;
    margin-top: 1.5rem;

    @media (max-width: 870px) {
      width: 90px;
      font-size: 0.87rem;
    }
`;