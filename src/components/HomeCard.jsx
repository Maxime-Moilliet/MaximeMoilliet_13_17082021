import React from 'react';
import PropTypes from 'prop-types';

export class HomeCard extends React.Component {
    render() {
        const { name, desc, img, alt } = this.props;
        return(
            <div className="feature-item">
                <img src={img} alt={alt} className="feature-icon" />
                <h3 className="feature-item-title">{name}</h3>
                <p>{desc}</p>
            </div>
        );
    }
}

HomeCard.propTypes = {
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
};