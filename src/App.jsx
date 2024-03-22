import { useState } from "react";
import axios from "axios";

function App() {
  const [imgUrl, setImgUrl] = useState("");
  const [query, setQuery] = useState("");

  const imageHandler = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos`,
        {
          params: {
            query: query,
            client_id: "B9dWf0LUP-q7yo3vyC5Ivm4AdFxCJEC7xfmu4MdhxZY",
          },
        }
      );

      console.log(response.data.results[0].urls.small);
      setImgUrl(response.data.results[0].urls.small);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <h2 className="text-center">Image Genrator</h2>
          <div className="flex">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
            <button className="btn" onClick={imageHandler}>
              Search
            </button>
          </div>

          <div className="img-container">
            <img src={imgUrl} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
