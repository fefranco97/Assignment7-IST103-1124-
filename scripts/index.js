window.addEventListener('load', () => {
  const contactTable = document.getElementById('contact-table')
  const newContactButton = document.getElementById('add-new-contact')

  let contacts = [
    {
      name: 'John Doe',
      phone: '1234 567 890',
      email: 'john.doe@example.com',
    },
    {
      name: 'Jane Smith',
      phone: '2345 678 901',
      email: 'jane.smith@example.com',
    },
    {
      name: 'Bob Johnson',
      phone: '3456 789 012',
      email: 'bob.johnson@example.com ',
    },
  ]

  function renderTable() {
    contactTable.innerHTML = ''

    contacts.forEach((contact) => {
      const row = document.createElement('tr')

      const nameCell = document.createElement('td')
      nameCell.textContent = contact.name

      const phoneCell = document.createElement('td')
      phoneCell.textContent = contact.phone

      const emailCell = document.createElement('td')
      emailCell.textContent = contact.email

      row.appendChild(nameCell)
      row.appendChild(phoneCell)
      row.appendChild(emailCell)

      contactTable.appendChild(row)
    })
  }

  function addContact() {
    contacts.push({
      name: 'Maisie Haley',
      phone: '0913 531 3030',
      email: 'risus.Quisque@urna.ca',
    })
    renderTable()
  }

  renderTable()

  newContactButton.addEventListener('click', addContact)
})
