import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers, deleteUser } from '../../store/usersSlice';
import mapUsers from './mapUsers';

const UsersList = () => {
  const { users, error, isPending } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers({ page: 1, amount: 3 })); //effect request users
    //eslint-disable-next-line
  }, []); //[] - one time

  const handleDelete = (id) => () => {
    dispatch(deleteUser(id));
  };
  return (
    <>
      {error && <p>{error}</p>}
      {isPending && <p>Loading....</p>}
      {!error && !isPending && users.length === 0 ? (
        <p>users list empty</p>
      ) : (
        <ol>{users.map((user) => mapUsers(user, handleDelete))}</ol>
      )}
    </>
  );
};

export default UsersList;
