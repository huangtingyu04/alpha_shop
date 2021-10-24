let burger = document.querySelector('#burger'),
    mobileMainenu = document.querySelector('.mobile-main-menu'),
    productItem = document.querySelectorAll('.product-item'),
    totalEle = document.querySelector('.total .price'),
    totalFee = 0,
    currIdx = 1,
    stepsEle = document.querySelectorAll('.step'),
    formBox = document.querySelectorAll('.form-box'),
    stepBtn = document.querySelectorAll('.step-btn'),
    prevBtn = document.querySelector('.step-btn.prev'),
    nextBtn = document.querySelector('.step-btn.next'),
    checkBtn = document.querySelector('.step-btn.check')

// header burger control
burger.addEventListener('click', function() {
    this.classList.toggle('open')
    mobileMainenu.classList.toggle('open')
})

// cart num edit start
productItem.forEach(function(item, index){
    item.addEventListener('click', editProductItem)
    // item.querySelector('.fee').innerText = `$${item.querySelector('.fee').dataset.fee}`
    totalFee += +(item.querySelector('.fee').dataset.fee)
    totalEle.innerText = `$${totalFee}`
})
function editProductItem(e) {

    let feeEle = this.querySelector('.fee'),
        perfee = feeEle.dataset.fee,
        num

    if (e.target.classList.contains('add-btn')) {
        num = ++e.target.previousElementSibling.innerHTML
        // feeEle.innerText = `$${perfee * num}`
        totalFee += +(perfee)

        totalEle.innerText = `$${totalFee}`
    }

    if (e.target.classList.contains('minus-btn')) {
        if (e.target.nextElementSibling.innerHTML === '1') return
        num = --e.target.nextElementSibling.innerHTML
        // feeEle.innerText = `$${perfee * num}`
        totalFee += -(perfee)

        totalEle.innerText = `$${totalFee}`
    }

}
// cart num edit end

// cart step edit start
function checkStep(idx) {

    stepsEle.forEach(e => e.classList.remove('step-active', 'step-finished'))
    formBox.forEach(e => e.classList.add('d-none'))
    stepBtn.forEach(e => e.classList.add('d-none'))

    switch (idx) {
        case 1 : {
            stepsEle[0].classList.add('step-active')
            formBox[0].classList.remove('d-none')
            nextBtn.classList.add('right')
            nextBtn.classList.remove('d-none')

            break
        }
        case 2 : {
            stepsEle[0].classList.add('step-active', 'step-finished')
            stepsEle[1].classList.add('step-active')
            formBox[1].classList.remove('d-none')
            prevBtn.classList.remove('d-none')
            nextBtn.classList.remove('d-none')

            break
        }
        case 3 : {
            stepsEle[0].classList.add('step-active', 'step-finished')
            stepsEle[1].classList.add('step-active', 'step-finished')
            stepsEle[2].classList.add('step-active')
            formBox[2].classList.remove('d-none')
            prevBtn.classList.remove('d-none')
            checkBtn.classList.remove('d-none')

            break
        }
    }
}
checkStep(currIdx)
prevBtn.addEventListener('click', function(){
    currIdx--
    checkStep(currIdx)
})

nextBtn.addEventListener('click', function(){
    currIdx++
    checkStep(currIdx)
})
// cart step edit end
