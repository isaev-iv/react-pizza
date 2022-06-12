import React from "react";
import "./scss/app.scss";
// import pizzas from "./assets/pizzas.json";
import Header from "./components/Header.jsx";
import Categories from "./components/Categories.jsx";
import Sort from "./components/Sort.jsx";
import PizzaBlock from "./components/PizzaBlock";

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch("https://62a62cccb9b74f766a44cc83.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((obj) => (
              <PizzaBlock
                key={obj.id}
                title={obj.title}
                price={obj.price}
                image={obj.imageUrl}
                sizes={obj.sizes}
                types={obj.types}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
