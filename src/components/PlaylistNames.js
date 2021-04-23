import '../scss/PlaylistNames.scss';

const PlaylistNames = props => {
    const keywordArray = props.keywords.trim().split(",");

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
        "The Best Of " + randomItems[Math.floor(Math.random() * 20)] + " Playlist",
        "The Best Of  " + randomItems[Math.floor(Math.random() * 20)],
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
        "Perfect " + randomItems[Math.floor(Math.random() * 20)],
        "The Perfect " + randomItems[Math.floor(Math.random() * 20)] + " Playlist",
        "Lost With " + randomItems[Math.floor(Math.random() * 20)],
        randomItems[Math.floor(Math.random() * 20)] + " Pleasures",
        randomItems[Math.floor(Math.random() * 20)] + " Block",
        "Fresh " + randomItems[Math.floor(Math.random() * 20)],
        "Sweet " + randomItems[Math.floor(Math.random() * 20)],
        "Belong To " + randomItems[Math.floor(Math.random() * 20)],
        "Top " + randomItems[Math.floor(Math.random() * 20)],
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Experience",
        "The Ultimate" + randomItems[Math.floor(Math.random() * 20)] + " Playlist",
        "The Ultimate " + randomItems[Math.floor(Math.random() * 20)] + " Experience",
        randomItems[Math.floor(Math.random() * 20)] + " Summer",
        "No " + randomItems[Math.floor(Math.random() * 20)],
        randomItems[Math.floor(Math.random() * 20)] + " With You",
        "For a " + randomItems[Math.floor(Math.random() * 20)] + " Commute",
        "A " + randomItems[Math.floor(Math.random() * 20)] + " Commute",
        randomItems[Math.floor(Math.random() * 20)] + " Masters",
        randomItems[Math.floor(Math.random() * 20)] + " Legends",
        "Some " + randomItems[Math.floor(Math.random() * 20)] + " Bops",
        randomItems[Math.floor(Math.random() * 20)] + " Bops",
        "Mixtape " + randomItems[Math.floor(Math.random() * 20)],
        randomItems[Math.floor(Math.random() * 20)] + " Jams",
        randomItems[Math.floor(Math.random() * 20)] + "'s Greatest Hits",
        randomItems[Math.floor(Math.random() * 20)] + " Songbook",
        "Traditional " + randomItems[Math.floor(Math.random() * 20)],
        randomItems[Math.floor(Math.random() * 20)] + " Essentials",
        "Still Need " + randomItems[Math.floor(Math.random() * 20)],
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Morning",
        "It's a " + randomItems[Math.floor(Math.random() * 20)] + " Day",
        "Novelty " + randomItems[Math.floor(Math.random() * 20)],
        "Time For " + randomItems[Math.floor(Math.random() * 20)],
        "A " + randomItems[Math.floor(Math.random() * 20)] + " Lift",
        "A " + randomItems[Math.floor(Math.random() * 20)] + " Boost",
        randomItems[Math.floor(Math.random() * 20)],
        "Your Favorite " + randomItems[Math.floor(Math.random() * 20)] + " Tunes",
        randomItems[Math.floor(Math.random() * 20)] + " Hope",
        "A " + randomItems[Math.floor(Math.random() * 20)] + " Echo",
        "Another " + randomItems[Math.floor(Math.random() * 20)] + " Playlist",
        "Not Another " + randomItems[Math.floor(Math.random() * 20)] + " Playlist",
        "Those " + randomItems[Math.floor(Math.random() * 20)] + " Nights",
        "Songs to Soothe the " + randomItems[Math.floor(Math.random() * 20)] + " Soul",
        randomItems[Math.floor(Math.random() * 20)] + " Respect",
        randomItems[Math.floor(Math.random() * 20)] + " Afterhours",
        randomItems[Math.floor(Math.random() * 20)] + " Daydream",
        randomItems[Math.floor(Math.random() * 20)] + " Silence",
        "Fresh " + randomItems[Math.floor(Math.random() * 20)],
        randomItems[Math.floor(Math.random() * 20)] + " and " + randomItems[Math.floor(Math.random() * 20)],
        randomItems[Math.floor(Math.random() * 20)] + " Forever",
        "Still " + randomItems[Math.floor(Math.random() * 20)] + " Sounding",
        "Art of " + randomItems[Math.floor(Math.random() * 20)],
        randomItems[Math.floor(Math.random() * 20)] + " Hands",
        randomItems[Math.floor(Math.random() * 20)] + " in the Moonlight",
        randomItems[Math.floor(Math.random() * 20)] + " Reality",
        randomItems[Math.floor(Math.random() * 20)] + " Symphony",
        "Symphony of the " + randomItems[Math.floor(Math.random() * 20)],
        randomItems[Math.floor(Math.random() * 20)] + " 365",
        randomItems[Math.floor(Math.random() * 20)] + " Worldwide",
        randomItems[Math.floor(Math.random() * 20)] + " Thoughts",
        randomItems[Math.floor(Math.random() * 20)] + " Masters at Work",
        randomItems[Math.floor(Math.random() * 20)] + " Voices",
        randomItems[Math.floor(Math.random() * 20)] + " of " + randomItems[Math.floor(Math.random() * 20)],
        "Legends of  " + randomItems[Math.floor(Math.random() * 20)],
        "Always " + randomItems[Math.floor(Math.random() * 20)],
        "Escape With " + randomItems[Math.floor(Math.random() * 20)],
        "You Like " + randomItems[Math.floor(Math.random() * 20)] + "?",
        "Great " + randomItems[Math.floor(Math.random() * 20)],
        randomItems[Math.floor(Math.random() * 20)] + " With Dinner",
        "Feels Like " + randomItems[Math.floor(Math.random() * 20)],
        "In " + randomItems[Math.floor(Math.random() * 20)] + " Heaven",
        "Gentle " + randomItems[Math.floor(Math.random() * 20)],
        "On the " + randomItems[Math.floor(Math.random() * 20)] + " Side",
        randomItems[Math.floor(Math.random() * 20)] + " Stops This Train",
        "Become " + randomItems[Math.floor(Math.random() * 20)],
        "Cheer up, it's " + randomItems[Math.floor(Math.random() * 20)],
        "Welcome to my " + randomItems[Math.floor(Math.random() * 20)] + " World",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Effect",
        randomItems[Math.floor(Math.random() * 20)] + " Songs You Love",
        "The " + randomItems[Math.floor(Math.random() * 20)] + " Side of Life",
        randomItems[Math.floor(Math.random() * 20)] + " Taste",
        "Send Me a " + randomItems[Math.floor(Math.random() * 20)] + " Song",
        "Zesty " + randomItems[Math.floor(Math.random() * 20)],
        "Spicy " + randomItems[Math.floor(Math.random() * 20)],
        "Me + You = " + randomItems[Math.floor(Math.random() * 20)],
        randomItems[Math.floor(Math.random() * 20)] + " " + randomItems[Math.floor(Math.random() * 20)],
        "Hello " + randomItems[Math.floor(Math.random() * 20)],
        randomItems[Math.floor(Math.random() * 20)] + " Error",
        randomItems[Math.floor(Math.random() * 20)] + " Game",
        "Without " + randomItems[Math.floor(Math.random() * 20)],
        randomItems[Math.floor(Math.random() * 20)] + " Delivery"
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