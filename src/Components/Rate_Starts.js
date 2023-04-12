import ratingless from "../Assets/ratingless.png"
import rating from "../Assets/rating.png"


function RatingStars (scaleValue, starType) {
    const range = [1, 2, 3, 4, 5]
    const scaleType =
        starType === 'full' ? (
            <img src={ rating } alt="image_etoile_plein" />
        ) : (
            <img src={ ratingless} alt="image_etoile_vide" />
        )

    return (
        <div>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? (
                        <span key={rangeElem.toString()}>{scaleType}</span>
                ) : null
            )}
        </div>
    )


}

export default RatingStars