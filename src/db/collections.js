import {
  collection,
  doc,
  getDocs,
  query,
  orderBy,
  limit,
  where,
  setDoc,
  getDoc,
} from "firebase/firestore";
import moment from "moment";
import { getDataFromSnapshot } from "../lib/functions";
import { db } from "./firebase";

export const usersCollection = collection(db, "users");
export const categoriesCollection = collection(db, "categories");
export const billsCollection = collection(db, "bills");
export const whishlistsCollection = collection(db, "whishlists");
export const transactionsCollection = collection(db, "transactions");
export const balanceCollection = collection(db, "balance");

// !setter - special

export const initBalance = async () => {
  await setDoc(doc(db, "balance", "balancevola"), {
    price: "0",
    oldPrice: "0",
  });
};

// !getters
export const getBalanceRef = async () => {
  return await doc(db, "balance", "balancevola");
};
export const getBalance = async () => {
  const balanceRef = await getBalanceRef();
  const docSnap = await getDoc(balanceRef);

  if (docSnap.exists()) {
    return docSnap.data();
  }
  return null;
};

export const getUserRef = async (id) => {
  return await doc(db, "users", id);
};

export const getWhishlists = async () => {
  const q = query(whishlistsCollection, orderBy("date", "asc"));
  const whishlistSnapshot = await getDocs(q);
  if (!whishlistSnapshot.empty) {
    return getDataFromSnapshot(whishlistSnapshot);
  }
  return [];
};
export const getWhishlistRef = async (id) => {
  return await doc(db, "whishlists", id);
};

export const getTransactionRef = async (id) => {
  return await doc(db, "transactions", id);
};

export const getTransactionsMonth = async () => {
  const today = new Date();
  const month = moment(today).get("month") + 1;
  let year = moment(today).get("year");

  let nextMonth = month + 1;

  if (nextMonth === 13) {
    nextMonth = 1;
    year = year + 1;
  }

  const start = new Date(`${month} 01 ${year}`);
  const end = new Date(`${nextMonth} 01 ${year}`);

  const q = query(
    transactionsCollection,
    where("date", ">", start),
    where("date", "<", end),
    orderBy("date", "desc")
  );
  const transactionSnapshot = await getDocs(q);
  if (!transactionSnapshot.empty) {
    return getDataFromSnapshot(transactionSnapshot);
  }
  return [];
};
export const getTransactionsPage = async (order = "desc") => {
  const q = query(transactionsCollection, orderBy("date", order), limit(30));
  const transactionSnapshot = await getDocs(q);
  if (!transactionSnapshot.empty) {
    return getDataFromSnapshot(transactionSnapshot);
  }
  return [];
};
export const getTransactionsHome = async () => {
  const q = query(transactionsCollection, orderBy("date", "desc"), limit(10));
  const transactionSnapshot = await getDocs(q);
  if (!transactionSnapshot.empty) {
    return getDataFromSnapshot(transactionSnapshot);
  }
  return [];
};

export const getBills = async () => {
  const q = query(billsCollection, orderBy("date", "asc"));
  const billsSnapshot = await getDocs(q);
  if (!billsSnapshot.empty) {
    return getDataFromSnapshot(billsSnapshot);
  }
  return [];
};
export const getBillRef = async (id) => {
  return await doc(db, "bills", id);
};
