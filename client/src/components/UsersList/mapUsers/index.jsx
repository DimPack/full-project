
import { Link } from 'react-router-dom';
const mapUsers = (user, handleDelete) => {
    return (
    <li key={user.id}>
      <Link to={`/users/${user.id}`}>{user.email}</Link>
      <button onClick={handleDelete(user.id)}>delete</button>
    </li>
    );
}

export default mapUsers;
