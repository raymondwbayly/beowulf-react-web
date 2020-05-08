import Link from "next/link";

import Layout from "../components/Layout";

const Index = () => (
  <Layout>
    <br />
    <Link href="/explore">
      <a> Welcome to WIKI</a>
    </Link>
  </Layout>
);

export default Index;