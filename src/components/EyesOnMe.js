// Code EyesOnMe Component Here
import React from 'react';

function EyesOnMe(){
    function focusOnMe(){
        console.log("Good!");
    }

    function itsBlurry(){
        console.log("Hey! Eyes on me!");
    }

    return (
        <button onFocus={focusOnMe} onBlur={itsBlurry}>
          Eyes on me
        </button>
      );
}

export default EyesOnMe;