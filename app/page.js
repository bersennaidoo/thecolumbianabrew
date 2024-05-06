import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/app/components/header";
import Home from "@/app/components/home";
import { items } from "@/app/lib/items";

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <Header />
      <Home items={items} />
    </div>
  );
}
