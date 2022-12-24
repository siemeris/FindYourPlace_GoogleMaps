import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import Header from "../components/Header";
import List from "../components/List";
import Map from "../components/Map";
import PlaceDetail from "../components/PlaceDetail";

const places = [
  {name: "sample place1"},
  {name: "sample place2"},
  {name: "sample place3"},
  {name: "sample place4"},
  {name: "sample place5"},
  {name: "sample place6"},
]


const Home = () => {

  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const [coordinates, setCoordinates]=useState({lat:0,lng:0});
  const [type, setType]=useState('restaurantes');
  const [ratings, setRatings]=useState('ratings');
  const [isLoading, setIsLoading] = useState(false);
  

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

      <Header setType={setType} setCoordinates={setCoordinates} setRatings={setRatings} />
      <List />
      <Map setCoordinates={setCoordinates} coordinates={coordinates} />
    </Flex>
  )
}

export default Home;
