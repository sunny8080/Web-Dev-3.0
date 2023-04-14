tailwind - framework of css used to style css
i.e. predefined class

/_ How to install tailwind in your project _/
go to :- https://tailwindcss.com/docs/installation
node must be installed

/_ 1st way _/  
it is easiet way but we don't get hints about tailwind in this case
add in header of index.html :- <script src="https://cdn.tailwindcss.com"></script>

/_ 2nd way :- _/
i) Create a folder as root folder
ii) Run commands :-
a) npm install -D tailwindcss postcss autoprefixer vite
b) npx tailwindcss init -p
iii) Add \* in content of tailwind.config.js
iv) Add script ("start": "vite") in scripts of package.json
v) Create main.css in root folder and add this lines:
@tailwind base;
@tailwind components;
@tailwind utilities;
vi) Link main.css with index.html

```bash
to install npm :- npm install
to run npm :- npm run start
```

/_ 3rd way _/
i) Create a folder as root folder
ii) Run commands
a) npm init
b) npm i vite
c) npm install -D tailwindcss postcss autoprefixer
d) npx tailwindcss init
iii) Create postcss.config.js
iv) Add this in postcss.config.js :-
module.exports = {
plugins: {
tailwindcss: {},
autoprefixer: {},
}
}
v) Add \* in content of tailwind.config.js
vi) Add script ("start": "vite") in scripts of package.json
vii) Create main.css in root folder and add this lines:
@tailwind base;
@tailwind components;
@tailwind utilities;
viii) Link main.css with index.html

```bash
to install npm :- npm install
to run npm :- npm run start
```

## className=` bg-black ${ !isLast && 'border-b-2 border-slate-700' }`

this is how we can add js code in tailwind

mix-blend-multiply
group
leading

space
bg
mx

General properties for button :-
bg-color, color, padding, margin, border-radius,font, font-bold, text-small, cursor-pointer, hover, tranition-all, duration
