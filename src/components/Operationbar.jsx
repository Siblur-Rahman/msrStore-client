import { useState } from "react";
import useAuth from "../hooks/useAuth";

const Operationbar = () => {
    return (
        <div  className="fixed top-16 left-0 h-10">
            <div className='flex gap-2 '>
              <label className='text-gray-700 ' htmlFor='category'>
                Category
              </label>
              <select
              onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}
                name='category'
                id='category'
                className='border p-2 rounded-md'
              >
                <option value='furniture'>furniture</option>
                <option value='groceries'>groceries</option>
                {/* <option value=''></option> */}
              </select>
            </div>
        </div>
    );
};

export default Operationbar;