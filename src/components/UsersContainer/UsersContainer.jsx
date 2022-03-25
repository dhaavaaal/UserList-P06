import React, { useEffect, useState } from "react";
import styles from "./UsersContainer.module.css";
import { useDispatch, useSelector } from "react-redux";
import UserList from "../UserList/UserList";
import { fetchUsers } from "../../redux/fetchuser/fetchUserAction";
import Pagination from "../Pagination/Pagination";

const UsersContainer = () => {
  const userData = useSelector((state) => state);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchUsers(currentPage));
    console.log(currentPage);
  }, [currentPage]);
  console.log(userData);

  const paginate = (pageNumber) => {
    const current = pageNumber;
    setCurrentPage(current);
  };

  return (
    <div className={styles["content-container"]}>
      <div className={styles["inner-content-container"]}>
        <div className={styles["content-heading"]}>
          <div className={styles["font-heading"]}>Name</div>
          <div className={styles["font-heading"]}>Status</div>
          <div className={styles["font-heading"]}>Access</div>
        </div>
        {userData.loading ? (
          <h2>Loading...</h2>
        ) : userData.error ? (
          <h2>{userData.error}</h2>
        ) : (
          userData.users.data.map((user) => (
            <UserList
              key={user.id}
              id={user.id}
              email={user.email}
              firstName={user.first_name}
              lastName={user.last_name}
              profileImage={user.avatar}
              isActive={user.isActive}
              isOwner={user.isOwner}
            />
          ))
        )}
      </div>
      <Pagination paginate={paginate} currentPage={currentPage} />
    </div>
  );
};

export default UsersContainer;
