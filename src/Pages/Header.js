import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../firebase';

function Header() {
  const [user, setUser] = useState(null);
  const [showMenu, setShowMenu] = useState(false); // New state for toggling the menu

  const navigate = useNavigate();

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log('User has signed out');
        setUser(null); // Reset user state upon sign-out
        navigate('/'); // Navigate to home after sign-out
      })
      .catch((error) => {
        console.error('Sign-out error:', error);
      });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user); // Set user state if user is logged in
      } else {
        setUser(null); // Reset user state if user is not logged in
        navigate('/'); // Redirect to home if user is not logged in
      }
    });

    return () => unsubscribe(); // Cleanup subscription on component unmount
  }, [navigate]);

  const toggleMenu = () => {
    setShowMenu(!showMenu); // Toggle the showMenu state
  };

  return (
    <div>
      {user && ( // Only render navigation if user is logged in
        <nav className="navBar">
          <div className="navLogo">
            <img src="/Images/Logo.svg" alt="logo" />
          </div>
          <div className={`links ${showMenu ? 'active' : ''}`}>
            <ul>
              <Link to="/home" className="navigation" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/about" className="navigation" onClick={toggleMenu}>
                About
              </Link>
              <Link to="/menu" className="navigation" onClick={toggleMenu}>
                Menu
              </Link>
              <Link to="/order" className="navigation" onClick={toggleMenu}>
                Order
              </Link>
              <Link to="/reserve" className="navigation" onClick={toggleMenu}>
                Reserve
              </Link>
            </ul>
          </div>
          <div className="burger" onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="logout">
            <span className="signoutLink" onClick={signOut}>
              Sign Out
            </span>
          </div>
        </nav>
      )}
    </div>
  );
}

export default Header;
