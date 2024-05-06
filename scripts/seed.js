const { db } = require("@vercel/postgres");
const { items, orders } = require("@/app/lib/data/placeholder-data.js");

async function seedItems(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS items (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        item_id VARCHAR(255),
        image_id VARCHAR(255),
        title  VARCHAR(255),
        price DECIMAL(12,2),
        description VARCHAR(255),
        sale_price DECIMAL(12,2),
      );
    `;

    console.log(`Created "items" table`);

    // Insert data into the "items" table
    const insertedItems = await Promise.all(
      items.map(async (item) => {
        return client.sql`
        INSERT INTO users (item_id, image_id, title, price, description, sale_price)
        VALUES (${item.item_id}, ${item.image_id}, ${item.title}, ${item.price}, ${item.description}, ${item.sale_price})
        ON CONFLICT (id) DO NOTHING;
      `;
      })
    );

    console.log(`Seeded ${insertedItems.length} items`);

    return {
      createTable,
      items: insertedItems,
    };
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}

async function seedOrders(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "orders" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS orders (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255),
    phone VARCHAR(255),
    zip_code VARCHAR(255),
    item_id VARCHAR(255),
  );
`;

    console.log(`Created "orders" table`);

    // Insert data into the "orders" table
    const insertedOrders = await Promise.all(
      orders.map(
        (order) => client.sql`
        INSERT INTO orders (name, phone, zip_code)
        VALUES (${order.name}, ${order.phone}, ${order.zip_code})
        ON CONFLICT (id) DO NOTHING;
      `
      )
    );

    console.log(`Seeded ${insertedOrders.length} orders`);

    return {
      createTable,
      orders: insertedOrders,
    };
  } catch (error) {
    console.error("Error seeding orders:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedItems(client);
  await seedOrders(client);
  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
