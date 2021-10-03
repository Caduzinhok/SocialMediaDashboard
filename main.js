const checkbox = document.getElementById('checkbox');
const html = document.querySelector("html");
const getStyle = (element,style) => window.getComputedStyle(element).getPropertyValue(style);
const initialColors = {
    bg: getStyle(html,"--bg"),
    card: getStyle(html,"--card"),
    title: getStyle(html,"--title"),
    text:   getStyle(html,"--text"),
    ligne: getStyle(html,"--ligne"),
    link: getStyle(html,"--link")
}
const darkMode = {
    bg: "#1e202a",
    card: "#252a41",
    title: "#ffffff",
    text: "#8b97c6",
    ligne: "#63687e",
    link: "#ffffff"
}
const transformKey = key => "--" + key;
const  changeColors = (colors) => {
    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key),colors[key])
    )}
checkbox.addEventListener('change',({target})=>{
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
    //container.classList.toggle('dark');
});