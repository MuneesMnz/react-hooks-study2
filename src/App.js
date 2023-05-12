import logo from "./logo.svg";
import "./App.css";
import UseEffectMouseMoveEvent from "./Components/useEffectMouseMoveEvent";
import CounterUseEffect from "./Components/CounterUseEffect";
// import ComponentA from "./Components/UseContext/ComponentA";
import React, { useReducer } from "react";
import CounterOne from "./Components/UseReducer/CounterOne";
import CounterTwo from "./Components/UseReducer/CounterTwo";
import CounterThree from "./Components/UseReducer/CounterThree";
import ComponentB from "./Components/UseReducer/UseReducer+UseContext/ComponentB";
import ComponentA from "./Components/UseReducer/UseReducer+UseContext/ComponentA";
import ComponentC from "./Components/UseReducer/UseReducer+UseContext/ComponentC";
import DataFetching from "./Components/FetchDataWithUseReducer/DataFetching";
import DataFetchingTwo from "./Components/FetchDataWithUseReducer/DataFetchingTwo";
import Parent from "./Components/UseCallback/Parent";
import Counter from "./Components/UseMemo/Counter";

// useContext Methods
// ---------------------
// export const userContext = React.createContext();
// export const MailContext = React.createContext();

// UseContext + UseReducer
// ---------------------
// export const CounterContext = React.createContext();

// const initialValue = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "incriment":
//       return state + 1;

//     case "decriment":
//       return state - 1;

//     case "reset":
//       return initialValue;
//     default:
//       return state;
//   }
// };

function App() {
  // UseContext + UseReducer
  // ---------------------
  // const [count, dispatch] = useReducer(reducer, initialValue);

  // useContext Methods
  // const data = {
  //   email: "mnz@gmail.com",
  //   name: "munees",
  // };

  return (
    <div style={{ textAlign: "center" }}>
      <Counter />

      {/* 
      UseCallback
      -------------
      <Parent /> */}

      {/* // DataFetching useing UseReducer And UseState //
      -------------------------------------------- */}
      {/* //   <DataFetching />
    //   <DataFetchingTwo /> */}

      {/* UseContext + UseReducer  */}
      {/* // --------------------- */}
      {/* <CounterContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <div style={{marginBottom:"10px"}}>Counter -{count}</div>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CounterContext.Provider> */}

      {/* UseReducer  */}
      {/* // --------------------- */}
      {/* <CounterOne />
      <CounterTwo />
      <CounterThree /> */}
      {/* useContext Components  */}
      {/* // --------------------- */}
      {/* <userContext.Provider value="MNZ">
        <MailContext.Provider value={data}>
          <ComponentA />
        </MailContext.Provider>
      </userContext.Provider> */}
    </div>
  );
}

export default App;
