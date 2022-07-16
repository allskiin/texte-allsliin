const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')


const sizes = document.querySelectorAll('.size__tallas')
const colors = document.querySelectorAll('.sneaker__color')
const sneaker = document.querySelectorAll('.sneaker__img')

function changeSize() {
    sizes.forEach(size => size.classList.remove('active'))
    this.classList.add('active')
}

function changeColor() {
    let primary = this.getAttribute('primary')
    let color = this.getAttribute('color')
    let sneakerColor = document.querySelector('.sneaker__img[color="$(color)"]')


    colors.forEach(c => c.classList.remove('active'))
    this.classList.add('active')

    document.documentElement.style.setProperty('--primary', primary)

    sneaker.forEach(s => s.classList.remove('shows'))
    sneakerColor.classList.add('shows')
}

sizes.forEach(size => size.addEventListener('click', changeSize))
colors.forEach(c => c.addEventListener('click', changeColor))



function showModal() {
    var element = document.getElementById("modal");
    element.classList.add("show-modal");
}

function closeModal() {
    var element = document.getElementById("modal");
    element.classList.remove("show-modal");
}


$(function() {
    $('#cardnumber').payment('formatCardNumber');
    $('#cardexpiration').payment('formatCardExpiry');
    $('#cardcvc').payment('formatCardCVC');

    $('#cardnumber').keyup(function(event) {
        $('#label-cardnumber').empty().append($(this).val());
    });

    $('#cardexpiration').keyup(function(event) {
        var data = $(this).val() + '<span>' + $('#cardcvc').val() + '</span>';
        $('#label-cardexpiration').empty().append(data);
    });

    $('#cardcvc').keyup(function(event) {
        var data = $('#cardexpiration').val() + '<span>' + $(this).val() + '</span>';
        $('#label-cardexpiration').empty().append(data);
    });

    $('.button-cta').on('click', function() {
        var proceed = true;
        $(".field input").each(function() {
            $(this).parent().find('path').each(function() {
                $(this).attr('fill', '#dddfe6');
            });

            if (!$.trim($(this).val())) {
                $(this).parent().find('path').each(function() {
                    $(this).attr('fill', '#f1404b');
                    proceed = false;
                });

                if (!proceed) {
                    $(this).parent().find('svg').animate({ opacity: '0.1' }, "slow");
                    $(this).parent().find('svg').animate({ opacity: '1' }, "slow");
                    $(this).parent().find('svg').animate({ opacity: '0.1' }, "slow");
                    $(this).parent().find('svg').animate({ opacity: '1' }, "slow");
                }
            }
        });

        if (proceed) //everything looks good! proceed purchase...
        {
            $('.field').find('path').each(function() {
                $(this).attr('fill', '#3ac569');
            });
            $('.payment').fadeToggle('slow', function() {
                $('.paid').fadeToggle('slow', 'linear');
            });
        }
    });
});
