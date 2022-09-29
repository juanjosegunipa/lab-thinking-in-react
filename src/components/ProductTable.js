function ProductTable(props) {

    return (
        <div>
            <h2>Product table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.filteredProducts.map(singleProduct => {
                            return (
                                <tr key={singleProduct.name}>
                                    <td
                                        style={{ color: singleProduct.inStock ? 'black' : 'red' }}>
                                        {singleProduct.name}
                                    </td>
                                    <td>{singleProduct.price}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ProductTable