
function App({locale}) {
  return (
    <h1> Hello World {new Date().toLocaleTimeString(locale)} </h1>
  )
}

export default App
