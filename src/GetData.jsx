import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "./redux/fetchuser/fetchUserAction";

const GetData = ({ userData, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, []);
  // console.log(fetchUsers);
  console.log(userData);
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      {/* <div>
        {userData &&
          userData.map((user) => <p>{user.name}</p>)}
      </div> */}
      <div>
        {userData &&
          userData.data &&
          userData.data.map((user) => <p>{user.first_name}</p>)}
      </div>
    </div>
  );
  // console.log(userData[0].name);
};
// console.log(userData)
const mapStateToProps = (state) => {
  return {
    userData: state.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(GetData);
// export default GetData;
