import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AdminProductPage = (props) => {

    const [products, setproducts] = useState([]);
    useEffect(() => {
        setproducts(props.products);
    })
    const Remove = (_id) => {
        props.onRemove(_id);
    }
    return (
        <div>
            <h1>List products</h1>
            <a className='btn btn-primary' href={"/admin/products/add"}>Thêm</a>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>desc</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((pro, index) => {
                        return (
                            <tr key={pro._id}>
                                <td>{index + 1}</td>
                                <td>{pro.name}</td>
                                <td>{pro.desc}</td>
                                <td>{pro.image}</td>
                                <td>{pro.price}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => Remove(pro._id)}>Xóa</button>
                                    <button className='btn btn-warning'><a href={"/admin/products/" + pro._id + "/update"}>Sửa</a></button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default AdminProductPage