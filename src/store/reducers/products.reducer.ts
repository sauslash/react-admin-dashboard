import { IProductState, IActionBase } from "../models/root.interface";
import { INIT_PRODUCTS, ADD_PRODUCT, CHANGE_PRODUCT_PENDING_EDIT, EDIT_PRODUCT, REMOVE_PRODUCT,
    CLEAR_PRODUCT_PENDING_EDIT, SET_MODIFICATION_STATE, CHANGE_PRODUCT_AMOUNT} from "../actions/products.action";
import { IProduct, ProductModificationStatus } from "../models/product.interface";



const initialState: IProductState = {
    modificationState: ProductModificationStatus.None,
    selectedProduct: null,
    products: []
};

function productsReducer(state: IProductState = initialState, action: IActionBase): IProductState {
    switch (action.type) {
        case INIT_PRODUCTS: {
            return { ...state, products: [state.products, action.product]};
        }
        case ADD_PRODUCT: {
            return { ...state, products: [...state.products, action.product]};
        }
        case EDIT_PRODUCT: {
            // saulo const foundIndex: number = state.products.findIndex(pr => pr.id === action.product.id);
            // let products: IProduct[] = state.products;
            // products[foundIndex] = action.product;
            // return { ...state, products: products };
        }
        case REMOVE_PRODUCT: {
            return { ...state, products: state.products.filter(pr => pr.id !== action.id) };
        }
        case CHANGE_PRODUCT_PENDING_EDIT: {
            return { ...state, selectedProduct: action.product };
        }
        case CLEAR_PRODUCT_PENDING_EDIT: {
            return { ...state, selectedProduct: null };
        }
        case SET_MODIFICATION_STATE: {
            return { ...state, modificationState: action.value };
        }
        case CHANGE_PRODUCT_AMOUNT: {
            // saulo const foundIndex: number = state.products.findIndex(pr => pr.id === action.id);
            // let products: IProduct[] = state.products;
            // products[foundIndex].amount = products[foundIndex].amount - action.amount;
            // return { ...state, products: products };
        }
        default:
            return state;
    }
}


export default productsReducer;