import axios from "axios";
import React, { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  error: "",
  post: {},
};
const reducer = (state, action) => {
  switch (action.type) {
    case "sucess":
      return {
        loading: false,
        post: action.payloads,
        error: "",
      };

    case "fail":
      return {
        loading: false,
        post: {},
        error: "Something Went Wrong",
      };

    default:
      return state;
  }
};
const DataFetchingTwo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1").then((res) => {
      dispatch({ type: "sucess" ,payloads:res.data});
    }).catch(error=>{
        dispatch({type:"fail"})
    });
  }, []);
  return <div>
    <h4>Fetching Useing UseReducer</h4>
    {state.loading ? "Loading...": state.post.title}
    {state.error? state.error: null}
  </div>;
};

export default DataFetchingTwo;
