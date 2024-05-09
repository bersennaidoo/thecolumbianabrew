import DetailItem from "@/app/components/detailitem";
//import { items } from "@/app/lib/items";
import { fetchItems } from "@/app/lib/data/repo";

export default async function DetailItemPage({ params }) {
  //const items = await fetchItems();
  return (
    <div>
      <DetailItem params={params}/>
    </div>
  );
}