# Angular Library Usage

ng-common is a temporary library to showcase the usage inside your project along with Assets support with it.

# How to use this library in your Angular project?

  - Goto `package.json` in your Angular project.
  - paste following line `"@ng/common": "git+ssh://git@github.com:cv-meet-shah/ng-common.git"` into `dependencies`
  - Run `npm i`
  - Goto `angular.json` find your **project** inside **projects** and go to it's **"assets"** array.
  - Paste following code:
  ```
  {
    "glob": "**/*",
    "input": "node_modules/@ng/common/assets",
    "output": "/assets/"
  }
  ```
  - and Done. Library is ready to use in your project.

# Configuring Library for development.
 - Simply install `@linnenschmidt/build-ng-packagr` into your angular project.
  ```
    npm install @linnenschmidt/build-ng-packagr --save-dev 
  ```
 - Replace the build architect of your libraries by `@linnenschmidt/build-ng-packagr:build`.
  ```
  "targets": {
        "build": {
            "builder": "@linnenschmidt/build-ng-packagr:build",
  ```
  - Add your assets glob rules to the options section like as you normally do for apps for your library
  ```
 "assets": [
        "src/assets",
        {
            "glob": "**/*.css",
            "input": "projects/ng-common/src/assets",
            "output": "src/assets"
        }
    ]
  ```
  - Final JSON of Library should be like:
  ```
  "ng-common": {
      "root": "projects/ng-common",
      "sourceRoot": "projects/ng-common/src",
      "projectType": "library",
      "prefix": "ng-common",
      "schematics": {
        "@schematics/angular:component": {
          "styleext": "scss"
        }
      },
      "architect": {
        "build": {
          "builder": "@linnenschmidt/build-ng-packagr:build",
          "options": {
            "tsConfig": "projects/ng-common/tsconfig.lib.json",
            "project": "projects/ng-common/ng-package.json",
            "assets": [
              "src/assets",
              {
                "glob": "**/*",
                "input": "projects/ng-common/src/assets",
                "output": "src/assets"
              }
            ]
          }
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "main": "projects/ng-common/src/test.ts",
            "tsConfig": "projects/ng-common/tsconfig.spec.json",
            "karmaConfig": "projects/ng-common/karma.conf.js"
          }
        },
        "lint": {
          "builder": "@angular-devkit/build-angular:tslint",
          "options": {
            "tsConfig": [
              "projects/ng-common/tsconfig.lib.json",
              "projects/ng-common/tsconfig.spec.json"
            ],
            "exclude": [
              "**/node_modules/**"
            ]
          }
        }
      }
    }
  ```
  - It's time to configure your project. As, Library cannot run independant we need to do some tweaks to project in which we'll build our Library.
  - 
### Configuring Project to build Library.
  - So, We imagine your workspace is same as library exist and moving forward with that.
  - Configure asset path in your project:
  ```
    {
        "glob": "**/*",
        "input": "./dist/ng-common/assets/",
        "output": "/assets/"
    }
  ```
  - Done, Entire assets should be like:
  ```
  "build": {
      "builder": "@angular-devkit/build-angular:browser",
      "options": {
        "outputPath": "dist/home",
        "index": "projects/home/src/index.html",
        "main": "projects/home/src/main.ts",
        "polyfills": "projects/home/src/polyfills.ts",
        "tsConfig": "projects/home/tsconfig.app.json",
        "assets": [
          "projects/home/src/favicon.ico",
          "projects/home/src/assets",
          {
            "glob": "**/*",
            "input": "./dist/ng-common/assets/",
            "output": "/assets/"
          }
        ],
        "styles": [
          "projects/home/src/styles.scss"
        ],
        "scripts": [],
        "es5BrowserSupport": true
      },
      "configurations": {
        "production": {
          "fileReplacements": [
            {
              "replace": "projects/home/src/environments/environment.ts",
              "with": "projects/home/src/environments/environment.prod.ts"
            }
          ],
          "optimization": true,
          "outputHashing": "all",
          "sourceMap": false,
          "extractCss": true,
          "namedChunks": false,
          "aot": true,
          "extractLicenses": true,
          "vendorChunk": false,
          "buildOptimizer": true,
          "budgets": [
            {
              "type": "initial",
              "maximumWarning": "2mb",
              "maximumError": "5mb"
            }
          ]
        }
      }
    }
  ```
  