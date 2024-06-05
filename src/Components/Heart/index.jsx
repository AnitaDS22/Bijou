import { FaHeart} from 'react-icons/fa';
import { FaRegHeart} from 'react-icons/fa';
import styles from './heart.module.scss';
import { useState } from 'react';

const Heart = () => {

    const [liked, setLiked]= useState (false);

   const handleClick = () => {
// if (liked == true) {
// setLiked (false);


// } else { 
//     setLiked (true)
// }

liked == true ? setLiked(false) : setLiked (true)

   }

  return (
    <div onClick={handleClick}>
{ liked == true ?  <FaRegHeart className= {styles.corazon} /> : <FaHeart className= {styles.corazon}/>}
 
    </div>
  )
}

export {Heart}