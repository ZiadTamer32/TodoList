// import { PrismaClient } from "@prisma/client";
// import { faker } from "@faker-js/faker";

// const prisma = new PrismaClient();

// async function main() {
//   // Generate 25 random todos
//   await prisma.todo.createMany({
//     data: Array.from({ length: 25 }, () => ({
//       title: faker.lorem.sentence(),
//       body: faker.lorem.paragraph(),
//     })),
//   });
//   // Generate 25 random users
//   // await prisma.user.createMany({
//   //   data: Array.from({ length: 25 }, () => ({
//   //     name: faker.internet.username(),
//   //     email: faker.internet.email(),
//   //     address: {
//   //       street: faker.location.streetAddress(),
//   //       city: faker.location.city(),
//   //       state: faker.location.state(),
//   //       zip: faker.location.zipCode(),
//   //     },
//   //   })),
//   // });
// }

// main()
//   .catch(async (e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
