import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import Header from "../components/Header";
import List from "../components/List";
import Map from "../components/Map";
import PlaceDetail from "../components/PlaceDetail";

const Home = () => {

  const [coordinates, setCoordinates]=useState({lat:0,lng:0});
  const [type, setType]=useState('restaurantes');
  const [ratings, setRatings]=useState('ratings');
  

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
