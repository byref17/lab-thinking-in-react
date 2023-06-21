import ProductRow from "./ProductRow";
import React from "react";

function ProductTable(props) {
    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map((el) => {
                        return (
                            <ProductRow
                                key={el.id}
                                inStock={el.inStock}
                                name={el.name}
                                price={el.price}
                            />
                        );
                    })}
                </tbody>
            </table>
        </div>

    );

}

export default ProductTable