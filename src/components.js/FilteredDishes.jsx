import React, { useState,useContext,useEffect } from "react";
import Pagination from "./Pagination";
import CardDish from "./CardDish";
import { AllMenuContext } from "./AllMenuContext";

function FilteredDishes(props) {
  let allMenus = useContext(AllMenuContext)


  let [filteredDishes, setFilteredDishes] = useState([]);
  let [activeDish, setActiveDish] = useState("Beef"); //active is empty now
  let[currentPage, setCurrentpage] = useState(1);
  let[itemsPerpage, setItemsperPage] = useState(4);
  let indexOfLastDish = currentPage * itemsPerpage;
  let indexOfFirstDish = indexOfLastDish - itemsPerpage;
  let showTheseDishesNow = filteredDishes.slice(indexOfFirstDish, indexOfLastDish);

  let [menuCategory, setMenuCategory] = useState([]);
  let[singleDish, setSingleDish] = useState([]);
  // let[currentPage, setCurrentPage] = useState(1);
  // let[itemsPerPage, setItemsPerPage] = useState(4);

  //Get all categories
  async function getallCategories() {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
    let response = await fetch(API_URL);
    let categoryData = await response.json();
    setMenuCategory(categoryData.categories);
 
  }

  //Get Only one dish
  async function getOnlyOneDish() {
    try {
      const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";
      let response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      let singleDishData = await response.json();
      setSingleDish(singleDishData.meals);
    } catch (error) {
      console.error("Error fetching or parsing data:", error);
    }
  }
  
  useEffect(() => {
 
    getallCategories();
    getOnlyOneDish();
  }, []);

 




  // Lets show only single dishes
  let maxItem = 4;//limit no.of beef items when loading then page
  let singleDishItems = singleDish.map((item , index ) => {
    if(index < maxItem){
    return (
      <li>
        <img src={item.strMealThumb} className="br-10" alt="" />
        <h5>{item.strMeal}</h5>
      </li>
    );
    }
  });

  //show Dishes on click
  function showFilterDishesHandler(category) {
    setSingleDish([]);
    setActiveDish(category);

    let filteredDishesAre = allMenus
      .filter((item) => {
        return item.strCategory === category;
      })
      .map((menuItem) => {
        return (
         <CardDish menuItem={menuItem}/>
        );
      });
    setFilteredDishes(filteredDishesAre);
  }


  //Lets Show all the Categories
  let allcategories = menuCategory.map((item) => {
    return (
      <li
      // key={item.id}
        className={item.strCategory == activeDish ? "active" : ""}
        onClick={() => {
          showFilterDishesHandler(item.strCategory);
        }}
      >
        {item.strCategory}
      </li>
    );
  });

  //Rendering
  return (
    <div className="container">
      <div className="text-center">
        <h2>Choose Your Dishes</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
          ipsum sint assumenda expedita totam earum obcaecati eum, hic quasi,
          facilis perferendis? Quae, optio quas. Minus?
        </p>
        <div className="filtered-dishes">
          <ul>{allcategories}</ul>
        </div>
        <div className="filtered-dishes-results">
          <ul className="flex flex-wrap gap-25">
            {singleDishItems}  

            {singleDishItems !=0 || filteredDishes.length != 0 ? showTheseDishesNow :
                <div className="alert">
                <h3>Sorry. No items found </h3>
                <h4>Please try another dishes</h4>
              </div>
            }

          </ul>
        </div>
            <Pagination 
            filteredDishes= {filteredDishes}
            itemsPerpage= {itemsPerpage}
            currentPage= {currentPage}
            setCurrentpage= {setCurrentpage}
            />
      </div>
    </div>
  );
}

export default FilteredDishes;
