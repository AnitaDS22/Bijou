
import styles from "./bodyCenter.module.scss";

const BodyCenter = (props) => {
  return (

    <section className={styles.sectionBody}>
    
    <h2 className={styles.introduction}>No es atraccion ni nada parecido. Es solo la sensación de estar a gusto</h2>

  <div className={styles.imageness}> fotos
        <img className={styles.imagencentral} src="../src/assets/pulcera4.jpg" width="200" height="200" alt='pulcera' />
        <img className={styles.imagencentral} src="../src/assets/collarpor2.jpg" width="200" height="200" alt='pulcera' />
        <img className={styles.imagencentral} src="../src/assets/collarblanco.jpg" width="200" height="200" alt='pulcera' />
        <img className={styles.imagencentral} src="../src/assets/collarazul.jpg" width="200" height="200" alt='pulcera' />
        <img className={styles.imagencentral} src="../src/assets/pulseras1.jpg" width="200" height="200" alt='pulcera' />
    </div>

 <div className={styles.BodyCenter}>

<h1> La belleza de un accesorio esta en la mujer que lo usa </h1>
</div> 


    </section>

  )
}

export {BodyCenter}