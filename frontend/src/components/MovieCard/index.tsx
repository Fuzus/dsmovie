import MovieScore from "components/MovieScore";
import 'pages/Form/styles.css'
import { Link } from "react-router-dom";
import { Movie } from "types/movie";

type props = {
    movie: Movie;
}

function MovieCard({ movie }: props) {
    return (
        <div>
            <img src={movie.image} alt={movie.title} className="dsmovie-card-image" />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore score={movie.score} count={movie.count} />
                <Link to={`/form/${movie.id}`}>
                    <div className="btn btn-primary dsmovie-btn ">Avaliar</div>
                </Link>
            </div>
        </div>
    );
}

export default MovieCard;