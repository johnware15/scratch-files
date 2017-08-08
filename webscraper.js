const express = require('express')

//'fs' === File System
const fs = require('fs')

//'request' === makes 'http' calls. Follows redirects by default.
const request = require('request')

//'cheerio' === implements core jQuery for server
const cheerio = require('cheerio')
const app = express()
const path = require('path')

//'join()' === joins array elements into string
//'__dirname' === directory of current module
//'use()' === mounts middleware function
app.use(express.static(path.join(__dirname + 'views')))

//'set()' === assigns setting to value
app.set('view engine', 'ejs')

let allMovies = []
let movie

const URL = 'http://www.imdb.com/movies-coming-soon/?ref_=nv_mv_cs_4'

app.get('/scrape', function(req, res){

  request(URL, function(error, response, html){
    if(!error) {
      const $ = cheerio.load(html)
              //'each()' === specifies function to run for each matched element
      $('tr').each(function(index, element) {
                            //'find()' === returns descendat elements of selected element
        let h4 = $(element).find('h4[itemprop=name] > a')
                            //'text()' === sets/returns text content of selected elements
                                    //'trim()' === removes whitespace from both sides of string
        const h4Text = $(h4).text().trim()

        const title = h4Text.substring(0, h4Text.indexOf('(') - 1)
        const releaseDate = h4Text.substring(h4Text.indexOf('(') + 1, h4Text.indexOf('('))

        let a = $(element).find('div.txt-block span[itemprop=director] a')
        const aText = $(a).text()
        const director = aText

        let div = $(element).find('div.outline')

        const divText = $(div).text().trim()
        const synopsis = divText

        let img = $(element).find('div.image img')
                              //'attr()' === sets/actions atributes and values of selected elements
        const imgPic = $(img).attr('src')
        const moviePoster = imgPic

        movie = {title, releaseDate, director, synopsis, moviePoster}

        if(director.length > 0) {
          allMovies.push(movie)
          return allMovies
        }
      })
                                  //'JSON.stringify()' === converts data/objects into string
      fs.writeFile('output.json', JSON.stringify(allMovies, null, 4))
    }
    res.render('index', {allMovies})
  })
})
app.listen('8081')
exports = module.exports = app
