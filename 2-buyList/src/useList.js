import React, { useState, useRef, useEffect } from 'react';

export function useList() {
  const [list, setList] = useState([]);

  const createItem = () => {
    console.log("createItem")

    const newItem = {
      id: `${list.length + 1}_${Date.now()}_${Math.floor(Math.random() * 100)}`
      , title: "", done: false
    };
    setList(list => [...list, newItem]);


    return list
  };

  const setItemTitle = (id, title) => {
    console.log("setItemTitle")
    const newList =
      list.map((item) => {
        if (item.id == id) {

          return { ...item, title: title };
        }
        return item;
      })
    setList(newList)
    return (newList)
  }

  const toggleItem = (id) => {
    const newList =
      list.map((item) => {
        if (item.id == id) {

          return { ...item, done: !item.done };
        }
        return item;
      })
    setList(newList)
    return (newList)
  };



  const deleteItem = (id) => {
    console.log("deleteItem");
    const newList = list.filter(item => item.id !== id);
    setList(newList)
    return (newList)
  };

  return {
    list,
    createItem,
    setItemTitle,
    toggleItem,
    deleteItem,

  };
}

export function useFocus() {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return ref;
}