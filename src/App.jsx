import { AppRoute } from "./routes/routes"
import { store } from "./Store"
import { Provider } from "react-redux"
import './App.scss'
import Footer from "./components/Footer/Footer"


function App() {

  return (
    <>
      <Provider store={store}>
        <AppRoute />
      </Provider>
    </>
  )
}

export default App
