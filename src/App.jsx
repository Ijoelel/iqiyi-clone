import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/Pages/Home.jsx";
import "../node_modules/@flaticon/flaticon-uicons/css/brands/all.css"
import MovieDetails from "./assets/Pages/MovieDetail.jsx";
import Test from "./assets/Pages/testImg.jsx";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" Component={Home}/>
				<Route path="/movie/:id" Component={MovieDetails}/>
				{/* <Route path="/:id" Component={Test}/> */}
			</Routes>
		</Router>
	);
};

export default App;
