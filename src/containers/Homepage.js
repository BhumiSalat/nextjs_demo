import Link from "next/link";
import { Todo } from "../pages/Details/Todo";
import { Food } from "../pages/Details/Food";
export default function Homepage() {
  return (
    <div>
      <h2>Home Page</h2>
      <Link href="/Details/Todo">
        <a>Todo Page</a>
      </Link>
      <br></br>
      <Link href="/Details/Food">
        <a>Food Page</a>
      </Link>
    </div>
  );
}
