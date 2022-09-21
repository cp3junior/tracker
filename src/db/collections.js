import { collection, doc, getDocs } from "firebase/firestore";
import { getDataFromSnapshot } from "../lib/functions";
import { db } from "./firebase";

export const usersCollection = collection(db, "users");
export const categoriesCollection = collection(db, "categories");
export const billsCollection = collection(db, "bills");
export const whishlistsCollection = collection(db, "whishlists");

// !getters
export const getUserRef = async (id) => {
  return await doc(db, "users", id);
};

export const getWhishlists = async () => {
  const whishlistSnapshot = await getDocs(whishlistsCollection);
  if (!whishlistSnapshot.empty) {
    return getDataFromSnapshot(whishlistSnapshot);
  }
  return [];
};
export const getWhishlistRef = async (id) => {
  return await doc(db, "whishlists", id);
};

export const getBills = async () => {
  const billsSnapshot = await getDocs(billsCollection);
  if (!billsSnapshot.empty) {
    return getDataFromSnapshot(billsSnapshot);
  }
  return [];
};
export const getBillRef = async (id) => {
  return await doc(db, "bills", id);
};
