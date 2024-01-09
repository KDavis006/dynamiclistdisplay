import {useState} from 'react'
import Dynamiclist from './Components/Dynamiclist'
import "./Styles/main.css"

const App = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21])
  const [type, setType] = useState('ul')
  const [orientation, setOrientation] = useState('horizontal')
  return (
    <Dynamiclist data={data} type={type} orientation={orientation} />
  )
}

export default App