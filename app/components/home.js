import PropTypes from "prop-types";
import styles from "@/app/components/home.module.css";
import Thumbnail from "@/app/components/thumbnail";
import { itemImages } from "@/app/lib/items";
import React from "react";

const Home = ({ items }) => {
  return (
    <div className={styles.home}>
      {items.map((item) => (
        <Thumbnail
          key={item.itemId}
          image={itemImages[item.imageId]}
          title={item.title}
        />
      ))}
    </div>
  );
};

Home.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      itemId: PropTypes.string.isRequired,
      imageId: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string,
      salesPrice: PropTypes.number,
    })
  ).isRequired,
};

export default Home;
