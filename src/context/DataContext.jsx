import { createContext, useState, useEffect } from "react";
import { getDocs } from "firebase/firestore";
import { categoriesCollection, usersCollection } from "../db/collections";
import { getDataFromSnapshot } from "../lib/functions";
import { CATEGORIES_KEY, USERS_KEY } from "../lib/constants";

const DataContext = createContext({});

export const DataContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [whishlists, setWhishlists] = useState([]);
  const [bills, setBills] = useState([]);
  const [appLoading, setAppLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersSnapshot = await getDocs(usersCollection);
      if (!usersSnapshot.empty) {
        const usersData = getDataFromSnapshot(usersSnapshot);
        setUsers(usersData);
        window.localStorage.setItem(USERS_KEY, JSON.stringify(usersData));
      } else {
        window.localStorage.setItem(USERS_KEY, null);
      }
    };

    const fetchCategories = async () => {
      const categoriesSnapshot = await getDocs(categoriesCollection);
      if (!categoriesSnapshot.empty) {
        const categoriesData = getDataFromSnapshot(categoriesSnapshot);
        setCategories(categoriesData);
        window.localStorage.setItem(
          CATEGORIES_KEY,
          JSON.stringify(categoriesData)
        );
      } else {
        window.localStorage.setItem(CATEGORIES_KEY, null);
      }
    };

    setAppLoading(true);

    if (users.length === 0) {
      const localUsersString = window.localStorage.getItem(USERS_KEY);

      try {
        const localUsers = JSON.parse(localUsersString);
        if (localUsers) {
          setUsers(localUsers);
        } else {
          fetchUsers();
        }
      } catch {
        fetchUsers();
      }
    }
    if (categories.length === 0) {
      const localCategoriesString = window.localStorage.getItem(CATEGORIES_KEY);

      try {
        const localCategories = JSON.parse(localCategoriesString);
        if (localCategories) {
          setCategories(localCategories);
        } else {
          fetchCategories();
        }
      } catch {
        fetchCategories();
      }
    }
    setAppLoading(false);
  }, [users, categories]);

  // !Adders
  const addUser = (user) => {
    const newUsers = [...users, user];
    setUsers(newUsers);
    window.localStorage.setItem(USERS_KEY, JSON.stringify(newUsers));
  };
  const addCategory = (category) => {
    const newCategories = [...categories, category];
    setCategories(newCategories);
    window.localStorage.setItem(CATEGORIES_KEY, JSON.stringify(newCategories));
  };

  // !Removers
  const removeUser = (userId) => {
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
    window.localStorage.setItem(USERS_KEY, JSON.stringify(newUsers));
  };
  const removeCategory = (categoryId) => {
    const newCategories = categories.filter(
      (category) => category.id !== categoryId
    );
    setCategories(newCategories);
    window.localStorage.setItem(CATEGORIES_KEY, JSON.stringify(newCategories));
  };

  // !Editors
  const editUser = (userData) => {
    const newUsers = users.map((user) => {
      if (user.id === userData.id) return { ...user, ...userData };
      return user;
    });
    setUsers(newUsers);
    window.localStorage.setItem(USERS_KEY, JSON.stringify(newUsers));
  };
  const editCategory = (categoryData) => {
    const newCategories = categories.map((category) => {
      if (category.id === categoryData.id)
        return { ...category, ...categoryData };
      return category;
    });
    setCategories(newCategories);
    window.localStorage.setItem(CATEGORIES_KEY, JSON.stringify(newCategories));
  };

  // !Data updaters
  const updateWhishlists = (newWishlist) => {
    setWhishlists(newWishlist);
  };
  const updateBills = (newBills) => {
    setBills(newBills);
  };

  return (
    <DataContext.Provider
      value={{
        bills,
        whishlists,
        users,
        categories,
        addUser,
        addCategory,
        removeUser,
        removeCategory,
        editUser,
        editCategory,
        appLoading,
        updateWhishlists,
        updateBills,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
