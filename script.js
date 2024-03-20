emailjs.init('PUBLIC_KEY') // Replace with your EmailJS User ID

const sendBtn = document.querySelector('.send-btn')
const result = document.querySelector('.result')

sendBtn.addEventListener('click', sendEmail)

function sendEmail() {
	// Get the form data
	const user_name = document.getElementById('user_name').value
	const user_email = document.getElementById('user_email').value
	const subject = document.getElementById('subject').value
	const message = document.getElementById('message').value

	// Send the email using EmailJS
	emailjs
		.send('SERVICE_ID', 'TEMPLATE_ID', {
			user_name: user_name,
			user_email: user_email,
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
