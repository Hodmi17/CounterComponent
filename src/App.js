import Counter from './Counter/CounterComponents';


function App() {
  return (
    <div>
    <Counter startCount={1} countRate={2}/>
    <Counter startCount={5} countRate={2}/>
    <Counter startCount={9} countRate={6}/>
    <Counter startCount={10} countRate={8}/>
    
    </div>
  )
}

export default App;
