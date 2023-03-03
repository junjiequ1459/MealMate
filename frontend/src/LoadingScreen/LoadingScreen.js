import "./LoadingScreen.css";

function LoadingScreen() {
  return (
    <>
      <div className="loading-screen-container">
        <div className="loading-screen-shape-container">
          <div>
            <h1 className="loading-text">LOADING</h1>
            <div className="loading-dots">
              <div className="loading-screen-shape"></div>
              <div className="loading-screen-shape2"></div>
              <div className="loading-screen-shape3"></div>
            </div>
          </div>
        </div>
        <div className="sorry-text">
          sorry, free tier onRender takes a while to load...
        </div>
      </div>
    </>
  );
}

export default LoadingScreen;
