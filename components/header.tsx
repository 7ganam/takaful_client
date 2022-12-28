import React from "react";
import MobileMenu from "./mobile-menu";
import MobileMenuButton from "./mobile-menu-button";
import styles from "../styles/Header.module.css";
import Logo from "./logo";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuState, setMenu] = useState(false);

  const toggleMenu = (): void => {
    setMenu(!menuState);
  };

  return (
    <header className={styles.header}>
      <div>
        <nav className={styles.nav}>
          <Logo />
          <ul>
            <li>
              <a href="#info">التعريف بالمبادرة</a>
            </li>
            <li>
              <a href="#record">تسجيل</a>
            </li>
          </ul>
        </nav>
        <div className={styles.action}>
          <button>
            <a href="#footer">تواصل معنا</a>
          </button>
        </div>
        {/* <!-- mobile menu button --> */}
        <MobileMenuButton menuState={menuState} togMenu={toggleMenu} />
        {/* <!-- mobile menu --> */}
        {/* {menuState ? <MobileMenu /> : null} */}

        <MobileMenu isOpen={menuState} togMenu={toggleMenu} />
      </div>
    </header>
  );
}
