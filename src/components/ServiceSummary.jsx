const ServiceSummary = ({ summary }) => {
  return (
    <section className="summary">

      <h2>Service Summary</h2>

      <table className="summary-table">

        <tbody>

          <tr>
            <td>Service</td>
            <td>{summary.service}</td>
          </tr>

          <tr>
            <td>Your Referrals</td>
            <td>{summary.yourReferrals}</td>
          </tr>

          <tr>
            <td>Active Referrals</td>
            <td>{summary.activeReferrals}</td>
          </tr>

          <tr>
            <td>Total Ref. Earnings</td>
            <td>{summary.totalRefEarnings}</td>
          </tr>

        </tbody>

      </table>

    </section>
  );
};

export default ServiceSummary;