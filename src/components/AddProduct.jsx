import React from "react";
import { Button, ButtonGroup  } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  
} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { Radio, RadioGroup } from '@chakra-ui/react'

const AddProduct = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  // TODO: Remove below const and instead import them from chakra
  
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;

  return (
    <>
      <Button my={4} data-cy="add-product-button" onClick={onOpen}>Add new product</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalBody pb={6}>
          <label>Title</label>
          <Input data-cy="add-product-title" type="text" placeolder/>
          <label>Category</label>
          <Select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt">Shirt</option>
            <option data-cy="add-product-category-pant">Pant</option>
            <option data-cy="add-product-category-jeans">Jeans</option>
          </Select>
          <label>Gender</label>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male">Male</Radio>
            <Radio data-cy="add-product-gender-female">Female</Radio>
            <Radio data-cy="add-product-gender-unisex">Unisex</Radio>
          </RadioGroup>
          <label>Price</label>
          <Input data-cy="add-product-price" />
          <Button data-cy="add-product-submit-button"onClick={onClose}>Create</Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
