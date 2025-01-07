import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"

const App = () => {
  return (
    <main className="bg-main-bg bg-cover text-white">
      <Outlet />
      <ToastContainer />
    </main>
  )
}

export default App
