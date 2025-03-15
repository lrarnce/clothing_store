const BASE_URL = 'http://localhost:5000';

export const getAllProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);

    // Check if the response status is OK (status code 200–299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error.message);
    throw error; // Rethrow the error to handle it in the calling function
  }
};

export const getProductsById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // If the data is an array (which it shouldn't be in this case), return the first element
    return data;
  } catch (error) {
    console.error('Error fetching product:', error.message);
    throw error;
  }
};


export const signup = async (formData) => {
  const response = await fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
      
  });
 
  if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Something went wrong");
  }
  return response.json();
};