import React from 'react';
import styles from './UserList.module.css';
import { Lock, Trash2 } from 'react-feather';
import { useDispatch } from 'react-redux';
import { onMouseHover, offMouseHover, activateUser } from '../../redux/action';

const UserList = (props) => {
  console.log(props);
  const dispatch = useDispatch();
  return (
    <div className={styles['list']}>
      <div className={styles['profile-column']}>
        <img
          src={props.profileImage}
          alt='Profile Pic'
          className={styles['image']}
          onMouseEnter={() => dispatch(onMouseHover(props.id))}
          // onMouseLeave={() => dispatch(offMouseHover())}
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
          <p style={{ color: '#2daf7f', fontWeight: '600', marginLeft: '-5px' }}>
            Active
          </p>
        ) : (
          <div className={styles['select-div']}>
            <select onChange={() => dispatch(activateUser(props.id))}>
              <option>Inactive</option>
              <option>Active</option>
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
