import { twMerge } from "tailwind-merge";

export default function Home() {
  return (
    <div className={twMerge("text-sm text-red-500", "text-2xl text-black")}>
      hello
    </div>
  );
}
