import axios from "axios";
import GridCol from "../Components/gridCol";
import { useState } from "react";

const ApiHandling=()=>{
    const [datas,setDatas]=useState<any>([]);
    const getApi=()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').
        then((res)=>{
            console.log(res,"Sucsess Response");
            setDatas([...res.data]);
        }).catch((err)=>{
            console.log(err,"Error");
        })
    }
    return(
        <div>
            <button onClick={getApi} className="bg-blue-700 m-3 text-white">Get API</button>
            <button className="bg-blue-700 m-3 text-white">Post API</button>
            <button className="bg-blue-700 m-3 text-white">Put API</button>
            <button className="bg-blue-700 m-3 text-white">Delete API</button>
            <GridCol datasource={datas}
            tables={[
                {
                    label:"Name",
                    key:"name",
                },
                {
                    label:"Email",
                    key:"email",
                },
                {
                    label:"Phone",
                    key:"phone",
                },
                {
                    label:"Website",
                    key:"website",
                },
            ]}
            />
        </div>
    );
}
export default ApiHandling;