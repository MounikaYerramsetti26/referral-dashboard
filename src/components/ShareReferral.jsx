const ShareReferral = ({ referral }) => {

  const copy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied!");
  };

  return (
    <section className="share">

      <h2>Refer friends and earn more</h2>

      <label>Referral Link</label>

      <div className="copy-box">

        <input
          readOnly
          value={referral.link}
        />

        <button
          onClick={() => copy(referral.link)}
        >
          Copy
        </button>

      </div>

      <label>Referral Code</label>

      <div className="copy-box">

        <input
          readOnly
          value={referral.code}
        />

        <button
          onClick={() => copy(referral.code)}
        >
          Copy
        </button>

      </div>

    </section>
  );
};

export default ShareReferral;