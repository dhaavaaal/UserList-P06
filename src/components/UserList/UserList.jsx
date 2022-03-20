import React from 'react';
import styles from './UserList.module.css';
import { Lock, Trash2 } from 'react-feather';

const UserList = (props) => {
  console.log(props);

  return (
    <div className={styles['list']}>
      <div className={styles['profile-column']}>
        <img
          src={props.profileImage}
          alt='Profile Pic'
          className={styles['image']}
        />
        <div className={styles['name-email']}>
          <p className={styles['name']}>
            {props.firstName} {props.lastName}
          </p>
          <p className={styles['email']}>{props.email}</p>
        </div>
      </div>
      <div className={styles['status']}>
        {props.isActive ? (
          <p style={{ color: 'green', fontWeight: '600', marginLeft: '-5px' }}>
            Active
          </p>
        ) : (
          <div className={styles['select-div']}>
            <select>
              <option>Active</option>
              <option selected>Inactive</option>
            </select>
          </div>
        )}
      </div>
      <div className={styles['status']}>
        {props.isOwner ? (
          <p style={{ color: 'black', fontWeight: '600', marginLeft: '-5px' }}>
            Owner
          </p>
        ) : (
          <div className={styles['select-div']}>
            <select>
              <option>Manager</option>
              <option>Read</option>
            </select>
          </div>
        )}
      </div>
      <div className={styles['lock-remove']}>
        {props.isOwner ? <Lock /> : <Trash2 />}
      </div>
    </div>
  );
};

export default UserList;
