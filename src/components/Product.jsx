
const Product = ({product}) => {
    const {_id, productName, image, category, title, description, price}=product;
    return (
        
            <div className="card shadow-xl border-2 p-2 mt-4">
                <figure className='bg-base-200 h-[230px] w-[320px] mx-auto'><img src={image} alt="pictur" /></figure>
                <div className="card-body">
                        <div className=''>
                                <div className="text-center text-3xl">{productName}</div>
                                {/* <div className="text-center text-3xl">{title}</div> */}
                                <div className="text-2xl"><span className='bg-yellow-100 rounded-lg p-1'>{category}</span></div>
                                <div className="mt-2"><span>{description}</span></div>
                                <div className="mt-2"><span>{price}</span></div>
                        </div>       
                            {/* <Link to={`/itemDetails/${_id}`} className='btn btn-success'><button>Details</button></Link> */}
                </div>
            </div>
    );
};

export default Product;