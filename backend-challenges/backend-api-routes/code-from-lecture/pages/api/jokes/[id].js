import {jokes} from "../../../lib/data"

export default function handler(request, response) {
	// retrieve from the jokes array the joke with 
	// the requested id
	const {id} = request.query
	const joke = jokes.find(joke => joke.id === id)
	if (!joke) {
		return response.status(404).json({status: "Not found"})	
	}
	response.status(200).json(joke)	
}