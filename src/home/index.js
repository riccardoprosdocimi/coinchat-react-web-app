import MainComponent from "./main";



function Home() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <MainComponent/>
                </div>
                {/*<div className="col-4">*/}
                {/*    <RightComponent/>*/}
                {/*    <New/>*/}
                {/*</div>*/}
        {/*<body className="wd-body">*/}
        {/*    <div className="container">*/}
        {/*        <div className={"row pt-3"}> <h2 className={"text-center"} >  Welcome the CoinChat </h2></div>*/}
        {/*        <div className={"row pt-3"}> <h3 className={"text-center text-warning"}>  explore cryptoeconomy </h3></div>*/}
        {/*        <div className="row">*/}

        {/*                <MainComponent/>*/}

        {/*       </div>*/}
           </div>
       </div>
    );
}
export default Home;