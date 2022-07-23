// Populates the individual card elements html using a string literal:
const generateTeamMembersHTML = teamData => {
    // Establish a variable for our string output:
    let htmlStr = "";
    // Iterate through the team members and output their unique card html as a string, adding it to the output string:
    for (i = 0; i < teamData.length; i++) {
        switch (teamData[i].role) {
            case "Manager":
                htmlStr = htmlStr.concat("", `<div class="card">\n\t\t\t<h2><i class="fa-solid fa-mug-hot"></i> <b>${teamData[i].name}</b></h2>\n\t\t\t<h3>${teamData[i].role}</h3>\n\t\t\t<div class="container">\n\t\t\t\t<p>ID: ${teamData[i].id}</p>\n\t\t\t\t<p>Email: <a href="mailto:${teamData[i].email}">${teamData[i].email}</a></p>\n\t\t\t\t<p>Office number: ${teamData[i].officeNumber}</p>\n\t\t\t</div>\n\t\t</div>`);
                break;
            case "Engineer":
                htmlStr = htmlStr.concat("", `\n\t\t<div class="card">\n\t\t\t<h2><i class="fa-solid fa-glasses"></i> <b>${teamData[i].name}</b></h2>\n\t\t\t<h3>${teamData[i].role}</h3>\n\t\t\t<div class="container">\n\t\t\t\t<p>ID: ${teamData[i].id}</p>\n\t\t\t\t<p>Email: <a href="mailto:${teamData[i].email}">${teamData[i].email}</a></p>\n\t\t\t\t<p>Github: <a href="github.com/${teamData[i].github}">${teamData[i].github}</a></p>\n\t\t\t</div>\n\t\t</div>`);
                break;
            case "Intern":
                htmlStr = htmlStr.concat("", `\n\t\t<div class="card">\n\t\t\t<h2><i class="fa-solid fa-user-graduate"></i> <b>${teamData[i].name}</b></h2>\n\t\t\t<h3>${teamData[i].role}</h3>\n\t\t\t<div class="container">\n\t\t\t\t<p>ID: ${teamData[i].id}</p>\n\t\t\t\t<p>Email: <a href="mailto:${teamData[i].email}">${teamData[i].email}</a></p>\n\t\t\t\t<p>School: ${teamData[i].school}</p>\n\t\t\t</div>\n\t\t\</div>`);
                break;
        };
    };
// Return the finished html as a string:
return htmlStr;
};

// Ouputs well-formatted html from a string literal:
const generateHTML = teamData => {
return `
<!DOCTYPE HTML>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile</title>
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <header class="banner">
        <div>
            <h1>My Team</h1>
        </div>
    </header>
    <main class="flex-container">\n\t\t${generateTeamMembersHTML(teamData)}\n\t</main>\n<script src="https://kit.fontawesome.com/133c3a7bdc.js" crossorigin="anonymous"></script>\n</body>\n</html>`;
};

module.exports = generateHTML;