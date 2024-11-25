# Getting Started with tailwindCSS
https://tailwindcss.com/docs/installation
1- installe node
2- npm i
3- npm install -D tailwindcss
4- npx tailwindcss init
to start the tailwindcss procss we need this CMD : 
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
then we configur it on packag.json 

## Available Scripts on packag.json file
"scripts": {
    "build-css":"npx tailwindcss -i ./src/input.css -o ./src/output.css --watch"
  }

In the project directory, you can run tailwindcss procss:

### `npm run build-css`
## start project on Live Server extension in VSCode
start index.html whith live server