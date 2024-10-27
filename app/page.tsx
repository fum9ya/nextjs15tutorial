import Hello from "@/app/components/hello";


export default function Home() {
  console.log("Where is this rendered? Server or CLIENT?");
  return (
    <>
        <h1 className="text-3xl">Welcome to Next.js 15</h1>
        <Hello />
    </>
  );}
