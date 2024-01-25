import React, { useContext, useState } from "react";
import CardDish from "./CardDish";
import Popup from "./Popup";
import { AllMenuContext } from "./AllMenuContext";
import AddToCart from "./AddToCart";

function SpecialDishes(props) {
  let [showPopUp, setShowPopup] = useState(false);
  let [currentDish, setCurrentDish] = useState("");
  let [addToCart, setAddToCart] = useState([]);

  const allMenus = useContext(AllMenuContext);

  //Lets show the popup
  function showPopupHandler(dishName) {
    setCurrentDish(dishName);
    setShowPopup(true);
    // event.preventDefault()
  }
  //Lets close the popup
  function closePopupHandler() {
    setShowPopup(false);
  }

  //Add to cart
  function addToCartHandler(addToCartImg, addToCartTitle) {
    setAddToCart([ ...addToCart,
      {
        img: addToCartImg,
        title: addToCartTitle,
      },
    ]);
  }

  let maxSpecialDishes = 6;

  let specialMenus = allMenus.map((menuItem, index) => {
    if (index < maxSpecialDishes) {
      return (
        <CardDish
          menuItem={menuItem}
          showPopUp={showPopupHandler}
        />
      );
    }
  });
  console.log(addToCart,"lo,");

  return (
    <section className="special-dishes">
      {showPopUp && (
        <Popup
          closePopup={closePopupHandler}
          currentDish={currentDish}
          allDishes={allMenus}
          addToCartHandler={addToCartHandler}
        ></Popup>
      )}
      <div className="container">
        <AddToCart addToCart={addToCart} />

        <div className="special-dishes-content text-center">
          <h2>Our Special Dishes</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
            voluptatibus a animi corrupti illo? Numquam inventore amet molestiae
            quia in dolores. Ab facilis natus quidem.
          </p>
          <div className="special-dishes-list">
            <ul className="flex flex-wrap gap-25">{specialMenus}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecialDishes;
