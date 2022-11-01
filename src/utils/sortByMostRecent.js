import listenHistory from "../data/listen_history.json" assert { type: "json" };


export default function sortByMostRecent(history) {
    if (history.length === 0) return null;

    // run helper function "getArtistAndTitles" below and set to a variable of "toSort" 
    const toSort = getArtistsTitlesAndDateTimes(history);

    
}


/**
 * @returns an array of objects containing songs and artists only, with a new key:value pair of "datePlayed": dateTime
 * lists artist as "n/a" if undefined
 */
 function getArtistsTitlesAndDateTimes(history) {
    let result = [];

    // "watch" represents an individual listen in the json array
    history.forEach(watch => {  
        let dateTime = new Date(watch.time).toString();     // convert time to date and time string
        let song = watch.title.substring(8);                // remove "Watched" string from title              
        if (watch.subtitles !== undefined) {
            let artist = watch.subtitles[0].name.slice(0, -8);  // remove " - Topic" string from subtitles.name                        
            result.push({
                song: song,
                artist: artist,
                datePlayed: dateTime
            });
        } else {
            result.push({
                artist: "n/a",
                song: song,
                datePlayed: dateTime
            });
        }
    });

    return result;
}


console.log(getArtistsTitlesAndTimes(listenHistory));