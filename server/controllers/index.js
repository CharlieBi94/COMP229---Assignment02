let express = require('express');
let router = express.router;

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title: 'Home'});
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('index', { title: 'About Me' });
}

module.exports.displayProjectsPage = (req, res, next) => {
    res.render('index', { title: 'Projects' });
}

module.exports.displayServicesPage = (req, res, next) => {
    res.render('index', { title: 'Services' });
}

module.exports.displayContactMePage = (req, res, next) => {
    res.render('form', { title: 'Contact Me' });
}