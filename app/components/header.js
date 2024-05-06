import React from "react";
import Image from "next/image";
import styles from "@/app/components/header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Image src="/images/logo.png" width={64} height={64} alt="coffee logo" />
      <h1>The Colombiana Brew</h1>
    </header>
  );
};

export default Header;
