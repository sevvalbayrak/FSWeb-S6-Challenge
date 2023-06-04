import React, { useEffect, useState } from "react";
import axios from "axios";
import Karakterler from "./components/Karakterler";
import Page from "./components/pagination";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [data, setData] = useState([]);
  const [page, setPage] = useState(2);

  useEffect(() => {
    axios.get("https://swapi.dev/api/people/?page=" + page).then((res) => {
      setData(res.data.results);
    });
  }, [page]);

  const handlePageChange = (event) => {
    setPage(event.target.textContent);
  };

  const getPreviousPage = (event) => {
    const newPage = page - 1;
    console.log(newPage);
    if (newPage >= 1) {
      setPage(newPage);
    }
  };

  return (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
      <Karakterler data={data} />
      <Page
        className="page"
        handlePageChange={handlePageChange}
        getPreviousPage={getPreviousPage}
      />
    </div>
  );
};

export default App;
