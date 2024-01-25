import { useState,useEffect} from "react";
import React from "react";
import Loader from "./Loader";


export const AllMenuContext = React.createContext()
export const AllMenus = (props) => {

    //State
    let [menu, setMenu] = useState([]);
    let [loading, setLoading] = useState(false);

     //Get all Menus
  // async function getallMenus() {
  //   setLoading(true);
  //   const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
  //   let response = await fetch(API_URL);
  //   let data = await response.json();
  //   setMenu(data.meals);
  //   setLoading(false);
  // }
  // useEffect(() => {
  //   getallMenus();

  // }, []);


  async function getallMenus() {
    try {
      setLoading(true);
      const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
      let response = await fetch(API_URL);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      let data = await response.json();
      setMenu(data.meals);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }
  useEffect(() => {
    getallMenus();

  }, []);

  console.log(menu,"loadingissuress");


    return (
        <AllMenuContext.Provider value={menu}>
           
            {!loading ?  props.children : <Loader />}
            {/* {loading ? <Loader /> : props.children} */}

        </AllMenuContext.Provider>
    )
    
}
