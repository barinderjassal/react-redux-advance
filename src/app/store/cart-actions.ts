import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

// custom actions to dispatch, AKA Thunks
/**
 *
 * A thunk is kinda custom action that is a function and returns another function
 * that can be disptached from wherever we want.
 */
export const sendCartDataAction = (cart: any) => {
  // we can return async function from this action
  return async (dispatch: any) => {
    // dispatch Sending Notification as soon as this fetch function is called
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending',
        message: 'Sending cart data..'
      })
    );

    const sendRequest = async () => {
      const data = await fetch(
        'https://react-http-practice-c7fbb-default-rtdb.firebaseio.com/redux-cart.json',
        {
          method: 'PUT',
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      if (!data.ok) {
        throw new Error('Sending cart data failed...');
      }
    };

    try {
      await sendRequest();
      // if API hit is successful
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent Cart data Successfully'
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending Cart data failed!'
        })
      );
    }
  };
};

export const getCartDataAction = () => {
  return async (dispatch: any) => {
    // dispatch(
    //   uiActions.showNotification({
    //     status: 'pending',
    //     title: 'Fetching',
    //     message: 'Fetching cart data..'
    //   })
    // );

    const sendRequest = async () => {
      const response = await fetch(
        'https://react-http-practice-c7fbb-default-rtdb.firebaseio.com/redux-cart.json'
      );
      if (!response.ok) {
        throw new Error('Fetching cart data failed...');
      }
      const data = await response.json();
      return data;
    };

    try {
      // call get API function
      const cartData = await sendRequest();
      // if API hit is successful
      if (cartData) {
        // update cart items using replaceCart reducer method
        dispatch(
          cartActions.replacecart({
            items: cartData.items || [],
            totalQuantity: cartData.totalQuantity
          })
        );

        dispatch(
          uiActions.showNotification({
            status: 'success',
            title: 'Success!',
            message: 'Cart Data Fetched Successfully!'
          })
        );
      }
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetch Cart data failed!'
        })
      );
    }
  };
};
