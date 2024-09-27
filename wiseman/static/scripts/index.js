$(document).ready(() => {
	$('.download').on('click', function() {
		fetch('/cv_download')
		.then(response => {
			if (!response.ok) {
				console.error('Error while retireving CV');
			} else {
				response.blob().then(blob => {
					const url = URL.createObjectURL(blob);
					const a = document.createElement('a');
					a.href = url;
					a.download = 'Wiseman.pdf';
					a.style.display = 'none';
					document.body.appendChild(a);
					a.click();
					document.body.removeChild(a);
					URL.revokeObjectURL(url);   

				});
			}
		})
		.catch(error => {
			console.error('Error while processing CV')
		});
	});
});
