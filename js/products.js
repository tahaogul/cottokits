/**
 * CottoKits - Products Module
 * Product data management, rendering, and popup modal
 */

// Embedded product data - SEO optimized & detailed
const PRODUCTS_DATA = {
  "products": [
    {
      "id": "mekke-sehrini-taniyorum",
      "name": "Mekke Şehri'ni Tanıyorum!",
      "shortName": "Mekke Seti",
      "description": "Mekke Şehri'ni Tanıyorum Eğitim Seti, çocuklarınıza İslam'ın en kutsal şehri Mekke-i Mükerreme'yi tanıtmak için özel olarak tasarlanmış, %100 FSC sertifikalı huş ağacından üretilmiş eğitici ahşap oyuncak setidir. Bu benzersiz set, Kabe-i Muazzama, Safa ve Merve tepeleri, Mina, Müzdelife ve Arafat gibi önemli mekanları 3 boyutlu harita üzerinde interaktif bir şekilde keşfetme imkanı sunar. Çocuklar bu kutsal mekanları boyayarak ve harita üzerine yerleştirerek hem eğlenceli vakit geçirir hem de Hac ve Umre ibadetlerinin yapıldığı bu mübarek beldeyi tanır. Türkiye'de el işçiliği ile üretilen bu set, çevre dostu boya ve malzemeler kullanılarak hazırlanmıştır.",
      "image": "images/products/mekke.jpg",
      "badge": "En Popüler",
      "category": "Eğitim Setleri",
      "contents": [
        "3D Ahşap Harita - %100 FSC sertifikalı huş ağacından el yapımı boyanabilir harita (30x30 cm boyutunda)",
        "Tak & Çıkar Ahşap Mekanlar - Kabe, Safa-Merve, Mina, Müzdelife, Arafat, Cemerat ve daha fazlası (7 özel parça)",
        "Eğlen & Öğren Bilgi Kartları - Her mekan için ayrıntılı açıklamalar ve ilgi çekici bilgiler içeren öğretici kartlar",
        "Hayal Et & Boya Mum Boya Seti - Çocuk sağlığına uygun, toksik olmayan 6 farklı renk",
        "Kullanım Kılavuzu - Adım adım rehber ve ebeveynler için ipuçları"
      ],
      "benefits": [
        "Hac ve Umre ibadetlerinin önemini çocuklara sevdirerek öğretir",
        "İslami değerler ve manevi bilinç kazandırır",
        "El-göz koordinasyonu ve ince motor becerilerini geliştirir",
        "Yaratıcılık ve hayal gücünü destekler",
        "Aile ile kaliteli zaman geçirme fırsatı sunar",
        "Boyama aktivitesi ile konsantrasyon ve sabır geliştirir"
      ],
      "targetAudience": "3-10 yaş arası çocuklar için idealdir. Hac ve Umre seyahati öncesi hazırlık, evde eğitici oyun, okul öncesi ve ilkokul din kültürü dersleri, Kur'an kursları ve çocuk etkinlikleri için mükemmel bir eğitim materyalidir. Aileler, öğretmenler ve din eğitimcileri için vazgeçilmez bir kaynak.",
      "seoKeywords": "Mekke eğitim seti, çocuk için Hac oyuncağı, İslami ahşap oyuncak, Kabe modeli çocuklar için, eğitici din oyuncağı, FSC sertifikalı ahşap oyuncak"
    },
    {
      "id": "medine-sehrini-taniyorum",
      "name": "Medine Şehri'ni Tanıyorum!",
      "shortName": "Medine Seti",
      "description": "Medine Şehri'ni Tanıyorum Eğitim Seti, Peygamber Efendimiz Hz. Muhammed (s.a.v.)'in şehri olan Medine-i Münevvere'yi çocuklarınıza tanıtmak için özel olarak hazırlanmış, %100 FSC sertifikalı huş ağacından üretilmiş premium eğitici oyuncak setidir. Bu kapsamlı set, Mescid-i Nebevi, Ravza-i Mutahhara, Cennetü'l-Baki, Uhud Dağı, Kuba Mescidi ve Kıbleteyn Mescidi gibi Medine'nin en önemli İslami mekanlarını içerir. Çocuklar her bir mekanı renklendirerek ve 3D harita üzerine yerleştirerek Hz. Peygamber'in yaşadığı bu mübarek şehri keşfeder. Tamamen Türkiye'de üretilen bu set, çevre ve çocuk sağlığına duyarlı malzemelerle hazırlanmıştır.",
      "image": "images/products/medine.jpg",
      "badge": null,
      "category": "Eğitim Setleri",
      "contents": [
        "3D Ahşap Harita - %100 FSC sertifikalı huş ağacından el yapımı boyanabilir harita (30x30 cm boyutunda)",
        "Tak & Çıkar Ahşap Mekanlar - Mescid-i Nebevi, Ravza, Cennetü'l-Baki, Uhud, Kuba Mescidi ve diğer önemli mekanlar (8 özel parça)",
        "Eğlen & Öğren Bilgi Kartları - Hz. Peygamber döneminden hikayeler ve mekanların önemi hakkında bilgiler",
        "Hayal Et & Boya Mum Boya Seti - Çocuk sağlığına uygun, toksik olmayan 6 farklı renk",
        "Kullanım Kılavuzu - Adım adım rehber ve ebeveynler için ipuçları"
      ],
      "benefits": [
        "Hz. Peygamber'in hayatını ve Medine'nin önemini öğretir",
        "Peygamber sevgisi ve Sünnet bilinci aşılar",
        "El-göz koordinasyonu ve ince motor becerilerini geliştirir",
        "Tarih bilinci ve İslam tarihi farkındalığı kazandırır",
        "Aile ile kaliteli zaman geçirme fırsatı sunar",
        "Boyama aktivitesi ile yaratıcılığı destekler"
      ],
      "targetAudience": "3-10 yaş arası çocuklar için tasarlanmıştır. Hac ve Umre seyahati hazırlığı, evde eğitici aktiviteler, okul öncesi ve ilkokul din eğitimi, Kur'an kursları ve cami çocuk etkinlikleri için ideal bir öğretim aracıdır. Ailelere, öğretmenlere ve din eğitimcilerine önerilir.",
      "seoKeywords": "Medine eğitim seti, çocuk için Umre oyuncağı, İslami eğitici oyuncak, Mescid-i Nebevi modeli, Peygamber şehri oyuncak, ahşap din eğitimi seti"
    },
    {
      "id": "ramazan-gorevlerim",
      "name": "Ramazan Görevlerim!",
      "shortName": "Ramazan Seti",
      "description": "Ramazan Görevlerim Eğitim Seti, mübarek Ramazan ayını çocuklarınız için anlamlı ve eğlenceli bir deneyime dönüştürmek üzere tasarlanmış, %100 FSC sertifikalı huş ağacından üretilmiş özel bir settir. Bu benzersiz Ramazan takvimi, her gün için farklı bir görev içeren 30 adet hadis-i şerif kartı ile birlikte gelir. Çocuklar günlük görevlerini tamamladıkça ahşap figürleri boyar ve stant üzerine yerleştirir, böylece Ramazan boyunca manevi gelişimlerini somut olarak takip edebilirler. İyilik yapma, sadaka verme, Kur'an okuma gibi görevler sayesinde çocuklar Ramazan ruhunu yaşayarak öğrenir. Türkiye'de el yapımı olarak üretilmiştir.",
      "image": "images/products/ramazan.jpg",
      "badge": "Yeni",
      "category": "Ramazan Özel",
      "contents": [
        "Premium Ahşap Görev Stantı - %100 huş ağacından (29x29 cm) dekoratif ve fonksiyonel tasarım",
        "Tak & Çıkar Ahşap Figürler - Ramazan temalı boyanabilir 8 özel parça",
        "30 Günlük Görev Kartları - Her biri sahih hadis-i şeriflerle desteklenmiş günlük görevler",
        "Hayal Et & Boya Mum Boya Seti - Çocuk sağlığına uygun, toksik olmayan 6 farklı renk",
        "Ramazan Aktivite Rehberi - Aile için Ramazan etkinlik önerileri"
      ],
      "benefits": [
        "30 gün boyunca tutarlı bir Ramazan rutini oluşturur",
        "Hadis-i şerifler aracılığıyla Sünnet bilinci kazandırır",
        "İyilik yapma ve paylaşma alışkanlığı geliştirir",
        "Oruç, namaz ve Kur'an okuma motivasyonu sağlar",
        "Aile içi Ramazan birlikteliğini güçlendirir",
        "Görsel ilerleme takibi ile başarı hissi verir"
      ],
      "targetAudience": "4-12 yaş arası çocuklar için idealdir. Evde Ramazan etkinlikleri, okul öncesi ve ilkokul Ramazan programları, Kur'an kursu Ramazan aktiviteleri ve aile Ramazan gelenekleri için mükemmel bir araçtır. Her yıl tekrar kullanılabilir dayanıklı tasarım.",
      "seoKeywords": "Ramazan etkinlik seti, çocuk Ramazan takvimi, İslami Ramazan oyuncağı, hadis kartları çocuklar için, Ramazan görev panosu, ahşap Ramazan seti"
    },
    {
      "id": "kuran-okuyorum",
      "name": "Kur'an Okuyorum!",
      "shortName": "Kur'an Seti",
      "description": "Kur'an Okuyorum Özel Gün Seti, çocuğunuzun Kur'an-ı Kerim okumaya başlama sevincini taçlandırmak için tasarlanmış, %100 FSC sertifikalı huş ağacından üretilmiş anlamlı bir hediye setidir. Bed-i Besmele törenleri, hatim merasimleri ve Kur'an okuma kutlamaları için özel olarak hazırlanan bu set, çocukların bu önemli anı hem hazırlayarak hem de yaşayarak hatırlamalarını sağlar. Boyanabilir ahşap figürler, dekoratif mini Kur'an stantı ve süsleme malzemeleri ile çocuklar kendi özel törenlerini hazırlayabilir. Tamamen el yapımı olan bu set, kalıcı bir hatıra olarak saklanabilir. Türkiye'de sevgiyle üretilmiştir.",
      "image": "images/products/kuran.jpg",
      "badge": null,
      "category": "Özel Günler",
      "contents": [
        "Boyanabilir Ahşap Figürler - Kur'an temalı 10 adet özel tasarım parça",
        "Mini Ahşap Kur'an Stantı - Dekoratif ve fonksiyonel, hatıra olarak saklanabilir",
        "Premium Süsleme Malzemeleri - Doğal ahşap boncuklar ve örgü ipi",
        "Hayal Et & Boya Mum Boya Seti - Çocuk güvenliği sertifikalı 6 renk",
        "Tören Hazırlık Rehberi - Adım adım süsleme ve hazırlık kılavuzu"
      ],
      "benefits": [
        "Kur'an okumaya başlama anını özel ve unutulmaz kılar",
        "Çocuğun tören hazırlıklarına aktif katılımını sağlar",
        "Kur'an-ı Kerim'e sevgi ve saygı duygusu aşılar",
        "El becerileri ve yaratıcılığı geliştirir",
        "Kalıcı bir hatıra olarak yıllarca saklanabilir",
        "Aile birlikteliği ve manevi paylaşım fırsatı sunar"
      ],
      "targetAudience": "5-12 yaş arası çocuklar için tasarlanmıştır. Bed-i Besmele törenleri, hatim merasimleri, Kur'an okuma başlangıcı kutlamaları için mükemmel bir seçimdir. Kur'an kursları, camiler ve aileler için anlamlı bir hediye alternatifidir.",
      "seoKeywords": "Kur'an okuma seti çocuk, Bed-i Besmele hediyesi, hatim töreni seti, İslami özel gün hediyesi, Kur'an stantı ahşap, çocuk Kur'an kutlaması"
    },
    {
      "id": "ilk-orucumu-tutuyorum",
      "name": "İlk Orucumu Tutuyorum!",
      "shortName": "İlk Oruç Seti",
      "description": "İlk Orucumu Tutuyorum Kutlama Seti, çocuğunuzun ilk oruç deneyimini kutlamak ve bu özel anı ölümsüzleştirmek için tasarlanmış, %100 FSC sertifikalı huş ağacından üretilmiş benzersiz bir settir. İlk oruç, çocukların manevi gelişiminde önemli bir kilometre taşıdır ve bu set sayesinde bu anı ailenizle birlikte hazırlayarak kutlayabilirsiniz. Boyanabilir ahşap figürler, özel tasarım stant ve süsleme malzemeleri ile çocuğunuz kendi ilk oruç kutlamasını hazırlar. Ramazan boyunca iftar sofrasının süsü olacak bu set, yıllarca saklanabilecek değerli bir hatıra haline gelir. Türkiye'de el işçiliği ile üretilmiştir.",
      "image": "images/products/ilk-oruc.jpg",
      "badge": null,
      "category": "Ramazan Özel",
      "contents": [
        "Boyanabilir Ahşap Figürler - İlk oruç temalı 10 adet özel tasarım parça",
        "Mini Ahşap Kutlama Stantı - Ayaklı, iftar sofrasına uygun dekoratif tasarım",
        "Premium Süsleme Malzemeleri - Doğal ahşap boncuklar ve renkli ipler",
        "Hayal Et & Boya Mum Boya Seti - Çocuk güvenliği sertifikalı 6 renk",
        "İlk Oruç Sertifikası - Kişiselleştirilebilir başarı belgesi"
      ],
      "benefits": [
        "İlk oruç deneyimini özel ve unutulmaz bir anıya dönüştürür",
        "Çocuğa oruç tutma motivasyonu ve özgüven verir",
        "Ramazan ve oruç bilinci aşılar",
        "Aile ile birlikte hazırlık yapma fırsatı sunar",
        "Kalıcı bir hatıra olarak saklanabilir",
        "Her Ramazan tekrar kullanılabilir dayanıklı tasarım"
      ],
      "targetAudience": "5-10 yaş arası ilk kez oruç tutacak veya deneyecek çocuklar için idealdir. İlk oruç kutlamaları, Ramazan hazırlıkları ve aile Ramazan gelenekleri için mükemmel bir hediyedir. Anne-babalar, büyükanne-büyükbabalar için anlamlı bir hediye seçeneği.",
      "seoKeywords": "ilk oruç hediyesi, çocuk Ramazan kutlama seti, ilk oruç kutlaması, İslami çocuk hediyesi, Ramazan ahşap set, oruç motivasyon seti"
    },
    {
      "id": "super-anahtarligim-kiz",
      "name": "Süper Anahtarlığım! (Kız)",
      "shortName": "Anahtarlık Kız",
      "description": "Süper Anahtarlığım Kız Versiyonu, küçük hanımefendiler için özel olarak tasarlanmış, %100 FSC sertifikalı huş ağacından üretilmiş eğlenceli kendin yap anahtarlık setidir. Bu sevimli set, kız çocuklarının İslami değerleri günlük hayatlarında taşımalarını sağlayan özel figürler içerir. Namaz kılan kız, Kur'an okuyan çocuk ve dua eden figürler, çocuğunuzun çantasında veya anahtarlığında her zaman yanında olacak. Boyama aktivitesi ile el becerilerini geliştirirken, İslami sembolleri öğrenen çocuğunuz kendi benzersiz anahtarlığını yaratır. Türkiye'de el yapımı, çevre dostu malzemelerle üretilmiştir.",
      "image": "images/products/anahtar-kiz.jpg",
      "badge": "Kızlar İçin",
      "category": "Anahtarlık Setleri",
      "contents": [
        "Boyanabilir Ahşap Figürler - Kız çocuğu temalı 3 adet özel tasarım (namaz, Kur'an, dua)",
        "Premium Anahtarlık Aparatı - Dayanıklı metal klips ve halka",
        "Dekoratif Boncuklar - Renkli ahşap boncuklar ve kaliteli ip",
        "Hayal Et & Boya Mum Boya Seti - Çocuk güvenliği sertifikalı 6 renk",
        "Adım Adım Yapım Rehberi - Kolay takip edilebilir resimli kılavuz"
      ],
      "benefits": [
        "İslami değerleri günlük yaşamda taşıma fırsatı sunar",
        "Namaz ve Kur'an okuma sevgisi aşılar",
        "İnce motor becerileri ve el-göz koordinasyonunu geliştirir",
        "Kendin yap aktivitesi ile özgüven kazandırır",
        "Çanta, okul çantası veya anahtarlık süsü olarak kullanılabilir",
        "Arkadaşlara hediye edilebilecek özel bir ürün"
      ],
      "targetAudience": "4-10 yaş arası kız çocukları için özel olarak tasarlanmıştır. Doğum günü hediyeleri, bayram hediyeleri, Kur'an kursu ödülleri ve özel gün sürprizleri için ideal bir seçimdir. Anaokulu ve ilkokul el becerisi aktiviteleri için de uygundur.",
      "seoKeywords": "kız çocuk anahtarlık, İslami anahtarlık kız, kendin yap anahtarlık, ahşap anahtarlık seti, namaz figürü anahtarlık, çocuk hediye seti kız"
    },
    {
      "id": "super-anahtarligim-erkek",
      "name": "Süper Anahtarlığım! (Erkek)",
      "shortName": "Anahtarlık Erkek",
      "description": "Süper Anahtarlığım Erkek Versiyonu, küçük beyefendiler için özel olarak tasarlanmış, %100 FSC sertifikalı huş ağacından üretilmiş eğlenceli kendin yap anahtarlık setidir. Bu harika set, erkek çocuklarının İslami değerleri günlük hayatlarında taşımalarını sağlayan özel figürler içerir. Namaz kılan erkek çocuk, Kabe silüeti ve cami figürleri, çocuğunuzun çantasında veya anahtarlığında her zaman yanında olacak manevi semboller. Boyama ve montaj aktivitesi ile hem eğlenen hem de öğrenen çocuğunuz, kendi özel anahtarlığını yaratmanın gururunu yaşar. Türkiye'de el yapımı, çevre dostu malzemelerle üretilmiştir.",
      "image": "images/products/anahtar-erkek.jpg",
      "badge": "Erkekler İçin",
      "category": "Anahtarlık Setleri",
      "contents": [
        "Boyanabilir Ahşap Figürler - Erkek çocuğu temalı 3 adet özel tasarım (namaz, Kabe, cami)",
        "Premium Anahtarlık Aparatı - Dayanıklı metal klips ve halka",
        "Dekoratif Boncuklar - Renkli ahşap boncuklar ve kaliteli ip",
        "Hayal Et & Boya Mum Boya Seti - Çocuk güvenliği sertifikalı 6 renk",
        "Adım Adım Yapım Rehberi - Kolay takip edilebilir resimli kılavuz"
      ],
      "benefits": [
        "İslami değerleri günlük yaşamda taşıma fırsatı sunar",
        "Cami ve namaz sevgisi aşılar",
        "İnce motor becerileri ve el-göz koordinasyonunu geliştirir",
        "Kendin yap aktivitesi ile özgüven kazandırır",
        "Çanta, okul çantası veya anahtarlık süsü olarak kullanılabilir",
        "Arkadaşlara hediye edilebilecek özel bir ürün"
      ],
      "targetAudience": "4-10 yaş arası erkek çocukları için özel olarak tasarlanmıştır. Doğum günü hediyeleri, bayram hediyeleri, Kur'an kursu ödülleri ve özel gün sürprizleri için ideal bir seçimdir. Anaokulu ve ilkokul el becerisi aktiviteleri için de uygundur.",
      "seoKeywords": "erkek çocuk anahtarlık, İslami anahtarlık erkek, kendin yap anahtarlık, ahşap anahtarlık seti, Kabe figürü anahtarlık, çocuk hediye seti erkek"
    }
  ],
  "brand": {
    "name": "CottoKits",
    "tagline": "",
    "whatsapp": "+905301266396",
    "fscNotice": "Tüm ürünlerimiz FSC sertifikalı doğal huş ahşaptan, Türkiye'de el işçiliği ile üretilmektedir. Çocuk sağlığına uygun, toksik olmayan boyalar ve malzemeler kullanılmaktadır."
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

  // Truncate description for card display
  const shortDescription = truncateText(product.description, 150);

  return `
    <article class="product-card" data-product-id="${product.id}">
      <div class="product-card__image-wrapper">
        ${badgeHtml}
        <img src="${product.image}" alt="${product.name}" class="product-card__image" loading="lazy">
      </div>
      <div class="product-card__content">
        <span class="product-card__category">${product.category}</span>
        <h3 class="product-card__title">${product.name}</h3>
        <p class="product-card__description">${shortDescription}</p>
        <div class="product-card__buttons">
          <a href="#" class="product-card__order-btn product-card__order-btn--trendyol" onclick="event.stopPropagation(); return false;">
            🛒 Sipariş Ver
          </a>
          <a href="#" class="product-card__order-btn product-card__order-btn--whatsapp" onclick="event.stopPropagation(); orderProduct('${product.id}'); return false;" title="WhatsApp ile iletişim">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
        </div>
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
        <a href="#" class="btn btn-trendyol btn-icon product-modal__order-btn" onclick="return false;">
          🛒 Trendyol'dan Sipariş Ver
        </a>
        <a href="#" class="btn btn-whatsapp-small" onclick="orderProduct('${product.id}'); return false;" title="WhatsApp ile iletişim">
          <svg class="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
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
