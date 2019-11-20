//jshint esversion:6

exports.home = (req, res) => {
    res.render(`site/home`);
};

exports.about = (req, res) => {
    res.render(`site/about`);
};

exports.contact = (req, res) => {
    res.render(`site/contact`);
};