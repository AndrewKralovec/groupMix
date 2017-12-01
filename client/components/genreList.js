const genreList = [
  { key: 'acoustic pop', text: 'acoustic pop', value: 'acoustic pop' },
  { key: 'afrobeat', text: 'afrobeat', value: 'afrobeat' },
  { key: 'alt-rock', text: 'alt-rock', value: 'alt-rock' },
  { key: 'alternative', text: 'alternative', value: 'alternative' },
  { key: 'ambient', text: 'ambient', value: 'ambient' },
  { key: 'anime', text: 'anime', value: 'anime' },
  { key: 'black-metal', text: 'black-metal', value: 'black-metal' },
  { key: 'bluegrass', text: 'bluegrass', value: 'bluegrass' },
  { key: 'blues', text: 'blues', value: 'blues' },
  { key: 'bossanova', text: 'bossanova', value: 'bossanova' },
  { key: 'brazil', text: 'brazil', value: 'brazil' },
  { key: 'breakbeat', text: 'breakbeat', value: 'breakbeat' },
  { key: 'british', text: 'british', value: 'british' },
  { key: 'cantopop', text: 'cantopop', value: 'cantopop' },
  { key: 'chicago-house', text: 'chicago-house', value: 'chicago-house' },
  { key: 'children', text: 'children', value: 'children' },
  { key: 'chill', text: 'chill', value: 'chill' },
  { key: 'classic rock', text: 'classic rock', value: 'classic rock' },
  { key: 'classical', text: 'classical', value: 'classical' },
  { key: 'club', text: 'club', value: 'club' },
  { key: 'comedy', text: 'comedy', value: 'comedy' },
  { key: 'country', text: 'country', value: 'country' },
  { key: 'dance pop', text: 'dance pop', value: 'dance pop' },
  { key: 'dancehall', text: 'dancehall', value: 'dancehall' },
  { key: 'death-metal', text: 'death-metal', value: 'death-metal' },
  { key: 'deep-house', text: 'deep-house', value: 'deep-house' },
  { key: 'detroit-techno', text: 'detroit-techno', value: 'detroit-techno' },
  { key: 'disco', text: 'disco', value: 'disco' },
  { key: 'disney', text: 'disney', value: 'disney' },
  { key: 'drum-and-bass', text: 'drum-and-bass', value: 'drum-and-bass' },
  { key: 'dub', text: 'dub', value: 'dub' },
  { key: 'dubstep', text: 'dubstep', value: 'dubstep' },
  { key: 'edm', text: 'edm', value: 'edm' },
  { key: 'electro', text: 'electro', value: 'electro' },
  { key: 'electronic', text: 'electronic', value: 'electronic' },
  { key: 'emo', text: 'emo', value: 'emo' },
  { key: 'folk', text: 'folk', value: 'folk' },
  { key: 'forro', text: 'forro', value: 'forro' },
  { key: 'french', text: 'french', value: 'french' },
  { key: 'funk', text: 'funk', value: 'funk' },
  { key: 'garage', text: 'garage', value: 'garage' },
  { key: 'german', text: 'german', value: 'german' },
  { key: 'gospel', text: 'gospel', value: 'gospel' },
  { key: 'goth', text: 'goth', value: 'goth' },
  { key: 'grindcore', text: 'grindcore', value: 'grindcore' },
  { key: 'groove', text: 'groove', value: 'groove' },
  { key: 'grunge', text: 'grunge', value: 'grunge' },
  { key: 'guitar', text: 'guitar', value: 'guitar' },
  { key: 'happy', text: 'happy', value: 'happy' },
  { key: 'hard-rock', text: 'hard-rock', value: 'hard-rock' },
  { key: 'hardcore', text: 'hardcore', value: 'hardcore' },
  { key: 'hardstyle', text: 'hardstyle', value: 'hardstyle' },
  { key: 'heavy-metal', text: 'heavy-metal', value: 'heavy-metal' },
  { key: 'hip-hop', text: 'hip-hop', value: 'hip-hop' },
  { key: 'holidays', text: 'holidays', value: 'holidays' },
  { key: 'honky-tonk', text: 'honky-tonk', value: 'honky-tonk' },
  { key: 'house', text: 'house', value: 'house' },
  { key: 'idm', text: 'idm', value: 'idm' },
  { key: 'indian', text: 'indian', value: 'indian' },
  { key: 'indie', text: 'indie', value: 'indie' },
  { key: 'indie-pop', text: 'indie-pop', value: 'indie-pop' },
  { key: 'industrial', text: 'industrial', value: 'industrial' },
  { key: 'iranian', text: 'iranian', value: 'iranian' },
  { key: 'j-dance', text: 'j-dance', value: 'j-dance' },
  { key: 'j-idol', text: 'j-idol', value: 'j-idol' },
  { key: 'j-pop', text: 'j-pop', value: 'j-pop' },
  { key: 'j-rock', text: 'j-rock', value: 'j-rock' },
  { key: 'jazz', text: 'jazz', value: 'jazz' },
  { key: 'k-pop', text: 'k-pop', value: 'k-pop' },
  { key: 'kids', text: 'kids', value: 'kids' },
  { key: 'latin', text: 'latin', value: 'latin' },
  { key: 'latino', text: 'latino', value: 'latino' },
  { key: 'malay', text: 'malay', value: 'malay' },
  { key: 'mandopop', text: 'mandopop', value: 'mandopop' },
  { key: 'metal', text: 'metal', value: 'metal' },
  { key: 'metal-misc', text: 'metal-misc', value: 'metal-misc' },
  { key: 'metalcore', text: 'metalcore', value: 'metalcore' },
  { key: 'minimal-techno', text: 'minimal-techno', value: 'minimal-techno' },
  { key: 'movies', text: 'movies', value: 'movies' },
  { key: 'mpb', text: 'mpb', value: 'mpb' },
  { key: 'new-age', text: 'new-age', value: 'new-age' },
  { key: 'new-release', text: 'new-release', value: 'new-release' },
  { key: 'opera', text: 'opera', value: 'opera' },
  { key: 'pagode', text: 'pagode', value: 'pagode' },
  { key: 'party', text: 'party', value: 'party' },
  { key: 'philippines-opm', text: 'philippines-opm', value: 'philippines-opm' },
  { key: 'piano', text: 'piano', value: 'piano' },
  { key: 'pop', text: 'pop', value: 'pop' },
  { key: 'pop-film', text: 'pop-film', value: 'pop-film' },
  { key: 'post-dubstep', text: 'post-dubstep', value: 'post-dubstep' },
  { key: 'power-pop', text: 'power-pop', value: 'power-pop' },
  { key: 'progressive-house', text: 'progressive-house', value: 'progressive-house' },
  { key: 'psych-rock', text: 'psych-rock', value: 'psych-rock' },
  { key: 'punk', text: 'punk', value: 'punk' },
  { key: 'punk-rock', text: 'punk-rock', value: 'punk-rock' },
  { key: 'r-n-b', text: 'r-n-b', value: 'r-n-b' },
  { key: 'rainy-day', text: 'rainy-day', value: 'rainy-day' },
  { key: 'rap', text: 'rap', value: 'rap' },
  { key: 'reggae', text: 'reggae', value: 'reggae' },
  { key: 'reggaeton', text: 'reggaeton', value: 'reggaeton' },
  { key: 'road-trip', text: 'road-trip', value: 'road-trip' },
  { key: 'rock', text: 'rock', value: 'rock' },
  { key: 'rock-n-roll', text: 'rock-n-roll', value: 'rock-n-roll' },
  { key: 'rockabilly', text: 'rockabilly', value: 'rockabilly' },
  { key: 'romance', text: 'romance', value: 'romance' },
  { key: 'sad', text: 'sad', value: 'sad' },
  { key: 'salsa', text: 'salsa', value: 'salsa' },
  { key: 'samba', text: 'samba', value: 'samba' },
  { key: 'sertanejo', text: 'sertanejo', value: 'sertanejo' },
  { key: 'show-tunes', text: 'show-tunes', value: 'show-tunes' },
  { key: 'singer-songwriter', text: 'singer-songwriter', value: 'singer-songwriter' },
  { key: 'ska', text: 'ska', value: 'ska' },
  { key: 'sleep', text: 'sleep', value: 'sleep' },
  { key: 'songwriter', text: 'songwriter', value: 'songwriter' },
  { key: 'soul', text: 'soul', value: 'soul' },
  { key: 'soundtracks', text: 'soundtracks', value: 'soundtracks' },
  { key: 'spanish', text: 'spanish', value: 'spanish' },
  { key: 'study', text: 'study', value: 'study' },
  { key: 'summer', text: 'summer', value: 'summer' },
  { key: 'swedish', text: 'swedish', value: 'swedish' },
  { key: 'synth-pop', text: 'synth-pop', value: 'synth-pop' },
  { key: 'tango', text: 'tango', value: 'tango' },
  { key: 'techno', text: 'techno', value: 'techno' },
  { key: 'trance', text: 'trance', value: 'trance' },
  { key: 'trip-hop', text: 'trip-hop', value: 'trip-hop' },
  { key: 'turkish', text: 'turkish', value: 'turkish' },
  { key: 'work-out', text: 'work-out', value: 'work-out' },
  { key: 'world-music', text: 'world-music', value: 'world-music' }
]

