import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { category } from '../../data/product';
import { editProductApi, fetchProduct } from '../../api/admin/productApi';
import { validateProduct } from '../../utils/productValidation';
import SmallLoader from '../../components/common/SmallLoader';
import { base64 } from '../../utils/convert';

function EditProduct() {
    const navigate = useNavigate()
    const id = useParams().id    

    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productQuantity, setProductQuantity] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productImage, setProductImage] = useState(null);
    const [productOldImage, setProductOldImage] = useState(null);
    const [formErrors, setFormErrors] = useState({});
    const [isLoading,setIsLoading] = useState(false)
  
    const handleSubmit = async() => {
      const errors = validateProduct(productName, productPrice, productQuantity, productCategory, productDescription, productImage);
  
      if (Object.keys(errors).length === 0) {
        let image;
        setIsLoading(true)

        if(productImage instanceof File){
            image = await base64(productImage);
        }else{
            image = productImage
        }
       
        const response = await editProductApi(id,{name:productName, price:productPrice, quantity:productQuantity, category:productCategory, description:productDescription, image});
        setIsLoading(false)
        navigate("/admin/products")
      } else {
        setFormErrors(errors);
      }
    };

    useEffect(()=>{
        fetchProduct(id).then((res)=>{
            setProductName(res.product.name)
            setProductPrice(res.product.price)
            setProductQuantity(res.product.quantity)
            setProductCategory(res.product.category)
            setProductDescription(res.product.description)
            setProductImage(res.product.image)  
            setProductOldImage(`${import.meta.env.VITE_CLOUDINARY_BASE_URL}/${res.product.image}`)
        })
    },[])
  
  
    return (
      <div className='w-full h-full bg-white'>
        <h1 className='text-center text-2xl pt-2 font-bold'>Edit Product</h1> 
        <div className='w-full h-96 mx-auto p-4'>
            <img src={productOldImage} className='w-full h-full object-cover' alt="" />
        </div>
  
        <div className="w-full p-6 mx-auto">
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
                <input onChange={(e) => setProductName(e.target.value)} value={productName} type="text" name="floating_product_name" id="floating_product_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_product_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Name</label>
                {formErrors.productName && <p className="text-red-500">{formErrors.productName}</p>}
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input onChange={(e) => setProductPrice(e.target.value)} value={productPrice} type="number" name="floating_product_price" id="floating_product_price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_product_price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Price</label>
                {formErrors.productPrice && <p className="text-red-500">{formErrors.productPrice}</p>}
            </div>
  
            <div className="relative z-0 w-full mb-5 group">
                <input onChange={(e) => setProductQuantity(e.target.value)} value={productQuantity} type="number" name="floating_product_price" id="floating_product_price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_product_price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Quantity</label>
                {formErrors.productQuantity && <p className="text-red-500">{formErrors.productQuantity}</p>}
            </div>
  
            <div className="relative z-0 w-full mb-5 group">
              <select onChange={(e) => setProductCategory(e.target.value)} value={productCategory} id="countries" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
               <option value="Select Category">Select Category</option>
               {
                category.map((item, index) => (
                  <option key={index} value={item}>{item}</option>
                ))
               }
              </select>
              {formErrors.productCategory && <p className="text-red-500">{formErrors.productCategory}</p>}
            </div>
            
          </div>
            <div  className='w-full mb-5 group"'>
              <textarea onChange={(e) => setProductDescription(e.target.value)} value={productDescription} id="message" rows="2" className="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your product description here..."></textarea>
              {formErrors.productDescription && <p className="text-red-500">{formErrors.productDescription}</p>}
            </div>
          <div className="relative z-0 w-full mb-5 group">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload New Product Image</label>
            <input onChange={(e) => setProductImage(e.target.files[0])} accept='image/*' className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>
            {formErrors.productImage && <p className="text-red-500">{formErrors.productImage}</p>}
          </div>
          {
            isLoading ? <SmallLoader/> : <button onClick={handleSubmit}  className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Update</button>
          }
        </div>
  
      </div>
    )
}

export default EditProduct
