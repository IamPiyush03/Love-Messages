import { useEffect, useState } from "react"
import QuotesCard from "./components/QuotesCard"
import loveMessages from "./data/data"

function App() {
  const [quote, setquote] = useState(loveMessages[0]);

  useEffect(() => {
    return () => {
      const randomquote=loveMessages[Math.floor(Math.random()*loveMessages.length)];
      setquote(randomquote);
    }
  }, [])

  const newQuote=()=>{
    const randomquote=loveMessages[Math.floor(Math.random()*loveMessages.length)];
      setquote(randomquote);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
      <h1>Daily Love Messages For You 💓💞💖</h1>
      <QuotesCard quote={quote}/>
      <button onClick={newQuote} style={{ marginTop: "20px", padding: "10px", backgroundColor: "pink", border: "none", borderRadius: "5px", cursor: "pointer" }}>Want a new Message Click Me 😊</button>
    </div>
  )
}

export default App
