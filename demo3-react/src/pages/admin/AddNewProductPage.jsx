import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddNewProductPage = (props) => {
    const navigate = useNavigate();
    const [inputValue, setinputValue] = useState({});
    const onHandleChange = (e) => {
        const name = e.target.name;
        setinputValue({ ...inputValue, [name]: e.target.value })
        console.log({ ...inputValue });
    }

    const onHandleSubmit = (e) => {
        e.preventDefault();
        props.onAdd(inputValue);
        navigate("/admin/products")
    }
    return (
        <div className='container'>
            <h1>Thêm sản phẩm</h1>
            <form action="" onSubmit={onHandleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name='name' onChange={onHandleChange} placeholder="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Desc</label>
                    <input type="text" className="form-control" id="desc" name='desc' onChange={onHandleChange} placeholder="desc" />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image</label>
                    <input type="text" className="form-control" id="image" name='image' onChange={onHandleChange} placeholder="image" />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Price</label>
                    <input type="text" className="form-control" id="price" name='price' onChange={onHandleChange} placeholder="price" />
                </div>
                <div className="mb-3">
                    <button>Thêm</button>
                </div>
            </form>
        </div>
    )
}

export default AddNewProductPage