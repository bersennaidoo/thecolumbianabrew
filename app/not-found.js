import Link from "next/link";
import styles from "@/app/not-found.module.css";

function NotFoundPage() {
  return (
    <div className={styles.notfound}>
      <h2>Page Not Found</h2>
      <Link href="/">Return Home</Link>
    </div>
  )
}

export default NotFoundPage;
