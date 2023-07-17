import cardsData from "./cardsData";
import "./App.css";
import { useState } from "react";

function App() {

  const [cardsList, setCardsList] = useState(cardsData.sort(() => Math.random() - 0.5));

  const [prevIndexCard, setPrevIndexCard] = useState(-1)

  //const cardsList = cardsData.sort(() => Math.random() - 0.5);

const selectCard = (index) => {
  cardsList[index].status = "selected"
  setCardsList([...cardsList])
  if(prevIndexCard === -1) {
    setPrevIndexCard(index)
    
  } else {
    validateCards(index);
    
  }  
}

const validateCards = (newIndexCard) => {
  setTimeout(() => {
    const prev = cardsList[prevIndexCard];
    const current = cardsList[newIndexCard];
    if(prev.icon === current.icon) {
      prev.status = "up";
      current.status = "up";
    } else {
      prev.status = "down";
      current.status = "down";
    }
    setCardsList([... cardsList])
    setPrevIndexCard(-1)
  }, 1000)
}

  return (
    <div className="App">
      <h1 className="title">Memory with React</h1>
      <div className="cards-container">
        {cardsList.map((card, i) => (
          <div 
          className={`card ${card.status}`} 
          key={card.id}
          onClick={() => selectCard(i)}
          >
            {
              card.status !== "down" && (
            <i className={card.icon}></i>
              )
            }
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
