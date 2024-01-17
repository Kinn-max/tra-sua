var menu_ts = document.querySelectorAll('.category_list-item.menu_ts');

menu_ts.forEach((menuItem) => {
    var dentail = menuItem.querySelector('.list-dentail');
    var round_round = menuItem.querySelector('.round-round');

    menuItem.addEventListener('click', () => {
        var all_none = document.querySelectorAll('.list-dentail');
        var transform_none = document.querySelectorAll('.round-round')
        for (var i = 0; i < all_none.length; i++) {
            if (all_none[i] !== dentail) {
                all_none[i].classList.remove('toggle-auto');
                transform_none[i].classList.remove('transform-deg');
            }
        }
        
        dentail.classList.toggle('toggle-auto');
        round_round.classList.toggle('transform-deg');
    });
});


var close_dentail = document.querySelector('.close_dentail')
close_dentail.addEventListener('click', (e) =>{
    var center_product = document.querySelector('.center_product')
    center_product.style.display = 'none'
})



function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  }

// get atributes from the product element and add in center
document.addEventListener("DOMContentLoaded", function () {
    var productDetailsContainer = document.getElementById("product-details");
    var productLinks = document.querySelectorAll(".a_dentail-product");
    
    var quantity_show = document.getElementById('quantity_product-show');
    var width_total = document.querySelector('.add_product-click.width_total');
    var quantity = 1;
    var productPrice = 0;

    productLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            var productName = link.getAttribute("data-product-name");
            productPrice = parseFloat(link.getAttribute("data-product-price")); // Lấy giá trị từ thuộc tính và chuyển đổi sang số
            var productImg = link.getAttribute("data-product-img");

            var name_center = document.getElementById('name_center-sp');
            var price_center = document.getElementById('price_center-sp');
            var img_center = document.getElementById('img_center-sp');

            name_center.textContent = productName;
            price_center.textContent = formatCurrency(productPrice);
            img_center.src = productImg;
            productDetailsContainer.style.display = 'flex';

            // Cập nhật giá trị cho quantity và width_total
            quantity = 1;
            width_total.value = formatCurrency(quantity * productPrice);
            quantity_show.value = quantity;
        });
    });

    var quantity_minus = document.querySelector('.quantity_product-mul');
    var quantity_plus = document.querySelector('.quantity_product-plus');

    function changeQuantity(tmp) {
        return function () {
            if (tmp === 1) {
                quantity++;
            } else if (tmp === -1) {
                quantity--;
            }
            if (quantity <= 1) {
                quantity = 1;
            }
            quantity_show.value = quantity;
            width_total.value = formatCurrency(quantity * productPrice);
        };
    }

    quantity_plus.addEventListener('click', changeQuantity(1));
    quantity_minus.addEventListener('click', changeQuantity(-1));
});





