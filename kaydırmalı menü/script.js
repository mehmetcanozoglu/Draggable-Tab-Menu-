let tabs = document.querySelectorAll(".tab")
let tabBtns = document.querySelectorAll(".tab-btn")




let tab_nav = function (tabBtnClick) {

    tabBtns.forEach((tabBtn) => {
        tabBtn.classList.remove("active")
    })
    tabs.forEach((tab) => {
        tab.classList.remove("active")
    })

    tabs[tabBtnClick].classList.add("active")
    tabBtns[tabBtnClick].classList.add("active")
}

tabBtns.forEach((tabBtn, i) => {
    tabBtn.addEventListener("click", () => {
        tab_nav(i)
    })
})
