$(document).ready(function () {
    // Modal box
    var modal = $(".modal");
    var btn = $(".btn");
    var span = $(".close");
  
    btn.click(function () {
      modal.show();
    });
  
    span.click(function () {
      modal.hide();
    });
    
    $(window).on("click", function (e) {
      if ($(e.target).is(".modal")) {
        modal.hide();
      }
    });


    // Top headline
    fetch(
          "https://gnews.io/api/v4/top-headlines?&token=59b3d93a043274e44e03832c5829fbaf"
        )
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            $.each(data.articles, function(idx, article) {
                console.log(article);
                html_tmp = `
                <div>
                  <img src='${article.image}'>
                  <a href='${article.url}' target="_blank"><b>'${article.title}'</b></a>
                  <h6>'${article.publishedAt}'</h6>
                  <p>'${article.description}'</p>
                </div>`;
                $('#content').append(html_tmp);
            })
        });

    // Search
    $("#search").click(function(){
      let keyword = $("#keyword").val();
      let url = 'https://gnews.io/api/v4/search?q=' + keyword +'&token=59b3d93a043274e44e03832c5829fbaf';
      fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        $.each(data.articles, function(idx, article) {
          html_tmp += `
          <div>
          <img src='${data.articles.image}'>
          <a href ='${article.url}'>
            <b>'${article.title}'</b>
          </a>
          <h6>'${article.publishedAt}'</h6>
          <p>'${article.description}'</p>
          </div>
          `;
          $('#content').html(html_tmp);
        })
    });
    }); 

    
});