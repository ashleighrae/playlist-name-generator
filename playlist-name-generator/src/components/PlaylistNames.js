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
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Playlist",
        randomItems[Math.floor(Math.random() * 20)] + " Vibes",
        randomItems[Math.floor(Math.random() * 20)] + " Sense",
        randomItems[Math.floor(Math.random() * 20)] + " Chaos",
        randomItems[Math.floor(Math.random() * 20)] + " Sensations",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " State",
        randomItems[Math.floor(Math.random() * 20)] + " State",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Sensation",
        randomItems[Math.floor(Math.random() * 20)] + " Paradise",
        "Always " + randomItems[Math.floor(Math.random() * 20)] + " Vibes",
        "Always " + randomItems[Math.floor(Math.random() * 20)] + " Playlist",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Mix",
        randomItems[Math.floor(Math.random() * 20)] + " Mix",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Mixtape",
        randomItems[Math.floor(Math.random() * 20)] + " Rock",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Hits",
        randomItems[Math.floor(Math.random() * 20)] + " Hits",
        randomItems[Math.floor(Math.random() * 20)] + " Icons",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Icons",
        randomItems[Math.floor(Math.random() * 20)] + " Jungle",
        randomItems[Math.floor(Math.random() * 20)] + " Heaven",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Commission",
        randomItems[Math.floor(Math.random() * 20)] + " Outside the Box",
        randomItems[Math.floor(Math.random() * 20)] + " Chills",
        randomItems[Math.floor(Math.random() * 20)] + " Moments",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Dream",
        randomItems[Math.floor(Math.random() * 20)] + " Forever",
        randomItems[Math.floor(Math.random() * 20)] + " Ecstasy",
        randomItems[Math.floor(Math.random() * 20)] + " Move",
        "A " + randomItems[Math.floor(Math.random() * 20)] + " Introduction",
        "Not Enough " + randomItems[Math.floor(Math.random() * 20)],
        randomItems[Math.floor(Math.random() * 20)] + " Choices",
        randomItems[Math.floor(Math.random() * 20)] + " Selects",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Channel",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Remix",
        randomItems[Math.floor(Math.random() * 20)] + " Illusions",
        randomItems[Math.floor(Math.random() * 20)] + " Killer",
        randomItems[Math.floor(Math.random() * 20)] + " Taste",
        "It's a Very " + randomItems[Math.floor(Math.random() * 20)] + " Day",
        randomItems[Math.floor(Math.random() * 20)] + " Top",
        randomItems[Math.floor(Math.random() * 20)] + " Rhythm",
        randomItems[Math.floor(Math.random() * 20)] + " Feelings",
        randomItems[Math.floor(Math.random() * 20)] + " Fantasy",
        "Best Of " + randomItems[Math.floor(Math.random() * 20)] + " Playlist",
        "Best Of  " + randomItems[Math.floor(Math.random() * 20)],
        "Your Favourite " + randomItems[Math.floor(Math.random() * 20)] + " Playlist",
        randomItems[Math.floor(Math.random() * 20)] + " Music",
        randomItems[Math.floor(Math.random() * 20)] + " & " + randomItems[Math.floor(Math.random() * 20)],
        "Not Enough " + randomItems[Math.floor(Math.random() * 20)] + " Music",
        "Pure " + randomItems[Math.floor(Math.random() * 20)],
        "A " + randomItems[Math.floor(Math.random() * 20)] + " Tale",
        randomItems[Math.floor(Math.random() * 20)] + " Favorites",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Era",
        randomItems[Math.floor(Math.random() * 20)] + " Minutes",
        randomItems[Math.floor(Math.random() * 20)] + " Hours",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Playlist",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Playlist",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Playlist",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Playlist",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Playlist",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Playlist",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Playlist",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Playlist",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Playlist",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Playlist",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Playlist",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Playlist",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Playlist",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Playlist",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Playlist",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Playlist",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Playlist",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Playlist",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Playlist",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Playlist",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Playlist",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Playlist",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Playlist",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Playlist",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Playlist",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Playlist",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Playlist",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Playlist",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Playlist",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Playlist",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Playlist",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Playlist",
    ];

    return (
        <div className="playlistNames">
            <ul>
                <li>{playlistNames[Math.floor(Math.random() * playlistNames.length)]}</li>
                <li>{playlistNames[Math.floor(Math.random() * playlistNames.length)]}</li>
                <li>{playlistNames[Math.floor(Math.random() * playlistNames.length)]}</li>
                <li>{playlistNames[Math.floor(Math.random() * playlistNames.length)]}</li>
                <li>{playlistNames[Math.floor(Math.random() * playlistNames.length)]}</li>
                <li>{playlistNames[Math.floor(Math.random() * playlistNames.length)]}</li>
                <li>{playlistNames[Math.floor(Math.random() * playlistNames.length)]}</li>
                <li>{playlistNames[Math.floor(Math.random() * playlistNames.length)]}</li>
                <li>{playlistNames[Math.floor(Math.random() * playlistNames.length)]}</li>
                <li>{playlistNames[Math.floor(Math.random() * playlistNames.length)]}</li>
                <li>{playlistNames[Math.floor(Math.random() * playlistNames.length)]}</li>
                <li>{playlistNames[Math.floor(Math.random() * playlistNames.length)]}</li>
                <li>{playlistNames[Math.floor(Math.random() * playlistNames.length)]}</li>
                <li>{playlistNames[Math.floor(Math.random() * playlistNames.length)]}</li>
                <li>{playlistNames[Math.floor(Math.random() * playlistNames.length)]}</li>
                <li>{playlistNames[Math.floor(Math.random() * playlistNames.length)]}</li>
                <li>{playlistNames[Math.floor(Math.random() * playlistNames.length)]}</li>
                <li>{playlistNames[Math.floor(Math.random() * playlistNames.length)]}</li>
                <li>{playlistNames[Math.floor(Math.random() * playlistNames.length)]}</li>
                <li>{playlistNames[Math.floor(Math.random() * playlistNames.length)]}</li>
            </ul>
        </div>
    );
}

export default PlaylistNames;