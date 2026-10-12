import { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserContext = createContext();

function UserProvider(props) {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    try {
      const resp = await fetch("https://randomuser.me/api/?results=10");

      if (!resp.ok) {
        throw new Error(resp.statusText);
      }

      const data = await resp.json();

      setUsers(data.results);

      await AsyncStorage.setItem("users", JSON.stringify(data.results));
    } catch (err) {
      console.error(err.message);
    }
  }

  async function fetchOneUser() {
    try {
      const resp = await fetch("https://randomuser.me/api/?results=1");

      if (!resp.ok) {
        throw new Error(resp.statusText);
      }

      const data = await resp.json();
      const newUser = data.results[0];

      const updatedUsers = [newUser, ...users];

      setUsers(updatedUsers);

      await AsyncStorage.setItem("users", JSON.stringify(updatedUsers));
    } catch (err) {
      console.error(err.message);
    }
  }

  async function deleteUser(userId) {
    const updatedUsers = users.filter((user) => user.login.uuid !== userId);

    setUsers(updatedUsers);

    await AsyncStorage.setItem("users", JSON.stringify(updatedUsers));
  }

  async function clearUsers() {
    setUsers([]);

    await AsyncStorage.setItem("users", JSON.stringify([]));
  }

  useEffect(() => {
    AsyncStorage.getItem("users").then((list) => {
      if (list === null) {
        fetchUsers();
      } else {
        setUsers(JSON.parse(list));
      }
    });
  }, []);

  return (
    <UserContext.Provider
      value={[users, fetchOneUser, fetchUsers, deleteUser, clearUsers]}
      {...props}
    />
  );
}

function useUsers() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("Not inside the UserProvider");
  }

  return context;
}

export { UserProvider, useUsers };
