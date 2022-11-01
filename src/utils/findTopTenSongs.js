import listenHistory from "../data/listen_history.json" assert { type: "json" };


export default function findTopTenSongs(history) {
    if(history.length === 0) return null;
    
    // run helper function "getArtistAndTitles" below and set to a variable of "watched" 
    const [...watched] = getArtistsAndTitles(history);

    // "watchedAndCount" === previous value; "watch" === current value; initial value of an empty array
    const final = watched.reduce((watchedAndCount, watch) => {
        let result = {};
        if (!watchedAndCount.some((watchSong) => watchSong["song"] === watch.song)) {
            result = { song: watch.song, artist: watch.artist, count: 1 };
            watchedAndCount.push(result);
        } else {
            const found = watchedAndCount.find((watchSong) => watchSong["song"] === watch.song);
            found.count++;
        }
        return watchedAndCount;
    }, []);

    // sort returned array of objects in descending order, return the first 10 only
    final.sort((a, b) => b.count - a.count);
    const actual = final.slice(0, 10);
    
    return actual;
}



/**
 * @returns an array of objects containing songs and artists only, with a new key:value pair of count: 0
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
                artist: artist,
                count: 0
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




console.log(findTopTenSongs(listenHistory));