import React from "react";


function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoaging] = React.useState(true);
    const [error, setError] = React.useState(false);
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
  
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
          }
  
          setLoaging(false);
        } catch (error) {
          setLoaging(false);
          setError(true);
        }
      }, 2000);
    }, []);
  
    const guardarItem = (newitem) => {
      localStorage.setItem("tareas_v1", JSON.stringify(newitem));
      setItem(newitem);
    };
  
    return [item, guardarItem, loading, error];
  }
  
  export {useLocalStorage};