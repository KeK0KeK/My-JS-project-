const http = require('http');

function showSum(){
   var a = 1;
   var b = 2;
   alert("Сумма чисел a и b равна --> ");
}

http.createServer((req, res) => {
   res.writeHead(200, { 'Content-Type': 'text/html' });
   res.end(`
   <!doctype>
    <html lang="ru">
        <head>
            <meta charset="utf-8">
            <title>Первая практика JS</title>
            
            <script>
                function addition() {
                    var a = parseInt(document.getElementById("a").value);
                    var b = parseInt(document.getElementById("b").value);
                    
                    if (isNaN(a) == true) a = 0;
                    if (isNaN(a) == true) a = 0;
                    
                    var c = a + b;
                    document.getElementById("result").innerHTML = a + " + " + b + " = " + c;
                }
            </script>
        </head>
        <body>
            <form>
                <input id="a" type="text" value="1"/><br />
                <input id="b" type="text" value="g"/><br />
                <input type="button" value="Сложить два числа" onclick="addition();" /><br />
            </form>
            <div id="result"></div>
        </body>
    </html>`);
}).listen(3100, () => console.log('Сервер работает'));


