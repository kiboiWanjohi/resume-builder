import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import Inputitem from "./components/Inputitem";
import Promptuser from "./components/Promptuser";
import Resume from "./components/Resume";
import Nonexistentpage from "./components/Nonexistentpage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
const convertor = require("number-to-words");
function App() {
  const { userInfo, setUserInfo } = useState({});
  const { source, setSource } = useState("");
  const random_number = Math.floor(Math.random() * 10e4);
  const random_alpha_num = convertor.toWords(random_number);
  const getRandomNumber = (randNum) => {
    return convertor.toWords(randNum);
  };
  const generateImage = () => {
    setSource(`https://robohash.org/stefan-${random_alpha_num}`);
    console.log(source);
  };
  useEffect(() => {
    generateImage();
  }, []);
  function handleChange(e) {
    setUserInfo((prevInfo) => {
      return { ...prevInfo, [e.target.name]: e.target.value };
    });
  }
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Promptuser
              handleChange={handleChange}
              userObject={userInfo}
              imageSource={source}
            />
          }
        />
        <Route
          path="/resume"
          element={<Resume userObject={userInfo} imageSource={source} />}
        />
        <Route path="*" element={<Nonexistentpage />} />
      </Routes>
    </Router>
  );
}

export default App;
