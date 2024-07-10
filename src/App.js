import "./styles.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPhotos } from "./actions";

export default function App() {
  const [keyword, setKeyword] = useState("");

  const URL = "https://jsonplaceholder.typicode.com/photos";

  const photosReducer = useSelector((state) => state.photosReducer);

  const dispatch = useDispatch();

  const [filteredPhotos, setFilteredPhotos] = useState([]);

  useEffect(() => {
    try {
      fetch(URL)
        .then((resp) => resp.json())
        .then((data) => {
          console.log("Data list photo : skkkkkssssss    kkkkk", data);
          dispatch(setPhotos(data));
        });
    } catch (error) {
      setError(true);
    }
  }, []);

  useEffect(() => {
    if (keyword && photosReducer.photos?.length > 0) {
      const newData = photosReducer.photos.filter((item) =>
        item.thumbnailUrl.includes(keyword)
      );

      setFilteredPhotos(newData);
    }
  }, [keyword]);

  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search"
        style={{ marginBottom: "20px" }}
      />
      <div style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}>
        {!keyword &&
          photosReducer.photos?.length > 0 &&
          photosReducer.photos?.map((item) => {
            return (
              <div>
                <img src={item.thumbnailUrl} />
              </div>
            );
          })}
        {keyword &&
          filteredPhotos.length > 0 &&
          filteredPhotos.map((item) => {
            return (
              <div>
                <img src={item.thumbnailUrl} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
