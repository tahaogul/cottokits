/**
 * CottoKits - Products Module
 * Product data management, rendering, and popup modal
 */

// Embedded product data
const PRODUCTS_DATA = {
  "products": [
    {
      "id": "mekke-sehrini-taniyorum",
      "name": "Mekke Şehri'ni Tanıyorum!",
      "shortName": "Mekke Seti",
      "description": "Çocuklara Mekke Şehri'ni ve bizim için önemini eğlenceli ve öğretici bir yolla anlatmak için tasarlandı.",
      "image": "images/products/mekke.jpg",
      "badge": "En Popüler",
      "category": "Eğitim Setleri",
      "contents": ["3D Harita - %100 huş ağacından boyanabilir ahşap harita (30 cm)", "Tak & Çıkar boyanabilir ahşap mekanlar (7 adet)", "Eğlen & Öğren mekanlar hakkında bilgi kartları", "Hayal et & Boya mum boyalar (6 renk)"],
      "benefits": ["Çocuklara ibadet bilinci ve manevi değerler vermeye yardımcı olur", "Çocukların el-göz koordinasyonu ve motor becerilerinin gelişimine katkı sağlar"],
      "targetAudience": "Hac/umre ibadetleri için seyahatler, evde bireysel kullanım, okul öncesi, ilkokul için harika bir materyal"
    },
    {
      "id": "medine-sehrini-taniyorum",
      "name": "Medine Şehri'ni Tanıyorum!",
      "shortName": "Medine Seti",
      "description": "Çocuklara Medine Şehri'ni ve bizim için önemini eğlenceli ve öğretici bir yolla anlatmak için tasarlandı.",
      "image": "images/products/medine.jpg",
      "badge": null,
      "category": "Eğitim Setleri",
      "contents": ["3D Harita - %100 huş ağacından boyanabilir ahşap harita (30 cm)", "Tak & Çıkar boyanabilir ahşap mekanlar (8 adet)", "Eğlen & Öğren mekanlar hakkında bilgi kartları", "Hayal et & Boya mum boyalar (6 renk)"],
      "benefits": ["Çocuklara ibadet bilinci ve manevi değerler vermeye yardımcı olur", "Çocukların el-göz koordinasyonu ve motor becerilerinin gelişimine katkı sağlar"],
      "targetAudience": "Hac/umre ibadetleri için seyahatler, evde bireysel kullanım için harika bir materyal"
    },
    {
      "id": "ramazan-gorevlerim",
      "name": "Ramazan Görevlerim!",
      "shortName": "Ramazan Seti",
      "description": "Çocuklara Ramazanı ve bizim için önemini eğlenceli ve öğretici bir yolla anlatmak için tasarlandı.",
      "image": "images/products/ramazan.jpg",
      "badge": "Yeni",
      "category": "Ramazan Özel",
      "contents": ["Ahşap Görev Stantı (29x29 cm)", "Tak & Çıkar boyanabilir ahşap mekanlar (8 adet)", "30 farklı Hadis-i Şerif ile hazırlanmış görev kartları", "Hayal et & Boya mum boyalar (6 renk)"],
      "benefits": ["30 farklı sahih Hadis-i Şerif ile hazırlanmış eğlenceli görevler", "Çocuklara Ramazan bilinci ve manevi değerler verilebilir"],
      "targetAudience": "Evde bireysel kullanım, okul öncesi, ilkokul için harika bir materyal"
    },
    {
      "id": "kuran-okuyorum",
      "name": "Kur'an Okuyorum!",
      "shortName": "Kur'an Seti",
      "description": "Çocukların Kur'an okuma merasimlerinde ve Bed-i Besmele törenlerinde kullanılabilir.",
      "image": "images/products/kuran.jpg",
      "badge": null,
      "category": "Özel Günler",
      "contents": ["Ahşap Figürler - 10 adet boyanabilir ahşap figür", "Mini Ahşap Kur'an Okuyorum Stantı", "Süsleme İpi ve Ahşap Boncuklar", "Hayal et & Boya mum boyalar (6 renk)"],
      "benefits": ["Kur'an okuma merasimleri ve Bed-i Besmele törenlerinde kullanılabilir", "Çocuklar tören hazırlıklarına ailelerine eşlik ederek katılabilir"],
      "targetAudience": "Evde bireysel kullanım, okul öncesi, ilkokul için harika bir materyal"
    },
    {
      "id": "ilk-orucumu-tutuyorum",
      "name": "İlk Orucumu Tutuyorum!",
      "shortName": "İlk Oruç Seti",
      "description": "Çocuklara Ramazanı, orucu ve bizim için önemini eğlenceli ve sevdiren bir yolla anlatmak için tasarlandı.",
      "image": "images/products/ilk-oruc.jpg",
      "badge": null,
      "category": "Ramazan Özel",
      "contents": ["Ahşap Figürler - 10 adet boyanabilir ahşap figür", "Mini Ahşap Stant ve ayakları", "Süsleme İpi ve Ahşap Boncuklar", "Hayal et & Boya mum boyalar (6 renk)"],
      "benefits": ["İlk oruç deneyimini özel ve unutulmaz kılar", "Çocuklara Ramazan ve oruç bilinci aşılar"],
      "targetAudience": "Evde bireysel kullanım, okul öncesi, ilkokul için harika bir materyal"
    },
    {
      "id": "super-anahtarligim-kiz",
      "name": "Süper Anahtarlığım! (Kız)",
      "shortName": "Anahtarlık Kız",
      "description": "Küçük kız çocukları için tasarlanmış eğlenceli ve eğitici kendin yap anahtarlık setidir.",
      "image": "images/products/anahtar-kiz.jpg",
      "badge": "Kızlar İçin",
      "category": "Anahtarlık Setleri",
      "contents": ["Ahşap Figürler - 3 adet boyanabilir ahşap figür", "Mini Anahtarlık Aparatı", "Ahşap Boncuklar & İp", "Hayal et & Boya mum boyalar (6 renk)"],
      "benefits": ["İslami değerleri öğrenmeyi keyifli bir hale getirir", "Namazın ve Kur'an-ı Kerim'in önemini hatırlatır"],
      "targetAudience": "Evde bireysel kullanım, okul öncesi, ilkokul için harika bir materyal"
    },
    {
      "id": "super-anahtarligim-erkek",
      "name": "Süper Anahtarlığım! (Erkek)",
      "shortName": "Anahtarlık Erkek",
      "description": "Küçük erkek çocukları için tasarlanmış eğlenceli ve eğitici kendin yap anahtarlık setidir.",
      "image": "images/products/anahtar-erkek.jpg",
      "badge": "Erkekler İçin",
      "category": "Anahtarlık Setleri",
      "contents": ["Ahşap Figürler - 3 adet boyanabilir ahşap figür", "Mini Anahtarlık Aparatı", "Ahşap Boncuklar & İp", "Hayal et & Boya mum boyalar (6 renk)"],
      "benefits": ["İslami değerleri öğrenmeyi keyifli bir hale getirir", "Namazın ve Kur'an-ı Kerim'in önemini hatırlatır"],
      "targetAudience": "Evde bireysel kullanım, okul öncesi, ilkokul için harika bir materyal"
    }
  ],
  "brand": {
    "name": "CottoKits",
    "tagline": "small sets / big learnies",
    "whatsapp": "+905301266396",
    "fscNotice": "Ürünlerimiz FSC sertifikalı doğal huş ahşaptan üretilmektedir."
  }
};

