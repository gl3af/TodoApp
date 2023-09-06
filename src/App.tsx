import Todos from "@/components/todos.tsx";

export default function App() {
  return (
    <main className="h-full flex justify-center items-center">
      <div className="h-full w-full flex flex-col items-center jusctify-center pb-8 px-4">
        <h1 className="text-7xl font-light text-red-300 py-10">todos</h1>
        <Todos />
      </div>
    </main>
  )
}
