export default function Signup() {

	const handleSubmit = async (event) => {
		event.preventDefault()
		const formElements = document.querySelector('form').elements
		const body = {	
			email: formElements[0].value,
			password: formElements[1].value
		}
		const response = await fetch('http://localhost:3000/api/auth', {
			method: 'POST',
			body: JSON.stringify(body), 
			headers: {
				'Content-Type': 'application/json'
			}
		})
	}

	return  (
		<form onSubmit={handleSubmit}>
			<div>Email:</div>
			<input type="text" />
			<div>Password:</div>
			<input type="password" />
			<div>
				<button type="submit">Log in 🔑</button>
			</div>
		</form>
	)
}