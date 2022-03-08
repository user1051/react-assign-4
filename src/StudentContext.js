import React, { createContext, useState } from "react";

export const StudentContext = createContext();

export const StudentProvider = (props) => {
	const [students, setStudents] = useState([
		{
			id: 3,
			name: "Elon",
			age: 33,
			course: "MERN",
			batch: "November",
		},
		{
			id: 4,
			name: "Mark",
			age: 27,
			course: "MEAN",
			batch: "September",
		},
	]);

	return (
		<StudentContext.Provider value={[students, setStudents]}>
			{props.children}
		</StudentContext.Provider>
	);
};
