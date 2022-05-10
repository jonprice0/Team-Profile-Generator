const generateTeam = teamMembersArr => {
    return `
    ${teamMembersArr
        .filter(member => member.role === "Engineer")
        .map(({ name, id, email, role, github }) => {
                return `
                <div class="card">
                    <h2><b>${name}</b></h2>
                    <h3>${role}</h3>
                        <div class="container">
                            <p>ID: ${id}</p>
                            <p>Email: <a href="mailto:${email}">${email}</a></p>
                            <p>Github: <a href="github.com/${github}">${github}</a></p>
                        </div>
                </div>
            `;
        })
        .join('')}

    ${teamMembersArr
        .filter(member => member.role === "Intern")
        .map(({ name, id, email, role, school }) => {
                return `
                <div class="card">
                    <h2><b>${name}</b></h2>
                    <h3>${role}</h3>
                        <div class="container">
                            <p>ID: ${id}</p>
                            <p>Email: <a href="mailto:${email}">${email}</a></p>
                            <p>School: ${school}</p>
                        </div>
                </div>
            `;
        })
        .join('')}
    `;
};

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
            </div>
            ${generateTeam(members)}
        </main>    
    </body>
    </html>
    `;
};

module.exports = generateHTML;