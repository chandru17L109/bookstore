
export const ON_DELETE_ITEM = " ON_DELETE_ITEM";
export const ON_MOVE_ITEM = " ON_MOVE_ITEM";
export const ON_CART_LOAD = " ON_CART_LOAD";
export const ADJUST_ITEM_QTY = " ADJUST_QTY";

export const ON_WISH_LOAD = " ON_WISH_LOAD";
export const ON_ADD_CART_WISH = " ON_ADD_CART_WISH";

export const ON_ADDRESS_LOAD = " ON_ADDRESS_LOAD";
export const ON_DELETE_ADDRESS = " ON_DELETE_ADDRESS";
export const ON_ADD_ADDRESS = " ON_ADD_ADDRESS";
export const ON_EDIT_ADDRESS = " ON_EDIT_ADDRESS";

export const ORDER_SUMMARY = " ORDER_SUMMARY";

export const DELIVERY_ADDRESS = " DELIVERY_ADDRESS";

export const ON_CONFIRM_PAYMENT = " ON_CONFIRM_PAYMENT";
export const ON_AMOUNT = " ON_AMOUNT";
export const ON_APPLY_COUPON = "ON_APPLY_COUPON"





export const onCartLoadAction = (useremail) => {
    return (dispatch) => {
        return fetch(
            `https://bookstore-13.herokuapp.com/api/v1/cartItems/${useremail}`,
            {
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json",
                },
            }
        )
            .then((res) => res.json())
            .then((data) => {
                dispatch({
                    type: ON_CART_LOAD,
                    payload: data.data,
                });
            });
    };
};

export const onDeleteItemAction = (_id, useremail) => {
    return (dispatch) => {
        return fetch(
            `https://bookstore-13.herokuapp.com/api/v1/cartItems/${useremail}`,
            {
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json",
                },
                method: "DELETE",
                body: JSON.stringify({ bookid: _id }),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                fetch(`https://bookstore-13.herokuapp.com/api/v1/cartItems/${useremail}`, {
                    headers: {
                        Accept: "application/json",
                        "Content-type": "application/json",
                    },
                })
                    .then((res) => res.json())
                    .then((data) => {
                        dispatch({
                            type: ON_DELETE_ITEM,
                            payload: data.data,
                        });
                    });
            });
    };
};

export const onMoveItemAction = (_id, useremail) => {
    return (dispatch) => {
        return fetch(
            `https://bookstore-13.herokuapp.com/api/v1/cartItems/${useremail}`,
            {
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json",
                },
                method: "DELETE",
                body: JSON.stringify({ bookid: _id }),
            }
        ).then((res) => {
            fetch(`https://bookstore-13.herokuapp.com/api/v1/wishItems/${useremail}`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ bookid: _id }),
            })
                .then((res) => res.json())
                .then((data) => {
                    fetch(`https://bookstore-13.herokuapp.com/api/v1/cartItems/${useremail}`, {
                        headers: {
                            Accept: "application/json",
                            "Content-type": "application/json",
                        },
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            dispatch({
                                type: ON_MOVE_ITEM,
                                payload: data.data,
                            });
                        });
                });
        });
    };
};

export const onWishLoadAction = () => {
    return (dispatch) => {
        return fetch("https://bookstore-13.herokuapp.com/api/v1/wishItems/", {})
            .then((res) => res.json())
            .then((data) => {
                dispatch({
                    type: ON_WISH_LOAD,
                    payload: data.data,
                });
            });
    };
};

export const addCartitemWishAction = (wishItem) => {
    return (dispatch) => {
        return fetch("https://bookstore-13.herokuapp.com/api/v1/cartItems/", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                name: wishItem.name,
                imageUrl: wishItem.imageUrl,
                price: wishItem.price,
                description: wishItem.description,
                countInStock: wishItem.countInStock,
            }),
        }).then((res) => {
            fetch("https://bookstore-13.herokuapp.com/api/v1/wishItems/")
                .then((res) => res.json())
                .then((data) => {
                    dispatch({
                        type: ON_ADD_CART_WISH,
                        payload: data.data,
                    });
                });
        });
    };
};

export const onAddressLoadAction = (useremail) => {
    return (dispatch) => {
        return fetch(`https://bookstore-13.herokuapp.com/api/v1/adr/${useremail}`, {
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                dispatch({
                    type: ON_ADDRESS_LOAD,
                    payload: data.res,
                });
            });
    };
};

