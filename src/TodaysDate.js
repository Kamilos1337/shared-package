import React from "react";



const TodaysDate = () => {
    const [data, setData] = useState(0)

    return <div>{`Today's date is ${Date()}`}</div>
};

export default TodaysDate;
