/* AASA route */

const express = require('express')
const fs = require('fs')
const path = require('path')
const router = express.Router()

router.get('/apple-app-site-association', function (req, res) {


    var aasa = fs.readFileSync(path.resolve(__dirname,'../public/apple-app-site-association.json'))
        res.set('Content-Type', 'application/pkcs7-mime')
        res.status(200).send(aasa)
})

router.get('/.well-known/apple-app-site-association', function (req, res) {
   
    var aasa = fs.readFileSync(path.resolve(__dirname,'../public/apple-app-site-association.json'))
        res.set('Content-Type', 'application/pkcs7-mime')
        res.status(200).send(aasa)
})
module.exports = router