let productsData = PRODUCTS_DATA.products;
let brandData = PRODUCTS_DATA.brand;

function initProducts() {
  createModalContainer();
  return Promise.resolve(PRODUCTS_DATA);
}

function getAllProducts() {
  return productsData || [];
}

function getProductById(id) {
  if (!productsData) return null;
  return productsData.find(product => product.id === id) || null;
}

function getBrandData() {
  return brandData;
}

function renderProductsGrid(container, products = null) {
  const productsToRender = products || productsData;
  if (!productsToRender || !container) return;
  container.innerHTML = productsToRender.map(product => createProductCard(product)).join('');

  // Add click listeners for popup
  container.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (!e.target.closest('.btn')) {
        const productId = card.dataset.productId;
        openProductModal(productId);
      }
    });
  });
}

function createProductCard(product) {
  // Determine badge class
  let badgeClass = 'product-card__badge';
  if (product.badge === 'Yeni') badgeClass += ' product-card__badge--new';
  else if (product.badge?.includes('İçin')) badgeClass += ' product-card__badge--sale';

  const badgeHtml = product.badge ? `<span class="${badgeClass}">${product.badge}</span>` : '';

  return `
    <article class="product-card" data-product-id="${product.id}">
      <div class="product-card__image-wrapper">
        ${badgeHtml}
        <img src="${product.image}" alt="${product.name}" class="product-card__image" loading="lazy">
      </div>
      <div class="product-card__content">
        <span class="product-card__category">${product.category}</span>
        <h3 class="product-card__title">${product.name}</h3>
        <a href="#" class="product-card__order-btn" onclick="event.stopPropagation(); orderProduct('${product.id}'); return false;">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Sipariş Ver
        </a>
      </div>
    </article>
  `;
}

