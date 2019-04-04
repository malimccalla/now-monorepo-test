import 'isomorphic-unfetch';

import testString from '@monorepo/shared';

const Page = ({ data }) => (
  <div>
    <p>From shared package: {testString}</p>
    <p>From api response: {data}</p>
  </div>
);

Page.getInitialProps = async ({ req }) => {
  console.log(req);

  const baseUrl = `https://${req.headers.host}/api`;
  const data = await (await fetch(baseUrl)).text();

  return { data };
};

export default Page;
