import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>FE clone test</h1>
      <p>Minimal Next.js frontend used to test merging repositories into a monorepo.</p>
      <ul>
        <li>
          <Link href="/models">Browse models</Link>
        </li>
        <li>
          <Link href="/requests">Advisor requests</Link>
        </li>
      </ul>
    </main>
  );
}
