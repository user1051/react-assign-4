import { NavLink } from "react-router-dom";
export default function Header() {
	return (
		<div className="flex w-full h-16 bg-indigo-900 justify-around items-center fixed top-0">
			<NavLink
				to="home"
				className={({ isActive }) =>
					isActive
						? "text-red-300 text-2xl hover:text-red-300"
						: "text-white text-2xl "
				}
			>
				Home
			</NavLink>
			<NavLink
				to="student"
				className={({ isActive }) =>
					isActive
						? "text-red-300 text-2xl hover:text-red-300"
						: "text-white text-2xl "
				}
			>
				Student
			</NavLink>
			<NavLink
				to="contact"
				className={({ isActive }) =>
					isActive
						? "text-red-300 text-2xl hover:text-red-300"
						: "text-white text-2xl "
				}
			>
				Contact
			</NavLink>
		</div>
	);
}
