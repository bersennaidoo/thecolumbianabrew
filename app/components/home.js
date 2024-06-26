import PropTypes from "prop-types";
import styles from "@/app/components/home.module.css";
import Thumbnail from "@/app/components/thumbnail";
import { itemImages } from "@/app/lib/items";
import ItemType from "@/app/lib/types/item";
import React from "react";

const Home = ({ items }) => {
  return (
    <div className={styles.home}>
      {items.map((item) => (
        <Thumbnail
          key={item.item_id}
          image={itemImages[item.image_id]}
          title={item.title}
          itemId={item.item_id}
        />
      ))}
    </div>
  );
};

Home.propTypes = {
  items: PropTypes.arrayOf(ItemType).isRequired,
};

export default Home;
