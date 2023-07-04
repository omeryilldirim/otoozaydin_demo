import shop from './img/shop.jpeg'
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    window.location.replace('https://otoozaydin-dev-ed.develop.my.site.com/otoozaydin/s/?language=tr');
  }, []);
  return (
    <div className="home">
      <h1 className="title">OTO_ÖZAYDIN</h1>
      <p className="desc">Websitemiz Yakında Hizmetinizde!</p>
      <p className='desc'>05322848817</p>
      <div>
        <img className="image" src={shop} alt="oto_özaydin" />
      </div>

    </div>
  )
}

export default App;
