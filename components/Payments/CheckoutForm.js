import React from 'react';
import ReactDOM from 'react-dom';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

export default function CheckoutForm (){
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    console.log("Check Event :", event);
    event.preventDefault();
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement className="mb-5"/>
      <button className="text-lightBlue-500 bg-transparent border border-solid border-lightBlue-500 hover:bg-lightBlue-500 hover:text-white active:bg-lightBlue-600 font-bold uppercase px-4 py-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" disabled={!stripe}>
        <i className="fas fa-heart"></i> Donate
      </button>
    </form>
  );
};
