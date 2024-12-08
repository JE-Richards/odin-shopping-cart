async function fetchData(numberOfProducts = 20) {
  const apiURL = 'https://fakestoreapi.com/products';

  // Ensure numberOfProducts is a postivie number and not greater than 20 as fakestoreapi only has 20 products
  numberOfProducts = Math.min(Math.max(numberOfProducts, 1), 20);

  try {
    const response = await fetch(`${apiURL}?limit=${numberOfProducts}`);

    if (response.ok) {
      const jsonData = await response.json();
      return { data: jsonData, error: null };
    } else {
      let errorMessage;

      switch (response.status) {
        case 404:
          errorMessage = 'Resource not found (404).';
          break;
        case 500:
          errorMessage = 'Server error (500). Please try again later.';
          break;
        case 503:
          errorMessage = 'Service unavailable (503). Please try again later.';
          break;
        default:
          errorMessage = `Unexpected error when fetching product data (status ${response.status})`;
          break;
      }

      return { data: null, error: errorMessage };
    }
  } catch (error) {
    return {
      data: null,
      error: `Unexpected error: ${error.message}`,
    };
  }
}

export default fetchData;
