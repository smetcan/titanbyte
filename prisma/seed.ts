import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const email = "admin@titanbyte.com";
  const password = "admin123";
  const hashedPassword = await bcrypt.hash(password, 10);

  const admin = await prisma.adminUser.upsert({
    where: { email },
    update: {},
    create: {
      email,
      name: "Admin",
      password: hashedPassword,
    },
  });

  console.log("Admin kullanıcı oluşturuldu:");
  console.log("Email:", email);
  console.log("Şifre:", password);
  console.log("ID:", admin.id);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
