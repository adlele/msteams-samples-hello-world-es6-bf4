

export default function tabs(server) {

    // Setup home page
    server.get('/', (req, res, next) => {
        res.send('hello');
    });

    // Setup the static tab
    server.get('/hello', (req, res, next) => {
        res.send('hello');
    });

    // Setup the configure tab, with first and second as content tabs
    server.get('/configure', (req, res, next) => {
        res.send('configure');
    });

    server.get('/first', (req, res, next) => {
        res.send('first');
    });

    server.get('/second', (req, res, next) => {
        res.send('second');
    });
}



