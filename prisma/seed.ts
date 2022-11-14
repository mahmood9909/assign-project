import { Prisma, PrismaClient } from '@prisma/client';
import { isDataView } from 'util/types';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

const emp: Array<{ name: string; username: string; email: string }> = [
  {
    name: 'Fatima',
    username: 'Fatima123',
    email: 'fatimamhammed1998@gmail.com',
  },
  {
    name: 'mahmood',
    username: 'mahmood123',
    email: 'mahmood909@gmail.com',
  },
  {
    name: 'Abbas',
    username: 'Abbas123',
    email: 'Abbas@gmail.com',
  },
];

const managerList: Array<{
  name: string;
  username: string;
  email: string;
  employee: { name: string; username: string; email: string }[];
}> = [
  {
    name: 'hussain',
    username: 'hussain@',
    email: 'hussain@gmail.com',
    employee: emp,
  },
];

const hrList: Array<{
  name: string;
  email: string;
  username: string;
}> = [
  {
    name: 'fatema Moahmmed',
    email: 'fatema.m2906@gmail.com',
    username: 'fatema.m2906',
  },
  {
    name: 'fatima Maki',
    email: 'fatima__8@outlook.com',
    username: 'fatima__8',
  },
];

async function pushStaffList() {
  managerList.forEach(async (man) => {
    await prisma.manager.create({
      data: {
        name: man.name,
        email: man.email,
        username: man.username,
        employee: {
          create: man.employee.map((emp) => ({
            ...emp,
          })),
        },
      },
    });
  });
}

async function pushHRStaffList() {
  hrList.forEach(async (emp) => {
    await prisma.hR.create({
      data: {
        email: emp.email,
        username: emp.username,
        name: emp.name,
      },
    });
  });
}

async function pushDummyLeaves() {
  const date = new Date();
  await prisma.leavesRequests.create({
    data: {
      leaveId: uuidv4(),
      startOn: date,
      endsOn: date,
      status: 'PENDING',
    },
  });
}

async function main() {
  console.log('start seeding ...');
  await pushStaffList();
  // await pushDummyLeaves();
  // await pushHRStaffList();
  console.log('end seeding.');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
