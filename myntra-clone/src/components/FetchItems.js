import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { itemsAction } from "../store/itemSlice"

const FetchItems = () => {

   const fetchStatus =  useSelector(store => store.fetchStatus)
   const dispatch =  useDispatch()
   
   
   useEffect( () => {
      if (fetchStatus.fetchDone) return;

            
      fetch("http://localhost:8080/items")
      .then((res) => res.json())
      .then(({items}) => {
         dispatch(itemsAction.initialItems(items));
        
         
                  
      });   

      return () => {
      
      };     


   }, [fetchStatus] );

   return <></>


} 

export default FetchItems;