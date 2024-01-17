
const CarItem = (props) => {
    return ( 
        <>
            <h2>{props.marke} {props.modell}</h2>
            <p>Farbe: {props.farbe}</p>
            <p>Baujahr: {props.produktionsjahr}</p>
            <p>Leistung: {props.ps} PS</p>
         </>
     );
}
 
export default CarItem;