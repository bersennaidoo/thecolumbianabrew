import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/components/header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="/images/logo.svg"
          width={64}
          height={64}
          alt="coffee logo"
        />
      </Link>
      <h1>The Colombiana Brew</h1>
    </header>
  );
};

export default Header;
