import '../PlaylistNames.scss';

const PlaylistNames = props => {
    const keywordArray = props.keywords.split(" ");

    // Set random items from key word array
    const randomItems = [];
    for (var i = 0; i < 20; i++) {
        const val = keywordArray[Math.floor(Math.random() * keywordArray.length)];
        randomItems.push(val);
    }

    const playlistNames = [
        "The " + randomItems[0] + " Playlist",
        "The " + randomItems[1] + " Playlist",
        "The " + randomItems[2] + " Playlist",
        "The " + randomItems[3] + " Playlist",
        "The " + randomItems[4] + " Playlist",
        "The " + randomItems[5] + " Playlist",
        "The " + randomItems[6] + " Playlist",
        "The " + randomItems[7] + " Playlist",
        "The " + randomItems[8] + " Playlist",
        "The " + randomItems[9] + " Playlist",
        "The " + randomItems[10] + " Playlist",
        "The " + randomItems[11] + " Playlist",
        "The " + randomItems[12] + " Playlist",
        "The " + randomItems[13] + " Playlist",
        "The " + randomItems[14] + " Playlist",
        "The " + randomItems[15] + " Playlist",
        "The " + randomItems[16] + " Playlist",
        "The " + randomItems[17] + " Playlist",
        "The " + randomItems[18] + " Playlist",
        "The " + randomItems[19] + " Playlist"
    ];

    return (
        <div className="playlistNames">
            <ul>
                <li>{playlistNames[0]}</li>
                <li>{playlistNames[1]}</li>
                <li>{playlistNames[2]}</li>
                <li>{playlistNames[3]}</li>
                <li>{playlistNames[4]}</li>
                <li>{playlistNames[5]}</li>

            </ul>
        </div>
    );
}

export default PlaylistNames;