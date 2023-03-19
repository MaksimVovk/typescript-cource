"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1.default.get(url).then(function (r) {
    var todo = r.data;
    var id = todo.id;
    var title = todo.title;
    var finished = todo.completed;
    console.log("\n    The todo with ID: ".concat(id, "\n    Has a title of: ").concat(title, "\n    Is it finished? ").concat(finished, "\n  "));
});
