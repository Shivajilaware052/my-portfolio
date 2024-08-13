const experienceEffect = () => {

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const section = document.querySelector('#experience');
        const sectionTop = section.offsetTop + 500;
        const sectionBottom = sectionTop + section.offsetHeight + 200;
    
        if (scrollPosition > sectionTop && scrollPosition < sectionBottom) {
            document.querySelector('.exp-1').style = "transform: translateX(0%); opacity: 1"
            document.querySelector('.tech-stack-exp-1').style = "transform: translateY(0%); opacity: 1"
            document.querySelector('.exp-2').style = "transform: translateX(0%); opacity: 1"
            document.querySelector('.tech-stack-exp-2').style = "transform: translateX(0%); opacity: 1"
            document.querySelector('.exp-3').style = "transform: translateX(0%); opacity: 1"
            document.querySelector('.tech-stack-exp-3').style = "transform: translateY(0%); opacity: 1"
            document.querySelector('.exp-4').style = "transform: translateX(0%); opacity: 1"
            document.querySelector('.tech-stack-exp-4').style = "transform: translateY(0%); opacity: 1"
        } else {
            document.querySelector('.exp-1').style = "transform: translateX(-100%); opacity: 0"
            document.querySelector('.tech-stack-exp-1').style = "transform: translateY(-100%); opacity: 0"
            document.querySelector('.exp-2').style = "transform: translateX(100%); opacity: 0"
            document.querySelector('.tech-stack-exp-2').style = "transform: translateX(-100%); opacity: 0"
            document.querySelector('.exp-3').style = "transform: translateX(-100%); opacity: 0"
            document.querySelector('.tech-stack-exp-3').style = "transform: translateY(100%); opacity: 0"
            document.querySelector('.exp-4').style = "transform: translateX(100%); opacity: 0"
            document.querySelector('.tech-stack-exp-4').style = "transform: translateX(-100%); opacity: 0"
        }
    })
}

export default experienceEffect;