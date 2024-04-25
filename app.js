const express = require('express');
const app = express();


function filterUsers(specialty) {
  const filterUsers = usersData.filter(user => user.specialty === specialty);

  const pageTitle = `<h1>${specialty} Users</h1>`;

  const totalUsers = `<p>Total Users: ${filterUsers.length}</p>`;

  let userDetails = '<ul>';
  filterUsers.forEach(user => {
    userDetails += `<li>Nº id: ${user.id}, nombre: ${user.name}, edad: ${user.age}</li>`;
  });
  userDetails += '</ul>';

  const html = pageTitle + totalUsers + userDetails;
  return html;
}

app.get('/', (req, res) => {
  res.send(`<h1>Home Page</h1><ul><li><a href="/marketing">Marketing</a></li><li><a href="/developers">Developers</a></li><li><a href="/qas">QAs</a></li><li><a href="/ventas">Ventas</a></li></ul>`);
});


app.get('/marketing', (req, res) => {
  const marketingPage = filterUsers('marketing') + '<p><a href="/">Home Page</a></p>';
  res.send(marketingPage);
});

app.get('/developers', (req, res) => {
  const developersPage = filterUsers('developers') + '<p><a href="/">Home Page</a></p>';
  res.send(developersPage);
});

app.get('/qas', (req, res) => {
  const qasPage = filterUsers('QAs') + '<p><a href="/">Home Page</a></p>';
  res.send(qasPage);
});

app.get('/ventas', (req, res) => {
  const ventasPage = filterUsers('ventas') + '<p><a href="/">Home Page</a></p>';
  res.send(ventasPage);
});

app.use((req, res) => {
  res.status(404).send("Sorry can't find that!");
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



const usersData = [
    { id: 1, name: 'Alice', age: 28, specialty: 'marketing' },
    { id: 2, name: 'Bob', age: 35, specialty: 'developers' },
    { id: 3, name: 'Charlie', age: 30, specialty: 'developers' },
    { id: 4, name: 'David', age: 25, specialty: 'QAs' },
    { id: 5, name: 'Emma', age: 32, specialty: 'ventas' },
    { id: 6, name: 'Frank', age: 28, specialty: 'marketing' },
    { id: 7, name: 'Grace', age: 34, specialty: 'developers' },
    { id: 8, name: 'Hank', age: 27, specialty: 'QAs' },
    { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
    { id: 10, name: 'Jack', age: 29, specialty: 'marketing' },
    { id: 11, name: 'Karen', age: 36, specialty: 'developers' },
    { id: 12, name: 'Leo', age: 26, specialty: 'QAs' },
    { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
    { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },
    { id: 15, name: 'Olivia', age: 37, specialty: 'developers' },
    { id: 16, name: 'Paul', age: 24, specialty: 'QAs' },
    { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
    { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
    { id: 19, name: 'Sara', age: 35, specialty: 'developers' },
    { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
    { id: 21, name: 'Uma', age: 30, specialty: 'ventas' },
    { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
    { id: 23, name: 'Wendy', age: 34, specialty: 'developers' },
    { id: 24, name: 'Xander', age: 31, specialty: 'QAs' },
    { id: 25, name: 'Yara', age: 33, specialty: 'ventas' },
    { id: 26, name: 'Zack', age: 28, specialty: 'marketing' },
    { id: 27, name: 'Ava', age: 36, specialty: 'developers' },
    { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
    { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },
    { id: 30, name: 'Derek', age: 30, specialty: 'marketing' },
  ];
