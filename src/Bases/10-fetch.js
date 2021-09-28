const apiKey = 'HDbfXX2D07rDEpUDvL9lkWXFAqNCeWgO';

const httpCall = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

httpCall

.then( resp => resp.json()
.then(data => {
    console.log(data.images)
})     
 )
.catch(console.warn)
