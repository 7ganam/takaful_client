import React, { useState } from "react";
import styles from "../styles/MobileMenu.module.css";
import { motion } from "framer-motion";

interface Props {
  isOpen: boolean;
  togMenu: () => void;
}

const variantsForUl = {
  open: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const item = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: -100 },
};

const button = {
  open: { scale: 1 },
  closed: { scale: 0 },
};

export default function MobileMenu({ isOpen, togMenu }: Props) {
  return (
    <div
      // initial={{ display: "none" }}
      // animate={isOpen ? "open" : "closed"}
      // variants={variants}
      id="mobile-menu"
      className={styles.menu}
      style={{ display: isOpen ? "block" : "none" }}
    >
      <motion.ul variants={variantsForUl} onClick={togMenu}>
        <motion.li variants={item} className="">
          <a href="#info">التعريف بالمبادرة</a>
        </motion.li>
        <motion.li variants={item}>
          <a href="#record">تسجيل</a>
        </motion.li>
      </motion.ul>
      <motion.div variants={button}>
        <button onClick={togMenu}>
          <a href="#footer">تواصل معنا</a>
        </button>
      </motion.div>
    </div>
  );
}
