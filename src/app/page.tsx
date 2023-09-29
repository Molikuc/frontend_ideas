import Homepage from "@/components/Homepage";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl mb-8">Welcome</h1>
        <h2 className="text-2xl mb-8">
          This is a hub to different Front End creation I made
        </h2>
        <h3 className="text-lg">
          Most of the project got interactivity so don&rsquo;t be affraid to
          test it
        </h3>
        <h4>Not mobile friendly right now</h4>
      </div>
      <Homepage />
    </>
  );
}
