import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProductPage = (props) => {
    console.log(props);
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setproduct] = useState({});
    useEffect(() => {
        const currenproduct = props.products.find(pro => pro._id == id);
        setproduct(currenproduct);
    }, [props])


    const [inputValue, setinputValue] = useState({});
    const onHandleChange = (e) => {
        const name = e.target.name;
        setinputValue({ ...inputValue, [name]: e.target.value })
    }

    const onHandleSubmit = (e) => {
        e.preventDefault();
        props.onUpdate({ ...inputValue, ...product });
        navigate("/admin/products")
    }
    return (
        <div className='container'>
            <h1>Sửa sản phẩm</h1>
            <form action="" onSubmit={onHandleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" defaultValue={product?.name} name='name' onChange={onHandleChange} placeholder="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Desc</label>
                    <input type="text" className="form-control" id="desc" defaultValue={product?.desc} name='desc' onChange={onHandleChange} placeholder="desc" />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image</label>
                    <input type="text" className="form-control" id="image" defaultValue={product?.image} name='image' onChange={onHandleChange} placeholder="image" />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Price</label>
                    <input type="text" className="form-control" id="price" defaultValue={product?.price} name='price' onChange={onHandleChange} placeholder="price" />
                </div>
                <div className="mb-3">
                    <button>Lưu</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateProductPage