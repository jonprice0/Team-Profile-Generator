// Populates the individual card elements html using a string literal:
const generateTeam = teamMembersArr => {
    return `${teamMembersArr
            .filter(member => member.role === "Engineer")
            .map(({ name, id, email, role, github }) => {
                return `<div class="card">\n\t\t\t<h2><b>${name}</b></h2>\n\t\t\t<h3>${role}</h3>\n\t\t\t<div class="container">\n\t\t\t\t<p>ID: ${id}</p>\n\t\t\t\t<p>Email: <a href="mailto:${email}">${email}</a></p>\n\t\t\t\t<p>Github: <a href="github.com/${github}">${github}</a></p>\n\t\t\t</div>\n\t\t</div>`;}).join('\n\t\t')}${teamMembersArr
            .filter(member => member.role === "Intern")
            .map(({ name, id, email, role, school }) => {
                return `\n\t\t<div class="card">\n\t\t\t<h2><b>${name}</b></h2>\n\t\t\t<h3>${role}</h3>\n\t\t\t<div class="container">\n\t\t\t\t<p>ID: ${id}</p>\n\t\t\t\t<p>Email: <a href="mailto:${email}">${email}</a></p>\n\t\t\t\t<p>School: ${school}</p>\n\t\t\t</div>\n\t\t\</div>`;}).join('')}`;
};

// Generates well-formatted html from a string literal:
const generateHTML = teamData => {
const { name, id, email, role, officeNumber, members } = teamData;
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
    <main class="flex-container">
        <div class="card">
            <h2><b>${name}</b></h2>
            <h3>${role}</h3>
            <div class="container">
                <p>ID: ${id}</p>
                <p>Email: <a href="mailto:${email}">${email}</a></p>
                <p>Office number: ${officeNumber}</p>
            </div>
        </div>\n\t\t${generateTeam(members)}\n\t</main>\n</body>\n</html>`;
};

module.exports = generateHTML;