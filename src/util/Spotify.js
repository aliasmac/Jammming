const apiKey = '';
const clientID = '3ab4ac718014460f9d10c8eba2c256fb';
const redirectURI = "http://localhost:3000/";

const Spotify = {

  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }
    const accessTokenValue = windows.location.href.match(/access_token=([^&]*)/);
    const expirationTime = windows.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenValue && expirationTime) {
      accessToken = accessTokenValue[1];
      return accessToken;
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`
      window.location = accessUrl;
    }

   search(term) {
     return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,
       {headers:
         {Authorization: `Bearer ${accessToken}`}
       }).then(response => {
         return response.json();
       }).then(jsonResponse => {
         return jsonResponse.track.map(track => ({
            id: track.id,
            Name: track.name,
            Artist: track.artists[0].name,
            Album: track.album.name,
            uri: track.uri,
         }))
       })
   }

   savePlaylist(name, s[]) {
     if(!name && !track.uri) {
     };
     let accessToken = getAccessToken();
     let headers = {Authorization: `Bearer ${accessToken}`};
     let userID = '';

     return fetch('https://api.spotify.com/v1/me', {headers: headers}
         ).then(response => response.json()
         ).then(jsonResponse => {
           userId = jsonResponse.id;
           return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
             headers: headers,
             method: 'POST',
             body: JSON.stringify({name: name})
           }).then(response => response.json()
           ).then(jsonResponse => {
             const playlistId = jsonResponse.id;
             return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
               headers: headers,
               method: 'POST',
               body: JSON.stringify({uris: trackUris})
             });
           });
         });



// end of spotify module
}

export default Spotify;
