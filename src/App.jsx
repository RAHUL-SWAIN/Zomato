
import { useState } from 'react';
import './App.css'

const zomatoResturant = [
    {
      id:1,
      imgLink :"https://b.zmtcdn.com/data/pictures/4/21175774/48acc13c1a962a957209489605ba99a6.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      title:"Bukhara - ITC Maurya 1",
      rating :"3",
      desc:"North Indian, Kebab, Desserts ITC Maurya, Chanakyapuri, New Delh ,North Indian, Kebab, Desserts ITC Maurya, Chanakyapuri, New Delh,North Indian, Kebab, Desserts ITC Maurya, Chanakyapuri, New Delh",
      distance:"2.8"
    },
    {
      id:2,
      imgLink :"https://b.zmtcdn.com/data/pictures/4/21175774/95fbae4a3498db6ab1157172bf5557b4.jpeg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      title:"Bukhara - ITC Maurya 2",
      rating :"3.9",
      desc:"North Indian, Kebab, Desserts ITC Maurya, Chanakyapuri, New Delh, North Indian, Kebab, Desserts ITC Maurya, Chanakyapuri, New Delh ,North Indian, Kebab, Desserts ITC Maurya, Chanakyapuri, New Delh",
      distance:"2.8"
    },
    {
      id:3,
      imgLink :"https://b.zmtcdn.com/data/pictures/4/21175774/48acc13c1a962a957209489605ba99a6.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      title:"Bukhara - ITC Maurya 3",
      rating :"3.7",
      desc:"North Indian, Kebab, Desserts ITC Maurya, Chanakyapuri, New Delh , North Indian, Kebab, Desserts ITC Maurya, Chanakyapuri, New Delh , North Indian, Kebab, Desserts ITC Maurya, Chanakyapuri, New Delh",
      distance:"2.8"
    },
    {
      id:4,
      imgLink :"https://b.zmtcdn.com/data/pictures/4/21175774/95fbae4a3498db6ab1157172bf5557b4.jpeg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      title:"Bukhara - ITC Maurya 4",
      rating :"4.4",
      desc:"North Indian, Kebab, Desserts ITC Maurya, Chanakyapuri, New Delh , North Indian, Kebab, Desserts ITC Maurya, Chanakyapuri, New Delh, North Indian, Kebab, Desserts ITC Maurya, Chanakyapuri, New Delh",
      distance:"2.8"
    },
    {
      id:5,
      imgLink :"https://b.zmtcdn.com/data/pictures/4/21175774/48acc13c1a962a957209489605ba99a6.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      title:"Bukhara - ITC Maurya 5",
      rating :"4.4",
      desc:"North Indian, Kebab, Desserts ITC Maurya, Chanakyapuri, New Delh ,North Indian, Kebab, Desserts ITC Maurya, Chanakyapuri, New Delh,North Indian, Kebab, Desserts ITC Maurya, Chanakyapuri, New Delh",
      distance:"2.8"
    },
    {
      id:6,
      imgLink :"https://b.zmtcdn.com/data/pictures/4/21175774/95fbae4a3498db6ab1157172bf5557b4.jpeg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      title:"Bukhara - ITC Maurya 6",
      rating :"4.4",
      desc:"North Indian, Kebab, Desserts ITC Maurya, Chanakyapuri, New Delh, North Indian, Kebab, Desserts ITC Maurya, Chanakyapuri, New Delh ,North Indian, Kebab, Desserts ITC Maurya, Chanakyapuri, New Delh",
      distance:"2.8"
    },
    {
      id:7,
      imgLink :"https://b.zmtcdn.com/data/pictures/4/21175774/48acc13c1a962a957209489605ba99a6.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      title:"Bukhara - ITC Maurya 7 ",
      rating :"4.4",
      desc:"North Indian, Kebab, Desserts ITC Maurya, Chanakyapuri, New Delh , North Indian, Kebab, Desserts ITC Maurya, Chanakyapuri, New Delh , North Indian, Kebab, Desserts ITC Maurya, Chanakyapuri, New Delh",
      distance:"2.8"
    },
    {
      id:8,
      imgLink :"https://b.zmtcdn.com/data/pictures/4/21175774/95fbae4a3498db6ab1157172bf5557b4.jpeg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      title:"Bukhara - ITC Maurya 8",
      rating :"4.4",
      desc:"North Indian, Kebab, Desserts ITC Maurya, Chanakyapuri, New Delh , North Indian, Kebab, Desserts ITC Maurya, Chanakyapuri, New Delh, North Indian, Kebab, Desserts ITC Maurya, Chanakyapuri, New Delh",
      distance:"2.8"
    },
    {
      id:9,
      imgLink :"https://b.zmtcdn.com/data/pictures/4/21175774/95fbae4a3498db6ab1157172bf5557b4.jpeg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      title:"Bukhara - ITC Maurya 9",
      rating :"4.4",
      desc:"North Indian, Kebab, Desserts ITC Maurya, Chanakyapuri, New Delh , North Indian, Kebab, Desserts ITC Maurya, Chanakyapuri, New Delh, North Indian, Kebab, Desserts ITC Maurya, Chanakyapuri, New Delh",
      distance:"2.8"
    },
    {
      id:10,
      imgLink :"https://b.zmtcdn.com/data/pictures/4/21175774/95fbae4a3498db6ab1157172bf5557b4.jpeg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      title:"Bukhara - ITC Maurya 10",
      rating :"4.4",
      desc:"North Indian, Kebab, Desserts ITC Maurya, Chanakyapuri, New Delh , North Indian, Kebab, Desserts ITC Maurya, Chanakyapuri, New Delh, North Indian, Kebab, Desserts ITC Maurya, Chanakyapuri, New Delh",
      distance:"2.8"
    },
];

function App() {
  const [selected , setSelected ] = useState(false);
  const [currList , setCurrList ] = useState(zomatoResturant);

  function filterBasedList(){
    // console.log(`before filter`,zomatoResturant);
    // console.log(`after filter`, zomatoResturant.filter((eachrating)=> eachrating.rating < 4));
    setCurrList(
      zomatoResturant.filter((eachrating)=> eachrating.rating < 4)
    )
  }
  return (
    <>
    <button className={selected ? `active`:null}
     onClick={()=>{
      setSelected(!selected);
      filterBasedList()}}>
        Rating less than 4{selected ? "x":""}
    </button>

    <div style={{display:"flex",flexWrap:"wrap", gap:"30px", borderRadius:"40px"}}>
      {
        currList.map((resturant)=>{
          const {id , imgLink ,title ,rating,desc ,distance } = resturant;
          return(
            <article key={id} style={{width:"250px",border:"1px solid #000"}}>
                <img width={250} src={imgLink} alt={title} />
                <h4>{title}</h4>
                <span>{rating} *</span>
                <p>{desc.slice(0,48)+"...."}</p>
                <span>{distance} km</span>
            </article>
          )
        })
      }
      </div>
    </>
  )
}

export default App
