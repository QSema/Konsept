// import Box from "./components/Box";
// import info from "./components/Data";
import AppRouter from "./router/AppRouter";
import '../src/assets/scss/main.scss'
import { GlobalProvider } from "./Context/globalContext";
import { WishlistProvider } from "react-use-wishlist";
import { CartProvider } from "react-use-cart";
import { useSelector } from "react-redux";
import { ThemeContextProvider } from "./Context/ThemeContext.";


function App() {

  return (
    <>
    <ThemeContextProvider>
    <CartProvider>
       <WishlistProvider>
        <GlobalProvider>
          <AppRouter />
        </GlobalProvider>
      </WishlistProvider>
    </CartProvider>
     </ThemeContextProvider>
    </>
  );
}

export default App;

