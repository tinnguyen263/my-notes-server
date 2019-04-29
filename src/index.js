
const createServer = (onCreateServer, initialDatabase) => {
    const express = require('express');
    const path = require('path');
    const cookieParser = require('cookie-parser');
    // const logger = require('morgan');
    
    const app = express();
    
    // app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));
    
    const Database = require('./database')
    const database = new Database(initialDatabase);
    
    const noteRouter = require('./routes/note').withDatabase(database);
    app.use('/note', noteRouter);


    onCreateServer && onCreateServer();

    return app;
}

module.exports = {createServer}