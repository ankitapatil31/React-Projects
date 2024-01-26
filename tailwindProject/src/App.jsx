import { useState } from "react";
import Card from "./Component/Card";
function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full w-screen h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>
        </div>
      </div>
    </div>
    // <>
    //   {/* <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind CSS</h1>
    //   <Card UserName = "Ankita" BtnText="Used me"/>
    //   <Card UserName = "Deba"/> */}
    //   {/*
    //   <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    //     <img
    //       class="w-24 h-24 md:roun rounded-full mx-auto"
    //       src="https://images.pexels.com/photos/4668513/pexels-photo-4668513.jpeg"
    //       alt=""
    //       width="384"
    //       height="512"
    //     />
    //     <div class="pt-6 md:p-8 text-center space-y-4">
    //       <blockquote>
    //         <p class="text-lg font-medium">
    //           “Tailwind CSS is the only framework that I've seen scale on large
    //           teams. It’s easy to customize, adapts to any design, and the build
    //           size is tiny.”
    //         </p>
    //       </blockquote>
    //       <figcaption class="font-medium">
    //         <div class="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
    //         <div class="text-slate-700 dark:text-slate-500">
    //           Staff Engineer, Algolia
    //         </div>
    //       </figcaption>
    //     </div>
    //   </figure>
    // */}
    // </>
  );
}

export default App;
