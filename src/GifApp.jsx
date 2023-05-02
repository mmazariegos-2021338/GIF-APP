
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
export const GifApp = () => {
  const [categorias, setCategorias] = useState(['Bocchi the rock']);
  
  const onAddCategory = ( newCategoryAdded) =>{

    //Analizar si la categoría insertada ya existe en el array 
    if (categorias.includes(newCategoryAdded)) return;
    

    setCategorias([ newCategoryAdded, ...categorias])
  }
  return (
    <>
    {/* Titulo */}
      <h1>GifApp</h1>

      <AddCategory  newCategory = {(value) => onAddCategory(value)} />
        {
          categorias.map(categoria =>
            (
              <GifGrid key={categoria} category = {categoria}></GifGrid>
            )
          )
        } 
      
    {/* Input */}

    {/* Listado de Gifs */}
      {/* Gif item */}
    </>
  )
}