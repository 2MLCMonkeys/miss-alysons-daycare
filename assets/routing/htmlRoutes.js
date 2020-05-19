// DEPENDENCIES //
var path = require('path');

//  ROUTES //
module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/home", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/about", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/about.html"));
    });

    app.get("/contact", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/contact.html"));
    });

    app.get("/admin", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/admin.html"));
    });

    app.get("/blog", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/blog.html"));
    });
 
    // PDF FILES

    app.get("/PermissionToPhotograph", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/pdf/Permissiontophotograph.pdf"));
    });

    app.get("/ChecklistForChildsFirstDay", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/pdf/Checklist For Childs First Day.pdf"));
    });

    app.get("/EmergencyPermission", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/pdf/Emergency Permission.pdf"));
    });

    app.get("/FamilyHandbook", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/pdf/Family Handbook.pdf"));
    });

    app.get("/Remind", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/pdf/Remind AP form.pdf"));
    });

    app.get("/HBCNewChildForm", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/pdf/HBC NEW child form.pdf"));
    });

    // IF NOT MATHCING ROUTE DEFAULT TO INDEX //
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};
