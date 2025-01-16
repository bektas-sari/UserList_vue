# Kullanıcı Listesi Uygulaması (Vue.js) (Tamamen Vue.js yapısını öğrenme amacıyla geliştirilmiştir)

Bu proje, **Vue.js** kullanılarak geliştirilmiş bir kullanıcı listesi uygulamasıdır. Kullanıcı bilgileri bir API'den çekilmekte ve liste halinde görüntülenmektedir. Ayrıca kullanıcı detayları bir detay sayfasında gösterilmektedir.

## Özellikler

1. **Kullanıcıları Listeleme:**
   - Bir API'den (Örneğin: JSONPlaceholder) kullanıcı bilgileri çekilir ve liste halinde görüntülenir.

2. **Arama Yapma:**
   - Kullanıcı isimlerine göre filtreleme yapılabilir.

3. **Kullanıcı Detayları:**
   - Her kullanıcının detay bilgileri ayrı bir sayfada görüntülenir.

4. **Responsive Tasarım:**
   - Uygulama mobil ve masaüstü cihazları için optimize edilmiştir.

---

## Projeyi Kurma

### Gereksinimler
- Node.js (v14+)
- Vue CLI

### Kurulum
1. Proje dosyalarını klonlayın:
   ```bash
   git clone <repository-url>
   ```

2. Proje klasörününe gidin:
   ```bash
   cd user-list-vue
   ```

3. Gerekli paketleri yükleyin:
   ```bash
   npm install
   ```

4. Uygulamayı çalıştırın:
   ```bash
   npm run serve
   ```

5. Tarayıcıda aşağıdaki adresi ziyaret edin:
   ```
   http://localhost:8080
   ```

---

## Proje Yapısı

```
user-list-vue/
|— src/
   |— components/
      |— UserList.vue        # Kullanıcı listesini gösterir
      |— UserDetail.vue       # Kullanıcı detaylarını gösterir
   |— router/
      |— index.js            # Yönlendirme ayarları
   |— App.vue               # Ana bileşen
   |— main.js              # Uygulama giriş dosyası
|— package.json          # Bağımlılıklar ve betikler
```

---

## Kullanılan Teknolojiler

- **Vue.js 3**: Kullanıcı arayüzü geliştirme.
- **Vue Router**: Sayfa yönlendirmelerini sağlar.
- **CSS**: Tasarım ve responsive stil.
- **JSONPlaceholder**: API verileri.

---

## Lisans
Bu proje MIT Lisansı altında sunulmaktadır.
