import React, { useState } from react;
import styles from "./button.module.scss";

const Button  = ({texto}) => {


  return (
  
  <button className={styles.botones}> {texto}</button> 


  )
  
}


export default Button;

