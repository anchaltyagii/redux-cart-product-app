import "./App.css";
import Cart from "./components/cart/index";
import Item from "./components/item/index";
import Header from "./components/Header/index";
import {useSelector} from "react-redux";
import { uiSlice } from "./store/ui-slice";

function App() {
  const cartVisible = useSelector(state => state.ui.isCartVisible);
  console.log(cartVisible);
  return (
    <div className="App">
      <Header />
      {cartVisible && <Cart />}
      {!cartVisible && <Item />}
    </div>
  );
}

export default App;
