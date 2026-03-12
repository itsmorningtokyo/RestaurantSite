const menuData = [
      {
        id: 1,
        name: "Брускетта с томатами",
        desc: "Хрустящий хлеб чиабатта с нарезанными томатами черри, свежим базиликом, чесноком и оливковым маслом первого отжима.",
        longDesc: "Классическая итальянская закуска, приготовленная из свежайших томатов черри, ароматного базилика и чеснока на хрустящем хлебе чиабатта. Подаётся с оливковым маслом extra virgin из Тосканы.",
        price: 580,
        weight: "180 г",
        calories: "220 ккал",
        cookTime: "10 мин",
        image: "images/bruschetta.jpg",
        category: "starters",
        badge: null,
        tags: ["Вегетарианское"]
      },
      {
        id: 2,
        name: "Салат Цезарь",
        desc: "Романо, куриная грудка sous-vide, пармезан, хрустящие крутоны и фирменный соус Цезарь.",
        longDesc: "Наша версия классического салата Цезарь: нежные листья романо, куриная грудка, приготовленная методом sous-vide при 63°C в течение 2 часов, выдержанный пармезан, хрустящие домашние крутоны и авторский соус на основе анчоусов.",
        price: 720,
        weight: "250 г",
        calories: "340 ккал",
        cookTime: "15 мин",
        image: "images/caesar.jpg",
        category: "starters",
        badge: "Хит",
        tags: []
      },
      {
        id: 3,
        name: "Крем-суп из грибов",
        desc: "Нежный крем-суп из белых грибов и шампиньонов с трюфельным маслом и свежими травами.",
        longDesc: "Бархатистый крем-суп, приготовленный из отборных белых грибов и шампиньонов на сливочной основе. Подаётся с каплей ароматного трюфельного масла и свежей зеленью. Идеальное начало вашего обеда.",
        price: 490,
        weight: "300 мл",
        calories: "280 ккал",
        cookTime: "20 мин",
        image: "images/soup.jpg",
        category: "soups",
        badge: null,
        tags: ["Вегетарианское"]
      },
      {
        id: 4,
        name: "Паста Карбонара",
        desc: "Спагетти аль денте с хрустящей гуанчиале, яичным соусом и пекорино романо.",
        longDesc: "Настоящая римская карбонара по классическому рецепту: спагетти аль денте, хрустящая гуанчиале, кремовый соус из яичных желтков, пекорино романо и щедрая порция свежемолотого чёрного перца. Без сливок — как в Италии.",
        price: 850,
        weight: "320 г",
        calories: "520 ккал",
        cookTime: "20 мин",
        image: "images/pasta.jpg",
        category: "mains",
        badge: "Хит",
        tags: []
      },
      {
        id: 5,
        name: "Стейк Рибай",
        desc: "Мраморная говядина рибай на гриле с розмарином, чесночным маслом и гарниром из овощей.",
        longDesc: "Стейк рибай из отборной мраморной говядины зернового откорма, приготовленный на открытом огне до идеальной степени прожарки medium-rare. Подаётся с розмариновым маслом, печёным чесноком и сезонными овощами гриль.",
        price: 2400,
        weight: "350 г",
        calories: "680 ккал",
        cookTime: "25 мин",
        image: "images/steak.jpg",
        category: "mains",
        badge: "Шеф рекомендует",
        tags: ["Безглютеновое"]
      },
      {
        id: 6,
        name: "Лосось на гриле",
        desc: "Филе атлантического лосося с хрустящей корочкой, спаржей и лимонным соусом.",
        longDesc: "Нежное филе атлантического лосося, обжаренное до хрустящей золотистой корочки. Подаётся на подушке из зелёной спаржи с лёгким лимонно-сливочным соусом и микрозеленью. Богат омега-3 жирными кислотами.",
        price: 1650,
        weight: "280 г",
        calories: "450 ккал",
        cookTime: "20 мин",
        image: "images/salmon.jpg",
        category: "mains",
        badge: null,
        tags: ["Безглютеновое"]
      },
      {
        id: 7,
        name: "Ризотто с грибами",
        desc: "Кремовое ризотто с белыми грибами, пармезаном и ароматными травами.",
        longDesc: "Классическое итальянское ризотто, приготовленное из риса арборио с добавлением отборных белых грибов, выдержанного пармезана и ароматного сливочного масла. Медленная готовка раскрывает богатый грибной вкус.",
        price: 980,
        weight: "300 г",
        calories: "420 ккал",
        cookTime: "30 мин",
        image: "images/risotto.jpg",
        category: "mains",
        badge: null,
        tags: ["Вегетарианское"]
      },
      {
        id: 8,
        name: "Тирамису",
        desc: "Классический итальянский десерт с маскарпоне, кофе эспрессо и какао.",
        longDesc: "Нежнейший тирамису, приготовленный по оригинальному итальянскому рецепту: воздушный крем из маскарпоне, савоярди, пропитанные свежесваренным эспрессо, и нежная пудра какао сверху. Настоящий вкус Италии.",
        price: 590,
        weight: "150 г",
        calories: "380 ккал",
        cookTime: "5 мин",
        image: "images/tiramisu.jpg",
        category: "desserts",
        badge: "Хит",
        tags: []
      },
      {
        id: 9,
        name: "Чизкейк Нью-Йорк",
        desc: "Классический чизкейк с кремовой текстурой и ягодным соусом.",
        longDesc: "Плотный и кремовый чизкейк в нью-йоркском стиле на хрустящей основе из печенья. Подаётся с домашним ягодным соусом из свежей малины и голубики. Идеальное завершение ужина.",
        price: 540,
        weight: "160 г",
        calories: "420 ккал",
        cookTime: "5 мин",
        image: "images/cheesecake.jpg",
        category: "desserts",
        badge: null,
        tags: []
      },
      {
        id: 10,
        name: "Красное вино Кьянти",
        desc: "Бокал выдержанного тосканского Кьянти Классико с нотами вишни и специй.",
        longDesc: "Кьянти Классико DOCG — элегантное тосканское вино с насыщенным рубиновым цветом. Букет раскрывается нотами спелой вишни, фиалки и лёгкими пряными оттенками. Идеально сочетается с мясными блюдами и пастой.",
        price: 680,
        weight: "150 мл",
        calories: "130 ккал",
        cookTime: "—",
        image: "images/wine.jpg",
        category: "drinks",
        badge: null,
        tags: []
      },
      {
        id: 11,
        name: "Домашний лимонад",
        desc: "Освежающий лимонад из свежих лимонов с мятой и тростниковым сахаром.",
        longDesc: "Наш фирменный домашний лимонад, приготовленный из свежевыжатого сока лимонов, листьев мяты и натурального тростникового сахара. Подаётся со льдом — идеально освежает в любое время года.",
        price: 350,
        weight: "400 мл",
        calories: "120 ккал",
        cookTime: "—",
        image: "images/lemonade.jpg",
        category: "drinks",
        badge: null,
        tags: ["Безалкогольное"]
      }
    ];

    // ===== STATE =====
    var cart = [];
    var currentCategory = "all";
    var quantities = {};

    // ===== DOM =====
    var menuGrid = document.getElementById("menuGrid");
    var cartDrawer = document.getElementById("cartDrawer");
    var cartOverlay = document.getElementById("cartOverlay");
    var cartItemsEl = document.getElementById("cartItems");
    var cartTotalEl = document.getElementById("cartTotal");
    var cartCountEl = document.getElementById("cartCount");
    var checkoutBtn = document.getElementById("checkoutBtn");
    var notificationEl = document.getElementById("notification");
    var header = document.getElementById("header");
    var modalOverlay = document.getElementById("modalOverlay");

    // ===== RENDER MENU =====
    function renderMenu(category) {
      var filtered = category === "all"
        ? menuData
        : menuData.filter(function(d) { return d.category === category; });

      menuGrid.innerHTML = "";

      filtered.forEach(function(dish) {
        if (!quantities[dish.id]) quantities[dish.id] = 1;

        var card = document.createElement("div");
        card.className = "dish-card";
        card.setAttribute("role", "listitem");

        var badgeHtml = dish.badge
          ? '<span class="dish-badge">' + dish.badge + '</span>'
          : '';

        var tagsHtml = dish.tags.map(function(t) {
          return '<span class="dish-tag">' + t + '</span>';
        }).join('');

        card.innerHTML =
          '<div class="dish-image-wrap" style="cursor:pointer;" onclick="openModal(' + dish.id + ')">' +
            '<img class="dish-image" src="' + dish.image + '" alt="' + dish.name + '" loading="lazy">' +
            badgeHtml +
          '</div>' +
          '<div class="dish-body">' +
            '<div class="dish-top-row">' +
              '<h3 class="dish-name" style="cursor:pointer;" onclick="openModal(' + dish.id + ')">' + dish.name + '</h3>' +
              '<span class="dish-price">' + dish.price + ' &#8381;</span>' +
            '</div>' +
            '<p class="dish-desc">' + dish.desc + '</p>' +
            '<div class="dish-meta">' +
              tagsHtml +
              '<span class="dish-weight">' + dish.weight + '</span>' +
            '</div>' +
            '<div class="dish-actions">' +
              '<div class="qty-control">' +
                '<button class="qty-btn" onclick="changeQty(' + dish.id + ', -1)" aria-label="Уменьшить количество">-</button>' +
                '<span class="qty-value" id="qty-' + dish.id + '">' + quantities[dish.id] + '</span>' +
                '<button class="qty-btn" onclick="changeQty(' + dish.id + ', 1)" aria-label="Увеличить количество">+</button>' +
              '</div>' +
              '<button class="add-btn" id="addBtn-' + dish.id + '" onclick="addToCart(' + dish.id + ')">' +
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>' +
                'В заказ' +
              '</button>' +
            '</div>' +
          '</div>';

        menuGrid.appendChild(card);
      });
    }

    // ===== QUANTITY =====
    function changeQty(id, delta) {
      if (!quantities[id]) quantities[id] = 1;
      quantities[id] = Math.max(1, Math.min(20, quantities[id] + delta));
      var el = document.getElementById("qty-" + id);
      if (el) el.textContent = quantities[id];
    }

    // ===== ADD TO CART =====
    function addToCart(id) {
      var dish = menuData.find(function(d) { return d.id === id; });
      if (!dish) return;

      var qty = quantities[id] || 1;
      var existing = cart.find(function(item) { return item.id === id; });

      if (existing) {
        existing.qty += qty;
      } else {
        cart.push({ id: dish.id, name: dish.name, price: dish.price, image: dish.image, qty: qty });
      }

      quantities[id] = 1;
      var qtyEl = document.getElementById("qty-" + id);
      if (qtyEl) qtyEl.textContent = "1";

      // Button animation
      var btn = document.getElementById("addBtn-" + id);
      if (btn) {
        btn.classList.add("added");
        btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Добавлено';
        setTimeout(function() {
          btn.classList.remove("added");
          btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> В заказ';
        }, 1200);
      }

      updateCart();
      showNotification(dish.name + " добавлено в заказ");
    }

    // ===== CART =====
    function updateCart() {
      var totalItems = cart.reduce(function(s, i) { return s + i.qty; }, 0);
      var totalPrice = cart.reduce(function(s, i) { return s + i.price * i.qty; }, 0);

      cartCountEl.textContent = totalItems;
      cartCountEl.style.display = totalItems > 0 ? "flex" : "none";
      cartTotalEl.textContent = totalPrice.toLocaleString("ru-RU") + " \u20BD";
      checkoutBtn.disabled = cart.length === 0;

      renderCartItems();
    }

    function renderCartItems() {
      if (cart.length === 0) {
        cartItemsEl.innerHTML =
          '<div class="cart-empty">' +
            '<div class="cart-empty-icon" aria-hidden="true">' +
              '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" style="opacity:0.3"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>' +
            '</div>' +
            '<p>Ваш заказ пуст</p>' +
            '<p style="font-size:0.8rem; margin-top:0.5rem;">Добавьте блюда из меню</p>' +
          '</div>';
        return;
      }

      cartItemsEl.innerHTML = cart.map(function(item) {
        return (
          '<div class="cart-item">' +
            '<img class="cart-item-img" src="' + item.image + '" alt="' + item.name + '">' +
            '<div class="cart-item-info">' +
              '<p class="cart-item-name">' + item.name + '</p>' +
              '<p class="cart-item-price">' + (item.price * item.qty).toLocaleString("ru-RU") + ' \u20BD</p>' +
              '<div class="cart-item-controls">' +
                '<button class="cart-item-qty-btn" onclick="changeCartQty(' + item.id + ', -1)" aria-label="Уменьшить">-</button>' +
                '<span class="cart-item-qty">' + item.qty + '</span>' +
                '<button class="cart-item-qty-btn" onclick="changeCartQty(' + item.id + ', 1)" aria-label="Увеличить">+</button>' +
              '</div>' +
            '</div>' +
            '<button class="cart-item-remove" onclick="removeFromCart(' + item.id + ')" aria-label="Удалить ' + item.name + '">' +
              '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' +
            '</button>' +
          '</div>'
        );
      }).join('');
    }

    function changeCartQty(id, delta) {
      var item = cart.find(function(i) { return i.id === id; });
      if (!item) return;
      item.qty = Math.max(1, Math.min(20, item.qty + delta));
      updateCart();
    }

    function removeFromCart(id) {
      cart = cart.filter(function(i) { return i.id !== id; });
      updateCart();
    }

    // ===== CART DRAWER =====
    function openCartDrawer() {
      cartDrawer.classList.add("open");
      cartOverlay.classList.add("open");
      document.body.style.overflow = "hidden";
    }

    function closeCartDrawer() {
      cartDrawer.classList.remove("open");
      cartOverlay.classList.remove("open");
      document.body.style.overflow = "";
    }

    document.getElementById("openCart").addEventListener("click", openCartDrawer);
    document.getElementById("closeCart").addEventListener("click", closeCartDrawer);
    cartOverlay.addEventListener("click", closeCartDrawer);

    // ===== MODAL =====
    function openModal(id) {
      var dish = menuData.find(function(d) { return d.id === id; });
      if (!dish) return;

      document.getElementById("modalImg").src = dish.image;
      document.getElementById("modalImg").alt = dish.name;
      document.getElementById("modalName").textContent = dish.name;
      document.getElementById("modalPrice").textContent = dish.price + " \u20BD";
      document.getElementById("modalDesc").textContent = dish.longDesc;

      var detailsHtml =
        '<div class="modal-detail"><p class="modal-detail-label">Вес</p><p class="modal-detail-value">' + dish.weight + '</p></div>' +
        '<div class="modal-detail"><p class="modal-detail-label">Калории</p><p class="modal-detail-value">' + dish.calories + '</p></div>' +
        '<div class="modal-detail"><p class="modal-detail-label">Время</p><p class="modal-detail-value">' + dish.cookTime + '</p></div>';
      document.getElementById("modalDetails").innerHTML = detailsHtml;

      document.getElementById("modalAddBtn").onclick = function() {
        addToCart(id);
        closeModal();
      };

      modalOverlay.classList.add("open");
      document.body.style.overflow = "hidden";
    }

    function closeModal() {
      modalOverlay.classList.remove("open");
      if (!cartDrawer.classList.contains("open")) {
        document.body.style.overflow = "";
      }
    }

    document.getElementById("modalCloseBtn").addEventListener("click", closeModal);
    modalOverlay.addEventListener("click", function(e) {
      if (e.target === modalOverlay) closeModal();
    });

    // ===== TABS =====
    document.querySelectorAll(".tab-btn").forEach(function(btn) {
      btn.addEventListener("click", function() {
        document.querySelectorAll(".tab-btn").forEach(function(b) {
          b.classList.remove("active");
          b.setAttribute("aria-selected", "false");
        });
        btn.classList.add("active");
        btn.setAttribute("aria-selected", "true");
        currentCategory = btn.getAttribute("data-category");
        renderMenu(currentCategory);
      });
    });

    // ===== NOTIFICATION =====
    function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');

    // Исчезает само через 2.5 секунды
    setTimeout(() => {
        notification.classList.remove('show');
    }, 2500);
}

