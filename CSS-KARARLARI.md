## 1. Breakpoint Seçimi

- Mobil için temel tasarımı 0–639px arası varsayılan stillerle tanımladım.
- `@media (min-width: 640px)` ile **tablet** görünümünde header hizalamasını yatay yaptım ve proje kartlarını 2 sütuna çıkardım.
- `@media (min-width: 1024px)` ile **masaüstü** görünümünde padding’i artırdım ve proje kartlarını 3 sütuna çıkardım; böylece içerik geniş ekranda da dengeli dağıldı.

## 2. Layout Tercihleri

- Header ve footer içinde hizalama için **Flexbox** kullandım; nav linkleri satır içinde esnek biçimde hizalanıyor.
- Proje kartlarını göstermek için **CSS Grid** kullandım; grid-template-columns ile mobilde 1, tablette 2, masaüstünde 3 sütun düzeni kurdum.
- `gap` özelliği ile kartlar arasındaki boşlukları margin yerine grid/flex üzerinden yönettim; bu sayede hem daha okunaklı hem de daha esnek bir layout elde ettim.

## 3. Design Tokens

- `:root` içinde renk, spacing, radius ve font boyutları için CSS değişkenleri (design tokens) tanımladım.
- Renk paletini koyu arka plan, açık metin ve yeşil/amber vurgu renkleri etrafında kurdum; bu sayfa genelinde tutarlı bir görsel dil sağladı.
- Spacing skalasında `--space-1`–`--space-6` aralığını kullandım; böylece paddding/margin değerlerini rastgele piksel yerine anlamlı bir skaladan seçebiliyorum.

## 4. Fluid Typography

- Temel metin ve başlık boyutları için `clamp()` fonksiyonunu kullandım (örneğin `--font-size-h1`, `--font-size-h2`, `--font-size-h3`).
- `clamp(min, preferred, max)` yapısıyla küçük ekranlarda metnin çok büyük, büyük ekranlarda ise çok küçük kalmasını engelledim.
- Sadece `vw` ile ölçeklendirme yerine alt ve üst sınırlar belirleyerek hem okunabilirlik hem de erişilebilirlik açısından daha kontrollü bir tipografi elde ettim.


