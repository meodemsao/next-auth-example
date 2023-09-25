import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import Layout from "../../../components/layout";

export default function PackagePage() {
  const params = useParams();
  const { asPath, route, query } = useRouter();
  console.log("params......................", params);
  return (
    <Layout>
      <h1>Goi thau</h1>
      <p>
        This page was rendered by {`${route}.js`}
      </p>
    </Layout>
  );
}
