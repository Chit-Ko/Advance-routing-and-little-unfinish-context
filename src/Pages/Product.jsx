import React from 'react'
import { Outlet,Link ,useLocation} from 'react-router-dom'

const Product = () => {
    const location = useLocation();
    const isSubRoute = location.pathname !== "/product"


  return (
    

    // Check if currently on a child route (e.g., /product/men or /product/women)

    <div>
        <div className='flex gap-10 justify-center bg-gray-800 p-10 text-3xl font-bold  itmes-center h-auto '>
        <Link className={`${
            location.pathname === "/product/men"
              ? "text-green-500 font-semibold border-b-2 border-green-500"
              : "text-gray-200 hover:text-red-700 "
          }`} to='/product/men' >Men</Link>
        <Link className={`${
            location.pathname === "/product/women"
              ? "text-green-500 font-semibold border-b-2 border-green-500"
              : "text-gray-200 hover:text-red-700"
        }`} to='/product/women'>Women</Link>
        </div>
        {!isSubRoute && (
        <div className='w-full h-full flex flex-col items-center  text-center justify-between pt-40 '>
          <h2>All Products Overview</h2>
          <p>Welcome to the product section. Choose a category above.</p>
        </div>
      )}
      {isSubRoute &&
      
      <Outlet />
      }

       
        
        
        </div>
  )
}

export default Product