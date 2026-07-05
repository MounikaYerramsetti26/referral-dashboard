import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Overview from "../components/Overview";
import ServiceSummary from "../components/ServiceSummary";
import ShareReferral from "../components/ShareReferral";
import ReferralTable from "../components/ReferralTable";

import API from "../services/api";



const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  
  const [sort, setSort] = useState("desc");

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchDashboard();
  }, [search, sort]);

  const fetchDashboard = async (searchValue = search,
  sortValue = sort) => {
    try {
      const response = await API.get(`/referrals?search=${searchValue}&sort=${sortValue}`);

      setDashboardData(response.data.data);
      console.log(response.data.data);

    } catch (err) {

      setError("Failed to fetch dashboard");

    } finally {

      setLoading(false);

    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <>
      <Navbar />

      <main className="dashboard">

        <div className="dashboard-header">

          <h1>Referral Dashboard</h1>

          <p>
            Track your referrals, earnings, and partner activity in one place.
          </p>

        </div>

        <Overview metrics={dashboardData.metrics} />

        <ServiceSummary summary={dashboardData.serviceSummary} />

        <ShareReferral referral={dashboardData.referral} />

        <ReferralTable
          referrals={dashboardData.referrals}
          search={search}
          setSearch={setSearch}
          sort={sort}
          setSort={setSort}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

      </main>

      <Footer />

    </>
  );
};

export default Dashboard;