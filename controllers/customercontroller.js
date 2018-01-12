var mongoose = require('mongoose');
var customer = mongoose.model('customer');
module.exports = {

    get_details: function (req, res) {
        console.log("In get details");
        console.log(req.params.businessCountry);
        var j = 0;
        var h = 1;

        if (req.query.pagging == 'true') {

            customer.find({ 'businessCountry': req.params.businessCountry }, function (error, result) {
                if (error) {
                    res.json(error);
                }
                else if (!result) {
                    return res.status(400).json([]);
                }
                else {
                    
                    return res.status(200).render('customer', {data:result});
                    //return res.status(200).json(result);
                }

            }).skip(j).limit(h);
        }
        else {
            
            j = parseInt(req.query.skip);
            h = parseInt(req.query.limit);
            
            
            if (j >= 0) {
                if (h > 0) {

                    customer.find({ 'businessCountry': req.params.businessCountry }, function (error, result) {
                        if (error) {
                            res.json(error);
                        }
                        else if (!result) {
                            return res.status(400).json([]);
                        }
                        else {
                             return res.status(200).render('customer', {data:result});
                               //return res.status(200).json(result);
                        }

                    }).skip(j).limit(h);
                }
                else
                    res.json({ Message: "Enter a Valid +ve limit." });
            }
            else
                res.json({ Message: "Enter a offset greater than or equal to Zero." });
        }
    },
    get_harris_details: function (req, res) { 
            return res.status(200).render('gosite', {data:result});
        }
}