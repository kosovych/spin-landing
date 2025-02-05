import Cards from "./components/cards/Cards"
import Header from "./components/header/Header"
import Wheel from "./components/wheel"

function App() {

  return (
      <div className="app">
        <span className="app__shadow app__shadow-1"></span>
        <span className="app__shadow app__shadow-2"></span>
        <span className="app__shadow app__shadow-3"></span>
        <span className="t t__1" />
        <span className="t t__2" />
        <span className="t t__3" />
        <Header />
        <Cards />
        <h1 className="title">WELCOME BONUS <br /> FOR $USDT USERS</h1>
        <Wheel />
      </div>
  )
};

export default App
