const containerEl=document.querySelector('.container')

const btnEl=document.querySelector('.btn');

const popContainerEl=document.querySelector('.popup-container');

const iconEl=document.querySelector('.back');


btnEl.addEventListener('click',()=>{
    containerEl.classList.add('active');
    popContainerEl.classList.remove('active')

})

iconEl.addEventListener('click',()=>{
    popContainerEl.classList.add('active') 
    containerEl.classList.remove('active')
})