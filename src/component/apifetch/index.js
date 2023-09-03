import {counterSlice} from "../counterSlice/counterSlice";
import {useEffect, useState} from "react";
import async from "async";
import {Loader, google} from "google-maps";
import GoogleMapReact from 'google-map-react'
import './index.css'
import LocationPin from "./locationPin";

const Apifetch = () =>{
    const [apiData, setApiData] = useState();
    const [map, setMap] = useState();
    const [location = {
        address: '1600 Amphitheatre Parkway, Mountain View, california.',
        lat: 37.42216,
        lng: -122.08427,
    }, setLocation] = useState();

    const Map = ({ location, zoomLevel }) => (
        <div className="map">
            <h2 className="map-h2">Come Visit Us At Our Campus</h2>

            <div className="google-map">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: '' }}
                    defaultCenter={location}
                    defaultZoom={8}
                >
                    <LocationPin
                        lat={"37.42216"}
                        lng={"-122.08427"}
                        text={"Address"}
                    />
                </GoogleMapReact>
            </div>
        </div>
    );

    const fetchApi = async() => {
        try{
            const repo = await fetch('https://randomuser.me/api/',{
                method: 'GET'
            });
            const dataRepo = await repo.json();
            console.log(dataRepo);
            setApiData(dataRepo.results[0]);


        }catch (e){
            console.log(e);
        }
    }

    useEffect(() => {
        fetchApi();
    }, []);



    return(
        <div>
            <h1> Fetch Component</h1>
            {
                apiData && <>
                    <img src={apiData.picture.large} />
                    <h4> Name: {`${apiData.name.title} ${apiData.name.first} ${apiData.name.last}`} </h4>
                    <h4> DOB and Age: {`${apiData.dob.date.substring(0,4)} ${apiData.dob.age}`} </h4>
                    {/*{Map(location)}*/}

                </>
            }
        </div>
    )
}

export default Apifetch;