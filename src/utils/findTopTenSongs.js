import listenHistory from "../data/listen_history.json" assert { type: "json" };

export default function findTopTenSongs(history) {
    if(history.length === 0) return null;

}




/**
 * @returns an array of objects containing songs and artists only
 * lists artist as "n/a" if undefined
 */
function getArtistsAndTitles(history) {
    let result = [];

    // "watch" represents an individual listen in the json array
    history.forEach(watch => {  
        let song = watch.title.substring(8);                // remove "Watched" string from title              
        if (watch.subtitles !== undefined) {
            let artist = watch.subtitles[0].name.slice(0, -8);  // remove " - Topic" string from subtitles.name                        
            result.push({
                song: song,
                artist: artist
            });
        } else {
            result.push({
                artist: "n/a",
                song: song
            });
        }
    });

    return result;
}




findTopTenSongs(listenHistory);