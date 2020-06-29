export default function cart(state = JSON.parse(localStorage.getItem('productsCompra')) || [], action) {
  switch (action.type) {
    case 'ADD_CART':
      return [...state, action.product];
    default:
      return state;
  }
}
