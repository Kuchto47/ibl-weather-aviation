# Assignment for IBL Slovakia

Assignment made for interview purpose.

Assignment itself is described [here](https://ogcie.iblsoft.com/developer-web/)

## Development

In order to develop this project, clone to your machine

### Prerequisites

- Git installed
- Node.js (tested on LTS v20) installed

### Installing dependencies after cloning

```
npm i
```
### Running the app locally

```
npm run dev
```

You can play around with the app on [http://localhost:5173/](http://localhost:5173/)

## Possible Future Improvements
There are multiple possible improvements for the codebase, which i consider way above the assignment's scope.

Just to name a few:
- If `Context` would be used for data distribution, definitely add `reducer` approach and abandon `updateContext` function propagated in this `BriefingContext`,
- In case the app had bigger scope, introduction of `redux` or similar state manager would be beneficial,
- Usage of eg. `zod` for client's side validation of input, which would make current validation much more reliable and accurate (now I used a shortcut of which im not very proud),
- Coming from the previous point, figure 100% precisely the intended way to use the API so that client's side validation of input can be as precise as possible, 
- Replacement of `Alert` 'in-place' solution with generic functionality to add legit notifications,
- While the overall UI is somewhat responsive and more-or-less user friendly, definitely discuss UX and fix possible UI bugs,
- Add `Error Boundaries` so that rendering (or other uncaught) errors don't end up in a broken app, but rather some meaningful error message,
- Dockerize solution,
- Last, but not least, add unit tests.