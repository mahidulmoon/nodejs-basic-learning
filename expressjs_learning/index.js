const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Hellow world');
});
// app.post()
// app.put()
// app.delete()


app.listen(3000,()=> console.log("listening on port 3000"))