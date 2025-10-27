const envoltura = document.querySelector('.env-sobre');
const carta = document.querySelector('.carta');

document.addEventListener('click', (e) => {

    if (
        e.target.matches('.sobre') ||
        e.target.matches('.doblDerecho') ||
        e.target.matches('.doblIzq') ||
        e.target.matches('.pegatina') ||
        e.target.matches('.img-pegatina')
    ) {
            envoltura.classList.toggle('abierto');

            if (!carta.classList.contains('abierto')) {
                setTimeout(() => {
                    carta.classList.toggle('mostrar-carta');
                }, 500);
            }  else {
                carta.classList.remove('mostrar-carta');
            }


        }
});



