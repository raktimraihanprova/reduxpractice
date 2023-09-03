import Increment from "./increment";
import Decrement from "./decrement";
import "./index.css";
import Display from "./display";
import {Provider} from "react-redux";
import {store} from "./store/store";
import Apifetch from "./apifetch";
import Swr from "./swr";
import Axiosdata from "./axiosdata";
import Query from "./query";

const Count = () =>{
    return(
            <div className= "content-alignment">
                <Display />
                <Increment />
                <Decrement />
                <Apifetch/>
                <Swr/>
                <Axiosdata/>
                {/*<Query/>*/}
            </div>
    )
}

export default Count;