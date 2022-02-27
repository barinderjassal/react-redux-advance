import { FC, createElement, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Cart, Layout, Products, Notifications } from './components';
import { sendCartDataAction, getCartDataAction } from './store/cart-actions';

let isInitialRender = true;

export const App: FC = () => {
  const showCart = useSelector((state: any) => state.ui.isCartVisible);
  const dispatch = useDispatch();

  // get cart State from redux
  const cart = useSelector((state: any) => state.cart);

  // get notification state from redux
  const notification = useSelector((state: any) => state.ui.notification);

  useEffect(() => {
    // never write the useEffect function as async, instead create a async function in the useEffect.
    /** 
    const sendCartData = async () => {
    // dispatch Sending Notification as soon as this fetch function is called
    
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending',
        message: 'Sending cart data..'
      }));

      // hit the api and send data
      const data = await fetch('https://react-http-practice-c7fbb-default-rtdb.firebaseio.com/redux-cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // if there is some error
      if (!data.ok) {
        throw new Error('Sending cart data failed...');
      }

      // if API hit is successful
      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent Cart data Successfully'
      }));
    }
    */

    // this is to make sure that on the first render, we do not hit API request.
    // so in that if statement, set the flag to false, so that next time it runs as required.
    if (isInitialRender) {
      isInitialRender = false;
      return;
    }
    // dispatch also accepts action creators that returns functions and redux executes that function.
    // It also has dispatch argument automatically
    if (cart.changed) {
      dispatch(sendCartDataAction(cart));
    }
    
    // now catch any type of error using catch on sendCartData function as it returns promise
    /**
      sendCartData().catch((error: any) => {
        dispatch(uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending Cart data failed!'
        }));
      });
    */

  }, [cart, dispatch]);

  // this effect is for fetching the data
  useEffect(() => {
    dispatch(getCartDataAction());
  }, [dispatch]);

  return (
    <Fragment>
      {notification && <Notifications status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
};
