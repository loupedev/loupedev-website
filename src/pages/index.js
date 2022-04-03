import * as React from "react"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1 id="title"></h1>
  </Layout>
)

var i = 0;
var txt = '&#123;loupedev&#125;';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

export default IndexPage