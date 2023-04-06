import './App.css';
import Card from './Components/Card'
import Item from './Components/Item'
import ItemDate from './Components/ItemDate'

function App() {
  const response = [
    {
      itemName: "LifeGirl",
      itemDate: "10",
      itemMonth: "Feb",
      itemyear: "2000",
    },
    {
      itemName: "Deloitte",
      itemDate: "15",
      itemMonth: "June",
      itemyear: "1998",
    },
    {
      itemName: "Kurkure",
      itemDate: "10",
      itemMonth: "Jan",
      itemyear: "1990",
    },
  ];


  return (
    <div className="App">
      <Card>
        <Item name={response[0].itemName}>Child Name in first item, (use props.children to access it)</Item>
        <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemyear}></ItemDate>


        <Item name={response[1].itemName}></Item>
        <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemyear}></ItemDate>


        <Item name={response[2].itemName}></Item>
        <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemyear}></ItemDate>

      </Card>
    </div>
  );
}

export default App;
