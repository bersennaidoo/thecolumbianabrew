import PropTypes from "prop-types";
import { itemImages } from "@/app/lib/items";
import ItemType from "@/app/lib/types/item";
import styles from "@/app/components/detailitem.module.css";

function DetailItem({ item }) {
  return (
    <div className={styles.detailitem}>
      <img
        className={styles.detailimage}
        src={itemImages[item.item_id]}
        alt={item.title}
      />
      <h2>{item.title}</h2>
      <div>
        $
        {item.price}
      </div>
    </div>
  );
}

export default DetailItem;
