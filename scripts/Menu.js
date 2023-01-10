function menuTrigger() {
    menuBtn.getElementById('menuBtn').classList.toggle('change'); 
    if (menuBtn.getElementById('menuBtn').classList.contains('change')) {
    document.getElementById('dmenu').style.display = 'block'
    } else {
    document.getElementById('dmenu').style.display = 'none'
    };
}