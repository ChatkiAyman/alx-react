import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
  handleClick = () => {
    this.props.markAsRead(this.props.id);
  };

  render() {
    const { type = 'default', value, html } = this.props;
    const priorityStyle = type === 'urgent' ? styles.urgentPriority : styles.defaultPriority;
    if (html) {
      return (
        <li
          className={css(priorityStyle)}
          data-priority={type}
          onClick={this.handleClick}
        >
          <span dangerouslySetInnerHTML={{ __html: html.__html }} />
        </li>
      );
    }

    return (
      <li
        className={css(priorityStyle, styles.notificationItem)}
        data-priority={type}
        onClick={this.handleClick}
      >
        {value}
      </li>
    );
  }
}

const styles = StyleSheet.create({
  urgentPriority: {
    color: '#ff0000'
  },
  defaultPriority: {
    color: '#00008b'
  },
  notificationItem: {
    '@media (max-width: 900px)': {
      width: '100%',
      fontSize: '20px',
  
    },
  }
});

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func.isRequired,
};

export default NotificationItem;