// Пример вызова в функции добавления в корзину:
// showNotification("Блюдо добавлено в корзину!");

    // ===== HEADER SCROLL =====
    window.addEventListener("scroll", function() {
      if (window.scrollY > 40) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });

    // ===== MOBILE NAV =====
    var mobileNav = document.getElementById("mobileNav");
    document.getElementById("mobileToggle").addEventListener("click", function() {
      mobileNav.classList.add("open");
      document.body.style.overflow = "hidden";
    });

    document.getElementById("mobileNavClose").addEventListener("click", closeMobileNav);

    function closeMobileNav() {
      mobileNav.classList.remove("open");
      document.body.style.overflow = "";
    }

const phoneInput = document.getElementById('phoneInput');
const confirmBtn = document.getElementById('checkoutBtn');

// Слушаем ввод в поле телефона
phoneInput.addEventListener('input', () => {
    // Условие: если введено больше 10 символов (базовая проверка для номера)
    // Можно заменить на проверку на пустоту: if (phoneInput.value.trim() !== "")
    if (phoneInput.value.length >= 11) {
        confirmBtn.disabled = false;     // Активируем кнопку
        confirmBtn.style.opacity = "1";  // Делаем её яркой
        confirmBtn.style.cursor = "pointer";
    } 
    else {
        confirmBtn.disabled = true;      // Деактивируем кнопку
        confirmBtn.style.opacity = "0.5"; // Делаем её полупрозрачной (визуальный отклик)
        confirmBtn.style.cursor = "not-allowed";
    }
});


    // ===== CHECKOUT =====
    checkoutBtn.addEventListener("click", function() {
      if (cart.length === 0) return;
      var total = cart.reduce(function(s, i) { return s + i.price * i.qty; }, 0);
      showNotification("Заказ оформлен на " + total.toLocaleString("ru-RU") + " \u20BD! Наш менеджер свяжится с вами в ближайщее время");
      phoneInput.value = ""; // Номер не сохраняем, поле очищаем
      this.disabled = true;  // Кнопку снова блокируем
      this.style.opacity = "0.5";
      cart = [];
      updateCart();
      closeCartDrawer();
    });

    // ===== KEYBOARD =====
    document.addEventListener("keydown", function(e) {
      if (e.key === "Escape") {
        closeCartDrawer();
        closeModal();
        closeMobileNav();
      }
    });

    // ===== INIT =====
    renderMenu("all");
    updateCart();
