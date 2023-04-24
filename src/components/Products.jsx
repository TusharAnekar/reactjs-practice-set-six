import { useEffect, useState } from "react"
import { fakeFetch } from "../api/fakeFetchOne"

export function Products() {

    const [showProducts, setShowProducts] = useState([])
    //const [showError, setShowError] = useState({})
    //const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [showProductType, setShowProductType] = useState({})

    async function getProducts() {
        setIsLoading(true)
        try {
            const { status, data: { products } } = await fakeFetch('https://example.com/api/products')
            setIsLoading(false)
            //setIsError(false)
            if (status === 200)
                setShowProducts(products)
        } catch (error) {
            setShowProductType([])
            //setShowError(error)
            //setIsError(true)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    function handleShow(productTypeName) {
        setShowProductType(showProducts.find(({ name }) => name === productTypeName))
    }

    return (
        <>
            <h1>Products</h1>
            {   
                isLoading ? <p>Loading...</p> : 
                showProducts.map(({name}) => <button onClick={() =>handleShow(name)}>{name}</button>)
            }
            
            
            

            {/*isError && <p>{showError.message}</p>*/}

            {
                showProductType.name &&
                <div>
                    <img src={showProductType.src} alt="Shoes" />
                    <h3>Name: {showProductType.name}</h3>
                    <p><span>Price: </span>{showProductType.price}</p>
                    <p><span>Description: </span>{showProductType.desc}</p>
                </div>
            }
        </>
    )
}   