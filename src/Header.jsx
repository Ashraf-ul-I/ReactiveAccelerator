import { useContext, useState } from "react";
import Moon from "./assets/icons/moon.svg";
import Sun from "./assets/icons/sun.svg";
import logo from "./assets/logo.svg";
import Ring from "./assets/ring.svg";
import ShoppingCart from "./assets/shopping-cart.svg";
import CartDetails from "./cine/CartDetails";
import { movieContext, ThemeContext } from "./context/index";
const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { state } = useContext(movieContext);
  console.log(state.cartData);
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  function handleCLickShow() {
    setShowCart(true);
  }
  return (
    <header>
      {showCart && <CartDetails onCLose={() => setShowCart(false)} />}
      <nav className=" p-4 flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={logo} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-[#00D991]/20 dark:bg-[#00D991]/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-[#00D991]/20 dark:bg-[#00D991]/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setDarkMode((darkMode) => !darkMode)}
            >
              <img src={darkMode ? Sun : Moon} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-[#00D991]/20 dark:bg-[#00D991]/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={handleCLickShow}
            >
              <img src={ShoppingCart} width="24" height="24" alt="" />
              {state.cartData.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                  {state.cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
