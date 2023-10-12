import './App.css'
import ItemsListContainer from './components/ItemsListContainer'
import NavBar from './components/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {
  return <div>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route exact path="/" element= {<ItemsListContainer/>}/>
    </Routes>
    </BrowserRouter>
    <ItemsListContainer/>
</div>
}

export default App