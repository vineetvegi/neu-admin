// const eventsBody = document.querySelector('#events-table > tbody')
// console.log(eventsBody)
// var table = document.getElementById("data")
function getEventData () {
  fetch('http://localhost:5000/').then(res => {
    res.json().then(json => {
      console.log(json.rows)
      var rows = json.rows
      if (rows.length > 0) {
        let temp = ''

        rows.forEach(u => {
          temp += '<tr>'
          temp += '<td>' + u.event_id + '</td>'
          temp += '<td>' + u.event_name + '</td>'
          temp += '<td>' + u.event_date + '</td>'
          temp += '<td>' + u.event_time + '</td>'
          temp += '<td>' + u.event_url + '</td>'
          temp +=
            '<td>' +
            '<button onclick="goToEdit(' +
            u.event_id +
            ')">' +
            'Edit' +
            '</button></td>'
          temp +=
            '<td>' +
            '<button onclick="goToDelete(' +
            u.event_id +
            ')">' +
            'Delete' +
            '</button></td></tr>'
        })
        document.getElementById('data').innerHTML = temp
      }
    })
  })
}

function goToDelete (id) {}

function addEvent () {
  window.location.href = 'http://localhost:5500/add.html'
}

var myForm = document.getElementById('myForm')
if (myForm) {
  myForm.addEventListener('submit', function (e) {
    e.preventDefault()
    let Id = document.getElementById('inp_id').value
    let Name = document.getElementById('inp_name').value
    let Date = document.getElementById('inp_date').value
    let Time = document.getElementById('inp_time').value
    let Url = document.getElementById('inp_url').value

    fetch('http://localhost:5000/add', {
      method: 'POST',
      mode: 'cors',
      redirect: 'follow',
      headers: new Headers({
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json'
      }),
      body: JSON.stringify({
        event_date: Date,
        event_id: Id,
        event_name: Name,
        event_time: Time,
        event_url: Url
      })
    })
      .then(function (response) {
        console.log(response)
        return response.json()
      })
      .then(function (data) {
        console.log(data)
      })
  })
}

// const sendData = () => {
//   fetch('http://127.0.0.1:5500/add')
//     .then(response => {
//       return response.json()
//     })
//     .then(responseData => {
//       console.log(responseData)
//     })
// }

function editData () {
  var id = window.location.hash.substring(1)
  console.log(id)
  return id
}

function goToEdit (id) {
  window.location.href = 'http://localhost:5500/edit.html#' + id
}

var form = document.getElementById('Form')

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault()
    let Id = editData()
    let Name = document.getElementById('inp_name').value
    let Date = document.getElementById('inp_date').value
    let Time = document.getElementById('inp_time').value
    let Url = document.getElementById('inp_url').value

    fetch('http://localhost:5000/update', {
      method: 'POST',
      mode: 'cors',
      redirect: 'follow',
      headers: new Headers({
        'Content-Type': 'application/json; charset=utf-8'
      }),
      body: JSON.stringify({
        event_date: Date,
        event_id: Id,
        event_name: Name,
        event_time: Time,
        event_url: Url
      })
    })
      .then(function (response) {
        console.log(response)
        return response.json()
      })
      .then(function (data) {
        console.log(data)
      })
  })
}
// fetch('http://127.0.0.1:5000/').then(res => {
//   res.json().then(rows => {
//     console.log(JSON.stringify(rows))
//     if (rows.length > 0) {
//       let temp = []
//       rows.forEach(row => {
//         temp = `<tr>
//           		<td>${rows[i].event_id}</td>
//         		  <td>${rows[i].event_name}</td>
//         		  <td>${rows[i].event_date}</td>
//         		  <td>${rows[i].event_time}</td>
//         		  <td>${rows[i].event_url}</td>
//           </tr>`
//         console.log(row[0])
//       })
//       document.getElementById(
//         'data'
//       ).innerHTML = `<h1 class="app-title">Rows (${rows.length} results)</h1>`
//       //   document.getElementById('data').innerHTML += temp
//     }
//     // while (eventsBody.firstChild) {
//     //   //Clears out the existing data
//     //   eventsBody.removeChild(eventsBody.firstChild)
//     // }
//   })
// })

// Script for Administrator login

let objLogin = [
  {
    username: 'venkat',
    password: 'North@123'
  },
  {
    username: 'mingyue',
    password: 'East@456'
  },
  {
    username: 'yuedi',
    password: 'Uni@789'
  },
  {
    username: 'Admin',
    password: 'sponSor@159'
  }
]

function adminLogin () {
  let username = document.getElementById('uName').value
  let password = document.getElementById('pAss').value

  if (username == '' || password == '') {
    alert('No blank values are allowed')
    return false
  } else {
    true
  }

  // adminForm.addEventListener('submit', function (e) {
  //   e.preventDefault()

  //   for (i = 0; i < objLogin.length; i++) {
  //     if (
  //       (username = objLogin[i].userName && password = objLogin[i].passWord)
  //     ) {
  //       console.log(username + 'is logged in')
  //       window.location.href = 'index.html'
  //     }
  //   }
  // })
}
