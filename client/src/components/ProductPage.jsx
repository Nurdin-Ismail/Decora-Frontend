import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";


function ProductPage() {
    const params = useParams();

    const [product, setproduct] = useState()

    useEffect(() => {
        fetch(`http://127.0.0.1:5555/product/${params.id}`)
        .then(res => res.json()) 
        .then(data => setproduct(data))
    
      }, [])
    console.log(product)
  return (
    <div>{JSON.stringify(product)}</div>
  )
}

export default ProductPage;
