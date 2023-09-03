
import { useEffect } from "react";
import useSWR from 'swr'

const fetcher = async (...args) => {
    const res = await fetch(...args);
    const data = await res.json();
    return data;
};

const SWRComponent = () => {
    const { data, error, isLoading } =  useSWR('https://randomuser.me/api/', fetcher);

    const apiData = data?.results[0];

    if(isLoading){
        return <h1>Loading ....</h1>
    }else if(error){
        return <h1> errr { error.toString() } </h1>
    }
    return (
        <>
            <h1> SWR Component</h1>
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

export default SWRComponent;
