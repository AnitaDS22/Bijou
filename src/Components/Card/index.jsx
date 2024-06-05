

import { Link, useParams } from 'react-router-dom';
import styles from './card.module.scss';

const Card = ({ product }) => {

  const {id} = useParams ();
  console.log (id);

  return (
    <Link 
    
  to= {`${product.id}`}
    
    >

<div className={styles.cardTarjeta}>cardContainer


<h3 key={product.id}>{product.category}</h3>
<img  className={styles.productImagen} src={product.imagen} alt="product"/>

<p className={styles.precio}> ${product.price}</p>


    </div>
    </Link>  

  )
}

export {Card}