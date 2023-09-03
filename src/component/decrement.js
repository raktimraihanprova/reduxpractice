import {useDispatch} from "react-redux";
import {decrement} from "./counterSlice/counterSlice";

const Decrement = () => {
    const dispatch = useDispatch();

    return(
        <div>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    )
}

export default Decrement;