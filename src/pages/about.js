import Link from "next/link";

const people = [
  { v: "car", name: "Bhumi" },
  { v: "bike", name: "kriya" },
  { v: "cycle", name: "piya" },
];
export default function about() {
  return (
    <div>
      {people.map((data) => (
        <div>
          <Link as={`/${data.v}/${data.name}`} href="/[vehicle]/[person]">
            <a>
              Navigat to {data.name}'s {data.v}
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
