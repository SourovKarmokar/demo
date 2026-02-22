import { loremIpsum } from "lorem-ipsum";
import "./App.css";
import ListItem from "./components/ListItem";
import { List } from "react-virtualized";

export default function App() {
  const rowCount = 5000;
  const listHight = 500;
  const rowHeight = 50;
  const rowWidth = 700;

  const list = Array(rowCount)
    .fill()
    .map((val, id) => {
      return {
        id,
        name: "Sourov Karmokar",
        image: "https://placehold.net/shape-400x400.png",
        text: loremIpsum({
          count: 1,
          units: "sentences",
          sentenceLowerBound: 4,
          sentenceUpperBound: 8,
        }),
      };
    });


    function renderRow({index , key , style}) {
      return (
        <ListItem
            key={key}
            name={list[index].name}
            text={list[index].text}
            image={list[index].img}
            style= {style}
          />
      )
    }


  return (
    <div className="App">
      <div className="list">

        <List 
           width={rowWidth}
           height={listHight}
           rowHeight={rowHeight}
           rowCount={rowCount}
           rowRenderer={renderRow}
        />

        
      </div>
    </div>
  );
}
