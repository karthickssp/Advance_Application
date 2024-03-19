import { Link, useLocation } from "react-router-dom";
import "../../assets/css/LoanTypes.css";
export const LoanTypes = () => {

  const location = useLocation();
  const isAdmin = () => {
    return location.pathname.startsWith("/admin");
  };

  const schemes = [
    {
      id: 1,
      title: "Crop Development Loan",
      description: "Supports farmers in cultivating various crops.",
      eligibility: "Farmers with a minimum landholding of 5 acres.",
      interestRate: "5% per annum",
      applicationDeadline: "2024-03-15",
    },
    {
      id: 2,
      title: "Livestock Expansion Scheme",
      description: "Promotes the expansion of livestock farming.",
      eligibility: "Livestock farmers with at least 2 years of experience.",
      interestRate: "4.5% per annum",
      applicationDeadline: "2024-03-20",
    },
    {
      id: 3,
      title: "Greenhouse Innovation Grant",
      description:
        "Encourages the adoption of greenhouse technology for crop cultivation.",
      eligibility: "Farmers interested in greenhouse farming.",
      interestRate: "4% per annum",
      applicationDeadline: "2024-03-25",
    },
    {
      id: 4,
      title: "FarmFund Equipment Loan",
      description: "Facilitates the purchase of modern agricultural equipment.",
      eligibility:
        "Farmers looking to invest in advanced agricultural machinery.",
      interestRate: "3.5% per annum",
      applicationDeadline: "2024-03-30",
    },
    {
      id: 5,
      title: "Organic Farming Support",
      description:
        "Supports farmers transitioning to organic farming practices.",
      eligibility: "Farmers committed to adopting organic farming methods.",
      interestRate: "3% per annum",
      applicationDeadline: "2024-04-05",
    },
    {
      id: 6,
      title: "Drought Resilience Fund",
      description:
        "Aids farmers in drought-prone regions to enhance water conservation.",
      eligibility: "Farmers in regions prone to drought conditions.",
      interestRate: "3.2% per annum",
      applicationDeadline: "2024-04-10",
    },
    {
      id: 7,
      title: "Women in Agriculture Grant",
      description:
        "Empowers women farmers by providing financial support for agricultural ventures.",
      eligibility: "Female farmers involved in agriculture.",
      interestRate: "3.8% per annum",
      applicationDeadline: "2024-04-15",
    },
    {
      id: 8,
      title: "Youth FarmFund Program",
      description:
        "Encourages young individuals to enter agriculture as entrepreneurs.",
      eligibility:
        "Youth between the ages of 18 and 35 interested in agriculture.",
      interestRate: "4.2% per annum",
      applicationDeadline: "2024-04-20",
    },
    {
      id: 9,
      title: "Rural Solar Irrigation Fund",
      description:
        "Supports farmers in adopting solar-powered irrigation systems for sustainable farming.",
      eligibility: "Farmers in rural areas interested in solar irrigation.",
      interestRate: "3.5% per annum",
      applicationDeadline: "2024-04-25",
    },
    {
      id: 10,
      title: "FarmFund Adoption Grant",
      description:
        "Encourages the adoption of technology in agriculture for increased efficiency.",
      eligibility: "Farmers willing to implement FarmFund solutions.",
      interestRate: "4% per annum",
      applicationDeadline: "2024-04-30",
    },
  ];
  return (
    <>
      <div className="schemes-container">
        <h1 className="schemes-heading">Agriculture Loan Schemes</h1>
        {!isAdmin && (
          <Link to="/add-scheme" className="add-scheme-button">
            Add New Scheme
          </Link>
        )}
        <div className="schemes-list">
          {schemes.map((scheme) => (
            <div to={`/loan`} key={scheme.id} className="scheme-card">
              <h2>{scheme.title}</h2>
              <p className="scheme-description">{scheme.description}</p>
              <div className="scheme-details">
                <p>
                  <strong>Eligibility:</strong> {scheme.eligibility}
                </p>
                <p>
                  <strong>Interest Rate:</strong> {scheme.interestRate}
                </p>
                <p>
                  <strong>Application Deadline:</strong>{" "}
                  {scheme.applicationDeadline}
                </p>
              </div>
                <Link to = {'/apply'} key={scheme.id} className="apply-button">Apply</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
