emailjs.init('USER_ID') // Replace with your EmailJS User ID

const sendBtn = document.querySelector('.send-btn')
const result = document.querySelector('.result')

sendBtn.addEventListener('click', sendEmail)

function sendEmail() {
	// Get the form data
	const from_name = document.getElementById('name').value
	const from_email = document.getElementById('email').value
	const subject = document.getElementById('subject').value
	const message = document.getElementById('message').value

	// Send the email using EmailJS
	emailjs
		.send('SERVICE_ID', 'TEMPLATE_ID', {
			from_name: from_name,
			from_email: from_email,
			subject: subject,
			message: message,
		})
		.then(
			function () {
				result.innerHTML = 'Email sent successfully!'
				result.style.opacity = 1
				setTimeout(() => {
					result.style.opacity = 0
				}, 3000)
			},
			function (error) {
				result.innerHTML = 'Email sending failed!'
				result.style.opacity = 1
				setTimeout(() => {
					result.style.opacity = 0
				}, 3000)
			}
		)
}
