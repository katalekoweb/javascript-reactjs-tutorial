import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

export default function App () {

  const items = ['New York', 'San Francisco', 'London', 'Benguela', 'Cubal']

  const handleSelectItem = (item: string) => {
    console.log(item);    
  }

  return <div>
    <div className=" mx-auto container mt-4">
      <Alert>
        Hello world and <span className="text-yellow">Benguela</span>
      </Alert>
      <Button color="secondary" onClick={() => console.log('Clicked...')}>My button</Button>
    <ListGroup items={items} heading="City list" onSelectItem={handleSelectItem} />
    </div>
  </div>
}