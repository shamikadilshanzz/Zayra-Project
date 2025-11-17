import { useState, useEffect, useRef } from "react";
import na from "./Navigation.module.css";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import { products } from "../data";

function Navigation() { 
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileSearchQuery, setMobileSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchInputRef = useRef(null);
  const searchResultsRef = useRef(null);
  const mobileSearchInputRef = useRef(null);
  const mobileSearchResultsRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchResultsRef.current &&
        !searchResultsRef.current.contains(event.target) &&
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target)
      ) {
        setSearchQuery("");
      }
      if (
        mobileSearchResultsRef.current &&
        !mobileSearchResultsRef.current.contains(event.target) &&
        mobileSearchInputRef.current &&
        !mobileSearchInputRef.current.contains(event.target)
      ) {
        setMobileSearchQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMobileMenu = () => setIsMenuOpen(false);
  const toggleMobileMenu = () => setIsMenuOpen(!isMenuOpen);

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const filteredProducts = searchQuery.trim()
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  const filteredMobileProducts = mobileSearchQuery.trim()
    ? products.filter((product) =>
        product.name.toLowerCase().includes(mobileSearchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleMobileSearchChange = (e) => {
    setMobileSearchQuery(e.target.value);
  };

  const handleProductClick = (product) => {
    setSearchQuery("");
    setSearchOpen(false);
    navigate("/");
  };

  const handleMobileProductClick = (product) => {
    setMobileSearchQuery("");
    closeMobileMenu();
    navigate("/");
  };

  return (
    <>
      <header className={`${na.header} ${isScrolled ? na.scrolled : ""}`}>
        <div className={na.leftSection}>
          <div className={na.logo}>
            <Link to='/'><img src="/brand/favicon.png" alt="Logo" /></Link>
          </div>
          <Link to='/'><div className={na.Textlogo}>Zayra</div></Link>
        </div>

        <nav className={na.nav}>
          {[{ path: "/", label: "Home" }, { path: "/shop/about", label: "About" }, { path: "/shop/support", label: "Support" }]
            .map((item) => (
              <Link key={item.path} to={item.path} className={na.navLink}>{item.label}</Link>
          ))}
        </nav>

        <div className={na.authLinks}>
          <div className={na.seco}>
            <div className={na.searchContainer}>
              <div className={na.searchIcon} onClick={() => setSearchOpen(!searchOpen)}><Search size={25} /></div>
              <input 
                ref={searchInputRef}
                type="text" 
                placeholder="Search..." 
                className={`${na.searchInput} ${searchOpen ? na.active : ""}`}
                value={searchQuery}
                onChange={handleSearchChange}
                autoComplete="off"
              />
              {filteredProducts.length > 0 && searchQuery.trim() && (
                <div ref={searchResultsRef} className={na.searchResults}>
                  {filteredProducts.map((product) => (
                    <div
                      key={product._id}
                      className={na.searchResultItem}
                      onClick={() => handleProductClick(product)}
                    >
                      <span className={na.searchResultName}>{product.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <Link to="/shop/cart" className={na.cartIcon}>
              <ShoppingCart size={25} />
              <span className={na.cartCount}>{cartItemCount}</span> 
            </Link>
          </div>
          <SignedIn><UserButton /></SignedIn>
          <SignedOut>
            <div className={na.signIn}><Link to='/sign-in'>Sign In</Link></div>
            <div className={na.signUp}><Link to='/sign-up'>Sign Up</Link></div>
          </SignedOut>
        </div>

        <div className={na.mobileMenuToggle} onClick={toggleMobileMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </header>

      <div className={`${na.mobileNavOverlay} ${isMenuOpen ? na.active : ""}`} onClick={closeMobileMenu}></div>

      <div className={`${na.mobileNav} ${isMenuOpen ? na.active : ""}`}>
        <div className={na.mobileNavHeader}>
          <div className={na.Textlogo}>Zayra</div>
          <button className={na.mobileNavClose} onClick={closeMobileMenu}><X size={24} /></button>
        </div>

        <div className={na.mobileNavItems}>
          {[{ path: "/", label: "Home" }, { path: "/shop/about", label: "About" }, { path: "/shop/support", label: "Support" }]
            .map((item) => (
              <Link key={item.path} to={item.path} className={na.mobileNavItem} onClick={closeMobileMenu}>{item.label}</Link>
          ))}
        </div>

        <div className={na.mobileSearchSection}>
          <div className={na.mobileSearchContainer}>
            <Search size={20} />
            <input 
              ref={mobileSearchInputRef}
              type="text" 
              placeholder="Search..." 
              className={na.mobileSearchInput}
              value={mobileSearchQuery}
              onChange={handleMobileSearchChange}
              autoComplete="off"
            />
            {filteredMobileProducts.length > 0 && mobileSearchQuery.trim() && (
              <div ref={mobileSearchResultsRef} className={na.mobileSearchResults}>
                {filteredMobileProducts.map((product) => (
                  <div
                    key={product._id}
                    className={na.mobileSearchResultItem}
                    onClick={() => handleMobileProductClick(product)}
                  >
                    <span className={na.mobileSearchResultName}>{product.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className={na.mobileIconSection}>
          <Link to="/shop/cart" className={na.mobileCartIcon} onClick={closeMobileMenu}>
            <ShoppingCart size={24} />
            <span className={na.cartCount}>{cartItemCount}</span> 
          </Link>
        </div>

        <div className={na.mobileAuthSection}>
          <SignedIn><UserButton /></SignedIn>
          <SignedOut>
            <div className={na.mobileSignIn}><Link to='/sign-in' onClick={closeMobileMenu}>Sign In</Link></div>
            <div className={na.mobileSignUp}><Link to='/sign-up' onClick={closeMobileMenu}>Sign Up</Link></div>
          </SignedOut>
        </div>
      </div>
    </>
  );
}

export default Navigation;
