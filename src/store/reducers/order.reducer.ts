import { IOrdersState, IActionBase } from "../models/root.interface";
import { ADD_ORDER } from "../actions/orders.actions";


const initialState: IOrdersState = {
    orders: [
        {
            id: 1,
            name: "Pedido de Alface",
            amount: 5,
            totalPrice: 15,
            product: {
                id: 1, name: "Alface", description: "Folhas verdes",
                amount: 10, price: 3, hasExpiryDate: false, category: "Folhas"
            },
        },
        {
            id: 2,
            name: "Pedido de Batata",
            amount: 10,
            totalPrice: 40,
            product: {
                id: 3, name: "Batata", description: "Bom para fazer frita",
                amount: 23, price: 4, hasExpiryDate: false, category: "Legumes"
            },
        }
    ]
};

function orderReducer(state: IOrdersState = initialState, action: IActionBase): IOrdersState {
    switch (action.type) {
        case ADD_ORDER: {
            let maxId: number = Math.max.apply(Math, state.orders.map((o) => { return o.id; }));
            if(maxId === -Infinity) { maxId = 0; }
            return {...state, orders: [...state.orders, {...action.order, id: maxId + 1}]};
        }
        default:
            return state;
    }
}


export default orderReducer;