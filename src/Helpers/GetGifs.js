export const getGifs = async (KeyWord) => {
    const Url = "https://api.giphy.com/v1/gifs/search";
    const ApiKey = "nssu4Ut6zqHayav4ssWTnGYN8GC5BE2S";
    const ServerResponse = await fetch(`${Url}?api_key=${ApiKey}&q=${KeyWord}`);
    const { data: { embed_url } } = await ServerResponse.json();
    return embed_url
}