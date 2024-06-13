"use server";
import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "../auth";
import { isRedirectError } from "next/dist/client/components/redirect";

//add a user
export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    await connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });
    await newUser.save();
  } catch (err) {
    console.error("detailed", err);
    throw new Error("Failed to create user!");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};
//add a product

export const addProduct = async (formData) => {
  const { title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    await connectToDB();
    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
      color,
      size,
    });
    await newProduct.save();
  } catch (err) {
    console.error("detailed", err);
    throw new Error("Failed to create user!");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

//delete a product

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    await connectToDB();
    await Product.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete Product!");
  }
  revalidatePath("/dashboard/products");
};

//delete a user

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    await connectToDB();
    await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }
  revalidatePath("/dashboard/products");
};

//update a user
export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    await connectToDB();

    const updateFeilds = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updateFeilds).forEach(
      (key) =>
        (updateFeilds[key] === "" || undefined) && delete updateFeilds[key]
    );
    await User.findByIdAndUpdate(id, updateFeilds);
  } catch (err) {
    console.error("detailed", err);
    throw new Error("Failed to update user!");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

//update a product
export const updateProduct = async (formData) => {
  const { id, title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    await connectToDB();

    const updateFeilds = {
      title,
      desc,
      price,
      stock,
      color,
      size,
    };

    Object.keys(updateFeilds).forEach(
      (key) =>
        (updateFeilds[key] === "" || undefined) && delete updateFeilds[key]
    );
    await Product.findByIdAndUpdate(id, updateFeilds);
  } catch (err) {
    console.error("detailed", err);
    throw new Error("Failed to update product!");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

// export const authenticate = async (prevState, formData) => {
//   const { username, password } = Object.fromEntries(formData);

//   try {
//     await signIn("credentials", { username, password });
//   } catch (error) {
//     if (error.message.includes("CredentialsSignin")) {
//       return "wrong Crendetials";
//     }
//     throw error;
//   }
// };

export const authenticate = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password, redirect: false });
  } catch (error) {
    if (error.message.includes("CredentialsSignin")) {
      return "wrong Crendetials";
    }
    throw error;
  }
  redirect("/dashboard"); //manually redirect
};
