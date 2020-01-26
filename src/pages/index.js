import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import IsItTime from "../components/IsItTime";
import GetReadyListItem from "../components/GetReadyListItem/GetReadyListItem";
import { registerDeadline, generalElectionDeadline } from "../constants";
import ManifestoList from "../components/Manifestos/ManifestoList";
import UnorderedList from "../components/UnorderedList";

const IndexPage = () => (
  <Layout>
    <SEO title="Is It General Election Time Yet?" />
    <IsItTime />
    <h4 style={{ marginTop: "100px" }}>What should I do to get ready?</h4>
    <UnorderedList>
      <GetReadyListItem
        deadline={registerDeadline}
        href="https://www.checktheregister.ie"
      >
        Ensure you are on the register.
      </GetReadyListItem>
      <GetReadyListItem
        href="https://ireland.isidewith.com/political-quiz"
        deadline={generalElectionDeadline}
      >
        If you don't know who you're voting for, see which parties align with
        your values.
      </GetReadyListItem>
    </UnorderedList>
    <h4 style={{ marginTop: "100px" }}>
      How can I read each party's election policies?
    </h4>
    I'll add links to manifestos as I find them. If I've missed one, either{" "}
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/cianmm/is-it-election-time"
    >
      submit a PR on GitHub to add it
    </a>{" "}
    or{" "}
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.twitter.com/cianmm"
    >
      send me a tweet
    </a>
    <ManifestoList />
  </Layout>
);

export default IndexPage;
