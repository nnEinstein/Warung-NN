const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('#hamburger-menu');
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
const searchBtn = document.querySelector('#search-button');
const shoppingCartBtn = document.querySelector('#shopping-cart-button')
const shoppingCart = document.querySelector('.shopping-cart')

document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
};

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
};

// Klik di luar navbar untuk menghilangkan class 'active'
document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if (!searchBtn.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
    if (!shoppingCartBtn.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active');
    }
});

// Cloning menggunakan Array
document.addEventListener('DOMContentLoaded', function() {
    const productsContainer = document.getElementById('products-container');
    const modalsContainer = document.getElementById('modals-container');
    
    console.log('productsContainer:', productsContainer);
    console.log('modalsContainer:', modalsContainer);
    
    const productCardTemplate = productsContainer.querySelector('.product-card');
    if (!productCardTemplate) {
      console.error('Product card template tidak ditemukan.');
      return;
    }
    productCardTemplate.style.display = 'none';
    
    const modalTemplate = modalsContainer.querySelector('.modal');
    if (!modalTemplate) {
      console.error('Modal template tidak ditemukan.');
      return;
    }
    modalTemplate.style.display = 'none';
  
    // Data produk
    const products = [
      { id: 1, name: 'Mendoan', price: 'Rp.2.000', oldPrice: 'Rp. 2.500', image: 'img/menu/1.jpg', description: 'Mendoan adalah camilan khas Banyumas dengan lapisan tepung renyah, berisi daging lembut, disajikan dengan sambal pedas yang menggugah selera.' },
      { id: 2, name: 'Bakwan', price: 'Rp.2.000', oldPrice: 'Rp.2.500', image: 'img/menu/2.jpg', description: 'Bakwan, gorengan tradisional yang gurih dan renyah, terbuat dari campuran sayuran segar dan tepung, cocok sebagai camilan atau lauk pendamping.' },
      { id: 3, name: 'Berontak', price: 'Rp.2.000', oldPrice: 'Rp.2.500', image: 'img/menu/3.jpg', description: 'Berontak adalah makanan khas dengan tekstur renyah dan cita rasa pedas, terbuat dari bahan pilihan yang menghasilkan keautentikan rasa tradisional.' },
      { id: 4, name: 'Kwetiau', price: 'Rp.6.000', oldPrice: 'Rp.7.000', image: 'img/menu/4.jpg', description: 'Kwetiau lembut disajikan dengan kuah gurih dan topping daging, memberikan sensasi lezat yang menyatu dengan cita rasa tradisional.' },
      { id: 5, name: 'Mie Kuah', price: 'Rp.3.000', oldPrice: 'Rp.3.500', image: 'img/menu/5.jpg', description: 'Mie kuah hangat dengan kaldu kaya rasa, dilengkapi sayuran segar dan potongan daging, menyuguhkan kelezatan yang menenangkan jiwa.' },
      { id: 6, name: 'Mie Goreng', price: 'Rp.3.000', oldPrice: 'Rp.3.500', image: 'img/menu/6.jpg', description: 'Mie goreng berempah dimasak dengan teknik khas, memadukan mie kenyal, sayuran, dan bumbu rempah yang menggoda selera.' },
    ];
  
    console.log('Data produk:', products);
  
    products.forEach(function(product) {
      // Kloning product card
      const cardClone = productCardTemplate.cloneNode(true);
      cardClone.style.display = ''; // tampilkan clone
      
      const imgElem = cardClone.querySelector('.product-image img');
      if (imgElem) {
        imgElem.src = product.image;
        imgElem.alt = product.name;
      }
      const nameElem = cardClone.querySelector('.product-content h3');
      if (nameElem) {
        nameElem.textContent = product.name;
      }
      const priceElem = cardClone.querySelector('.product-price');
      if (priceElem) {
        priceElem.innerHTML = `${product.price} <span>${product.oldPrice}</span>`;
      }
  
      // Kloning modal
      const modalClone = modalTemplate.cloneNode(true);
      modalClone.style.display = 'none';
      modalClone.removeAttribute('id');
      const modalId = `item-detail-modal-${product.id}`;
      modalClone.id = modalId;
      
      // Menambahkan isi modal untuk di cloning
      const modalDesc = modalClone.querySelector('.modal-content .product-content p');
      if (modalDesc) {
        modalDesc.textContent = product.description;
      }
      
      const modalJudul = modalClone.querySelector('.modal-content .product-content h3');
      if (modalJudul) {
        modalJudul.textContent = product.name;
      }

      const modalImg = modalClone.querySelector('.modal-content .img-detail');
      if (modalImg) {
        modalImg.src = product.image;
        modalImg.alt = product.name;
      }

      const modalPrice = modalClone.querySelector('.modal-content .product-content .product-price');
      if (modalPrice) {
        modalPrice.textContent = product.price;
      }

      // Menambahkan Product Card ke Container Produk
      modalsContainer.appendChild(modalClone);
      
      const detailBtn = cardClone.querySelector('.item-detail-button');
      if (detailBtn) {
        detailBtn.addEventListener('click', function(e) {
          e.preventDefault();
          const modalToShow = document.getElementById(modalId);
          if (modalToShow) {
            modalToShow.style.display = 'flex';
          }
        });
      }
      
      productsContainer.appendChild(cardClone);
    });
  
    // Listener untuk menutup modal
    modalsContainer.addEventListener('click', function(e) {
      if (e.target.closest('.close-icon')) {
        e.preventDefault();
        const modal = e.target.closest('.modal');
        if (modal) {
          modal.style.display = 'none';
        }
      }
      if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
      }
    });
  });

  //Efek slide
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.slide-left, .slide-right');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('active');
      }
      // Untuk animasi berulang saat scroll lagi:
      else {
          entry.target.classList.remove('active');
      }
    });
  }, {
    threshold: 0.3
  });

  elements.forEach(element => {
    observer.observe(element);
  });
});