import './Counter.css';
function CounterComponents(props){
    var startCount = props.startCount;
   var countRate = props.countRate;

    function buttonClicked(){
        // console.log(rate);
        startCount += countRate;
         console.log(startCount);   
    }
    function Btnclicked(){
        countRate -=startCount;
        console.log(countRate);
    }

    return(
        <div className="container">
    <h1>Counter:  {startCount} </h1>
    <h1>Count Rate: {countRate}</h1>
        <div>
        <button onClick={() => buttonClicked(countRate)}> + </button>
        <button onClick={() => Btnclicked(startCount)} > - </button>
        </div>
         </div>
    )  
}
export default CounterComponents;

