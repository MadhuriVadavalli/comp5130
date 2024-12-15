import { useState, useEffect } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://localhost:5000/api/users');  // API endpoint to fetch users
        const data = await response.json();
        setUsers(data);  // Set users data into state
        setLoading(false);  // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);  // Empty dependency array ensures the effect runs only once on mount

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center', fontWeight: 'bold', textTransform: 'uppercase' }}>Users List</h1>
      <table style={{ width: '80%', margin: '0 auto', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ textAlign: 'center' }}>
            <th style={{ fontWeight: 'bold', textTransform: 'uppercase', padding: '10px', border: '1px solid #ddd' }}>User ID</th>
            <th style={{ fontWeight: 'bold', textTransform: 'uppercase', padding: '10px', border: '1px solid #ddd' }}>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.uid} style={{ textAlign: 'center' }}>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>{user.uid}</td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
