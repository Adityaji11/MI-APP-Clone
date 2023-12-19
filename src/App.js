import NavBar from "./Components/NavBar";
import PreNavbar from "./Components/PreNavbar";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Slider from "./Components/Slider";
import Offers from "./Components/Offers.jsx";
import data from "../src/data/data.json"
import Heading from "./Components/Heading.jsx";
import StarProduct from "./Components/StarProduct.jsx";
import HotAccessoriesMenu from "./Components/HotAccessoriesMenu.jsx";
import HotAccessories from "./Components/HotAccessories.jsx";
import ProductReviews from "./Components/ProductReviews.jsx";
import Videos from "./Components/Videos.jsx";
import Banner from "./Components/Banner.jsx";
import Footer from "./Components/Footer.jsx";


function App() {
  return (
<>
<BrowserRouter>

<PreNavbar/>
<NavBar/>
<Slider start={data.banner.start}/>
<Offers offer={data.offer}/>
<Heading text="STAR PRODUCTS"/>
<StarProduct starProduct={data.starProduct}/>
<Heading text="HOT ACCESSORIES"/>
<HotAccessoriesMenu/>

<Routes>
<Route exact path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>}></Route>
<Route exact path="/smartDevice" element={<HotAccessories smartDevice={data.hotAccessories.music} smartDeviceCover={data.hotAccessoriesCover.smartDevice}/>}></Route>
<Route exact path="/home" element={<HotAccessories home={data.hotAccessories.music} homeCover={data.hotAccessoriesCover.home}/>}></Route>
<Route exact path="/lifestyle" element={<HotAccessories lifeStyle={data.hotAccessories.music} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}/>}></Route>
<Route exact path="/mobileAccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.music} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}/>}></Route>
</Routes>

<Heading text="PRODUCT REVIEWS"/>
<ProductReviews productReviews = {data.productReviews}/>
<Heading text="VIDEOS" />
<Videos Videos={data.videos}/>
<Heading  text="IN THE PRESS"/>
<Banner banner={data.banner}/>
<Footer footer={data.footer}/>
</BrowserRouter>

</>
  );
}

export default App;
