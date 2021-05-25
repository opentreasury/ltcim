import React from 'react';
import ReactDOM from 'react-dom';

export default function CheckoutForm (){
  return (
    <form >
        <a href="https://donorbox.org/bitrupee-1" className="text-lightBlue-500 bg-transparent border border-solid border-lightBlue-500 hover:bg-lightBlue-500 hover:text-white active:bg-lightBlue-600 font-bold uppercase px-4 py-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
          <i className="fas fa-heart"></i> Donate
        </a>
    </form>
  );
};
