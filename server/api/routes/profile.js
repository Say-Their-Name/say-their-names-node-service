/* Profile route */

const express = require('express')
const {ShortURL} = require('../models/ShortURL')
const router = express.Router()

//Create Link and send it back to the client
router.post('/people/:name', async(req,res) => {

    var parameterName = req.params.name 
    //Recieving header [meta-client]
    var clientHeader = req.headers['meta-client']
    var urlHeader = req.headers['meta-url']

    //Generate unique string
    var short =  makeid(8) //Very unlikely for collison to happen, but we can write in check here if that happens.
    
    if(clientHeader == null || urlHeader == null){
        return res.status(400).json({'error':'Header missing, check docs for more information about this error.'})
    }

    var isLinkShortenAlready = await ShortURL.findOne({original_parameter_value: parameterName})
    if (isLinkShortenAlready){ return res.status(200).json({"shorten": isLinkShortenAlready.shortURL})} else{

        var shorten = new ShortURL({
            full: urlHeader,
            shortURL: short,
            original_parameter_value: parameterName
        })
    
        await shorten.save()
     
    }

    if(clientHeader == 'STN-iOS'){

        res.set('Content-Type', 'application/json')
        res.set('STN-iOS', 'true') //Setting header STN-iOS so app can check for header and see if it's request was proccessed correctly

        return res.status(200).json({'response':short})

    }else if(clientHeader == 'STN-Android'){
        
        res.set('Content-Type', 'application/json')
        res.set('STN-Android', 'true') //Setting header STN-Android so app can check for header and see if it's request was proccessed correctly

        return res.status(200).json({'response':short})        
    }else{

        //It's request from website
        
        res.set('Content-Type', 'application/json')
        res.set('STN-Web', 'true') //Setting header STN-Wb so website can check for header and see if it's request was proccessed correctly

        return res.status(200).json({'response':short})    
    }

})


function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 } 

module.exports = router