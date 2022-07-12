
const bgs = document.querySelectorAll('.bg');
const texts = document.querySelectorAll('.text');
const borders = document.querySelectorAll('.br');

function reply_click(clicked_id)
{
    //alert(clicked_id);
    var temp = document.getElementById(clicked_id).getAttribute("color");

    for (const text of texts) {
        array = text.className.split(' ');
        for (const className of array) {
            if (className.includes('text-primary')) {
                text.classList.remove('text-primary');
            }

            if (className.includes('text-danger')) {
                text.classList.remove('text-danger');
            }

            if (className.includes('text-success')) {
                text.classList.remove('text-success');
            }

            if (className.includes('text-warning')) {
                text.classList.remove('text-warning');
            }

            if (className.includes('text-info')) {
                text.classList.remove('text-info');
            }

            if (className.includes('text-dark')) {
                text.classList.remove('text-dark');
            }
        }

        text.classList.add('text-' + temp);
        
    }

    for (const bg of bgs) {
        array = bg.className.split(' ');
        for (const className of array) {
            if (className.includes('bg-primary')) {
                bg.classList.remove('bg-primary');
            }

            if (className.includes('bg-danger')) {
                bg.classList.remove('bg-danger');
            }

            if (className.includes('bg-success')) {
                bg.classList.remove('bg-success');
            }

            if (className.includes('bg-warning')) {
                bg.classList.remove('bg-warning');
            }

            if (className.includes('bg-info')) {
                bg.classList.remove('bg-info');
            }

            if (className.includes('bg-dark')) {
                bg.classList.remove('bg-dark');
            }
        }
        bg.classList.add('bg-' + temp);
    }

    for (const border of borders) {
        array = border.className.split(' ');
        console.log(array);
        for (const className of array) {
            if (className.includes('border-primary')) {
                border.classList.remove('border-primary');
            }

            if (className.includes('border-danger')) {
                border.classList.remove('border-danger');
            }

            if (className.includes('border-success')) {
                border.classList.remove('border-success');
            }

            if (className.includes('border-warning')) {
                border.classList.remove('border-warning');
            }

            if (className.includes('border-info')) {
                border.classList.remove('border-info');
            }

            if (className.includes('border-dark')) {
                border.classList.remove('border-dark');
            }
        }

        border.classList.add('border-' + temp);
    }
}