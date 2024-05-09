import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import styles from "@/app/components/thumbnail.module.css";

const Thumbnail = ({ itemId, image, title }) => {
  return (
    <Link href={`/details/${itemId}`} className={styles.thumbnail}>
      <div>
        <img src={image} alt={title} />
      </div>
      <p>{title}</p>
    </Link>
  );
};

Thumbnail.propTypes = {
  itemId: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Thumbnail;
