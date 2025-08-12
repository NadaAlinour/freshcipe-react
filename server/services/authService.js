import prisma from "../prisma.js";
import bcrypt from "bcryptjs";

export async function createUser(userData) {

  try {
    // hash password
    const passwordHashed = await bcrypt.hash(userData.password, 10);

    const data = {
      data: {
        ...userData,
        password: passwordHashed,
      },
    };

    console.log(data);

    const response = await prisma.user.create(data);

    return response;
  } catch (error) {
    console.error(error);
  }
}

