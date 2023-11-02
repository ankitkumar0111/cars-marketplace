export async function fetchCars() {
    const headers = {
		'X-RapidAPI-Key': '8f22258891msh4f5b6c935f57660p1fa61djsnb86c92546eb7',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
    
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers
    });

    const result = await response.json();

    return result;
}