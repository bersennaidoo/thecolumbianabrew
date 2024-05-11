import { sql } from "@vercel/postgres";

export async function fetchItems() {
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).

  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    // console.log('Fetching revenue data...');
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = (await sql)`SELECT * FROM items`;

    // console.log('Data fetch completed after 3 seconds.');

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch items data.");
  }
}

export async function fetchItemById(id) {
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).

  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    // console.log('Fetching revenue data...');
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const item = await sql`SELECT * FROM items WHERE image_id=${id}`;

    // console.log('Data fetch completed after 3 seconds.');

    return item.rows[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch item by id data.");
  }
}
