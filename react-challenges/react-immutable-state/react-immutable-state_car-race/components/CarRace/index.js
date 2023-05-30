import { Fragment, useState } from "react";
import { Immer } from "immer";
import Winner from "../Winner";
import {
  CarButton,
  AllCarRoutes,
  DistanceHeadline,
  Distance,
  Track,
} from "./CarRace.styled";
import { initialCars, getRandomDistance } from "../../utils/utils";
import { useImmer } from "use-immer";

const finishLine = 200;

export default function CarRace() {
  // const [cars, setCars] = useState(initialCars);
  const [cars, updateCars] = useImmer(initialCars);

  function moveCar(clickedCar) {
    const coveredDistance = getRandomDistance();
    console.log("clickedCar", clickedCar);
    console.log("clickedCar-Object: ", clickedCar.emoji);
    console.log("coveredDistance", coveredDistance);
    // setCars((prevCars) => {
    //   return prevCars.map((car) => {
    //     if (car.emoji !== clickedCar.emoji) {
    //       console.log("inside mapping: ", car);
    //       return car;
    //     }
    //     return {
    //       ...car,
    //       position: {
    //         x: car.position.x + coveredDistance,
    //         lastDistance: coveredDistance,
    //       },
    //     };
    //   });
    // });
    updateCars((draft) => {
      const car = draft.find((car) => clickedCar.emoji === car.emoji);
      console.log("draft Car: ", car);
      car.position.x += coveredDistance;
      car.position.lastDistance += coveredDistance;
    });
  }

  const winner = cars.find((car) => car.position.x >= finishLine);

  return (
    <>
      {winner ? (
        // <Winner winner={winner} onRestart={() => setCars(initialCars)} />
        <Winner winner={winner} onRestart={() => updateCars(initialCars)} />
      ) : (
        <AllCarRoutes finishLine={finishLine}>
          <DistanceHeadline>Last Distance</DistanceHeadline>
          {cars.map((car) => (
            <Fragment key={car.emoji}>
              <Track finishLine={finishLine}>
                <CarButton
                  onClick={() => moveCar(car)}
                  positionX={car.position.x}
                  lastDistance={car.position.lastDistance}
                  aria-label={`Move clicked car forward`}
                >
                  {car.emoji}
                </CarButton>
              </Track>
              <Distance>{car.position.lastDistance}</Distance>
            </Fragment>
          ))}
        </AllCarRoutes>
      )}
    </>
  );
}
