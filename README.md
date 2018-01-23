## Netflix Originals Calendar

<a href="https://netflix-gpxrkvbvbq.now.sh/calendar/2017/1">Access Demo Here</a>

### Basic calendar rendering
<img src="./month.png" />

### Rendering with show more on date that could not fit all releases in square
<img src="./showmore.png" />

### How to run

* switch to node 8 if not current node version
* npm install
* npm run build-dev
* npm start-dev || npm start
* navigate to http://localhost:3000

### Design Decisions

* Used local React state kept mostly at the top level of the application. This decision was made because each month is relatively static once the data is loaded
* Use local state futher down in the tree when appropriate (toggles, etc...)
* Use emotion for styling. I chose this because I find colocating styles with components to be the most intuitive component programming model developed so far. Emotion also means we don't have to give up things from css that traditional inline styling would cause.


### Trade Offs

* Using mostly top level state in React means sometimes passing state through intermediary components that don't need it. If the project was larger I would like turn at least partially to an alternative state management mechanism or add subscribe/action methods to the top level component. 
* Using emotion means run time penalties for style though we avoid network call. I would likely to look into extracting as many styles as possible pre deployment.


### If I didn't control the API:

I would follow largely the same process as before, the only difference being moving the reducing over the data to the client and using an instance method on the top level of the app to access the release dates for the calendars current month. I chose roughly the same method instead of searching for relases on a per month basis on path change since this requires just one up front iteration over the data instead of an iteration on each change of path.

The significant changes would be hoisting the api call directly to componentDidMount. The reasoning behind this being that since we are not in control and receive all the data with the call, we can fetch it just once instead of with every url transition. If this was highly dynamic data we might take a different approach but since a release calendar is likely relatively static this feels like a safe approach.

Doing this makes the `getStateFromPath` function synchronous instead of returning a promise.

We also move the history listener into the callback of our original setState since their is no reason for us to set up this listener if a user quickly enters and exits the page. Due to this we now safety check for the existence of this.unlistenHistory in componentWillUnmount. You can find a <a href="https://gist.github.com/conorhastings/4414e7daa661af9dd2c135550015dc50">gist link here</a> representing the changes I would make and a link to the <a href="https://netflix-fyuloseqig.now.sh/calendar/2017/1">demo</a> running this version of the code here.

