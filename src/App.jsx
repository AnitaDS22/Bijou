
import './App.css';
import Navbar from "./Components/Navbar";
import {BodyCenter} from './Components/BodyCenter';
import ContadorLikes from './Components/ContadorLikes';
import data from './product.json';
import {Navigate, Route, Routes} from "react-router-dom";
import {ProductContainer} from './Components/ProductContainer';
import { useState } from 'react';
import  MenuCategorias from './Components/MenuCategorias';


function App() {

  const [article, setArticle] = useState (data); //arreglo de los productos

const allCategory = [...new Set(data.map(article => article.category))]; // arreglo de categorias
  
  // const [categories, setCategories] = useState (allCategory)


 console.log(article)
 // console.log(allCategory)


 const filterCategory = (cat) =>  {

const newCategory = data.filter((newarticle) => newarticle.category === cat)
 setArticle(newCategory) // arreglo de los productos ya con filtro
}
 

  return (
    <div className="Principal">

<Navbar/>

<Routes>

<Route path="/" element= {<Navigate to ="/" />} />
<Route path="/Inicio" element= {<BodyCenter/>} />
<Route path="/Productos" element= {<ProductContainer article={article} />}
/>
<Route path="/Categorias" element= {<MenuCategorias
   allCategory={allCategory}
   filterCategory={filterCategory} 
   setArticle={setArticle} 
/>


} />

<Route path="/Contacto" element={"Estas son las categorias"} />
<Route path="/Productos/:id"  />





</Routes>

   {/* <ProductContainer>  

  {article.map((product) => 

<Product
key={product.id}
imagen={product.imagen}
description={product.description}
category={product.category}
price={product.price}

/>


  )}  

</ProductContainer>         */}



<ContadorLikes/>



 </div>

// a ProductContainer le vamos a pasar product

 )
}

export default App
