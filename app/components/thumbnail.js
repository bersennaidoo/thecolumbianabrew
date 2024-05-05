import React from "react";
import PropTypes from "prop-types";
import styles from "@/app/components/thumbnail.module.css";

const Thumbnail = ({ image, title }) => {
  return (
    <a href="#todo" className={styles.thumbnail}>
      <div>
        <img src={image} alt={title} />
      </div>
      <p>{title}</p>
    </a>
  );
};

Thumbnail.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Thumbnail;
