async function getCurrentWeather() {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=54.898521&lon=23.903597&exclude=minutely,hourly&units=metric&appid=${process.env.OPEN_WEATHER_API_KEY}`)
    const data = await res.json()

    return {
        props: {
            data: data
        }
    }
}

export default getCurrentWeather