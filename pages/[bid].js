import React from "react";

export default function BlogPage() {
  return <div>BlogPage</div>;
}

export async function getStaticPaths() {


    const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();

  const paths = data.map((user) => {
    return {
      params: { id: user.id.toString() },
    };
  });





    return {
      paths: [
        { params: { ... } }
      ],
      fallback: true // false or 'blocking'
    };
  }