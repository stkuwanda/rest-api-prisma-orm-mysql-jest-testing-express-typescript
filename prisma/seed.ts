import { faker } from '@faker-js/faker';
import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();

function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

const userIds = [
  '234e4567-e89b-12d3-a456-426614174000',
  '0c4e4567-e89b-12d3-a456-426614174001',
  '1a4e4567-e89b-12d3-a456-426614174002',
  '2b4e4567-e89b-12d3-a456-426614174003',
  '3c4e4567-e89b-12d3-a456-426614174004',
];

async function main() {
  for (const userId of userIds) {
    const createdProject = await prisma.project.create({
      data: {
        user_id: userId,
        name: `${capitalize(faker.word.noun())}`,
      },
    });

    for (let i = 1; i <= 2; i++) {
      await prisma.task.create({
        data: {
          user_id: userId,
          project_id: i % 2 === 0 ? createdProject.id : null,
          name: `${capitalize(faker.word.verb())} ${capitalize(faker.word.noun())}`,
          description: faker.lorem.sentence(),
          due_date: faker.date.future(),
        },
      });
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
