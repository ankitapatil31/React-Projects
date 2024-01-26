# React + Viteand  
# In this Project I have Learn:
# how to intigate tailwind css package and Used
# How to Used props component bases 
# Add background change base on button click color
# Steps for Install Tailwind CSS with Vite
    1: Create your project Start by creating a new Vite project if you don’t have one set up already. The most common approach is to    use Create Vite.
        npm create vite@latest my-project -- --template react
        cd my-project
    
    2: Install Tailwind CSS Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files.
        npm install -D tailwindcss postcss autoprefixer ( Add package )
        npx tailwindcss init -p ( Create tailwindcssconfig file)
    
    3:Configure your template paths Add the paths to all of your template files in your tailwind.config.js file.
        content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
        ],
    
    4: Add the Tailwind directives to your CSS Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file(top)
        @tailwind base;
        @tailwind components;
        @tailwind utilities;

    EX: export default function App() {
        return (
            <h1 className="text-3xl font-bold underline">
            Hello world!
            </h1>
        )
        }

    5: npm run dev

# Refernce Links Used : https://www.devui.io/components , https://tailwindcss.com/docs/guides/vite