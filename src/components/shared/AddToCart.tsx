import { Button } from "@chakra-ui/react";
import { useProduct } from "../../context/Context";
import { useState } from "react";  
import ConfirmationBox from "./ConfirmationBox";

const AddToCart = ({ size }) => {
  const { selectedProduct, handleAddToCart } = useProduct();
  const [isOpen, setIsOpen] = useState(false);
  const [pendingProduct, setPendingProduct] = useState(null); 

  const handleAddToCartClick = () => {
    if (selectedProduct) {
      setPendingProduct(selectedProduct);
      setIsOpen(true);
    }
  };

  const handleConfirm = () => {
    if (pendingProduct) {
      handleAddToCart(pendingProduct);
      setPendingProduct(null);
    }
    setIsOpen(false)
  };

  const handleCancel = () => {
    setPendingProduct(null)
    setIsOpen(false)
  };

  return (
    <>
      <Button size={size} bg="black" color="white" onClick={handleAddToCartClick}>
        Add to Cart
      </Button>
      <ConfirmationBox 
        isOpen={isOpen} 
        setIsOpen={setIsOpen} 
        onConfirm={handleConfirm} 
        onCancel={handleCancel} 
      />
    </>
  );
};

export default AddToCart;
