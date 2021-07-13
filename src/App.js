import './App.css';
import Tabs from './components/Tabs'


function App() {

  const tabs = [
    {
      title: "Tab 1",
      content: "Content 1"
    },
    {
      title: "Tab 2",
      content: "Content 2"
    },
    {
      title: "Tab 3",
      content: "Content 3"
    },
    {
      title: "Tab 4",
      content: "Content 4"
    }
  ]

  return (
    <div className="App">
      <Tabs tabs={tabs}/>
    </div>
  );
}

export default App;
