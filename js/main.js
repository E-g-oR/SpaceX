var instance = new vidbg(".video", {
  mp4: "video/world.mp4", // URL or relative path to MP4 video
  webm: "video/world.webm", // URL or relative path to webm video
  poster: "video/poster.jpg", // URL or relative path to fallback image
  overlay: false // Boolean to display the overlay or not
});
var rellax = new Rellax(".rocket");

var MainMenuButton = document.querySelector('.menu-button'),
    SubMenuButton = document.querySelector('.sub-menu-button'),
    MainMenu = document.querySelector('.main-menu'),
    SubMenu = document.querySelector('.sub-menu'),
    MenuButtonLine = document.querySelector('.menu-button_line');

MainMenuButton.addEventListener('click', () => {
    MainMenu.classList.toggle('main-menu_active');
    MainMenuButton.classList.toggle('main-menu_active');
});
SubMenuButton.addEventListener('click', () => {
    SubMenu.classList.toggle('sub-menu_active');
    SubMenuButton.classList.toggle('sub-menu_active');
});

document.addEventListener('scroll', () => {
    if (MainMenu.classList.contains('main-menu_active')) {
        MainMenu.classList.remove('main-menu_active');
        MainMenuButton.classList.remove('main-menu_active');
    }
    if (SubMenu.classList.contains('sub-menu_active')) {
        SubMenu.classList.remove('sub-menu_active');
        SubMenuButton.classList.remove('sub-menu_active');
    }
})