export const onDeleteAddressAction = (_id, useremail) => {
    return (dispatch) => {
        return fetch("https://bookstore-13.herokuapp.com/api/v1/adr/", {
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
            },
            method: "DELETE",
            body: JSON.stringify({ email: useremail, id: _id }),
        })
            .then((res) => res.json())
            .then((data) => {

                dispatch({
                    type: ON_DELETE_ADDRESS,
                    payload: data.res,
                });

            });
    };
};

export const onAddAddressAction = (obj, useremail, username, userphone) => {
    return (dispatch) => {
        return fetch("https://bookstore-13.herokuapp.com/api/v1/adr/", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
            },

            body: JSON.stringify({ email: useremail, addresses: obj, name: username, phone: userphone }),
        })
            .then((res) => res.json())
            .then((data) => {
                fetch(`https://bookstore-13.herokuapp.com/api/v1/adr/${useremail}`, {
                    headers: {
                        Accept: "application/json",
                        "Content-type": "application/json",
                    },
                })
                    .then((res) => res.json())
                    .then((data) => {
                        dispatch({
                            type: ON_ADD_ADDRESS,
                            payload: data.res,
                        });
                    });
            });
    };
};

export const OnEditAddressAction = (id, elem, useremail) => {
    return (dispatch) => {
        return fetch("https://bookstore-13.herokuapp.com/api/v1/adr/", {
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
            },
            method: "PATCH",
            body: JSON.stringify({ email: useremail, id: id, address: elem }),
        })
            .then((res) => res.json())
            .then((data) => {
                fetch(`https://bookstore-13.herokuapp.com/api/v1/adr/${useremail}`, {
                    headers: {
                        Accept: "application/json",
                        "Content-type": "application/json",
                    },
                })
                    .then((res) => res.json())
                    .then((data) => {
                        dispatch({
                            type: ON_EDIT_ADDRESS,
                            payload: data.res,
                        });
                    });
            });
    };
};



export const onQuantityChangeAction = (_id, useremail, QuantityChange, max) => {
    return (dispatch) => {
        return fetch(
            `https://bookstore-13.herokuapp.com/api/v1/cartItems/${useremail}`, {
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
            },
            method: "PATCH",

            body: JSON.stringify({ bookid: _id, QuantityChange: QuantityChange, max: max }),
        }
        )
            .then((res) => res.json())
            .then((data) => {
                fetch(`https://bookstore-13.herokuapp.com/api/v1/cartItems/${useremail}`, {
                    headers: {
                        Accept: "application/json",
                        "Content-type": "application/json",
                    },
                })
                    .then((res) => res.json())
                    .then((data) => {
                        dispatch({
                            type: ADJUST_ITEM_QTY,
                            payload: data.data,
                        });
                    });
            });
    };
}




export const OrderSummaryAction = (
    totalValue
) => {
    return {
        type: ORDER_SUMMARY,
        payload: {
            totalValue: totalValue,
        },
    };
};

export const OndeliverToAddressAction = (id, arr) => {
    return {
        type: DELIVERY_ADDRESS,
        payload: arr
    };
};

export const OnconfirmPaymentAction = (cartItems, address, amount, useremail) => {
    return (dispatch) => {
        return fetch("https://bookstore-13.herokuapp.com/api/v1/cart_orders/", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                email: useremail,
                books: cartItems,
                address: address,
                amount: amount,
            }),
        }).then((res) => {
            fetch("https://bookstore-13.herokuapp.com/api/v1/cart_orders/")
                .then((res) => res.json())
                .then((data) => {
                    dispatch({
                        type: ON_CONFIRM_PAYMENT,
                        payload: data.data,
                    });
                });
        });
    };
};

export const amountAction = (cartTotal, useremail) => {
    return (dispatch) => {
        return fetch(
            `https://bookstore-13.herokuapp.com/api/v1/cartItems/${useremail}/amount`,
            {
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json",
                },
                method: "PATCH",

                body: JSON.stringify({ amount: cartTotal }),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                dispatch({
                    type: ON_AMOUNT,
                    payload: cartTotal,
                });
            });
    };
};

export const onApplycouponAction = (code) => {

    return dispatch => {
        return fetch('https://bookstore-13.herokuapp.com/api/v1/coupons/compare/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ couponcode: code }),

        })

            .then((res) => res.json())
            .then((data) => {
                dispatch({
                    type: ON_APPLY_COUPON,
                    payload: data.result
                });

            });

    }
}