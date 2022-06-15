import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort.jsx";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";

const Home = ({ searchValue, setSearchValue }) => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: "популярности",
    sortProperty: "rating",
  });

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  const skeletons = [...new Array(6)].map((_, i) => <Skeleton key={i} />);
  React.useEffect(() => {
    const search = searchValue ? `&search=${searchValue}` : "";

    fetch(
      `https://62a62cccb9b74f766a44cc83.mockapi.io/items?${
        categoryId > 0 ? `category=${categoryId}` : ""
      }&sortBy=${sortType.sortProperty}&order${search}`
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategory={(i) => setCategoryId(i)}
        />
        <Sort value={sortType} onClickType={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">
        {categoryId === 0
          ? "Все пиццы"
          : "Все " +
            categories[categoryId][0].toLowerCase() +
            categories[categoryId].slice(1)}
      </h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
    </div>
  );
};

export default Home;
