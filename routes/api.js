__path = process.cwd()

var api = require('@YUU-BOT/API');
var express = require('express');

var creatorList = ['YUU'];
var creator = creatorList[Math.floor(Math.random() * creatorList.length)];

var fetch = require('node-fetch');
var router = express.Router();

_ = require('lodash')
__path = process.cwd();

router.get('/fb', async (req, res, reject) => {
    var url = req.query.url

    if (!url) return res.sendFile(__path + '/docs/406.html')
    api.fbdown(url)
        .then(data => {
            var result = data;
            res.json({
                message: `Ok`,
                status: `Success`,
                Creator: `${creator}`,
                result
            })
        })
        .catch(e => {
            res.sendFile(__path + '/docs/503.html')
        })
})

router.get('/twitter', async (req, res, reject) => {
    var url = req.query.url

    if (!url) return res.sendFile(__path + '/docs/406.html')
    api.twitter(url)
        .then(data => {
            var result = data;
            res.json({
                message: `Ok`,
                status: `Success`,
                Creator: `${creator}`,
                result
            })
        })
        .catch(e => {
            res.sendFile(__path + '/docs/503.html')
        })
})

router.get('/igstalk', async (req, res, reject) => {
    var username = req.query.username

    if (!username) return res.sendFile(__path + '/docs/406.html')
    api.igstalk(username)
        .then(data => {
            var result = data;
            res.json({
                message: `Ok`,
                status: `Success`,
                Creator: `${creator}`,
                result
            })
        })
        .catch(e => {
            res.sendFile(__path + '/docs/503.html')
        })
})

router.get('/igstory', async (req, res, reject) => {
    var username = req.query.username

    if (!username) return res.sendFile(__path + '/docs/406.html')
    api.igstory(username)
        .then(data => {
            var result = data;
            res.json({
                message: `Ok`,
                status: `Success`,
                Creator: `${creator}`,
                result
            })
        })
        .catch(e => {
            res.sendFile(__path + '/docs/503.html')
        })
})

router.get('/igdownloader', async (req, res, reject) => {
    var url = req.query.url

    if (!url) return res.sendFile(__path + '/docs/406.html')
    api.igdl(url)
        .then(data => {
            var result = data;
            res.json({
                message: `Ok`,
                status: `Success`,
                Creator: `${creator}`,
                result
            })
        })
        .catch(e => {
            res.sendFile(__path + '/docs/503.html')
        })
})

router.get('/ytmp3', async (req, res, reject) => {
    var url = req.query.url;

    if (!url) return res.sendFile(__path + '/docs/406.html')
    api.ytmp3(url)
        .then(data => {
            var result = data;
            res.json({
                message: `Ok`,
                status: `Success`,
                Creator: `${creator}`,
                result
            })
        })
        .catch(e => {
            res.sendFile(__path + '/docs/503.html')
        })
})

router.get('/ytmp4', async (req, res, reject) => {
    var url = req.query.url

    if (!url) return res.sendFile(__path + '/docs/406.html')
    api.ytmp4(url)
        .then(data => {
            var result = data;
            res.json({
                message: `Ok`,
                status: `Success`,
                Creator: `${creator}`,
                result
            })
        })
        .catch(e => {
            res.sendFile(__path + '/docs/503.html')
        })
})

router.get('/tiktokdownloader', async (req, res, reject) => {
    var url = req.query.url

    if (!url) return res.sendFile(__path + '/docs/406.html')
    api.ttdownloader(url)
        .then(data => {
            var result = data;
            res.json({
                message: `Ok`,
                status: `Success`,
                Creator: `${creator}`,
                result
            })
        })
        .catch(e => {
            res.sendFile(__path + '/docs/503.html')
        })
})

router.get('/tebakgambar', async (req, res, reject) => {

    api.tebakgambar()
        .then(data => {
            var result = data;
            res.json({
                message: `Ok`,
                status: `Success`,
                Creator: `${creator}`,
                result
            })
        })
        .catch(e => {
            res.sendFile(__path + '/docs/503.html')
        })
})

router.get('/caklontong', async (req, res, next) => {

    fetch(encodeURI(`https://raw.githubusercontent.com/Yuu-BOT/database/main/game/caklontong.json`))
        .then(response => response.json())
        .then(data => {
            var lontong = data;
            var result = lontong[Math.floor(Math.random() * lontong.length)];
            res.json({
                message: `Ok`,
                status: `Success`,
                Creator: `${creator}`,
                result
            })
        })
        .catch(e => {
            res.sendFile(__path + '/docs/503.html')
        })
})

router.get('/samehadaku_genre', async (req, res, next) => {
    var q = req.query.q

    if (!q) return res.sendFile(__path + '/docs/406.html')
    fetch(encodeURI(`https://samehadaku-rest-api.herokuapp.com/genre/${q}`))
        .then(response => response.json())
        .then(data => {
            var data = data;
            res.json({
                message: `Ok`,
                status: `Success`,
                Creator: `${creator}`,
                data
            })
        })
        .catch(e => {
            res.sendFile(__path + '/docs/503.html')
        })
})

router.get('/samehadaku_page', async (req, res, next) => {
    var page = req.query.page

    if (!page) return res.sendFile(__path + '/docs/406.html')
    if (isNaN(page)) return res.sendFile(__path + '/docs/406.html')
    fetch(encodeURI(`https://samehadaku-rest-api.herokuapp.com/page/${page}`))
        .then(response => response.json())
        .then(data => {
            var data = data;
            res.json({
                message: `Ok`,
                status: `Success`,
                Creator: `${creator}`,
                data
            })
        })
        .catch(e => {
            res.sendFile(__path + '/docs/503.html')
        })
})

router.get('/samehadaku_anime', async (req, res, next) => {
    var q = req.query.q

    if (!q) return res.sendFile(__path + '/docs/406.html')
    fetch(encodeURI(`https://samehadaku-rest-api.herokuapp.com/anime/${q}`))
        .then(response => response.json())
        .then(data => {
            var data = data;
            res.json({
                message: `Ok`,
                status: `Success`,
                Creator: `${creator}`,
                data
            })
        })
        .catch(e => {
            res.sendFile(__path + '/docs/503.html')
        })
})

router.get('/samehadaku_season', async (req, res, next) => {

    fetch(encodeURI(`https://samehadaku-rest-api.herokuapp.com/season`))
        .then(response => response.json())
        .then(data => {
            var data = data;
            res.json({
                message: `Ok`,
                status: `Success`,
                Creator: `${creator}`,
                data
            })
        })
        .catch(e => {
            res.sendFile(__path + '/docs/503.html')
        })
})

module.exports = router