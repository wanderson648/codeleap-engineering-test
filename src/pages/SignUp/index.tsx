import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useDispatch } from 'react-redux'
import { setUsername } from '../../redux/reducers/userReducer' 
import { ChangeEvent } from 'react'

import { Container, Content } from './styles'

export function SignUp() {
  const dispatch = useDispatch()
  
  const { username } = useSelector((state: RootState)=> state.username)

  const handleInputUsername = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setUsername(event.target.value))
  }

  const isUsernameEmpty = username.length === 0

  return (
    <Container>
      <Content>
        <strong>Welcome to CodeLeap network</strong>

        <form>
          <label htmlFor='username'>Please enter your username</label>
          <input
            id='username'
            type="text"
            value={username}
            onChange={handleInputUsername}
            placeholder='John doe'
          />

          <NavLink to='/mainscreen' title='Main Screen'>
            <button 
              disabled={isUsernameEmpty}
            >
              Enter
            </button>
          </NavLink>
        </form>
      </Content>
    </Container>
  )
}