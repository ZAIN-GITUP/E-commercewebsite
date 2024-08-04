import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import icon from '../assets/logo.png';
import bags from '../assets/bag.png';
import cart from '../assets/shopping-cart.png';
import "../App.css";

const Navbar = () => {
    const items = useSelector((state) => state.cart);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className={`containers ${isScrolled ? 'bg-slate-400' : 'bg-white'} ${isScrolled ? 'fixed' : 'absolute'} top-0 left-4 right-6 z-50 transition-colors duration-300  `}>
            <div className="containers mx-auto flex  sm:flex-row justify-between w-full items-center py-2 px-0">
                <Link to="/" className="flex items-center space-x-4 mb-2 sm:mb-0">
                    <img src={icon} alt="Logo" className="h-8 sm:h-10" />
                    <span className="text-sm font-bold text-black sm:text-lg">ShopNest</span>
                </Link>
                <div className="flex flex-row items-center space-x-4 ml-auto">
                    <Link to="/cart" className="flex items-center relative">
                        <img className='w-6 h-6' src={cart} alt="Cart" />
                        <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white font-bold text-xs sm:text-base rounded-full p-2">
                            {items.length}
                        </span>
                    </Link>
                    <Link to="/cart" className="flex items-center relative">
                        <img className='w-6 h-6' src={bags} alt="Bags" />
                        <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white font-bold text-xs sm:text-base rounded-full p-2">
                            {totalQuantity}
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
