import React, { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const usernameChangeHundler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHundler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHundler = (event) => {
    event.preventDefault(); // prevent page refresh

    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (a non empty values)",
      });
      return;
    }

    if (+enteredAge < 0) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age ( > 0 )",
      });
      return;
    }

    const userData = {
      name: enteredUserName,
      age: enteredAge,
    };

    props.onSaveUser(userData);
    setEnteredUserName("");
    setEnteredAge("");
  };

  const errorHundler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHundler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHundler}>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={enteredUserName}
            onChange={usernameChangeHundler}
          />
          <label htmlFor="age">Age (In Years):</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHundler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
