const Overview = ({ metrics }) => {
  return (
    <section className="overview">
      <h2>Overview</h2>

      <div className="overview-grid">
        {metrics?.map((item) => (
          <div className="card" key={item.id}>
            <h4>{item.label}</h4>
            <h2>{item.value}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Overview;