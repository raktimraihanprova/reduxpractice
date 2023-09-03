import axios from "axios";
import { useEffect, useState } from "react";


const AxiosComponent = () => {

    const [apiData, setApiData] = useState();

    const fetchApiFun = async () => {
        const res = await axios.get('https://randomuser.me/api/');
        setApiData(res.data.results[0])
    }



    useEffect(() => {
        fetchApiFun()
    }, [])


    return (
        <>
            <h1> Axios Component</h1>
            {
                apiData && <>
                    <img src={apiData.picture.large} />
                    <h4> {`${apiData.name.title} ${apiData.name.first} ${apiData.name.last}`} </h4>
                    <h4> DOB and Age: {`${apiData.dob.date.substring(0,4)} ${apiData.dob.age}`} </h4>
                </>
            }
        </>
    );
}

export default AxiosComponent;
