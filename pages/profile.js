import Link from "next/link";

import Layout from "../components/Layout";

const ProfileView = () => (
  <Layout>
    <br />
    <Link href="/explore">
      <a> Welcome to Profile</a>
    </Link>
  </Layout>
);

export default ProfileView;