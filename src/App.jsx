import { useEffect, useState } from "react";
import axios from "axios";
import Form from "./components/Form.jsx";
import PicCard from "./components/PicCard.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setPictureData } from "./features/picturesSlice.js";

const App = () => {
  const dispatch = useDispatch();
  const picsData = useSelector((state) => state.pictures.pictures);

  const getData = () => {
    axios
      .get("http://localhost:5000/pictures")
      .then((res) => dispatch(setPictureData(res.data)));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>NFT Gallery</h1>
      <Form getPictures={getData} />
      <div className="cards-container">
        {picsData?.map((pic, index) => (
          <PicCard key={index} pic={pic} />
        ))}
      </div>
    </>
  );
};

export default App;
