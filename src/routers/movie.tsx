import '../App.css'


function Movie (){
    return(
        <div className="movie">
            <video width={800} controls>
                <source src='../video/682e4bb28393d3c3afc09891a51a1a4160201394-480p.mp4'></source>
            </video>
        </div>
    )
}

export default Movie;