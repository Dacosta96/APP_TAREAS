import React from "react";


function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoaging] = React.useState(true);
    const [error, setError] = React.useState(false);
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName); // inicializar datos en local storage convertiendo string a array
          let parsedItem;
  
          if (!localStorageItem) {
            // condicion para determinar si se tiene infomacion en el local storage
            localStorage.setItem(itemName, JSON.stringify(initialValue)); // si no se tiene info genera por defecto in array vacio
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem); // si tiene info se utiliza PARSE para visualizarla en el navegador
            setItem(parsedItem);
          }
  
          setLoaging(false); // una vez cargue los datos iniales se cambia el estador de loging
        } catch (error) {
          setLoaging(false);
          setError(true);
        }
      }, 2000);
    }, []);
  
    const guardarItem = (newitem) => {
      // funcion para guardar cambios en el local Storage
      localStorage.setItem("tareas_v1", JSON.stringify(newitem)); // actualizar y guardar tareas en el LOCAL STORAGE
      setItem(newitem); // enviar tareas actuales
    };
  
    return [item, guardarItem, loading, error];
  }
  
  export {useLocalStorage};