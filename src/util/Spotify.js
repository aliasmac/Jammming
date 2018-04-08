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


    fetch('https://api.spotify.com/v1/me', {
      {headers: headers}
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      return response.id;
      let userID = response.id;
    });

    fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
      method: 'POST',
      headers: headers,
      body: name
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      return response.id;
      let playlistID = response.id;
    })

    fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`, {
      method: 'POST',
      headers: headers,
      body: track.uri[],
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      return response.id;
      let playlistID = response.id;
    })

    }
