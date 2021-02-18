export default function (app) {
  app.get('/', function (req, res) {
    res.render('index', { title: 'index' })
  })
  app.get('/topic', function (req, res) {
    res.render('topic', { title: 'topic' })
  })
  app.get('/favorites', function (req, res) {
    res.render('favorites', { title: 'favorites' })
  })
}
