import React from 'react'
import styles from "./navbar.module.scss";
import { Link } from 'react-router-dom';




const Navbar = () => {
  return (
    <div>


<nav className= {styles.container}>

<Link to="/">
  <img src= "../src/assets/logotaani.jpg" alt="" width="130" height="90" />
  </Link>

<Link to="/Inicio">
 <ul className={styles.opcion}>INICIO</ul>
 </Link>

 <Link to="/Productos">
  <ul className={styles.opcion}>PRODUCTOS</ul>
  </Link>

  <Link to="/Categorias">

<ul className={styles.opcion}>CATEGORIAS</ul>
  

  </Link>

  <Link to="/Contacto">

  <ul className={styles.opcion}>CONTACTO</ul>
  </Link>

</nav>


    </div>


  )
}

export default Navbar;