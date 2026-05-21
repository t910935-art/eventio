import { Suspense } from "react";
import Link from "next/link";
import Layout from "src/core/layouts/Layout";
import { BlitzPage } from "@blitzjs/next";
import { UserInfo } from "../core/components/Userinfo";

const Home: BlitzPage = () => {
  return (
    <Layout title="Home">
      <Suspense fallback="Loading...">
        <UserInfo />
      </Suspense>
    </Layout>
  );
};

export default Home;
