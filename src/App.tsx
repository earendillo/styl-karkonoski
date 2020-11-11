import React from 'react';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import tshirt1 from './images/tshirt1.png';
import tshirt2 from './images/tshirt2.png';
import tshirt3 from './images/tshirt3.png';
import { Header } from "./components/header/Header";
import { ShopList } from './components/ShopList/ShopList';
import { Landing } from "./components/landing/Landing";

import './App.scss';

function App() {
  const ref = React.createRef();
  const handleClick = () => {
      ref.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      })
  }

  const scroll$ = fromEvent(document, 'scroll');

  scroll$.pipe(map(event => console.log(`scroll event`, event)))

  return (
    <div className='App'>
        <header className='top-bar'>
            <div className='menu-container'>
                <div className='logo-container'>LOGO</div>
                <nav className='navigation-container'>
                    <ul className='navigation-list'>
                        <li>Start</li>
                        <li>O nas</li>
                        <li>Blog</li>
                        <li>Sklep</li>
                        <li>Kontakt</li>
                    </ul>
                </nav>
            </div>
        </header>
        <div className='gradient-placeholder'></div>
        <div className='main-topic'>
            <div className='topic-container'>
                <div className='topic-top'>
                    <h2>Twoje Karkonosze,</h2>
                </div>
                <div className='topic-bottom'>
                    <h2>Nasza Pasja</h2>
                </div>
            </div>
            <a href="#content" className='see-more'>
                <span className='span-cta' />
                <i className='fi-xnsdxx-chevron-solid'></i>
            </a>
        </div>
        <main className='content-container' id='content'>
            <div className='shop-header'>
                <h2>Nowości w sklepie:</h2>
            </div>
            <div className='shop-items-container'>
                <div className='shop-item'>
                    <a href="">
                        <img src={tshirt1} alt="t-shirt"/>
                    </a>
                    <div className='shop-item-details-container'>
                        <p className='shop-item-name'>T-shirt</p>
                        <p className='shop-item-description'>Pomarańczowy t-shirt z logo</p>
                        <p className='shop-item-price'>79 PLN</p>
                    </div>
                </div>
                <div className='shop-item'>
                    <a href="">
                        <img src={tshirt2} alt="t-shirt"/>
                    </a>
                    <div className='shop-item-details-container'>
                        <p className='shop-item-name'>T-shirt</p>
                        <p className='shop-item-description'>Czarny t-shirt z logo</p>
                        <p className='shop-item-price'>79 PLN</p>
                    </div>
                </div>
                <div className='shop-item'>
                    <a href="">
                        <img src={tshirt3} alt="t-shirt"/>
                    </a>
                    <div className='shop-item-details-container'>
                        <p className='shop-item-name'>T-shirt</p>
                        <p className='shop-item-description'>Zielony t-shirt z logo</p>
                        <p className='shop-item-price'>79 PLN</p>
                    </div>
                </div>
            </div>
        </main>
        <div className='landing-placeholder'></div>

        <footer className='footer-container'></footer>
        <div className='bottom-bar'></div>
    </div>
  );
}

export default App;

// <Header />
// <Landing handleClick={handleClick}/>
// <div ref={ref}>
//     <ShopList />
// </div>
// <footer className="footer">
//     &#xA9; 2020 olrajtsrizerwd styl-karkonoski.pl
// </footer>

// <article className='blog-post-container'>
//     <h2>LOREM IPSUM</h2>
//     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales tempus ligula, ut rutrum nunc pretium eget. Fusce commodo elit sit amet nisi faucibus convallis. Nulla rutrum vel diam a elementum. Phasellus in auctor mi, sit amet rutrum justo. Mauris lorem diam, viverra congue convallis vitae, condimentum at odio. Fusce placerat justo orci, ac rutrum arcu ultrices non. Nulla libero leo, commodo non egestas nec, auctor quis ipsum. Duis bibendum libero et est commodo, ut finibus lectus ultrices. In maximus at elit a eleifend. Donec placerat quis velit in eleifend. Vivamus vel euismod est, a elementum lorem.</p>
//     <p>Quisque blandit tempus rhoncus. Proin in lorem sed augue porttitor consectetur. Quisque iaculis enim lorem, ac feugiat eros ullamcorper in. Proin pretium, nunc id egestas ultrices, libero diam pulvinar metus, eget sollicitudin tellus diam eu sem. Integer non diam enim. Proin commodo mollis lorem sit amet tempus. Pellentesque in lobortis ipsum. Donec lobortis leo lacus, pretium consectetur metus egestas in. Nulla tempus ipsum sit amet odio molestie, quis elementum ante viverra. Mauris semper lacinia nibh id tincidunt.</p>
//     <p>Praesent imperdiet ultrices nibh non dignissim. Curabitur sed ullamcorper orci, quis ultrices dolor. Quisque malesuada nisl eget enim euismod, at lobortis est convallis. In aliquet velit in ante vestibulum, ac imperdiet dolor consequat. Quisque semper magna risus, ut dictum neque dignissim ut. Pellentesque fermentum molestie ipsum, nec vestibulum dolor. Praesent efficitur porttitor enim, vitae pellentesque ligula tincidunt at. Proin sagittis, nisi sed vestibulum iaculis, elit eros hendrerit dolor, ut dictum nisi nulla in lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam scelerisque molestie lorem, a commodo mi dignissim eu. Vivamus dignissim, magna a placerat egestas, ligula leo semper odio, sit amet tincidunt dui risus ac arcu. Sed id lorem in libero vulputate consequat sed scelerisque turpis. Mauris sit amet est et libero porttitor venenatis. Mauris lacinia sagittis dignissim.</p>
//     <p>Morbi in rutrum nulla. Duis pellentesque libero nibh, at scelerisque quam ultrices imperdiet. Phasellus tortor purus, porttitor eget pulvinar sit amet, condimentum non purus. Cras pretium enim at dolor vulputate tincidunt. Nulla facilisi. Proin faucibus aliquam massa. Duis nulla mi, congue gravida tortor quis, euismod iaculis mauris. Aenean gravida gravida pellentesque. Morbi ultricies libero eu vulputate auctor. Fusce et mollis nisl. Curabitur imperdiet odio id nisl auctor tincidunt. In pulvinar mi quis volutpat egestas. Vestibulum sodales consectetur elit, et vestibulum ipsum pulvinar nec. Ut elit risus, euismod at turpis vel, blandit lacinia nisl.</p>
//     <p>Pellentesque sit amet lectus fringilla, sollicitudin odio a, vestibulum metus. Suspendisse eu tellus tincidunt, cursus ipsum non, ullamcorper elit. Nullam congue diam non mauris tristique mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel vehicula nibh. Sed nec ante fermentum, volutpat erat quis, ullamcorper ante. Morbi fringilla cursus elit vitae aliquet. Integer gravida velit id quam feugiat sodales. Aliquam ultricies ligula nulla, sed mattis massa scelerisque a. Nam blandit scelerisque nibh a tempor. Nullam tincidunt sapien at varius sagittis. Nulla quis vestibulum est.</p>
// </article>

