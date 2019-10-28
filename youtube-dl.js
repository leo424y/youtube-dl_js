var express = require('express');
var app = express();
const VIDEO = process.env.VIDEO;
app.get("/", function (req, res) {
  var yid = req.query.yurl
  if (typeof yid !== undefined && yid.length > 10) {
    yd(yid)
    res.send(yid + ` is now downloading... Check your download <a href="${VIDEO}">HERE.</a>`);
  } else {
    res.send(`Check your download <a href="${VIDEO}">HERE.</a>`);
  }
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


function yd(yurl) {
  const {
    exec
  } = require('child_process');
  exec('youtube-dl ' + yurl, {
    cwd: '/Volumes/GoogleDrive/My Drive/_Movies/dtl'
  }, (err, stdout, stderr) => {
    if (err) {
      // node couldn't execute the command
      return;
    }

    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });
}