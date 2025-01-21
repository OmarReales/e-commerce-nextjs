"use client";
import Button from "./components/ui/Button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <>
      <main className="container m-auto">
        <h1>404 - Page Not Found</h1>
        <hr />
        <p>The page you are looking for does not exist.</p>
        <Button onClick={() => router.back()}>Go Home</Button>
      </main>
    </>
  );
}
