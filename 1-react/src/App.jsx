import Card from './Card.jsx'
import products from "./data/products.js"

function App() {
  return (
    <>
      <h1>Dynamic Product Cards</h1>

      <div className="container">
        {products.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </>
  )
}

export default App
