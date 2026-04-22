import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import RegisterForm from './components/RegisterForm.jsx'

function App() {
  return (
    <div>
      <RegisterForm />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default App