// Modal functionality
function createModalContainer() {
  if (document.getElementById('product-modal-overlay')) return;

  const overlay = document.createElement('div');
  overlay.id = 'product-modal-overlay';
  overlay.className = 'product-modal-overlay';
  overlay.innerHTML = `<div class="product-modal" id="product-modal"></div>`;
  document.body.appendChild(overlay);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeProductModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProductModal();
  });
}

function openProductModal(productId) {
  const product = getProductById(productId);
  if (!product) return;

  const modal = document.getElementById('product-modal');
  const overlay = document.getElementById('product-modal-overlay');

  const badgeHtml = product.badge
    ? `<span class="product-modal__badge">${product.badge}</span>`
    : '';

  const contentsHtml = product.contents.map(item => `
    <li class="product-modal__list-item">
      <span class="product-modal__list-icon">✓</span>
      <span>${item}</span>
    </li>
  `).join('');

  const benefitsHtml = product.benefits.map(item => `
    <div class="product-modal__benefits-item">
      <span class="product-modal__benefits-icon">★</span>
      <span>${item}</span>
    </div>
  `).join('');

  modal.innerHTML = `
    <button class="product-modal__close" onclick="closeProductModal()">✕</button>
    ${badgeHtml}
    <img src="${product.image}" alt="${product.name}" class="product-modal__image">
    
    <div class="product-modal__content">
      <span class="product-modal__category">${product.category}</span>
      <h2 class="product-modal__title">${product.name}</h2>
      <p class="product-modal__description">${product.description}</p>
      
      <div class="product-modal__section">
        <h3 class="product-modal__section-title"><span>📦</span> Set İçeriği</h3>
        <ul class="product-modal__list">${contentsHtml}</ul>
      </div>
      
      <div class="product-modal__benefits">
        <div class="product-modal__benefits-title">Bu Set ile...</div>
        ${benefitsHtml}
      </div>
      
      <div class="product-modal__audience">
        <div class="product-modal__audience-title">👨‍👩‍👧‍👦 Kimler için tasarlandı?</div>
        <p class="product-modal__audience-text">${product.targetAudience}</p>
      </div>
      
      <div class="product-modal__fsc">
        <span class="product-modal__fsc-icon">🌳</span>
        <span>${brandData?.fscNotice || ''}</span>
      </div>
      
      <div class="product-modal__actions">
        <a href="#" class="btn btn-whatsapp btn-icon product-modal__order-btn" onclick="orderProduct('${product.id}'); return false;">
          <svg class="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          WhatsApp ile Sipariş Ver
        </a>
      </div>
    </div>
  `;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  const overlay = document.getElementById('product-modal-overlay');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
}

// Make modal functions global
window.openProductModal = openProductModal;
window.closeProductModal = closeProductModal;

window.Products = {
  init: initProducts,
  getAll: getAllProducts,
  getById: getProductById,
  getBrand: getBrandData,
  renderGrid: renderProductsGrid,
  openModal: openProductModal,
  closeModal: closeProductModal
};
