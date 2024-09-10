const placeholderImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDsfRCwQvpsd4O5b6IK9evG9H1PTxZLoI6ew5iVnlz3ftQjMBQ";
const Card = ({ published_date, title, abstract, url, section, media }) => {
    const image = (media) => {
        return media[0] ? media[0]['media-metadata'][0].url : placeholderImg;
    }
    return (
        <div className="card d-flex flex-row justify-content-between">
            <div className="d-flex">
            <img
                className="mr-4 rounded"
                src={image(media)}
                alt="placeholder"
                width="170"
                height="170"
            />
            <div className="d-flex flex-column" style={{ width: "75%" }}>
                <p>
                <small>
                    <strong>{published_date}</strong>
                </small>
                </p>
                <h5>
                <a href={url} target="_blank" style={{ color: "#2980b9" }}>
                    {title}
                </a>
                </h5>
                <i>{abstract}</i>
            </div>
            </div>
            <p className="d-flex text-right" style={{ color: "#2980b9" }}>
            <strong>{section}</strong>
            </p>
        </div>
    );
};

export default Card;