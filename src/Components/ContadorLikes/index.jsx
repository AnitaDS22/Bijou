import  {useState} from "react";
import styles from "./contadorLikes.module.scss";



const ContadorLikes = () => {

  const [count,setCount] = useState (0);

  const sumar = () => { 
      setCount (count + 1);
  };

  const restar = () => {
      setCount (count - 1);
  };

 


  return (
    <div className="styles.megusta">

        
        <button className={styles.botones} onClick={sumar}>ME GUSTA</button>
        <button className={styles.botones} onClick={restar}>NO ME GUSTA</button>
        <p className={styles.botones} > LIKES: {count} </p>
    

    </div>
  )
}

export default ContadorLikes;
