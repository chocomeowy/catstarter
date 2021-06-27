import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
function CatPic() {
  const [cat, setCat] = useState("Cat image");

  useEffect(() => {
    const url2 = "https://thatcopy.pw/catapi/rest/";
    let myData;
    axios
      .get(url2)
      .then((response) => {
        //console.log("axios", response.data);
        myData = response.data;
        setCat(myData.webpurl);
      })
      .catch((error) => {
        //? URL returns nothing or it returns status between 200 300
        console.log("axios error", error);
      });
  }, []);

  return (
    <div>
      <>
        <div>
          <img src={cat} alt="cat pic" />
        </div>
      </>
    </div>
  );
}

export default CatPic;
