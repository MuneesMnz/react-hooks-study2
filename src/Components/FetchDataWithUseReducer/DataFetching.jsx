import axios from "axios";
import React, { useEffect, useState } from "react";

const DataFetching = () => {
  const [loading, setloading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        setloading(false);
        setPost(res.data);
        setError("");
      })
      .catch((error) => {
        setloading(false);
        setPost({});
        setError("something went wrong");
      });
  }, []);
  return <div>
    <h4>Fetching Useing UseState</h4>
    {loading ? "Loading...": post.title}
    {error? error: null}
  </div>;
};

export default DataFetching;
