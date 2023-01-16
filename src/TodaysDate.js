import React, {useState} from "react";



const TodaysDate = () => {
    const [data, setData] = useState('asdasdasdasd')

    return <div>{data}{`'s date is ${Date()}`}</div>
};

export default TodaysDate;
