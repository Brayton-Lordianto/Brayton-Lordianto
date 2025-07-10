import React from "react";
import "./myHeader3.css";

export default function MyHeader3() {
  return (
    <div style={{ top: 0, position: "sticky" }}>
      <div class="container">
        <div class="navigation">
          <ul>
            <a href="http://www.sashatran.com/" class="active">
              Home
            </a>
            <a href="https://codepen.io/sashatran/">About</a>
            <a href="https://instagram.com/sasha.codes/">Instagram</a>
            <a href="https://twitter.com/sa_sha26">Twitter</a>
          </ul>
        </div>
      </div>
    </div>
  );
}
