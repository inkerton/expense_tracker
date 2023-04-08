import React from "react";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <img
        className="home_img1"
        src="https://image.cnbcfm.com/api/v1/image/101913928-94989168.jpg?v=1532564437"
        alt=""
      />
      <div className="img_text1">Do you find it challenging to resist the allure of attractive purchases and stay within your budget?</div>
      <img
        className="home_img2"
        src="https://www.icicibank.com/content/dam/icicibank/india/managed-assets/images/blog/big/advantages-disadvantages-savings-account.jpg"
        alt=""
      />
      <div className="img_text2">
      Are you finding it increasingly difficult to save despite your best efforts?</div> 
    </div>
  );
}

export default Home;
