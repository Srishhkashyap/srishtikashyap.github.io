async function fetchData() {
    try {
      const response = await fetch('https://s3.amazonaws.com/open-to-cors/assignment.json');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

function displayProducts(data) {

    if (!data.products) {
      console.error('Invalid data format: products property is missing', data);
      return;
    }
  
    const products = data.products;
  
    if (typeof products === 'object') {
      const container = document.getElementById('productContainer');
  
      container.innerHTML = '';
  
      const sortedProducts = Object.values(products).sort((a, b) => b.popularity - a.popularity);
  
      for (const product of sortedProducts) {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
  
        const title = product.title || 'N/A';
        const price = `${(parseFloat(product.price) || 0).toFixed(2)}`;
        const popularity = parseInt(product.popularity) || 0;
        
        productElement.innerHTML = `
          <h3>${title}</h3>
          <p><strong>Price:</strong> ${price}</p>
          <p><strong>Popularity:</strong> ${popularity}</p>
        `;
  
        container.appendChild(productElement);
      }
    } else {
      console.error('Invalid data format: products is not an object', data);
    }
  }
  
  async function initialize() {
    const data = await fetchData();
  
    if (data) {
      console.log('Fetched data:', data); 
      displayProducts(data);
    }
  }
  
  initialize();
    
  async function initialize() {
    const data = await fetchData();
  
    if (data) {
      console.log('Fetched data:', data); 
      displayProducts(data);
    }
  }
  
  initialize();
  