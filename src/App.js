import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Student from "./Student";
import Header from "./Header";
import AddStudent from "./AddStudent";
function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />

				<Route path="/student" element={<Student />} />

				<Route path="/contact" element={<Contact />} />
				<Route path="/addStudent" element={<AddStudent />} />
			</Routes>
		</Router>
	);
}

export default App;
