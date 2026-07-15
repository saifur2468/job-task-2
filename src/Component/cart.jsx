import React, { useEffect, useState } from "react";
import {
    decreaseQty,
    getCart,
    increaseQty,
    removeItem,
} from "./utils/cart"

const Cart = () => {
    const [cart, setCart] = useState([]);

    const loadCart = () => {
        setCart(getCart());
    };

    useEffect(() => {
        loadCart();
    }, []);

    const handleIncrease = (id) => {
        increaseQty(id);
        loadCart();
    };

    const handleDecrease = (id) => {
        decreaseQty(id);
        loadCart();
    };

    const handleRemove = (id) => {
        removeItem(id);
        loadCart();
    };

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="max-w-6xl mx-auto py-10 px-4">

            <h2 className="text-3xl font-bold mb-6">
                Shopping Cart
            </h2>

            <div className="overflow-x-auto">

                <table className="table table-zebra">

                    <thead>

                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>

                    </thead>

                    <tbody>

                        {cart.map((item) => (
                            <tr key={item.id}>

                                <td>
                                    <img
                                        src={item.image}
                                        className="w-20 rounded"
                                        alt=""
                                    />
                                </td>

                                <td>{item.name}</td>

                                <td>{item.category}</td>

                                <td>৳ {item.price}</td>

                                <td>

                                    <div className="flex items-center gap-2">

                                        <button
                                            onClick={() => handleDecrease(item.id)}
                                            className="btn btn-sm"
                                        >
                                            -
                                        </button>

                                        <span>{item.quantity}</span>

                                        <button
                                            onClick={() => handleIncrease(item.id)}
                                            className="btn btn-sm"
                                        >
                                            +
                                        </button>

                                    </div>

                                </td>

                                <td>
                                    ৳ {item.price * item.quantity}
                                </td>

                                <td>

                                    <button
                                        onClick={() => handleRemove(item.id)}
                                        className="btn btn-error btn-sm"
                                    >
                                        Remove
                                    </button>

                                </td>

                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>

            <div className="text-right mt-6">

                <h2 className="text-2xl font-bold">
                    Total : ৳ {total}
                </h2>

            </div>

        </div>
    );
};

export default Cart;