import Categories from './components/Categories';
import Header from './components/Header';
import PizzaCart from './components/PizzaCart';
import Sort from './components/Sort';
import styles from './scss/app.scss';

function App() {
  return (
    <div className={styles.app}>
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
              <PizzaCart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
