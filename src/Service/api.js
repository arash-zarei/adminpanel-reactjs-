import axios from 'axios'

const getProducts = async (pageNumber) =>{
    const response = await axios.get(`https://dummyjson.com/products?limit=10&skip=${pageNumber}&select=thumbnail,price,title,brand,category`)
    return response.data.products
}

const getEmployees = async (pageNumber) => {
    const response = await axios.get(`https://dummyjson.com/users?limit=10&skip=${pageNumber}&select=firstName,age,lastName,address,image`)
    return response.data.users
}

const getCustomers = async (pageNumber) => {
    const response = await axios.get(`https://dummyjson.com/users?limit=10&skip=${pageNumber}&select=phone,email,lastName,image,age`)
    return response.data.users
}

export { getProducts, getEmployees, getCustomers }