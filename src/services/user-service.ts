import clientPromise from "@/lib/mongodb";
import bcrypt from 'bcrypt';
import { adminData, parentData, doctorData, superAdminData } from "@/lib/data";

const getDb = async () => {
    const client = await clientPromise;
    return client.db();
};

const getUsersCollection = async () => {
    const db = await getDb();
    return db.collection("users");
};

export const findUserByEmail = async (email: string) => {
    const usersCollection = await getUsersCollection();
    return await usersCollection.findOne({ email });
};

export const seedUsers = async () => {
  const usersCollection = await getUsersCollection();
  const userCount = await usersCollection.countDocuments();

  if (userCount > 0) {
    return; // Users already seeded
  }

  console.log('No users found. Seeding database...');

  const usersToSeed = [
    { email: 'parent@babyaura.com', role: 'Parent', name: "Parent's Name" },
    { email: 'doctor@babyaura.com', role: 'Doctor', name: "Dr. Emily Carter" },
    { email: 'admin@babyaura.com', role: 'Admin', name: 'Admin User' },
    { email: 'superadmin@babyaura.com', role: 'Superadmin', name: 'Super Admin' },
  ];

  const saltRounds = 10;
  const password = 'password';
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const userDocuments = usersToSeed.map(user => ({
    ...user,
    password: hashedPassword,
    createdAt: new Date(),
  }));

  await usersCollection.insertMany(userDocuments);
  console.log('Database seeded with initial users.');
};
