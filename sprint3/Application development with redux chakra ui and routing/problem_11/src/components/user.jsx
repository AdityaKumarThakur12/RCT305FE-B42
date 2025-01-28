import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchUsers } from '../redux/action';
import { Card, Box, Text, Button } from '@chakra-ui/react'

const UserDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsers());
    }
  }, [dispatch, users.length]);

  const user = users.find((user) => user.id === parseInt(id));

  if (!user) return <div>Loading user details...</div>;

  return (
    <div>
      <Card w="30%" p="20px">
      <Text fontSize="28px" color="red" textAlign="center"><b>User Details</b></Text>
      <Box border="2px solid whitesmoke" p="10px"><p><strong>Name:</strong> {user.name}</p></Box>
      <Box border="2px solid whitesmoke" p="10px"><p><strong>Email:</strong> {user.email}</p></Box>
      <Box border="2px solid whitesmoke" p="10px"><p><strong>Phone:</strong> {user.phone}</p></Box>
      <Box border="2px solid whitesmoke" p="10px"><p><strong>Address:</strong> {user.address.street}, {user.address.city}</p></Box>
      <Link to="/"><Button colorScheme='teal'>Back to Home</Button></Link>
      </Card>
    </div>
  );
};

export default UserDetailsPage;