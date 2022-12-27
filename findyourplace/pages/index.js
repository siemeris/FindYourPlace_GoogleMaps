import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import List from "../components/List";
import Map from "../components/Map";
import PlaceDetail from "../components/PlaceDetail";
import { getPlacesData } from "./api/hello";
import Script from 'next/script'

const places = [
  {name: "sample place1"},
  {name: "sample place2"},
  {name: "sample place3"},
  {name: "sample place4"},
  {name: "sample place5"},
  {name: "sample place6"},
]


const Home = () => {

  const [places, setPlaces]=useState([])
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  // Para controlar los límites del mapa cuando se mueve el mapa
  const [bounds, setBounds] = useState(null)
  const [coordinates, setCoordinates]=useState({});
  const [type, setType]=useState('restaurants');
  const [ratings, setRatings]=useState('');
  const [isLoading, setIsLoading] = useState(false);
  

  useEffect(() => {

    // get the users current location on intial login

    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        console.log({ latitude, longitude });
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const filteredData = places.filter((place) => place.rating > ratings);
    setFilteredPlaces(filteredData);
    console.log({ ratings });
    console.log(filteredData, "FILTEREDDATA")
  }, [ratings]);

  useEffect(() => {
    setIsLoading(true);
    getPlacesData(type, bounds?.ne, bounds?.sw).then((data) => {
      console.log(data);
      setPlaces(data);
      setIsLoading(false);
    });
  }, [type, coordinates, bounds]);

  return (
    <Flex justifyContent={"center"}
      alignItems={"center"}
      width={"100vw"}
      height={"100vh"}
      maxWidth={"100vw"}
      maxHeight={"100vh"}
      position={"relative"}
    // bg={"blue.400"}
    >
      
      <Script src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBnF_9F3qIWChIi8rKMxvnBhEX8AQTLyQk"/>
      

      <Header setType={setType} setCoordinates={setCoordinates} setRatings={setRatings} />
      <List places={filteredPlaces.length ? filteredPlaces : places} isLoading={isLoading} />
      {/* filteredPlaces.length ? filteredPlaces :  */}
      <Map setCoordinates={setCoordinates} coordinates={coordinates} setBounds={setBounds} places={filteredPlaces.length ? filteredPlaces : places} />
    </Flex>
  )
}

export default Home;
