import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/action';
import { Link } from 'react-router-dom';
import { Box, Text, Spinner } from '@chakra-ui/react'

const HomePage = () => {
  const dispatch = useDispatch();
  const { loading, users, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <><p>Loading...</p> <Spinner color='red.500'/></> ;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Box  bg='teal' w='40%' p={12} margin="auto" color='white'>
      <ol>
        <Text fontSize={29}><b>User List</b></Text>
        {users.map((user) => (
          <Box border="2px solid grey" p={10} fontSize={20}>
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
          </Box>
        ))}
      </ol>
      </Box>
    </div>
  );
};

export default HomePage;