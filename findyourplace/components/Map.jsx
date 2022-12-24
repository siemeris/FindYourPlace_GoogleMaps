import { Box } from '@chakra-ui/react'
import React from 'react'

import GoogleMapReact from "google-map-react"

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = ({setCoordinates, coordinates, setBounds}) => {
    // const defaultProps = {
    //     center: {
    //       lat: 10.99835602,
    //       lng: 77.01502627
    //     },
    //     zoom: 11
    //   };
    return (
    // <Box width={"100%"} height={"100%"}>
    // <GoogleMapReact
    //     bootstrapURLKeys={{key: "AIzaSyBnF_9F3qIWChIi8rKMxvnBhEX8AQTLyQk"}}
    //     defaultCenter={coordinates}
    //     center = {coordinates}
    //     defaultZoom = {10}
    //     margin={[50,50,50,50]}
    //     options={""}
    //     // onChange={()=>{}}
    //     // onChildClick={()=>{}}
    //     >

    // </GoogleMapReact>
    // </Box>
    <Box width={"100%"} height={"100%"}>
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBnF_9F3qIWChIi8rKMxvnBhEX8AQTLyQk" }}
        defaultCenter={coordinates}
        defaultZoom={10}
        center={coordinates}
        onChange={(e)=>{
          console.log(e) //Información en un objeto con los límites, coordenadas y zoom del mapa
          setCoordinates({lat:e.center.lat , lng:e.center.lng})
          // console.log(coordinates, "coordinates")
          setBounds({ne : e.marginBounds.ne, nw: e.marginBounds.nw, se : e.marginBounds.se, sw: e.marginBounds.sw})
        }}
      >
        {/* <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        /> */}
      </GoogleMapReact>
    </div>
    </Box>
  )
}

export default Map