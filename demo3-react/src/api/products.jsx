import intance from "./intance";

export const getAllProduct = () => {
    return intance.get("/products");
}

export const getAOneProduct = (_id) => {
    return intance.get("/products/" + _id);
}

export const UpdateProduct = (product) => {
    return intance.put("/products/" + product._id, product);
}

export const AddProduct = (product) => {
    return intance.post("/products", product);
}

export const RemoveProduct = (_id) => {
    return intance.delete("/products/" + _id);
}

