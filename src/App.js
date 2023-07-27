import React, {useState} from 'react';
import Header from './Header';
import MainSection from './MainSection';
import Footer from './Footer';
import Cart from './Cart';
import './header_css/header.css';
import './header_css/header_2.css';
import './header_css/header_3.css';
import './header_css/header_4.css';
import './header_css/header_5.css';
const App = () => {
    const [cartItems, setCartItems] = useState([]);
    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    // Функция для удаления элемента из корзины
    const removeFromCart = (itemId) => {
        const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCartItems);
    };
    return (
        <>
            <Header />
            <MainSection />
            <Footer />
            <Cart/>
        </>
    );
};

export default App;
