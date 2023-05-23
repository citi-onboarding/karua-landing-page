import styled from 'styled-components'; 

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;

body, h1, ul {
  margin: 0;
  padding: 0;
}

/* Navbar styles */
nav {
  background-color: #abdb25;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav h1 {
  font-size: 24px;
  color: #ffffff;
}

nav ul {
  list-style: none;
  display: flex;
}

nav li {
  margin-right: 20px;
}

nav a {
  color: #ffffff;
  text-decoration: none;
  font-size: 18px;
}

nav a:hover {
  text-decoration: underline;
}

`;