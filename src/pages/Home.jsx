import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      axios
        .get(`${import.meta.env.VITE_API_URL}/products`)
        .then((res) => {
          setProducts(res.data);
        })
        .catch((error) => {
          console.error("Error fetching contest data:", error);
        });
    }, []);
    return (
        <div>
            {
                products?.length
            }
        </div>
    );
};

export default Home;