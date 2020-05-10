import Link from "next/link";

import Layout from "../components/Layout";

const DocsView = () => (
  <Layout>
    <br />
    <Link href="/explore">
      <a> Welcome to Docs</a>
    </Link>
  </Layout>
);

export default DocsView;