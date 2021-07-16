// //モジュールを読み込む
// var http = require('http');
// var express    = require('express');
// var app        = express();
// var mysql = require('mysql');

// //mysqlConnection.jsで作成したconnectionを呼び出す
// var connection = require('./mysqlConnection');

// //サーバー作成
// var server = http.createServer(function(req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
//   res.write('Hello Ryu1!');
//   res.end();
// });

// //クエリ作成
// app.get('/', function (req, res) {
//   console.log("dbの内容を取り出す");
//   //クエリ文
//   connection.query('select name from testTable where id = 0', function (error, results, fields) {
//     if (error) throw error; //errorの場合
//     res.send(results);//画面にresponseとして表示
//     console.log("results: " + results[0].name); //jsonで受け取った場合の値の取得方法
//   });
// });

// //サーバー起動。listen()メソッドを実行して3000番ポートで待ち受けする。
// app.listen(3000, function () {
//   console.log('listening on port 3000');
// });



function onButtonClick() {
// const mongodb = require('mongodb')
ver mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient
const assert = require('assert')
MongoClient.connect('mongodb://localhost:27017/test', (err, db) => {
//MongoClient.connect('mongodb://localhost:27017/admin', (err, db) => {
    assert.equal(null, err)
    console.log("Connected successfully to server")
    db.close()
})


const insertDocuments = (db, callback) => {
    const documents = [
        { a: 1 },
        { a: 2 },
        { a: 3 }
    ]
    // myDBデータベースのdocumentsコレクションに対して
    // ドキュメントを3つ追加します
    db.collection('documents').insertMany(documents, (err, result) => {
        // insert結果の確認
        assert.equal(err, null)
        assert.equal(3, result.result.n)
        assert.equal(3, result.ops.length)

        console.log("Inserted 3 documents into the collection")
        callback(result)
    })
}
}