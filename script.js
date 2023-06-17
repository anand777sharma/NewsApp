function fetchNews() {
    const apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=e9e0730db27a41f88756ae4251c56870';
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const articles = data.articles;
        const newsContainer = document.getElementById('news-container');
  
        articles.forEach(article => {
          const { title, description, url, urlToImage } = article;
  
          const newsItem = document.createElement('div');
          newsItem.classList.add('news-item');
          newsItem.innerHTML = `
            <h3>${title}</h3>
            <img src="${urlToImage}" alt="${title}">
            <p>${description}</p>
            <a href="${url}" target="_blank">Read more</a>
          `;
  
          newsContainer.appendChild(newsItem);
        });
      })
      .catch(error => {
        console.log('An error occurred while fetching news:', error);
      });
  }
  