function createArticle() {
	const Title = document.getElementById('createTitle');
	const Content = document.getElementById('createContent');

	const article = document.createElement('article');
	const h3 = document.createElement('h3');
	const p = document.createElement('p');

	if(Title.value !== '' && Content.value !== '') {
		h3.innerHTML = Title.value;
		p.innerHTML = Content.value;

		article.appendChild(h3);
		article.appendChild(p);
		document.getElementById('articles').appendChild(article);
		document.getElementById('articles').appendChild(article);
	}

	document.getElementById('createTitle').value = ' ';
	document.getElementById('createContent').value = ''

	//TODO...
}