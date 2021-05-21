import React from "react";
import styles from "../styles/Navigation.module.scss";

export default function Navigation() {
  return (
    <div>
      <div className={styles.navContainer}>
        <div>
          <span>onemrkt</span>
        </div>
        <div>
          <a>about&nbsp;</a>
          <a>contact&nbsp;</a>
          <a>cart&nbsp;</a>
        </div>
      </div>

      <div className={styles.rightNavContainer}>
          <div className={styles.cart}>
              <img src='./cart.svg'></img>
          </div>
          <div className={styles.menuButton}>
          <img src='./menu.svg'></img>
          </div>
      </div>
      
    </div>
  );
}
