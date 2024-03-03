export const getGifs = async (KeyWord) => {

    const Url = "https://api.giphy.com/v1/gifs/search";
    const ApiKey = "nssu4Ut6zqHayav4ssWTnGYN8GC5BE2S";
    const ServerResponse = await fetch(`${Url}?api_key=${ApiKey}&q=${KeyWord}`);
    const { data } = await ServerResponse.json();
    const GifUrls = data.slice(0, 3).map(object => object.images.original.url)
    return GifUrls
}