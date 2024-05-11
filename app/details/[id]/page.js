import DetailItem from "@/app/components/detailitem";
//import { items } from "@/app/lib/items";
import { fetchItemById } from "@/app/lib/data/repo";

export default async function DetailItemPage({ params }) {
  const item = await fetchItemById(params.id);
  console.log(item)
  return (
    <div>
      <DetailItem item={item} />
    </div>
  );
}
