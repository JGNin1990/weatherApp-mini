import {
  createContext,
  useCallback,
  useMemo,
  useReducer,
  useState,
} from "react";
import Body from "./components/Body";
import useFetch from "./helper/useFetch";
import zz from "./components/cityData";

// console.log(zz);

export const UserContext = createContext();

const initialCity = {
  currentCity: "Yangon",
};
const reducer = (state, action) => {
  switch (action) {
    case action:
      return { ...state, currentCity: action };
    // case "Yangon":
    //   return { ...state, currentCity: "Yangon" };
    default:
      return;
  }
};

const App = () => {
  const gg = useCallback(reducer, [initialCity]);
  const [name, dispatch] = useReducer(gg, initialCity);
  const [location, setLocation] = useState({
    lat: 0,
    lon: 0,
  });

  const [data] = useFetch(
    `https://api.openweathermap.org/data/2.5/weather/?lat=${location.lat[0]}&lon=${location.lon[0]}&units=metric&APPID=337b8e73cdd606284c8d1883b03d80b7`
  );

  // console.log(zz.filter((i) => i.name === "Yangon").map((e) => e.lat));
  const test = () => {
    switch (name.currentCity) {
      case name.currentCity:
        return setLocation((pre) => ({
          ...pre,
          lat: zz.filter((i) => i.name === name.currentCity).map((e) => e.lat),
          lon: zz.filter((i) => i.name === name.currentCity).map((e) => e.lon),
        }));
      // case "Mandalay":
      //   return setLocation((pre) => ({
      //     ...pre,
      //     lat: zz.filter((i) => i.name === "Mandalay").map((e) => e.lat),
      //     lon: zz.filter((i) => i.name === "Mandalay").map((e) => e.lon),
      //   }));
      default:
    }
  };
  useMemo(test, [name.currentCity]);

  // console.log(data.value.weather?.map(i=> i))
  // const test = data.value.weather
  // console.log(test)
  // console.log(name.currentCity);
  // console.log(location.lat[0]);

  return (
    <>
      <UserContext.Provider value={{ data, name, dispatch }}>
        <Body />
      </UserContext.Provider>
    </>
  );
};

export default App;
