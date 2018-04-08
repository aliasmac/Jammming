const apiKey = '';
const clientID = '3ab4ac718014460f9d10c8eba2c256fb';
const redirectURI = "http://localhost:3000/";

const Spotify = {

  getAccessToken() {
    if (accessToken) {
      return accessToken;
    } else if (accessToken && expire_in === url) {
      return windows.location.href.match(/access_token=([^&]*)/, /expires_in=([^&]*)/);
      const accessToken = ([^&]*);
      const expiresIn = ([^&]*)/);
      const tokenExpire = expiresIn;
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
    } else {
      windows.location.href(`https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`)
    }
  }

   search(term) {
     return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,
       {headers:
         {Authorisation: `Bearer ${accessToken}`}
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

   savePlaylist(name, track.uri[]) {
     if(name && track.uri[] !== true) {
       return
     };
     let accessToken = getAccessToken();
     let headers = {Authorisation: `Bearer ${accessToken}`};
     let userId = '';
   }

}

export default Spotify;
