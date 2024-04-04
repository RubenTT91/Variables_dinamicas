
const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){
    const suffting = this.dataset.sizing || '';
    console.log(this.name);
    console.log(this.value);
    console.log(suffting);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffting);
}

inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
inputs.forEach(input => input.addEventListener('change', handleUpdate));