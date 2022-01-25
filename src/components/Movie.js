import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({ medium_cover_image, title, summary, genres, id }) {
    return (<>
    <div className="slide_img_area">
        <img src={medium_cover_image} alt={title} />
    </div>
    <div className="slide_content_area">
        <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
        <p>{summary.length > 250 ? `${summary.slice(0,250)}...` : summary}</p>
        <ul>
            {genres.map((g) => (
                <li key={g}>{g}</li>
            ))}
        </ul>
    </div>
    </>);
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Movie;