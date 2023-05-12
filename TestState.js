import react from "react";
import textContext from "./testContext";


const TestState = (props) => {

    const state ={
        "name": "Adnan",
        "class": "10th",
    }

  return (
        <textContext.Provider value={state}>
            { props.children }
        </textContext.Provider>
  )
}

export default TestState;
