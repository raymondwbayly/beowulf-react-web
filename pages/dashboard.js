import Link from "next/link";

import Layout from "../components/Layout";

const Dashboard = () => (
  <Layout>
    <br />
    <Link href="/dashboard">
      <a> Dashboard</a>
    </Link>
  </Layout>
);

export default Dashboard;