import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useContext } from "react";
import { StudentContext } from "./StudentContext";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import BorderColorIcon from "@mui/icons-material/BorderColor";

export default function Student() {
	const [rows] = useContext(StudentContext);
	const navigate = useNavigate();
	return (
		<div className="flex flex-col bg-gradient-to-b from-indigo-300 via-pink-300 to-purple-500 h-screen pt-20">
			<div className="flex  justify-around  my-10">
				<h1 className="text-3xl font-bold">Students Details</h1>
				<Button
					sx={{ fontSize: 16 }}
					onClick={() => navigate("/studentDesc")}
					variant="contained"
				>
					<PersonAddIcon sx={{ marginRight: 1 }} /> Add New Student
				</Button>
			</div>
			<div className="flex justify-center px-60">
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
									key={row.id}
									sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
								>
									<TableCell component="th" scope="row" align="center">
										{row.name}
									</TableCell>
									<TableCell align="center">{row.age}</TableCell>
									<TableCell align="center">{row.course}</TableCell>
									<TableCell align="center">{row.batch}</TableCell>
									<TableCell
										align="center"
										// onClick={() => navigate(`/studentDesc/${row.id}`)}
									>
										<Button
											onClick={() => navigate(`/studentDesc/${row.id}`)}
											variant="contained"
											className="text-blue-500"
										>
											<BorderColorIcon sx={{ fontSize: 16 }} />
										</Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</div>
	);
}
