import React from "react";
import Link from "next/link";

const Home = () => (
  <div>
    <h1>Sample</h1>
    <Link href='/about'><a>About</a></Link>
    <style jsx>
      {`
        h1 {
          color: red;
        }
      `}
    </style>
  </div>
);

export default Home;
