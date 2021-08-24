async function GetChart() {
    try {
        const response = await fetch('http://localhost:4567/chart')
        const data = await response.json()
        showAlbums(data.albums.data)
        showArtists(data.artists.data)
        showPlaylists(data.playlists.data)
        showPodcasts(data.podcasts.data)
        showTracks(data.tracks.data)
    } catch (error) {
        console.error(error)
    }
}

function showAlbums(list) {
    let albums = document.querySelector('#chart #albums')
    let title = document.createElement('h2')
    title.innerHTML = 'Álbuns'
    let albumsContainer = document.querySelector('.albums-container')
    let infos = ''
    for (let item of list) {
        infos += `
            <div class="card">
                <img class="card-img-top" src="${item.cover_medium}">
                <div class="card-body">
                    <h5>${item.title}</h5>
                    <p class="card-text">por ${item.artist.name}</p>
                    <div class="button-fav">
                        <a href="${item.link}" class="btn btn-primary" target="_blank">Escutar</a>
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    </div>
                </div>
            </div>
        `
        albums.insertBefore(title, albumsContainer);
        albumsContainer.innerHTML = infos
    }
}

function showArtists(list) {
    let artists = document.querySelector('#chart #artists')
    let title = document.createElement('h2')
    title.innerHTML = 'Artistas'
    let artistsContainer = document.querySelector('.artists-container')
    let infos = ''
    for (let item of list) {
        infos += `
            <div class="card-artists">
                <img class="img-artist" src="${item.picture}">
                <p class="card-text">${item.name}</p>
                <p><svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></p>
                <a href="${item.link}" class="btn btn-primary" target="_blank">Escutar</a>
            </div>
        `
        artists.insertBefore(title, artistsContainer)
        artistsContainer.innerHTML = infos
    }
}

function showPlaylists(list) {
    let playlists = document.querySelector('#chart #playlists')
    let title = document.createElement('h2')
    title.innerHTML = 'Playlists'
    let playlistsContainer = document.querySelector('.playlists-container')
    let infos = ''
    for (let item of list) {
        infos += `
            <div class="card">
                <img class="card-img-top" src="${item.picture_medium}">
                <div class="card-body">
                    <h5>${item.title}</h5>
                    <div class="button-fav">
                        <a href="${item.link}" class="btn btn-primary" target="_blank">Escutar</a>
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    </div>
                </div>
            </div>
        `
        playlists.insertBefore(title, playlistsContainer);
        playlistsContainer.innerHTML = infos
    }
}
function showPodcasts(list) {
    let podcasts = document.querySelector('#chart #podcasts')
    let title = document.createElement('h2')
    title.innerHTML = 'Podcasts'
    let podcastsContainer = document.querySelector('.podcasts-container')
    let infos = ''
    for (let item of list) {
        infos += `
            <div class="card">
                <img class="card-img-top" src="${item.picture_medium}">
                <div class="card-body">
                    <h5>${item.title}</h5>
                    <div class="button-fav">
                        <a href="${item.link}" class="btn btn-primary" target="_blank">Escutar</a>
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    </div>
                </div>
            </div>
        `
        podcasts.insertBefore(title, podcastsContainer);
        podcastsContainer.innerHTML = infos
    }
}
function showTracks(list) {
    let tracks = document.querySelector('#tracks')
    let tracksContainer = document.querySelector('.tracks-container')
    let title = document.createElement('h2')
    title.innerHTML = 'Mais tocadas'
    let table = document.querySelector('.tracks-container .table')
    let tbody = document.createElement('tbody')
    let thead = document.createElement('thead')
    thead.innerHTML = `
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Música</th>
            <th scope="col">Cantor</th>
            <th scope="col">Tempo</th>
            <th scope="col">Prévia</th>
            <th scope="col">Deezer</th>
            <th scope="col">Favoritar</th>
        </tr>
        </thead>
    `
    
    for (let item of list) {
        tbody.innerHTML += `
            <tr>
                <td><img src="${item.album.cover_small}" alt=""></td>
                <td>${item.title}</td>
                <td>${item.artist.name}</td>
                <td>${item.duration}</td>
                <td> <audio controls="controls">
                <source src="${item.preview}" type="audio/mp3" />
                seu navegador não suporta HTML5
                </audio> </td>
                <td><a href="${item.link}" target="_blank">Escutar</a></td>
                <td><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></td>
            </tr>
          `
        }
        tracks.insertBefore(title, tracksContainer)
        table.appendChild(thead)
        table.appendChild(tbody)
}

GetChart()
function Chart() {
    return ''
}

export default Chart;