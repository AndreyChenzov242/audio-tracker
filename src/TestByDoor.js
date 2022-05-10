import React from "react";
import axios from "axios";

const CLIENT_ID = "1a6b89a021c64fe2876337bbe552734d";
const CLIENT_SECRET = "9ead6afb18ad4ffdbe419de3db49a8aa";

export default function TestByDoor() {
  axios
    .get("https://api.spotify.com/v1/search?q=eminem&type=multi", {
      headers: {
        Authorization:
          "Bearer BQAjbygMh7W0yCqcY5TayqMo3EcUDylfiNJ5hP8ZQwmYX--N5adA65RbYEJaQ9N_QY1DGzzO1kA1lP1gUyjlToqic_UyqC2DMpBuD1dshWak-Nxk3PpZDmZckjy_fXkvy3xc18C9X29ZZYAbaPbkhhNn9UGicNTARMejdEUqbZs21g",
        "Content-Type": "application/json",
      },
    })
    .then((response) => console.log("response", response.data));

  return <div>Test</div>;
}
