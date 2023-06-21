import React from "react";

function ProductRow(props) {
    return (
        <tr className="productrow">

            <td style={{ color: props.inStock ? 'black' : 'red' }}>{props.name}</td>
            <td>{props.price}</td>
        </tr>

    )
}
export default ProductRow