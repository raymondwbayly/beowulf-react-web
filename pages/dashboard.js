import Link from "next/link";

import Layout from "../components/Layout";

const DashboardView = () => (
  <Layout>
    <br />
    <Link href="/dashboard">
      <a> Dashboard</a>
    </Link>
  </Layout>
);

export default DashboardView;