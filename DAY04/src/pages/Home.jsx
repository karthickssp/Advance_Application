import { Link } from "react-router-dom";
import "../assets/css/Home.css";
import video from "../assets/videos/mainback.mp4";
import img1 from "../assets/videos/access.mp4";
import img2 from "../assets/videos/financial.mp4";
import img3 from "../assets/videos/risk.mp4";
import { Slider } from "../components/others/Slider";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="description-content">
          <div className="description-title">Welcome to FarmFunds!</div>
          <p className="description-para">
            FarmFund is a revolutionary farmer financing platform designed to
            empower agricultural communities by providing innovative financial
            solutions tailored to the unique needs of farmers. This platform
            acts as a catalyst for sustainable farming practices, offering
            farmers access to crucial capital and resources that are essential
            for the growth and success of their agricultural endeavors.FarmFund
            leverages cutting-edge technology to streamline the financing
            process, enabling farmers to secure loans efficiently and at
            competitive rates.
          </p>
          <Link to="/loan" className="explore-link">
            <button className="explore-btn">Apply for the Loan</button>
          </Link>
        </div>
        <div className="video-content">
          <video autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>

      <Slider/>
      <div className="container clearfix">
        <div className="nobottomborder bottommargin-sm text-center">
          <h1 className="guide-title">
            
          </h1>
          <h2 className="guide-subtitle">Suitable for worldwide Farmers</h2>
        </div>

        <div className="row clearfix">
          <div className="col bottommargin-sm">
            <div className="feature-box media-box text-center">
              <video autoPlay loop muted
                src={img1}
                alt="Access to Capital"
                className="feature-icon"
              />
              <h3 className="feature-title">Access to Capital</h3>
              <p className="feature-description">
                FarmFunds helps farmers access loans for seeds, fertilizers,
                equipment.
              </p>
            </div>
          </div>
          <div className="col bottommargin-sm">
            <div className="feature-box media-box text-center">
              <video autoPlay loop muted
                src={img2}
                alt="Financial Inclusion"
                className="feature-icon"
              />
              <h3 className="feature-title">Financial Inclusion</h3>
              <p className="feature-description">
                FarmFunds tailors financial solutions for farmers, meeting their
                unique needs in crop cycles.
              </p>
            </div>
          </div>

          <div className="col bottommargin-sm">
            <div className="feature-box media-box text-center">
              <video autoPlay loop muted
               src={img3} alt="Risk Mitigation" className="feature-icon" />
              <h3 className="feature-title">Risk Mitigation</h3>
              <p className="feature-description">
                FarmFunds offers insurance for farmers, protecting against crop
                failures and unforeseen events to reduce risk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
