const url = 'https://instagram-api39.p.rapidapi.com/instagram/?url=https://www.instagram.com/p/C6RV8khvjnM/?utm_source=ig_web_copy_link';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'your-rapid-api-key',
		'X-RapidAPI-Host': 'instagram-api39.p.rapidapi.com'
	}
};


async function main(){

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
} catch (error) {
	console.error(error);
}

}
main()