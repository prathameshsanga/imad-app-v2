var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles={
    
    'article-one' :{
      title: 'Article One|sanga 420',
      heading:'Article One',
      date:'Feb 25,2017',
      content:`<p>
                        This is article one.This is article one.This is article one.This is article one.This is article one.This is article one
                    </p>
                    <p>
                        This is article one.This is article one.This is article one.This is article one.This is article one.This is article one
                    </p>
                    <p>
                        This is article one.This is article one.This is article one.This is article one.This is article one.This is article one
                    </p> `,
    },
    'article-two' :{
      title: 'Article Two|sanga 420',
      heading:'Article Two',
      date:'Feb 15,2017',
      content:`<p>
                        This is article Two.
                </p>`,
    },
    'article-three' :{
      title: 'Article Three|sanga 420',
      heading:'Article Three',
      date:'Feb 5,2017',
      content:`<p>
                        This is article Three.
                </p>`,
    },
};


function createTemplate(data){
    var date=data.date;
    var title=data.title;
    var heading=data.heading;
    var content=data.content;
    
    var htmlTemplate=`
        <html>
    <head>
        <title>
           ${title}
        </title>
        <meta name="viewport" content="width=device=width, intial-scale=1">
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h3>
               ${heading}
            </h3>
            <p>
                ${date}
            </p>
            <div>
                ${content}
            </div>
        </div>
    </body>
</html>
    `;
    return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
