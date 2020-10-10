import Link from "next/link";

import { useState, useEffect } from "react";

export default function List({ todosList }) {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    async function loadData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      const todosList = await response.json();
      setTodos(todosList);
    }

    loadData();
  }, []);

  return (
    <div>
      {todosList.map((e, index) => (
        <div key={index}>
          <Link as={`/${e.vehicle}/${e.ownerName}`} href="/[vehicle]/[person]">
            <a>
              Navigate to {e.ownerName}'s {e.vehicle}
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}

// List.getInitialProps = async () => {
//   const response = await fetch('http://localhost:4001/vehicles');
//   const ownersList = await response.json();
//   return {ownersList: ownersList}
// }
