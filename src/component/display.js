import {useSelector} from "react-redux";

const Display = () => {
    const count = useSelector((state) => state.counter.countValue);
    console.log(useSelector(state => state.counter));

    return(
        <div>
            <h1>Count: {count}</h1>
        </div>
    )
}

export default Display;