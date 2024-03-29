
//products reducer
export const update_product = (product) => {
    return {
        type:"UPDATE_PRODUCT",
        payload:product
    }
}

export const delete_product = (id) => {
    return {
        type:"DELETE_PRODUCT",
        payload: {id}
    }
}

export const update_quantity = (product) => {
    return {
        type: "UPDATE_QUANTITY",
        payload: product
    }
};




//purchases reducer
export const delete_purchases_byProductId = (id) => {
    return {
        type: "DELETE_PURCHASES_BY_PRODUCTID",
        payload:{id}
    }
}

export const delete_purchases_byCustomerId = (id) => {
    return {
        type:"DELETE_PURCHASES_BY_CUSTOMERID",
        payload:{id}
    }
}

export const add_purchase = (purchase) => {
    return {
        type: "ADD_PURCHASE",
        payload: purchase
    }
}





//customer reducer
export const update_customer = (customer) => {
    return {
        type:"UPDATE_CUSTOMER",
        payload: customer
    }
}

export const delete_customer = (id) => {
    return {
        type:"DELETE_CUSTOMER",
        payload:{id}
    }
}
