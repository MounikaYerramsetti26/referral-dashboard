import { useLocation, useNavigate } from "react-router-dom";

const ReferralDetails = () => {
  const navigate = useNavigate();
  const { state: referral } = useLocation();

  if (!referral) {
    return <h2>Referral not found</h2>;
  }

  const formatDate = (date) => date?.replaceAll("-", "/");

  const formatProfit = (profit) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(profit);

return (
  <div className="details-container">
    <div className="details-card">

      <h1>Referral Details</h1>

      <h2 className="partner-name">
        {referral.name}
      </h2>

      <div className="detail-row">
        <span>Referral ID</span>
        <span>{referral.id}</span>
      </div>

      <div className="detail-row">
        <span>Service Name</span>
        <span>{referral.serviceName}</span>
      </div>

      <div className="detail-row">
        <span>Date</span>
        <span>{formatDate(referral.date)}</span>
      </div>

      <div className="detail-row">
        <span>Profit</span>
        <span>{formatProfit(referral.profit)}</span>
      </div>

      <button
        className="back-btn"
        onClick={() => navigate("/")}
      >
        ← Back to Dashboard
      </button>

    </div>
  </div>
);  
};

export default ReferralDetails;