# Overview

The app consists of frontend and backend parts. The backend app is a simple REST service that has in-memory persistence with some pre-defined values purely for demonstration and testing purposes. The aim was to put as little work as possible but still be able to have some basic CRUD functionality to mimic real-world API.

The aim of the frontend app was to have little dependencies. Although not chosen for this the best approach would be to use some UI framework like Bulma or BootstrapVue. The app intentially has little or none styling as TailwindCSS was enough to provide styling and laoyout for the app.

# Running frontend app

## Setup

Install the dependencies:

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

# Running backend app

## Setup

Install the dependencies:

```bash
npm install
```

## Start server

To start dev server on `http://localhost:3333`:

```bash
npm run start:dev
```
