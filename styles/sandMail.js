function sendEmail(params) {
	var tempParams = {
		from_name: document.getElementById('fromName').value,
		to_name: document.getElementById('toName').value,
		message: document.getElementById('msg').value,
	};

	emailjs.send('gmail', 'template_0idexkq', tempParams)
	.then((res) => {
		console.log('success', res.status);
	});
}