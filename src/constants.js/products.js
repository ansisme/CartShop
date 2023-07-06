const wardrobeProducts = [
    { id: 1, name: 'High Heels', price: 2999 },
    { id: 2, name: 'Eyeshadow Palette', price: 799 },
    { id: 3, name: 'Sunglasses', price: 1499 },
    { id: 4, name: 'Knit Sweater', price: 1999 },
    { id: 5, name: 'Slim-fit Pants', price: 1299 },
    { id: 6, name: 'Cotton Shirt', price: 899 },
    { id: 7, name: 'Crop Top', price: 699 },
    { id: 8, name: 'Casual Shoes', price: 2499 },
    { id: 9, name: 'Designer Purse', price: 3999 },
    { id: 10, name: 'Lipstick', price: 499 },
    { id: 11, name: 'Mascara', price: 599 },
    { id: 12, name: 'Trendy Earrings', price: 399 },
    { id: 13, name: 'Floral Dress', price: 1499 },
    { id: 14, name: 'Printed Skirt', price: 999 },
    { id: 15, name: 'Perfume', price: 1499 },
    { id: 16, name: 'Hair Straightener', price: 2999 },
    { id: 17, name: 'Silk Scarf', price: 1599 },
    { id: 18, name: 'Silk Saree', price: 3999 },
    { id: 19, name: 'Suncreen', price: 999 },
    { id: 20, name: 'High-waist Jeans', price: 1999 },
];

const getProductData = (id) => {
    let productData = wardrobeProducts.find(product => product.id === id);
    if (productData === undefined) {
        console.log("id not found of id" + id);
        return undefined;

    }
    return productData;

}
export { wardrobeProducts, getProductData };