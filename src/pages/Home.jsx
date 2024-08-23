import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Product from "../components/Product";
import useAuth from './../hooks/useAuth';
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const [products, setProducts] = useState([]);
    // Pagination start
    const {count} = useLoaderData();
    // const count = 40
    const [productsPerPage, setProductsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(0);
    const numberOfPages = Math.ceil(count/productsPerPage)

   // const pages = [];

    // for(let i= 0; i < numberOfPages; i++){

    //  pages.push(i)

    // }
    const pages = [...Array(numberOfPages).keys()];

    const handlePorductsPerpage= e =>{
      const val = parseInt(e.target.value);
      setProductsPerPage(val);
      setCurrentPage(0)
    }

    const handlePrevPage = () =>{
      if(currentPage > 0){
        setCurrentPage(currentPage -1)
      }
    }
    const handleNextPage = () =>{
      if(currentPage < pages.length -1){
        setCurrentPage(currentPage + 1)
      }
    }
    // Pagination End
    const [selectedCategory, setSelectedCategory] = useState('All');
    const {loading, setLoading} = useAuth()

 
    const getData = async() =>{
      const {data} = await axios(`${import.meta.env.VITE_API_URL}/products?page=${currentPage}&size=${productsPerPage}`);
      setLoading(false);
      setProducts(data);
      return data;
   };
    useEffect(() => {
     getData()
    }, [currentPage, productsPerPage]);
    // Handle Category
    const displayByCategory = async (e) =>{
      e.preventDefault();
      const category = e.target.value;
      const allData = await getData();
      if(category === 'All'){
        setProducts(allData)}
      else
      {
        setProducts(allData.filter(product => product.category === category));
      }
    }
    // Handle Sort
    const displayBySort = async (e) =>{
      e.preventDefault();
      const sort = e.target.value;
      const allData = await getData();
      if(sort === 'ascending'){
        allData.sort((a, b) => b.price -a.price);
        setProducts(allData)
      }
      else if(sort === 'descending')
      {
        allData.sort((a, b) => a.price -b.price);
        setProducts(allData)
      }
    }
    // handle Search
    return (
       <>
       {/* Oparetion Bar */}
        {/* <div  className="fixed top-16 left-0 h-10 flex"> */}
        <div  className="sticky top-0 h-10 flex z-40 bg-slate-400">
            <div className='flex gap-2 '>
              <label className='text-gray-700 ' htmlFor='Category'>
                Category
              </label>
              <select
                onChange={displayByCategory}
                name='category'
                id='category'
                className='border p-2 rounded-md'
              >
                <option value='All'>All</option>
                <option value='furniture'>Furniture</option>
                <option value='groceries'>Groceries</option>
                {/* <option value=''></option> */}
              </select>
            </div>
            {/* Sorting */}
            <div className='flex gap-2 '>
              <label className='text-gray-700 ' htmlFor='category'>
                Sort
              </label>
              <select
              onChange={displayBySort}
                className='border p-2 rounded-md'
              >
                <option value='ascending'>To Lowe</option>
                <option value='descending'>Low to high</option>
                {/* <option value=''></option> */}
              </select>
            </div>
            {/* Sorting */}
            <div className='flex gap-2 '>
              <input type="text"
              />
            </div>
        </div>
       <div className="relative top-24">
       {loading? <div className="">Loading</div>: <div className="lg:grid lg:grid-cols-3">
            {
              products?.map((product, index) =><Product key={index} product={product}></Product>)
            }
        </div>}
        <div className="my-2 text-center bg-red-500 te">
          <button onClick={handlePrevPage}>Prev</button>
          {
            pages.map(page => <button onClick={() => setCurrentPage(page)} className={`mr-4 btn ${currentPage === page && 'bg-yellow-400'}`} key={page}
            >{page+1}</button>)
          }
          <button onClick={handleNextPage}>Next</button>
          <select name="" id="" value={productsPerPage} onChange={handlePorductsPerpage}>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
          </select>
            
        </div>
       </div>

       </>
    );
};

export default Home;