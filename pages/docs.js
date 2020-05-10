import Link from "next/link";

import Layout from "../components/Layout";

const Docs = () => (
  <Layout>
    <br />
    <Link href="/explore">
      <a> Welcome to Docs</a>
    </Link>
  </Layout>
);

export default Docs;