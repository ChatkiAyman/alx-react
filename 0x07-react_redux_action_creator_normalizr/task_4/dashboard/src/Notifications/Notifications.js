import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";
import NotificationShape from "./NotificationItemShape";
import exit from "../assets/x.png";
import { StyleSheet, css } from "aphrodite";

const fadeInAnimation = {
  "0%": {
    opacity: 0.5,
  },
  "100%": {
    opacity: 1,
  },
};

const bounceAnimation = {
  "0%, 100%": {
    transform: "translateY(0px)",
  },
  "50%": {
    transform: "translateY(-5px)",
  },
};

class Notifications extends PureComponent {
  render() {
    const {
      displayDrawer,
      listNotifications = [],
      handleDisplayDrawer,
      handleHideDrawer,
      markNotificationAsRead,
    } = this.props;

    return (
      <>
        <div
          onClick={handleDisplayDrawer}
          className={`menuItem ${css(
            styles.MenuItem,
            displayDrawer && styles.hiddenMenuItem
          )}`}
        >
          Your notification
        </div>
        {displayDrawer && (
          <div className={`Notifications ${css(styles.Notification)}`}>
            <button
              aria-label="Close"
              onClick={(e) => {
                console.log("Close button has been clicked");
                handleHideDrawer();
              }}
            >
              <img src={exit} alt="Close" width={10} />
            </button>
            <p>Here is the list of notifications</p>
            <ul className={css(styles.ul)}>
              {listNotifications.length === 0 ? (
                <li>No new notification for now</li>
              ) : (
                listNotifications.map(({ id, html, type, value }) => (
                  <li className={css(styles.notItem)} key={id}>
                    <NotificationItem
                      id={id}
                      type={type}
                      value={value}
                      html={html ? { __html: html } : undefined}
                      markAsRead={() => markNotificationAsRead(id)}
                    />
                  </li>
                ))
              )}
            </ul>
          </div>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  Notification: {
    border: "dashed 1px #e0354b",
    padding: "5px",
    width: "300px",
    float: "right",
    "@media (max-width: 900px)": {
      width: "100%",
      height: "100%",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1000,
      backgroundColor: "white",
      fontSize: "20px",
    },
  },
  MenuItem: {
    padding: "10px",
    float: "right",
    backgroundColor: "#fff8f8",
    cursor: "pointer",
    position: "fixed",
    top: "10px",
    right: "10px",
    zIndex: 1001,
    ":hover": {
      animationName: [fadeInAnimation, bounceAnimation],
      animationDuration: ["1s", "0.5s"],
      animationIterationCount: 3,
    },
    hiddenMenuItem: {
      display: "none",
    },
  },
  notItem: {
    "@media (max-width: 900px)": {
      listStyleType: "none",
      borderBottom: "1px solid black",
    },
  },
  ul: {
    "@media (max-width: 900px)": {
      padding: 0,
    },
  },
});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
};

export default Notifications;
