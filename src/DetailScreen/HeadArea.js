import React from "react";

const HeadArea = () => {
    const detail = require("./coindetail.json")
    return(
        <div className="d-flex justify-content-center py-4 ">
            <div className="container">
                <h3 className={"float-start"}><img src={`/images/${detail[0].coinIcon}`} width={"24px"} alt={"The icon of this coin"}/> {detail[0].coinName}  {detail[0].coinCode}</h3>
                <button type="submit" className="btn ms-3 float-start wd-btn-highlight">Add Watchlist</button>
            </div>
            <div className={"float-end"}></div>
        </div>

    );
}

export default HeadArea;