export const importanceOptions = [
  { key: 0, text: '0', value: 0 },
  { key: 1, text: '1', value: 1 },
  { key: 2, text: '2', value: 2 },
  { key: 3, text: '3', value: 3 },
  { key: 4, text: '4', value: 4 },
  { key: 5, text: '5', value: 5 },
  { key: 6, text: '6', value: 6 },
  { key: 7, text: '7', value: 7 },
  { key: 8, text: '8', value: 8 },
  { key: 9, text: '9', value: 9 },
  { key: 10, text: '10', value: 10 }
]

export default genreList


// const allGenres1 = ['acoustic', 'afrobeat', 'alt-rock', 'alternative', 'ambient', 'anime', 'black-metal', 'bluegrass', 'blues', 'bossanova', 'brazil', 'breakbeat', 'british', 'cantopop', 'chicago-house', 'children', 'chill', 'classical', 'club', 'comedy', 'country', 'dance', 'dancehall', 'death-metal', 'deep-house', 'detroit-techno', 'disco', 'disney', 'drum-and-bass', 'dub', 'dubstep', 'edm', 'electro', 'electronic', 'emo', 'folk', 'forro', 'french', 'funk', 'garage', 'german', 'gospel', 'goth', 'grindcore', 'groove', 'grunge', 'guitar', 'happy', 'hard-rock', 'hardcore', 'hardstyle', 'heavy-metal', 'hip-hop', 'holidays', 'honky-tonk', 'house', 'idm', 'indian', 'indie', 'indie-pop', 'industrial', 'iranian', 'j-dance', 'j-idol', 'j-pop', 'j-rock', 'jazz', 'k-pop', 'kids', 'latin', 'latino', 'malay', 'mandopop', 'metal', 'metal-misc', 'metalcore', 'minimal-techno', 'movies', 'mpb', 'new-age', 'new-release', 'opera', 'pagode', 'party', 'philippines-opm', 'piano', 'pop', 'pop-film']

//     const allGenres2 = ['post-dubstep', 'power-pop', 'progressive-house', 'psych-rock', 'punk', 'punk-rock', 'r-n-b', 'rainy-day', 'reggae', 'reggaeton', 'road-trip', 'rock', 'rock-n-roll', 'rockabilly', 'romance', 'sad', 'salsa', 'samba', 'sertanejo', 'show-tunes', 'singer-songwriter', 'ska', 'sleep', 'songwriter', 'soul', 'soundtracks', 'spanish', 'study', 'summer', 'swedish', 'synth-pop', 'tango', 'techno', 'trance', 'trip-hop', 'turkish', 'work-out', 'world-music']

//     const createGenreOptions = () => {
//       const list = [];

//       for (let i = 0; i < allGenres1.length; i++) {
//         list.push({
//           key: allGenres1[i],
//           text: allGenres1[i],
//           value: allGenres1[i]
//         })
//       }

//       for (let i = 0; i < allGenres2.length; i++) {
//         list.push({
//           key: allGenres2[i],
//           text: allGenres2[i],
//           value: allGenres2[i]
//         })
//       }

//       return list
//     }
