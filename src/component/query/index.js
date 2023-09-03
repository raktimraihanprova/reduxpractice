import {QueryClient, QueryClientProvider, useQuery} from "react-query";
import getRandomUser from "./fetcherFunc";

const QueryComponent = () => {
    const {data} = useQuery('quote', ()=> getRandomUser())
    const apiData = data?.results[0];
    const queryClient = new QueryClient()

    return (
        <>
            <QueryClientProvider client={QueryClient}>
                <h1> Query Component</h1>
                {
                    apiData && <>
                        <img src={apiData.picture.large} />
                        <h4> {`${apiData.name.title} ${apiData.name.first} ${apiData.name.last}`} </h4>
                        <h4> DOB and Age: {`${apiData.dob.date.substring(0,4)} ${apiData.dob.age}`} </h4>

                    </>
                }
            </QueryClientProvider>

        </>
    );
}

export default QueryComponent;
