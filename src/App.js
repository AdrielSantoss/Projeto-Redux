import React from 'react'
import Routes from './config/routes'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import { Provider } from 'react-redux'
import  store from './config/store'

export default function App() {
  return (// provider: faz com que os component que estiver dentro dele tenha acesso as propriedades do REDUX
    <Provider store={store}> 
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}
