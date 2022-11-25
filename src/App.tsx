import styled from 'styled-components'
import './App.css'

const Button = styled.div`
  background: red;
  width: 200rem;
  padding: 10rem;
`

function App() {
  return (
    <div className="App">
      <Button>哈哈</Button>
    </div>
  )
}

export default App
