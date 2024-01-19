import { useState } from "react";
import AddUser from "./Components/AddUser";
import UserList from "./Components/UserList";

function App() {
  const [usersList, setUserList] = useState([]);
  const saveUserHundler = (userData) => {
    setUserList((prevUserList) => {
      return [...prevUserList, userData];
    });
  };
  return (
    <div>
      <AddUser onSaveUser={saveUserHundler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
