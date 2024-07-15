require("dotenv").config();
console.log(process.env.API_KEY)

async function main(){
const url = 'https://instagram-api39.p.rapidapi.com/instagram/?url=https://www.instagram.com/p/CpiWA1fvro_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': `${process.env.API_KEY}`,
		'x-rapidapi-host': 'instagram-api39.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}
}
main()