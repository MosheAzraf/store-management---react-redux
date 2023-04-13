import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import ProductsWithCustomers from '../components/ProductsWithCustomers';

const Products = () => {
  const purchases = useSelector(state => state.purchases.purchases);
  const customers = useSelector(state => state.customers.customers);
  const products = useSelector(state => state.products.products);
  const [productsWithCustomers, setProductsWithCustomers] = useState([]);

  useEffect(() => {
    const productCustomerMap = products.map(product => {
      const customersWhoBoughtProduct = purchases
        .filter(purchase => purchase.productId === product.id)
        .map(purchase => {
          const customer = customers.filter(c => c.id === purchase.customerId)[0]
          return { customerId: customer.id, name: `${customer.firstName} ${customer.lastName}`, purchaseDate: purchase.date };
        });
      
      return { ...product, customers: customersWhoBoughtProduct };
    });
    setProductsWithCustomers(productCustomerMap);

  }, [customers, products, purchases])
  
  return (
    <div className="container">
      <h2 className=" leading-normal text-blue-600 text-center hover:underline">total amount of purchased products: {purchases.length}</h2>
      <div >
        {
          <ProductsWithCustomers productsWithCustomers={productsWithCustomers}/>
        }
      </div>
    </div>
  )
}

export default Products
