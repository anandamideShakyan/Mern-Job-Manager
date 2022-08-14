import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Logo, FormRow, Alert } from "../components"
import { useAppContext } from "../context/appContext"
import Wrapper from "../assets/wrappers/RegisterPage"
const initialState = {
	name: "",
	email: "",
	password: "",
	isMember: true,
	showAlert: true
}
const Register = () => {
	const [values, setValues] = useState(initialState)
	const {
		isLoading,
		showAlert,
		displayAlert,
		// registerUser,
		user,
		// loginUser,
		setupUser
	} = useAppContext()
	const navigate = useNavigate()
	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value })
	}

	const onSubmit = (e) => {
		e.preventDefault()
		const { name, email, password, isMember } = values
		if (!email || !password || (!isMember && !name)) {
			displayAlert()
			return
		}
		const currentUser = { name, email, password }
		if (isMember) {
			setupUser({
				currentUser,
				endPoint: "login",
				alertText: "Login Successful! Redirecting..."
			})
		} else {
			setupUser({
				currentUser,
				endPoint: "register",
				alertText: "User Created! Redirecting..."
			})
		}
	}
	const toggleMember = () => {
		setValues({ ...values, isMember: !values.isMember })
	}
	useEffect(() => {
		if (user) {
			setTimeout(() => {
				navigate("/")
			}, 3000)
		}
	}, [user, navigate])
	return (
		<Wrapper className="full-page">
			<form action="" className="form" onSubmit={onSubmit}>
				<Logo />
				<h3>{values.isMember ? "Login" : "Register"}</h3>
				{showAlert && <Alert />}
				{!values.isMember && (
					<FormRow
						type="text"
						name="name"
						handleChange={handleChange}
						value={values.name}
					/>
				)}
				<FormRow
					type="email"
					name="email"
					handleChange={handleChange}
					value={values.email}
				/>
				<FormRow
					type="password"
					name="password"
					handleChange={handleChange}
					value={values.password}
				/>
				<button type="submit" className="btn btn-block" disabled={isLoading}>
					submit
				</button>
				<p>
					{values.isMember ? "Not a member yet?" : "Already a member?"}
					<button type="button" onClick={toggleMember} className="member-btn">
						{values.isMember ? "Register" : "Login"}
					</button>
				</p>
			</form>
		</Wrapper>
	)
}
export default Register
