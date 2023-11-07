const React = require('react');
const { useState } = require('react');


function ShopForm() {
  const [storeName, setStoreName] = useState('');
  const [storeDescription, setStoreDescription] = useState('');
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productQuantity, setProductQuantity] = useState(0);
  const [productPrice, setProductPrice] = useState(0);

  const handleStoreSubmit = () => {
    const store = {
      name: storeName,
      description: storeDescription,
      products: products,
    };
    setStoreName('');
    setStoreDescription('');
    setProducts([]);
  };

  const handleStoreCancel = () => {
    setStoreName('');
    setStoreDescription('');
    setProducts([]);
  };

  const handleProductSubmit = () => {
    const product = {
      name: productName,
      description: productDescription,
      category: productCategory,
      quantity: productQuantity,
      price: productPrice,
    };

    setProducts((prevProducts) => [...prevProducts, product]);
    setProductName('');
    setProductDescription('');
    setProductCategory('');
    setProductQuantity(0);
    setProductPrice(0);
  };

  const handleProductCancel = () => {
    setProductName('');
    setProductDescription('');
    setProductCategory('');
    setProductQuantity(0);
    setProductPrice(0);
  };


  return (
    <div>
      <h1>Create new store</h1>
      <form style={{ border: '1px solid black', padding: '10px', maxWidth: '450px' }}>
        <div>
          <label>Store Name:</label>
          <input
            type="text"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
          />
        </div>
        <div>
          <label>Store Description:</label>
          <textarea
            value={storeDescription}
            onChange={(e) => setStoreDescription(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleStoreSubmit}>
          Submit Store
        </button>
        <button type="button" onClick={handleStoreCancel}>
          Cancel
        </button>
      </form>

      <h1>Add Products</h1>
      <form style={{ border: '1px solid black', padding: '10px', maxWidth: '500px' }}>
        <div >
          <label>Product Name:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div>
          <label>Product Description:</label>
          <textarea
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            value={productQuantity}
            onChange={(e) => setProductQuantity(Number(e.target.value))}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(Number(e.target.value))}
          />
        </div>
        <button type="button" onClick={handleProductSubmit}>
          Submit Product
        </button>
        <button type="button" onClick={handleProductCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default ShopForm;
