import MainComponent from "./main";
import RightComponent from "./watchlist";
import New from "./new"

function HomeScreen() {
    return(
        <body className="wd-body">
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <MainComponent/>
                    </div>
                    <div className="col-4">
                        <RightComponent/>
                        <New/>
                    </div>
               </div>
           </div>
        </body>
    );
}
export default HomeScreen;