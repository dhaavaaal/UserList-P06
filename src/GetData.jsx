import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from './redux/fetchuser/fetchUserAction';

const GetData = ({ userData, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, []);
  console.log(fetchUsers);
  console.log(userData);
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map((user) => <p>{user.name}</p>)}
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     userData: state.users,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchUsers: () => dispatch(fetchUsers()),
//   };
// };
// connect(mapStateToProps, mapDispatchToProps);
export default GetData;
