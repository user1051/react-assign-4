import { Button, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StudentContext } from "./StudentContext";

export default function AddStudent() {
	const navigate = useNavigate();
	const { studentId } = useParams();
	const [students, setStudents] = useContext(StudentContext);
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [course, setCourse] = useState("");
	const [batch, setBatch] = useState("");

	useEffect(() => {
		students.forEach((s) => {
			if (s.id == studentId) {
				setName(s.name);
				setAge(s.age);
				setCourse(s.course);
				setBatch(s.batch);
			}
		});
	}, []);
	const updateStudent = () => {
		if (studentId) {
			setStudents((student) =>
				students.map((stud) =>
					stud.id == studentId
						? {
								id: studentId,
								name: name,
								age: age,
								course: course,
								batch: batch,
						  }
						: stud
				)
			);

			//navigate("/student");
		} else {
			let obj = {
				id: Math.floor(Math.random() * 100 + 1),
				name,
				age,
				course,
				batch,
			};
			setStudents([...students, obj]);
		}
		navigate("/student");
	};
	return (
		<div className="flex flex-col items-center bg-gradient-to-b from-indigo-300 via-pink-300 to-purple-500 h-screen pt-20">
			<div className="flex flex-row p-8 w-full justify-around">
				<TextField
					value={name}
					label="Name"
					variant="outlined"
					className="w-1/3"
					onChange={(text) => setName(text.target.value)}
				/>
				<TextField
					value={age}
					label="Age"
					variant="outlined"
					className="w-1/3"
					onChange={(text) => setAge(text.target.value)}
				/>
			</div>
			<div className="flex flex-row p-8 w-full justify-around">
				<TextField
					value={course}
					label="Course"
					variant="outlined"
					className="w-1/3"
					onChange={(text) => setCourse(text.target.value)}
				/>
				<TextField
					value={batch}
					label="Batch"
					variant="outlined"
					className="w-1/3"
					onChange={(text) => setBatch(text.target.value)}
				/>
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
						onClick={updateStudent}
					>
						submit
					</Button>
				</div>
			</div>
		</div>
	);
}
