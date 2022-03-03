import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link, NavLink, useParams } from "react-router-dom";
import { Button } from "@mui/material";

const rows = [
	{
		name: "John",
		age: 24,
		course: "MERN",
		batch: "October",
		change: (
			<Link to="/addStudent" className="text-blue-500">
				edit
			</Link>
		),
	},
	{
		name: "Doe",
		age: 25,
		course: "MERN",
		batch: "October",
		change: (
			<Link to="/addStudent" className="text-blue-500">
				edit
			</Link>
		),
	},
	{
		name: "ELon",
		age: 33,
		course: "MERN",
		batch: "November",
		change: (
			<Link to="/addStudent" className="text-blue-500">
				edit
			</Link>
		),
	},
	{
		name: "Mark",
		age: 27,
		course: "MEAN",
		batch: "September",
		change: (
			<Link to="/addStudent" className="text-blue-500">
				edit
			</Link>
		),
	},
];

export default function Student() {
	let { path } = useParams();
	return (
		<div className="flex flex-col bg-gradient-to-b from-indigo-300 via-pink-300 to-purple-500 h-screen pt-20">
			<div className="flex  justify-around  my-10">
				<h1 className="text-3xl font-bold">Students Details</h1>
				<Link
					to="/addStudent"
					className="bg-blue-100 flex items-center p-2 text-xl rounded-3xl w-1/5 justify-center border-2 border-black cursor-pointer"
				>
					Add New Student
				</Link>
			</div>
			<div className="flex justify-center px-40">
				<TableContainer component={Paper}>
					<Table aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell align="center">Name</TableCell>
								<TableCell align="center">Age</TableCell>
								<TableCell align="center">Course</TableCell>
								<TableCell align="center">Batch</TableCell>
								<TableCell align="center">Edit</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row) => (
								<TableRow
									key={row.name}
									sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
								>
									<TableCell component="th" scope="row" align="center">
										{row.name}
									</TableCell>
									<TableCell align="center">{row.age}</TableCell>
									<TableCell align="center">{row.course}</TableCell>
									<TableCell align="center">{row.batch}</TableCell>
									<TableCell align="center">{row.change}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</div>
	);
}
