
import styles from './product.module.scss';
import { Addcart } from '../AddCart';
import { Heart } from '../Heart';
import data from '../../product.json';





const Product = () => {


  return (

    
    <div className={styles.cardContainer}>
{data.map ((product) => ( 



<div className={styles.productCard}>

<img  className={styles.productImagen} src={product.imagen} alt="product"/>


<div className={styles.productDetails}> 



<h2 className={styles.productNombre} > {product.category} </h2>


<p className={styles.descripcion}> {product.description}</p>
<p className={styles.precio}> ${product.price}</p>

<Heart className={styles.heartProd}/>

<Addcart/>
</div>

</div>



) )

}

   
</div>



  )
}

export {Product}




