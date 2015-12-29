/**
 * DeviceController
 *
 * @description :: Server-side logic for managing devices
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	cbjTag: function(req, res){
        var id = req.param("id");
        var cbjTag = req.param("cbjTag");
        device.update({id: id}, {cbjTag: cbjTag}).exec(function(err, doc){
            if (err) {
                res.end();
                return;
            }
            res.json(doc);
            res.end();
            });
    },
    search: function(req, res){
        var locationType = req.param('locationType');
        var state = req.param('state');
        var city = req.param('city');
        var region = req.param('region');
        var street = req.param('street');
        var id = req.param('id');
        var option = {};

        if(locationType){
            option.locationType = locationType;
        }
        if (state) {
            option.state = state;
        }
        if (city) {
            option.city = city;
        }
        if(region){
            option.region = region;
        }
        if(street){
            option.street = street;
        }
        if(id){
            option.id = id;
        }
        device.find(option).exec(function(err, results){
            if(err){
                res.status(500);
                res.end();
                return;
            }
            res.json(results);
            res.end();
        });
    },
    findOne: function(req, res){
        var id = req.param("id");
        device.findOne({id: id}).exec(function(err, result){
            res.json(result);
            res.end();
        });
    },
    getId: function(req, res){
        var uuid = req.param('uuid');
        var major = req.param('major');
        var minor = req.param('minor');
        device.findOne({uuid: uuid, major: major, minor: minor}).exec(function(err, result){
            if(!result){
                res.status(400);
                res.end();
                return;
            }
            var access = result.access;
            access = (!access) ? 0 : access;
            access = parseInt(access);
            access = (access==NaN) ? 0 : access;
            access++;
            device.update({id: result.id},{access: access}).exec(function(err, dev){
                if(err){
                    res.status(500);
                    res.end();
                    return;
                }
                res.write(result.id);
                res.end();
                });
        });
    }, 
    updateAccess: function(req, res){
        device.update({}, {access: 0}).exec(function(err, result){
            res.end();
        })
    }
    
};

