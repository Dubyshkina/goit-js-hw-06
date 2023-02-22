
 const counterValue = {
    value: 0,
    decrement(){
        this.value -= 1;
    },
    increment(){
        this.value += 1;
    }
 };
 const decremBtn = document.querySelector('button[data-action="decrement"]');
 const incremBtn = document.querySelector('button[data-action="increment"]');
 const valueEl = document.querySelector('#value');

 decremBtn.addEventListener('click', function(){
    counterValue.decrement();
    valueEl.textContent = counterValue.value;
 });
 incremBtn.addEventListener('click', function(){
    counterValue.increment();
    valueEl.textContent = counterValue.value;
 });

