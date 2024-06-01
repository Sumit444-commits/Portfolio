async function main() {

    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".top").style.top = "0";
        document.querySelector(".hamburger").style.display = "none";
        document.querySelector(".cancel").style.display = "block";
    })
    document.querySelector(".cancel").addEventListener("click", () => {
        document.querySelector(".top").style.top = "-200px";
        document.querySelector(".cancel").style.display = "none";
        document.querySelector(".hamburger").style.display = "block";
    })

}
main();