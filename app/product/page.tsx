import React from 'react'

type Product = {
    id: number;
    name: string;
    price: number;
}

async function getProduct(): Promise<Product[]> {
    return [
        { id: 1, name: "Mac m5", price: 36000 },
        { id: 2, name: "Mac m4", price: 26000 },
        { id: 3, name: "Mac m3", price: 16000 },
        { id: 4, name: "iPhone 15", price: 29000},
        { id: 5, name: "iPhone 16", price: 32000},
        { id: 6, name: "iPhone 17", price: 42000},
    ]
}


async function Product_Page() {

    const products = await getProduct();

    return (
        <main className='min-h-screen p-8'>
            <div className='text-center justify-center'>
                <h1 className='text-3xl font-bold'>Product Page</h1>
                <p className='mt-4'>This is my product</p>
            </div>

            <h1 className='text-3xl font-bold'>รายการสินค้า</h1>
            <div className='mt-6 grid gap-4'>
                {products.map((product) => (
                    <div key={product.id} className='rounded-lg border p-4'>
                        <h2 className='text-xl font-semibold'>{product.name}</h2>
                        <p className='mt-2'>ราคา {product.price} บาท</p>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Product_Page