import React from 'react';
import styles from './HoverCard.module.css';

const HoverCard = () => {
  return (
    <div className={styles['hovercard-container']}>
      <div className={styles['hovercard-inner']}>
        <div className={styles['card-data']}>
          <img
            src='https://reqres.in/img/faces/5-image.jpg'
            alt='user-profile'
            className={styles['user-image']}
          />
          <div className={styles['active']}>
            <h3>Leon Hunt</h3>
          </div>
          <p>ullrich.owen@kristin.biz</p>
          <h4>Your Plan: Standard</h4>
          <button className={styles['active-user-button']}>Active User</button>
        </div>
        <div className={styles['card-uses']}>
          <p>Plan Uses</p>
          <meter value={0.6}></meter>
        </div>
        <div className={styles['card-clicks']}>
          <div className={styles['left-clicks']}>
            <h2>2,450</h2>
            <p>clicks reviewed</p>
          </div>
          <div className={styles['seperate-clicks']}></div>
          <div className={styles['right-clicks']}>
            <h2>5000</h2>
            <p>Monthly clicks</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
