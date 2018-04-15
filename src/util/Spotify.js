// Do i need to import app.js for the savlist method to recognise trackuris?

const clientID = '3ab4ac718014460f9d10c8eba2c256fb';
const redirectURI = "http://localhost:3000/";
let accessToken;

const Spotify = {

  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
      let accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      return accessToken;
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`
      window.location = accessUrl;
    }
  },


   search(term) {
     const accessToken = Spotify.getAccessToken();

     return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,
       {headers:
         {Authorization: `Bearer ${accessToken}`}
       }).then(response => {
         return response.json();
       }).then(jsonResponse => {
         if(!jsonResponse.tracks) {
           return [];
         }
           return jsonResponse.tracks.items.map(track => ({
              id: track.id,
              Name: track.name,
              Artist: track.artists[0].name,
              Album: track.album.name,
              uri: track.uri,

       }));
   });
 },



   savePlaylist(name, trackUris) {
     if(!name || !trackUris) {
       return;
     };

     let accessToken;
     const headers = {Authorization: `Bearer ${accessToken}`};
     let userID;

     return fetch('https://api.spotify.com/v1/me', {headers: headers}
         ).then(response => response.json()
         ).then(jsonResponse => {
           let userID = jsonResponse.id;
           return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
             headers: headers,
             method: 'POST',
             body: JSON.stringify({name: name})
           }).then(response => response.json()
           ).then(jsonResponse => {
             const playlistId = jsonResponse.id;
             return fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistId}/tracks`, {
               headers: headers,
               method: 'POST',
               body: JSON.stringify({uris: trackUris})
             });
           });
         });
       }
// end of spotify module
  }

export default Spotify;
