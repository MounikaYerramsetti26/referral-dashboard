import { useNavigate } from "react-router-dom";

const ReferralTable = ({ referrals, search, setSearch, sort, setSort, currentPage, setCurrentPage }) => {
  const navigate = useNavigate();

  const formatDate = (date) => {
    return date.replaceAll("-", "/");
  };

  const formatProfit = (profit) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(profit);
  };

  const rowsPerPage = 10;

  const totalPages = Math.ceil(referrals.length / rowsPerPage);

  const pageNumbers = [];

for (let i = 1; i <= totalPages; i++) {
  pageNumbers.push(i);
}

  const startIndex = (currentPage - 1) * rowsPerPage;

  const currentRows = referrals.slice(
    startIndex,
    startIndex + rowsPerPage
    );

  return (
    <section className="table-section">
      <h2>All Referrals</h2>
      <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  }}
>
  <input
    type="text"
    placeholder="Name or service..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    style={{
      padding: "10px",
      width: "300px",
    }}
  />

  <select
    value={sort}
    onChange={(e) => setSort(e.target.value)}
  >
    <option value="desc">Newest First</option>
    <option value="asc">Oldest First</option>
  </select>
</div>

      <table className="referral-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Service</th>
            <th>Date</th>
            <th>Profit</th>
          </tr>
        </thead>

        <tbody>
          {currentRows.map((item) => (
            <tr
              key={item.id}
              onClick={() =>
  navigate(`/referral/${item.id}`, {
    state: item,
  })
}
              style={{ cursor: "pointer" }}
            >
              <td>{item.name}</td>
              <td>{item.serviceName}</td>
              <td>{formatDate(item.date)}</td>
              <td>{formatProfit(item.profit)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    <div className="pagination">

  <button
    disabled={currentPage === 1}
    onClick={() => setCurrentPage(currentPage - 1)}
  >
    Previous
  </button>

  {pageNumbers.map((page) => (
    <button
      key={page}
      className={currentPage === page ? "active-page" : ""}
      onClick={() => setCurrentPage(page)}
    >
      {page}
    </button>
  ))}

  <button
    disabled={currentPage === totalPages}
    onClick={() => setCurrentPage(currentPage + 1)}
  >
    Next
  </button>

</div>

<p className="entries">
  Showing {startIndex + 1}–
  {Math.min(startIndex + rowsPerPage, referrals.length)}
  {" "}of{" "}
  {referrals.length} entries
</p>
    </section>
    );
};

export default ReferralTable;