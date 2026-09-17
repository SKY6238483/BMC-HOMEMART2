    # NOTE — วิธีเพิ่มรายการสินค้า BMC HOMEMART

## 1) เพิ่มสินค้าใหม่ในหน้าสินค้า

ไฟล์หลักที่ต้องแก้คือ:

- `product-catalog-data.js` — เพิ่มรายการสินค้าใหม่ใน `BMC_CATALOG`
- `image/<หมวดสินค้า>/` — ใส่รูปสินค้า โดยใช้ชื่อไฟล์ภาษาอังกฤษตัวพิมพ์เล็ก ไม่มีเว้นวรรค เช่น `white-carrara-01.jpg`

ข้อมูลที่ควรมีในรายการสินค้า:

- `id` — รหัสสินค้าไม่ซ้ำกัน
- `name` — ชื่อสินค้า/ภาษาไทย
- `nameEn` — ชื่อสินค้า/ภาษาอังกฤษ
- `image` — รูปหลัก
- `gallery` — รูปเพิ่มเติม (ถ้ามี)
- `category` — ค่าหมวดที่ใช้กรองสินค้า เช่น `marble`, `granite`, `quartz`
- `categoryLabel` — ชื่อหมวดภาษาไทย
- `categoryLabelEn` — ชื่อหมวดภาษาอังกฤษ
- `subcategory` / `subcategoryEn` — หมวดย่อย
- `price` — ราคาเริ่มต้น/ราคาต่อหน่วย
- `unit` — หน่วย
- `description` — รายละเอียดภาษาไทย
- `descriptionEn` — รายละเอียดภาษาอังกฤษ

## 2) ถ้าเพิ่มสินค้าในหมวดที่มีอยู่แล้ว

โดยปกติ **ไม่ต้องแก้ `products.js` หรือ `product-detail.html`** เพราะระบบอ่านข้อมูลจาก `product-catalog-data.js` แบบอัตโนมัติ

ทำเพียง:

1. เพิ่มรูปลงใน `image/<หมวดสินค้า>/`
2. ตั้งชื่อรูปเป็นภาษาอังกฤษตัวพิมพ์เล็ก ไม่มีเว้นวรรค
3. เพิ่ม object สินค้าใน `product-catalog-data.js`
4. ตรวจ `image` และ `gallery` ให้ตรงกับชื่อไฟล์จริง

## 3) ถ้าเป็น “หมวดสินค้าใหม่” ที่ยังไม่มีในระบบกรอง

ต้องเพิ่มเพิ่มอีก 2 จุด:

- `products.html` — เพิ่มปุ่มหมวดใน `.product-category-pills`
- `products.html` — เพิ่ม `<option>` ใน `#categoryFilter`

โดย `data-value` / `value` ต้องตรงกับค่า `category` ใน `product-catalog-data.js`

## 4) ถ้าต้องการให้หมวดใหม่แสดงบนหน้าแรกด้วย

แก้ `index.html` เพิ่ม Section หรือเพิ่มปุ่ม/รายการหมวดในส่วน Material Showcase ตามโครงสร้างเดิม และตรวจลิงก์ `products.html?category=...` ให้ตรงกับ `category` ในฐานข้อมูลสินค้า

## 5) เรื่องภาษา TH / EN

ทุกสินค้าใหม่ควรใส่ข้อมูลภาษาอังกฤษแยกไว้ใน `nameEn`, `categoryLabelEn`, `subcategoryEn` และ `descriptionEn` เพื่อให้กด TH/EN แล้วกลับไปเป็นภาษาที่ถูกต้องได้ ไม่ควรใส่ข้อความภาษาไทยไว้ในฟิลด์ `*En`

## 6) เรื่องชื่อไฟล์รูป

ใช้รูปแบบมาตรฐาน:

`lowercase-english-name.jpg`

ตัวอย่าง:

`white-carrara-01.jpg`
`black-galaxy-02.jpg`
`engineered-oak-01.jpg`

หากเปลี่ยนชื่อรูปภายหลัง ต้องเปลี่ยน path ที่อ้างถึงรูปนั้นใน `product-catalog-data.js` และไฟล์ HTML/CSS/JS ที่อ้างถึงรูปเดียวกันด้วย

    
