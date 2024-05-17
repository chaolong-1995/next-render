import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello. This is ChaoLong Piao and I built and deployed this website.{" "}
      <Link href="/about">
        About
      </Link>
    </div>
  );
}
