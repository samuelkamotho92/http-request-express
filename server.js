//listening to server responses
const app = require("./app");
const port = 3000;
app.listen(port,()=>{
    console.log(`server running on port,${port}`);
});