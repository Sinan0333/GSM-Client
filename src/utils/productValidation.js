export const validateProduct = (productName, productPrice, productQuantity, productCategory, productDescription, productImage) => {
    const errors = {};
    
    if (!productName.trim()) {
      errors.productName = 'Product name is required';
    }
    
    if (!productPrice || productPrice <= 0) {
      errors.productPrice = 'Valid product price is required';
    }
    
    if (!productQuantity || productQuantity <= 0) {
      errors.productQuantity = 'Valid product quantity is required';
    }
    
    if (!productCategory || productCategory === 'Select Category') {
      errors.productCategory = 'Product category is required';
    }
    
    if (!productDescription.trim()) {
      errors.productDescription = 'Product description is required';
    }
    
    if (!productImage) {
      errors.productImage = 'Product image is required';
    }

    return errors;
  };