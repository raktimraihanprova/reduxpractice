import {decrement, increment} from "./counterSlice/counterSlice";
import {useDispatch} from "react-redux";

const Increment = () => {
    const dispatch = useDispatch();

    return(
        <div>
            <button onClick={() => dispatch(increment())}>Increment</button>
        </div>
    )
}

export default Increment;