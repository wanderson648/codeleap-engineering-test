import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GlobalStyle } from './global'

import { Provider } from 'react-redux'
import { store } from './redux/store'


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  )
}

export default App
