export const apiURL = () => {
  return window.location.hostname === "localhost"
		? "http://localhost:3001"
		: "https://bazi-insta.herokuapp.com";
}
