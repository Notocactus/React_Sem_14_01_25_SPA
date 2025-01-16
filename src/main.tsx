import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import userStore from './store/userStore.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={userStore}>
      <App />
    </Provider>
  </StrictMode>,
)
