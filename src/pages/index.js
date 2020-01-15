import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import IsItTime from "../components/IsItTime";
import GetReadyListItem from "../components/GetReadyListItem/GetReadyListItem";
import { registerDeadline, generalElectionDeadline } from "../constants";

const IndexPage = () => (
  <Layout>
    <SEO title="Is It General Election Time Yet?" />
    <IsItTime />
    <h4 style={{ marginTop: "100px" }}>What should I do to get ready?</h4>
    <ul style={{ maxWidth: "500px", textAlign: "initial" }}>
      <GetReadyListItem
        deadline={registerDeadline}
        href="https://www.checktheregister.ie"
      >
        Ensure you are on the register.
      </GetReadyListItem>
      <GetReadyListItem
        href="https://www.checktheregister.ie/appforms/RFA2%20Supplement%20to%20Register%20of%20Electors%20[English]%20.doc"
        deadline={registerDeadline}
      >
        If you aren't on the register, get added to the supplemental register by
        filling in this form, having it witnessed at your local Garda station,
        and get it to your local County Council.
      </GetReadyListItem>
      <GetReadyListItem
        href="https://www.checktheregister.ie/appforms/RFA3_English_Form.pdf"
        deadline={registerDeadline}
      >
        If your address is wrong, update it on the supplemental register by
        filling in this form, having it witnessed at your local Garda station,
        and get it to your old address's County Council.
      </GetReadyListItem>
      <GetReadyListItem
        href="https://ireland.isidewith.com/political-quiz"
        deadline={generalElectionDeadline}
      >
        If you don't know who you're voting for, see which parties align with
        your values.
      </GetReadyListItem>
    </ul>
  </Layout>
);

export default IndexPage;
