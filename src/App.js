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

				<Route path="/studentDesc" element={<AddStudent />}>
					<Route path=":studentId" element={<AddStudent />} />
				</Route>

				<Route path="/contact" element={<Contact />} />
			</Routes>
		</Router>
	);
}

export default App;
