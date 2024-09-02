import { notFound } from "next/navigation";

export default function Home() {
  if (true) return notFound();
  return (
    <main>
      <div>Hello dsa!</div>
    </main>
  );
}
