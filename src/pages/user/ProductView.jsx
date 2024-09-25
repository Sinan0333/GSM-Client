import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProduct } from '../../api/user/productApi'
import QuantityInput from '../../components/user/QuantityInput'

function ProductView() {
    const id = useParams().id
    const [product,setProduct] = useState({})
    const [quantity,setQuantity] = useState(1)

    useEffect(()=>{
        fetchProduct(id).then((res)=>setProduct(res.product))
    },[])

    const handleWhatsAppRedirect = () => {
        const phoneNumber = '918606025832'; 
        const message =
        `Hello, I would like to buy this product.

Product id: ${product._id}
Name: ${product.name}
Price: Rs.${product.price}
Quantity: ${quantity}`;

        window.location.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    };

  return (
    <div className='min-h-screen'>
        <div className='w-full md:flex '>
            <div className='md:w-1/2 '>
                <img src={`${import.meta.env.VITE_CLOUDINARY_BASE_URL}/${product.image}`} alt="" className='w-full h-full object-contain' />
            </div>
            <div className='md:w-1/2 px-4 md:pt-32'>
                <h1 className='text-2xl font-bold'>{product.name}</h1>
                <p className='mt-7'>Category:{product.category}</p>
                <p className='mt-4'>Description:{product.description}</p> 
                <hr className='mt-4'/>
                <p className='text-3xl font-bold mt-8 text-center'>Rs.{product.price}</p>
                <div className='w-full flex md:px-20 mt-8 gap-4'>
                    <QuantityInput totalStock={product.quantity} quantity={quantity} setQuantity={setQuantity}/>
                    <button onClick={handleWhatsAppRedirect} className='bg-blue-500 text-white px-6 py-2  hover:bg-blue-600 w-1/2'>Buy Now</button>
                </div>
            </div>
        </div>        
    </div>
  )
}

export default ProductView
