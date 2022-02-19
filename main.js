const tabs = document.querySelectorAll('.tab-btn');

tabs.forEach((tab)=>{
    tab.addEventListener('click',()=>{
        tabs.forEach(tab=>{tab.classList.remove('active')})

        tab.classList.add('active')
    })
})