import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/app/components/header";
import Home from "@/app/components/home";
//import { items } from "@/app/lib/items";
import { fetchItems } from "@/app/lib/data/repo";

export default async function LandingPage() {
  const items = await fetchItems();
  return (
    <div className={styles.container}>
      <Header />
      <Home items={items} />
    </div>
  );
}
