import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchRequest,
  fetchRequestFailure,
  fetchRequestSuccess,
} from '../redux/user/userActions';

export const UserContainer = () => {
  const userState = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const fetchUsersData = () => {
    return async function get() {
      dispatch(fetchRequest());
      try {
        let res = await axios.get('https://jsonplaceholder.typicode.com/users');

        const user = res.data;
        dispatch(fetchRequestSuccess(user));
      } catch (error) {
        dispatch(fetchRequestFailure(error.message));
      }
    };
  };

  return userState.loading ? (
    <h1>Loading...</h1>
  ) : userState.error ? (
    <h1>{userState.error}</h1>
  ) : (
    <div>
      <h2>User List</h2>
      <button
        onClick={() => {
          fetchUsersData()();
        }}
      >
        Fetch Users
      </button>
      <div>
        {userState.data &&
          userState.data.map((el) => {
            return <h2 key={el.id}>{el.name}</h2>;
          })}
      </div>
    </div>
  );
};
