import { useState } from "react"
import ticket1 from "./assets/1.jpg"
import ticket2 from "./assets/11.jpg"


const Counter = () => {

    const [ticker, setTicker] = useState(0);
    const [row, setRow] = useState(0);


    const updateRow = (newTicker) => {
        if (newTicker > 0) {
            setRow(Math.floor((newTicker - 1) / 10) + 1); // Calculate row based on ticker
        } else {
            setRow(0); // Set row to 0 for ticker 0 or negative values
        }
    };

    const booker = () => {
        const newTicker = ticker + 1; // Increment ticker
        setTicker(newTicker); // Update ticker
        updateRow(newTicker); // Update row based on new ticker
    };

    const cancel = () => {
        const newTicker = ticker - 1; // Decrement ticker
        if (newTicker >= 0) { // Prevent ticker from going below 0
            setTicker(newTicker); // Update ticker
            updateRow(newTicker); // Update row based on new ticker
        }
    };


    return (

        <div className="reservation">

<img className="banner-one" src={ticket1} alt="" />


            <h1>{ticker}</h1>
            <h2>{row}</h2>
            <h3>5</h3>
            <div>
                <button onClick={booker} className="pluss"> 	&#10133;</button>
                <button onClick={cancel} className="minuss">&#10134; </button>
                <button className="counterbut">Book Now</button>                
            </div>

        </div>
    )

}

export default Counter