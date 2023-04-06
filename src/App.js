
import './App.css';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import DataToDoProvider from './components/DataToDoProvider';

function App() {
  return (
    <div className="App">
      <div className="container">
        <DataToDoProvider>
        {/* TITLE : START */}
        <Title></Title>
        {/* TITLE : END */}
        {/* CONTROL (SEARCH + SORT + ADD) : START */}
        <Control></Control>
        {/* CONTROL (SEARCH + SORT + ADD) : END */}
        {/* FORM : START */}
        <Form></Form>
        {/* FORM : END */}
        {/* LIST : START */}
        <List></List>
        {/* LIST : END */}
        </DataToDoProvider>
      </div>
    </div>
  );
}
export default App;
