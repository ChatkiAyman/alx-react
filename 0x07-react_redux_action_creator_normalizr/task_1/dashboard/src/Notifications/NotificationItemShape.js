import propTypes from 'prop-types';


const NotificationItemShape = propTypes.shape({
    id: propTypes.number.isRequired,
    type: propTypes.string.isRequired,
    value: propTypes.string,
    html: propTypes.shape({
        __html: propTypes.string,
    })
});

export default NotificationItemShape;
