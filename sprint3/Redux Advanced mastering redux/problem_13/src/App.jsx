import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, Text, Select, Image } from "@chakra-ui/react";
import { fetchCoffee } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();
  const { loading, coffeeList, error } = useSelector((state) => state);
  const [sortedList, setSortedList] = useState([]);

  useEffect(() => {
    dispatch(fetchCoffee());
  }, [dispatch]);


  useEffect(() => {
    setSortedList(coffeeList); 
  }, [coffeeList]);


  const handleSort = (e) => {
    const sortBy = e.target.value;

    const sorted = [...coffeeList].sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name); 
      } else if (sortBy === "price") {
        return a.price - b.price; 
      }
      return 0;
    });

    setSortedList(sorted); 
  };

  return (
    <Box p={4}>
      <Box mb={4}>
        <Text fontSize="2xl" mb={2}>
          Coffee List
        </Text>
        <Select placeholder="Sort by" onChange={handleSort} width="200px">
          <option value="name">Name</option>
          <option value="price">Price</option>
        </Select>
      </Box>

      {loading && <Text>Loading...</Text>}
      {error && <Text color="red.500">Error: {error}</Text>}

      <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6}>
        {sortedList.map((coffee) => (
          <Box
            key={coffee.id}
            border="1px solid #ccc"
            borderRadius="8px"
            p={4}
            boxShadow="md"
          >
            <Image
              src={coffee.image}
              alt={coffee.name}
              borderRadius="8px"
              mb={3}
              objectFit="cover"
              height="200px"
              width="100%"
            />
            <Text fontSize="xl" fontWeight="bold" mb={1}>
              {coffee.title}
            </Text>
            <Text mb={2} color="gray.600">
              {coffee.description}
            </Text>
            <Text fontWeight="bold" color="green.500">
              Price: Rs {coffee.price}
            </Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default App;
