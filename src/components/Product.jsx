import React, { useEffect, useState } from "react";
import { Text, Image, Box, Heading} from '@chakra-ui/react'
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import axios from "axios"

const Product = () => {

  const [newTodo, setNewTodo] = useState("")
  const [todos, setTodos] = useState([])

  const saveInfo=() =>{
    axios.post("http://localhost:8080/products", {
      value:newTodo,
      isCompleted:false,
    })
    .then((res)=>{
      setTodos([...todos,res.data])
      setNewTodo("")
    })
  }

  useEffect(()=> {
    axios.get("http://localhost:8080/products")
    .then((res)=>{
      console.log(res)
      setTodos(res.data)

    })
  },[])
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  return (
    <Stack data-cy="product">
      <Image data-cy="product-image" />
      <Text data-cy="product-category"></Text>
      <Tag>
        <TagLabel data-cy="product-gender"></TagLabel>
      </Tag>
      <Heading data-cy="product-title"></Heading>
      <Box data-cy="product-price"></Box>
    </Stack>
  );
};

export default Product;
