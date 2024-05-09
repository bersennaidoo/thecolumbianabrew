import PropTypes from "prop-types";
import { itemImages } from "@/app/lib/items";
import ItemType from "@/app/lib/types/item";
import Thumbnail from "@/app/components/thumbnail";
import styles from "@/app/components/details.module.css";

function DetailItem({ params }) {
  const id = params.id;

  return <div>{id}</div>;
}

export default DetailItem;
