/**
 * sorts listenHistory and 
 * @returns top 10 songs played on Friday after 4pm by artist
 */
export default function sortByFridayAfterFour(history) {
    if (history.length === 0) return null;

    // run helper function "getArtistAndTitles" below and set to a variable of "toSort" 
    const toFilter = getArtistsTitlesAndDateTimes(history);

    // filter by played on friday, on or after 4pm
    const filteredByFriday = toFilter.filter((watch) => {
        return watch.datePlayed.slice(0, 3) === "Fri";
    });
    const filteredByFourPM = filteredByFriday.filter((watch) => {
        return parseInt(watch.datePlayed.slice(16, 18)) >= 16;
    })


    // "watchedAndCount" === previous value; "watch" === current value; initial value of an empty array
    const final = filteredByFourPM.reduce((watchedAndCount, watch) => {
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
 * @returns an array of objects containing songs and artists only, with a new key:value pair of "datePlayed": dateTime
 * lists artist as "n/a" if undefined
 */
 function getArtistsTitlesAndDateTimes(history) {
    let result = [];

    // "watch" represents an individual listen in the json array
    history.forEach(watch => {  
        let dateTime = new Date(watch.time).toString();     // convert date and time to milliseconds as a string
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