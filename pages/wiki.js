import Link from "next/link";

import Layout from "../components/Layout";

const WikiView = () => (
  <Layout>
    <br />
    <Link href="/explore">
      <a> Welcome to WIKI</a>
    </Link>
  </Layout>
);

export default WikiView;