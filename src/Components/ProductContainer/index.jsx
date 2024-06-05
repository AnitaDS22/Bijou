import styles from "./productContainer.module.scss";
import { Product } from "../Product";

const ProductContainer = () => {

  return (
    
    <section className={styles.productSection}>
       
        <h1 className={styles.productTitlle}> Nuestros productos</h1>
    <div className={styles.productContainer}>
      
      <Product/>
  
    </div> 

</section>
   
  )
}

export {ProductContainer}