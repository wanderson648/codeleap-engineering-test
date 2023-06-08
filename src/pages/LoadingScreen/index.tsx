import { useNavigate } from 'react-router-dom';

import logoImg from '../../assets/codeleap_logo_black.svg'
import { Container } from "./styles";


export function LoadingScreen() {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup")
  }

  setTimeout(() => {
    handleSignup()
  }, 3000)

  return (
    <Container>
      <img src={logoImg} alt="" />
      <p className='blink'>Redirecting to signup...</p>
    </Container>
  )
}