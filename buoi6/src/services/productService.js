export const getProducts = async () => {
    const response = await fetch('http://localhost:3002/products');
    const result = await response.json();
    return result;
}

export const createProductFetch = async (data) => {
    const response = await fetch(`http://localhost:3002/products/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    const result = await response.json();
    return result;
}

export const editProduct = async (id, data) => {
    const response = await fetch(`http://localhost:3002/products/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    const result = await response.json();
    return result;
}

export const deleteProduct = async (id) => {
    const response = await fetch(`http://localhost:3002/products/${id}`, {
        method: 'DELETE',
    });
    return response;
}