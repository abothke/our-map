import CarItem from "../carItem/CarItem";
import { v4 as uuidv4 } from 'uuid';

const CarList = (cars) => {
    return ( 
        <>        
            {cars.cars.map((car) =>
                <div key={uuidv4()}>
                <CarItem
                marke={car.marke}
                modell={car.modell}
                farbe={car.farbe}
                produktionsJahr={car.produktionsjahr}
                ps={car.ps}
            />
                    </div>
            )}

        </>
        );
        }
 
export default CarList;