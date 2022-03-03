import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function AddStudent() {
	const navigate = useNavigate();
	return (
		<div className="flex flex-col items-center bg-gradient-to-b from-indigo-300 via-pink-300 to-purple-500 h-screen pt-20">
			<div className="flex flex-row p-8 w-full justify-around">
				<TextField label="Name" variant="outlined" className="w-1/3" />
				<TextField label="Age" variant="outlined" className="w-1/3" />
			</div>
			<div className="flex flex-row p-8 w-full justify-around">
				<TextField label="Course" variant="outlined" className="w-1/3" />
				<TextField label="Batch" variant="outlined" className="w-1/3" />
			</div>
			<div className="flex flex-row justify-end w-full my-10">
				<div className="mx-20">
					<Button
						variant="contained"
						color="error"
						size="large"
						onClick={() => navigate("/student")}
					>
						cancel
					</Button>
				</div>
				<div className="mx-20">
					<Button
						variant="contained"
						onClick={() => navigate("/student")}
						color="success"
						size="large"
					>
						submit
					</Button>
				</div>
			</div>
		</div>
	);
}
