import React from "react";
import styles from "../styles/Footer.module.css";
export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.left}>
        {/* <img
          className="w-12 mx-auto lg:mx-0"
          src="https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=500"
          alt="logo"
        /> */}
        <small className="my-8 block text-center lg:text-left max-w-lg mx-auto">
          {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non esse
          nulla similique delectus temporibus est laborum consectetur, quasi
          eaque voluptate facere error enim obcaecati id labore iste quisquam
          voluptates quidem. */}
        </small>
        <small className="text-center lg:text-left lg:ml-auto block">
          Copyright 2022, All Rights Reserved
        </small>
      </div>
      <div className={styles.footerCol}>
        <p>Contacts</p>
        <ul>
          <li>a.a.ganam@gmail.com</li>
          <li>+201146466964</li>
        </ul>
      </div>
      <div className={styles.footerCol}>
        <p>Links</p>
        <ul>
          {/* <li>Our Courses</li>
          <li>Quality Management</li>
          <li>Student Support</li>
          <li>Student Management</li> */}
        </ul>
      </div>
      <div className={styles.footerCol}>
        <p>Info</p>
        <ul>
          {/* <li>Terms & Conditions</li>
          <li>Privacy Policy</li> */}
        </ul>
      </div>
    </footer>
  );
}
