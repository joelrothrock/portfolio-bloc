

function hideElements(){
    $('.js-projects').hide();
    $('.js-contact').hide();
  }
  
  
  
  function clickAbout() {
    $('#js-about-button').on('click', function(event){
      $('.js-about').show();
      $('.js-projects').hide();
      $('.js-contact').hide();
    });
  }
  
  function clickProjects() {
    $('#js-projects-button').on('click', function(event){
      $('.js-about').hide();
      $('.js-projects').show();
      $('.js-contact').hide();
    });
  }
  
  function clickContact() {
    $('#js-contact-button').on('click', function(event){
      $('.js-about').hide();
      $('.js-projects').hide();
      $('.js-contact').show();
    });
  }
  
  function handlePortfolio(){
    hideElements();
    clickAbout();
    clickProjects();
    clickContact();
  }
  
  $(handlePortfolio);