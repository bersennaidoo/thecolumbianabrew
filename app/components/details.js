import PropTypes from "prop-types";
import { itemImages } from "@/app/lib/items";
import ItemType from "@/app/lib/types/item";
import Thumbnail from "@/app/components/thumbnail";
import styles from "@/app/components/details.module.css";

function Details({ items, children }) {
  return (
    <div className={styles.details}>
      <div>{children}</div>
      <div className={styles.detailsidebar}>
        {items.map((item) => (
          <Thumbnail
            key={item.item_id}
            image={itemImages[item.image_id]}
            title={item.title}
            itemId={item.item_id}
          />
        ))}
      </div>
    </div>
  );
}

Details.propTypes = {
  items: PropTypes.arrayOf(ItemType).isRequired,
};

export default Details;
