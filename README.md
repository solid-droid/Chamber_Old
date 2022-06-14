# Introduction

CHAMBER is a HMI(Human Machine Interface) application fully written in javascript.  
![image](https://user-images.githubusercontent.com/32586986/173544614-2e2b3e3b-8293-4ed0-a1e1-5f6d5e8d253d.png)

# High Level Goals  
1. Basic UI / Application structure. [Completed]  
2. ThreeJS based Robot Designer [In progress]  
3. File System / Workspace support [Backlog]
4. Graph Logic Editor / Visual Logic Editor [Backlog]
5. Communication Setup [Backlog]
6. Live Simulation [Backlog]
7. Status Support [Backlog]
8. Inbuild Algoriths / Bot designs [Backlog]
9. Extension support [Backlog]


## Getting Started

Currently runs with:
- Angular v13.2.4
- Electron v17.1.0
/!\ Angular CLI & Electron Builder needs Node 14 or later to work correctly.

*Install dependencies with npm (used by Electron renderer process):*

``` bash
npm install
```

``` bash
npm install -g @angular/cli
```

*Install NodeJS dependencies with npm (used by Electron main process):*

``` bash
cd app/
npm install
```

## Project structure

| Folder | Description                                      |
|--------|--------------------------------------------------|
| app    | Electron main process folder (NodeJS)            |
| src    | Electron renderer process folder (Web / Angular) |


## Included Commands

| Command                  | Description                                                                                           |
|--------------------------|-------------------------------------------------------------------------------------------------------|
| `npm run ng:serve`       | Execute the app in the web browser (DEV mode)                                                         |
| `npm run web:build`      | Build the app that can be used directly in the web browser. Your built files are in the /dist folder. |
| `npm run electron:local` | Builds your application and start electron locally                                                    |
| `npm run electron:build` | Builds your application and creates an app consumable based on your operating system                  |


