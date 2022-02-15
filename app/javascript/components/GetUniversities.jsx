import React, { useLayoutEffect, useState } from "react";
import axios from "axios";
import { element } from "prop-types";

const GetUniversities = (props) => {
  const [joke, setJoke] = useState([]);

  const noJokes = () => {
    if (joke.length == 0) {
      return <p>if the jokes are dry, I am just a messenger</p>;
    }
    return joke;
  };
  const getJoke = async () => {
    const jokes_url = "https://icanhazdadjoke.com/slack";
    await axios({
      method: "get",
      url: jokes_url,
      headers: { "Content-Type": "application/json" },
    }).then((response) => setJoke(response.data["attachments"][0]["text"]));
  };

  useLayoutEffect(() => {
    const timer = setInterval(getJoke, 3000);
    return () => clearInterval(timer);
  }, [joke]);
  return (
    <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
      <div className="jumbotron jumbotron-fluid bg-transparent">
        <div className="container secondary-color">
          <h1 className="display-4">There are no universities yet</h1>
          <p className="lead">
            This might be the first time running this project
          </p>
          <p className="lead">Enjoy these jokes while I get the data.</p>
          <p className="lead">When the data is ready it would be rendered.</p>

          <hr className="my-4" />

          <div className="jokes">{noJokes()}</div>
          <hr className="my-4" />
        </div>
      </div>
    </div>
  );
};
export default GetUniversities;
