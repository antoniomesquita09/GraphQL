import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_COMMENTS = gql`
  query {
    getComments {
      name
      id
    }
  }
`;

export default function App() {
  const { loading, error, data } = useQuery(GET_COMMENTS);

  console.log(loading, error, data);

  if (error) return <h1>Erroooo</h1>;

  return (
    <div className="App">
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        data.getComments.map(comment => (
          <li key={comment.id}>
            {comment.id}: {comment.name}
          </li>
        ))
      )}
    </div>
  );
}
