import Link from "next/link";

import Layout from "../components/Layout";

const Index = () => (
  <Layout>
    <br />
    <Link href="/explore">
      <a> Exploring the Prototype</a>
    </Link>
  </Layout>
);

export default Index;