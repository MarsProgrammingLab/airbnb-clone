import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Data from "./data";

function App() {
  const cards = Data.map((cardData) => {
    const photo = `${cardData.coverImg}`;
    return <Card key={cardData.id} img={photo} cardData={cardData} />;
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
