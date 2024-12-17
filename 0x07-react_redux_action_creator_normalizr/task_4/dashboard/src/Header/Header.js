import React, { useContext } from "react";
import logo from "../assets/holber_logo.jpg";
import { StyleSheet, css } from "aphrodite";
import { AppContext } from "../App/AppContext";
function Header() {
  const {user, logOut} = useContext(AppContext)
  return (
    <div>
      <header className={`App-header ${css(styles.header)}`}>
        <img src={logo} width={150} alt="holberton school" />
        <h1>School dashboard</h1>
      </header>
      {user.isLoggedIn && (
        <section className={css(styles.greeting)} id="logoutSection">
          Welcome<strong> {user.email} </strong>
          <em>
            <a href="#" onClick={logOut}>
              (logout)
            </a>
          </em>
        </section>
      )}
    </div>
  );
}
const styles = StyleSheet.create({
  header: {
    color: '#e0354b',
    fontFamily: 'Arial, Helvetica, sans-serif',
    display: 'flex',
    alignItems: 'center',
    padding: '16px',
  },
  greeting: {
    marginTop: "1rem",
  }
  })

export default Header;
