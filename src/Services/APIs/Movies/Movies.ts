import api from "../Common/api";

const getMovies = (search: string) => api.get("/movies?searchTerm=" + search);
// const getPersonsPost = (data: any) => api.post("/persons/getPersons", data);
const getMovieInfo = (prodID: string) => api.get("/movies/" + prodID);

const exportObject = {
	getMovies,
	getMovieInfo
};

export default exportObject;
