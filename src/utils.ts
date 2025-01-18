export const isNameValid = (productName: string | null) => {
  if (productName === null || productName.trim().length < 1 || productName.trim().length > 30) {
    return false;
  } else {
    return true;
  }
}

export const isDescriptionValid = (productDescription: string | null) => {
  if (productDescription === null || productDescription.trim().length > 200) {
    return false;
  } else {
    return true;
  }
}

export const isPriceValid = (productPrice: number | null) => {
  if (productPrice !== null && productPrice > 0) {
    return true;
  } else {
    return false;
  }
}