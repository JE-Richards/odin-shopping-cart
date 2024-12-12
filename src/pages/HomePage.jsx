import Header from '../components/Header';
import Card from '../components/Card';

const temp = {
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  price: 23.99,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
};

function HomePage() {
  return (
    <>
      <Header />
      <Card obj={temp} />
    </>
  );
}

export default HomePage;
