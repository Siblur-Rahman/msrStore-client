
import PropTypes from 'prop-types';
import { Link} from 'react-router-dom';
// import axios from 'axios';
const Item = ({item}) => {
  const {_id, photo, category, title, description}=item;
    return (
        
            <div className="card shadow-xl border-2 p-2 mt-4">
                <figure className='bg-base-200 h-[230px] w-[320px] mx-auto'><img src={photo} alt="pictur" /></figure>
                <div className="card-body">
                        <div className=''>
                                <div className="text-center text-3xl">{title}</div>
                                <div className="text-2xl"><span className='bg-yellow-100 rounded-lg p-1'>{category}</span></div>
                                <div className="mt-2"><span>{description}</span></div>
                        </div>       
                            <Link to={`/itemDetails/${_id}`} className='btn btn-success'><button>Details</button></Link>
                </div>
            </div>
        
    );
};
Item.propTypes = {
    item: PropTypes.object.isRequired,
    }
export default Item;