import './App.css'
import { Card } from './components/Card/Card'

const cardData = {
  title: 'Card title',
  text: 'Some not a short card text written many times',
  btnName: 'Click me',
}

// const ref = useRef('https://www.freecodecamp.org/news/content/images/2022/02/arrows-2889040_1920.jpg');

function App() {

  return (
      <Card src={'../public/titleimg.jpg'}>
        <h5 className="card-title">{cardData.title}</h5>
        <p className="card-text">{cardData.text}</p>
        <button>{cardData.btnName}</button>
      </Card>
  )
}

export default App
