import React from "react";
import { useSelector } from "react-redux";
import styles from "./HoverCard.module.css";

const HoverCard = () => {
  const userData = useSelector((state) => state);
  const id = useSelector((state) => state.userId);
  const user = userData.users.data
    ? userData.users.data.find((user) => user.id === id)
    : [];
  if (typeof id !== "number") {
    return (
      <div className={styles["hovercard-container"]}>
        <div className={styles["hovercard-hover"]}>
          <p>Please hover on the user to view profile details</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles["hovercard-container"]}>
        <div className={styles["hovercard-inner"]}>
          <div className={styles["card-data"]}>
            <img
              src={user.avatar}
              alt="user-profile"
              className={styles["user-image"]}
            />
            <div className={styles["active"]}>
              <h3>
                {" "}
                {user.id === 1 ? (
                  <div className={styles["active-dot-div"]}>
                    {user.first_name} {user.last_name}
                    <div className={styles["active-dot"]}></div>
                  </div>
                ) : (
                  `${user.first_name} ${user.last_name}`
                )}
              </h3>
            </div>
            <p>{user.email}</p>
            <h4>Your Plan: Standard</h4>
            <button className={styles["active-user-button"]}>
              {user.isActive ? `Inactive User` : `Active User`}
            </button>
          </div>
          <div className={styles["card-uses"]}>
            <p>Plan Uses</p>
            <meter value={0.6}></meter>
          </div>
          <div className={styles["card-clicks"]}>
            <div className={styles["left-clicks"]}>
              <h2>2,450</h2>
              <p>clicks reviewed</p>
            </div>
            <div className={styles["seperate-clicks"]}></div>
            <div className={styles["right-clicks"]}>
              <h2>5000</h2>
              <p>Monthly clicks</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default HoverCard;
