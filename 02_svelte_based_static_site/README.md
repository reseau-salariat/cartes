# Installation/One-time setup

## Step 1: Set Up the Svelte Project

make sure you have Node.js installed. Then, create a new Svelte project using Vite.

```shell
npm create vite@latest my-svelte-map --template svelte

Need to install the following packages:
create-vite@5.4.0
Ok to proceed? (y) y
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'create-vite@5.4.0',
npm WARN EBADENGINE   required: { node: '^18.0.0 || >=20.0.0' },
npm WARN EBADENGINE   current: { node: 'v14.21.3', npm: '9.8.1' }
npm WARN EBADENGINE }
✔ Select a framework: › Svelte
✔ Select a variant: › TypeScript

Scaffolding project in /home/patrick/dev/RS/github_static_map_test/02_svelte_based_static_site/my-svelte-map...

Done. Now run:

  cd my-svelte-map
  npm install
  npm run dev
```

```shell
cd my-svelte-map
npm install
```

## Step 2: Install Leaflet and Other Dependencies
Install Leaflet and Svelte components for Leaflet.

```shell
npm install leaflet svelte-leaflet
npm install leaflet.markercluster
npm i --save-dev @types/leaflet
npm install js-yaml
```

## Step 3: Create the Svelte Component for the Map

Create a new Svelte component named Map.svelte in the src directory.    

```shell
mkdir src
touch src/Map.svelte
```

## Step 4: Update the App.svelte

Update the App.svelte file to use the Map component.

```shell
touch src/App.svelte
```

## Step 5: Add the Markers Data

Copy the former markers.js file in the src directory and move your markers data into it.
    

# tep 6: Update Icons Paths and Style

Update the paths to your custom icons in Map.svelte and ensure the icons are placed in the correct directory.

## Step 7: Run the Project

Run the Svelte project using the following command:

```shell
npm run dev
```

Now we have a more complex Svelte-based project with a map displaying markers and filters based on the input data. we can further enhance it by adding more filters and interactions as per your requirements.


# Deployement sur Github Pages

The project, as it's currently set up, runs on a development server using Vite. 
However, we can build the project into a static site that can be served by any static file server, such as GitHub Pages, Netlify, or Vercel. H
ere's how we can do it:

## Step 1: Build the Project

Run the following command to build the project into a static site:

```shell
cd my-svelte-map
npm run build
```

This will generate a dist directory containing all the necessary files for your static site.

## Step 2: Serve the Static Files

You can serve the static files using a static file server or deploy them to a static site hosting service. Here are a few options:

### Option 1: Use serve to Serve Locally

Install the serve package globally if you haven't already:

```shell
npm install -g serve
```

Then, serve the dist directory:

```shell
serve -s dist
```

### Option 2: Deploy to GitHub Pages

1. Create a gh-pages branch:

```shell
git branch -D gh-pages
git checkout --orphan gh-pages
git reset --hard
git commit --allow-empty -m "Initializing gh-pages branch"
git push origin gh-pages -f 
git switch main
```

1. Install gh-pages package:

```shell
npm install gh-pages --save-dev
```

3. Update package.json:

By adding this:

```json
"scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
}
```

4. Deploy the site:

```shell
npm run deploy
```

### Option 3: Deploy to Netlify

1. Create an account on Netlify and link your GitHub repository.
2. Set up a new site from GitHub repository.
3. Configure the build settings:
    - Build Command: npm run build
    - Publish Directory: dist
4. Deploy the site.

### Option 4: Deploy to Vercel

1. Create an account on Vercel and link your GitHub repository.
2. Import your project.
3. Configure the project settings:
    - Framework Preset: Svelte
    - Build Command: npm run build
    - Output Directory: dist
4. Deploy the site.