export const apiURL = () => {
  return window.location.hostname === "localhost"
		? "http://localhost:3001"
		: "https://bazi-insta.herokuapp.com";
}

// /Users/bsihame/Library/Caches/Homebrew/
// /Users/bsihame/Library/Logs/Homebrew/
// /usr/local/Caskroom/
// /usr/local/Cellar/
// /usr/local/bin/brew -> /usr/local/bin/brew