import Details from "@/app/components/details";
//import { items } from "@/app/lib/items";
import { fetchItems } from "@/app/lib/data/repo";

export default async function Layout({ children }) {
  const items = await fetchItems();
  return (
    <div>
      <Details items={items}>{children}</Details>
    </div>
  );
}
