import { createContext, useState, useContext, useEffect } from "react";

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
      console.log(data.results);

      setUsers(data.results);
    } catch (err) {
      console.error(err.message);
    }
  }
  useEffect(() => {
    fetchUsers();
  }, []);
  return <UserContext.Provider value={[users, setUsers]} {...props} />;
}

function useUsers() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("Not inside the UserProvider");
  }

  return context;
}

export { UserProvider, useUsers };
