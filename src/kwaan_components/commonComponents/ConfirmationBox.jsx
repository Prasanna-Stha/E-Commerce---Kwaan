import { Button, Text } from "@chakra-ui/react";
import { useProduct } from "@/context/Context";
import {
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from "@/components/ui/dialog";

const ConfirmationBox = ({ isOpen, setIsOpen, onConfirm, onCancel }) => {
  const { selectedProduct } = useProduct();

  const productTitle = selectedProduct?.title || "this product";

  return (
    <DialogRoot open={isOpen} onOpenChange={setIsOpen} placement="center" motionPreset="slide-in-bottom">
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Add to Cart</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <p>
            {`Are you sure you want to add `}
            <Text as="span" fontWeight="bold">{productTitle}</Text>
            {` to your cart?`}
          </p>
        </DialogBody>
        <DialogFooter>
          <Button variant="outline" onClick={onCancel}>Cancel</Button>
          <Button colorScheme="blue" onClick={onConfirm}>Add to cart</Button>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  );
};

export default ConfirmationBox;
