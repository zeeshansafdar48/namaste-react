# Igniting Our App - Assignment

## What is NPM

**NPM** is a main repository where all of the packages are stored, it is kind of a database of the packages. If you think **NPM** stands for **Node Package Manager** then you are wrong, because if you visit the official website of **NPM** then there is nothing a place where you can see **NPM** stands for **Node Package Manager**, instead **NPM** is everything you can think of instead of **Node Package Manager**. It works like **Node Package Manager** but it does not stands for this.

## What is "Parcel/Webpack/Vite"? Why do we need it?

Parcel makes our app fast. Parcel is a bundler, it bundles our app, but besides bundling it do a lot of things for us. Parcel do the following:

- Build our app
- Lunch a server
- Host our app on the server (http and also https)
- Hot Module Replacement (Hot Reloading)
- Caching our app
- Minified the code
- Optimized our code
- Diagnostic
- Tree shaking
- Code splitting
- Transpilation

## What is ".parcel-cache"?

Whenever we run the command to make a build using parcel, parcel will take some time to build our app for the first time, but after that if we make the build again, then it will take less time as compare to the previous one to build our app, why does it so that? Because, whenever we make build of our app, parcel cache our app in a newly generated folder **.parcel-cache** and whenever we build it again, parcel use this folder for caching and hence make the build fast.

## What is "npx"?

npx is used to execute a package.
What is the difference between npm and npx, npm install a package and npx execute a package.

## What is dependencies and dev dependencies?

Dev dependencies are those packages or dependencies which we need in our development environment, which we need while building our app, for example, the Parcel.
And dependencies are those one which we need in the Production for example React.

## What is Tree Shaking?

Tree shaking is a concept used by the Parcel. Parcel use this while code removing. For example our app has 100 of functions, but we are only using 4 or 5 functions in our app, parcel will remove the unused code from the build, this concept is known as Tree Shaking.

## What is Hot Module Replacement?

Parcel use this concept whenever we make some changes in our code and save the files. Parcel will make the build automatically again and reflect the changes on the browser. This is also known as Hot Reloading.

## What is ".gitignore"? What should we add and not add into it?

**.gitignore** is a file used by git to identify the files and folders that don't need to push on the git. If we write a folder name inside this file, git will not make it as a change and will not push it to the git. And those folders and files should be which can be auto generated. For example, node_modules, dist, .parcel-cache. These are some of the folders that we have to add in .gitignore file because we have sufficient information to generated them.

## What is node_modules? Is it a good idea to push that on git?

Node_modules is a folder generated when we run the command npm i or apparently installing any package. This node_modules contains all the code of that package.
No, we should not push the node_modules to git, because the size of node_module is huge. Node_modules contains all of the code of a package and if that package depends on the other packages then these packages are also downloaded in the node_modules and so on. This chain of dependency is known as Transitive dependency. And secondly we can regenerate this folder so that is why we should not push it to the git.

## What is the dist folder?

When we build our app using Parcel, it generate a dist folder containing HTML, CSS and JavaScript files also the images or other things that our app need to run. Our hosted app lies in this dist folder.

## What is browserlists?

A browserlist is a file that specifies which browsers your project should support. This is important because it allows you to target specific browsers with your code, and it can help you to avoid using features that are not supported by older browsers.
