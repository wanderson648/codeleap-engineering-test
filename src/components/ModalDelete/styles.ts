import * as Dialog from "@radix-ui/react-dialog"
import styled from "styled-components"



export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(119, 119, 119, 0.8);
`;

export const Title = styled(Dialog.Title)`
  margin-top: 0;
  font-style: normal;
  font-weight: 700;
  font-size: 1.2rem;
  color: #000;
  line-height: 1.6;

  @media (max-width: 870px){
    font-size: 0.875rem;
  }
`


export const Content = styled(Dialog.Content)`
  height: 146px;
  border-radius: 6px;
  padding: 1.5rem;
  border: 1px solid #999;
  border-radius: 16px;
  background: white;
  margin-borrom: 1.5rem;
  background: #fff;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 870px){
    width: 380px;
  }

  @media (max-width: 667px){
    width: 380px;
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
    border: 1px solid #000;
    margin-right: 1rem;
  }

  button {
    background: #FF5151;
    width: 120px;
    height: 32px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    border-radius: 8px;
    border: 0;
    margin-top: 1.5rem;

    @media (max-width: 870px){
      width: 80px;
      font-size: 0.8rem;
    }

    @media (max-width: 667px) and (min-width: 375px){
      width: 80px;
      font-size: 0.8rem;
    }
  }
`;