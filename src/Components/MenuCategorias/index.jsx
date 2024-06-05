
import styles from "./menuCategorias.module.scss";
import data from "../../product.json";
 
 function MenuCategorias( {allCategory, filterCategory, setArticle} ) {


   return (
     <div className={styles.menuCategoriasList}>
      {
allCategory.map(cate => (
<button className={styles.MenuCategorias}
onClick={()=>filterCategory(cate)} 
>

{cate}

</button>


))

      }

<button className={styles.MenuCategorias}
onClick={() => setArticle (data)}>

All

</button>




     </div>
   )
 }
 
 export default MenuCategorias;



