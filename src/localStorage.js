
export const getCartFromLocalStorage = () => {
    const cart = localStorage.getItem("cart");  

    return cart ? JSON.parse(cart) : [];
};
export const saveCartToLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
};

export const getUserInfo =()=>{
    const userIfo = localStorage.getItem("user")  
    return userIfo ? JSON.parse(userIfo): null;
};