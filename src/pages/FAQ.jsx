import React from "react";
import treeData from "../assets/fake-data/data-tree";
import PageTitle from "../components/pagetitle";
import Tree from "../features/tree";

function FAQ(props) {
  return (
    <div className="page-roadmap-v1">
      <PageTitle title="Tree Structure" />
      <Tree data={treeData} />
    </div>
  );
}

export default FAQ;
