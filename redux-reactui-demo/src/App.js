import React from 'react';
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './Redux/store'
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/iceCreamContainer';
import BurgerContainer from './components/BurgerContainer';
import HookIceCreamContainer from './components/HookIceCreamContainer';
import HooksBurgerContainer from './components/HooksBurgerContainer';
import NewCakeContainer from './components/NewCakeContainer'
import ItemContainer from './components/ItemContainer';
import AsyncUserContainer from './components/AsyncUserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 style={{ textAlign: 'center' }}>
          Redux in React UI
      </h1>
        <ul>
          <li>
            <h2>Redux Cake Container:</h2>
            <CakeContainer></CakeContainer>
            <h2>Redux Container using useSelector & useDispatch Hook:</h2>
            <HooksCakeContainer></HooksCakeContainer>
          </li>

          <li>
            <h2>Redux IceCream Container:</h2>
            <IceCreamContainer></IceCreamContainer>
            <h2>Redux Container using useSelector & useDispatch Hook::</h2>
            <HookIceCreamContainer></HookIceCreamContainer>
          </li>
          <li>
            <h2>Redux Burger Container:</h2>
            <BurgerContainer></BurgerContainer>
            <h2>Redux Container using useSelector & useDispatch Hook::</h2>
            <HooksBurgerContainer></HooksBurgerContainer>
          </li>
          <li>
            <h2>Redux Burger Container:</h2>
            <NewCakeContainer></NewCakeContainer>
          </li>
          <li>
            <h2>Redux - mapStateToProps & mapDispatchToProps</h2>
            <ItemContainer iceCream ></ItemContainer>
            <ItemContainer cake></ItemContainer>
          </li>

          <li>
            <h2>Async - Actions</h2>
            <AsyncUserContainer user={'prcv'}></AsyncUserContainer>
          </li>
        </ul>
      </div>
    </Provider>
  );
}

export default App;
