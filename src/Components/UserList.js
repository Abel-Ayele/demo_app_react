import Card from "../UI/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.username}
            ({user.age} Years Old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;