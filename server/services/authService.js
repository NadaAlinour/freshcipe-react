import prisma from "../prisma.js";
import bcrypt from "bcryptjs";

async function createUser(userData) {
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

async function getUser(userData) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: userData.email,
      },
    });

    return user;

  } catch (err) {
    console.log(err);
  }

}

async function getUserById(id) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });

    return user;

  } catch (err) {
    console.log(err);
  }
}

export { createUser, getUser, getUserById };
