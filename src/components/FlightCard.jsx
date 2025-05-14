
export default function FlightCard({ flight }){
        console.log(flight);
        const { airline, from, to, price } = flight.flight;
    return (
        // <div style={{border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem'}}>
        //     <p><strong> {flight.flight.airline} </strong></p>
        //     <p>From: {flight.flight.from} → To: {flight.flight.to}</p>
        //     <p>Price: ${flight.flight.price}</p>
        // </div>

    <div style={{border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem'}}>
        <p><strong> {airline} </strong></p>
        <p>From: {from} → To: {to}</p>
        <p>Price: ${price}</p>
    </div>
)
    ;
}