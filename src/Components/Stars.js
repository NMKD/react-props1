import Star from "./Star";
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'

function Stars({ count }) {
    if (count < 1 || count > 5) {
        return null;
    };

    const starsElements = [];
    for (let i = 0; i < count; i += 1) {
        starsElements.push(<Star key={nanoid(10)} />);
    }

    return (
        <ul className="card-body-stars u-clearfix">
            {starsElements}
        </ul>
    );
}

Stars.propTypes = {
    count: PropTypes.number.isRequired,
}

export default Stars;