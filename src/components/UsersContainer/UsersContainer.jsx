import React from 'react';
import styles from './UsersContainer.module.css';
import { useSelector } from 'react-redux';
import UserList from '../UserList/UserList';

const UsersContainer = () => {
  const users = useSelector((state) => state.users);
  console.log(users);
  return (
    <div className={styles['content-container']}>
      <div className={styles['inner-content-container']}>
        <div className={styles['content-heading']}>
          <div>Name</div>
          <div>Status</div>
          <div>Access</div>
        </div>
        {users.map((user) => (
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
        ))}
      </div>
    </div>
  );
};

export default UsersContainer;
