import React from "react";

export default function Layout(props) {
  return (
    <div>
      <main>{props.children}</main>
    </div>
  );
}
