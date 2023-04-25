import { getShoppingCart } from "../FakeDB";


const dataLoaderDb = async() =>{
    const loaded = await fetch('/featuredJobs.json')

    const data = await loaded.json();

    const storedCart = getShoppingCart();

    const savedCart = [];
   
    for(const id in storedCart){
        const addedProduct = data.find(d=>d.id ===id )
        if (addedProduct) {
            const quantity = storedCart[id]
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct)
            
        }
    }


   
    return savedCart;

}
export default dataLoaderDb;