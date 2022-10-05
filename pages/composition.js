import React from "react";
import Cookies from "js-cookie";

export default function Composition() {
  const [currentUser, setCurrentUser] = React.useState(null);

  function onLogin(e) {
    Cookies.set("loggedIn", true);
    //console.log(e.target.localName);
    setCurrentUser({ name: "Chris" });
  }

  function onLogout(e) {
    setCurrentUser(null);
    Cookies.remove("loggedIn");
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        minWidth: "100vw",
        textAlign: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "lightgray",
          minWidth: "100%",
          textAlign: "center",
        }}
      >
        <Header user={currentUser} />
      </div>
      <div style={{ flexGrow: "1" }}>
        {currentUser ? (
          <Dashboard>
            <DashboardNav />
            <DashboardContent>
              <WelcomeMessage user={currentUser} onLogout={onLogout} />
            </DashboardContent>
          </Dashboard>
        ) : (
          <LoginScreen onLogin={onLogin} />
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

function Header({ user }) {
  return (
    <div style={{ padding: "1rem 1rem" }}>
      {user ? (
        <h1 className="header">You Are Logged In {user.name} </h1>
      ) : (
        <h1 className="header">Header</h1>
      )}
    </div>
  );
}

function Footer() {
  return (
    <div
      style={{
        backgroundColor: "lightgray",
        minWidth: "100vw",
        textAlign: "center",
        padding: "1rem 1rem",
      }}
    >
      <p style={{ color: "navy", fontSize: "14px" }}>
        &copy;Home Office Incorporated
      </p>
    </div>
  );
}

function LoginScreen({ onLogin }) {
  return (
    <div style={{ flexGrow: 1, marginTop: "4rem" }}>
      <h1>Please Login</h1>
      <button onClick={onLogin}>Login</button>
    </div>
  );
}

function Dashboard({ children }) {
  return (
    <div style={{ flexGrow: "1", marginTop: "4rem" }}>
      <h1 style={{ color: "pink", marginBottom: "2rem", fontSize: "3rem" }}>
        Dashboard
      </h1>
      {children}
    </div>
  );
}

function DashboardNav() {
  return (
    <div>
      <h3>Dashboard Nav</h3>
    </div>
  );
}

function DashboardContent({ children }) {
  return (
    <div>
      <h3>Dashboard Content</h3>
      {children}
    </div>
  );
}

function WelcomeMessage({ user, onLogout }) {
  return (
    <div style={{ marginTop: "3rem" }}>
      <p style={{ fontSize: "1.8rem", color: "pink" }}>Welcome {user.name}!!</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}
