/* BMC HOMEMART product catalog - preserved original products + Granite watermark catalog */
/*
NOTE: วิธีเพิ่มสินค้าอยู่ที่ PRODUCT_ADD_NOTE.md
BMC HOMEMART — ฐานข้อมูลสินค้า
สารบัญข้อมูล: id | name/nameEn | image | gallery | category | ราคา/หน่วย | description
หน้าที่: เป็นแหล่งข้อมูลกลางให้ Product Catalog และ Product Detail
หมายเหตุ: ห้ามลบรายการเดิมโดยไม่ตั้งใจ; หมวดไม้บันไดสามารถอ้างอิงภาพจาก ./image/solid-wood ผ่านระบบกรองสินค้า
*/
const BMC_CATALOG = [
  {
    "id": "white-carrara",
    "name": "White Carrara Marble",
    "image": "./image/carrara-white.jpg",
    "gallery": [
      "./image/carrara-white.jpg",
      "./image/carrara-white-2.jpg",
      "./image/carrara-white-3.jpg",
      "./image/carrara-white-4.jpg"
    ],
    "category": "marble",
    "categoryLabel": "หินอ่อน",
    "subcategory": "Marble",
    "price": 1850,
    "unit": "ตร.ม.",
    "description": "หินอ่อนสีขาว ลวดลายธรรมชาติ เหมาะสำหรับงานพื้นและผนัง ใช้ได้กับเคาน์เตอร์และงานตกแต่งภายในที่ต้องการความหรูหราและสะอาดตา",
    "nameEn": "White Carrara Marble",
    "categoryLabelEn": "Marble",
    "subcategoryEn": "Marble",
    "descriptionEn": "White marble with natural veining, suitable for floors, walls, countertops and elegant, clean interior applications."
  },
/*  {
    "id": "nero-marquina",
    "name": "Nero Marquina",
    "image": "./image/marquina-nero-2.jpg",
    "gallery": [
      "./image/marquina-nero.jpg", 
      "./image/marquina-nero-2.jpg",
      "./image/marquina-nero-3.jpg",
      "./image/marquina-nero-4.jpg"
    ],
    "category": "marble",
    "categoryLabel": "หินอ่อน",
    "subcategory": "Marble",
    "price": 2450,
    "unit": "ตร.ม.",
    "description": "หินอ่อนสีดำพร้อมลายเส้นสีขาว ให้ความรู้สึกหรูหราและโดดเด่น เหมาะสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง",
    "nameEn": "Nero Marquina",
    "categoryLabelEn": "Marble",
    "subcategoryEn": "Marble",
    "descriptionEn": "Black marble with white veining, creating a luxurious and distinctive look for floors, walls, countertops and decorative applications."
  },*/
  {
    "id": "black-galaxy",
    "name": "Black Galaxy Granite",
    "image": "./image/black-galaxy-granite.jpg",
    "gallery": [
      "./image/black-galaxy-granite.jpg",
      "./image/black-galaxy-granite-2.jpg",
      "./image/black-galaxy-granite-3.jpg",
      "./image/black-galaxy-granite-4.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite",
    "price": 1950,
    "unit": "ตร.ม.",
    "description": "หินแกรนิตสีดำ มีลวดลายประกายธรรมชาติ แข็งแรงและทนทาน เหมาะสำหรับเคาน์เตอร์ พื้น ผนัง และงานตกแต่ง",
    "nameEn": "Black Galaxy Granite",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite",
    "descriptionEn": "Black granite with natural sparkling patterns, strong and durable for countertops, floors, walls and decorative applications."
  },
  {
    "id": "oak-engineered",
    "name": "Oak Engineered Flooring",
    "image": "./image/oak-engineer.jpg",
    "gallery": [
      "./image/oak-engineer.jpg",
      "./image/oak-engineer-2.jpg",
      "./image/oak-engineer-3.jpg",
      "./image/oak-engineer-4.jpg"
    ],
    "category": "engineered",
    "categoryLabel": "ไม้ Engineered",
    "subcategory": "ไม้ Engineered",
    "price": 1290,
    "unit": "ตร.ม.",
    "description": "พื้นไม้ Engineered โทนสีธรรมชาติ ให้ความรู้สึกอบอุ่นและทันสมัย เหมาะสำหรับบ้านพักอาศัยและงานตกแต่งภายใน",
    "nameEn": "Oak Engineered Flooring",
    "categoryLabelEn": "Engineered Wood",
    "subcategoryEn": "Engineered Wood",
    "descriptionEn": "Engineered wood combines the beauty of real wood with a multi-layer structure, ideal for interior flooring."
  },
  /*{
    "id": "wood-pvc",
    "name": "Wood PVC Wall",
    "image": "./image/pvc-wall.jpeg",
    "gallery": [
      "./image/pvc-wall.jpeg",
      "./image/pvc-wall-2.jpg",
      "./image/pvc-wall-3.jpg",
      "./image/pvc-wall-4.jpg"
    ],
    "category": "pvc",
    "categoryLabel": "ไม้ PVC",
    "subcategory": "ไม้ PVC",
    "price": 590,
    "unit": "ตร.ม.",
    "description": "วัสดุตกแต่งผนังลายไม้ PVC ดูแลรักษาง่าย น้ำหนักเบา เหมาะสำหรับงานตกแต่งผนังและพื้นที่ใช้งานหลากหลาย",
    "nameEn": "Wood PVC Wall",
    "categoryLabelEn": "PVC Wood",
    "subcategoryEn": "PVC Wood",
    "descriptionEn": "Lightweight, easy-to-maintain PVC wood-grain material for wall decoration and a variety of applications."
  },
  {
    "id": "golden-portoro",
    "name": "Golden Portoro Marble",
    "image": "./image/golden-portoro-01.jpg",
    "gallery": [
      "./image/golden-portoro-01.jpg",
      "./image/golden-portoro-02.jpg",
      "./image/golden-portoro-03.jpg"
    ],
    "category": "marble",
    "categoryLabel": "หินอ่อน",
    "subcategory": "Marble",
    "price": 1850,
    "unit": "ตร.ม.",
    "description": "หินอ่อนเทียมพอร์ทโทโร โทนสีดำ มีลายสีน้ำตาลทองสลับขาว ผิวหน้ามัน เหมาะสำหรับท็อปเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน",
    "nameEn": "Golden Portoro Marble",
    "categoryLabelEn": "Marble",
    "subcategoryEn": "Marble",
    "descriptionEn": "Artificial Portoro marble in a black tone with brown-gold and white veining and a polished surface, suitable for countertops, floors, walls and interiors."
  },*/
  {
    "id": "catalog-1",
    "name": "CQ1902",
    "image": "./image/quartz/cq1902.jpg",
    "gallery": [
      "./image/quartz/cq1902.jpg",
      "./image/quartz/cq1532.jpg",
      "./image/quartz/cq1540.jpg",
      "./image/quartz/cq118.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ1902",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-2",
    "name": "CQ1532",
    "image": "./image/quartz/cq1532.jpg",
    "gallery": [
      "./image/quartz/cq1532.jpg",
      "./image/quartz/cq1540.jpg",
      "./image/quartz/cq118.jpg",
      "./image/quartz/cq7006.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ1532",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-3",
    "name": "CQ1540",
    "image": "./image/quartz/cq1540.jpg",
    "gallery": [
      "./image/quartz/cq1540.jpg",
      "./image/quartz/cq118.jpg",
      "./image/quartz/cq7006.jpg",
      "./image/quartz/cq4003.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ1540",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-4",
    "name": "CQ118",
    "image": "./image/quartz/cq118.jpg",
    "gallery": [
      "./image/quartz/cq118.jpg",
      "./image/quartz/cq7006.jpg",
      "./image/quartz/cq4003.jpg",
      "./image/quartz/cq7007.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ118",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-5",
    "name": "CQ7006",
    "image": "./image/quartz/cq7006.jpg",
    "gallery": [
      "./image/quartz/cq7006.jpg",
      "./image/quartz/cq4003.jpg",
      "./image/quartz/cq7007.jpg",
      "./image/quartz/cq4018.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ7006",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-6",
    "name": "CQ4003",
    "image": "./image/quartz/cq4003.jpg",
    "gallery": [
      "./image/quartz/cq4003.jpg",
      "./image/quartz/cq7007.jpg",
      "./image/quartz/cq4018.jpg",
      "./image/quartz/cq0001.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ4003",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-7",
    "name": "CQ7007",
    "image": "./image/quartz/cq7007.jpg",
    "gallery": [
      "./image/quartz/cq7007.jpg",
      "./image/quartz/cq4018.jpg",
      "./image/quartz/cq0001.jpg",
      "./image/quartz/cq4004.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ7007",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-8",
    "name": "CQ4018",
    "image": "./image/quartz/cq4018.jpg",
    "gallery": [
      "./image/quartz/cq4018.jpg",
      "./image/quartz/cq0001.jpg",
      "./image/quartz/cq4004.jpg",
      "./image/quartz/cq4023.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ4018",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-9",
    "name": "CQ0001",
    "image": "./image/quartz/cq0001.jpg",
    "gallery": [
      "./image/quartz/cq0001.jpg",
      "./image/quartz/cq4004.jpg",
      "./image/quartz/cq4023.jpg",
      "./image/quartz/cq4019.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ0001",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-10",
    "name": "CQ4004",
    "image": "./image/quartz/cq4004.jpg",
    "gallery": [
      "./image/quartz/cq4004.jpg",
      "./image/quartz/cq4023.jpg",
      "./image/quartz/cq4019.jpg",
      "./image/quartz/cq4001-pure-white.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ4004",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-11",
    "name": "CQ4023",
    "image": "./image/quartz/cq4023.jpg",
    "gallery": [
      "./image/quartz/cq4023.jpg",
      "./image/quartz/cq4019.jpg",
      "./image/quartz/cq4001-pure-white.jpg",
      "./image/quartz/cq122.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ4023",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-12",
    "name": "CQ4019",
    "image": "./image/quartz/cq4019.jpg",
    "gallery": [
      "./image/quartz/cq4019.jpg",
      "./image/quartz/cq4001-pure-white.jpg",
      "./image/quartz/cq122.jpg",
      "./image/quartz/cq1219.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ4019",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-13",
    "name": "CQ4001 pure white",
    "image": "./image/quartz/cq4001-pure-white.jpg",
    "gallery": [
      "./image/quartz/cq4001-pure-white.jpg",
      "./image/quartz/cq122.jpg",
      "./image/quartz/cq1219.jpg",
      "./image/quartz/cq4008.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ4001 pure white",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-14",
    "name": "CQ122",
    "image": "./image/quartz/cq122.jpg",
    "gallery": [
      "./image/quartz/cq122.jpg",
      "./image/quartz/cq1219.jpg",
      "./image/quartz/cq4008.jpg",
      "./image/quartz/cq1538.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ122",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-15",
    "name": "CQ1219",
    "image": "./image/quartz/cq1219.jpg",
    "gallery": [
      "./image/quartz/cq1219.jpg",
      "./image/quartz/cq4008.jpg",
      "./image/quartz/cq1538.jpg",
      "./image/quartz/cq4021.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ1219",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-16",
    "name": "CQ4008",
    "image": "./image/quartz/cq4008.jpg",
    "gallery": [
      "./image/quartz/cq4008.jpg",
      "./image/quartz/cq1538.jpg",
      "./image/quartz/cq4021.jpg",
      "./image/quartz/cq1504.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ4008",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-17",
    "name": "CQ1538",
    "image": "./image/quartz/cq1538.jpg",
    "gallery": [
      "./image/quartz/cq1538.jpg",
      "./image/quartz/cq4021.jpg",
      "./image/quartz/cq1504.jpg",
      "./image/quartz/cq1697.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ1538",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-18",
    "name": "CQ4021",
    "image": "./image/quartz/cq4021.jpg",
    "gallery": [
      "./image/quartz/cq4021.jpg",
      "./image/quartz/cq1504.jpg",
      "./image/quartz/cq1697.jpg",
      "./image/quartz/cq7008.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ4021",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-19",
    "name": "CQ1504",
    "image": "./image/quartz/cq1504.jpg",
    "gallery": [
      "./image/quartz/cq1504.jpg",
      "./image/quartz/cq1697.jpg",
      "./image/quartz/cq7008.jpg",
      "./image/quartz/cq4028.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ1504",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-20",
    "name": "CQ1697",
    "image": "./image/quartz/cq1697.jpg",
    "gallery": [
      "./image/quartz/cq1697.jpg",
      "./image/quartz/cq7008.jpg",
      "./image/quartz/cq4028.jpg",
      "./image/quartz/cq1612.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ1697",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-21",
    "name": "CQ7008",
    "image": "./image/quartz/cq7008.jpg",
    "gallery": [
      "./image/quartz/cq7008.jpg",
      "./image/quartz/cq4028.jpg",
      "./image/quartz/cq1612.jpg",
      "./image/quartz/cq4007.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ7008",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-22",
    "name": "CQ4028",
    "image": "./image/quartz/cq4028.jpg",
    "gallery": [
      "./image/quartz/cq4028.jpg",
      "./image/quartz/cq1612.jpg",
      "./image/quartz/cq4007.jpg",
      "./image/quartz/cq4024.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ4028",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-23",
    "name": "CQ1612",
    "image": "./image/quartz/cq1612.jpg",
    "gallery": [
      "./image/quartz/cq1612.jpg",
      "./image/quartz/cq4007.jpg",
      "./image/quartz/cq4024.jpg",
      "./image/quartz/cq7002.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ1612",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-24",
    "name": "CQ4007",
    "image": "./image/quartz/cq4007.jpg",
    "gallery": [
      "./image/quartz/cq4007.jpg",
      "./image/quartz/cq4024.jpg",
      "./image/quartz/cq7002.jpg",
      "./image/quartz/cq4010.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ4007",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-25",
    "name": "CQ4024",
    "image": "./image/quartz/cq4024.jpg",
    "gallery": [
      "./image/quartz/cq4024.jpg",
      "./image/quartz/cq7002.jpg",
      "./image/quartz/cq4010.jpg",
      "./image/quartz/cq4020.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ4024",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-26",
    "name": "CQ7002",
    "image": "./image/quartz/cq7002.jpg",
    "gallery": [
      "./image/quartz/cq7002.jpg",
      "./image/quartz/cq4010.jpg",
      "./image/quartz/cq4020.jpg",
      "./image/quartz/cq123.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ7002",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-27",
    "name": "CQ4010",
    "image": "./image/quartz/cq4010.jpg",
    "gallery": [
      "./image/quartz/cq4010.jpg",
      "./image/quartz/cq4020.jpg",
      "./image/quartz/cq123.jpg",
      "./image/quartz/cq1551.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ4010",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-28",
    "name": "CQ4020",
    "image": "./image/quartz/cq4020.jpg",
    "gallery": [
      "./image/quartz/cq4020.jpg",
      "./image/quartz/cq123.jpg",
      "./image/quartz/cq1551.jpg",
      "./image/quartz/cq222.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ4020",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-29",
    "name": "CQ123",
    "image": "./image/quartz/cq123.jpg",
    "gallery": [
      "./image/quartz/cq123.jpg",
      "./image/quartz/cq1551.jpg",
      "./image/quartz/cq222.jpg",
      "./image/quartz/cq7013.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ123",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-30",
    "name": "CQ1551",
    "image": "./image/quartz/cq1551.jpg",
    "gallery": [
      "./image/quartz/cq1551.jpg",
      "./image/quartz/cq222.jpg",
      "./image/quartz/cq7013.jpg",
      "./image/quartz/cq1682.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ1551",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-31",
    "name": "CQ222",
    "image": "./image/quartz/cq222.jpg",
    "gallery": [
      "./image/quartz/cq222.jpg",
      "./image/quartz/cq7013.jpg",
      "./image/quartz/cq1682.jpg",
      "./image/quartz/cq7005.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ222",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-32",
    "name": "CQ7013",
    "image": "./image/quartz/cq7013.jpg",
    "gallery": [
      "./image/quartz/cq7013.jpg",
      "./image/quartz/cq1682.jpg",
      "./image/quartz/cq7005.jpg",
      "./image/quartz/cq7001.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ7013",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-33",
    "name": "CQ1682",
    "image": "./image/quartz/cq1682.jpg",
    "gallery": [
      "./image/quartz/cq1682.jpg",
      "./image/quartz/cq7005.jpg",
      "./image/quartz/cq7001.jpg",
      "./image/quartz/cq1195.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ1682",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-34",
    "name": "CQ7005",
    "image": "./image/quartz/cq7005.jpg",
    "gallery": [
      "./image/quartz/cq7005.jpg",
      "./image/quartz/cq7001.jpg",
      "./image/quartz/cq1195.jpg",
      "./image/quartz/cq7010.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ7005",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-35",
    "name": "CQ7001",
    "image": "./image/quartz/cq7001.jpg",
    "gallery": [
      "./image/quartz/cq7001.jpg",
      "./image/quartz/cq1195.jpg",
      "./image/quartz/cq7010.jpg",
      "./image/quartz/cq1531.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ7001",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-36",
    "name": "CQ1195",
    "image": "./image/quartz/cq1195.jpg",
    "gallery": [
      "./image/quartz/cq1195.jpg",
      "./image/quartz/cq7010.jpg",
      "./image/quartz/cq1531.jpg",
      "./image/quartz/cq7011.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ1195",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-37",
    "name": "CQ7010",
    "image": "./image/quartz/cq7010.jpg",
    "gallery": [
      "./image/quartz/cq7010.jpg",
      "./image/quartz/cq1531.jpg",
      "./image/quartz/cq7011.jpg",
      "./image/quartz/cq1478.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ7010",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-38",
    "name": "CQ1531",
    "image": "./image/quartz/cq1531.jpg",
    "gallery": [
      "./image/quartz/cq1531.jpg",
      "./image/quartz/cq7011.jpg",
      "./image/quartz/cq1478.jpg",
      "./image/quartz/cq1560.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ1531",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-39",
    "name": "CQ7011",
    "image": "./image/quartz/cq7011.jpg",
    "gallery": [
      "./image/quartz/cq7011.jpg",
      "./image/quartz/cq1478.jpg",
      "./image/quartz/cq1560.jpg",
      "./image/quartz/cq1703.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ7011",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-40",
    "name": "CQ1478",
    "image": "./image/quartz/cq1478.jpg",
    "gallery": [
      "./image/quartz/cq1478.jpg",
      "./image/quartz/cq1560.jpg",
      "./image/quartz/cq1703.jpg",
      "./image/quartz/cq1565.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ1478",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-41",
    "name": "CQ1560",
    "image": "./image/quartz/cq1560.jpg",
    "gallery": [
      "./image/quartz/cq1560.jpg",
      "./image/quartz/cq1703.jpg",
      "./image/quartz/cq1565.jpg",
      "./image/quartz/cq7016.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ1560",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-42",
    "name": "CQ1703",
    "image": "./image/quartz/cq1703.jpg",
    "gallery": [
      "./image/quartz/cq1703.jpg",
      "./image/quartz/cq1565.jpg",
      "./image/quartz/cq7016.jpg",
      "./image/quartz/cq1196.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ1703",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-43",
    "name": "CQ1565",
    "image": "./image/quartz/cq1565.jpg",
    "gallery": [
      "./image/quartz/cq1565.jpg",
      "./image/quartz/cq7016.jpg",
      "./image/quartz/cq1196.jpg",
      "./image/quartz/cq7004.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ1565",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-44",
    "name": "CQ7016",
    "image": "./image/quartz/cq7016.jpg",
    "gallery": [
      "./image/quartz/cq7016.jpg",
      "./image/quartz/cq1196.jpg",
      "./image/quartz/cq7004.jpg",
      "./image/quartz/cq7012.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ7016",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-45",
    "name": "CQ1196",
    "image": "./image/quartz/cq1196.jpg",
    "gallery": [
      "./image/quartz/cq1196.jpg",
      "./image/quartz/cq7004.jpg",
      "./image/quartz/cq7012.jpg",
      "./image/quartz/cq4005.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ1196",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-46",
    "name": "CQ7004",
    "image": "./image/quartz/cq7004.jpg",
    "gallery": [
      "./image/quartz/cq7004.jpg",
      "./image/quartz/cq7012.jpg",
      "./image/quartz/cq4005.jpg",
      "./image/quartz/cq1216.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ7004",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-47",
    "name": "CQ7012",
    "image": "./image/quartz/cq7012.jpg",
    "gallery": [
      "./image/quartz/cq7012.jpg",
      "./image/quartz/cq4005.jpg",
      "./image/quartz/cq1216.jpg",
      "./image/quartz/cq7009.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ7012",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-48",
    "name": "CQ4005",
    "image": "./image/quartz/cq4005.jpg",
    "gallery": [
      "./image/quartz/cq4005.jpg",
      "./image/quartz/cq1216.jpg",
      "./image/quartz/cq7009.jpg",
      "./image/quartz/cq4002.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ4005",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-49",
    "name": "CQ1216",
    "image": "./image/quartz/cq1216.jpg",
    "gallery": [
      "./image/quartz/cq1216.jpg",
      "./image/quartz/cq7009.jpg",
      "./image/quartz/cq4002.jpg",
      "./image/quartz/cq4022.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ1216",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-50",
    "name": "CQ7009",
    "image": "./image/quartz/cq7009.jpg",
    "gallery": [
      "./image/quartz/cq7009.jpg",
      "./image/quartz/cq4002.jpg",
      "./image/quartz/cq4022.jpg",
      "./image/quartz/cq1214.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ7009",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-51",
    "name": "CQ4002",
    "image": "./image/quartz/cq4002.jpg",
    "gallery": [
      "./image/quartz/cq4002.jpg",
      "./image/quartz/cq4022.jpg",
      "./image/quartz/cq1214.jpg",
      "./image/quartz/cq7014.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ4002",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-52",
    "name": "CQ4022",
    "image": "./image/quartz/cq4022.jpg",
    "gallery": [
      "./image/quartz/cq4022.jpg",
      "./image/quartz/cq1214.jpg",
      "./image/quartz/cq7014.jpg",
      "./image/quartz/cq7015.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ4022",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-53",
    "name": "CQ1214",
    "image": "./image/quartz/cq1214.jpg",
    "gallery": [
      "./image/quartz/cq1214.jpg",
      "./image/quartz/cq7014.jpg",
      "./image/quartz/cq7015.jpg",
      "./image/quartz/cq1529.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ1214",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-54",
    "name": "CQ7014",
    "image": "./image/quartz/cq7014.jpg",
    "gallery": [
      "./image/quartz/cq7014.jpg",
      "./image/quartz/cq7015.jpg",
      "./image/quartz/cq1529.jpg",
      "./image/quartz/cq7003.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ7014",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-55",
    "name": "CQ7015",
    "image": "./image/quartz/cq7015.jpg",
    "gallery": [
      "./image/quartz/cq7015.jpg",
      "./image/quartz/cq1529.jpg",
      "./image/quartz/cq7003.jpg",
      "./image/quartz/cq4006.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ7015",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-56",
    "name": "CQ1529",
    "image": "./image/quartz/cq1529.jpg",
    "gallery": [
      "./image/quartz/cq1529.jpg",
      "./image/quartz/cq7003.jpg",
      "./image/quartz/cq4006.jpg",
      "./image/quartz/cq1694.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ1529",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-57",
    "name": "CQ7003",
    "image": "./image/quartz/cq7003.jpg",
    "gallery": [
      "./image/quartz/cq7003.jpg",
      "./image/quartz/cq4006.jpg",
      "./image/quartz/cq1694.jpg",
      "./image/quartz/cq4026.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ7003",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-58",
    "name": "CQ4006",
    "image": "./image/quartz/cq4006.jpg",
    "gallery": [
      "./image/quartz/cq4006.jpg",
      "./image/quartz/cq1694.jpg",
      "./image/quartz/cq4026.jpg",
      "./image/quartz/cq4009.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ4006",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-59",
    "name": "CQ1694",
    "image": "./image/quartz/cq1694.jpg",
    "gallery": [
      "./image/quartz/cq1694.jpg",
      "./image/quartz/cq4026.jpg",
      "./image/quartz/cq4009.jpg",
      "./image/quartz/cq1674.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ1694",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-60",
    "name": "CQ4026",
    "image": "./image/quartz/cq4026.jpg",
    "gallery": [
      "./image/quartz/cq4026.jpg",
      "./image/quartz/cq4009.jpg",
      "./image/quartz/cq1674.jpg",
      "./image/quartz/cq1547.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ4026",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-61",
    "name": "CQ4009",
    "image": "./image/quartz/cq4009.jpg",
    "gallery": [
      "./image/quartz/cq4009.jpg",
      "./image/quartz/cq1674.jpg",
      "./image/quartz/cq1547.jpg",
      "./image/quartz/cq1525.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ4009",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-62",
    "name": "CQ1674",
    "image": "./image/quartz/cq1674.jpg",
    "gallery": [
      "./image/quartz/cq1674.jpg",
      "./image/quartz/cq1547.jpg",
      "./image/quartz/cq1525.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ1674",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-63",
    "name": "CQ1547",
    "image": "./image/quartz/cq1547.jpg",
    "gallery": [
      "./image/quartz/cq1547.jpg",
      "./image/quartz/cq1525.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ1547",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-64",
    "name": "CQ1525",
    "image": "./image/quartz/cq1525.jpg",
    "gallery": [
      "./image/quartz/cq1902.jpg",
      "./image/quartz/cq1532.jpg",
      "./image/quartz/cq1540.jpg",
      "./image/quartz/cq118.jpg"
    ],
    "category": "quartz",
    "categoryLabel": "หินควอตซ์",
    "subcategory": "Quartz",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินควอตซ์/หินสังเคราะห์สำหรับงานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน มีพื้นผิวสม่ำเสมอและดูแลรักษาง่าย",
    "nameEn": "CQ1525",
    "categoryLabelEn": "Quartz",
    "subcategoryEn": "Quartz",
    "descriptionEn": "Quartz/engineered stone for countertops, floors, walls and interiors, with a consistent surface that is easy to maintain."
  },
  {
    "id": "catalog-65",
    "name": "M-AS018-1",
    "image": "./image/mosaic-original/m-as018-1.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS018-1",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-66",
    "name": "M-AS003-3",
    "image": "./image/mosaic-original/m-as003-3.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS003-3",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-67",
    "name": "M-AS010-1",
    "image": "./image/mosaic-original/m-as010-1.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS010-1",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-68",
    "name": "M-AS032-1",
    "image": "./image/mosaic-original/m-as032-1.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS032-1",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-69",
    "name": "M-AS067-4",
    "image": "./image/mosaic-original/m-as067-4.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS067-4",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-70",
    "name": "M-AS067-7",
    "image": "./image/mosaic-original/m-as067-7.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS067-7",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-71",
    "name": "M-AS007-2",
    "image": "./image/mosaic-original/m-as007-2.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS007-2",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-72",
    "name": "M-AS014-1",
    "image": "./image/mosaic-original/m-as014-1.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS014-1",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-73",
    "name": "M-AS067-1",
    "image": "./image/mosaic-original/m-as067-1.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS067-1",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-74",
    "name": "M-AS002-1",
    "image": "./image/mosaic-original/m-as002-1.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS002-1",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-75",
    "name": "M-AS023-5",
    "image": "./image/mosaic-original/m-as023-5.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS023-5",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-76",
    "name": "M-AS002-4",
    "image": "./image/mosaic-original/m-as002-4.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS002-4",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-77",
    "name": "M-AS071-1",
    "image": "./image/mosaic-original/m-as071-1.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS071-1",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-78",
    "name": "M-AS002-5",
    "image": "./image/mosaic-original/m-as002-5.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS002-5",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-79",
    "name": "M-AG010-5",
    "image": "./image/mosaic-original/m-ag010-5.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AG010-5",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-80",
    "name": "M-AS008-3",
    "image": "./image/mosaic-original/m-as008-3.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS008-3",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-81",
    "name": "M-AS069-1",
    "image": "./image/mosaic-original/m-as069-1.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS069-1",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-82",
    "name": "M-AS004-2",
    "image": "./image/mosaic-original/m-as004-2.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS004-2",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-83",
    "name": "M-AS035-2",
    "image": "./image/mosaic-original/m-as035-2.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS035-2",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-84",
    "name": "M-AG011-2",
    "image": "./image/mosaic-original/m-ag011-2.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AG011-2",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-85",
    "name": "M-AS023-3",
    "image": "./image/mosaic-original/m-as023-3.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS023-3",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-86",
    "name": "M-AG012-6",
    "image": "./image/mosaic-original/m-ag012-6.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AG012-6",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-87",
    "name": "M-AS071-2",
    "image": "./image/mosaic-original/m-as071-2.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS071-2",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-88",
    "name": "M-AS067-3",
    "image": "./image/mosaic-original/m-as067-3.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS067-3",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-89",
    "name": "M-AS043-1",
    "image": "./image/mosaic-original/m-as043-1.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS043-1",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-90",
    "name": "M-AS020-3",
    "image": "./image/mosaic-original/m-as020-3.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS020-3",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-91",
    "name": "M-AS085-1",
    "image": "./image/mosaic-original/m-as085-1.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS085-1",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-92",
    "name": "M-AG011-3",
    "image": "./image/mosaic-original/m-ag011-3.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AG011-3",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-93",
    "name": "M-AS050-3",
    "image": "./image/mosaic-original/m-as050-3.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS050-3",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-94",
    "name": "M-AS028-2",
    "image": "./image/mosaic-original/m-as028-2.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS028-2",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-95",
    "name": "M-AS038-1",
    "image": "./image/mosaic-original/m-as038-1.jpg",
    "gallery": [
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg",
      "./image/mosaic-original/m-as030-1.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS038-1",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-96",
    "name": "M-AG012-4",
    "image": "./image/mosaic-original/m-ag012-4.jpg",
    "gallery": [
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg",
      "./image/mosaic-original/m-as030-1.jpg",
      "./image/mosaic-original/m-as070-3.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AG012-4",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-97",
    "name": "M-AS044-2",
    "image": "./image/mosaic-original/m-as044-2.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS044-2",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-98",
    "name": "M-AS030-1",
    "image": "./image/mosaic-original/m-as030-1.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS030-1",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-99",
    "name": "M-AS070-3",
    "image": "./image/mosaic-original/m-as070-3.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS070-3",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-100",
    "name": "M-AS067-6",
    "image": "./image/mosaic-original/m-as067-6.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS067-6",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-101",
    "name": "M-AS024-1",
    "image": "./image/mosaic-original/m-as024-1.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS024-1",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-102",
    "name": "M-AS068-1",
    "image": "./image/mosaic-original/m-as068-1.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS068-1",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-103",
    "name": "M-AS020-2",
    "image": "./image/mosaic-original/m-as020-2.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS020-2",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-104",
    "name": "M-AS026-1",
    "image": "./image/mosaic-original/m-as026-1.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS026-1",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-105",
    "name": "M-AS034-1",
    "image": "./image/mosaic-original/m-as034-1.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS034-1",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-106",
    "name": "M-AS003-4",
    "image": "./image/mosaic-original/m-as003-4.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS003-4",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-107",
    "name": "M-AS023-4",
    "image": "./image/mosaic-original/m-as023-4.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS023-4",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-108",
    "name": "M-AS091-1",
    "image": "./image/mosaic-original/m-as091-1.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS091-1",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-109",
    "name": "M-AS045-1",
    "image": "./image/mosaic-original/m-as045-1.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS045-1",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-110",
    "name": "M-AS008-7",
    "image": "./image/mosaic-original/m-as008-7.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS008-7",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-111",
    "name": "M-AS016-1",
    "image": "./image/mosaic-original/m-as016-1.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS016-1",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-112",
    "name": "M-AS004-3",
    "image": "./image/mosaic-original/m-as004-3.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS004-3",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-113",
    "name": "M-AS044-1",
    "image": "./image/mosaic-original/m-as044-1.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS044-1",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-114",
    "name": "M-AS061-1",
    "image": "./image/mosaic-original/m-as061-1.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS061-1",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-115",
    "name": "M-AM023-1",
    "image": "./image/mosaic-original/m-am023-1.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AM023-1",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-116",
    "name": "M-AS0223-3",
    "image": "./image/mosaic-original/m-as0223-3.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS0223-3",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-117",
    "name": "M-AS086-1",
    "image": "./image/mosaic-original/m-as086-1.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS086-1",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-118",
    "name": "M-AS007-1",
    "image": "./image/mosaic-original/m-as007-1.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS007-1",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-119",
    "name": "M-AG012-1",
    "image": "./image/mosaic-original/m-ag012-1.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AG012-1",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-120",
    "name": "M-AS041-2",
    "image": "./image/mosaic-original/m-as041-2.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS041-2",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-121",
    "name": "M-AG010-3",
    "image": "./image/mosaic-original/m-ag010-3.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AG010-3",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-122",
    "name": "M-AS012-1",
    "image": "./image/mosaic-original/m-as012-1.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS012-1",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-123",
    "name": "M-AS088-1",
    "image": "./image/mosaic-original/m-as088-1.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS088-1",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-124",
    "name": "M-AS008-5",
    "image": "./image/mosaic-original/m-as008-5.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS008-5",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-125",
    "name": "M-AS084-1",
    "image": "./image/mosaic-original/m-as084-1.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS084-1",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-126",
    "name": "M-AS008-4",
    "image": "./image/mosaic-original/m-as008-4.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS008-4",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-127",
    "name": "M-AS015-1",
    "image": "./image/mosaic-original/m-as015-1.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS015-1",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-128",
    "name": "M-AS008-1",
    "image": "./image/mosaic-original/m-as008-1.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS008-1",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-129",
    "name": "M-AS060-3",
    "image": "./image/mosaic-original/m-as060-3.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS060-3",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-130",
    "name": "M-AS025-1",
    "image": "./image/mosaic-original/m-as025-1.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS025-1",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-131",
    "name": "M-AS068-3",
    "image": "./image/mosaic-original/m-as068-3.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS068-3",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-132",
    "name": "M-AS017-1",
    "image": "./image/mosaic-original/m-as017-1.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS017-1",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-133",
    "name": "M-AS021-2",
    "image": "./image/mosaic-original/m-as021-2.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS021-2",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-134",
    "name": "M-AG010-6",
    "image": "./image/mosaic-original/m-ag010-6.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AG010-6",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-135",
    "name": "M-AS047-2",
    "image": "./image/mosaic-original/m-as047-2.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS047-2",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-136",
    "name": "M-AS066-1",
    "image": "./image/mosaic-original/m-as066-1.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS066-1",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-137",
    "name": "M-AS002-2",
    "image": "./image/mosaic-original/m-as002-2.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS002-2",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-138",
    "name": "M-AS008-2",
    "image": "./image/mosaic-original/m-as008-2.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS008-2",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-139",
    "name": "M-AS073-4",
    "image": "./image/mosaic-original/m-as073-4.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS073-4",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-140",
    "name": "M-AS036-1",
    "image": "./image/mosaic-original/m-as036-1.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS036-1",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-141",
    "name": "M-AS003-1",
    "image": "./image/mosaic-original/m-as003-1.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS003-1",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-142",
    "name": "M-AS002-3",
    "image": "./image/mosaic-original/m-as002-3.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS002-3",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-143",
    "name": "M-AS004-1",
    "image": "./image/mosaic-original/m-as004-1.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS004-1",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-144",
    "name": "M-AG010-2",
    "image": "./image/mosaic-original/m-ag010-2.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AG010-2",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-145",
    "name": "M-AS060-1",
    "image": "./image/mosaic-original/m-as060-1.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS060-1",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-146",
    "name": "M-AG010-1",
    "image": "./image/mosaic-original/m-ag010-1.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AG010-1",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-147",
    "name": "M-AS064-1",
    "image": "./image/mosaic-original/m-as064-1.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS064-1",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-148",
    "name": "M-AS002-6",
    "image": "./image/mosaic-original/m-as002-6.jpg",
    "gallery": [
      "./image/mosaic-original/m-as028-2.jpg",
      "./image/mosaic-original/m-as038-1.jpg",
      "./image/mosaic-original/m-ag012-4.jpg",
      "./image/mosaic-original/m-as044-2.jpg"
    ],
    "category": "mosaic",
    "categoryLabel": "โมเสค",
    "subcategory": "Mosaic ต้นฉบับ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "โมเสคสำหรับเพิ่มรายละเอียดและสร้างจุดเด่นให้กับผนัง พื้น ห้องน้ำ และพื้นที่ตกแต่ง",
    "nameEn": "M-AS002-6",
    "categoryLabelEn": "Mosaic",
    "subcategoryEn": "Mosaic",
    "descriptionEn": "Mosaic for walls, floors and decorative applications, adding detail and character to spaces."
  },
  {
    "id": "catalog-149",
    "name": "TG027 Blue Pearl-บูลเพิลร์-",
    "image": "./image/granite-watermark/tg027-blue-pearl.jpg",
    "gallery": [
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินแกรนิตที่มีความแข็งแรงและทนทาน เหมาะสำหรับเคาน์เตอร์ พื้น ผนัง และงานโครงการ",
    "nameEn": "TG027 Blue Pearl",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite Watermark",
    "descriptionEn": "Strong and durable granite suitable for countertops, floors, walls and project applications."
  },
  {
    "id": "catalog-150",
    "name": "G562 Orange Bloom-ออเรนจ์บูม",
    "image": "./image/granite-watermark/g562-orange-bloom.jpg",
    "gallery": [
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินแกรนิตที่มีความแข็งแรงและทนทาน เหมาะสำหรับเคาน์เตอร์ พื้น ผนัง และงานโครงการ",
    "nameEn": "G562 Orange Bloom",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite Watermark",
    "descriptionEn": "Strong and durable granite suitable for countertops, floors, walls and project applications."
  },
  {
    "id": "catalog-151",
    "name": "GL500 Light Black-ไรท์แบล็ค",
    "image": "./image/granite-watermark/gl500-light-black.jpg",
    "gallery": [
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินแกรนิตที่มีความแข็งแรงและทนทาน เหมาะสำหรับเคาน์เตอร์ พื้น ผนัง และงานโครงการ",
    "nameEn": "GL500 Light Black",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite Watermark",
    "descriptionEn": "Strong and durable granite suitable for countertops, floors, walls and project applications."
  },
  {
    "id": "catalog-152",
    "name": "G602 White Lotus-ไวท์โลตัส",
    "image": "./image/granite-watermark/g602-white-lotus.jpg",
    "gallery": [
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินแกรนิตที่มีความแข็งแรงและทนทาน เหมาะสำหรับเคาน์เตอร์ พื้น ผนัง และงานโครงการ",
    "nameEn": "G602 White Lotus",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite Watermark",
    "descriptionEn": "Strong and durable granite suitable for countertops, floors, walls and project applications."
  },
  {
    "id": "catalog-153",
    "name": "G912 Shanxi Black-ดำซาซี",
    "image": "./image/granite-watermark/g912-shanxi-black.jpg",
    "gallery": [
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินแกรนิตที่มีความแข็งแรงและทนทาน เหมาะสำหรับเคาน์เตอร์ พื้น ผนัง และงานโครงการ",
    "nameEn": "G912 Shanxi Black",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite Watermark",
    "descriptionEn": "Strong and durable granite suitable for countertops, floors, walls and project applications."
  },
  {
    "id": "catalog-154",
    "name": "G654 Black Dot-ดำลายจุด",
    "image": "./image/granite-watermark/g654-black-dot.jpg",
    "gallery": [
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินแกรนิตที่มีความแข็งแรงและทนทาน เหมาะสำหรับเคาน์เตอร์ พื้น ผนัง และงานโครงการ",
    "nameEn": "G654 Black Dot",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite Watermark",
    "descriptionEn": "Strong and durable granite suitable for countertops, floors, walls and project applications."
  },
  {
    "id": "catalog-155",
    "name": "TG041 Rose Yellow-โรสเยลโล่",
    "image": "./image/granite-watermark/tg041-rose-yellow.jpg",
    "gallery": [
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินแกรนิตที่มีความแข็งแรงและทนทาน เหมาะสำหรับเคาน์เตอร์ พื้น ผนัง และงานโครงการ",
    "nameEn": "TG041 Rose Yellow",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite Watermark",
    "descriptionEn": "Strong and durable granite suitable for countertops, floors, walls and project applications."
  },
  {
    "id": "catalog-156",
    "name": "TG038 Royal Crown Black-รอยอล์คราว์แบ็ค",
    "image": "./image/granite-watermark/tg038-royal-crown-black.jpg",
    "gallery": [
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินแกรนิตที่มีความแข็งแรงและทนทาน เหมาะสำหรับเคาน์เตอร์ พื้น ผนัง และงานโครงการ",
    "nameEn": "TG038 Royal Crown Black",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite Watermark",
    "descriptionEn": "Strong and durable granite suitable for countertops, floors, walls and project applications."
  },
  {
    "id": "catalog-157",
    "name": "G365  Yellow Snow-เหลืองเกล็ดหิมะ",
    "image": "./image/granite-watermark/g365-yellow-snow.jpg",
    "gallery": [
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินแกรนิตที่มีความแข็งแรงและทนทาน เหมาะสำหรับเคาน์เตอร์ พื้น ผนัง และงานโครงการ",
    "nameEn": "G365  Yellow Snow",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite Watermark",
    "descriptionEn": "Strong and durable granite suitable for countertops, floors, walls and project applications."
  },
  {
    "id": "catalog-158",
    "name": "G908 Rawsilk-รอลซิล",
    "image": "./image/granite-watermark/g908-rawsilk.jpg",
    "gallery": [
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินแกรนิตที่มีความแข็งแรงและทนทาน เหมาะสำหรับเคาน์เตอร์ พื้น ผนัง และงานโครงการ",
    "nameEn": "G908 Rawsilk",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite Watermark",
    "descriptionEn": "Strong and durable granite suitable for countertops, floors, walls and project applications."
  },
  {
    "id": "catalog-159",
    "name": "TG049 Royal Champagne-รอยัลแชมเปญ",
    "image": "./image/granite-watermark/tg049-royal-champagne.jpg",
    "gallery": [
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินแกรนิตที่มีความแข็งแรงและทนทาน เหมาะสำหรับเคาน์เตอร์ พื้น ผนัง และงานโครงการ",
    "nameEn": "TG049 Royal Champagne",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite Watermark",
    "descriptionEn": "Strong and durable granite suitable for countertops, floors, walls and project applications."
  },
  {
    "id": "catalog-160",
    "name": "GL1000 Absolue Black-แอ๊บโซลูทแบล็ค",
    "image": "./image/granite-watermark/gl1000-absolue-black.jpg",
    "gallery": [
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินแกรนิตที่มีความแข็งแรงและทนทาน เหมาะสำหรับเคาน์เตอร์ พื้น ผนัง และงานโครงการ",
    "nameEn": "GL1000 Absolute Black",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite Watermark",
    "descriptionEn": "Strong and durable granite suitable for countertops, floors, walls and project applications."
  },
  {
    "id": "catalog-161",
    "name": "TG040 Yellow Bazil-เหลืองบราซิล",
    "image": "./image/granite-watermark/tg040-yellow-bazil.jpg",
    "gallery": [
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินแกรนิตที่มีความแข็งแรงและทนทาน เหมาะสำหรับเคาน์เตอร์ พื้น ผนัง และงานโครงการ",
    "nameEn": "TG040 Yellow Bazil",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite Watermark",
    "descriptionEn": "Strong and durable granite suitable for countertops, floors, walls and project applications."
  },
  {
    "id": "catalog-162",
    "name": "G655 Dark Flower-ดาร์ก ฟลาวเวอร์",
    "image": "./image/granite-watermark/g655-dark-flower.jpg",
    "gallery": [
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินแกรนิตที่มีความแข็งแรงและทนทาน เหมาะสำหรับเคาน์เตอร์ พื้น ผนัง และงานโครงการ",
    "nameEn": "G655 Dark Flower",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite Watermark",
    "descriptionEn": "Strong and durable granite suitable for countertops, floors, walls and project applications."
  },
  {
    "id": "catalog-163",
    "name": "G915 Cherry Red- เชอร์รี่เรด",
    "image": "./image/granite-watermark/g915-cherry-red.jpg",
    "gallery": [
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินแกรนิตที่มีความแข็งแรงและทนทาน เหมาะสำหรับเคาน์เตอร์ พื้น ผนัง และงานโครงการ",
    "nameEn": "G915 Cherry Red",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite Watermark",
    "descriptionEn": "Strong and durable granite suitable for countertops, floors, walls and project applications."
  },
  {
    "id": "catalog-164",
    "name": "G681 Camilian Pink-คามิเลียพิงค์",
    "image": "./image/granite-watermark/g681-camilian-pink.jpg",
    "gallery": [
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินแกรนิตที่มีความแข็งแรงและทนทาน เหมาะสำหรับเคาน์เตอร์ พื้น ผนัง และงานโครงการ",
    "nameEn": "G681 Camilian Pink",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite Watermark",
    "descriptionEn": "Strong and durable granite suitable for countertops, floors, walls and project applications."
  },
  {
    "id": "catalog-165",
    "name": "G623 เทาจีน",
    "image": "./image/granite-watermark/g623.jpg",
    "gallery": [
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินแกรนิตที่มีความแข็งแรงและทนทาน เหมาะสำหรับเคาน์เตอร์ พื้น ผนัง และงานโครงการ",
    "nameEn": "G623 Gray China",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite Watermark",
    "descriptionEn": "Strong and durable granite suitable for countertops, floors, walls and project applications."
  },
  {
    "id": "catalog-166",
    "name": "G657 พิงค์เพอร์ริโน่",
    "image": "./image/granite-watermark/g657.jpg",
    "gallery": [
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินแกรนิตที่มีความแข็งแรงและทนทาน เหมาะสำหรับเคาน์เตอร์ พื้น ผนัง และงานโครงการ",
    "nameEn": "G657 Pink Perrino",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite Watermark",
    "descriptionEn": "Strong and durable granite suitable for countertops, floors, walls and project applications."
  },
  {
    "id": "catalog-167",
    "name": "G687 Orange Sakura-ซากุระส้ม",
    "image": "./image/granite-watermark/g687-orange-sakura.jpg",
    "gallery": [
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินแกรนิตที่มีความแข็งแรงและทนทาน เหมาะสำหรับเคาน์เตอร์ พื้น ผนัง และงานโครงการ",
    "nameEn": "G687 Orange Sakura",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite Watermark",
    "descriptionEn": "Strong and durable granite suitable for countertops, floors, walls and project applications."
  },
  {
    "id": "catalog-168",
    "name": "TG010 Emeral Pear-เอ็มเมอร์รัลเพิลร์",
    "image": "./image/granite-watermark/tg010-emeral-pear.jpg",
    "gallery": [
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินแกรนิตที่มีความแข็งแรงและทนทาน เหมาะสำหรับเคาน์เตอร์ พื้น ผนัง และงานโครงการ",
    "nameEn": "TG010 Emerald Pear",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite Watermark",
    "descriptionEn": "Strong and durable granite suitable for countertops, floors, walls and project applications."
  },
  {
    "id": "catalog-169",
    "name": "G910 White Tiger-ขาวลายเสือ",
    "image": "./image/granite-watermark/g910-white-tiger.jpg",
    "gallery": [
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินแกรนิตที่มีความแข็งแรงและทนทาน เหมาะสำหรับเคาน์เตอร์ พื้น ผนัง และงานโครงการ",
    "nameEn": "G910 White Tiger",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite Watermark",
    "descriptionEn": "Strong and durable granite suitable for countertops, floors, walls and project applications."
  },
  {
    "id": "catalog-170",
    "name": "G911 Red Tiger-แดงลายเสีอ",
    "image": "./image/granite-watermark/g911-red-tiger.jpg",
    "gallery": [
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินแกรนิตที่มีความแข็งแรงและทนทาน เหมาะสำหรับเคาน์เตอร์ พื้น ผนัง และงานโครงการ",
    "nameEn": "G911 Red Tiger",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite Watermark",
    "descriptionEn": "Strong and durable granite suitable for countertops, floors, walls and project applications."
  },
  {
    "id": "catalog-171",
    "name": "TG029 Black Africa- ดำอาฟริกา",
    "image": "./image/granite-watermark/tg029-black-africa.jpg",
    "gallery": [
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินแกรนิตที่มีความแข็งแรงและทนทาน เหมาะสำหรับเคาน์เตอร์ พื้น ผนัง และงานโครงการ",
    "nameEn": "TG029 Black Africa",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite Watermark",
    "descriptionEn": "Strong and durable granite suitable for countertops, floors, walls and project applications."
  },
  {
    "id": "catalog-172",
    "name": "TG026 Super Black-ซุปเปอร์แบ็ค",
    "image": "./image/granite-watermark/tg026-super-black.jpg",
    "gallery": [
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินแกรนิตที่มีความแข็งแรงและทนทาน เหมาะสำหรับเคาน์เตอร์ พื้น ผนัง และงานโครงการ",
    "nameEn": "TG026 Super Black",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite Watermark",
    "descriptionEn": "Strong and durable granite suitable for countertops, floors, walls and project applications."
  },
  {
    "id": "catalog-173",
    "name": "TF101 Top Black-ท็อปแบล็ค",
    "image": "./image/granite-watermark/tf101-top-black.jpg",
    "gallery": [
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินแกรนิตที่มีความแข็งแรงและทนทาน เหมาะสำหรับเคาน์เตอร์ พื้น ผนัง และงานโครงการ",
    "nameEn": "TF101 Top Black",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite Watermark",
    "descriptionEn": "Strong and durable granite suitable for countertops, floors, walls and project applications."
  },
  {
    "id": "catalog-174",
    "name": "G603 White Snow-ขาวเกร็ดหิมะ",
    "image": "./image/granite-watermark/g603-white-snow.jpg",
    "gallery": [
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินแกรนิตที่มีความแข็งแรงและทนทาน เหมาะสำหรับเคาน์เตอร์ พื้น ผนัง และงานโครงการ",
    "nameEn": "G603 White Snow",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite Watermark",
    "descriptionEn": "Strong and durable granite suitable for countertops, floors, walls and project applications."
  },
  {
    "id": "catalog-175",
    "name": "TG047 Picasso Black-ปิกาโซ ดำ",
    "image": "./image/granite-watermark/tg047-picasso-black.jpg",
    "gallery": [
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินแกรนิตที่มีความแข็งแรงและทนทาน เหมาะสำหรับเคาน์เตอร์ พื้น ผนัง และงานโครงการ",
    "nameEn": "TG047 Picasso Black",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite Watermark",
    "descriptionEn": "Strong and durable granite suitable for countertops, floors, walls and project applications."
  },
  {
    "id": "catalog-176",
    "name": "TG023 India Red- แดงอินเดีย",
    "image": "./image/granite-watermark/tg023-india-red.jpg",
    "gallery": [
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินแกรนิตที่มีความแข็งแรงและทนทาน เหมาะสำหรับเคาน์เตอร์ พื้น ผนัง และงานโครงการ",
    "nameEn": "TG023 India Red",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite Watermark",
    "descriptionEn": "Strong and durable granite suitable for countertops, floors, walls and project applications."
  },
  {
    "id": "catalog-177",
    "name": "TG056 VisconWhite-วิสคอนไวท์",
    "image": "./image/granite-watermark/tg056-visconwhite.jpg",
    "gallery": [
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินแกรนิตที่มีความแข็งแรงและทนทาน เหมาะสำหรับเคาน์เตอร์ พื้น ผนัง และงานโครงการ",
    "nameEn": "TG056 VisconWhite",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite Watermark",
    "descriptionEn": "Strong and durable granite suitable for countertops, floors, walls and project applications."
  },
  {
    "id": "catalog-178",
    "name": "TG048 Picasso Gray-ปิกาโซ เทา",
    "image": "./image/granite-watermark/tg048-picasso-gray.jpg",
    "gallery": [
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินแกรนิตที่มีความแข็งแรงและทนทาน เหมาะสำหรับเคาน์เตอร์ พื้น ผนัง และงานโครงการ",
    "nameEn": "TG048 Picasso Gray",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite Watermark",
    "descriptionEn": "Strong and durable granite suitable for countertops, floors, walls and project applications."
  },
  {
    "id": "catalog-179",
    "name": "TG002 Black Galaxy-ดำเกล็ดทอง",
    "image": "./image/granite-watermark/tg002-black-galaxy.jpg",
    "gallery": [
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินแกรนิตที่มีความแข็งแรงและทนทาน เหมาะสำหรับเคาน์เตอร์ พื้น ผนัง และงานโครงการ",
    "nameEn": "TG002 Black Galaxy",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite Watermark",
    "descriptionEn": "Strong and durable granite suitable for countertops, floors, walls and project applications."
  },
  {
    "id": "catalog-180",
    "name": "TG028 Tanbrown-แทนบาร์ว",
    "image": "./image/granite-watermark/tg028-tanbrown.jpg",
    "gallery": [
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินแกรนิตที่มีความแข็งแรงและทนทาน เหมาะสำหรับเคาน์เตอร์ พื้น ผนัง และงานโครงการ",
    "nameEn": "TG028 Tanbrown",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite Watermark",
    "descriptionEn": "Strong and durable granite suitable for countertops, floors, walls and project applications."
  },
  {
    "id": "catalog-181",
    "name": "TG052 White G-ไวท์จี",
    "image": "./image/granite-watermark/tg052-white-g.jpg",
    "gallery": [
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินแกรนิตที่มีความแข็งแรงและทนทาน เหมาะสำหรับเคาน์เตอร์ พื้น ผนัง และงานโครงการ",
    "nameEn": "TG052 White G",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite Watermark",
    "descriptionEn": "Strong and durable granite suitable for countertops, floors, walls and project applications."
  },
  {
    "id": "catalog-182",
    "name": "TG042 Crown Black-คราว์แบ็ค",
    "image": "./image/granite-watermark/tg042-crown-black.jpg",
    "gallery": [
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินแกรนิตที่มีความแข็งแรงและทนทาน เหมาะสำหรับเคาน์เตอร์ พื้น ผนัง และงานโครงการ",
    "nameEn": "TG042 Crown Black",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite Watermark",
    "descriptionEn": "Strong and durable granite suitable for countertops, floors, walls and project applications."
  },
  {
    "id": "catalog-183",
    "name": "G640 Gray Clasic- เทาคลาสสิค",
    "image": "./image/granite-watermark/g640-gray-clasic.jpg",
    "gallery": [
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินแกรนิตที่มีความแข็งแรงและทนทาน เหมาะสำหรับเคาน์เตอร์ พื้น ผนัง และงานโครงการ",
    "nameEn": "G640 Gray Classic",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite Watermark",
    "descriptionEn": "Strong and durable granite suitable for countertops, floors, walls and project applications."
  },
  {
    "id": "catalog-184",
    "name": "G664 Pink Gems-พลอยชมพู",
    "image": "./image/granite-watermark/g664-pink-gems.jpg",
    "gallery": [
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินแกรนิตที่มีความแข็งแรงและทนทาน เหมาะสำหรับเคาน์เตอร์ พื้น ผนัง และงานโครงการ",
    "nameEn": "G664 Pink Gems",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite Watermark",
    "descriptionEn": "Strong and durable granite suitable for countertops, floors, walls and project applications."
  },
  {
    "id": "catalog-185",
    "name": "G635 Dark Pink Jade-หยกชมพูเข้ม",
    "image": "./image/granite-watermark/g635-dark-pink-jade.jpg",
    "gallery": [
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินแกรนิตที่มีความแข็งแรงและทนทาน เหมาะสำหรับเคาน์เตอร์ พื้น ผนัง และงานโครงการ",
    "nameEn": "G635 Dark Pink Jade",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite Watermark",
    "descriptionEn": "Strong and durable granite suitable for countertops, floors, walls and project applications."
  },
  {
    "id": "catalog-186",
    "name": "G636 Light Pink Jade-หยกชมพูอ่อน",
    "image": "./image/granite-watermark/g636-light-pink-jade.jpg",
    "gallery": [
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินแกรนิตที่มีความแข็งแรงและทนทาน เหมาะสำหรับเคาน์เตอร์ พื้น ผนัง และงานโครงการ",
    "nameEn": "G636 Light Pink Jade",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite Watermark",
    "descriptionEn": "Strong and durable granite suitable for countertops, floors, walls and project applications."
  },
  {
    "id": "catalog-187",
    "name": "G6571 Mocha-มอคค่า",
    "image": "./image/granite-watermark/g6571-mocha.jpg",
    "gallery": [
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินแกรนิตที่มีความแข็งแรงและทนทาน เหมาะสำหรับเคาน์เตอร์ พื้น ผนัง และงานโครงการ",
    "nameEn": "G6571 Mocha",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite Watermark",
    "descriptionEn": "Strong and durable granite suitable for countertops, floors, walls and project applications."
  },
  {
    "id": "catalog-188",
    "name": "G6231 Super Gray-ซุปเปอร์เกรย์",
    "image": "./image/granite-watermark/g6231-super-gray.jpg",
    "gallery": [
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินแกรนิตที่มีความแข็งแรงและทนทาน เหมาะสำหรับเคาน์เตอร์ พื้น ผนัง และงานโครงการ",
    "nameEn": "G6231 Super Gray",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite Watermark",
    "descriptionEn": "Strong and durable granite suitable for countertops, floors, walls and project applications."
  },
  {
    "id": "catalog-189",
    "name": "TG011 Spoondrift White-เทาลายเมฆ",
    "image": "./image/granite-watermark/tg011-spoondrift-white.jpg",
    "gallery": [
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินแกรนิตที่มีความแข็งแรงและทนทาน เหมาะสำหรับเคาน์เตอร์ พื้น ผนัง และงานโครงการ",
    "nameEn": "TG011 Spoondrift White",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite Watermark",
    "descriptionEn": "Strong and durable granite suitable for countertops, floors, walls and project applications."
  },
  {
    "id": "catalog-190",
    "name": "G301-3 Black Jubpo- ดำจัปโป้",
    "image": "./image/granite-watermark/g301-3-black-jubpo.jpg",
    "gallery": [
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg",
      "./image/granite-watermark/tg027-blue-pearl.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินแกรนิตที่มีความแข็งแรงและทนทาน เหมาะสำหรับเคาน์เตอร์ พื้น ผนัง และงานโครงการ",
    "nameEn": "G301-3 Black Jubpo",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite Watermark",
    "descriptionEn": "Strong and durable granite suitable for countertops, floors, walls and project applications."
  },
  {
    "id": "catalog-191",
    "name": "RDN040 White Gold Beige-ไวท์โกล์ดเบจ",
    "image": "./image/marble-watermark/rdn040-white-gold-beige.jpg",
    "gallery": [
      "./image/marble-watermark/rdn040-white-gold-beige.jpg",
      "./image/marble-watermark/rdn035-cream-italy.jpg",
      "./image/marble-watermark/rd2002-venata-white.jpg",
      "./image/marble-watermark/cp225-limestone.jpg"
    ],
    "category": "marble",
    "categoryLabel": "หินอ่อน",
    "subcategory": "Marble ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินอ่อนลวดลายธรรมชาติ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความหรูหรา",
    "nameEn": "RDN040 White Gold Beige",
    "categoryLabelEn": "Marble",
    "subcategoryEn": "Marble Watermark",
    "descriptionEn": "Natural-veined marble suitable for floors, walls, countertops and luxurious decorative applications."
  },
  {
    "id": "catalog-192",
    "name": "RDN035 Cream Italy-ครีมอิตาลี",
    "image": "./image/marble-watermark/rdn035-cream-italy.jpg",
    "gallery": [
      "./image/marble-watermark/rdn040-white-gold-beige.jpg",
      "./image/marble-watermark/rdn035-cream-italy.jpg",
      "./image/marble-watermark/rd2002-venata-white.jpg",
      "./image/marble-watermark/cp225-limestone.jpg"
    ],
    "category": "marble",
    "categoryLabel": "หินอ่อน",
    "subcategory": "Marble ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินอ่อนลวดลายธรรมชาติ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความหรูหรา",
    "nameEn": "RDN035 Cream Italy",
    "categoryLabelEn": "Marble",
    "subcategoryEn": "Marble Watermark",
    "descriptionEn": "Natural-veined marble suitable for floors, walls, countertops and luxurious decorative applications."
  },
  {
    "id": "catalog-193",
    "name": "RD2002 Venata White-เวนนาตาไวท์",
    "image": "./image/marble-watermark/rd2002-venata-white.jpg",
    "gallery": [
      "./image/marble-watermark/rdn040-white-gold-beige.jpg",
      "./image/marble-watermark/rdn035-cream-italy.jpg",
      "./image/marble-watermark/rd2002-venata-white.jpg",
      "./image/marble-watermark/cp225-limestone.jpg"
    ],
    "category": "marble",
    "categoryLabel": "หินอ่อน",
    "subcategory": "Marble ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินอ่อนลวดลายธรรมชาติ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความหรูหรา",
    "nameEn": "RD2002 Venata White",
    "categoryLabelEn": "Marble",
    "subcategoryEn": "Marble Watermark",
    "descriptionEn": "Natural-veined marble suitable for floors, walls, countertops and luxurious decorative applications."
  },
  {
    "id": "catalog-194",
    "name": "CP225 Limestone-ลามสโตน",
    "image": "./image/marble-watermark/cp225-limestone.jpg",
    "gallery": [
      "./image/marble-watermark/rdn040-white-gold-beige.jpg",
      "./image/marble-watermark/rdn035-cream-italy.jpg",
      "./image/marble-watermark/rd2002-venata-white.jpg",
      "./image/marble-watermark/cp225-limestone.jpg"
    ],
    "category": "marble",
    "categoryLabel": "หินอ่อน",
    "subcategory": "Marble ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินอ่อนลวดลายธรรมชาติ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความหรูหรา",
    "nameEn": "CP225 Limestone",
    "categoryLabelEn": "Marble",
    "subcategoryEn": "Marble Watermark",
    "descriptionEn": "Natural-veined marble suitable for floors, walls, countertops and luxurious decorative applications."
  },
  {
    "id": "catalog-195",
    "name": "RDN014 Rosa Lapanto-โรซ่า ลาปานโต้",
    "image": "./image/marble-watermark/rd5001-rosa-verona.jpg",
    "gallery": [
      "./image/marble-watermark/rdn040-white-gold-beige.jpg",
      "./image/marble-watermark/rdn035-cream-italy.jpg",
      "./image/marble-watermark/rd2002-venata-white.jpg",
      "./image/marble-watermark/cp225-limestone.jpg"
    ],
    "category": "marble",
    "categoryLabel": "หินอ่อน",
    "subcategory": "Marble ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินอ่อนลวดลายธรรมชาติ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความหรูหรา",
    "nameEn": "RDN014 Rosa Lapanto",
    "categoryLabelEn": "Marble",
    "subcategoryEn": "Marble Watermark",
    "descriptionEn": "Natural-veined marble suitable for floors, walls, countertops and luxurious decorative applications."
  },
  {
    "id": "catalog-196",
    "name": "RD3001 Travertine Beige-ทาเวอร์ทีน เบจ",
    "image": "./image/marble-watermark/rd3001-travertine-beige.jpg",
    "gallery": [
      "./image/marble-watermark/rdn040-white-gold-beige.jpg",
      "./image/marble-watermark/rdn035-cream-italy.jpg",
      "./image/marble-watermark/rd2002-venata-white.jpg",
      "./image/marble-watermark/cp225-limestone.jpg"
    ],
    "category": "marble",
    "categoryLabel": "หินอ่อน",
    "subcategory": "Marble ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินอ่อนลวดลายธรรมชาติ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความหรูหรา",
    "nameEn": "RD3001 Travertine Beige",
    "categoryLabelEn": "Marble",
    "subcategoryEn": "Marble Watermark",
    "descriptionEn": "Natural-veined marble suitable for floors, walls, countertops and luxurious decorative applications."
  },
  {
    "id": "catalog-197",
    "name": "CP243 Tiger Beige-ไทเกอร์ เบจ",
    "image": "./image/marble-watermark/cp243-tiger-beige.jpg",
    "gallery": [
      "./image/marble-watermark/rdn040-white-gold-beige.jpg",
      "./image/marble-watermark/rdn035-cream-italy.jpg",
      "./image/marble-watermark/rd2002-venata-white.jpg",
      "./image/marble-watermark/cp225-limestone.jpg"
    ],
    "category": "marble",
    "categoryLabel": "หินอ่อน",
    "subcategory": "Marble ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินอ่อนลวดลายธรรมชาติ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความหรูหรา",
    "nameEn": "CP243 Tiger Beige",
    "categoryLabelEn": "Marble",
    "subcategoryEn": "Marble Watermark",
    "descriptionEn": "Natural-veined marble suitable for floors, walls, countertops and luxurious decorative applications."
  },
  {
    "id": "catalog-198",
    "name": "RD1006 Silivia Beige-ซิลเวีย เบจ",
    "image": "./image/marble-watermark/rd1006-silivia-beige.jpg",
    "gallery": [
      "./image/marble-watermark/rdn040-white-gold-beige.jpg",
      "./image/marble-watermark/rdn035-cream-italy.jpg",
      "./image/marble-watermark/rd2002-venata-white.jpg",
      "./image/marble-watermark/cp225-limestone.jpg"
    ],
    "category": "marble",
    "categoryLabel": "หินอ่อน",
    "subcategory": "Marble ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินอ่อนลวดลายธรรมชาติ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความหรูหรา",
    "nameEn": "RD1006 Silivia Beige",
    "categoryLabelEn": "Marble",
    "subcategoryEn": "Marble Watermark",
    "descriptionEn": "Natural-veined marble suitable for floors, walls, countertops and luxurious decorative applications."
  },
  {
    "id": "catalog-199",
    "name": "RDN043 Gray Classic-เกรย์คลาสสิค",
    "image": "./image/marble-watermark/rdn043-gray-classic.jpg",
    "gallery": [
      "./image/marble-watermark/rdn040-white-gold-beige.jpg",
      "./image/marble-watermark/rdn035-cream-italy.jpg",
      "./image/marble-watermark/rd2002-venata-white.jpg",
      "./image/marble-watermark/cp225-limestone.jpg"
    ],
    "category": "marble",
    "categoryLabel": "หินอ่อน",
    "subcategory": "Marble ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินอ่อนลวดลายธรรมชาติ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความหรูหรา",
    "nameEn": "RDN043 Gray Classic",
    "categoryLabelEn": "Marble",
    "subcategoryEn": "Marble Watermark",
    "descriptionEn": "Natural-veined marble suitable for floors, walls, countertops and luxurious decorative applications."
  },
  {
    "id": "catalog-200",
    "name": "RD1001 Cream Marfil-ครีมมาเฟล",
    "image": "./image/marble-watermark/rd1001-cream-marfil.jpg",
    "gallery": [
      "./image/marble-watermark/rdn040-white-gold-beige.jpg",
      "./image/marble-watermark/rdn035-cream-italy.jpg",
      "./image/marble-watermark/rd2002-venata-white.jpg",
      "./image/marble-watermark/cp225-limestone.jpg"
    ],
    "category": "marble",
    "categoryLabel": "หินอ่อน",
    "subcategory": "Marble ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินอ่อนลวดลายธรรมชาติ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความหรูหรา",
    "nameEn": "RD1001 Cream Marfil",
    "categoryLabelEn": "Marble",
    "subcategoryEn": "Marble Watermark",
    "descriptionEn": "Natural-veined marble suitable for floors, walls, countertops and luxurious decorative applications."
  },
  {
    "id": "catalog-201",
    "name": "RD1002 Botticino Classico-บิติชิโน่",
    "image": "./image/marble-watermark/rd1002-botticino-classico.jpg",
    "gallery": [
      "./image/marble-watermark/rdn040-white-gold-beige.jpg",
      "./image/marble-watermark/rdn035-cream-italy.jpg",
      "./image/marble-watermark/rd2002-venata-white.jpg",
      "./image/marble-watermark/cp225-limestone.jpg"
    ],
    "category": "marble",
    "categoryLabel": "หินอ่อน",
    "subcategory": "Marble ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินอ่อนลวดลายธรรมชาติ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความหรูหรา",
    "nameEn": "RD1002 Botticino Classico",
    "categoryLabelEn": "Marble",
    "subcategoryEn": "Marble Watermark",
    "descriptionEn": "Natural-veined marble suitable for floors, walls, countertops and luxurious decorative applications."
  },
  {
    "id": "catalog-202",
    "name": "RDN046 Black Cezar-แบล็คซีซา",
    "image": "./image/marble-watermark/rdn046-black-cezar.jpg",
    "gallery": [
      "./image/marble-watermark/rdn040-white-gold-beige.jpg",
      "./image/marble-watermark/rdn035-cream-italy.jpg",
      "./image/marble-watermark/rd2002-venata-white.jpg",
      "./image/marble-watermark/cp225-limestone.jpg"
    ],
    "category": "marble",
    "categoryLabel": "หินอ่อน",
    "subcategory": "Marble ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินอ่อนลวดลายธรรมชาติ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความหรูหรา",
    "nameEn": "RDN046 Black Cezar",
    "categoryLabelEn": "Marble",
    "subcategoryEn": "Marble Watermark",
    "descriptionEn": "Natural-veined marble suitable for floors, walls, countertops and luxurious decorative applications."
  },
  {
    "id": "catalog-203",
    "name": "RD5001 Rosa Verona-โรซ่า เวอโรน่า",
    "image": "./image/marble-watermark/rd5001-rosa-verona.jpg",
    "gallery": [
      "./image/marble-watermark/rdn040-white-gold-beige.jpg",
      "./image/marble-watermark/rdn035-cream-italy.jpg",
      "./image/marble-watermark/rd2002-venata-white.jpg",
      "./image/marble-watermark/cp225-limestone.jpg"
    ],
    "category": "marble",
    "categoryLabel": "หินอ่อน",
    "subcategory": "Marble ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินอ่อนลวดลายธรรมชาติ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความหรูหรา",
    "nameEn": "RD5001 Rosa Verona",
    "categoryLabelEn": "Marble",
    "subcategoryEn": "Marble Watermark",
    "descriptionEn": "Natural-veined marble suitable for floors, walls, countertops and luxurious decorative applications."
  },
  {
    "id": "catalog-204",
    "name": "RDN047 Rustic Gray-รัสติคเกรย์",
    "image": "./image/marble-watermark/rdn047-rustic-gray.jpg",
    "gallery": [
      "./image/marble-watermark/rdn040-white-gold-beige.jpg",
      "./image/marble-watermark/rdn035-cream-italy.jpg",
      "./image/marble-watermark/rd2002-venata-white.jpg",
      "./image/marble-watermark/cp225-limestone.jpg"
    ],
    "category": "marble",
    "categoryLabel": "หินอ่อน",
    "subcategory": "Marble ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินอ่อนลวดลายธรรมชาติ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความหรูหรา",
    "nameEn": "RDN047 Rustic Gray",
    "categoryLabelEn": "Marble",
    "subcategoryEn": "Marble Watermark",
    "descriptionEn": "Natural-veined marble suitable for floors, walls, countertops and luxurious decorative applications."
  },
  {
    "id": "catalog-205",
    "name": "RDN022 Travertine Gray-ทาเวอร์ทีนเกร์ย",
    "image": "./image/marble-watermark/rdn022-travertine-gray.jpg",
    "gallery": [
      "./image/marble-watermark/rdn040-white-gold-beige.jpg",
      "./image/marble-watermark/rdn035-cream-italy.jpg",
      "./image/marble-watermark/rd2002-venata-white.jpg",
      "./image/marble-watermark/cp225-limestone.jpg"
    ],
    "category": "marble",
    "categoryLabel": "หินอ่อน",
    "subcategory": "Marble ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินอ่อนลวดลายธรรมชาติ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความหรูหรา",
    "nameEn": "RDN022 Travertine Gray",
    "categoryLabelEn": "Marble",
    "subcategoryEn": "Marble Watermark",
    "descriptionEn": "Natural-veined marble suitable for floors, walls, countertops and luxurious decorative applications."
  },
  {
    "id": "catalog-206",
    "name": "RD5002 Rojo Alicante-โรโจอาคานเต้",
    "image": "./image/marble-watermark/rd5002-rojo-alicante.jpg",
    "gallery": [
      "./image/marble-watermark/rdn040-white-gold-beige.jpg",
      "./image/marble-watermark/rdn035-cream-italy.jpg",
      "./image/marble-watermark/rd2002-venata-white.jpg",
      "./image/marble-watermark/cp225-limestone.jpg"
    ],
    "category": "marble",
    "categoryLabel": "หินอ่อน",
    "subcategory": "Marble ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินอ่อนลวดลายธรรมชาติ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความหรูหรา",
    "nameEn": "RD5002 Rojo Alicante",
    "categoryLabelEn": "Marble",
    "subcategoryEn": "Marble Watermark",
    "descriptionEn": "Natural-veined marble suitable for floors, walls, countertops and luxurious decorative applications."
  },
  {
    "id": "catalog-207",
    "name": "RD1008 Galala Beige-กาลาล่าเบจ",
    "image": "./image/marble-watermark/rd1008-galala-beige.jpg",
    "gallery": [
      "./image/marble-watermark/rdn040-white-gold-beige.jpg",
      "./image/marble-watermark/rdn035-cream-italy.jpg",
      "./image/marble-watermark/rd2002-venata-white.jpg",
      "./image/marble-watermark/cp225-limestone.jpg"
    ],
    "category": "marble",
    "categoryLabel": "หินอ่อน",
    "subcategory": "Marble ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินอ่อนลวดลายธรรมชาติ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความหรูหรา",
    "nameEn": "RD1008 Galala Beige",
    "categoryLabelEn": "Marble",
    "subcategoryEn": "Marble Watermark",
    "descriptionEn": "Natural-veined marble suitable for floors, walls, countertops and luxurious decorative applications."
  },
  {
    "id": "catalog-208",
    "name": "RDN038 Golden Dargon-โกลเด้นดาร์กอน (แบล็คฟอร์เรส)",
    "image": "./image/marble-watermark/rdn038-golden-dargon.jpg",
    "gallery": [
      "./image/marble-watermark/rdn040-white-gold-beige.jpg",
      "./image/marble-watermark/rdn035-cream-italy.jpg",
      "./image/marble-watermark/rd2002-venata-white.jpg",
      "./image/marble-watermark/cp225-limestone.jpg"
    ],
    "category": "marble",
    "categoryLabel": "หินอ่อน",
    "subcategory": "Marble ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินอ่อนลวดลายธรรมชาติ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความหรูหรา",
    "nameEn": "RDN038 Golden Dargon",
    "categoryLabelEn": "Marble",
    "subcategoryEn": "Marble Watermark",
    "descriptionEn": "Natural-veined marble suitable for floors, walls, countertops and luxurious decorative applications."
  },
  {
    "id": "catalog-209",
    "name": "RD1007 Sunny Beige-ซันนี่ เบจ",
    "image": "./image/marble-watermark/rd1007-sunny-beige.jpg",
    "gallery": [
      "./image/marble-watermark/rdn040-white-gold-beige.jpg",
      "./image/marble-watermark/rdn035-cream-italy.jpg",
      "./image/marble-watermark/rd2002-venata-white.jpg",
      "./image/marble-watermark/cp225-limestone.jpg"
    ],
    "category": "marble",
    "categoryLabel": "หินอ่อน",
    "subcategory": "Marble ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินอ่อนลวดลายธรรมชาติ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความหรูหรา",
    "nameEn": "RD1007 Sunny Beige",
    "categoryLabelEn": "Marble",
    "subcategoryEn": "Marble Watermark",
    "descriptionEn": "Natural-veined marble suitable for floors, walls, countertops and luxurious decorative applications."
  },
  {
    "id": "catalog-210",
    "name": "RD6001 Grand Dark Emperador-แกรนด์ดาคเอ็มเพอร์ราโด",
    "image": "./image/marble-watermark/rd6001-grand-dark-emperador.jpg",
    "gallery": [
      "./image/marble-watermark/rdn040-white-gold-beige.jpg",
      "./image/marble-watermark/rdn035-cream-italy.jpg",
      "./image/marble-watermark/rd2002-venata-white.jpg",
      "./image/marble-watermark/cp225-limestone.jpg"
    ],
    "category": "marble",
    "categoryLabel": "หินอ่อน",
    "subcategory": "Marble ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินอ่อนลวดลายธรรมชาติ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความหรูหรา",
    "nameEn": "RD6001 Grand Dark Emperador",
    "categoryLabelEn": "Marble",
    "subcategoryEn": "Marble Watermark",
    "descriptionEn": "Natural-veined marble suitable for floors, walls, countertops and luxurious decorative applications."
  },
  {
    "id": "catalog-211",
    "name": "RD6002 Light Emperador-ไรท์ เอ็มเพอร์ราโด",
    "image": "./image/marble-watermark/rd6002-light-emperador.jpg",
    "gallery": [
      "./image/marble-watermark/rdn040-white-gold-beige.jpg",
      "./image/marble-watermark/rdn035-cream-italy.jpg",
      "./image/marble-watermark/rd2002-venata-white.jpg",
      "./image/marble-watermark/cp225-limestone.jpg"
    ],
    "category": "marble",
    "categoryLabel": "หินอ่อน",
    "subcategory": "Marble ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินอ่อนลวดลายธรรมชาติ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความหรูหรา",
    "nameEn": "RD6002 Light Emperador",
    "categoryLabelEn": "Marble",
    "subcategoryEn": "Marble Watermark",
    "descriptionEn": "Natural-veined marble suitable for floors, walls, countertops and luxurious decorative applications."
  },
  {
    "id": "catalog-212",
    "name": "RDN027 Royal Biticino-รอยัลบิติชิโน่",
    "image": "./image/marble-watermark/rdn027-royal-biticino.jpg",
    "gallery": [
      "./image/marble-watermark/rdn040-white-gold-beige.jpg",
      "./image/marble-watermark/rdn035-cream-italy.jpg",
      "./image/marble-watermark/rd2002-venata-white.jpg",
      "./image/marble-watermark/cp225-limestone.jpg"
    ],
    "category": "marble",
    "categoryLabel": "หินอ่อน",
    "subcategory": "Marble ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินอ่อนลวดลายธรรมชาติ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความหรูหรา",
    "nameEn": "RDN027 Royal Biticino",
    "categoryLabelEn": "Marble",
    "subcategoryEn": "Marble Watermark",
    "descriptionEn": "Natural-veined marble suitable for floors, walls, countertops and luxurious decorative applications."
  },
  {
    "id": "catalog-213",
    "name": "RD200812 Rain Forest(Polish)-เลน ฟอเรส",
    "image": "./image/marble-watermark/rd200812-rain-forest-polish.jpg",
    "gallery": [
      "./image/marble-watermark/rdn040-white-gold-beige.jpg",
      "./image/marble-watermark/rdn035-cream-italy.jpg",
      "./image/marble-watermark/rd2002-venata-white.jpg",
      "./image/marble-watermark/cp225-limestone.jpg"
    ],
    "category": "marble",
    "categoryLabel": "หินอ่อน",
    "subcategory": "Marble ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินอ่อนลวดลายธรรมชาติ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความหรูหรา",
    "nameEn": "RD200812 Rain Forest(Polish)",
    "categoryLabelEn": "Marble",
    "subcategoryEn": "Marble Watermark",
    "descriptionEn": "Natural-veined marble suitable for floors, walls, countertops and luxurious decorative applications."
  },
  {
    "id": "catalog-214",
    "name": "RD6004 Italy Green-เขียว อิตาลี",
    "image": "./image/marble-watermark/rd6004-italy-green.jpg",
    "gallery": [
      "./image/marble-watermark/rdn040-white-gold-beige.jpg",
      "./image/marble-watermark/rdn035-cream-italy.jpg",
      "./image/marble-watermark/rd2002-venata-white.jpg",
      "./image/marble-watermark/cp225-limestone.jpg"
    ],
    "category": "marble",
    "categoryLabel": "หินอ่อน",
    "subcategory": "Marble ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินอ่อนลวดลายธรรมชาติ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความหรูหรา",
    "nameEn": "RD6004 Italy Green",
    "categoryLabelEn": "Marble",
    "subcategoryEn": "Marble Watermark",
    "descriptionEn": "Natural-veined marble suitable for floors, walls, countertops and luxurious decorative applications."
  },
  {
    "id": "catalog-215",
    "name": "RDN023 Travertine Thai-ทราเวอร์ทีนไทยลายไม้",
    "image": "./image/marble-watermark/rdn023-travertine-thai.jpg",
    "gallery": [
      "./image/marble-watermark/rdn040-white-gold-beige.jpg",
      "./image/marble-watermark/rdn035-cream-italy.jpg",
      "./image/marble-watermark/rd2002-venata-white.jpg",
      "./image/marble-watermark/cp225-limestone.jpg"
    ],
    "category": "marble",
    "categoryLabel": "หินอ่อน",
    "subcategory": "Marble ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินอ่อนลวดลายธรรมชาติ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความหรูหรา",
    "nameEn": "RDN023 Travertine Thai",
    "categoryLabelEn": "Marble",
    "subcategoryEn": "Marble Watermark",
    "descriptionEn": "Natural-veined marble suitable for floors, walls, countertops and luxurious decorative applications."
  },
  {
    "id": "catalog-216",
    "name": "CP255 Royal Crown-รอยัลคราว",
    "image": "./image/marble-watermark/cp255-royal-crown.jpg",
    "gallery": [
      "./image/marble-watermark/rdn040-white-gold-beige.jpg",
      "./image/marble-watermark/rdn035-cream-italy.jpg",
      "./image/marble-watermark/rd2002-venata-white.jpg",
      "./image/marble-watermark/cp225-limestone.jpg"
    ],
    "category": "marble",
    "categoryLabel": "หินอ่อน",
    "subcategory": "Marble ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินอ่อนลวดลายธรรมชาติ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความหรูหรา",
    "nameEn": "CP255 Royal Crown",
    "categoryLabelEn": "Marble",
    "subcategoryEn": "Marble Watermark",
    "descriptionEn": "Natural-veined marble suitable for floors, walls, countertops and luxurious decorative applications."
  },
  {
    "id": "catalog-217",
    "name": "RDN036 White Varacas-ไวท์วาราคัส",
    "image": "./image/marble-watermark/rdn036-white-varacas.jpg",
    "gallery": [
      "./image/marble-watermark/rdn040-white-gold-beige.jpg",
      "./image/marble-watermark/rdn035-cream-italy.jpg",
      "./image/marble-watermark/rd2002-venata-white.jpg",
      "./image/marble-watermark/cp225-limestone.jpg"
    ],
    "category": "marble",
    "categoryLabel": "หินอ่อน",
    "subcategory": "Marble ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินอ่อนลวดลายธรรมชาติ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความหรูหรา",
    "nameEn": "RDN036 White Varacas",
    "categoryLabelEn": "Marble",
    "subcategoryEn": "Marble Watermark",
    "descriptionEn": "Natural-veined marble suitable for floors, walls, countertops and luxurious decorative applications."
  },
  {
    "id": "catalog-218",
    "name": "RDN013 Black Marquina-แบล็คมาคิวน่า",
    "image": "./image/marble-watermark/rdn013-black-marquina.jpg",
    "gallery": [
      "./image/marble-watermark/rdn040-white-gold-beige.jpg",
      "./image/marble-watermark/rdn035-cream-italy.jpg",
      "./image/marble-watermark/rd2002-venata-white.jpg",
      "./image/marble-watermark/cp225-limestone.jpg"
    ],
    "category": "marble",
    "categoryLabel": "หินอ่อน",
    "subcategory": "Marble ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินอ่อนลวดลายธรรมชาติ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความหรูหรา",
    "nameEn": "RDN013 Black Marquina",
    "categoryLabelEn": "Marble",
    "subcategoryEn": "Marble Watermark",
    "descriptionEn": "Natural-veined marble suitable for floors, walls, countertops and luxurious decorative applications."
  },
  {
    "id": "catalog-219",
    "name": "RD2003 White Carrara-ไวท์คาราร่า",
    "image": "./image/marble-watermark/rd2003-white-carrara.jpg",
    "gallery": [
      "./image/marble-watermark/rdn040-white-gold-beige.jpg",
      "./image/marble-watermark/rdn035-cream-italy.jpg",
      "./image/marble-watermark/rd2002-venata-white.jpg",
      "./image/marble-watermark/cp225-limestone.jpg"
    ],
    "category": "marble",
    "categoryLabel": "หินอ่อน",
    "subcategory": "Marble ลายน้ำ",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "หินอ่อนลวดลายธรรมชาติ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความหรูหรา",
    "nameEn": "RD2003 White Carrara",
    "categoryLabelEn": "Marble",
    "subcategoryEn": "Marble Watermark",
    "descriptionEn": "Natural-veined marble suitable for floors, walls, countertops and luxurious decorative applications."
  },
  {
    "id": "catalog-220",
    "name": "CTT813",
    "image": "./image/marble-tiles/ctt813.jpg",
    "gallery": [
      "./image/marble-tiles/ctt813.jpg",
      "./image/marble-tiles/ctlm20.jpg",
      "./image/marble-tiles/ctk6681a.jpg",
      "./image/marble-tiles/ct2-msd8830p.jpg"
    ],
    "category": "tile",
    "categoryLabel": "กระเบื้องหินอ่อน",
    "subcategory": "กระเบื้องหินอ่อน",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "กระเบื้องหินอ่อนสำหรับงานพื้นและผนัง ช่วยสร้างพื้นผิวและบรรยากาศที่เรียบหรู",
    "nameEn": "CTT813",
    "categoryLabelEn": "Marble Tile",
    "subcategoryEn": "Marble Tile",
    "descriptionEn": "Marble-look tiles for floors and walls, creating an elegant surface and atmosphere."
  },
  {
    "id": "catalog-221",
    "name": "CTLM20",
    "image": "./image/marble-tiles/ctlm20.jpg",
    "gallery": [
      "./image/marble-tiles/ctlm20.jpg",
      "./image/marble-tiles/ctk6681a.jpg",
      "./image/marble-tiles/ct2-msd8830p.jpg",
      "./image/marble-tiles/ctk6684a.jpg"
    ],
    "category": "tile",
    "categoryLabel": "กระเบื้องหินอ่อน",
    "subcategory": "กระเบื้องหินอ่อน",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "กระเบื้องหินอ่อนสำหรับงานพื้นและผนัง ช่วยสร้างพื้นผิวและบรรยากาศที่เรียบหรู",
    "nameEn": "CTLM20",
    "categoryLabelEn": "Marble Tile",
    "subcategoryEn": "Marble Tile",
    "descriptionEn": "Marble-look tiles for floors and walls, creating an elegant surface and atmosphere."
  },
  {
    "id": "catalog-222",
    "name": "CTK6681A",
    "image": "./image/marble-tiles/ctk6681a.jpg",
    "gallery": [
      "./image/marble-tiles/ctt813.jpg",
      "./image/marble-tiles/ctlm20.jpg",
      "./image/marble-tiles/ctk6681a.jpg",
      "./image/marble-tiles/ct2-msd8830p.jpg"
    ],
    "category": "tile",
    "categoryLabel": "กระเบื้องหินอ่อน",
    "subcategory": "กระเบื้องหินอ่อน",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "กระเบื้องหินอ่อนสำหรับงานพื้นและผนัง ช่วยสร้างพื้นผิวและบรรยากาศที่เรียบหรู",
    "nameEn": "CTK6681A",
    "categoryLabelEn": "Marble Tile",
    "subcategoryEn": "Marble Tile",
    "descriptionEn": "Marble-look tiles for floors and walls, creating an elegant surface and atmosphere."
  },
  {
    "id": "catalog-223",
    "name": "CT2-MSD8830P",
    "image": "./image/marble-tiles/ct2-msd8830p.jpg",
    "gallery": [
      "./image/marble-tiles/ctt813.jpg",
      "./image/marble-tiles/ctlm20.jpg",
      "./image/marble-tiles/ctk6681a.jpg",
      "./image/marble-tiles/ct2-msd8830p.jpg"
    ],
    "category": "tile",
    "categoryLabel": "กระเบื้องหินอ่อน",
    "subcategory": "กระเบื้องหินอ่อน",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "กระเบื้องหินอ่อนสำหรับงานพื้นและผนัง ช่วยสร้างพื้นผิวและบรรยากาศที่เรียบหรู",
    "nameEn": "CT2-MSD8830P",
    "categoryLabelEn": "Marble Tile",
    "subcategoryEn": "Marble Tile",
    "descriptionEn": "Marble-look tiles for floors and walls, creating an elegant surface and atmosphere."
  },
  {
    "id": "catalog-224",
    "name": "CTK6684A",
    "image": "./image/marble-tiles/ctk6684a.jpg",
    "gallery": [
      "./image/marble-tiles/ctt813.jpg",
      "./image/marble-tiles/ctlm20.jpg",
      "./image/marble-tiles/ctk6681a.jpg",
      "./image/marble-tiles/ct2-msd8830p.jpg"
    ],
    "category": "tile",
    "categoryLabel": "กระเบื้องหินอ่อน",
    "subcategory": "กระเบื้องหินอ่อน",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "กระเบื้องหินอ่อนสำหรับงานพื้นและผนัง ช่วยสร้างพื้นผิวและบรรยากาศที่เรียบหรู",
    "nameEn": "CTK6684A",
    "categoryLabelEn": "Marble Tile",
    "subcategoryEn": "Marble Tile",
    "descriptionEn": "Marble-look tiles for floors and walls, creating an elegant surface and atmosphere."
  },
  {
    "id": "catalog-225",
    "name": "CTK6684D",
    "image": "./image/marble-tiles/ctk6684d.jpg",
    "gallery": [
      "./image/marble-tiles/ctt813.jpg",
      "./image/marble-tiles/ctlm20.jpg",
      "./image/marble-tiles/ctk6681a.jpg",
      "./image/marble-tiles/ct2-msd8830p.jpg"
    ],
    "category": "tile",
    "categoryLabel": "กระเบื้องหินอ่อน",
    "subcategory": "กระเบื้องหินอ่อน",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "กระเบื้องหินอ่อนสำหรับงานพื้นและผนัง ช่วยสร้างพื้นผิวและบรรยากาศที่เรียบหรู",
    "nameEn": "CTK6684D",
    "categoryLabelEn": "Marble Tile",
    "subcategoryEn": "Marble Tile",
    "descriptionEn": "Marble-look tiles for floors and walls, creating an elegant surface and atmosphere."
  },
  {
    "id": "catalog-226",
    "name": "CTLM21",
    "image": "./image/marble-tiles/ctlm21.jpg",
    "gallery": [
      "./image/marble-tiles/ctt813.jpg",
      "./image/marble-tiles/ctlm20.jpg",
      "./image/marble-tiles/ctk6681a.jpg",
      "./image/marble-tiles/ct2-msd8830p.jpg"
    ],
    "category": "tile",
    "categoryLabel": "กระเบื้องหินอ่อน",
    "subcategory": "กระเบื้องหินอ่อน",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "กระเบื้องหินอ่อนสำหรับงานพื้นและผนัง ช่วยสร้างพื้นผิวและบรรยากาศที่เรียบหรู",
    "nameEn": "CTLM21",
    "categoryLabelEn": "Marble Tile",
    "subcategoryEn": "Marble Tile",
    "descriptionEn": "Marble-look tiles for floors and walls, creating an elegant surface and atmosphere."
  },
  {
    "id": "catalog-227",
    "name": "CTK6685B",
    "image": "./image/marble-tiles/ctk6685b.jpg",
    "gallery": [
      "./image/marble-tiles/ctt813.jpg",
      "./image/marble-tiles/ctlm20.jpg",
      "./image/marble-tiles/ctk6681a.jpg",
      "./image/marble-tiles/ct2-msd8830p.jpg"
    ],
    "category": "tile",
    "categoryLabel": "กระเบื้องหินอ่อน",
    "subcategory": "กระเบื้องหินอ่อน",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "กระเบื้องหินอ่อนสำหรับงานพื้นและผนัง ช่วยสร้างพื้นผิวและบรรยากาศที่เรียบหรู",
    "nameEn": "CTK6685B",
    "categoryLabelEn": "Marble Tile",
    "subcategoryEn": "Marble Tile",
    "descriptionEn": "Marble-look tiles for floors and walls, creating an elegant surface and atmosphere."
  },
  {
    "id": "catalog-228",
    "name": "CT6618 600x600",
    "image": "./image/marble-tiles/ct6618-600x600.jpg",
    "gallery": [
      "./image/marble-tiles/ctt813.jpg",
      "./image/marble-tiles/ctlm20.jpg",
      "./image/marble-tiles/ctk6681a.jpg",
      "./image/marble-tiles/ct2-msd8830p.jpg"
    ],
    "category": "tile",
    "categoryLabel": "กระเบื้องหินอ่อน",
    "subcategory": "กระเบื้องหินอ่อน",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "กระเบื้องหินอ่อนสำหรับงานพื้นและผนัง ช่วยสร้างพื้นผิวและบรรยากาศที่เรียบหรู",
    "nameEn": "CT6618 600x600",
    "categoryLabelEn": "Marble Tile",
    "subcategoryEn": "Marble Tile",
    "descriptionEn": "Marble-look tiles for floors and walls, creating an elegant surface and atmosphere."
  },
  {
    "id": "catalog-229",
    "name": "CTK6687B",
    "image": "./image/marble-tiles/ctk6687b.jpg",
    "gallery": [
      "./image/marble-tiles/ctt813.jpg",
      "./image/marble-tiles/ctlm20.jpg",
      "./image/marble-tiles/ctk6681a.jpg",
      "./image/marble-tiles/ct2-msd8830p.jpg"
    ],
    "category": "tile",
    "categoryLabel": "กระเบื้องหินอ่อน",
    "subcategory": "กระเบื้องหินอ่อน",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "กระเบื้องหินอ่อนสำหรับงานพื้นและผนัง ช่วยสร้างพื้นผิวและบรรยากาศที่เรียบหรู",
    "nameEn": "CTK6687B",
    "categoryLabelEn": "Marble Tile",
    "subcategoryEn": "Marble Tile",
    "descriptionEn": "Marble-look tiles for floors and walls, creating an elegant surface and atmosphere."
  },
  {
    "id": "catalog-230",
    "name": "CTLM17",
    "image": "./image/marble-tiles/ctlm17.jpg",
    "gallery": [
      "./image/marble-tiles/ctt813.jpg",
      "./image/marble-tiles/ctlm20.jpg",
      "./image/marble-tiles/ctk6681a.jpg",
      "./image/marble-tiles/ct2-msd8830p.jpg"
    ],
    "category": "tile",
    "categoryLabel": "กระเบื้องหินอ่อน",
    "subcategory": "กระเบื้องหินอ่อน",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "กระเบื้องหินอ่อนสำหรับงานพื้นและผนัง ช่วยสร้างพื้นผิวและบรรยากาศที่เรียบหรู",
    "nameEn": "CTLM17",
    "categoryLabelEn": "Marble Tile",
    "subcategoryEn": "Marble Tile",
    "descriptionEn": "Marble-look tiles for floors and walls, creating an elegant surface and atmosphere."
  },
  {
    "id": "catalog-231",
    "name": "CT2-MSD8818P",
    "image": "./image/marble-tiles/ct2-msd8818p.jpg",
    "gallery": [
      "./image/marble-tiles/ctt813.jpg",
      "./image/marble-tiles/ctlm20.jpg",
      "./image/marble-tiles/ctk6681a.jpg",
      "./image/marble-tiles/ct2-msd8830p.jpg"
    ],
    "category": "tile",
    "categoryLabel": "กระเบื้องหินอ่อน",
    "subcategory": "กระเบื้องหินอ่อน",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "กระเบื้องหินอ่อนสำหรับงานพื้นและผนัง ช่วยสร้างพื้นผิวและบรรยากาศที่เรียบหรู",
    "nameEn": "CT2-MSD8818P",
    "categoryLabelEn": "Marble Tile",
    "subcategoryEn": "Marble Tile",
    "descriptionEn": "Marble-look tiles for floors and walls, creating an elegant surface and atmosphere."
  },
  {
    "id": "catalog-232",
    "name": "CT2-MSD8825P",
    "image": "./image/marble-tiles/ct2-msd8825p.jpg",
    "gallery": [
      "./image/marble-tiles/ctt813.jpg",
      "./image/marble-tiles/ctlm20.jpg",
      "./image/marble-tiles/ctk6681a.jpg",
      "./image/marble-tiles/ct2-msd8830p.jpg"
    ],
    "category": "tile",
    "categoryLabel": "กระเบื้องหินอ่อน",
    "subcategory": "กระเบื้องหินอ่อน",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "กระเบื้องหินอ่อนสำหรับงานพื้นและผนัง ช่วยสร้างพื้นผิวและบรรยากาศที่เรียบหรู",
    "nameEn": "CT2-MSD8825P",
    "categoryLabelEn": "Marble Tile",
    "subcategoryEn": "Marble Tile",
    "descriptionEn": "Marble-look tiles for floors and walls, creating an elegant surface and atmosphere."
  },
  {
    "id": "catalog-233",
    "name": "CTLM14",
    "image": "./image/marble-tiles/ctlm14.jpg",
    "gallery": [
      "./image/marble-tiles/ctt813.jpg",
      "./image/marble-tiles/ctlm20.jpg",
      "./image/marble-tiles/ctk6681a.jpg",
      "./image/marble-tiles/ct2-msd8830p.jpg"
    ],
    "category": "tile",
    "categoryLabel": "กระเบื้องหินอ่อน",
    "subcategory": "กระเบื้องหินอ่อน",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "กระเบื้องหินอ่อนสำหรับงานพื้นและผนัง ช่วยสร้างพื้นผิวและบรรยากาศที่เรียบหรู",
    "nameEn": "CTLM14",
    "categoryLabelEn": "Marble Tile",
    "subcategoryEn": "Marble Tile",
    "descriptionEn": "Marble-look tiles for floors and walls, creating an elegant surface and atmosphere."
  },
  {
    "id": "catalog-234",
    "name": "CT2-MSD8880",
    "image": "./image/marble-tiles/ct2-msd8880.jpg",
    "gallery": [
      "./image/marble-tiles/ctt813.jpg",
      "./image/marble-tiles/ctlm20.jpg",
      "./image/marble-tiles/ctk6681a.jpg",
      "./image/marble-tiles/ct2-msd8830p.jpg"
    ],
    "category": "tile",
    "categoryLabel": "กระเบื้องหินอ่อน",
    "subcategory": "กระเบื้องหินอ่อน",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "กระเบื้องหินอ่อนสำหรับงานพื้นและผนัง ช่วยสร้างพื้นผิวและบรรยากาศที่เรียบหรู",
    "nameEn": "CT2-MSD8880",
    "categoryLabelEn": "Marble Tile",
    "subcategoryEn": "Marble Tile",
    "descriptionEn": "Marble-look tiles for floors and walls, creating an elegant surface and atmosphere."
  },
  {
    "id": "catalog-235",
    "name": "CTK6685C",
    "image": "./image/marble-tiles/ctk6685c.jpg",
    "gallery": [
      "./image/marble-tiles/ctt813.jpg",
      "./image/marble-tiles/ctlm20.jpg",
      "./image/marble-tiles/ctk6681a.jpg",
      "./image/marble-tiles/ct2-msd8830p.jpg"
    ],
    "category": "tile",
    "categoryLabel": "กระเบื้องหินอ่อน",
    "subcategory": "กระเบื้องหินอ่อน",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "กระเบื้องหินอ่อนสำหรับงานพื้นและผนัง ช่วยสร้างพื้นผิวและบรรยากาศที่เรียบหรู",
    "nameEn": "CTK6685C",
    "categoryLabelEn": "Marble Tile",
    "subcategoryEn": "Marble Tile",
    "descriptionEn": "Marble-look tiles for floors and walls, creating an elegant surface and atmosphere."
  },
  {
    "id": "catalog-236",
    "name": "CTLM18",
    "image": "./image/marble-tiles/ctlm18.jpg",
    "gallery": [
      "./image/marble-tiles/ctt813.jpg",
      "./image/marble-tiles/ctlm20.jpg",
      "./image/marble-tiles/ctk6681a.jpg",
      "./image/marble-tiles/ct2-msd8830p.jpg"
    ],
    "category": "tile",
    "categoryLabel": "กระเบื้องหินอ่อน",
    "subcategory": "กระเบื้องหินอ่อน",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "กระเบื้องหินอ่อนสำหรับงานพื้นและผนัง ช่วยสร้างพื้นผิวและบรรยากาศที่เรียบหรู",
    "nameEn": "CTLM18",
    "categoryLabelEn": "Marble Tile",
    "subcategoryEn": "Marble Tile",
    "descriptionEn": "Marble-look tiles for floors and walls, creating an elegant surface and atmosphere."
  },
  {
    "id": "catalog-237",
    "name": "CTHD6304",
    "image": "./image/marble-tiles/cthd6304.jpg",
    "gallery": [
      "./image/marble-tiles/ctt813.jpg",
      "./image/marble-tiles/ctlm20.jpg",
      "./image/marble-tiles/ctk6681a.jpg",
      "./image/marble-tiles/ct2-msd8830p.jpg"
    ],
    "category": "tile",
    "categoryLabel": "กระเบื้องหินอ่อน",
    "subcategory": "กระเบื้องหินอ่อน",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "กระเบื้องหินอ่อนสำหรับงานพื้นและผนัง ช่วยสร้างพื้นผิวและบรรยากาศที่เรียบหรู",
    "nameEn": "CTHD6304",
    "categoryLabelEn": "Marble Tile",
    "subcategoryEn": "Marble Tile",
    "descriptionEn": "Marble-look tiles for floors and walls, creating an elegant surface and atmosphere."
  },
  {
    "id": "catalog-238",
    "name": "CTHD8809",
    "image": "./image/marble-tiles/cthd8809.jpg",
    "gallery": [
      "./image/marble-tiles/ctt813.jpg",
      "./image/marble-tiles/ctlm20.jpg",
      "./image/marble-tiles/ctk6681a.jpg",
      "./image/marble-tiles/ct2-msd8830p.jpg"
    ],
    "category": "tile",
    "categoryLabel": "กระเบื้องหินอ่อน",
    "subcategory": "กระเบื้องหินอ่อน",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "กระเบื้องหินอ่อนสำหรับงานพื้นและผนัง ช่วยสร้างพื้นผิวและบรรยากาศที่เรียบหรู",
    "nameEn": "CTHD8809",
    "categoryLabelEn": "Marble Tile",
    "subcategoryEn": "Marble Tile",
    "descriptionEn": "Marble-look tiles for floors and walls, creating an elegant surface and atmosphere."
  },
  {
    "id": "catalog-239",
    "name": "CTK6685A",
    "image": "./image/marble-tiles/ctk6685a.jpg",
    "gallery": [
      "./image/marble-tiles/ctt813.jpg",
      "./image/marble-tiles/ctlm20.jpg",
      "./image/marble-tiles/ctk6681a.jpg",
      "./image/marble-tiles/ct2-msd8830p.jpg"
    ],
    "category": "tile",
    "categoryLabel": "กระเบื้องหินอ่อน",
    "subcategory": "กระเบื้องหินอ่อน",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "กระเบื้องหินอ่อนสำหรับงานพื้นและผนัง ช่วยสร้างพื้นผิวและบรรยากาศที่เรียบหรู",
    "nameEn": "CTK6685A",
    "categoryLabelEn": "Marble Tile",
    "subcategoryEn": "Marble Tile",
    "descriptionEn": "Marble-look tiles for floors and walls, creating an elegant surface and atmosphere."
  },
  {
    "id": "catalog-240",
    "name": "CTLM16",
    "image": "./image/marble-tiles/ctlm16.jpg",
    "gallery": [
      "./image/marble-tiles/ctt813.jpg",
      "./image/marble-tiles/ctlm20.jpg",
      "./image/marble-tiles/ctk6681a.jpg",
      "./image/marble-tiles/ct2-msd8830p.jpg"
    ],
    "category": "tile",
    "categoryLabel": "กระเบื้องหินอ่อน",
    "subcategory": "กระเบื้องหินอ่อน",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "กระเบื้องหินอ่อนสำหรับงานพื้นและผนัง ช่วยสร้างพื้นผิวและบรรยากาศที่เรียบหรู",
    "nameEn": "CTLM16",
    "categoryLabelEn": "Marble Tile",
    "subcategoryEn": "Marble Tile",
    "descriptionEn": "Marble-look tiles for floors and walls, creating an elegant surface and atmosphere."
  },
  {
    "id": "catalog-241",
    "name": "CTK6683C",
    "image": "./image/marble-tiles/ctk6683c.jpg",
    "gallery": [
      "./image/marble-tiles/ctt813.jpg",
      "./image/marble-tiles/ctlm20.jpg",
      "./image/marble-tiles/ctk6681a.jpg",
      "./image/marble-tiles/ct2-msd8830p.jpg"
    ],
    "category": "tile",
    "categoryLabel": "กระเบื้องหินอ่อน",
    "subcategory": "กระเบื้องหินอ่อน",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "กระเบื้องหินอ่อนสำหรับงานพื้นและผนัง ช่วยสร้างพื้นผิวและบรรยากาศที่เรียบหรู",
    "nameEn": "CTK6683C",
    "categoryLabelEn": "Marble Tile",
    "subcategoryEn": "Marble Tile",
    "descriptionEn": "Marble-look tiles for floors and walls, creating an elegant surface and atmosphere."
  },
  {
    "id": "catalog-242",
    "name": "CTHD6666",
    "image": "./image/marble-tiles/cthd6666.jpg",
    "gallery": [
      "./image/marble-tiles/ctt813.jpg",
      "./image/marble-tiles/ctlm20.jpg",
      "./image/marble-tiles/ctk6681a.jpg",
      "./image/marble-tiles/ct2-msd8830p.jpg"
    ],
    "category": "tile",
    "categoryLabel": "กระเบื้องหินอ่อน",
    "subcategory": "กระเบื้องหินอ่อน",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "กระเบื้องหินอ่อนสำหรับงานพื้นและผนัง ช่วยสร้างพื้นผิวและบรรยากาศที่เรียบหรู",
    "nameEn": "CTHD6666",
    "categoryLabelEn": "Marble Tile",
    "subcategoryEn": "Marble Tile",
    "descriptionEn": "Marble-look tiles for floors and walls, creating an elegant surface and atmosphere."
  },
  {
    "id": "catalog-243",
    "name": "CTK6687C",
    "image": "./image/marble-tiles/ctk6687c.jpg",
    "gallery": [
      "./image/marble-tiles/ctt813.jpg",
      "./image/marble-tiles/ctlm20.jpg",
      "./image/marble-tiles/ctk6681a.jpg",
      "./image/marble-tiles/ct2-msd8830p.jpg"
    ],
    "category": "tile",
    "categoryLabel": "กระเบื้องหินอ่อน",
    "subcategory": "กระเบื้องหินอ่อน",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "กระเบื้องหินอ่อนสำหรับงานพื้นและผนัง ช่วยสร้างพื้นผิวและบรรยากาศที่เรียบหรู",
    "nameEn": "CTK6687C",
    "categoryLabelEn": "Marble Tile",
    "subcategoryEn": "Marble Tile",
    "descriptionEn": "Marble-look tiles for floors and walls, creating an elegant surface and atmosphere."
  },
  {
    "id": "catalog-244",
    "name": "CTK6681B",
    "image": "./image/marble-tiles/ctk6681b.jpg",
    "gallery": [
      "./image/marble-tiles/ctt813.jpg",
      "./image/marble-tiles/ctlm20.jpg",
      "./image/marble-tiles/ctk6681a.jpg",
      "./image/marble-tiles/ct2-msd8830p.jpg"
    ],
    "category": "tile",
    "categoryLabel": "กระเบื้องหินอ่อน",
    "subcategory": "กระเบื้องหินอ่อน",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "กระเบื้องหินอ่อนสำหรับงานพื้นและผนัง ช่วยสร้างพื้นผิวและบรรยากาศที่เรียบหรู",
    "nameEn": "CTK6681B",
    "categoryLabelEn": "Marble Tile",
    "subcategoryEn": "Marble Tile",
    "descriptionEn": "Marble-look tiles for floors and walls, creating an elegant surface and atmosphere."
  },
  {
    "id": "catalog-245",
    "name": "CT6616 600x600",
    "image": "./image/marble-tiles/ct6616-600x600.jpg",
    "gallery": [
      "./image/marble-tiles/ctt813.jpg",
      "./image/marble-tiles/ctlm20.jpg",
      "./image/marble-tiles/ctk6681a.jpg",
      "./image/marble-tiles/ct2-msd8830p.jpg"
    ],
    "category": "tile",
    "categoryLabel": "กระเบื้องหินอ่อน",
    "subcategory": "กระเบื้องหินอ่อน",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "กระเบื้องหินอ่อนสำหรับงานพื้นและผนัง ช่วยสร้างพื้นผิวและบรรยากาศที่เรียบหรู",
    "nameEn": "CT6616 600x600",
    "categoryLabelEn": "Marble Tile",
    "subcategoryEn": "Marble Tile",
    "descriptionEn": "Marble-look tiles for floors and walls, creating an elegant surface and atmosphere."
  },
  {
    "id": "catalog-246",
    "name": "CTK6687A",
    "image": "./image/marble-tiles/ctk6687a.jpg",
    "gallery": [
      "./image/marble-tiles/ctt813.jpg",
      "./image/marble-tiles/ctlm20.jpg",
      "./image/marble-tiles/ctk6681a.jpg",
      "./image/marble-tiles/ct2-msd8830p.jpg"
    ],
    "category": "tile",
    "categoryLabel": "กระเบื้องหินอ่อน",
    "subcategory": "กระเบื้องหินอ่อน",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "กระเบื้องหินอ่อนสำหรับงานพื้นและผนัง ช่วยสร้างพื้นผิวและบรรยากาศที่เรียบหรู",
    "nameEn": "CTK6687A",
    "categoryLabelEn": "Marble Tile",
    "subcategoryEn": "Marble Tile",
    "descriptionEn": "Marble-look tiles for floors and walls, creating an elegant surface and atmosphere."
  },
  {
    "id": "catalog-247",
    "name": "CTHD6305",
    "image": "./image/marble-tiles/cthd6305.jpg",
    "gallery": [
      "./image/marble-tiles/ctt813.jpg",
      "./image/marble-tiles/ctlm20.jpg",
      "./image/marble-tiles/ctk6681a.jpg",
      "./image/marble-tiles/ct2-msd8830p.jpg"
    ],
    "category": "tile",
    "categoryLabel": "กระเบื้องหินอ่อน",
    "subcategory": "กระเบื้องหินอ่อน",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "กระเบื้องหินอ่อนสำหรับงานพื้นและผนัง ช่วยสร้างพื้นผิวและบรรยากาศที่เรียบหรู",
    "nameEn": "CTHD6305",
    "categoryLabelEn": "Marble Tile",
    "subcategoryEn": "Marble Tile",
    "descriptionEn": "Marble-look tiles for floors and walls, creating an elegant surface and atmosphere."
  },
  {
    "id": "catalog-248",
    "name": "CT2-MSD8836P",
    "image": "./image/marble-tiles/ct2-msd8836p.jpg",
    "gallery": [
      "./image/marble-tiles/ctt813.jpg",
      "./image/marble-tiles/ctlm20.jpg",
      "./image/marble-tiles/ctk6681a.jpg",
      "./image/marble-tiles/ct2-msd8830p.jpg"
    ],
    "category": "tile",
    "categoryLabel": "กระเบื้องหินอ่อน",
    "subcategory": "กระเบื้องหินอ่อน",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "กระเบื้องหินอ่อนสำหรับงานพื้นและผนัง ช่วยสร้างพื้นผิวและบรรยากาศที่เรียบหรู",
    "nameEn": "CT2-MSD8836P",
    "categoryLabelEn": "Marble Tile",
    "subcategoryEn": "Marble Tile",
    "descriptionEn": "Marble-look tiles for floors and walls, creating an elegant surface and atmosphere."
  },
  {
    "id": "catalog-249",
    "name": "CTK6685D",
    "image": "./image/marble-tiles/ctk6685d.jpg",
    "gallery": [
      "./image/marble-tiles/ctt813.jpg",
      "./image/marble-tiles/ctlm20.jpg",
      "./image/marble-tiles/ctk6681a.jpg",
      "./image/marble-tiles/ct2-msd8830p.jpg"
    ],
    "category": "tile",
    "categoryLabel": "กระเบื้องหินอ่อน",
    "subcategory": "กระเบื้องหินอ่อน",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "กระเบื้องหินอ่อนสำหรับงานพื้นและผนัง ช่วยสร้างพื้นผิวและบรรยากาศที่เรียบหรู",
    "nameEn": "CTK6685D",
    "categoryLabelEn": "Marble Tile",
    "subcategoryEn": "Marble Tile",
    "descriptionEn": "Marble-look tiles for floors and walls, creating an elegant surface and atmosphere."
  },
  {
    "id": "catalog-250",
    "name": "CT6615 600x600",
    "image": "./image/marble-tiles/ct6615-600x600.jpg",
    "gallery": [
      "./image/marble-tiles/ctt813.jpg",
      "./image/marble-tiles/ctlm20.jpg",
      "./image/marble-tiles/ctk6681a.jpg",
      "./image/marble-tiles/ct2-msd8830p.jpg"
    ],
    "category": "tile",
    "categoryLabel": "กระเบื้องหินอ่อน",
    "subcategory": "กระเบื้องหินอ่อน",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "กระเบื้องหินอ่อนสำหรับงานพื้นและผนัง ช่วยสร้างพื้นผิวและบรรยากาศที่เรียบหรู",
    "nameEn": "CT6615 600x600",
    "categoryLabelEn": "Marble Tile",
    "subcategoryEn": "Marble Tile",
    "descriptionEn": "Marble-look tiles for floors and walls, creating an elegant surface and atmosphere."
  },
  {
    "id": "catalog-251",
    "name": "CT6619 600x600",
    "image": "./image/marble-tiles/ct6619-600x600.jpg",
    "gallery": [
      "./image/marble-tiles/ct6619-600x600.jpg",
      "./image/marble-tiles/ctt813.jpg",
      "./image/marble-tiles/ctlm20.jpg",
      "./image/marble-tiles/ctk6681a.jpg",
      "./image/marble-tiles/ct2-msd8830p.jpg"
    ],
    "category": "tile",
    "categoryLabel": "กระเบื้องหินอ่อน",
    "subcategory": "กระเบื้องหินอ่อน",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "กระเบื้องหินอ่อนสำหรับงานพื้นและผนัง ช่วยสร้างพื้นผิวและบรรยากาศที่เรียบหรู",
    "nameEn": "CT6619 600x600",
    "categoryLabelEn": "Marble Tile",
    "subcategoryEn": "Marble Tile",
    "descriptionEn": "Marble-look tiles for floors and walls, creating an elegant surface and atmosphere."
  },
  {
    "id": "catalog-252",
    "name": "CTK6683A",
    "image": "./image/marble-tiles/ctk6683a.jpg",
    "gallery": [
      "./image/marble-tiles/ctt813.jpg",
      "./image/marble-tiles/ctlm20.jpg",
      "./image/marble-tiles/ctk6681a.jpg",
      "./image/marble-tiles/ct2-msd8830p.jpg"
    ],
    "category": "tile",
    "categoryLabel": "กระเบื้องหินอ่อน",
    "subcategory": "กระเบื้องหินอ่อน",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "กระเบื้องหินอ่อนสำหรับงานพื้นและผนัง ช่วยสร้างพื้นผิวและบรรยากาศที่เรียบหรู",
    "nameEn": "CTK6683A",
    "categoryLabelEn": "Marble Tile",
    "subcategoryEn": "Marble Tile",
    "descriptionEn": "Marble-look tiles for floors and walls, creating an elegant surface and atmosphere."
  },
  {
    "id": "catalog-253",
    "name": "CTK6681C",
    "image": "./image/marble-tiles/ctk6681c.jpg",
    "gallery": [
      "./image/marble-tiles/ctt813.jpg",
      "./image/marble-tiles/ctlm20.jpg",
      "./image/marble-tiles/ctk6681a.jpg",
      "./image/marble-tiles/ct2-msd8830p.jpg"
    ],
    "category": "tile",
    "categoryLabel": "กระเบื้องหินอ่อน",
    "subcategory": "กระเบื้องหินอ่อน",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "กระเบื้องหินอ่อนสำหรับงานพื้นและผนัง ช่วยสร้างพื้นผิวและบรรยากาศที่เรียบหรู",
    "nameEn": "CTK6681C",
    "categoryLabelEn": "Marble Tile",
    "subcategoryEn": "Marble Tile",
    "descriptionEn": "Marble-look tiles for floors and walls, creating an elegant surface and atmosphere."
  },
  {
    "id": "catalog-254",
    "name": "CT2-MSD8816P",
    "image": "./image/marble-tiles/ct2-msd8816p.jpg",
    "gallery": [
      "./image/marble-tiles/ctt813.jpg",
      "./image/marble-tiles/ctlm20.jpg",
      "./image/marble-tiles/ctk6681a.jpg",
      "./image/marble-tiles/ct2-msd8830p.jpg"
    ],
    "category": "tile",
    "categoryLabel": "กระเบื้องหินอ่อน",
    "subcategory": "กระเบื้องหินอ่อน",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "กระเบื้องหินอ่อนสำหรับงานพื้นและผนัง ช่วยสร้างพื้นผิวและบรรยากาศที่เรียบหรู",
    "nameEn": "CT2-MSD8816P",
    "categoryLabelEn": "Marble Tile",
    "subcategoryEn": "Marble Tile",
    "descriptionEn": "Marble-look tiles for floors and walls, creating an elegant surface and atmosphere."
  },
  {
    "id": "catalog-255",
    "name": "CTLM15",
    "image": "./image/marble-tiles/ctlm15.jpg",
    "gallery": [
      "./image/marble-tiles/ctt813.jpg",
      "./image/marble-tiles/ctlm20.jpg",
      "./image/marble-tiles/ctk6681a.jpg",
      "./image/marble-tiles/ct2-msd8830p.jpg"
    ],
    "category": "tile",
    "categoryLabel": "กระเบื้องหินอ่อน",
    "subcategory": "กระเบื้องหินอ่อน",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "กระเบื้องหินอ่อนสำหรับงานพื้นและผนัง ช่วยสร้างพื้นผิวและบรรยากาศที่เรียบหรู",
    "nameEn": "CTLM15",
    "categoryLabelEn": "Marble Tile",
    "subcategoryEn": "Marble Tile",
    "descriptionEn": "Marble-look tiles for floors and walls, creating an elegant surface and atmosphere."
  },
  {
    "id": "catalog-256",
    "name": "CTK6683B",
    "image": "./image/marble-tiles/ctk6683b.jpg",
    "gallery": [
      "./image/marble-tiles/ctt813.jpg",
      "./image/marble-tiles/ctlm20.jpg",
      "./image/marble-tiles/ctk6681a.jpg",
      "./image/marble-tiles/ct2-msd8830p.jpg"
    ],
    "category": "tile",
    "categoryLabel": "กระเบื้องหินอ่อน",
    "subcategory": "กระเบื้องหินอ่อน",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "กระเบื้องหินอ่อนสำหรับงานพื้นและผนัง ช่วยสร้างพื้นผิวและบรรยากาศที่เรียบหรู",
    "nameEn": "CTK6683B",
    "categoryLabelEn": "Marble Tile",
    "subcategoryEn": "Marble Tile",
    "descriptionEn": "Marble-look tiles for floors and walls, creating an elegant surface and atmosphere."
  },
  {
    "id": "catalog-257",
    "name": "CT8819",
    "image": "./image/marble-tiles/ct8819.jpg",
    "gallery": [
      "./image/marble-tiles/ctt813.jpg",
      "./image/marble-tiles/ctlm20.jpg",
      "./image/marble-tiles/ctk6681a.jpg",
      "./image/marble-tiles/ct2-msd8830p.jpg"
    ],
    "category": "tile",
    "categoryLabel": "กระเบื้องหินอ่อน",
    "subcategory": "กระเบื้องหินอ่อน",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "กระเบื้องหินอ่อนสำหรับงานพื้นและผนัง ช่วยสร้างพื้นผิวและบรรยากาศที่เรียบหรู",
    "nameEn": "CT8819",
    "categoryLabelEn": "Marble Tile",
    "subcategoryEn": "Marble Tile",
    "descriptionEn": "Marble-look tiles for floors and walls, creating an elegant surface and atmosphere."
  },
  {
    "id": "catalog-258",
    "name": "CTK6684B",
    "image": "./image/marble-tiles/ctk6684b.jpg",
    "gallery": [
      "./image/marble-tiles/ctt813.jpg",
      "./image/marble-tiles/ctlm20.jpg",
      "./image/marble-tiles/ctk6681a.jpg",
      "./image/marble-tiles/ct2-msd8830p.jpg"
    ],
    "category": "tile",
    "categoryLabel": "กระเบื้องหินอ่อน",
    "subcategory": "กระเบื้องหินอ่อน",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "กระเบื้องหินอ่อนสำหรับงานพื้นและผนัง ช่วยสร้างพื้นผิวและบรรยากาศที่เรียบหรู",
    "nameEn": "CTK6684B",
    "categoryLabelEn": "Marble Tile",
    "subcategoryEn": "Marble Tile",
    "descriptionEn": "Marble-look tiles for floors and walls, creating an elegant surface and atmosphere."
  },
  {
    "id": "catalog-259",
    "name": "CTCDS8153",
    "image": "./image/marble-tiles/ctcds8153.jpg",
    "gallery": [
      "./image/marble-tiles/ctt813.jpg",
      "./image/marble-tiles/ctlm20.jpg",
      "./image/marble-tiles/ctk6681a.jpg",
      "./image/marble-tiles/ct2-msd8830p.jpg"
    ],
    "category": "tile",
    "categoryLabel": "กระเบื้องหินอ่อน",
    "subcategory": "กระเบื้องหินอ่อน",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "กระเบื้องหินอ่อนสำหรับงานพื้นและผนัง ช่วยสร้างพื้นผิวและบรรยากาศที่เรียบหรู",
    "nameEn": "CTCDS8153",
    "categoryLabelEn": "Marble Tile",
    "subcategoryEn": "Marble Tile",
    "descriptionEn": "Marble-look tiles for floors and walls, creating an elegant surface and atmosphere."
  },
  {
    "id": "catalog-260",
    "name": "CTK6683D",
    "image": "./image/marble-tiles/ctk6683d.jpg",
    "gallery": [
      "./image/marble-tiles/ctt813.jpg",
      "./image/marble-tiles/ctlm20.jpg",
      "./image/marble-tiles/ctk6681a.jpg",
      "./image/marble-tiles/ct2-msd8830p.jpg"
    ],
    "category": "tile",
    "categoryLabel": "กระเบื้องหินอ่อน",
    "subcategory": "กระเบื้องหินอ่อน",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "กระเบื้องหินอ่อนสำหรับงานพื้นและผนัง ช่วยสร้างพื้นผิวและบรรยากาศที่เรียบหรู",
    "nameEn": "CTK6683D",
    "categoryLabelEn": "Marble Tile",
    "subcategoryEn": "Marble Tile",
    "descriptionEn": "Marble-look tiles for floors and walls, creating an elegant surface and atmosphere."
  },
  {
    "id": "catalog-261",
    "name": "CTLM19",
    "image": "./image/marble-tiles/ctlm19.jpg",
    "gallery": [
      "./image/marble-tiles/ctt813.jpg",
      "./image/marble-tiles/ctlm20.jpg",
      "./image/marble-tiles/ctk6681a.jpg",
      "./image/marble-tiles/ct2-msd8830p.jpg"
    ],
    "category": "tile",
    "categoryLabel": "กระเบื้องหินอ่อน",
    "subcategory": "กระเบื้องหินอ่อน",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "กระเบื้องหินอ่อนสำหรับงานพื้นและผนัง ช่วยสร้างพื้นผิวและบรรยากาศที่เรียบหรู",
    "nameEn": "CTLM19",
    "categoryLabelEn": "Marble Tile",
    "subcategoryEn": "Marble Tile",
    "descriptionEn": "Marble-look tiles for floors and walls, creating an elegant surface and atmosphere."
  },
  {
    "id": "catalog-262",
    "name": "CTK6684C",
    "image": "./image/marble-tiles/ctk6684c.jpg",
    "gallery": [
      "./image/marble-tiles/ctt813.jpg",
      "./image/marble-tiles/ctlm20.jpg",
      "./image/marble-tiles/ctk6681a.jpg",
      "./image/marble-tiles/ct2-msd8830p.jpg"
    ],
    "category": "tile",
    "categoryLabel": "กระเบื้องหินอ่อน",
    "subcategory": "กระเบื้องหินอ่อน",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "กระเบื้องหินอ่อนสำหรับงานพื้นและผนัง ช่วยสร้างพื้นผิวและบรรยากาศที่เรียบหรู",
    "nameEn": "CTK6684C",
    "categoryLabelEn": "Marble Tile",
    "subcategoryEn": "Marble Tile",
    "descriptionEn": "Marble-look tiles for floors and walls, creating an elegant surface and atmosphere."
  },
  {
    "id": "catalog-263",
    "name": "ประตู HDF3",
    "image": "./image/hdf-doors/hdf-door3.jpg",
    "gallery": [
      "./image/hdf-doors/hdf-door1.jpg",
      "./image/hdf-doors/hdf-door1.jpg",
      "./image/hdf-doors/hdf-door5.jpg",
      "./image/hdf-doors/hdf-door2.jpg"
    ],
    "category": "door",
    "categoryLabel": "ประตู",
    "subcategory": "ประตู HDF",
    "price": 0,
    "unit": "ชุด",
    "description": "ประตูสำหรับบ้านและโครงการ มีหลายรูปแบบและผิววัสดุให้เลือกตามสไตล์การตกแต่ง",
    "nameEn": "HDF Door 3",
    "categoryLabelEn": "Doors",
    "subcategoryEn": "HDF Door",
    "descriptionEn": "Doors for homes and projects, available in a range of designs and finishes to suit different interior styles."
  },
  {
    "id": "catalog-264",
    "name": "ประตู HDF1",
    "image": "./image/hdf-doors/hdf-door1.jpg",
    "gallery": [
      "./image/hdf-doors/hdf-door1.jpg",
      "./image/hdf-doors/hdf-door1.jpg",
      "./image/hdf-doors/hdf-door5.jpg",
      "./image/hdf-doors/hdf-door2.jpg"
    ],
    "category": "door",
    "categoryLabel": "ประตู",
    "subcategory": "ประตู HDF",
    "price": 0,
    "unit": "ชุด",
    "description": "ประตูสำหรับบ้านและโครงการ มีหลายรูปแบบและผิววัสดุให้เลือกตามสไตล์การตกแต่ง",
    "nameEn": "HDF Door 1",
    "categoryLabelEn": "Doors",
    "subcategoryEn": "HDF Door",
    "descriptionEn": "Doors for homes and projects, available in a range of designs and finishes to suit different interior styles."
  },
  {
    "id": "catalog-265",
    "name": "ประตู HDF5",
    "image": "./image/hdf-doors/hdf-door5.jpg",
    "gallery": [
      "./image/hdf-doors/hdf-door1.jpg",
      "./image/hdf-doors/hdf-door1.jpg",
      "./image/hdf-doors/hdf-door5.jpg",
      "./image/hdf-doors/hdf-door2.jpg"
    ],
    "category": "door",
    "categoryLabel": "ประตู",
    "subcategory": "ประตู HDF",
    "price": 0,
    "unit": "ชุด",
    "description": "ประตูสำหรับบ้านและโครงการ มีหลายรูปแบบและผิววัสดุให้เลือกตามสไตล์การตกแต่ง",
    "nameEn": "HDF Door 5",
    "categoryLabelEn": "Doors",
    "subcategoryEn": "HDF Door",
    "descriptionEn": "Doors for homes and projects, available in a range of designs and finishes to suit different interior styles."
  },
  {
    "id": "catalog-266",
    "name": "ประตู HDF2",
    "image": "./image/hdf-doors/hdf-door2.jpg",
    "gallery": [
      "./image/hdf-doors/hdf-door1.jpg",
      "./image/hdf-doors/hdf-door1.jpg",
      "./image/hdf-doors/hdf-door5.jpg",
      "./image/hdf-doors/hdf-door2.jpg"
    ],
    "category": "door",
    "categoryLabel": "ประตู",
    "subcategory": "ประตู HDF",
    "price": 0,
    "unit": "ชุด",
    "description": "ประตูสำหรับบ้านและโครงการ มีหลายรูปแบบและผิววัสดุให้เลือกตามสไตล์การตกแต่ง",
    "nameEn": "HDF Door 2",
    "categoryLabelEn": "Doors",
    "subcategoryEn": "HDF Door",
    "descriptionEn": "Doors for homes and projects, available in a range of designs and finishes to suit different interior styles."
  },
  {
    "id": "catalog-267",
    "name": "ประตู HDF4",
    "image": "./image/hdf-doors/hdf-door4.jpg",
    "gallery": [
      "./image/hdf-doors/hdf-door1.jpg",
      "./image/hdf-doors/hdf-door1.jpg",
      "./image/hdf-doors/hdf-door5.jpg",
      "./image/hdf-doors/hdf-door2.jpg"
    ],
    "category": "door",
    "categoryLabel": "ประตู",
    "subcategory": "ประตู HDF",
    "price": 0,
    "unit": "ชุด",
    "description": "ประตูสำหรับบ้านและโครงการ มีหลายรูปแบบและผิววัสดุให้เลือกตามสไตล์การตกแต่ง",
    "nameEn": "HDF Door 4",
    "categoryLabelEn": "Doors",
    "subcategoryEn": "HDF Door",
    "descriptionEn": "Doors for homes and projects, available in a range of designs and finishes to suit different interior styles."
  },
  {
    "id": "catalog-268",
    "name": "HDF Door",
    "image": "./image/hdf-doors/hdf-door.jpg",
    "gallery": [
      "./image/hdf-doors/hdf-door1.jpg",
      "./image/hdf-doors/hdf-door1.jpg",
      "./image/hdf-doors/hdf-door5.jpg",
      "./image/hdf-doors/hdf-door2.jpg"
    ],
    "category": "door",
    "categoryLabel": "ประตู",
    "subcategory": "ประตู HDF",
    "price": 0,
    "unit": "ชุด",
    "description": "ประตูสำหรับบ้านและโครงการ มีหลายรูปแบบและผิววัสดุให้เลือกตามสไตล์การตกแต่ง",
    "nameEn": "HDF Door",
    "categoryLabelEn": "Doors",
    "subcategoryEn": "HDF Door",
    "descriptionEn": "Doors for homes and projects, available in a range of designs and finishes to suit different interior styles."
  },
  {
    "id": "catalog-269",
    "name": "ประตูปิดผิววีเนียร์01",
    "image": "./image/veneer-doors/01.jpg",
    "gallery": [
      "./image/veneer-doors/01.jpg",
      "./image/veneer-doors/06.jpg",
      "./image/veneer-doors/04.jpg",
      "./image/veneer-doors/veneer-door.jpg"
    ],
    "category": "door",
    "categoryLabel": "ประตู",
    "subcategory": "ประตูวีเนียร์",
    "price": 0,
    "unit": "ชุด",
    "description": "ประตูสำหรับบ้านและโครงการ มีหลายรูปแบบและผิววัสดุให้เลือกตามสไตล์การตกแต่ง",
    "nameEn": "Veneer Door 01",
    "categoryLabelEn": "Doors",
    "subcategoryEn": "Veneer Door",
    "descriptionEn": "Doors for homes and projects, available in a range of designs and finishes to suit different interior styles."
  },
  {
    "id": "catalog-270",
    "name": "ประตูปิดผิววีเนียร์06",
    "image": "./image/veneer-doors/06.jpg",
    "gallery": [
      "./image/veneer-doors/01.jpg",
      "./image/veneer-doors/06.jpg",
      "./image/veneer-doors/04.jpg",
      "./image/veneer-doors/veneer-door.jpg"
    ],
    "category": "door",
    "categoryLabel": "ประตู",
    "subcategory": "ประตูวีเนียร์",
    "price": 0,
    "unit": "ชุด",
    "description": "ประตูสำหรับบ้านและโครงการ มีหลายรูปแบบและผิววัสดุให้เลือกตามสไตล์การตกแต่ง",
    "nameEn": "Veneer Door 06",
    "categoryLabelEn": "Doors",
    "subcategoryEn": "Veneer Door",
    "descriptionEn": "Doors for homes and projects, available in a range of designs and finishes to suit different interior styles."
  },
  {
    "id": "catalog-271",
    "name": "ประตูปิดผิววีเนียร์04",
    "image": "./image/veneer-doors/04.jpg",
    "gallery": [
      "./image/veneer-doors/01.jpg",
      "./image/veneer-doors/06.jpg",
      "./image/veneer-doors/04.jpg",
      "./image/veneer-doors/veneer-door.jpg"
    ],
    "category": "door",
    "categoryLabel": "ประตู",
    "subcategory": "ประตูวีเนียร์",
    "price": 0,
    "unit": "ชุด",
    "description": "ประตูสำหรับบ้านและโครงการ มีหลายรูปแบบและผิววัสดุให้เลือกตามสไตล์การตกแต่ง",
    "nameEn": "Veneer Door 04",
    "categoryLabelEn": "Doors",
    "subcategoryEn": "Veneer Door",
    "descriptionEn": "Doors for homes and projects, available in a range of designs and finishes to suit different interior styles."
  },
  {
    "id": "catalog-272",
    "name": "Veneer Door",
    "image": "./image/veneer-doors/veneer-door.jpg",
    "gallery": [
      "./image/veneer-doors/01.jpg",
      "./image/veneer-doors/06.jpg",
      "./image/veneer-doors/04.jpg",
      "./image/veneer-doors/veneer-door.jpg"
    ],
    "category": "door",
    "categoryLabel": "ประตู",
    "subcategory": "ประตูวีเนียร์",
    "price": 0,
    "unit": "ชุด",
    "description": "ประตูสำหรับบ้านและโครงการ มีหลายรูปแบบและผิววัสดุให้เลือกตามสไตล์การตกแต่ง",
    "nameEn": "Veneer Door",
    "categoryLabelEn": "Doors",
    "subcategoryEn": "Veneer Door",
    "descriptionEn": "Doors for homes and projects, available in a range of designs and finishes to suit different interior styles."
  },
  {
    "id": "catalog-273",
    "name": "ประตูปิดผิววีเนียร์03",
    "image": "./image/veneer-doors/03.jpg",
    "gallery": [
      "./image/veneer-doors/01.jpg",
      "./image/veneer-doors/06.jpg",
      "./image/veneer-doors/04.jpg",
      "./image/veneer-doors/veneer-door.jpg"
    ],
    "category": "door",
    "categoryLabel": "ประตู",
    "subcategory": "ประตูวีเนียร์",
    "price": 0,
    "unit": "ชุด",
    "description": "ประตูสำหรับบ้านและโครงการ มีหลายรูปแบบและผิววัสดุให้เลือกตามสไตล์การตกแต่ง",
    "nameEn": "Veneer Door 03",
    "categoryLabelEn": "Doors",
    "subcategoryEn": "Veneer Door",
    "descriptionEn": "Doors for homes and projects, available in a range of designs and finishes to suit different interior styles."
  },
  {
    "id": "catalog-274",
    "name": "ประตูปิดผิววีเนียร์02",
    "image": "./image/veneer-doors/02.jpg",
    "gallery": [
      "./image/veneer-doors/01.jpg",
      "./image/veneer-doors/06.jpg",
      "./image/veneer-doors/04.jpg",
      "./image/veneer-doors/veneer-door.jpg"
    ],
    "category": "door",
    "categoryLabel": "ประตู",
    "subcategory": "ประตูวีเนียร์",
    "price": 0,
    "unit": "ชุด",
    "description": "ประตูสำหรับบ้านและโครงการ มีหลายรูปแบบและผิววัสดุให้เลือกตามสไตล์การตกแต่ง",
    "nameEn": "Veneer Door 02",
    "categoryLabelEn": "Doors",
    "subcategoryEn": "Veneer Door",
    "descriptionEn": "Doors for homes and projects, available in a range of designs and finishes to suit different interior styles."
  },
  {
    "id": "catalog-275",
    "name": "ประตูปิดผิววีเนียร์07",
    "image": "./image/veneer-doors/07.jpg",
    "gallery": [
      "./image/veneer-doors/01.jpg",
      "./image/veneer-doors/06.jpg",
      "./image/veneer-doors/04.jpg",
      "./image/veneer-doors/veneer-door.jpg"
    ],
    "category": "door",
    "categoryLabel": "ประตู",
    "subcategory": "ประตูวีเนียร์",
    "price": 0,
    "unit": "ชุด",
    "description": "ประตูสำหรับบ้านและโครงการ มีหลายรูปแบบและผิววัสดุให้เลือกตามสไตล์การตกแต่ง",
    "nameEn": "Veneer Door 07",
    "categoryLabelEn": "Doors",
    "subcategoryEn": "Veneer Door",
    "descriptionEn": "Doors for homes and projects, available in a range of designs and finishes to suit different interior styles."
  },
  {
    "id": "catalog-276",
    "name": "ประตูปิดผิววีเนียร์05",
    "image": "./image/veneer-doors/05.jpg",
    "gallery": [
      "./image/veneer-doors/01.jpg",
      "./image/veneer-doors/06.jpg",
      "./image/veneer-doors/04.jpg",
      "./image/veneer-doors/veneer-door.jpg"
    ],
    "category": "door",
    "categoryLabel": "ประตู",
    "subcategory": "ประตูวีเนียร์",
    "price": 0,
    "unit": "ชุด",
    "description": "ประตูสำหรับบ้านและโครงการ มีหลายรูปแบบและผิววัสดุให้เลือกตามสไตล์การตกแต่ง",
    "nameEn": "Veneer Door 05",
    "categoryLabelEn": "Doors",
    "subcategoryEn": "Veneer Door",
    "descriptionEn": "Doors for homes and projects, available in a range of designs and finishes to suit different interior styles."
  },
  {
    "id": "catalog-277",
    "name": "ประตู3",
    "image": "./image/solid-wood-doors/3.jpg",
    "gallery": [
      "./image/solid-wood-doors/3.jpg",
      "./image/solid-wood-doors/solid-wood-door1.jpg",
      "./image/solid-wood-doors/image.jpg",
      "./image/solid-wood-doors/2.jpg"
    ],
    "category": "door",
    "categoryLabel": "ประตู",
    "subcategory": "ประตูไม้จริง",
    "price": 0,
    "unit": "ชุด",
    "description": "ประตูสำหรับบ้านและโครงการ มีหลายรูปแบบและผิววัสดุให้เลือกตามสไตล์การตกแต่ง",
    "nameEn": "Door 3",
    "categoryLabelEn": "Doors",
    "subcategoryEn": "Solid Wood Door",
    "descriptionEn": "Doors for homes and projects, available in a range of designs and finishes to suit different interior styles."
  },
  {
    "id": "catalog-278",
    "name": "ประตูไม้จริง1",
    "image": "./image/solid-wood-doors/1.jpg",
    "gallery": [
      "./image/solid-wood-doors/3.jpg",
      "./image/solid-wood-doors/solid-wood-door1.jpg",
      "./image/solid-wood-doors/image.jpg",
      "./image/solid-wood-doors/2.jpg"
    ],
    "category": "door",
    "categoryLabel": "ประตู",
    "subcategory": "ประตูไม้จริง",
    "price": 0,
    "unit": "ชุด",
    "description": "ประตูสำหรับบ้านและโครงการ มีหลายรูปแบบและผิววัสดุให้เลือกตามสไตล์การตกแต่ง",
    "nameEn": "Solid Wood Door 1",
    "categoryLabelEn": "Doors",
    "subcategoryEn": "Solid Wood Door",
    "descriptionEn": "Doors for homes and projects, available in a range of designs and finishes to suit different interior styles."
  },
  {
    "id": "catalog-279",
    "name": "ประตูไม้",
    "image": "./image/solid-wood-doors/image.jpg",
    "gallery": [
      "./image/solid-wood-doors/3.jpg",
      "./image/solid-wood-doors/solid-wood-door1.jpg",
      "./image/solid-wood-doors/image.jpg",
      "./image/solid-wood-doors/2.jpg"
    ],
    "category": "door",
    "categoryLabel": "ประตู",
    "subcategory": "ประตูไม้จริง",
    "price": 0,
    "unit": "ชุด",
    "description": "ประตูสำหรับบ้านและโครงการ มีหลายรูปแบบและผิววัสดุให้เลือกตามสไตล์การตกแต่ง",
    "nameEn": "Solid Wood Door",
    "categoryLabelEn": "Doors",
    "subcategoryEn": "Solid Wood Door",
    "descriptionEn": "Doors for homes and projects, available in a range of designs and finishes to suit different interior styles."
  },
  {
    "id": "catalog-280",
    "name": "ประตู2",
    "image": "./image/solid-wood-doors/2.jpg",
    "gallery": [
      "./image/solid-wood-doors/3.jpg",
      "./image/solid-wood-doors/solid-wood-door1.jpg",
      "./image/solid-wood-doors/image.jpg",
      "./image/solid-wood-doors/2.jpg"
    ],
    "category": "door",
    "categoryLabel": "ประตู",
    "subcategory": "ประตูไม้จริง",
    "price": 0,
    "unit": "ชุด",
    "description": "ประตูสำหรับบ้านและโครงการ มีหลายรูปแบบและผิววัสดุให้เลือกตามสไตล์การตกแต่ง",
    "nameEn": "Door 2",
    "categoryLabelEn": "Doors",
    "subcategoryEn": "Solid Wood Door",
    "descriptionEn": "Doors for homes and projects, available in a range of designs and finishes to suit different interior styles."
  },
  {
    "id": "catalog-281",
    "name": "ประตู1",
    "image": "./image/solid-wood-doors/1.jpg",
    "gallery": [
      "./image/solid-wood-doors/3.jpg",
      "./image/solid-wood-doors/solid-wood-door1.jpg",
      "./image/solid-wood-doors/image.jpg",
      "./image/solid-wood-doors/2.jpg"
    ],
    "category": "door",
    "categoryLabel": "ประตู",
    "subcategory": "ประตูไม้จริง",
    "price": 0,
    "unit": "ชุด",
    "description": "ประตูสำหรับบ้านและโครงการ มีหลายรูปแบบและผิววัสดุให้เลือกตามสไตล์การตกแต่ง",
    "nameEn": "Door 1",
    "categoryLabelEn": "Doors",
    "subcategoryEn": "Solid Wood Door",
    "descriptionEn": "Doors for homes and projects, available in a range of designs and finishes to suit different interior styles."
  },
  {
    "id": "catalog-282",
    "name": "Door-5",
    "image": "./image/laminate-doors/door-5.jpg",
    "gallery": [
      "./image/laminate-doors/door-5.jpg",
      "./image/laminate-doors/laminate-door01.jpg",
      "./image/laminate-doors/door-6.jpg",
      "./image/laminate-doors/door-12.jpg"
    ],
    "category": "door",
    "categoryLabel": "ประตู",
    "subcategory": "ประตูปิดผิวลามิเนต",
    "price": 0,
    "unit": "ชุด",
    "description": "ประตูสำหรับบ้านและโครงการ มีหลายรูปแบบและผิววัสดุให้เลือกตามสไตล์การตกแต่ง",
    "nameEn": "Door-5",
    "categoryLabelEn": "Doors",
    "subcategoryEn": "Laminate-finish Door",
    "descriptionEn": "Doors for homes and projects, available in a range of designs and finishes to suit different interior styles."
  },
  {
    "id": "catalog-283",
    "name": "ประตูปิดผิวลามิเนต01",
    "image": "./image/laminate-doors/laminate-door01.jpg",
    "gallery": [
      "./image/laminate-doors/door-5.jpg",
      "./image/laminate-doors/laminate-door01.jpg",
      "./image/laminate-doors/door-6.jpg",
      "./image/laminate-doors/door-12.jpg"
    ],
    "category": "door",
    "categoryLabel": "ประตู",
    "subcategory": "ประตูปิดผิวลามิเนต",
    "price": 0,
    "unit": "ชุด",
    "description": "ประตูสำหรับบ้านและโครงการ มีหลายรูปแบบและผิววัสดุให้เลือกตามสไตล์การตกแต่ง",
    "nameEn": "Laminate-finish Door 01",
    "categoryLabelEn": "Doors",
    "subcategoryEn": "Laminate-finish Door",
    "descriptionEn": "Doors for homes and projects, available in a range of designs and finishes to suit different interior styles."
  },
  {
    "id": "catalog-284",
    "name": "Door-6",
    "image": "./image/laminate-doors/door-6.jpg",
    "gallery": [
      "./image/laminate-doors/door-5.jpg",
      "./image/laminate-doors/laminate-door01.jpg",
      "./image/laminate-doors/door-6.jpg",
      "./image/laminate-doors/door-12.jpg"
    ],
    "category": "door",
    "categoryLabel": "ประตู",
    "subcategory": "ประตูปิดผิวลามิเนต",
    "price": 0,
    "unit": "ชุด",
    "description": "ประตูสำหรับบ้านและโครงการ มีหลายรูปแบบและผิววัสดุให้เลือกตามสไตล์การตกแต่ง",
    "nameEn": "Door-6",
    "categoryLabelEn": "Doors",
    "subcategoryEn": "Laminate-finish Door",
    "descriptionEn": "Doors for homes and projects, available in a range of designs and finishes to suit different interior styles."
  },
  {
    "id": "catalog-285",
    "name": "Door-12",
    "image": "./image/laminate-doors/door-12.jpg",
    "gallery": [
      "./image/laminate-doors/door-5.jpg",
      "./image/laminate-doors/laminate-door01.jpg",
      "./image/laminate-doors/door-6.jpg",
      "./image/laminate-doors/door-12.jpg"
    ],
    "category": "door",
    "categoryLabel": "ประตู",
    "subcategory": "ประตูปิดผิวลามิเนต",
    "price": 0,
    "unit": "ชุด",
    "description": "ประตูสำหรับบ้านและโครงการ มีหลายรูปแบบและผิววัสดุให้เลือกตามสไตล์การตกแต่ง",
    "nameEn": "Door-12",
    "categoryLabelEn": "Doors",
    "subcategoryEn": "Laminate-finish Door",
    "descriptionEn": "Doors for homes and projects, available in a range of designs and finishes to suit different interior styles."
  },
  {
    "id": "catalog-286",
    "name": "Door-4",
    "image": "./image/laminate-doors/door-4.jpg",
    "gallery": [
      "./image/laminate-doors/door-5.jpg",
      "./image/laminate-doors/laminate-door01.jpg",
      "./image/laminate-doors/door-6.jpg",
      "./image/laminate-doors/door-12.jpg"
    ],
    "category": "door",
    "categoryLabel": "ประตู",
    "subcategory": "ประตูปิดผิวลามิเนต",
    "price": 0,
    "unit": "ชุด",
    "description": "ประตูสำหรับบ้านและโครงการ มีหลายรูปแบบและผิววัสดุให้เลือกตามสไตล์การตกแต่ง",
    "nameEn": "Door-4",
    "categoryLabelEn": "Doors",
    "subcategoryEn": "Laminate-finish Door",
    "descriptionEn": "Doors for homes and projects, available in a range of designs and finishes to suit different interior styles."
  },
  {
    "id": "catalog-287",
    "name": "Door-2",
    "image": "./image/laminate-doors/door-2.jpg",
    "gallery": [
      "./image/laminate-doors/door-5.jpg",
      "./image/laminate-doors/laminate-door01.jpg",
      "./image/laminate-doors/door-6.jpg",
      "./image/laminate-doors/door-12.jpg"
    ],
    "category": "door",
    "categoryLabel": "ประตู",
    "subcategory": "ประตูปิดผิวลามิเนต",
    "price": 0,
    "unit": "ชุด",
    "description": "ประตูสำหรับบ้านและโครงการ มีหลายรูปแบบและผิววัสดุให้เลือกตามสไตล์การตกแต่ง",
    "nameEn": "Door-2",
    "categoryLabelEn": "Doors",
    "subcategoryEn": "Laminate-finish Door",
    "descriptionEn": "Doors for homes and projects, available in a range of designs and finishes to suit different interior styles."
  },
  {
    "id": "catalog-288",
    "name": "Door-11",
    "image": "./image/laminate-doors/door-11.jpg",
    "gallery": [
      "./image/laminate-doors/door-5.jpg",
      "./image/laminate-doors/laminate-door01.jpg",
      "./image/laminate-doors/door-6.jpg",
      "./image/laminate-doors/door-12.jpg"
    ],
    "category": "door",
    "categoryLabel": "ประตู",
    "subcategory": "ประตูปิดผิวลามิเนต",
    "price": 0,
    "unit": "ชุด",
    "description": "ประตูสำหรับบ้านและโครงการ มีหลายรูปแบบและผิววัสดุให้เลือกตามสไตล์การตกแต่ง",
    "nameEn": "Door-11",
    "categoryLabelEn": "Doors",
    "subcategoryEn": "Laminate-finish Door",
    "descriptionEn": "Doors for homes and projects, available in a range of designs and finishes to suit different interior styles."
  },
  {
    "id": "catalog-289",
    "name": "Door-14",
    "image": "./image/laminate-doors/door-14.jpg",
    "gallery": [
      "./image/laminate-doors/door-5.jpg",
      "./image/laminate-doors/laminate-door01.jpg",
      "./image/laminate-doors/door-6.jpg",
      "./image/laminate-doors/door-12.jpg"
    ],
    "category": "door",
    "categoryLabel": "ประตู",
    "subcategory": "ประตูปิดผิวลามิเนต",
    "price": 0,
    "unit": "ชุด",
    "description": "ประตูสำหรับบ้านและโครงการ มีหลายรูปแบบและผิววัสดุให้เลือกตามสไตล์การตกแต่ง",
    "nameEn": "Door-14",
    "categoryLabelEn": "Doors",
    "subcategoryEn": "Laminate-finish Door",
    "descriptionEn": "Doors for homes and projects, available in a range of designs and finishes to suit different interior styles."
  },
  {
    "id": "catalog-290",
    "name": "ประตูปิดผิวลามิเนต03",
    "image": "./image/laminate-doors/laminate-door03.jpg",
    "gallery": [
      "./image/laminate-doors/door-5.jpg",
      "./image/laminate-doors/laminate-door01.jpg",
      "./image/laminate-doors/door-6.jpg",
      "./image/laminate-doors/door-12.jpg"
    ],
    "category": "door",
    "categoryLabel": "ประตู",
    "subcategory": "ประตูปิดผิวลามิเนต",
    "price": 0,
    "unit": "ชุด",
    "description": "ประตูสำหรับบ้านและโครงการ มีหลายรูปแบบและผิววัสดุให้เลือกตามสไตล์การตกแต่ง",
    "nameEn": "Laminate-finish Door 03",
    "categoryLabelEn": "Doors",
    "subcategoryEn": "Laminate-finish Door",
    "descriptionEn": "Doors for homes and projects, available in a range of designs and finishes to suit different interior styles."
  },
  {
    "id": "catalog-291",
    "name": "Door-8",
    "image": "./image/laminate-doors/door-8.jpg",
    "gallery": [
      "./image/laminate-doors/door-5.jpg",
      "./image/laminate-doors/laminate-door01.jpg",
      "./image/laminate-doors/door-6.jpg",
      "./image/laminate-doors/door-12.jpg"
    ],
    "category": "door",
    "categoryLabel": "ประตู",
    "subcategory": "ประตูปิดผิวลามิเนต",
    "price": 0,
    "unit": "ชุด",
    "description": "ประตูสำหรับบ้านและโครงการ มีหลายรูปแบบและผิววัสดุให้เลือกตามสไตล์การตกแต่ง",
    "nameEn": "Door-8",
    "categoryLabelEn": "Doors",
    "subcategoryEn": "Laminate-finish Door",
    "descriptionEn": "Doors for homes and projects, available in a range of designs and finishes to suit different interior styles."
  },
  {
    "id": "catalog-292",
    "name": "Door-13",
    "image": "./image/laminate-doors/door-13.jpg",
    "gallery": [
      "./image/laminate-doors/door-5.jpg",
      "./image/laminate-doors/laminate-door01.jpg",
      "./image/laminate-doors/door-6.jpg",
      "./image/laminate-doors/door-12.jpg"
    ],
    "category": "door",
    "categoryLabel": "ประตู",
    "subcategory": "ประตูปิดผิวลามิเนต",
    "price": 0,
    "unit": "ชุด",
    "description": "ประตูสำหรับบ้านและโครงการ มีหลายรูปแบบและผิววัสดุให้เลือกตามสไตล์การตกแต่ง",
    "nameEn": "Door-13",
    "categoryLabelEn": "Doors",
    "subcategoryEn": "Laminate-finish Door",
    "descriptionEn": "Doors for homes and projects, available in a range of designs and finishes to suit different interior styles."
  },
  {
    "id": "catalog-293",
    "name": "ประตูปิดผิวลามิเนต07",
    "image": "./image/laminate-doors/laminate-door07.jpg",
    "gallery": [
      "./image/laminate-doors/door-5.jpg",
      "./image/laminate-doors/laminate-door01.jpg",
      "./image/laminate-doors/door-6.jpg",
      "./image/laminate-doors/door-12.jpg"
    ],
    "category": "door",
    "categoryLabel": "ประตู",
    "subcategory": "ประตูปิดผิวลามิเนต",
    "price": 0,
    "unit": "ชุด",
    "description": "ประตูสำหรับบ้านและโครงการ มีหลายรูปแบบและผิววัสดุให้เลือกตามสไตล์การตกแต่ง",
    "nameEn": "Laminate-finish Door 07",
    "categoryLabelEn": "Doors",
    "subcategoryEn": "Laminate-finish Door",
    "descriptionEn": "Doors for homes and projects, available in a range of designs and finishes to suit different interior styles."
  },
  {
    "id": "catalog-294",
    "name": "ประตูปิดผิวลามิเนต05",
    "image": "./image/laminate-doors/laminate-door05.jpg",
    "gallery": [
      "./image/engineered-wood/05.jpg",
      "./image/laminate-doors/door-5.jpg",
      "./image/laminate-doors/laminate-door01.jpg",
      "./image/laminate-doors/door-6.jpg",
      "./image/laminate-doors/door-12.jpg"
    ],
    "category": "door",
    "categoryLabel": "ประตู",
    "subcategory": "ประตูปิดผิวลามิเนต",
    "price": 0,
    "unit": "ชุด",
    "description": "ประตูสำหรับบ้านและโครงการ มีหลายรูปแบบและผิววัสดุให้เลือกตามสไตล์การตกแต่ง",
    "nameEn": "Laminate-finish Door 05",
    "categoryLabelEn": "Doors",
    "subcategoryEn": "Laminate-finish Door",
    "descriptionEn": "Doors for homes and projects, available in a range of designs and finishes to suit different interior styles."
  },
  {
    "id": "catalog-295",
    "name": "ประตูปิดผิวลามิเนต04",
    "image": "./image/laminate-doors/laminate-door04.jpg",
    "gallery": [
      "./image/laminate-doors/door-5.jpg",
      "./image/laminate-doors/laminate-door01.jpg",
      "./image/laminate-doors/door-6.jpg",
      "./image/laminate-doors/door-12.jpg"
    ],
    "category": "door",
    "categoryLabel": "ประตู",
    "subcategory": "ประตูปิดผิวลามิเนต",
    "price": 0,
    "unit": "ชุด",
    "description": "ประตูสำหรับบ้านและโครงการ มีหลายรูปแบบและผิววัสดุให้เลือกตามสไตล์การตกแต่ง",
    "nameEn": "Laminate-finish Door 04",
    "categoryLabelEn": "Doors",
    "subcategoryEn": "Laminate-finish Door",
    "descriptionEn": "Doors for homes and projects, available in a range of designs and finishes to suit different interior styles."
  },
  {
    "id": "catalog-296",
    "name": "Door-1",
    "image": "./image/laminate-doors/door-1.jpg",
    "gallery": [
      "./image/laminate-doors/door-5.jpg",
      "./image/laminate-doors/laminate-door01.jpg",
      "./image/laminate-doors/door-6.jpg",
      "./image/laminate-doors/door-12.jpg"
    ],
    "category": "door",
    "categoryLabel": "ประตู",
    "subcategory": "ประตูปิดผิวลามิเนต",
    "price": 0,
    "unit": "ชุด",
    "description": "ประตูสำหรับบ้านและโครงการ มีหลายรูปแบบและผิววัสดุให้เลือกตามสไตล์การตกแต่ง",
    "nameEn": "Door-1",
    "categoryLabelEn": "Doors",
    "subcategoryEn": "Laminate-finish Door",
    "descriptionEn": "Doors for homes and projects, available in a range of designs and finishes to suit different interior styles."
  },
  {
    "id": "catalog-297",
    "name": "Door-10",
    "image": "./image/laminate-doors/door-10.jpg",
    "gallery": [
      "./image/laminate-doors/door-5.jpg",
      "./image/laminate-doors/laminate-door01.jpg",
      "./image/laminate-doors/door-6.jpg",
      "./image/laminate-doors/door-12.jpg"
    ],
    "category": "door",
    "categoryLabel": "ประตู",
    "subcategory": "ประตูปิดผิวลามิเนต",
    "price": 0,
    "unit": "ชุด",
    "description": "ประตูสำหรับบ้านและโครงการ มีหลายรูปแบบและผิววัสดุให้เลือกตามสไตล์การตกแต่ง",
    "nameEn": "Door-10",
    "categoryLabelEn": "Doors",
    "subcategoryEn": "Laminate-finish Door",
    "descriptionEn": "Doors for homes and projects, available in a range of designs and finishes to suit different interior styles."
  },
  {
    "id": "catalog-298",
    "name": "Door-3",
    "image": "./image/laminate-doors/door-3.jpg",
    "gallery": [
      "./image/laminate-doors/door-5.jpg",
      "./image/laminate-doors/laminate-door01.jpg",
      "./image/laminate-doors/door-6.jpg",
      "./image/laminate-doors/door-12.jpg"
    ],
    "category": "door",
    "categoryLabel": "ประตู",
    "subcategory": "ประตูปิดผิวลามิเนต",
    "price": 0,
    "unit": "ชุด",
    "description": "ประตูสำหรับบ้านและโครงการ มีหลายรูปแบบและผิววัสดุให้เลือกตามสไตล์การตกแต่ง",
    "nameEn": "Door-3",
    "categoryLabelEn": "Doors",
    "subcategoryEn": "Laminate-finish Door",
    "descriptionEn": "Doors for homes and projects, available in a range of designs and finishes to suit different interior styles."
  },
  {
    "id": "catalog-299",
    "name": "Door-7",
    "image": "./image/laminate-doors/door-7.jpg",
    "gallery": [
      "./image/laminate-doors/door-5.jpg",
      "./image/laminate-doors/laminate-door01.jpg",
      "./image/laminate-doors/door-6.jpg",
      "./image/laminate-doors/door-12.jpg"
    ],
    "category": "door",
    "categoryLabel": "ประตู",
    "subcategory": "ประตูปิดผิวลามิเนต",
    "price": 0,
    "unit": "ชุด",
    "description": "ประตูสำหรับบ้านและโครงการ มีหลายรูปแบบและผิววัสดุให้เลือกตามสไตล์การตกแต่ง",
    "nameEn": "Door-7",
    "categoryLabelEn": "Doors",
    "subcategoryEn": "Laminate-finish Door",
    "descriptionEn": "Doors for homes and projects, available in a range of designs and finishes to suit different interior styles."
  },
  {
    "id": "catalog-300",
    "name": "Laminate Door",
    "image": "./image/laminate-doors/laminate-door.jpg",
    "gallery": [
      "./image/laminate-doors/door-5.jpg",
      "./image/laminate-doors/laminate-door01.jpg",
      "./image/laminate-doors/door-6.jpg",
      "./image/laminate-doors/door-12.jpg"
    ],
    "category": "door",
    "categoryLabel": "ประตู",
    "subcategory": "ประตูปิดผิวลามิเนต",
    "price": 0,
    "unit": "ชุด",
    "description": "ประตูสำหรับบ้านและโครงการ มีหลายรูปแบบและผิววัสดุให้เลือกตามสไตล์การตกแต่ง",
    "nameEn": "Laminate Door",
    "categoryLabelEn": "Doors",
    "subcategoryEn": "Laminate-finish Door",
    "descriptionEn": "Doors for homes and projects, available in a range of designs and finishes to suit different interior styles."
  },
  {
    "id": "catalog-301",
    "name": "ประตูปิดผิวลามิเนต02",
    "image": "./image/laminate-doors/laminate-door02.jpg",
    "gallery": [
      "./image/laminate-doors/door-5.jpg",
      "./image/laminate-doors/laminate-door01.jpg",
      "./image/laminate-doors/door-6.jpg",
      "./image/laminate-doors/door-12.jpg"
    ],
    "category": "door",
    "categoryLabel": "ประตู",
    "subcategory": "ประตูปิดผิวลามิเนต",
    "price": 0,
    "unit": "ชุด",
    "description": "ประตูสำหรับบ้านและโครงการ มีหลายรูปแบบและผิววัสดุให้เลือกตามสไตล์การตกแต่ง",
    "nameEn": "Laminate-finish Door 02",
    "categoryLabelEn": "Doors",
    "subcategoryEn": "Laminate-finish Door",
    "descriptionEn": "Doors for homes and projects, available in a range of designs and finishes to suit different interior styles."
  },
  {
    "id": "catalog-302",
    "name": "Door-9",
    "image": "./image/laminate-doors/door-9.jpg",
    "gallery": [
      "./image/laminate-doors/door-5.jpg",
      "./image/laminate-doors/laminate-door01.jpg",
      "./image/laminate-doors/door-6.jpg",
      "./image/laminate-doors/door-12.jpg"
    ],
    "category": "door",
    "categoryLabel": "ประตู",
    "subcategory": "ประตูปิดผิวลามิเนต",
    "price": 0,
    "unit": "ชุด",
    "description": "ประตูสำหรับบ้านและโครงการ มีหลายรูปแบบและผิววัสดุให้เลือกตามสไตล์การตกแต่ง",
    "nameEn": "Door-9",
    "categoryLabelEn": "Doors",
    "subcategoryEn": "Laminate-finish Door",
    "descriptionEn": "Doors for homes and projects, available in a range of designs and finishes to suit different interior styles."
  },
  {
    "id": "catalog-303",
    "name": "ประตูปิดผิวลามิเนต06",
    "image": "./image/laminate-doors/laminate-door06.jpg",
    "gallery": [
      "./image/laminate-doors/door-5.jpg",
      "./image/laminate-doors/laminate-door01.jpg",
      "./image/laminate-doors/door-6.jpg",
      "./image/laminate-doors/door-12.jpg"
    ],
    "category": "door",
    "categoryLabel": "ประตู",
    "subcategory": "ประตูปิดผิวลามิเนต",
    "price": 0,
    "unit": "ชุด",
    "description": "ประตูสำหรับบ้านและโครงการ มีหลายรูปแบบและผิววัสดุให้เลือกตามสไตล์การตกแต่ง",
    "nameEn": "Laminate-finish Door 06",
    "categoryLabelEn": "Doors",
    "subcategoryEn": "Laminate-finish Door",
    "descriptionEn": "Doors for homes and projects, available in a range of designs and finishes to suit different interior styles."
  },
  {
    "id": "catalog-304",
    "name": "efs_8502",
    "image": "./image/engineered-wood/efs_8502.jpg",
    "gallery": [
      "./image/engineered-wood/efs_8502.jpg",
      "./image/engineered-wood/efs_8502.jpg",
      "./image/engineered-wood/efs_8502.jpg",
      "./image/engineered-wood/efs_8502.jpg"
    ],
    "category": "engineered",
    "categoryLabel": "ไม้ Engineered",
    "subcategory": "ไม้ Engineered",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Engineered สำหรับงานพื้น ให้ความอบอุ่นเป็นธรรมชาติ เหมาะกับบ้านพักอาศัยและงานตกแต่งภายใน",
    "nameEn": "efs_8502",
    "categoryLabelEn": "Engineered Wood",
    "subcategoryEn": "Engineered Wood",
    "descriptionEn": "Engineered wood combines the beauty of real wood with a multi-layer structure, ideal for interior flooring."
  },
  {
    "id": "catalog-305",
    "name": "efs_8503",
    "image": "./image/engineered-wood/efs_8503.jpg",
    "gallery": [
      "./image/engineered-wood/efs_8503.jpg",
      "./image/engineered-wood/efs_8503.jpg",
      "./image/engineered-wood/efs_8503.jpg",
      "./image/engineered-wood/efs_8503.jpg"
    ],
    "category": "engineered",
    "categoryLabel": "ไม้ Engineered",
    "subcategory": "ไม้ Engineered",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Engineered สำหรับงานพื้น ให้ความอบอุ่นเป็นธรรมชาติ เหมาะกับบ้านพักอาศัยและงานตกแต่งภายใน",
    "nameEn": "efs_8503",
    "categoryLabelEn": "Engineered Wood",
    "subcategoryEn": "Engineered Wood",
    "descriptionEn": "Engineered wood combines the beauty of real wood with a multi-layer structure, ideal for interior flooring."
  },
  {
    "id": "catalog-306",
    "name": "efs_8504",
    "image": "./image/engineered-wood/efs_8504.jpg",
    "gallery": [
      "./image/engineered-wood/efs_8504.jpg",
      "./image/engineered-wood/efs_8504.jpg",
      "./image/engineered-wood/efs_8504.jpg",
      "./image/engineered-wood/efs_8504.jpg"
    ],
    "category": "engineered",
    "categoryLabel": "ไม้ Engineered",
    "subcategory": "ไม้ Engineered",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Engineered สำหรับงานพื้น ให้ความอบอุ่นเป็นธรรมชาติ เหมาะกับบ้านพักอาศัยและงานตกแต่งภายใน",
    "nameEn": "efs_8504",
    "categoryLabelEn": "Engineered Wood",
    "subcategoryEn": "Engineered Wood",
    "descriptionEn": "Engineered wood combines the beauty of real wood with a multi-layer structure, ideal for interior flooring."
  },
  {
    "id": "catalog-307",
    "name": "efs-10113",
    "image": "./image/engineered-wood/efs-10113.jpg",
    "gallery": [
      "./image/engineered-wood/efs-10113",
      "./image/engineered-wood/efs-10113",
      "./image/engineered-wood/efs-10113",
      "./image/engineered-wood/efs-10113.jpg"
    ],
    "category": "engineered",
    "categoryLabel": "ไม้ Engineered",
    "subcategory": "ไม้ Engineered",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Engineered สำหรับงานพื้น ให้ความอบอุ่นเป็นธรรมชาติ เหมาะกับบ้านพักอาศัยและงานตกแต่งภายใน",
    "nameEn": "efs-10113",
    "categoryLabelEn": "Engineered Wood",
    "subcategoryEn": "Engineered Wood",
    "descriptionEn": "Engineered wood combines the beauty of real wood with a multi-layer structure, ideal for interior flooring."
  },
  {
    "id": "catalog-308",
    "name": "efs-10130",
    "image": "./image/engineered-wood/efs-10130.jpg",
    "gallery": [
      "./image/engineered-wood/efs-10130.jpg",
      "./image/engineered-wood/efs-10130.jpg",
      "./image/engineered-wood/efs-10130.jpg",
      "./image/engineered-wood/efs-10130.jpg"
    ],
    "category": "engineered",
    "categoryLabel": "ไม้ Engineered",
    "subcategory": "ไม้ Engineered",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Engineered สำหรับงานพื้น ให้ความอบอุ่นเป็นธรรมชาติ เหมาะกับบ้านพักอาศัยและงานตกแต่งภายใน",
    "nameEn": "efs-10130",
    "categoryLabelEn": "Engineered Wood",
    "subcategoryEn": "Engineered Wood",
    "descriptionEn": "Engineered wood combines the beauty of real wood with a multi-layer structure, ideal for interior flooring."
  },
  {
    "id": "catalog-309",
    "name": "efs-10411",
    "image": "./image/engineered-wood/efs-10411.jpg",
    "gallery": [
      "./image/engineered-wood/efs-10411.jpg",
      "./image/engineered-wood/efs-10411.jpg",
      "./image/engineered-wood/efs-10411.jpg",
      "./image/engineered-wood/efs-10411.jpg"
    ],
    "category": "engineered",
    "categoryLabel": "ไม้ Engineered",
    "subcategory": "ไม้ Engineered",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Engineered สำหรับงานพื้น ให้ความอบอุ่นเป็นธรรมชาติ เหมาะกับบ้านพักอาศัยและงานตกแต่งภายใน",
    "nameEn": "efs-10411",
    "categoryLabelEn": "Engineered Wood",
    "subcategoryEn": "Engineered Wood",
    "descriptionEn": "Engineered wood combines the beauty of real wood with a multi-layer structure, ideal for interior flooring."
  },
  {
    "id": "catalog-310",
    "name": "efs-20102",
    "image": "./image/engineered-wood/efs-20102.jpg",
    "gallery": [
      "./image/engineered-wood/efs-20102.jpg",
      "./image/engineered-wood/efs-20102.jpg",
      "./image/engineered-wood/efs-20102.jpg",
      "./image/engineered-wood/efs-20102.jpg"
    ],
    "category": "engineered",
    "categoryLabel": "ไม้ Engineered",
    "subcategory": "ไม้ Engineered",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Engineered สำหรับงานพื้น ให้ความอบอุ่นเป็นธรรมชาติ เหมาะกับบ้านพักอาศัยและงานตกแต่งภายใน",
    "nameEn": "efs-20102",
    "categoryLabelEn": "Engineered Wood",
    "subcategoryEn": "Engineered Wood",
    "descriptionEn": "Engineered wood combines the beauty of real wood with a multi-layer structure, ideal for interior flooring."
  },
  {
    "id": "catalog-311",
    "name": "efs-30201",
    "image": "./image/engineered-wood/efs-30201.jpg",
    "gallery": [
      "./image/engineered-wood/efs-30201.jpg",
      "./image/engineered-wood/efs-30201.jpg",
      "./image/engineered-wood/efs-30201.jpg",
      "./image/engineered-wood/efs-30201.jpg"
    ],
    "category": "engineered",
    "categoryLabel": "ไม้ Engineered",
    "subcategory": "ไม้ Engineered",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Engineered สำหรับงานพื้น ให้ความอบอุ่นเป็นธรรมชาติ เหมาะกับบ้านพักอาศัยและงานตกแต่งภายใน",
    "nameEn": "efs-30201",
    "categoryLabelEn": "Engineered Wood",
    "subcategoryEn": "Engineered Wood",
    "descriptionEn": "Engineered wood combines the beauty of real wood with a multi-layer structure, ideal for interior flooring."
  },
  /*{
    "id": "catalog-312",
    "name": "IMG_8504",
    "image": "./image/engineered-wood/img-8504.jpg",
    "gallery": [
      "./image/engineered-wood/img-8504.jpg",
      "./image/engineered-wood/efs-20102.jpg",
      "./image/engineered-wood/1.jpg",
      "./image/engineered-wood/2.jpg"
    ],
    "category": "engineered",
    "categoryLabel": "ไม้ Engineered",
    "subcategory": "ไม้ Engineered",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Engineered สำหรับงานพื้น ให้ความอบอุ่นเป็นธรรมชาติ เหมาะกับบ้านพักอาศัยและงานตกแต่งภายใน",
    "nameEn": "IMG_8504",
    "categoryLabelEn": "Engineered Wood",
    "subcategoryEn": "Engineered Wood",
    "descriptionEn": "Engineered wood combines the beauty of real wood with a multi-layer structure, ideal for interior flooring."
  },
  {
    "id": "catalog-313",
    "name": "EFS-20102",
    "image": "./image/engineered-wood/efs-20102.jpg",
    "gallery": [
      "./image/engineered-wood/efs-20102.jpg",
      "./image/engineered-wood/1.jpg",
      "./image/engineered-wood/2.jpg",
      "./image/engineered-wood/oak.jpg"
    ],
    "category": "engineered",
    "categoryLabel": "ไม้ Engineered",
    "subcategory": "ไม้ Engineered",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Engineered สำหรับงานพื้น ให้ความอบอุ่นเป็นธรรมชาติ เหมาะกับบ้านพักอาศัยและงานตกแต่งภายใน",
    "nameEn": "EFS-20102",
    "categoryLabelEn": "Engineered Wood",
    "subcategoryEn": "Engineered Wood",
    "descriptionEn": "Engineered wood combines the beauty of real wood with a multi-layer structure, ideal for interior flooring."
  },
  {
    "id": "catalog-314",
    "name": "1",
    "image": "./image/engineered-wood/1.jpg",
    "gallery": [
      "./image/engineered-wood/1.jpg",
      "./image/engineered-wood/2.jpg",
      "./image/engineered-wood/oak.jpg",
      "./image/engineered-wood/05.jpg"
    ],
    "category": "engineered",
    "categoryLabel": "ไม้ Engineered",
    "subcategory": "ไม้ Engineered",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Engineered สำหรับงานพื้น ให้ความอบอุ่นเป็นธรรมชาติ เหมาะกับบ้านพักอาศัยและงานตกแต่งภายใน",
    "nameEn": "1",
    "categoryLabelEn": "Engineered Wood",
    "subcategoryEn": "Engineered Wood",
    "descriptionEn": "Engineered wood combines the beauty of real wood with a multi-layer structure, ideal for interior flooring."
  },
  {
    "id": "catalog-315",
    "name": "2",
    "image": "./image/engineered-wood/2.jpg",
    "gallery": [
      "./image/engineered-wood/2.jpg",
      "./image/engineered-wood/oak.jpg",
      "./image/engineered-wood/05.jpg",
      "./image/engineered-wood/teak-2.jpg"
    ],
    "category": "engineered",
    "categoryLabel": "ไม้ Engineered",
    "subcategory": "ไม้ Engineered",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Engineered สำหรับงานพื้น ให้ความอบอุ่นเป็นธรรมชาติ เหมาะกับบ้านพักอาศัยและงานตกแต่งภายใน",
    "nameEn": "2",
    "categoryLabelEn": "Engineered Wood",
    "subcategoryEn": "Engineered Wood",
    "descriptionEn": "Engineered wood combines the beauty of real wood with a multi-layer structure, ideal for interior flooring."
  },
  {
    "id": "catalog-316",
    "name": "oak-",
    "image": "./image/engineered-wood/oak.jpg",
    "gallery": [
      "./image/engineered-wood/oak.jpg",
      "./image/engineered-wood/05.jpg",
      "./image/engineered-wood/teak-2.jpg",
      "./image/engineered-wood/6-1.jpg"
    ],
    "category": "engineered",
    "categoryLabel": "ไม้ Engineered",
    "subcategory": "ไม้ Engineered",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Engineered สำหรับงานพื้น ให้ความอบอุ่นเป็นธรรมชาติ เหมาะกับบ้านพักอาศัยและงานตกแต่งภายใน",
    "nameEn": "oak-",
    "categoryLabelEn": "Engineered Wood",
    "subcategoryEn": "Engineered Wood",
    "descriptionEn": "Engineered wood combines the beauty of real wood with a multi-layer structure, ideal for interior flooring."
  },
  {
    "id": "catalog-317",
    "name": "05",
    "image": "./image/engineered-wood/05.jpg",
    "gallery": [
      "./image/engineered-wood/05.jpg",
      "./image/engineered-wood/teak-2.jpg",
      "./image/engineered-wood/6-1.jpg",
      "./image/engineered-wood/01.jpg"
    ],
    "category": "engineered",
    "categoryLabel": "ไม้ Engineered",
    "subcategory": "ไม้ Engineered",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Engineered สำหรับงานพื้น ให้ความอบอุ่นเป็นธรรมชาติ เหมาะกับบ้านพักอาศัยและงานตกแต่งภายใน",
    "nameEn": "05",
    "categoryLabelEn": "Engineered Wood",
    "subcategoryEn": "Engineered Wood",
    "descriptionEn": "Engineered wood combines the beauty of real wood with a multi-layer structure, ideal for interior flooring."
  },
  {
    "id": "catalog-318",
    "name": "Teak -",
    "image": "./image/engineered-wood/teak-2.jpg",
    "gallery": [
      "./image/engineered-wood/teak-2.jpg",
      "./image/engineered-wood/6-1.jpg",
      "./image/engineered-wood/01.jpg",
      "./image/engineered-wood/1-2.jpg"
    ],
    "category": "engineered",
    "categoryLabel": "ไม้ Engineered",
    "subcategory": "ไม้ Engineered",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Engineered สำหรับงานพื้น ให้ความอบอุ่นเป็นธรรมชาติ เหมาะกับบ้านพักอาศัยและงานตกแต่งภายใน",
    "nameEn": "Teak -",
    "categoryLabelEn": "Engineered Wood",
    "subcategoryEn": "Engineered Wood",
    "descriptionEn": "Engineered wood combines the beauty of real wood with a multi-layer structure, ideal for interior flooring."
  },
  {
    "id": "catalog-319",
    "name": "6(1)",
    "image": "./image/engineered-wood/6-1.jpg",
    "gallery": [
      "./image/engineered-wood/6-1.jpg",
      "./image/engineered-wood/01.jpg",
      "./image/engineered-wood/1-2.jpg",
      "./image/engineered-wood/5.jpg"
    ],
    "category": "engineered",
    "categoryLabel": "ไม้ Engineered",
    "subcategory": "ไม้ Engineered",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Engineered สำหรับงานพื้น ให้ความอบอุ่นเป็นธรรมชาติ เหมาะกับบ้านพักอาศัยและงานตกแต่งภายใน",
    "nameEn": "6(1)",
    "categoryLabelEn": "Engineered Wood",
    "subcategoryEn": "Engineered Wood",
    "descriptionEn": "Engineered wood combines the beauty of real wood with a multi-layer structure, ideal for interior flooring."
  },
  {
    "id": "catalog-320",
    "name": "01",
    "image": "./image/engineered-wood/01.jpg",
    "gallery": [
      "./image/engineered-wood/01.jpg",
      "./image/engineered-wood/1-2.jpg",
      "./image/engineered-wood/5.jpg",
      "./image/engineered-wood/chreey.jpg"
    ],
    "category": "engineered",
    "categoryLabel": "ไม้ Engineered",
    "subcategory": "ไม้ Engineered",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Engineered สำหรับงานพื้น ให้ความอบอุ่นเป็นธรรมชาติ เหมาะกับบ้านพักอาศัยและงานตกแต่งภายใน",
    "nameEn": "01",
    "categoryLabelEn": "Engineered Wood",
    "subcategoryEn": "Engineered Wood",
    "descriptionEn": "Engineered wood combines the beauty of real wood with a multi-layer structure, ideal for interior flooring."
  },
  {
    "id": "catalog-321",
    "name": "1(2)",
    "image": "./image/engineered-wood/1-2.jpg",
    "gallery": [
      "./image/engineered-wood/1-2.jpg",
      "./image/engineered-wood/5.jpg",
      "./image/engineered-wood/chreey.jpg",
      "./image/engineered-wood/maple-2.jpg"
    ],
    "category": "engineered",
    "categoryLabel": "ไม้ Engineered",
    "subcategory": "ไม้ Engineered",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Engineered สำหรับงานพื้น ให้ความอบอุ่นเป็นธรรมชาติ เหมาะกับบ้านพักอาศัยและงานตกแต่งภายใน",
    "nameEn": "1(2)",
    "categoryLabelEn": "Engineered Wood",
    "subcategoryEn": "Engineered Wood",
    "descriptionEn": "Engineered wood combines the beauty of real wood with a multi-layer structure, ideal for interior flooring."
  },
  {
    "id": "catalog-322",
    "name": "5",
    "image": "./image/engineered-wood/5.jpg",
    "gallery": [
      "./image/engineered-wood/5.jpg",
      "./image/engineered-wood/chreey.jpg",
      "./image/engineered-wood/maple-2.jpg",
      "./image/engineered-wood/beech.jpg"
    ],
    "category": "engineered",
    "categoryLabel": "ไม้ Engineered",
    "subcategory": "ไม้ Engineered",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Engineered สำหรับงานพื้น ให้ความอบอุ่นเป็นธรรมชาติ เหมาะกับบ้านพักอาศัยและงานตกแต่งภายใน",
    "nameEn": "5",
    "categoryLabelEn": "Engineered Wood",
    "subcategoryEn": "Engineered Wood",
    "descriptionEn": "Engineered wood combines the beauty of real wood with a multi-layer structure, ideal for interior flooring."
  },
  {
    "id": "catalog-323",
    "name": "chreey",
    "image": "./image/engineered-wood/chreey.jpg",
    "gallery": [
      "./image/engineered-wood/chreey.jpg",
      "./image/engineered-wood/maple-2.jpg",
      "./image/engineered-wood/beech.jpg",
      "./image/engineered-wood/02.jpg"
    ],
    "category": "engineered",
    "categoryLabel": "ไม้ Engineered",
    "subcategory": "ไม้ Engineered",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Engineered สำหรับงานพื้น ให้ความอบอุ่นเป็นธรรมชาติ เหมาะกับบ้านพักอาศัยและงานตกแต่งภายใน",
    "nameEn": "chreey",
    "categoryLabelEn": "Engineered Wood",
    "subcategoryEn": "Engineered Wood",
    "descriptionEn": "Engineered wood combines the beauty of real wood with a multi-layer structure, ideal for interior flooring."
  },
  {
    "id": "catalog-324",
    "name": "maple -",
    "image": "./image/engineered-wood/maple-2.jpg",
    "gallery": [
      "./image/engineered-wood/maple-2.jpg",
      "./image/engineered-wood/beech.jpg",
      "./image/engineered-wood/02.jpg",
      "./image/engineered-wood/teak.jpg"
    ],
    "category": "engineered",
    "categoryLabel": "ไม้ Engineered",
    "subcategory": "ไม้ Engineered",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Engineered สำหรับงานพื้น ให้ความอบอุ่นเป็นธรรมชาติ เหมาะกับบ้านพักอาศัยและงานตกแต่งภายใน",
    "nameEn": "maple -",
    "categoryLabelEn": "Engineered Wood",
    "subcategoryEn": "Engineered Wood",
    "descriptionEn": "Engineered wood combines the beauty of real wood with a multi-layer structure, ideal for interior flooring."
  },
  {
    "id": "catalog-325",
    "name": "Beech-",
    "image": "./image/engineered-wood/beech.jpg",
    "gallery": [
      "./image/engineered-wood/beech.jpg",
      "./image/engineered-wood/02.jpg",
      "./image/engineered-wood/teak.jpg",
      "./image/engineered-wood/2-1.jpg"
    ],
    "category": "engineered",
    "categoryLabel": "ไม้ Engineered",
    "subcategory": "ไม้ Engineered",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Engineered สำหรับงานพื้น ให้ความอบอุ่นเป็นธรรมชาติ เหมาะกับบ้านพักอาศัยและงานตกแต่งภายใน",
    "nameEn": "Beech-",
    "categoryLabelEn": "Engineered Wood",
    "subcategoryEn": "Engineered Wood",
    "descriptionEn": "Engineered wood combines the beauty of real wood with a multi-layer structure, ideal for interior flooring."
  },
  {
    "id": "catalog-326",
    "name": "02",
    "image": "./image/engineered-wood/02.jpg",
    "gallery": [
      "./image/engineered-wood/02.jpg",
      "./image/engineered-wood/teak.jpg",
      "./image/engineered-wood/2-1.jpg",
      "./image/engineered-wood/06.jpg"
    ],
    "category": "engineered",
    "categoryLabel": "ไม้ Engineered",
    "subcategory": "ไม้ Engineered",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Engineered สำหรับงานพื้น ให้ความอบอุ่นเป็นธรรมชาติ เหมาะกับบ้านพักอาศัยและงานตกแต่งภายใน",
    "nameEn": "02",
    "categoryLabelEn": "Engineered Wood",
    "subcategoryEn": "Engineered Wood",
    "descriptionEn": "Engineered wood combines the beauty of real wood with a multi-layer structure, ideal for interior flooring."
  },
  {
    "id": "catalog-327",
    "name": "teak",
    "image": "./image/engineered-wood/teak.jpg",
    "gallery": [
      "./image/engineered-wood/teak.jpg",
      "./image/engineered-wood/2-1.jpg",
      "./image/engineered-wood/06.jpg"
    ],
    "category": "engineered",
    "categoryLabel": "ไม้ Engineered",
    "subcategory": "ไม้ Engineered",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Engineered สำหรับงานพื้น ให้ความอบอุ่นเป็นธรรมชาติ เหมาะกับบ้านพักอาศัยและงานตกแต่งภายใน",
    "nameEn": "teak",
    "categoryLabelEn": "Engineered Wood",
    "subcategoryEn": "Engineered Wood",
    "descriptionEn": "Engineered wood combines the beauty of real wood with a multi-layer structure, ideal for interior flooring."
  },
  {
    "id": "catalog-328",
    "name": "2(1)",
    "image": "./image/engineered-wood/2-1.jpg",
    "gallery": [
      "./image/engineered-wood/2-1.jpg",
      "./image/engineered-wood/06.jpg"
    ],
    "category": "engineered",
    "categoryLabel": "ไม้ Engineered",
    "subcategory": "ไม้ Engineered",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Engineered สำหรับงานพื้น ให้ความอบอุ่นเป็นธรรมชาติ เหมาะกับบ้านพักอาศัยและงานตกแต่งภายใน",
    "nameEn": "2(1)",
    "categoryLabelEn": "Engineered Wood",
    "subcategoryEn": "Engineered Wood",
    "descriptionEn": "Engineered wood combines the beauty of real wood with a multi-layer structure, ideal for interior flooring."
  },
  {
    "id": "catalog-329",
    "name": "06",
    "image": "./image/engineered-wood/06.jpg",
    "gallery": [
      "./image/engineered-wood/04.jpg",
      "./image/engineered-wood/oak-litte-white.jpg",
      "./image/engineered-wood/walnut.jpg",
      "./image/engineered-wood/1-1.jpg"
    ],
    "category": "engineered",
    "categoryLabel": "ไม้ Engineered",
    "subcategory": "ไม้ Engineered",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Engineered สำหรับงานพื้น ให้ความอบอุ่นเป็นธรรมชาติ เหมาะกับบ้านพักอาศัยและงานตกแต่งภายใน",
    "nameEn": "06",
    "categoryLabelEn": "Engineered Wood",
    "subcategoryEn": "Engineered Wood",
    "descriptionEn": "Engineered wood combines the beauty of real wood with a multi-layer structure, ideal for interior flooring."
  },*/
  {
    "id": "catalog-330",
    "name": "B03",
    "image": "./image/laminate-wood/b03.jpg",
    "gallery": [
      "./image/laminate-wood/b03.jpg",
      "./image/laminate-wood/a08.jpg",
      "./image/laminate-wood/20141223105625738.jpg",
      "./image/laminate-wood/d02.jpg"
    ],
    "category": "laminate",
    "categoryLabel": "ไม้ Laminate",
    "subcategory": "ไม้ Laminate",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Laminate สำหรับงานตกแต่งพื้นและพื้นที่ภายใน ดูแลรักษาง่ายและมีลวดลายให้เลือกหลากหลาย",
    "nameEn": "B03",
    "categoryLabelEn": "Laminate Flooring",
    "subcategoryEn": "Laminate Flooring",
    "descriptionEn": "Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces."
  },
  {
    "id": "catalog-331",
    "name": "A08",
    "image": "./image/laminate-wood/a08.jpg",
    "gallery": [
      "./image/laminate-wood/a08.jpg",
      "./image/laminate-wood/20141223105625738.jpg",
      "./image/laminate-wood/d02.jpg",
      "./image/laminate-wood/b04.jpg"
    ],
    "category": "laminate",
    "categoryLabel": "ไม้ Laminate",
    "subcategory": "ไม้ Laminate",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Laminate สำหรับงานตกแต่งพื้นและพื้นที่ภายใน ดูแลรักษาง่ายและมีลวดลายให้เลือกหลากหลาย",
    "nameEn": "A08",
    "categoryLabelEn": "Laminate Flooring",
    "subcategoryEn": "Laminate Flooring",
    "descriptionEn": "Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces."
  },
  {
    "id": "catalog-332",
    "name": "20141223105625738",
    "image": "./image/laminate-wood/20141223105625738.jpg",
    "gallery": [
      "./image/laminate-wood/20141223105625738.jpg",
      "./image/laminate-wood/d02.jpg",
      "./image/laminate-wood/b04.jpg",
      "./image/laminate-wood/a36.jpg"
    ],
    "category": "laminate",
    "categoryLabel": "ไม้ Laminate",
    "subcategory": "ไม้ Laminate",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Laminate สำหรับงานตกแต่งพื้นและพื้นที่ภายใน ดูแลรักษาง่ายและมีลวดลายให้เลือกหลากหลาย",
    "nameEn": "20141223105625738",
    "categoryLabelEn": "Laminate Flooring",
    "subcategoryEn": "Laminate Flooring",
    "descriptionEn": "Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces."
  },
  {
    "id": "catalog-333",
    "name": "D02",
    "image": "./image/laminate-wood/d02.jpg",
    "gallery": [
      "./image/laminate-wood/d02.jpg",
      "./image/laminate-wood/b04.jpg",
      "./image/laminate-wood/a36.jpg",
      "./image/laminate-wood/201412221247039463.jpg"
    ],
    "category": "laminate",
    "categoryLabel": "ไม้ Laminate",
    "subcategory": "ไม้ Laminate",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Laminate สำหรับงานตกแต่งพื้นและพื้นที่ภายใน ดูแลรักษาง่ายและมีลวดลายให้เลือกหลากหลาย",
    "nameEn": "D02",
    "categoryLabelEn": "Laminate Flooring",
    "subcategoryEn": "Laminate Flooring",
    "descriptionEn": "Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces."
  },
  {
    "id": "catalog-334",
    "name": "B04",
    "image": "./image/laminate-wood/b04.jpg",
    "gallery": [
      "./image/laminate-wood/b04.jpg",
      "./image/laminate-wood/a36.jpg",
      "./image/laminate-wood/201412221247039463.jpg",
      "./image/laminate-wood/20141222132551822.jpg"
    ],
    "category": "laminate",
    "categoryLabel": "ไม้ Laminate",
    "subcategory": "ไม้ Laminate",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Laminate สำหรับงานตกแต่งพื้นและพื้นที่ภายใน ดูแลรักษาง่ายและมีลวดลายให้เลือกหลากหลาย",
    "nameEn": "B04",
    "categoryLabelEn": "Laminate Flooring",
    "subcategoryEn": "Laminate Flooring",
    "descriptionEn": "Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces."
  },
  {
    "id": "catalog-335",
    "name": "A36",
    "image": "./image/laminate-wood/a36.jpg",
    "gallery": [
      "./image/laminate-wood/a36.jpg",
      "./image/laminate-wood/201412221247039463.jpg",
      "./image/laminate-wood/20141222132551822.jpg",
      "./image/laminate-wood/d03.jpg"
    ],
    "category": "laminate",
    "categoryLabel": "ไม้ Laminate",
    "subcategory": "ไม้ Laminate",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Laminate สำหรับงานตกแต่งพื้นและพื้นที่ภายใน ดูแลรักษาง่ายและมีลวดลายให้เลือกหลากหลาย",
    "nameEn": "A36",
    "categoryLabelEn": "Laminate Flooring",
    "subcategoryEn": "Laminate Flooring",
    "descriptionEn": "Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces."
  },
  {
    "id": "catalog-336",
    "name": "201412221247039463",
    "image": "./image/laminate-wood/201412221247039463.jpg",
    "gallery": [
      "./image/laminate-wood/201412221247039463.jpg",
      "./image/laminate-wood/20141222132551822.jpg",
      "./image/laminate-wood/d03.jpg",
      "./image/laminate-wood/i03.jpg"
    ],
    "category": "laminate",
    "categoryLabel": "ไม้ Laminate",
    "subcategory": "ไม้ Laminate",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Laminate สำหรับงานตกแต่งพื้นและพื้นที่ภายใน ดูแลรักษาง่ายและมีลวดลายให้เลือกหลากหลาย",
    "nameEn": "201412221247039463",
    "categoryLabelEn": "Laminate Flooring",
    "subcategoryEn": "Laminate Flooring",
    "descriptionEn": "Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces."
  },
  {
    "id": "catalog-337",
    "name": "20141222132551822",
    "image": "./image/laminate-wood/20141222132551822.jpg",
    "gallery": [
      "./image/laminate-wood/20141222132551822.jpg",
      "./image/laminate-wood/d03.jpg",
      "./image/laminate-wood/i03.jpg",
      "./image/laminate-wood/b01.jpg"
    ],
    "category": "laminate",
    "categoryLabel": "ไม้ Laminate",
    "subcategory": "ไม้ Laminate",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Laminate สำหรับงานตกแต่งพื้นและพื้นที่ภายใน ดูแลรักษาง่ายและมีลวดลายให้เลือกหลากหลาย",
    "nameEn": "20141222132551822",
    "categoryLabelEn": "Laminate Flooring",
    "subcategoryEn": "Laminate Flooring",
    "descriptionEn": "Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces."
  },
  {
    "id": "catalog-338",
    "name": "D03",
    "image": "./image/laminate-wood/d03.jpg",
    "gallery": [
      "./image/laminate-wood/d03.jpg",
      "./image/laminate-wood/i03.jpg",
      "./image/laminate-wood/b01.jpg",
      "./image/laminate-wood/20141225104009198.jpg"
    ],
    "category": "laminate",
    "categoryLabel": "ไม้ Laminate",
    "subcategory": "ไม้ Laminate",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Laminate สำหรับงานตกแต่งพื้นและพื้นที่ภายใน ดูแลรักษาง่ายและมีลวดลายให้เลือกหลากหลาย",
    "nameEn": "D03",
    "categoryLabelEn": "Laminate Flooring",
    "subcategoryEn": "Laminate Flooring",
    "descriptionEn": "Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces."
  },
  {
    "id": "catalog-339",
    "name": "I03",
    "image": "./image/laminate-wood/i03.jpg",
    "gallery": [
      "./image/laminate-wood/i03.jpg",
      "./image/laminate-wood/b01.jpg",
      "./image/laminate-wood/20141225104009198.jpg",
      "./image/laminate-wood/b07.jpg"
    ],
    "category": "laminate",
    "categoryLabel": "ไม้ Laminate",
    "subcategory": "ไม้ Laminate",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Laminate สำหรับงานตกแต่งพื้นและพื้นที่ภายใน ดูแลรักษาง่ายและมีลวดลายให้เลือกหลากหลาย",
    "nameEn": "I03",
    "categoryLabelEn": "Laminate Flooring",
    "subcategoryEn": "Laminate Flooring",
    "descriptionEn": "Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces."
  },
  {
    "id": "catalog-340",
    "name": "B01",
    "image": "./image/laminate-wood/b01.jpg",
    "gallery": [
      "./image/laminate-wood/b01.jpg",
      "./image/laminate-wood/20141225104009198.jpg",
      "./image/laminate-wood/b07.jpg",
      "./image/laminate-wood/c01.jpg"
    ],
    "category": "laminate",
    "categoryLabel": "ไม้ Laminate",
    "subcategory": "ไม้ Laminate",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Laminate สำหรับงานตกแต่งพื้นและพื้นที่ภายใน ดูแลรักษาง่ายและมีลวดลายให้เลือกหลากหลาย",
    "nameEn": "B01",
    "categoryLabelEn": "Laminate Flooring",
    "subcategoryEn": "Laminate Flooring",
    "descriptionEn": "Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces."
  },
  {
    "id": "catalog-341",
    "name": "20141225104009198",
    "image": "./image/laminate-wood/20141225104009198.jpg",
    "gallery": [
      "./image/laminate-wood/20141225104009198.jpg",
      "./image/laminate-wood/b07.jpg",
      "./image/laminate-wood/c01.jpg",
      "./image/laminate-wood/h01.jpg"
    ],
    "category": "laminate",
    "categoryLabel": "ไม้ Laminate",
    "subcategory": "ไม้ Laminate",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Laminate สำหรับงานตกแต่งพื้นและพื้นที่ภายใน ดูแลรักษาง่ายและมีลวดลายให้เลือกหลากหลาย",
    "nameEn": "20141225104009198",
    "categoryLabelEn": "Laminate Flooring",
    "subcategoryEn": "Laminate Flooring",
    "descriptionEn": "Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces."
  },
  {
    "id": "catalog-342",
    "name": "B07",
    "image": "./image/laminate-wood/b07.jpg",
    "gallery": [
      "./image/laminate-wood/b07.jpg",
      "./image/laminate-wood/c01.jpg",
      "./image/laminate-wood/h01.jpg",
      "./image/laminate-wood/20141225110852195.jpg"
    ],
    "category": "laminate",
    "categoryLabel": "ไม้ Laminate",
    "subcategory": "ไม้ Laminate",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Laminate สำหรับงานตกแต่งพื้นและพื้นที่ภายใน ดูแลรักษาง่ายและมีลวดลายให้เลือกหลากหลาย",
    "nameEn": "B07",
    "categoryLabelEn": "Laminate Flooring",
    "subcategoryEn": "Laminate Flooring",
    "descriptionEn": "Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces."
  },
  {
    "id": "catalog-343",
    "name": "C01",
    "image": "./image/laminate-wood/c01.jpg",
    "gallery": [
      "./image/laminate-wood/c01.jpg",
      "./image/laminate-wood/h01.jpg",
      "./image/laminate-wood/20141225110852195.jpg",
      "./image/laminate-wood/201412221246063860.jpg"
    ],
    "category": "laminate",
    "categoryLabel": "ไม้ Laminate",
    "subcategory": "ไม้ Laminate",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Laminate สำหรับงานตกแต่งพื้นและพื้นที่ภายใน ดูแลรักษาง่ายและมีลวดลายให้เลือกหลากหลาย",
    "nameEn": "C01",
    "categoryLabelEn": "Laminate Flooring",
    "subcategoryEn": "Laminate Flooring",
    "descriptionEn": "Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces."
  },
  {
    "id": "catalog-344",
    "name": "H01",
    "image": "./image/laminate-wood/h01.jpg",
    "gallery": [
      "./image/laminate-wood/h01.jpg",
      "./image/laminate-wood/20141225110852195.jpg",
      "./image/laminate-wood/201412221246063860.jpg",
      "./image/laminate-wood/b06.jpg"
    ],
    "category": "laminate",
    "categoryLabel": "ไม้ Laminate",
    "subcategory": "ไม้ Laminate",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Laminate สำหรับงานตกแต่งพื้นและพื้นที่ภายใน ดูแลรักษาง่ายและมีลวดลายให้เลือกหลากหลาย",
    "nameEn": "H01",
    "categoryLabelEn": "Laminate Flooring",
    "subcategoryEn": "Laminate Flooring",
    "descriptionEn": "Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces."
  },
  {
    "id": "catalog-345",
    "name": "20141225110852195",
    "image": "./image/laminate-wood/20141225110852195.jpg",
    "gallery": [
      "./image/laminate-wood/20141225110852195.jpg",
      "./image/laminate-wood/201412221246063860.jpg",
      "./image/laminate-wood/b06.jpg",
      "./image/laminate-wood/a49.jpg"
    ],
    "category": "laminate",
    "categoryLabel": "ไม้ Laminate",
    "subcategory": "ไม้ Laminate",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Laminate สำหรับงานตกแต่งพื้นและพื้นที่ภายใน ดูแลรักษาง่ายและมีลวดลายให้เลือกหลากหลาย",
    "nameEn": "20141225110852195",
    "categoryLabelEn": "Laminate Flooring",
    "subcategoryEn": "Laminate Flooring",
    "descriptionEn": "Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces."
  },
  {
    "id": "catalog-346",
    "name": "201412221246063860",
    "image": "./image/laminate-wood/201412221246063860.jpg",
    "gallery": [
      "./image/laminate-wood/201412221246063860.jpg",
      "./image/laminate-wood/b06.jpg",
      "./image/laminate-wood/a49.jpg",
      "./image/laminate-wood/a01.jpg"
    ],
    "category": "laminate",
    "categoryLabel": "ไม้ Laminate",
    "subcategory": "ไม้ Laminate",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Laminate สำหรับงานตกแต่งพื้นและพื้นที่ภายใน ดูแลรักษาง่ายและมีลวดลายให้เลือกหลากหลาย",
    "nameEn": "201412221246063860",
    "categoryLabelEn": "Laminate Flooring",
    "subcategoryEn": "Laminate Flooring",
    "descriptionEn": "Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces."
  },
  {
    "id": "catalog-347",
    "name": "B06",
    "image": "./image/laminate-wood/b06.jpg",
    "gallery": [
      "./image/laminate-wood/b06.jpg",
      "./image/laminate-wood/a49.jpg",
      "./image/laminate-wood/a01.jpg",
      "./image/laminate-wood/b12.jpg"
    ],
    "category": "laminate",
    "categoryLabel": "ไม้ Laminate",
    "subcategory": "ไม้ Laminate",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Laminate สำหรับงานตกแต่งพื้นและพื้นที่ภายใน ดูแลรักษาง่ายและมีลวดลายให้เลือกหลากหลาย",
    "nameEn": "B06",
    "categoryLabelEn": "Laminate Flooring",
    "subcategoryEn": "Laminate Flooring",
    "descriptionEn": "Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces."
  },
  {
    "id": "catalog-348",
    "name": "A49",
    "image": "./image/laminate-wood/a49.jpg",
    "gallery": [
      "./image/laminate-wood/a49.jpg",
      "./image/laminate-wood/a01.jpg",
      "./image/laminate-wood/b12.jpg",
      "./image/laminate-wood/a02.jpg"
    ],
    "category": "laminate",
    "categoryLabel": "ไม้ Laminate",
    "subcategory": "ไม้ Laminate",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Laminate สำหรับงานตกแต่งพื้นและพื้นที่ภายใน ดูแลรักษาง่ายและมีลวดลายให้เลือกหลากหลาย",
    "nameEn": "A49",
    "categoryLabelEn": "Laminate Flooring",
    "subcategoryEn": "Laminate Flooring",
    "descriptionEn": "Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces."
  },
  {
    "id": "catalog-349",
    "name": "A01",
    "image": "./image/laminate-wood/a01.jpg",
    "gallery": [
      "./image/laminate-wood/a01.jpg",
      "./image/laminate-wood/b12.jpg",
      "./image/laminate-wood/a02.jpg",
      "./image/laminate-wood/h02.jpg"
    ],
    "category": "laminate",
    "categoryLabel": "ไม้ Laminate",
    "subcategory": "ไม้ Laminate",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Laminate สำหรับงานตกแต่งพื้นและพื้นที่ภายใน ดูแลรักษาง่ายและมีลวดลายให้เลือกหลากหลาย",
    "nameEn": "A01",
    "categoryLabelEn": "Laminate Flooring",
    "subcategoryEn": "Laminate Flooring",
    "descriptionEn": "Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces."
  },
  {
    "id": "catalog-350",
    "name": "B12",
    "image": "./image/laminate-wood/b12.jpg",
    "gallery": [
      "./image/laminate-wood/b12.jpg",
      "./image/laminate-wood/a02.jpg",
      "./image/laminate-wood/h02.jpg",
      "./image/laminate-wood/a50.jpg"
    ],
    "category": "laminate",
    "categoryLabel": "ไม้ Laminate",
    "subcategory": "ไม้ Laminate",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Laminate สำหรับงานตกแต่งพื้นและพื้นที่ภายใน ดูแลรักษาง่ายและมีลวดลายให้เลือกหลากหลาย",
    "nameEn": "B12",
    "categoryLabelEn": "Laminate Flooring",
    "subcategoryEn": "Laminate Flooring",
    "descriptionEn": "Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces."
  },
  {
    "id": "catalog-351",
    "name": "A02",
    "image": "./image/laminate-wood/a02.jpg",
    "gallery": [
      "./image/laminate-wood/a02.jpg",
      "./image/laminate-wood/h02.jpg",
      "./image/laminate-wood/a50.jpg",
      "./image/laminate-wood/201412221246586423.jpg"
    ],
    "category": "laminate",
    "categoryLabel": "ไม้ Laminate",
    "subcategory": "ไม้ Laminate",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Laminate สำหรับงานตกแต่งพื้นและพื้นที่ภายใน ดูแลรักษาง่ายและมีลวดลายให้เลือกหลากหลาย",
    "nameEn": "A02",
    "categoryLabelEn": "Laminate Flooring",
    "subcategoryEn": "Laminate Flooring",
    "descriptionEn": "Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces."
  },
  {
    "id": "catalog-352",
    "name": "H02",
    "image": "./image/laminate-wood/h02.jpg",
    "gallery": [
      "./image/laminate-wood/h02.jpg",
      "./image/laminate-wood/a50.jpg",
      "./image/laminate-wood/201412221246586423.jpg",
      "./image/laminate-wood/a04.jpg"
    ],
    "category": "laminate",
    "categoryLabel": "ไม้ Laminate",
    "subcategory": "ไม้ Laminate",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Laminate สำหรับงานตกแต่งพื้นและพื้นที่ภายใน ดูแลรักษาง่ายและมีลวดลายให้เลือกหลากหลาย",
    "nameEn": "H02",
    "categoryLabelEn": "Laminate Flooring",
    "subcategoryEn": "Laminate Flooring",
    "descriptionEn": "Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces."
  },
  {
    "id": "catalog-353",
    "name": "A50",
    "image": "./image/laminate-wood/a50.jpg",
    "gallery": [
      "./image/laminate-wood/a50.jpg",
      "./image/laminate-wood/201412221246586423.jpg",
      "./image/laminate-wood/a04.jpg",
      "./image/laminate-wood/b05.jpg"
    ],
    "category": "laminate",
    "categoryLabel": "ไม้ Laminate",
    "subcategory": "ไม้ Laminate",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Laminate สำหรับงานตกแต่งพื้นและพื้นที่ภายใน ดูแลรักษาง่ายและมีลวดลายให้เลือกหลากหลาย",
    "nameEn": "A50",
    "categoryLabelEn": "Laminate Flooring",
    "subcategoryEn": "Laminate Flooring",
    "descriptionEn": "Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces."
  },
  {
    "id": "catalog-354",
    "name": "201412221246586423",
    "image": "./image/laminate-wood/201412221246586423.jpg",
    "gallery": [
      "./image/laminate-wood/201412221246586423.jpg",
      "./image/laminate-wood/a04.jpg",
      "./image/laminate-wood/b05.jpg",
      "./image/laminate-wood/i01.jpg"
    ],
    "category": "laminate",
    "categoryLabel": "ไม้ Laminate",
    "subcategory": "ไม้ Laminate",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Laminate สำหรับงานตกแต่งพื้นและพื้นที่ภายใน ดูแลรักษาง่ายและมีลวดลายให้เลือกหลากหลาย",
    "nameEn": "201412221246586423",
    "categoryLabelEn": "Laminate Flooring",
    "subcategoryEn": "Laminate Flooring",
    "descriptionEn": "Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces."
  },
  {
    "id": "catalog-355",
    "name": "A04",
    "image": "./image/laminate-wood/a04.jpg",
    "gallery": [
      "./image/laminate-wood/a04.jpg",
      "./image/laminate-wood/b05.jpg",
      "./image/laminate-wood/i01.jpg",
      "./image/laminate-wood/20141223105706167.jpg"
    ],
    "category": "laminate",
    "categoryLabel": "ไม้ Laminate",
    "subcategory": "ไม้ Laminate",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Laminate สำหรับงานตกแต่งพื้นและพื้นที่ภายใน ดูแลรักษาง่ายและมีลวดลายให้เลือกหลากหลาย",
    "nameEn": "A04",
    "categoryLabelEn": "Laminate Flooring",
    "subcategoryEn": "Laminate Flooring",
    "descriptionEn": "Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces."
  },
  {
    "id": "catalog-356",
    "name": "B05",
    "image": "./image/laminate-wood/b05.jpg",
    "gallery": [
      "./image/laminate-wood/b05.jpg",
      "./image/laminate-wood/i01.jpg",
      "./image/laminate-wood/20141223105706167.jpg",
      "./image/laminate-wood/a03.jpg"
    ],
    "category": "laminate",
    "categoryLabel": "ไม้ Laminate",
    "subcategory": "ไม้ Laminate",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Laminate สำหรับงานตกแต่งพื้นและพื้นที่ภายใน ดูแลรักษาง่ายและมีลวดลายให้เลือกหลากหลาย",
    "nameEn": "B05",
    "categoryLabelEn": "Laminate Flooring",
    "subcategoryEn": "Laminate Flooring",
    "descriptionEn": "Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces."
  },
  {
    "id": "catalog-357",
    "name": "I01",
    "image": "./image/laminate-wood/i01.jpg",
    "gallery": [
      "./image/laminate-wood/i01.jpg",
      "./image/laminate-wood/20141223105706167.jpg",
      "./image/laminate-wood/a03.jpg",
      "./image/laminate-wood/a06.jpg"
    ],
    "category": "laminate",
    "categoryLabel": "ไม้ Laminate",
    "subcategory": "ไม้ Laminate",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Laminate สำหรับงานตกแต่งพื้นและพื้นที่ภายใน ดูแลรักษาง่ายและมีลวดลายให้เลือกหลากหลาย",
    "nameEn": "I01",
    "categoryLabelEn": "Laminate Flooring",
    "subcategoryEn": "Laminate Flooring",
    "descriptionEn": "Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces."
  },
  {
    "id": "catalog-358",
    "name": "20141223105706167",
    "image": "./image/laminate-wood/20141223105706167.jpg",
    "gallery": [
      "./image/laminate-wood/20141223105706167.jpg",
      "./image/laminate-wood/a03.jpg",
      "./image/laminate-wood/a06.jpg",
      "./image/laminate-wood/i02.jpg"
    ],
    "category": "laminate",
    "categoryLabel": "ไม้ Laminate",
    "subcategory": "ไม้ Laminate",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Laminate สำหรับงานตกแต่งพื้นและพื้นที่ภายใน ดูแลรักษาง่ายและมีลวดลายให้เลือกหลากหลาย",
    "nameEn": "20141223105706167",
    "categoryLabelEn": "Laminate Flooring",
    "subcategoryEn": "Laminate Flooring",
    "descriptionEn": "Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces."
  },
  {
    "id": "catalog-359",
    "name": "A03",
    "image": "./image/laminate-wood/a03.jpg",
    "gallery": [
      "./image/laminate-wood/a03.jpg",
      "./image/laminate-wood/a06.jpg",
      "./image/laminate-wood/i02.jpg",
      "./image/laminate-wood/201412221246513588.jpg"
    ],
    "category": "laminate",
    "categoryLabel": "ไม้ Laminate",
    "subcategory": "ไม้ Laminate",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Laminate สำหรับงานตกแต่งพื้นและพื้นที่ภายใน ดูแลรักษาง่ายและมีลวดลายให้เลือกหลากหลาย",
    "nameEn": "A03",
    "categoryLabelEn": "Laminate Flooring",
    "subcategoryEn": "Laminate Flooring",
    "descriptionEn": "Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces."
  },
  {
    "id": "catalog-360",
    "name": "A06",
    "image": "./image/laminate-wood/a06.jpg",
    "gallery": [
      "./image/laminate-wood/a06.jpg",
      "./image/laminate-wood/i02.jpg",
      "./image/laminate-wood/201412221246513588.jpg",
      "./image/laminate-wood/a07.jpg"
    ],
    "category": "laminate",
    "categoryLabel": "ไม้ Laminate",
    "subcategory": "ไม้ Laminate",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Laminate สำหรับงานตกแต่งพื้นและพื้นที่ภายใน ดูแลรักษาง่ายและมีลวดลายให้เลือกหลากหลาย",
    "nameEn": "A06",
    "categoryLabelEn": "Laminate Flooring",
    "subcategoryEn": "Laminate Flooring",
    "descriptionEn": "Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces."
  },
  {
    "id": "catalog-361",
    "name": "I02",
    "image": "./image/laminate-wood/i02.jpg",
    "gallery": [
      "./image/laminate-wood/i02.jpg",
      "./image/laminate-wood/201412221246513588.jpg",
      "./image/laminate-wood/a07.jpg",
      "./image/laminate-wood/20141223112628661.jpg"
    ],
    "category": "laminate",
    "categoryLabel": "ไม้ Laminate",
    "subcategory": "ไม้ Laminate",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Laminate สำหรับงานตกแต่งพื้นและพื้นที่ภายใน ดูแลรักษาง่ายและมีลวดลายให้เลือกหลากหลาย",
    "nameEn": "I02",
    "categoryLabelEn": "Laminate Flooring",
    "subcategoryEn": "Laminate Flooring",
    "descriptionEn": "Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces."
  },
  {
    "id": "catalog-362",
    "name": "201412221246513588",
    "image": "./image/laminate-wood/201412221246513588.jpg",
    "gallery": [
      "./image/laminate-wood/201412221246513588.jpg",
      "./image/laminate-wood/a07.jpg",
      "./image/laminate-wood/20141223112628661.jpg",
      "./image/laminate-wood/d01.jpg"
    ],
    "category": "laminate",
    "categoryLabel": "ไม้ Laminate",
    "subcategory": "ไม้ Laminate",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Laminate สำหรับงานตกแต่งพื้นและพื้นที่ภายใน ดูแลรักษาง่ายและมีลวดลายให้เลือกหลากหลาย",
    "nameEn": "201412221246513588",
    "categoryLabelEn": "Laminate Flooring",
    "subcategoryEn": "Laminate Flooring",
    "descriptionEn": "Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces."
  },
  {
    "id": "catalog-363",
    "name": "A07",
    "image": "./image/laminate-wood/a07.jpg",
    "gallery": [
      "./image/laminate-wood/a07.jpg",
      "./image/laminate-wood/20141223112628661.jpg",
      "./image/laminate-wood/d01.jpg",
      "./image/laminate-wood/a05.jpg"
    ],
    "category": "laminate",
    "categoryLabel": "ไม้ Laminate",
    "subcategory": "ไม้ Laminate",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Laminate สำหรับงานตกแต่งพื้นและพื้นที่ภายใน ดูแลรักษาง่ายและมีลวดลายให้เลือกหลากหลาย",
    "nameEn": "A07",
    "categoryLabelEn": "Laminate Flooring",
    "subcategoryEn": "Laminate Flooring",
    "descriptionEn": "Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces."
  },
  {
    "id": "catalog-364",
    "name": "20141223112628661",
    "image": "./image/laminate-wood/20141223112628661.jpg",
    "gallery": [
      "./image/laminate-wood/20141223112628661.jpg",
      "./image/laminate-wood/d01.jpg",
      "./image/laminate-wood/a05.jpg",
      "./image/laminate-wood/b02.jpg"
    ],
    "category": "laminate",
    "categoryLabel": "ไม้ Laminate",
    "subcategory": "ไม้ Laminate",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Laminate สำหรับงานตกแต่งพื้นและพื้นที่ภายใน ดูแลรักษาง่ายและมีลวดลายให้เลือกหลากหลาย",
    "nameEn": "20141223112628661",
    "categoryLabelEn": "Laminate Flooring",
    "subcategoryEn": "Laminate Flooring",
    "descriptionEn": "Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces."
  },
  {
    "id": "catalog-365",
    "name": "D01",
    "image": "./image/laminate-wood/d01.jpg",
    "gallery": [
      "./image/laminate-wood/d01.jpg",
      "./image/laminate-wood/a05.jpg",
      "./image/laminate-wood/b02.jpg",
      "./image/laminate-wood/20141225104021140.jpg"
    ],
    "category": "laminate",
    "categoryLabel": "ไม้ Laminate",
    "subcategory": "ไม้ Laminate",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Laminate สำหรับงานตกแต่งพื้นและพื้นที่ภายใน ดูแลรักษาง่ายและมีลวดลายให้เลือกหลากหลาย",
    "nameEn": "D01",
    "categoryLabelEn": "Laminate Flooring",
    "subcategoryEn": "Laminate Flooring",
    "descriptionEn": "Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces."
  },
  {
    "id": "catalog-366",
    "name": "A05",
    "image": "./image/laminate-wood/a05.jpg",
    "gallery": [
      "./image/laminate-wood/a05.jpg",
      "./image/laminate-wood/b02.jpg",
      "./image/laminate-wood/20141225104021140.jpg",
      "./image/laminate-wood/b09.jpg"
    ],
    "category": "laminate",
    "categoryLabel": "ไม้ Laminate",
    "subcategory": "ไม้ Laminate",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Laminate สำหรับงานตกแต่งพื้นและพื้นที่ภายใน ดูแลรักษาง่ายและมีลวดลายให้เลือกหลากหลาย",
    "nameEn": "A05",
    "categoryLabelEn": "Laminate Flooring",
    "subcategoryEn": "Laminate Flooring",
    "descriptionEn": "Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces."
  },
  {
    "id": "catalog-367",
    "name": "B02",
    "image": "./image/laminate-wood/b02.jpg",
    "gallery": [
      "./image/laminate-wood/b02.jpg",
      "./image/laminate-wood/20141225104021140.jpg",
      "./image/laminate-wood/b09.jpg",
      "./image/laminate-wood/20141224101754866.jpg"
    ],
    "category": "laminate",
    "categoryLabel": "ไม้ Laminate",
    "subcategory": "ไม้ Laminate",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Laminate สำหรับงานตกแต่งพื้นและพื้นที่ภายใน ดูแลรักษาง่ายและมีลวดลายให้เลือกหลากหลาย",
    "nameEn": "B02",
    "categoryLabelEn": "Laminate Flooring",
    "subcategoryEn": "Laminate Flooring",
    "descriptionEn": "Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces."
  },
  {
    "id": "catalog-368",
    "name": "20141225104021140",
    "image": "./image/laminate-wood/20141225104021140.jpg",
    "gallery": [
      "./image/laminate-wood/20141225104021140.jpg",
      "./image/laminate-wood/b09.jpg",
      "./image/laminate-wood/20141224101754866.jpg",
      "./image/laminate-wood/a51.jpg"
    ],
    "category": "laminate",
    "categoryLabel": "ไม้ Laminate",
    "subcategory": "ไม้ Laminate",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Laminate สำหรับงานตกแต่งพื้นและพื้นที่ภายใน ดูแลรักษาง่ายและมีลวดลายให้เลือกหลากหลาย",
    "nameEn": "20141225104021140",
    "categoryLabelEn": "Laminate Flooring",
    "subcategoryEn": "Laminate Flooring",
    "descriptionEn": "Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces."
  },
  {
    "id": "catalog-369",
    "name": "B09",
    "image": "./image/laminate-wood/b09.jpg",
    "gallery": [
      "./image/laminate-wood/b09.jpg",
      "./image/laminate-wood/20141224101754866.jpg",
      "./image/laminate-wood/a51.jpg",
      "./image/laminate-wood/a31.jpg"
    ],
    "category": "laminate",
    "categoryLabel": "ไม้ Laminate",
    "subcategory": "ไม้ Laminate",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Laminate สำหรับงานตกแต่งพื้นและพื้นที่ภายใน ดูแลรักษาง่ายและมีลวดลายให้เลือกหลากหลาย",
    "nameEn": "B09",
    "categoryLabelEn": "Laminate Flooring",
    "subcategoryEn": "Laminate Flooring",
    "descriptionEn": "Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces."
  },
  {
    "id": "catalog-370",
    "name": "20141224101754866",
    "image": "./image/laminate-wood/20141224101754866.jpg",
    "gallery": [
      "./image/laminate-wood/20141224101754866.jpg",
      "./image/laminate-wood/a51.jpg",
      "./image/laminate-wood/a31.jpg"
    ],
    "category": "laminate",
    "categoryLabel": "ไม้ Laminate",
    "subcategory": "ไม้ Laminate",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Laminate สำหรับงานตกแต่งพื้นและพื้นที่ภายใน ดูแลรักษาง่ายและมีลวดลายให้เลือกหลากหลาย",
    "nameEn": "20141224101754866",
    "categoryLabelEn": "Laminate Flooring",
    "subcategoryEn": "Laminate Flooring",
    "descriptionEn": "Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces."
  },
  {
    "id": "catalog-371",
    "name": "A51",
    "image": "./image/laminate-wood/a51.jpg",
    "gallery": [
      "./image/laminate-wood/a51.jpg",
      "./image/laminate-wood/a31.jpg"
    ],
    "category": "laminate",
    "categoryLabel": "ไม้ Laminate",
    "subcategory": "ไม้ Laminate",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Laminate สำหรับงานตกแต่งพื้นและพื้นที่ภายใน ดูแลรักษาง่ายและมีลวดลายให้เลือกหลากหลาย",
    "nameEn": "A51",
    "categoryLabelEn": "Laminate Flooring",
    "subcategoryEn": "Laminate Flooring",
    "descriptionEn": "Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces."
  },
  {
    "id": "catalog-372",
    "name": "A31",
    "image": "./image/laminate-wood/a31.jpg",
    "gallery": [
      "./image/laminate-wood/b03.jpg",
      "./image/laminate-wood/a08.jpg",
      "./image/laminate-wood/20141223105625738.jpg",
      "./image/laminate-wood/d02.jpg"
    ],
    "category": "laminate",
    "categoryLabel": "ไม้ Laminate",
    "subcategory": "ไม้ Laminate",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ Laminate สำหรับงานตกแต่งพื้นและพื้นที่ภายใน ดูแลรักษาง่ายและมีลวดลายให้เลือกหลากหลาย",
    "nameEn": "A31",
    "categoryLabelEn": "Laminate Flooring",
    "subcategoryEn": "Laminate Flooring",
    "descriptionEn": "Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces."
  },
  {
    "id": "catalog-373",
    "name": "2011_5_27_104336",
    "image": "./image/pvc-wood/2011-5-27-104336.jpg",
    "gallery": [
      "./image/pvc-wood/2011-5-27-104336.jpg",
      "./image/pvc-wood/2011-5-27-104436.jpg",
      "./image/pvc-wood/pvc2.jpg",
      "./image/pvc-wood/2011-5-27-104355.jpg"
    ],
    "category": "pvc",
    "categoryLabel": "ไม้ PVC",
    "subcategory": "ไม้ PVC",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ PVC สำหรับตกแต่งผนังและพื้นที่ใช้งานที่ต้องการวัสดุดูแลรักษาง่าย น้ำหนักเบา",
    "nameEn": "2011_5_27_104336",
    "categoryLabelEn": "PVC Wood",
    "subcategoryEn": "PVC Wood",
    "descriptionEn": "PVC wood for wall decoration and applications that require a lightweight, easy-to-maintain material."
  },
  {
    "id": "catalog-374",
    "name": "2011_5_27_104436",
    "image": "./image/pvc-wood/2011-5-27-104436.jpg",
    "gallery": [
      "./image/pvc-wood/2011-5-27-104436.jpg",
      "./image/pvc-wood/pvc2.jpg",
      "./image/pvc-wood/2011-5-27-104355.jpg",
      "./image/pvc-wood/2011-6-2-20315.jpg"
    ],
    "category": "pvc",
    "categoryLabel": "ไม้ PVC",
    "subcategory": "ไม้ PVC",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ PVC สำหรับตกแต่งผนังและพื้นที่ใช้งานที่ต้องการวัสดุดูแลรักษาง่าย น้ำหนักเบา",
    "nameEn": "2011_5_27_104436",
    "categoryLabelEn": "PVC Wood",
    "subcategoryEn": "PVC Wood",
    "descriptionEn": "PVC wood for wall decoration and applications that require a lightweight, easy-to-maintain material."
  },
  {
    "id": "catalog-375",
    "name": "pvcลายไม้2",
    "image": "./image/pvc-wood/pvc2.jpg",
    "gallery": [
      "./image/pvc-wood/pvc2.jpg",
      "./image/pvc-wood/2011-5-27-104355.jpg",
      "./image/pvc-wood/2011-6-2-20315.jpg",
      "./image/pvc-wood/pvc.jpg"
    ],
    "category": "pvc",
    "categoryLabel": "ไม้ PVC",
    "subcategory": "ไม้ PVC",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ PVC สำหรับตกแต่งผนังและพื้นที่ใช้งานที่ต้องการวัสดุดูแลรักษาง่าย น้ำหนักเบา",
    "nameEn": "PVC Wood Grain 2",
    "categoryLabelEn": "PVC Wood",
    "subcategoryEn": "PVC Wood",
    "descriptionEn": "PVC wood for wall decoration and applications that require a lightweight, easy-to-maintain material."
  },
  {
    "id": "catalog-376",
    "name": "2011_5_27_104355",
    "image": "./image/pvc-wood/2011-5-27-104355.jpg",
    "gallery": [
      "./image/pvc-wood/2011-5-27-104355.jpg",
      "./image/pvc-wood/2011-6-2-20315.jpg",
      "./image/pvc-wood/pvc.jpg",
      "./image/pvc-wood/2011-5-27-10451.jpg"
    ],
    "category": "pvc",
    "categoryLabel": "ไม้ PVC",
    "subcategory": "ไม้ PVC",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ PVC สำหรับตกแต่งผนังและพื้นที่ใช้งานที่ต้องการวัสดุดูแลรักษาง่าย น้ำหนักเบา",
    "nameEn": "2011_5_27_104355",
    "categoryLabelEn": "PVC Wood",
    "subcategoryEn": "PVC Wood",
    "descriptionEn": "PVC wood for wall decoration and applications that require a lightweight, easy-to-maintain material."
  },
  {
    "id": "catalog-377",
    "name": "2011_6_2_20315",
    "image": "./image/pvc-wood/2011-6-2-20315.jpg",
    "gallery": [
      "./image/pvc-wood/pvc2.jpg",
      "./image/pvc-wood/2011-5-27-104355.jpg",
      "./image/pvc-wood/2011-6-2-20315.jpg",
      "./image/pvc-wood/pvc.jpg"
    ],
    "category": "pvc",
    "categoryLabel": "ไม้ PVC",
    "subcategory": "ไม้ PVC",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ PVC สำหรับตกแต่งผนังและพื้นที่ใช้งานที่ต้องการวัสดุดูแลรักษาง่าย น้ำหนักเบา",
    "nameEn": "2011_6_2_20315",
    "categoryLabelEn": "PVC Wood",
    "subcategoryEn": "PVC Wood",
    "descriptionEn": "PVC wood for wall decoration and applications that require a lightweight, easy-to-maintain material."
  },
  {
    "id": "catalog-378",
    "name": "pvcลายไม้",
    "image": "./image/pvc-wood/pvc.jpg",
    "gallery": [
      "./image/pvc-wood/pvc2.jpg",
      "./image/pvc-wood/2011-5-27-104355.jpg",
      "./image/pvc-wood/2011-6-2-20315.jpg",
      "./image/pvc-wood/pvc.jpg"
    ],
    "category": "pvc",
    "categoryLabel": "ไม้ PVC",
    "subcategory": "ไม้ PVC",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ PVC สำหรับตกแต่งผนังและพื้นที่ใช้งานที่ต้องการวัสดุดูแลรักษาง่าย น้ำหนักเบา",
    "nameEn": "PVC Wood Grain",
    "categoryLabelEn": "PVC Wood",
    "subcategoryEn": "PVC Wood",
    "descriptionEn": "PVC wood for wall decoration and applications that require a lightweight, easy-to-maintain material."
  },
  {
    "id": "catalog-379",
    "name": "2011_5_27_10451",
    "image": "./image/pvc-wood/2011-5-27-10451.jpg",
    "gallery": [
      "./image/pvc-wood/pvc2.jpg",
      "./image/pvc-wood/2011-5-27-104355.jpg",
      "./image/pvc-wood/2011-6-2-20315.jpg",
      "./image/pvc-wood/pvc.jpg"
    ],
    "category": "pvc",
    "categoryLabel": "ไม้ PVC",
    "subcategory": "ไม้ PVC",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ PVC สำหรับตกแต่งผนังและพื้นที่ใช้งานที่ต้องการวัสดุดูแลรักษาง่าย น้ำหนักเบา",
    "nameEn": "2011_5_27_10451",
    "categoryLabelEn": "PVC Wood",
    "subcategoryEn": "PVC Wood",
    "descriptionEn": "PVC wood for wall decoration and applications that require a lightweight, easy-to-maintain material."
  },
  {
    "id": "catalog-380",
    "name": "2011_5_27_104046",
    "image": "./image/pvc-wood/2011-5-27-104046.jpg",
    "gallery": [
      "./image/pvc-wood/pvc2.jpg",
      "./image/pvc-wood/2011-5-27-104355.jpg",
      "./image/pvc-wood/2011-6-2-20315.jpg",
      "./image/pvc-wood/pvc.jpg"
    ],
    "category": "pvc",
    "categoryLabel": "ไม้ PVC",
    "subcategory": "ไม้ PVC",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ PVC สำหรับตกแต่งผนังและพื้นที่ใช้งานที่ต้องการวัสดุดูแลรักษาง่าย น้ำหนักเบา",
    "nameEn": "2011_5_27_104046",
    "categoryLabelEn": "PVC Wood",
    "subcategoryEn": "PVC Wood",
    "descriptionEn": "PVC wood for wall decoration and applications that require a lightweight, easy-to-maintain material."
  },
  {
    "id": "catalog-381",
    "name": "pvcลายไม้1",
    "image": "./image/pvc-wood/pvc1.jpg",
    "gallery": [
      "./image/pvc-wood/pvc2.jpg",
      "./image/pvc-wood/2011-5-27-104355.jpg",
      "./image/pvc-wood/2011-6-2-20315.jpg",
      "./image/pvc-wood/pvc.jpg"
    ],
    "category": "pvc",
    "categoryLabel": "ไม้ PVC",
    "subcategory": "ไม้ PVC",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ PVC สำหรับตกแต่งผนังและพื้นที่ใช้งานที่ต้องการวัสดุดูแลรักษาง่าย น้ำหนักเบา",
    "nameEn": "PVC Wood Grain 1",
    "categoryLabelEn": "PVC Wood",
    "subcategoryEn": "PVC Wood",
    "descriptionEn": "PVC wood for wall decoration and applications that require a lightweight, easy-to-maintain material."
  },
  {
    "id": "catalog-382",
    "name": "2011_6_21_133522",
    "image": "./image/pvc-wood/2011-6-21-133522.jpg",
    "gallery": [
      "./image/pvc-wood/pvc2.jpg",
      "./image/pvc-wood/2011-5-27-104355.jpg",
      "./image/pvc-wood/2011-6-2-20315.jpg",
      "./image/pvc-wood/pvc.jpg"
    ],
    "category": "pvc",
    "categoryLabel": "ไม้ PVC",
    "subcategory": "ไม้ PVC",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ PVC สำหรับตกแต่งผนังและพื้นที่ใช้งานที่ต้องการวัสดุดูแลรักษาง่าย น้ำหนักเบา",
    "nameEn": "2011_6_21_133522",
    "categoryLabelEn": "PVC Wood",
    "subcategoryEn": "PVC Wood",
    "descriptionEn": "PVC wood for wall decoration and applications that require a lightweight, easy-to-maintain material."
  },
  {
    "id": "catalog-383",
    "name": "2011_5_27_103349",
    "image": "./image/pvc-wood/2011-5-27-103349.jpg",
    "gallery": [
      "./image/pvc-wood/pvc2.jpg",
      "./image/pvc-wood/2011-5-27-104355.jpg",
      "./image/pvc-wood/2011-6-2-20315.jpg",
      "./image/pvc-wood/pvc.jpg"
    ],
    "category": "pvc",
    "categoryLabel": "ไม้ PVC",
    "subcategory": "ไม้ PVC",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ PVC สำหรับตกแต่งผนังและพื้นที่ใช้งานที่ต้องการวัสดุดูแลรักษาง่าย น้ำหนักเบา",
    "nameEn": "2011_5_27_103349",
    "categoryLabelEn": "PVC Wood",
    "subcategoryEn": "PVC Wood",
    "descriptionEn": "PVC wood for wall decoration and applications that require a lightweight, easy-to-maintain material."
  },
  {
    "id": "catalog-384",
    "name": "2011_6_24_125813",
    "image": "./image/pvc-wood/2011-6-24-125813.jpg",
    "gallery": [
      "./image/pvc-wood/pvc2.jpg",
      "./image/pvc-wood/2011-5-27-104355.jpg",
      "./image/pvc-wood/2011-6-2-20315.jpg",
      "./image/pvc-wood/pvc.jpg"
    ],
    "category": "pvc",
    "categoryLabel": "ไม้ PVC",
    "subcategory": "ไม้ PVC",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ PVC สำหรับตกแต่งผนังและพื้นที่ใช้งานที่ต้องการวัสดุดูแลรักษาง่าย น้ำหนักเบา",
    "nameEn": "2011_6_24_125813",
    "categoryLabelEn": "PVC Wood",
    "subcategoryEn": "PVC Wood",
    "descriptionEn": "PVC wood for wall decoration and applications that require a lightweight, easy-to-maintain material."
  },
  {
    "id": "catalog-385",
    "name": "2011_6_21_13222",
    "image": "./image/pvc-wood/2011-6-21-13222.jpg",
    "gallery": [
      "./image/pvc-wood/pvc2.jpg",
      "./image/pvc-wood/2011-5-27-104355.jpg",
      "./image/pvc-wood/2011-6-2-20315.jpg",
      "./image/pvc-wood/pvc.jpg"
    ],
    "category": "pvc",
    "categoryLabel": "ไม้ PVC",
    "subcategory": "ไม้ PVC",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ PVC สำหรับตกแต่งผนังและพื้นที่ใช้งานที่ต้องการวัสดุดูแลรักษาง่าย น้ำหนักเบา",
    "nameEn": "2011_6_21_13222",
    "categoryLabelEn": "PVC Wood",
    "subcategoryEn": "PVC Wood",
    "descriptionEn": "PVC wood for wall decoration and applications that require a lightweight, easy-to-maintain material."
  },
  {
    "id": "catalog-386",
    "name": "2011_5_27_103428",
    "image": "./image/pvc-wood/2011-5-27-103428.jpg",
    "gallery": [
      "./image/pvc-wood/pvc2.jpg",
      "./image/pvc-wood/2011-5-27-104355.jpg",
      "./image/pvc-wood/2011-6-2-20315.jpg",
      "./image/pvc-wood/pvc.jpg"
    ],
    "category": "pvc",
    "categoryLabel": "ไม้ PVC",
    "subcategory": "ไม้ PVC",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ PVC สำหรับตกแต่งผนังและพื้นที่ใช้งานที่ต้องการวัสดุดูแลรักษาง่าย น้ำหนักเบา",
    "nameEn": "2011_5_27_103428",
    "categoryLabelEn": "PVC Wood",
    "subcategoryEn": "PVC Wood",
    "descriptionEn": "PVC wood for wall decoration and applications that require a lightweight, easy-to-maintain material."
  },
  {
    "id": "catalog-387",
    "name": "2011_5_27_10426",
    "image": "./image/pvc-wood/2011-5-27-10426.jpg",
    "gallery": [
      "./image/pvc-wood/pvc2.jpg",
      "./image/pvc-wood/2011-5-27-104355.jpg",
      "./image/pvc-wood/2011-6-2-20315.jpg",
      "./image/pvc-wood/pvc.jpg"
    ],
    "category": "pvc",
    "categoryLabel": "ไม้ PVC",
    "subcategory": "ไม้ PVC",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ PVC สำหรับตกแต่งผนังและพื้นที่ใช้งานที่ต้องการวัสดุดูแลรักษาง่าย น้ำหนักเบา",
    "nameEn": "2011_5_27_10426",
    "categoryLabelEn": "PVC Wood",
    "subcategoryEn": "PVC Wood",
    "descriptionEn": "PVC wood for wall decoration and applications that require a lightweight, easy-to-maintain material."
  },
  {
    "id": "catalog-388",
    "name": "2011_6_8_11713",
    "image": "./image/pvc-wood/2011-6-8-11713.jpg",
    "gallery": [
      "./image/pvc-wood/2011-6-8-11713.jpg",
      "./image/pvc-wood/2011-6-21-133414.jpg",
      "./image/pvc-wood/2011-6-21-132330.jpg"
    ],
    "category": "pvc",
    "categoryLabel": "ไม้ PVC",
    "subcategory": "ไม้ PVC",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ PVC สำหรับตกแต่งผนังและพื้นที่ใช้งานที่ต้องการวัสดุดูแลรักษาง่าย น้ำหนักเบา",
    "nameEn": "2011_6_8_11713",
    "categoryLabelEn": "PVC Wood",
    "subcategoryEn": "PVC Wood",
    "descriptionEn": "PVC wood for wall decoration and applications that require a lightweight, easy-to-maintain material."
  },
  {
    "id": "catalog-389",
    "name": "2011_6_21_133414",
    "image": "./image/pvc-wood/2011-6-21-133414.jpg",
    "gallery": [
      "./image/pvc-wood/2011-6-21-133414.jpg",
      "./image/pvc-wood/2011-6-21-132330.jpg"
    ],
    "category": "pvc",
    "categoryLabel": "ไม้ PVC",
    "subcategory": "ไม้ PVC",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ PVC สำหรับตกแต่งผนังและพื้นที่ใช้งานที่ต้องการวัสดุดูแลรักษาง่าย น้ำหนักเบา",
    "nameEn": "2011_6_21_133414",
    "categoryLabelEn": "PVC Wood",
    "subcategoryEn": "PVC Wood",
    "descriptionEn": "PVC wood for wall decoration and applications that require a lightweight, easy-to-maintain material."
  },
  {
    "id": "catalog-390",
    "name": "2011_6_21_132330",
    "image": "./image/pvc-wood/2011-6-21-132330.jpg",
    "gallery": [
      "./image/pvc-wood/pvc2.jpg",
      "./image/pvc-wood/2011-5-27-104355.jpg",
      "./image/pvc-wood/2011-6-2-20315.jpg",
      "./image/pvc-wood/pvc.jpg"
    ],
    "category": "pvc",
    "categoryLabel": "ไม้ PVC",
    "subcategory": "ไม้ PVC",
    "price": 0,
    "unit": "ตร.ม.",
    "description": "ไม้ PVC สำหรับตกแต่งผนังและพื้นที่ใช้งานที่ต้องการวัสดุดูแลรักษาง่าย น้ำหนักเบา",
    "nameEn": "2011_6_21_132330",
    "categoryLabelEn": "PVC Wood",
    "subcategoryEn": "PVC Wood",
    "descriptionEn": "PVC wood for wall decoration and applications that require a lightweight, easy-to-maintain material."
  },
  {
    "id": "quartzite-1",
    "name": "Cairo",
    "image": "./image/quartz-stone/cairo.jpg",
    "gallery": [
      "./image/quartz-stone/cairo.jpg",
      "./image/quartz-stone/da-vinci.jpg",
      "./image/quartz-stone/explosion-blue.jpg"
    ],
    "category": "quartzite",
    "categoryLabel": "หินควอตไซต์",
    "subcategory": "หินควอตไซต์",
    "price": 0,
    "unit": "รายการ",
    "description": "หินควอตไซต์เป็นหินธรรมชาติที่มีความแข็งแรงสูง ลวดลายโดดเด่นและมีมิติ เหมาะสำหรับเคาน์เตอร์ ผนัง พื้น และงานตกแต่งระดับพรีเมียม",
    "nameEn": "Cairo",
    "categoryLabelEn": "Quartzite",
    "subcategoryEn": "Quartzite",
    "descriptionEn": "Natural quartzite with high durability and distinctive patterns, suitable for floors, walls, countertops and premium interiors."
  },
  {
    "id": "quartzite-2",
    "name": "Da Vinci",
    "image": "./image/quartz-stone/da-vinci.jpg",
    "gallery": [
      "./image/quartz-stone/cairo.jpg",
      "./image/quartz-stone/da-vinci.jpg",
      "./image/quartz-stone/explosion-blue.jpg"
    ],
    "category": "quartzite",
    "categoryLabel": "หินควอตไซต์",
    "subcategory": "หินควอตไซต์",
    "price": 0,
    "unit": "รายการ",
    "description": "หินควอตไซต์เป็นหินธรรมชาติที่มีความแข็งแรงสูง ลวดลายโดดเด่นและมีมิติ เหมาะสำหรับเคาน์เตอร์ ผนัง พื้น และงานตกแต่งระดับพรีเมียม",
    "nameEn": "Da Vinci",
    "categoryLabelEn": "Quartzite",
    "subcategoryEn": "Quartzite",
    "descriptionEn": "Natural quartzite with high durability and distinctive patterns, suitable for floors, walls, countertops and premium interiors."
  },
  {
    "id": "quartzite-3",
    "name": "Explosion Blue",
    "image": "./image/quartz-stone/explosion-blue.jpg",
    "gallery": [
      "./image/quartz-stone/cairo.jpg",
      "./image/quartz-stone/da-vinci.jpg",
      "./image/quartz-stone/explosion-blue.jpg"
    ],
    "category": "quartzite",
    "categoryLabel": "หินควอตไซต์",
    "subcategory": "หินควอตไซต์",
    "price": 0,
    "unit": "รายการ",
    "description": "หินควอตไซต์เป็นหินธรรมชาติที่มีความแข็งแรงสูง ลวดลายโดดเด่นและมีมิติ เหมาะสำหรับเคาน์เตอร์ ผนัง พื้น และงานตกแต่งระดับพรีเมียม",
    "nameEn": "Explosion Blue",
    "categoryLabelEn": "Quartzite",
    "subcategoryEn": "Quartzite",
    "descriptionEn": "Natural quartzite with high durability and distinctive patterns, suitable for floors, walls, countertops and premium interiors."
  },
  {
    "id": "quartzite-4",
    "name": "La Valle",
    "image": "./image/quartz-stone/la-valle.jpg",
    "gallery": [
      "./image/quartz-stone/cairo.jpg",
      "./image/quartz-stone/da-vinci.jpg",
      "./image/quartz-stone/explosion-blue.jpg"
    ],
    "category": "quartzite",
    "categoryLabel": "หินควอตไซต์",
    "subcategory": "หินควอตไซต์",
    "price": 0,
    "unit": "รายการ",
    "description": "หินควอตไซต์เป็นหินธรรมชาติที่มีความแข็งแรงสูง ลวดลายโดดเด่นและมีมิติ เหมาะสำหรับเคาน์เตอร์ ผนัง พื้น และงานตกแต่งระดับพรีเมียม",
    "nameEn": "La Valle",
    "categoryLabelEn": "Quartzite",
    "subcategoryEn": "Quartzite",
    "descriptionEn": "Natural quartzite with high durability and distinctive patterns, suitable for floors, walls, countertops and premium interiors."
  },
  {
    "id": "quartzite-5",
    "name": "Mont Blanc",
    "image": "./image/quartz-stone/mont-blanc.jpg",
    "gallery": [
      "./image/quartz-stone/cairo.jpg",
      "./image/quartz-stone/da-vinci.jpg",
      "./image/quartz-stone/explosion-blue.jpg"
    ],
    "category": "quartzite",
    "categoryLabel": "หินควอตไซต์",
    "subcategory": "หินควอตไซต์",
    "price": 0,
    "unit": "รายการ",
    "description": "หินควอตไซต์เป็นหินธรรมชาติที่มีความแข็งแรงสูง ลวดลายโดดเด่นและมีมิติ เหมาะสำหรับเคาน์เตอร์ ผนัง พื้น และงานตกแต่งระดับพรีเมียม",
    "nameEn": "Mont Blanc",
    "categoryLabelEn": "Quartzite",
    "subcategoryEn": "Quartzite",
    "descriptionEn": "Natural quartzite with high durability and distinctive patterns, suitable for floors, walls, countertops and premium interiors."
  },
  {
    "id": "quartzite-6",
    "name": "Pink Lake",
    "image": "./image/quartz-stone/pink-lake.jpg",
    "gallery": [
      "./image/quartz-stone/cairo.jpg",
      "./image/quartz-stone/da-vinci.jpg",
      "./image/quartz-stone/explosion-blue.jpg"
    ],
    "category": "quartzite",
    "categoryLabel": "หินควอตไซต์",
    "subcategory": "หินควอตไซต์",
    "price": 0,
    "unit": "รายการ",
    "description": "หินควอตไซต์เป็นหินธรรมชาติที่มีความแข็งแรงสูง ลวดลายโดดเด่นและมีมิติ เหมาะสำหรับเคาน์เตอร์ ผนัง พื้น และงานตกแต่งระดับพรีเมียม",
    "nameEn": "Pink Lake",
    "categoryLabelEn": "Quartzite",
    "subcategoryEn": "Quartzite",
    "descriptionEn": "Natural quartzite with high durability and distinctive patterns, suitable for floors, walls, countertops and premium interiors."
  },
  {
    "id": "quartzite-7",
    "name": "Starry Night",
    "image": "./image/quartz-stone/starry-night.jpg",
    "gallery": [
      "./image/quartz-stone/cairo.jpg",
      "./image/quartz-stone/da-vinci.jpg",
      "./image/quartz-stone/explosion-blue.jpg"
    ],
    "category": "quartzite",
    "categoryLabel": "หินควอตไซต์",
    "subcategory": "หินควอตไซต์",
    "price": 0,
    "unit": "รายการ",
    "description": "หินควอตไซต์เป็นหินธรรมชาติที่มีความแข็งแรงสูง ลวดลายโดดเด่นและมีมิติ เหมาะสำหรับเคาน์เตอร์ ผนัง พื้น และงานตกแต่งระดับพรีเมียม",
    "nameEn": "Starry Night",
    "categoryLabelEn": "Quartzite",
    "subcategoryEn": "Quartzite",
    "descriptionEn": "Natural quartzite with high durability and distinctive patterns, suitable for floors, walls, countertops and premium interiors."
  },
  {
    "id": "limestone-1",
    "name": "Avorio Beige",
    "image": "./image/limestone-stone/avorio-beige.jpg",
    "gallery": [
      "./image/limestone-stone/avorio-beige.jpg",
      "./image/limestone-stone/mocca-cream.jpg",
      "./image/limestone-stone/rava-beige.jpg"
    ],
    "category": "limestone",
    "categoryLabel": "หินไลม์สโตน",
    "subcategory": "หินไลม์สโตน",
    "price": 0,
    "unit": "รายการ",
    "description": "หินไลม์สโตนให้โทนสีธรรมชาติและพื้นผิวอบอุ่น เหมาะกับผนัง พื้น งานภูมิทัศน์ และงานตกแต่งที่ต้องการความเป็นธรรมชาติ",
    "nameEn": "Avorio Beige",
    "categoryLabelEn": "Limestone",
    "subcategoryEn": "Limestone",
    "descriptionEn": "Natural limestone with warm tones, suitable for floors, walls, landscaping and exterior applications."
  },
  {
    "id": "limestone-2",
    "name": "Mocca Cream",
    "image": "./image/limestone-stone/mocca-cream.jpg",
    "gallery": [
      "./image/limestone-stone/avorio-beige.jpg",
      "./image/limestone-stone/mocca-cream.jpg",
      "./image/limestone-stone/rava-beige.jpg"
    ],
    "category": "limestone",
    "categoryLabel": "หินไลม์สโตน",
    "subcategory": "หินไลม์สโตน",
    "price": 0,
    "unit": "รายการ",
    "description": "หินไลม์สโตนให้โทนสีธรรมชาติและพื้นผิวอบอุ่น เหมาะกับผนัง พื้น งานภูมิทัศน์ และงานตกแต่งที่ต้องการความเป็นธรรมชาติ",
    "nameEn": "Mocca Cream",
    "categoryLabelEn": "Limestone",
    "subcategoryEn": "Limestone",
    "descriptionEn": "Natural limestone with warm tones, suitable for floors, walls, landscaping and exterior applications."
  },
  {
    "id": "limestone-3",
    "name": "Rava Beige",
    "image": "./image/limestone-stone/rava-beige.jpg",
    "gallery": [
      "./image/limestone-stone/avorio-beige.jpg",
      "./image/limestone-stone/mocca-cream.jpg",
      "./image/limestone-stone/rava-beige.jpg"
    ],
    "category": "limestone",
    "categoryLabel": "หินไลม์สโตน",
    "subcategory": "หินไลม์สโตน",
    "price": 0,
    "unit": "รายการ",
    "description": "หินไลม์สโตนให้โทนสีธรรมชาติและพื้นผิวอบอุ่น เหมาะกับผนัง พื้น งานภูมิทัศน์ และงานตกแต่งที่ต้องการความเป็นธรรมชาติ",
    "nameEn": "Rava Beige",
    "categoryLabelEn": "Limestone",
    "subcategoryEn": "Limestone",
    "descriptionEn": "Natural limestone with warm tones, suitable for floors, walls, landscaping and exterior applications."
  },
  {
    "id": "travertine-1",
    "name": "Beige Travertine",
    "image": "./image/travertine-stone/beige-travertine.jpg",
    "gallery": [
      "./image/travertine-stone/beige-travertine.jpg",
      "./image/travertine-stone/silver-travertine.jpg",
      "./image/travertine-stone/white-travertine.jpg"
    ],
    "category": "travertine",
    "categoryLabel": "หินทราเวอร์ทีน",
    "subcategory": "หินทราเวอร์ทีน",
    "price": 0,
    "unit": "รายการ",
    "description": "หินทราเวอร์ทีนมีเอกลักษณ์จากรูพรุนและลวดลายตามธรรมชาติ เหมาะสำหรับพื้น ผนัง ห้องน้ำ และงานตกแต่งทั้งภายในและภายนอก",
    "nameEn": "Beige Travertine",
    "categoryLabelEn": "Travertine",
    "subcategoryEn": "Travertine",
    "descriptionEn": "Travertine with naturally distinctive texture and pores, suitable for floors, walls and decorative applications."
  },
  {
    "id": "travertine-2",
    "name": "Silver Travertine",
    "image": "./image/travertine-stone/silver-travertine.jpg",
    "gallery": [
      "./image/travertine-stone/beige-travertine.jpg",
      "./image/travertine-stone/silver-travertine.jpg",
      "./image/travertine-stone/white-travertine.jpg"
    ],
    "category": "travertine",
    "categoryLabel": "หินทราเวอร์ทีน",
    "subcategory": "หินทราเวอร์ทีน",
    "price": 0,
    "unit": "รายการ",
    "description": "หินทราเวอร์ทีนมีเอกลักษณ์จากรูพรุนและลวดลายตามธรรมชาติ เหมาะสำหรับพื้น ผนัง ห้องน้ำ และงานตกแต่งทั้งภายในและภายนอก",
    "nameEn": "Silver Travertine",
    "categoryLabelEn": "Travertine",
    "subcategoryEn": "Travertine",
    "descriptionEn": "Travertine with naturally distinctive texture and pores, suitable for floors, walls and decorative applications."
  },
  {
    "id": "travertine-3",
    "name": "White Travertine",
    "image": "./image/travertine-stone/white-travertine.jpg",
    "gallery": [
      "./image/travertine-stone/beige-travertine.jpg",
      "./image/travertine-stone/silver-travertine.jpg",
      "./image/travertine-stone/white-travertine.jpg"
    ],
    "category": "travertine",
    "categoryLabel": "หินทราเวอร์ทีน",
    "subcategory": "หินทราเวอร์ทีน",
    "price": 0,
    "unit": "รายการ",
    "description": "หินทราเวอร์ทีนมีเอกลักษณ์จากรูพรุนและลวดลายตามธรรมชาติ เหมาะสำหรับพื้น ผนัง ห้องน้ำ และงานตกแต่งทั้งภายในและภายนอก",
    "nameEn": "White Travertine",
    "categoryLabelEn": "Travertine",
    "subcategoryEn": "Travertine",
    "descriptionEn": "Travertine with naturally distinctive texture and pores, suitable for floors, walls and decorative applications."
  },
  {
    "id": "travertine-4",
    "name": "Yellow Travertine",
    "image": "./image/travertine-stone/yellow-travertine.jpg",
    "gallery": [
      "./image/travertine-stone/beige-travertine.jpg",
      "./image/travertine-stone/silver-travertine.jpg",
      "./image/travertine-stone/white-travertine.jpg"
    ],
    "category": "travertine",
    "categoryLabel": "หินทราเวอร์ทีน",
    "subcategory": "หินทราเวอร์ทีน",
    "price": 0,
    "unit": "รายการ",
    "description": "หินทราเวอร์ทีนมีเอกลักษณ์จากรูพรุนและลวดลายตามธรรมชาติ เหมาะสำหรับพื้น ผนัง ห้องน้ำ และงานตกแต่งทั้งภายในและภายนอก",
    "nameEn": "Yellow Travertine",
    "categoryLabelEn": "Travertine",
    "subcategoryEn": "Travertine",
    "descriptionEn": "Travertine with naturally distinctive texture and pores, suitable for floors, walls and decorative applications."
  },
  {
    "id": "onyx-1",
    "name": "Bruno Onyx",
    "image": "./image/onyx-stone/bruno-onyx.jpg",
    "gallery": [
      "./image/onyx-stone/bruno-onyx.jpg",
      "./image/onyx-stone/cola-onyx.jpg",
      "./image/onyx-stone/damra-onyx.jpg"
    ],
    "category": "onyx",
    "categoryLabel": "หินออนิกซ์",
    "subcategory": "หินออนิกซ์",
    "price": 0,
    "unit": "รายการ",
    "description": "หินออนิกซ์มีลวดลายและความโปร่งแสงที่โดดเด่น เหมาะสำหรับผนังตกแต่ง เคาน์เตอร์ และงานดีไซน์ที่ต้องการความหรูหรา",
    "nameEn": "Bruno Onyx",
    "categoryLabelEn": "Onyx",
    "subcategoryEn": "Onyx",
    "descriptionEn": "Onyx with striking patterns and translucency, ideal for luxurious decorative applications."
  },
  {
    "id": "onyx-2",
    "name": "Cola Onyx",
    "image": "./image/onyx-stone/cola-onyx.jpg",
    "gallery": [
      "./image/onyx-stone/bruno-onyx.jpg",
      "./image/onyx-stone/cola-onyx.jpg",
      "./image/onyx-stone/damra-onyx.jpg"
    ],
    "category": "onyx",
    "categoryLabel": "หินออนิกซ์",
    "subcategory": "หินออนิกซ์",
    "price": 0,
    "unit": "รายการ",
    "description": "หินออนิกซ์มีลวดลายและความโปร่งแสงที่โดดเด่น เหมาะสำหรับผนังตกแต่ง เคาน์เตอร์ และงานดีไซน์ที่ต้องการความหรูหรา",
    "nameEn": "Cola Onyx",
    "categoryLabelEn": "Onyx",
    "subcategoryEn": "Onyx",
    "descriptionEn": "Onyx with striking patterns and translucency, ideal for luxurious decorative applications."
  },
  {
    "id": "onyx-3",
    "name": "Damra Onyx",
    "image": "./image/onyx-stone/damra-onyx.jpg",
    "gallery": [
      "./image/onyx-stone/bruno-onyx.jpg",
      "./image/onyx-stone/cola-onyx.jpg",
      "./image/onyx-stone/damra-onyx.jpg"
    ],
    "category": "onyx",
    "categoryLabel": "หินออนิกซ์",
    "subcategory": "หินออนิกซ์",
    "price": 0,
    "unit": "รายการ",
    "description": "หินออนิกซ์มีลวดลายและความโปร่งแสงที่โดดเด่น เหมาะสำหรับผนังตกแต่ง เคาน์เตอร์ และงานดีไซน์ที่ต้องการความหรูหรา",
    "nameEn": "Damra Onyx",
    "categoryLabelEn": "Onyx",
    "subcategoryEn": "Onyx",
    "descriptionEn": "Onyx with striking patterns and translucency, ideal for luxurious decorative applications."
  },
  {
    "id": "onyx-4",
    "name": "Grey Onyx",
    "image": "./image/onyx-stone/grey-onyx.jpg",
    "gallery": [
      "./image/onyx-stone/bruno-onyx.jpg",
      "./image/onyx-stone/cola-onyx.jpg",
      "./image/onyx-stone/damra-onyx.jpg"
    ],
    "category": "onyx",
    "categoryLabel": "หินออนิกซ์",
    "subcategory": "หินออนิกซ์",
    "price": 0,
    "unit": "รายการ",
    "description": "หินออนิกซ์มีลวดลายและความโปร่งแสงที่โดดเด่น เหมาะสำหรับผนังตกแต่ง เคาน์เตอร์ และงานดีไซน์ที่ต้องการความหรูหรา",
    "nameEn": "Grey Onyx",
    "categoryLabelEn": "Onyx",
    "subcategoryEn": "Onyx",
    "descriptionEn": "Onyx with striking patterns and translucency, ideal for luxurious decorative applications."
  },
  {
    "id": "onyx-5",
    "name": "Honey Onyx",
    "image": "./image/onyx-stone/honey-onyx.jpg",
    "gallery": [
      "./image/onyx-stone/bruno-onyx.jpg",
      "./image/onyx-stone/cola-onyx.jpg",
      "./image/onyx-stone/damra-onyx.jpg"
    ],
    "category": "onyx",
    "categoryLabel": "หินออนิกซ์",
    "subcategory": "หินออนิกซ์",
    "price": 0,
    "unit": "รายการ",
    "description": "หินออนิกซ์มีลวดลายและความโปร่งแสงที่โดดเด่น เหมาะสำหรับผนังตกแต่ง เคาน์เตอร์ และงานดีไซน์ที่ต้องการความหรูหรา",
    "nameEn": "Honey Onyx",
    "categoryLabelEn": "Onyx",
    "subcategoryEn": "Onyx",
    "descriptionEn": "Onyx with striking patterns and translucency, ideal for luxurious decorative applications."
  },
  {
    "id": "onyx-6",
    "name": "Oriental Onyx",
    "image": "./image/onyx-stone/oriental-onyx.jpg",
    "gallery": [
      "./image/onyx-stone/bruno-onyx.jpg",
      "./image/onyx-stone/cola-onyx.jpg",
      "./image/onyx-stone/damra-onyx.jpg"
    ],
    "category": "onyx",
    "categoryLabel": "หินออนิกซ์",
    "subcategory": "หินออนิกซ์",
    "price": 0,
    "unit": "รายการ",
    "description": "หินออนิกซ์มีลวดลายและความโปร่งแสงที่โดดเด่น เหมาะสำหรับผนังตกแต่ง เคาน์เตอร์ และงานดีไซน์ที่ต้องการความหรูหรา",
    "nameEn": "Oriental Onyx",
    "categoryLabelEn": "Onyx",
    "subcategoryEn": "Onyx",
    "descriptionEn": "Onyx with striking patterns and translucency, ideal for luxurious decorative applications."
  },
  {
    "id": "onyx-7",
    "name": "Rustica Onyx",
    "image": "./image/onyx-stone/rustica-onyx.jpg",
    "gallery": [
      "./image/onyx-stone/bruno-onyx.jpg",
      "./image/onyx-stone/cola-onyx.jpg",
      "./image/onyx-stone/damra-onyx.jpg"
    ],
    "category": "onyx",
    "categoryLabel": "หินออนิกซ์",
    "subcategory": "หินออนิกซ์",
    "price": 0,
    "unit": "รายการ",
    "description": "หินออนิกซ์มีลวดลายและความโปร่งแสงที่โดดเด่น เหมาะสำหรับผนังตกแต่ง เคาน์เตอร์ และงานดีไซน์ที่ต้องการความหรูหรา",
    "nameEn": "Rustica Onyx",
    "categoryLabelEn": "Onyx",
    "subcategoryEn": "Onyx",
    "descriptionEn": "Onyx with striking patterns and translucency, ideal for luxurious decorative applications."
  },
  {
    "id": "onyx-8",
    "name": "Valencia Onyx",
    "image": "./image/onyx-stone/valencia-onyx.jpg",
    "gallery": [
      "./image/onyx-stone/bruno-onyx.jpg",
      "./image/onyx-stone/cola-onyx.jpg",
      "./image/onyx-stone/damra-onyx.jpg"
    ],
    "category": "onyx",
    "categoryLabel": "หินออนิกซ์",
    "subcategory": "หินออนิกซ์",
    "price": 0,
    "unit": "รายการ",
    "description": "หินออนิกซ์มีลวดลายและความโปร่งแสงที่โดดเด่น เหมาะสำหรับผนังตกแต่ง เคาน์เตอร์ และงานดีไซน์ที่ต้องการความหรูหรา",
    "nameEn": "Valencia Onyx",
    "categoryLabelEn": "Onyx",
    "subcategoryEn": "Onyx",
    "descriptionEn": "Onyx with striking patterns and translucency, ideal for luxurious decorative applications."
  },
  {
    "id": "onyx-9",
    "name": "Vedeci Onyx",
    "image": "./image/onyx-stone/vedeci-onyx.jpg",
    "gallery": [
      "./image/onyx-stone/bruno-onyx.jpg",
      "./image/onyx-stone/cola-onyx.jpg",
      "./image/onyx-stone/damra-onyx.jpg"
    ],
    "category": "onyx",
    "categoryLabel": "หินออนิกซ์",
    "subcategory": "หินออนิกซ์",
    "price": 0,
    "unit": "รายการ",
    "description": "หินออนิกซ์มีลวดลายและความโปร่งแสงที่โดดเด่น เหมาะสำหรับผนังตกแต่ง เคาน์เตอร์ และงานดีไซน์ที่ต้องการความหรูหรา",
    "nameEn": "Vedeci Onyx",
    "categoryLabelEn": "Onyx",
    "subcategoryEn": "Onyx",
    "descriptionEn": "Onyx with striking patterns and translucency, ideal for luxurious decorative applications."
  },
  {
    "id": "pool-1",
    "name": "10",
    "image": "./image/pool-stone/10.jpg",
    "gallery": [
      "./image/pool-stone/10.jpg",
      "./image/pool-stone/11.jpg",
      "./image/pool-stone/2.jpg"
    ],
    "category": "pool",
    "categoryLabel": "ปูสระว่ายน้ำ",
    "subcategory": "ปูสระว่ายน้ำ",
    "price": 0,
    "unit": "รายการ",
    "description": "หินปูสระว่ายน้ำคัดเลือกสำหรับพื้นที่รอบสระและงานภายนอก ให้ผิวสัมผัสเหมาะกับพื้นที่ใช้งานและช่วยสร้างบรรยากาศเป็นธรรมชาติ",
    "nameEn": "10",
    "categoryLabelEn": "Pool Stone",
    "subcategoryEn": "Pool Stone",
    "descriptionEn": "Stone selected for swimming pools and surrounding areas, suitable for exterior applications."
  },
  {
    "id": "pool-2",
    "name": "11",
    "image": "./image/pool-stone/11.jpg",
    "gallery": [
      "./image/pool-stone/10.jpg",
      "./image/pool-stone/11.jpg",
      "./image/pool-stone/2.jpg"
    ],
    "category": "pool",
    "categoryLabel": "ปูสระว่ายน้ำ",
    "subcategory": "ปูสระว่ายน้ำ",
    "price": 0,
    "unit": "รายการ",
    "description": "หินปูสระว่ายน้ำคัดเลือกสำหรับพื้นที่รอบสระและงานภายนอก ให้ผิวสัมผัสเหมาะกับพื้นที่ใช้งานและช่วยสร้างบรรยากาศเป็นธรรมชาติ",
    "nameEn": "11",
    "categoryLabelEn": "Pool Stone",
    "subcategoryEn": "Pool Stone",
    "descriptionEn": "Stone selected for swimming pools and surrounding areas, suitable for exterior applications."
  },
  {
    "id": "pool-3",
    "name": "2",
    "image": "./image/pool-stone/2.jpg",
    "gallery": [
      "./image/pool-stone/10.jpg",
      "./image/pool-stone/11.jpg",
      "./image/pool-stone/2.jpg"
    ],
    "category": "pool",
    "categoryLabel": "ปูสระว่ายน้ำ",
    "subcategory": "ปูสระว่ายน้ำ",
    "price": 0,
    "unit": "รายการ",
    "description": "หินปูสระว่ายน้ำคัดเลือกสำหรับพื้นที่รอบสระและงานภายนอก ให้ผิวสัมผัสเหมาะกับพื้นที่ใช้งานและช่วยสร้างบรรยากาศเป็นธรรมชาติ",
    "nameEn": "2",
    "categoryLabelEn": "Pool Stone",
    "subcategoryEn": "Pool Stone",
    "descriptionEn": "Stone selected for swimming pools and surrounding areas, suitable for exterior applications."
  },
  {
    "id": "pool-4",
    "name": "4",
    "image": "./image/pool-stone/4.jpg",
    "gallery": [
      "./image/pool-stone/10.jpg",
      "./image/pool-stone/11.jpg",
      "./image/pool-stone/2.jpg"
    ],
    "category": "pool",
    "categoryLabel": "ปูสระว่ายน้ำ",
    "subcategory": "ปูสระว่ายน้ำ",
    "price": 0,
    "unit": "รายการ",
    "description": "หินปูสระว่ายน้ำคัดเลือกสำหรับพื้นที่รอบสระและงานภายนอก ให้ผิวสัมผัสเหมาะกับพื้นที่ใช้งานและช่วยสร้างบรรยากาศเป็นธรรมชาติ",
    "nameEn": "4",
    "categoryLabelEn": "Pool Stone",
    "subcategoryEn": "Pool Stone",
    "descriptionEn": "Stone selected for swimming pools and surrounding areas, suitable for exterior applications."
  },
  {
    "id": "pool-5",
    "name": "6",
    "image": "./image/pool-stone/6.jpg",
    "gallery": [
      "./image/pool-stone/10.jpg",
      "./image/pool-stone/11.jpg",
      "./image/pool-stone/2.jpg"
    ],
    "category": "pool",
    "categoryLabel": "ปูสระว่ายน้ำ",
    "subcategory": "ปูสระว่ายน้ำ",
    "price": 0,
    "unit": "รายการ",
    "description": "หินปูสระว่ายน้ำคัดเลือกสำหรับพื้นที่รอบสระและงานภายนอก ให้ผิวสัมผัสเหมาะกับพื้นที่ใช้งานและช่วยสร้างบรรยากาศเป็นธรรมชาติ",
    "nameEn": "6",
    "categoryLabelEn": "Pool Stone",
    "subcategoryEn": "Pool Stone",
    "descriptionEn": "Stone selected for swimming pools and surrounding areas, suitable for exterior applications."
  },
  {
    "id": "pool-6",
    "name": "7",
    "image": "./image/pool-stone/7.jpg",
    "gallery": [
      "./image/pool-stone/10.jpg",
      "./image/pool-stone/11.jpg",
      "./image/pool-stone/2.jpg"
    ],
    "category": "pool",
    "categoryLabel": "ปูสระว่ายน้ำ",
    "subcategory": "ปูสระว่ายน้ำ",
    "price": 0,
    "unit": "รายการ",
    "description": "หินปูสระว่ายน้ำคัดเลือกสำหรับพื้นที่รอบสระและงานภายนอก ให้ผิวสัมผัสเหมาะกับพื้นที่ใช้งานและช่วยสร้างบรรยากาศเป็นธรรมชาติ",
    "nameEn": "7",
    "categoryLabelEn": "Pool Stone",
    "subcategoryEn": "Pool Stone",
    "descriptionEn": "Stone selected for swimming pools and surrounding areas, suitable for exterior applications."
  },
  {
    "id": "pool-7",
    "name": "8",
    "image": "./image/pool-stone/8.jpg",
    "gallery": [
      "./image/pool-stone/10.jpg",
      "./image/pool-stone/11.jpg",
      "./image/pool-stone/2.jpg"
    ],
    "category": "pool",
    "categoryLabel": "ปูสระว่ายน้ำ",
    "subcategory": "ปูสระว่ายน้ำ",
    "price": 0,
    "unit": "รายการ",
    "description": "หินปูสระว่ายน้ำคัดเลือกสำหรับพื้นที่รอบสระและงานภายนอก ให้ผิวสัมผัสเหมาะกับพื้นที่ใช้งานและช่วยสร้างบรรยากาศเป็นธรรมชาติ",
    "nameEn": "8",
    "categoryLabelEn": "Pool Stone",
    "subcategoryEn": "Pool Stone",
    "descriptionEn": "Stone selected for swimming pools and surrounding areas, suitable for exterior applications."
  },
  {
    "id": "pool-8",
    "name": "9",
    "image": "./image/pool-stone/9.jpg",
    "gallery": [
      "./image/pool-stone/10.jpg",
      "./image/pool-stone/11.jpg",
      "./image/pool-stone/2.jpg"
    ],
    "category": "pool",
    "categoryLabel": "ปูสระว่ายน้ำ",
    "subcategory": "ปูสระว่ายน้ำ",
    "price": 0,
    "unit": "รายการ",
    "description": "หินปูสระว่ายน้ำคัดเลือกสำหรับพื้นที่รอบสระและงานภายนอก ให้ผิวสัมผัสเหมาะกับพื้นที่ใช้งานและช่วยสร้างบรรยากาศเป็นธรรมชาติ",
    "nameEn": "9",
    "categoryLabelEn": "Pool Stone",
    "subcategoryEn": "Pool Stone",
    "descriptionEn": "Stone selected for swimming pools and surrounding areas, suitable for exterior applications."
  },
  {
    "id": "compressed-marble-1",
    "name": "CF0001 Lightning Beige",
    "image": "./image/compressed-marble/cf0001-lightning-beige.jpg",
    "gallery": [
      "./image/compressed-marble/cf0001-lightning-beige.jpg",
      "./image/compressed-marble/cf0012-rainbow.jpg",
      "./image/compressed-marble/cf0028-marfil-geige.jpg"
    ],
    "category": "compressed-marble",
    "categoryLabel": "หินอ่อนอัด",
    "subcategory": "หินอ่อนอัด",
    "price": 0,
    "unit": "รายการ",
    "description": "หินอ่อนอัดเป็นวัสดุที่ผลิตให้มีลวดลายและโทนสีสม่ำเสมอ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง",
    "nameEn": "CF0001 Lightning Beige",
    "categoryLabelEn": "Compressed Marble",
    "subcategoryEn": "Compressed Marble",
    "descriptionEn": "Compressed marble with consistent colors and patterns, suitable for floors, walls, countertops and interiors."
  },
  {
    "id": "compressed-marble-2",
    "name": "CF0012 Rainbow",
    "image": "./image/compressed-marble/cf0012-rainbow.jpg",
    "gallery": [
      "./image/compressed-marble/cf0001-lightning-beige.jpg",
      "./image/compressed-marble/cf0012-rainbow.jpg",
      "./image/compressed-marble/cf0028-marfil-geige.jpg"
    ],
    "category": "compressed-marble",
    "categoryLabel": "หินอ่อนอัด",
    "subcategory": "หินอ่อนอัด",
    "price": 0,
    "unit": "รายการ",
    "description": "หินอ่อนอัดเป็นวัสดุที่ผลิตให้มีลวดลายและโทนสีสม่ำเสมอ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง",
    "nameEn": "CF0012 Rainbow",
    "categoryLabelEn": "Compressed Marble",
    "subcategoryEn": "Compressed Marble",
    "descriptionEn": "Compressed marble with consistent colors and patterns, suitable for floors, walls, countertops and interiors."
  },
  {
    "id": "compressed-marble-3",
    "name": "CF0028 Marfil Geige",
    "image": "./image/compressed-marble/cf0028-marfil-geige.jpg",
    "gallery": [
      "./image/compressed-marble/cf0001-lightning-beige.jpg",
      "./image/compressed-marble/cf0012-rainbow.jpg",
      "./image/compressed-marble/cf0028-marfil-geige.jpg"
    ],
    "category": "compressed-marble",
    "categoryLabel": "หินอ่อนอัด",
    "subcategory": "หินอ่อนอัด",
    "price": 0,
    "unit": "รายการ",
    "description": "หินอ่อนอัดเป็นวัสดุที่ผลิตให้มีลวดลายและโทนสีสม่ำเสมอ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง",
    "nameEn": "CF0028 Marfil Geige",
    "categoryLabelEn": "Compressed Marble",
    "subcategoryEn": "Compressed Marble",
    "descriptionEn": "Compressed marble with consistent colors and patterns, suitable for floors, walls, countertops and interiors."
  },
  {
    "id": "compressed-marble-4",
    "name": "CF0030 Atom Beige",
    "image": "./image/compressed-marble/cf0030-atom-beige.jpg",
    "gallery": [
      "./image/compressed-marble/cf0001-lightning-beige.jpg",
      "./image/compressed-marble/cf0012-rainbow.jpg",
      "./image/compressed-marble/cf0028-marfil-geige.jpg"
    ],
    "category": "compressed-marble",
    "categoryLabel": "หินอ่อนอัด",
    "subcategory": "หินอ่อนอัด",
    "price": 0,
    "unit": "รายการ",
    "description": "หินอ่อนอัดเป็นวัสดุที่ผลิตให้มีลวดลายและโทนสีสม่ำเสมอ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง",
    "nameEn": "CF0030 Atom Beige",
    "categoryLabelEn": "Compressed Marble",
    "subcategoryEn": "Compressed Marble",
    "descriptionEn": "Compressed marble with consistent colors and patterns, suitable for floors, walls, countertops and interiors."
  },
  {
    "id": "compressed-marble-5",
    "name": "CF0031 Golddust Red",
    "image": "./image/compressed-marble/cf0031-golddust-red.jpg",
    "gallery": [
      "./image/compressed-marble/cf0001-lightning-beige.jpg",
      "./image/compressed-marble/cf0012-rainbow.jpg",
      "./image/compressed-marble/cf0028-marfil-geige.jpg"
    ],
    "category": "compressed-marble",
    "categoryLabel": "หินอ่อนอัด",
    "subcategory": "หินอ่อนอัด",
    "price": 0,
    "unit": "รายการ",
    "description": "หินอ่อนอัดเป็นวัสดุที่ผลิตให้มีลวดลายและโทนสีสม่ำเสมอ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง",
    "nameEn": "CF0031 Golddust Red",
    "categoryLabelEn": "Compressed Marble",
    "subcategoryEn": "Compressed Marble",
    "descriptionEn": "Compressed marble with consistent colors and patterns, suitable for floors, walls, countertops and interiors."
  },
  {
    "id": "compressed-marble-6",
    "name": "CF0032 New Beige",
    "image": "./image/compressed-marble/cf0032-new-beige.jpg",
    "gallery": [
      "./image/compressed-marble/cf0001-lightning-beige.jpg",
      "./image/compressed-marble/cf0012-rainbow.jpg",
      "./image/compressed-marble/cf0028-marfil-geige.jpg"
    ],
    "category": "compressed-marble",
    "categoryLabel": "หินอ่อนอัด",
    "subcategory": "หินอ่อนอัด",
    "price": 0,
    "unit": "รายการ",
    "description": "หินอ่อนอัดเป็นวัสดุที่ผลิตให้มีลวดลายและโทนสีสม่ำเสมอ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง",
    "nameEn": "CF0032 New Beige",
    "categoryLabelEn": "Compressed Marble",
    "subcategoryEn": "Compressed Marble",
    "descriptionEn": "Compressed marble with consistent colors and patterns, suitable for floors, walls, countertops and interiors."
  },
  {
    "id": "compressed-marble-7",
    "name": "CF0033 Red Dot",
    "image": "./image/compressed-marble/cf0033-red-dot.jpg",
    "gallery": [
      "./image/compressed-marble/cf0001-lightning-beige.jpg",
      "./image/compressed-marble/cf0012-rainbow.jpg",
      "./image/compressed-marble/cf0028-marfil-geige.jpg"
    ],
    "category": "compressed-marble",
    "categoryLabel": "หินอ่อนอัด",
    "subcategory": "หินอ่อนอัด",
    "price": 0,
    "unit": "รายการ",
    "description": "หินอ่อนอัดเป็นวัสดุที่ผลิตให้มีลวดลายและโทนสีสม่ำเสมอ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง",
    "nameEn": "CF0033 Red Dot",
    "categoryLabelEn": "Compressed Marble",
    "subcategoryEn": "Compressed Marble",
    "descriptionEn": "Compressed marble with consistent colors and patterns, suitable for floors, walls, countertops and interiors."
  },
  {
    "id": "compressed-marble-8",
    "name": "CF0034 Ixoa",
    "image": "./image/compressed-marble/cf0034-ixoa.jpg",
    "gallery": [
      "./image/compressed-marble/cf0001-lightning-beige.jpg",
      "./image/compressed-marble/cf0012-rainbow.jpg",
      "./image/compressed-marble/cf0028-marfil-geige.jpg"
    ],
    "category": "compressed-marble",
    "categoryLabel": "หินอ่อนอัด",
    "subcategory": "หินอ่อนอัด",
    "price": 0,
    "unit": "รายการ",
    "description": "หินอ่อนอัดเป็นวัสดุที่ผลิตให้มีลวดลายและโทนสีสม่ำเสมอ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง",
    "nameEn": "CF0034 Ixoa",
    "categoryLabelEn": "Compressed Marble",
    "subcategoryEn": "Compressed Marble",
    "descriptionEn": "Compressed marble with consistent colors and patterns, suitable for floors, walls, countertops and interiors."
  },
  {
    "id": "compressed-marble-9",
    "name": "CF0038 Black Jade With Star",
    "image": "./image/compressed-marble/cf0038-black-jade-with-star.jpg",
    "gallery": [
      "./image/compressed-marble/cf0001-lightning-beige.jpg",
      "./image/compressed-marble/cf0012-rainbow.jpg",
      "./image/compressed-marble/cf0028-marfil-geige.jpg"
    ],
    "category": "compressed-marble",
    "categoryLabel": "หินอ่อนอัด",
    "subcategory": "หินอ่อนอัด",
    "price": 0,
    "unit": "รายการ",
    "description": "หินอ่อนอัดเป็นวัสดุที่ผลิตให้มีลวดลายและโทนสีสม่ำเสมอ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง",
    "nameEn": "CF0038 Black Jade With Star",
    "categoryLabelEn": "Compressed Marble",
    "subcategoryEn": "Compressed Marble",
    "descriptionEn": "Compressed marble with consistent colors and patterns, suitable for floors, walls, countertops and interiors."
  },
  {
    "id": "terrazzo-1",
    "name": "SB100_BIANCO_LEV-IMG_7976",
    "image": "./image/terrazzo-stone/sb100-bianco-lev-img-7976.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb100-bianco-lev-img-7976.jpg",
      "./image/terrazzo-stone/sb101-pepesale-lev-img-7925.jpg",
      "./image/terrazzo-stone/sb102-grigio-chiaro-lev-img-7868.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "subcategory": "หินเทอราซโซ่",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความโดดเด่น",
    "nameEn": "SB100_BIANCO_LEV-IMG_7976",
    "categoryLabelEn": "Terrazzo",
    "subcategoryEn": "Terrazzo",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "terrazzo-2",
    "name": "SB101_PEPESALE_LEV-IMG_7925",
    "image": "./image/terrazzo-stone/sb101-pepesale-lev-img-7925.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb100-bianco-lev-img-7976.jpg",
      "./image/terrazzo-stone/sb101-pepesale-lev-img-7925.jpg",
      "./image/terrazzo-stone/sb102-grigio-chiaro-lev-img-7868.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "subcategory": "หินเทอราซโซ่",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความโดดเด่น",
    "nameEn": "SB101_PEPESALE_LEV-IMG_7925",
    "categoryLabelEn": "Terrazzo",
    "subcategoryEn": "Terrazzo",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "terrazzo-3",
    "name": "SB102_GRIGIO_CHIARO_LEV-IMG_7868",
    "image": "./image/terrazzo-stone/sb102-grigio-chiaro-lev-img-7868.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb100-bianco-lev-img-7976.jpg",
      "./image/terrazzo-stone/sb101-pepesale-lev-img-7925.jpg",
      "./image/terrazzo-stone/sb102-grigio-chiaro-lev-img-7868.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "subcategory": "หินเทอราซโซ่",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความโดดเด่น",
    "nameEn": "SB102_GRIGIO_CHIARO_LEV-IMG_7868",
    "categoryLabelEn": "Terrazzo",
    "subcategoryEn": "Terrazzo",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "terrazzo-4",
    "name": "SB103_GRIGIO_MEDIO_LEV_SGA9125",
    "image": "./image/terrazzo-stone/sb103-grigio-medio-lev-sga9125.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb100-bianco-lev-img-7976.jpg",
      "./image/terrazzo-stone/sb101-pepesale-lev-img-7925.jpg",
      "./image/terrazzo-stone/sb102-grigio-chiaro-lev-img-7868.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "subcategory": "หินเทอราซโซ่",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความโดดเด่น",
    "nameEn": "SB103_GRIGIO_MEDIO_LEV_SGA9125",
    "categoryLabelEn": "Terrazzo",
    "subcategoryEn": "Terrazzo",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "terrazzo-5",
    "name": "SB105_ANTRACITE_LEV-IMG_7949",
    "image": "./image/terrazzo-stone/sb105-antracite-lev-img-7949.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb100-bianco-lev-img-7976.jpg",
      "./image/terrazzo-stone/sb101-pepesale-lev-img-7925.jpg",
      "./image/terrazzo-stone/sb102-grigio-chiaro-lev-img-7868.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "subcategory": "หินเทอราซโซ่",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความโดดเด่น",
    "nameEn": "SB105_ANTRACITE_LEV-IMG_7949",
    "categoryLabelEn": "Terrazzo",
    "subcategoryEn": "Terrazzo",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "terrazzo-6",
    "name": "SB106_NERO_LEV-IMG_7964-1",
    "image": "./image/terrazzo-stone/sb106-nero-lev-img-7964-1.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb100-bianco-lev-img-7976.jpg",
      "./image/terrazzo-stone/sb101-pepesale-lev-img-7925.jpg",
      "./image/terrazzo-stone/sb102-grigio-chiaro-lev-img-7868.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "subcategory": "หินเทอราซโซ่",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความโดดเด่น",
    "nameEn": "SB106_NERO_LEV-IMG_7964-1",
    "categoryLabelEn": "Terrazzo",
    "subcategoryEn": "Terrazzo",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "terrazzo-7",
    "name": "SB108_BEIGE_LEV-IMG_7904",
    "image": "./image/terrazzo-stone/sb108-beige-lev-img-7904.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb100-bianco-lev-img-7976.jpg",
      "./image/terrazzo-stone/sb101-pepesale-lev-img-7925.jpg",
      "./image/terrazzo-stone/sb102-grigio-chiaro-lev-img-7868.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "subcategory": "หินเทอราซโซ่",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความโดดเด่น",
    "nameEn": "SB108_BEIGE_LEV-IMG_7904",
    "categoryLabelEn": "Terrazzo",
    "subcategoryEn": "Terrazzo",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "terrazzo-8",
    "name": "SB109_GIALLO_LEV-IMG_7847",
    "image": "./image/terrazzo-stone/sb109-giallo-lev-img-7847.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb100-bianco-lev-img-7976.jpg",
      "./image/terrazzo-stone/sb101-pepesale-lev-img-7925.jpg",
      "./image/terrazzo-stone/sb102-grigio-chiaro-lev-img-7868.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "subcategory": "หินเทอราซโซ่",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความโดดเด่น",
    "nameEn": "SB109_GIALLO_LEV-IMG_7847",
    "categoryLabelEn": "Terrazzo",
    "subcategoryEn": "Terrazzo",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "terrazzo-9",
    "name": "SB111_VERDE_LEV-IMG_7913",
    "image": "./image/terrazzo-stone/sb111-verde-lev-img-7913.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb100-bianco-lev-img-7976.jpg",
      "./image/terrazzo-stone/sb101-pepesale-lev-img-7925.jpg",
      "./image/terrazzo-stone/sb102-grigio-chiaro-lev-img-7868.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "subcategory": "หินเทอราซโซ่",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความโดดเด่น",
    "nameEn": "SB111_VERDE_LEV-IMG_7913",
    "categoryLabelEn": "Terrazzo",
    "subcategoryEn": "Terrazzo",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "terrazzo-10",
    "name": "SB112_VERDE_SCURO_LEV-IMG_8052",
    "image": "./image/terrazzo-stone/sb112-verde-scuro-lev-img-8052.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb100-bianco-lev-img-7976.jpg",
      "./image/terrazzo-stone/sb101-pepesale-lev-img-7925.jpg",
      "./image/terrazzo-stone/sb102-grigio-chiaro-lev-img-7868.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "subcategory": "หินเทอราซโซ่",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความโดดเด่น",
    "nameEn": "SB112_VERDE_SCURO_LEV-IMG_8052",
    "categoryLabelEn": "Terrazzo",
    "subcategoryEn": "Terrazzo",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "terrazzo-11",
    "name": "SB113_MULTICOLOR_NERO_LEV-IMG_7979",
    "image": "./image/terrazzo-stone/sb113-multicolor-nero-lev-img-7979.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb100-bianco-lev-img-7976.jpg",
      "./image/terrazzo-stone/sb101-pepesale-lev-img-7925.jpg",
      "./image/terrazzo-stone/sb102-grigio-chiaro-lev-img-7868.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "subcategory": "หินเทอราซโซ่",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความโดดเด่น",
    "nameEn": "SB113_MULTICOLOR_NERO_LEV-IMG_7979",
    "categoryLabelEn": "Terrazzo",
    "subcategoryEn": "Terrazzo",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "terrazzo-12",
    "name": "SB114_MULTICOLOR_GRIGIO_LEV-IMG_7703",
    "image": "./image/terrazzo-stone/sb114-multicolor-grigio-lev-img-7703.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb100-bianco-lev-img-7976.jpg",
      "./image/terrazzo-stone/sb101-pepesale-lev-img-7925.jpg",
      "./image/terrazzo-stone/sb102-grigio-chiaro-lev-img-7868.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "subcategory": "หินเทอราซโซ่",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความโดดเด่น",
    "nameEn": "SB114_MULTICOLOR_GRIGIO_LEV-IMG_7703",
    "categoryLabelEn": "Terrazzo",
    "subcategoryEn": "Terrazzo",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "terrazzo-13",
    "name": "SB115_MULTICOLOR_VERDE_LEV-IMG_7624",
    "image": "./image/terrazzo-stone/sb115-multicolor-verde-lev-img-7624.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb100-bianco-lev-img-7976.jpg",
      "./image/terrazzo-stone/sb101-pepesale-lev-img-7925.jpg",
      "./image/terrazzo-stone/sb102-grigio-chiaro-lev-img-7868.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "subcategory": "หินเทอราซโซ่",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความโดดเด่น",
    "nameEn": "SB115_MULTICOLOR_VERDE_LEV-IMG_7624",
    "categoryLabelEn": "Terrazzo",
    "subcategoryEn": "Terrazzo",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "terrazzo-14",
    "name": "SB119_PEPEGRIGIO_LEV-IMG_8037",
    "image": "./image/terrazzo-stone/sb119-pepegrigio-lev-img-8037.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb100-bianco-lev-img-7976.jpg",
      "./image/terrazzo-stone/sb101-pepesale-lev-img-7925.jpg",
      "./image/terrazzo-stone/sb102-grigio-chiaro-lev-img-7868.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "subcategory": "หินเทอราซโซ่",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความโดดเด่น",
    "nameEn": "SB119_PEPEGRIGIO_LEV-IMG_8037",
    "categoryLabelEn": "Terrazzo",
    "subcategoryEn": "Terrazzo",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "terrazzo-15",
    "name": "SB124_GRIGIO_ROTONDO_LEV-IMG_7676",
    "image": "./image/terrazzo-stone/sb124-grigio-rotondo-lev-img-7676.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb100-bianco-lev-img-7976.jpg",
      "./image/terrazzo-stone/sb101-pepesale-lev-img-7925.jpg",
      "./image/terrazzo-stone/sb102-grigio-chiaro-lev-img-7868.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "subcategory": "หินเทอราซโซ่",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความโดดเด่น",
    "nameEn": "SB124_GRIGIO_ROTONDO_LEV-IMG_7676",
    "categoryLabelEn": "Terrazzo",
    "subcategoryEn": "Terrazzo",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "terrazzo-16",
    "name": "SB125_BRUNO_ROTONDO_LEV-IMG_7835-1",
    "image": "./image/terrazzo-stone/sb125-bruno-rotondo-lev-img-7835-1.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb100-bianco-lev-img-7976.jpg",
      "./image/terrazzo-stone/sb101-pepesale-lev-img-7925.jpg",
      "./image/terrazzo-stone/sb102-grigio-chiaro-lev-img-7868.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "subcategory": "หินเทอราซโซ่",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความโดดเด่น",
    "nameEn": "SB125_BRUNO_ROTONDO_LEV-IMG_7835-1",
    "categoryLabelEn": "Terrazzo",
    "subcategoryEn": "Terrazzo",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "terrazzo-17",
    "name": "SB128_GRIGIO_NERO_LEV-IMG_7805",
    "image": "./image/terrazzo-stone/sb128-grigio-nero-lev-img-7805.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb100-bianco-lev-img-7976.jpg",
      "./image/terrazzo-stone/sb101-pepesale-lev-img-7925.jpg",
      "./image/terrazzo-stone/sb102-grigio-chiaro-lev-img-7868.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "subcategory": "หินเทอราซโซ่",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความโดดเด่น",
    "nameEn": "SB128_GRIGIO_NERO_LEV-IMG_7805",
    "categoryLabelEn": "Terrazzo",
    "subcategoryEn": "Terrazzo",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "terrazzo-18",
    "name": "SB130_AGGLOCEPPO_LEV-IMG_7660",
    "image": "./image/terrazzo-stone/sb130-aggloceppo-lev-img-7660.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb100-bianco-lev-img-7976.jpg",
      "./image/terrazzo-stone/sb101-pepesale-lev-img-7925.jpg",
      "./image/terrazzo-stone/sb102-grigio-chiaro-lev-img-7868.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "subcategory": "หินเทอราซโซ่",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความโดดเด่น",
    "nameEn": "SB130_AGGLOCEPPO_LEV-IMG_7660",
    "categoryLabelEn": "Terrazzo",
    "subcategoryEn": "Terrazzo",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "terrazzo-19",
    "name": "SB136_BIANCO_VR_LUX-IMG_7691",
    "image": "./image/terrazzo-stone/sb136-bianco-vr-lux-img-7691.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb100-bianco-lev-img-7976.jpg",
      "./image/terrazzo-stone/sb101-pepesale-lev-img-7925.jpg",
      "./image/terrazzo-stone/sb102-grigio-chiaro-lev-img-7868.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "subcategory": "หินเทอราซโซ่",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความโดดเด่น",
    "nameEn": "SB136_BIANCO_VR_LUX-IMG_7691",
    "categoryLabelEn": "Terrazzo",
    "subcategoryEn": "Terrazzo",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "terrazzo-20",
    "name": "SB138_GHIACCIO_LEV-IMG_7754",
    "image": "./image/terrazzo-stone/sb138-ghiaccio-lev-img-7754.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb100-bianco-lev-img-7976.jpg",
      "./image/terrazzo-stone/sb101-pepesale-lev-img-7925.jpg",
      "./image/terrazzo-stone/sb102-grigio-chiaro-lev-img-7868.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "subcategory": "หินเทอราซโซ่",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความโดดเด่น",
    "nameEn": "SB138_GHIACCIO_LEV-IMG_7754",
    "categoryLabelEn": "Terrazzo",
    "subcategoryEn": "Terrazzo",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "terrazzo-21",
    "name": "SB140_CA-DORO_LEV-IMG_7639",
    "image": "./image/terrazzo-stone/sb140-ca-doro-lev-img-7639.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb100-bianco-lev-img-7976.jpg",
      "./image/terrazzo-stone/sb101-pepesale-lev-img-7925.jpg",
      "./image/terrazzo-stone/sb102-grigio-chiaro-lev-img-7868.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "subcategory": "หินเทอราซโซ่",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความโดดเด่น",
    "nameEn": "SB140_CA-DORO_LEV-IMG_7639",
    "categoryLabelEn": "Terrazzo",
    "subcategoryEn": "Terrazzo",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "terrazzo-22",
    "name": "SB141_MULTICOLOR_VERONA_LEV-IMG_7778-2",
    "image": "./image/terrazzo-stone/sb141-multicolor-verona-lev-img-7778-2.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb100-bianco-lev-img-7976.jpg",
      "./image/terrazzo-stone/sb101-pepesale-lev-img-7925.jpg",
      "./image/terrazzo-stone/sb102-grigio-chiaro-lev-img-7868.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "subcategory": "หินเทอราซโซ่",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความโดดเด่น",
    "nameEn": "SB141_MULTICOLOR_VERONA_LEV-IMG_7778-2",
    "categoryLabelEn": "Terrazzo",
    "subcategoryEn": "Terrazzo",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "terrazzo-23",
    "name": "SB143_BIANCO25_LEV-IMG_7651",
    "image": "./image/terrazzo-stone/sb143-bianco25-lev-img-7651.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb100-bianco-lev-img-7976.jpg",
      "./image/terrazzo-stone/sb101-pepesale-lev-img-7925.jpg",
      "./image/terrazzo-stone/sb102-grigio-chiaro-lev-img-7868.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "subcategory": "หินเทอราซโซ่",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความโดดเด่น",
    "nameEn": "SB143_BIANCO25_LEV-IMG_7651",
    "categoryLabelEn": "Terrazzo",
    "subcategoryEn": "Terrazzo",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "stair-1",
    "name": "ไม้บันไดสั่งทำตามรูปแบบ#1",
    "image": "./image/stair-wood/stair-1.jpg",
    "gallery": [
      "./image/stair-wood/stair-1.jpg",
      "./image/stair-wood/stair-1.jpg",
      "./image/stair-wood/stair-1.jpg"
    ],
    "category": "stair",
    "categoryLabel": "ไม้บันได]",
    "subcategory": "ไม้บันได",
    "price": 0,
    "unit": "รายการ",
    "description": "ไม้บันไดสั่งทำ ให้สัมผัสและลวดลายธรรมชาติ เหมาะสำหรับพื้นที่พักอาศัยและงานตกแต่งภายใน",
    "nameEn": "Tailor-Made Timber Steps #1",
    "categoryLabelEn": "Stair Wood",
    "subcategoryEn": "Stair Wood",
    "descriptionEn": "Stair wood, offering natural texture and grain for floors and interiors."
  },
  {
    "id": "stair-2",
    "name": "ไม้บันไดสั่งทำตามรูปแบบ#2",
    "image": "./image/stair-wood/stair-2.jpg",
    "gallery": [
      "./image/stair-wood/stair-2.jpg",
      "./image/stair-wood/stair-2.jpg",
      "./image/stair-wood/stair-2.jpg"
    ],
    "category": "stair",
    "categoryLabel": "ไม้บันได",
    "subcategory": "ไม้บันได",
    "price": 0,
    "unit": "รายการ",
    "description": "ไม้บันไดสั่งทำ ให้สัมผัสและลวดลายธรรมชาติ เหมาะสำหรับพื้นที่พักอาศัยและงานตกแต่งภายใน",
    "nameEn": "Tailor-Made Timber Steps #2",
    "categoryLabelEn": "Stair Wood",
    "subcategoryEn": "Stair Wood",
    "descriptionEn": "Stair wood, offering natural texture and grain for floors and interiors."
  },
  {
    "id": "stair-3",
    "name": "ไม้บันไดสั่งทำตามรูปแบบ#3",
    "image": "./image/stair-wood/stair-3.jpg",
    "gallery": [
      "./image/stair-wood/stair-3.jpg",
      "./image/stair-wood/stair-3.jpg",
      "./image/stair-wood/stair-3.jpg"
    ],
    "category": "stair",
    "categoryLabel": "ไม้บันได",
    "subcategory": "ไม้บันได",
    "price": 0,
    "unit": "รายการ",
    "description": "ไม้บันไดสั่งทำ ให้สัมผัสและลวดลายธรรมชาติ เหมาะสำหรับพื้นที่พักอาศัยและงานตกแต่งภายใน",
    "nameEn": "Tailor-Made Timber Steps #3",
    "categoryLabelEn": "Stair Wood",
    "subcategoryEn": "Stair Wood",
    "descriptionEn": "Stair wood, offering natural texture and grain for floors and interiors."
  },
  {
    "id": "stair-4",
    "name": "ไม้บันไดสั่งทำตามรูปแบบ#4",
    "image": "./image/stair-wood/stair-4.jpg",
    "gallery": [
      "./image/stair-wood/stair-4.jpg",
      "./image/stair-wood/stair-4.jpg",
      "./image/stair-wood/stair-4.jpg"
    ],
    "category": "stair",
    "categoryLabel": "ไม้บันได",
    "subcategory": "ไม้บันได",
    "price": 0,
    "unit": "รายการ",
    "description": "ไม้บันไดสั่งทำ ให้สัมผัสและลวดลายธรรมชาติ เหมาะสำหรับพื้นที่พักอาศัยและงานตกแต่งภายใน",
    "nameEn": "Tailor-Made Timber Steps #4",
    "categoryLabelEn": "Stair Wood",
    "subcategoryEn": "Stair Wood",
    "descriptionEn": "Stair wood, offering natural texture and grain for floors and interiors."
  },
  {
    "id": "stair-5",
    "name": "ไม้บันไดสั่งทำตามรูปแบบ#5",
    "image": "./image/stair-wood/stair-5.jpg",
    "gallery": [
      "./image/stair-wood/stair-5.jpg",
      "./image/stair-wood/stair-5.jpg",
      "./image/stair-wood/stair-5.jpg"
    ],
    "category": "stair",
    "categoryLabel": "ไม้บันได",
    "subcategory": "ไม้บันได",
    "price": 0,
    "unit": "รายการ",
    "description": "ไม้บันไดสั่งทำ ให้สัมผัสและลวดลายธรรมชาติ เหมาะสำหรับพื้นที่พักอาศัยและงานตกแต่งภายใน",
    "nameEn": "Tailor-Made Timber Steps #5",
    "categoryLabelEn": "Stair Wood",
    "subcategoryEn": "Stair Wood",
    "descriptionEn": "Stair wood, offering natural texture and grain for floors and interiors."
  },
  /*{
    "id": "solid-6",
    "name": "oak-6",
    "image": "./image/solid-wood/oak-6.jpg",
    "gallery": [
      "./image/solid-wood/oak-6.jpg",
      "./image/solid-wood/oak-6.jpg",
      "./image/solid-wood/oak-6.jpg"
    ],
    "category": "solid",
    "categoryLabel": "ไม้ Solid",
    "subcategory": "ไม้ Solid",
    "price": 0,
    "unit": "รายการ",
    "description": "พื้นไม้ Solid ผลิตจากไม้จริง ให้สัมผัสและลวดลายธรรมชาติ เหมาะสำหรับพื้นที่พักอาศัยและงานตกแต่งภายใน",
    "nameEn": "MERBAU",
    "categoryLabelEn": "Solid Wood",
    "subcategoryEn": "Solid Wood",
    "descriptionEn": "Solid wood flooring made from real wood, offering natural texture and grain for floors and interiors."
  },
  {
    "id": "solid-7",
    "name": "oak-7",
    "image": "./image/solid-wood/oak-7.jpg",
    "gallery": [
      "./image/solid-wood/oak-7.jpg",
      "./image/solid-wood/oak-7.jpg",
      "./image/solid-wood/oak-7.jpg"
    ],
    "category": "solid",
    "categoryLabel": "ไม้ Solid",
    "subcategory": "ไม้ Solid",
    "price": 0,
    "unit": "รายการ",
    "description": "พื้นไม้ Solid ผลิตจากไม้จริง ให้สัมผัสและลวดลายธรรมชาติ เหมาะสำหรับพื้นที่พักอาศัยและงานตกแต่งภายใน",
    "nameEn": "oak-",
    "categoryLabelEn": "Solid Wood",
    "subcategoryEn": "Solid Wood",
    "descriptionEn": "Solid wood flooring made from real wood, offering natural texture and grain for floors and interiors."
  },
  {
    "id": "solid-8",
    "name": "oak-8",
    "image": "./image/solid-wood/oak-8.jpg",
    "gallery": [
      "./image/solid-wood/oak-8.jpg",
      "./image/solid-wood/oak-8.jpg",
      "./image/solid-wood/oak-8.jpg"
    ],
    "category": "solid",
    "categoryLabel": "ไม้ Solid",
    "subcategory": "ไม้ Solid",
    "price": 0,
    "unit": "รายการ",
    "description": "พื้นไม้ Solid ผลิตจากไม้จริง ให้สัมผัสและลวดลายธรรมชาติ เหมาะสำหรับพื้นที่พักอาศัยและงานตกแต่งภายใน",
    "nameEn": "OAK",
    "categoryLabelEn": "Solid Wood",
    "subcategoryEn": "Solid Wood",
    "descriptionEn": "Solid wood flooring made from real wood, offering natural texture and grain for floors and interiors."
  },
  {
    "id": "solid-9",
    "name": "oak-9",
    "image": "./image/solid-wood/oak-9.jpg",
    "gallery": [
      "./image/solid-wood/oak-9.jpg",
      "./image/solid-wood/oak-9.jpg",
      "./image/solid-wood/oak-9.jpg"
    ],
    "category": "solid",
    "categoryLabel": "ไม้ Solid",
    "subcategory": "ไม้ Solid",
    "price": 0,
    "unit": "รายการ",
    "description": "พื้นไม้ Solid ผลิตจากไม้จริง ให้สัมผัสและลวดลายธรรมชาติ เหมาะสำหรับพื้นที่พักอาศัยและงานตกแต่งภายใน",
    "nameEn": "TALI",
    "categoryLabelEn": "Solid Wood",
    "subcategoryEn": "Solid Wood",
    "descriptionEn": "Solid wood flooring made from real wood, offering natural texture and grain for floors and interiors."
  },
  {
    "id": "solid-10",
    "name": "oak-10",
    "image": "./image/solid-wood/oak-10.jpg",
    "gallery": [
      "./image/solid-wood/oak-10.jpg",
      "./image/solid-wood/oak-10.jpg",
      "./image/solid-wood/oak-10.jpg"
    ],
    "category": "solid",
    "categoryLabel": "ไม้ Solid",
    "subcategory": "ไม้ Solid",
    "price": 0,
    "unit": "รายการ",
    "description": "พื้นไม้ Solid ผลิตจากไม้จริง ให้สัมผัสและลวดลายธรรมชาติ เหมาะสำหรับพื้นที่พักอาศัยและงานตกแต่งภายใน",
    "nameEn": "TAUARI",
    "categoryLabelEn": "Solid Wood",
    "subcategoryEn": "Solid Wood",
    "descriptionEn": "Solid wood flooring made from real wood, offering natural texture and grain for floors and interiors."
  },
  {
    "id": "solid-11",
    "name": "teak-",
    "image": "./image/solid-wood/teak-2.jpg",
    "gallery": [
      "./image/solid-wood/bamboo-2.jpg",
      "./image/solid-wood/bamboo.jpg",
      "./image/solid-wood/beech.jpg"
    ],
    "category": "solid",
    "categoryLabel": "ไม้ Solid",
    "subcategory": "ไม้ Solid",
    "price": 0,
    "unit": "รายการ",
    "description": "พื้นไม้ Solid ผลิตจากไม้จริง ให้สัมผัสและลวดลายธรรมชาติ เหมาะสำหรับพื้นที่พักอาศัยและงานตกแต่งภายใน",
    "nameEn": "teak-",
    "categoryLabelEn": "Solid Wood",
    "subcategoryEn": "Solid Wood",
    "descriptionEn": "Solid wood flooring made from real wood, offering natural texture and grain for floors and interiors."
  },
  {
    "id": "solid-12",
    "name": "TEAK",
    "image": "./image/solid-wood/teak.jpg",
    "gallery": [
      "./image/solid-wood/bamboo-2.jpg",
      "./image/solid-wood/bamboo.jpg",
      "./image/solid-wood/beech.jpg"
    ],
    "category": "solid",
    "categoryLabel": "ไม้ Solid",
    "subcategory": "ไม้ Solid",
    "price": 0,
    "unit": "รายการ",
    "description": "พื้นไม้ Solid ผลิตจากไม้จริง ให้สัมผัสและลวดลายธรรมชาติ เหมาะสำหรับพื้นที่พักอาศัยและงานตกแต่งภายใน",
    "nameEn": "TEAK",
    "categoryLabelEn": "Solid Wood",
    "subcategoryEn": "Solid Wood",
    "descriptionEn": "Solid wood flooring made from real wood, offering natural texture and grain for floors and interiors."
  },*/
  {
    "id": "furniture-1",
    "name": "KL514011",
    "image": "./image/furniture/kl514011.jpg",
    "gallery": [
      "./image/furniture/kl514011.jpg",
      "./image/furniture/kl5181310-8mm.jpg",
      "./image/furniture/kl5697212-6mm.jpg"
    ],
    "category": "furniture",
    "categoryLabel": "เฟอร์นิเจอร์",
    "subcategory": "เฟอร์นิเจอร์",
    "price": 0,
    "unit": "รายการ",
    "description": "เฟอร์นิเจอร์และวัสดุสำหรับงานตกแต่ง คัดสรรรูปแบบให้เข้ากับบ้านและโครงการหลากหลายสไตล์",
    "nameEn": "KL514011",
    "categoryLabelEn": "Furniture",
    "subcategoryEn": "Furniture",
    "descriptionEn": "Furniture selected for homes and interior projects, balancing design and material suitability."
  },
  {
    "id": "furniture-2",
    "name": "KL5181310    （8mm）",
    "image": "./image/furniture/kl5181310-8mm.jpg",
    "gallery": [
      "./image/furniture/kl514011.jpg",
      "./image/furniture/kl5181310-8mm.jpg",
      "./image/furniture/kl5697212-6mm.jpg"
    ],
    "category": "furniture",
    "categoryLabel": "เฟอร์นิเจอร์",
    "subcategory": "เฟอร์นิเจอร์",
    "price": 0,
    "unit": "รายการ",
    "description": "เฟอร์นิเจอร์และวัสดุสำหรับงานตกแต่ง คัดสรรรูปแบบให้เข้ากับบ้านและโครงการหลากหลายสไตล์",
    "nameEn": "KL5181310    （8mm）",
    "categoryLabelEn": "Furniture",
    "subcategoryEn": "Furniture",
    "descriptionEn": "Furniture selected for homes and interior projects, balancing design and material suitability."
  },
  {
    "id": "furniture-3",
    "name": "KL5297422（6mm）",
    "image": "./image/furniture/kl5297422-6mm.jpg",
    "gallery": [
      "./image/furniture/kl514011.jpg",
      "./image/furniture/kl5181310-8mm.jpg",
      "./image/furniture/kl5697212-6mm.jpg"
    ],
    "category": "furniture",
    "categoryLabel": "เฟอร์นิเจอร์",
    "subcategory": "เฟอร์นิเจอร์",
    "price": 0,
    "unit": "รายการ",
    "description": "เฟอร์นิเจอร์และวัสดุสำหรับงานตกแต่ง คัดสรรรูปแบบให้เข้ากับบ้านและโครงการหลากหลายสไตล์",
    "nameEn": "KL5297422（6mm）",
    "categoryLabelEn": "Furniture",
    "subcategoryEn": "Furniture",
    "descriptionEn": "Furniture selected for homes and interior projects, balancing design and material suitability."
  },
  {
    "id": "furniture-4",
    "name": "KL5593312",
    "image": "./image/furniture/kl5593312.jpg",
    "gallery": [
      "./image/furniture/kl514011.jpg",
      "./image/furniture/kl5181310-8mm.jpg",
      "./image/furniture/kl5697212-6mm.jpg"
    ],
    "category": "furniture",
    "categoryLabel": "เฟอร์นิเจอร์",
    "subcategory": "เฟอร์นิเจอร์",
    "price": 0,
    "unit": "รายการ",
    "description": "เฟอร์นิเจอร์และวัสดุสำหรับงานตกแต่ง คัดสรรรูปแบบให้เข้ากับบ้านและโครงการหลากหลายสไตล์",
    "nameEn": "KL5593312",
    "categoryLabelEn": "Furniture",
    "subcategoryEn": "Furniture",
    "descriptionEn": "Furniture selected for homes and interior projects, balancing design and material suitability."
  },
  {
    "id": "furniture-5",
    "name": "KL5599322    （8mm）",
    "image": "./image/furniture/kl5599322-8mm.jpg",
    "gallery": [
      "./image/furniture/kl514011.jpg",
      "./image/furniture/kl5181310-8mm.jpg",
      "./image/furniture/kl5697212-6mm.jpg"
    ],
    "category": "furniture",
    "categoryLabel": "เฟอร์นิเจอร์",
    "subcategory": "เฟอร์นิเจอร์",
    "price": 0,
    "unit": "รายการ",
    "description": "เฟอร์นิเจอร์และวัสดุสำหรับงานตกแต่ง คัดสรรรูปแบบให้เข้ากับบ้านและโครงการหลากหลายสไตล์",
    "nameEn": "KL5599322    （8mm）",
    "categoryLabelEn": "Furniture",
    "subcategoryEn": "Furniture",
    "descriptionEn": "Furniture selected for homes and interior projects, balancing design and material suitability."
  },
  {
    "id": "furniture-6",
    "name": "KL5668222    （8mm）",
    "image": "./image/furniture/kl5668222-8mm.jpg",
    "gallery": [
      "./image/furniture/kl514011.jpg",
      "./image/furniture/kl5181310-8mm.jpg",
      "./image/furniture/kl5697212-6mm.jpg"
    ],
    "category": "furniture",
    "categoryLabel": "เฟอร์นิเจอร์",
    "subcategory": "เฟอร์นิเจอร์",
    "price": 0,
    "unit": "รายการ",
    "description": "เฟอร์นิเจอร์และวัสดุสำหรับงานตกแต่ง คัดสรรรูปแบบให้เข้ากับบ้านและโครงการหลากหลายสไตล์",
    "nameEn": "KL5668222    （8mm）",
    "categoryLabelEn": "Furniture",
    "subcategoryEn": "Furniture",
    "descriptionEn": "Furniture selected for homes and interior projects, balancing design and material suitability."
  },
  {
    "id": "furniture-7",
    "name": "KL5693212",
    "image": "./image/furniture/kl5693212.jpg",
    "gallery": [
      "./image/furniture/kl514011.jpg",
      "./image/furniture/kl5181310-8mm.jpg",
      "./image/furniture/kl5697212-6mm.jpg"
    ],
    "category": "furniture",
    "categoryLabel": "เฟอร์นิเจอร์",
    "subcategory": "เฟอร์นิเจอร์",
    "price": 0,
    "unit": "รายการ",
    "description": "เฟอร์นิเจอร์และวัสดุสำหรับงานตกแต่ง คัดสรรรูปแบบให้เข้ากับบ้านและโครงการหลากหลายสไตล์",
    "nameEn": "KL5693212",
    "categoryLabelEn": "Furniture",
    "subcategoryEn": "Furniture",
    "descriptionEn": "Furniture selected for homes and interior projects, balancing design and material suitability."
  },
  {
    "id": "furniture-8",
    "name": "KL5697212（6mm）",
    "image": "./image/furniture/kl5697212-6mm.jpg",
    "gallery": [
      "./image/furniture/kl514011.jpg",
      "./image/furniture/kl5181310-8mm.jpg",
      "./image/furniture/kl5697212-6mm.jpg"
    ],
    "category": "furniture",
    "categoryLabel": "เฟอร์นิเจอร์",
    "subcategory": "เฟอร์นิเจอร์",
    "price": 0,
    "unit": "รายการ",
    "description": "เฟอร์นิเจอร์และวัสดุสำหรับงานตกแต่ง คัดสรรรูปแบบให้เข้ากับบ้านและโครงการหลากหลายสไตล์",
    "nameEn": "KL5697212（6mm）",
    "categoryLabelEn": "Furniture",
    "subcategoryEn": "Furniture",
    "descriptionEn": "Furniture selected for homes and interior projects, balancing design and material suitability."
  },
  {
    "id": "furniture-9",
    "name": "RTJ-TB",
    "image": "./image/furniture/rtj-tb.jpg",
    "gallery": [
      "./image/furniture/kl514011.jpg",
      "./image/furniture/kl5181310-8mm.jpg",
      "./image/furniture/kl5697212-6mm.jpg"
    ],
    "category": "furniture",
    "categoryLabel": "เฟอร์นิเจอร์",
    "subcategory": "เฟอร์นิเจอร์",
    "price": 0,
    "unit": "รายการ",
    "description": "เฟอร์นิเจอร์และวัสดุสำหรับงานตกแต่ง คัดสรรรูปแบบให้เข้ากับบ้านและโครงการหลากหลายสไตล์",
    "nameEn": "RTJ-TB",
    "categoryLabelEn": "Furniture",
    "subcategoryEn": "Furniture",
    "descriptionEn": "Furniture selected for homes and interior projects, balancing design and material suitability."
  },
  {
    "id": "furniture-10",
    "name": "tb-001-2",
    "image": "./image/furniture/tb-001-2.jpg",
    "gallery": [
      "./image/furniture/kl514011.jpg",
      "./image/furniture/kl5181310-8mm.jpg",
      "./image/furniture/kl5697212-6mm.jpg"
    ],
    "category": "furniture",
    "categoryLabel": "เฟอร์นิเจอร์",
    "subcategory": "เฟอร์นิเจอร์",
    "price": 0,
    "unit": "รายการ",
    "description": "เฟอร์นิเจอร์และวัสดุสำหรับงานตกแต่ง คัดสรรรูปแบบให้เข้ากับบ้านและโครงการหลากหลายสไตล์",
    "nameEn": "tb-001-2",
    "categoryLabelEn": "Furniture",
    "subcategoryEn": "Furniture",
    "descriptionEn": "Furniture selected for homes and interior projects, balancing design and material suitability."
  },
  {
    "id": "furniture-11",
    "name": "TB-01T",
    "image": "./image/furniture/tb-01t.jpg",
    "gallery": [
      "./image/furniture/kl514011.jpg",
      "./image/furniture/kl5181310-8mm.jpg",
      "./image/furniture/kl5697212-6mm.jpg"
    ],
    "category": "furniture",
    "categoryLabel": "เฟอร์นิเจอร์",
    "subcategory": "เฟอร์นิเจอร์",
    "price": 0,
    "unit": "รายการ",
    "description": "เฟอร์นิเจอร์และวัสดุสำหรับงานตกแต่ง คัดสรรรูปแบบให้เข้ากับบ้านและโครงการหลากหลายสไตล์",
    "nameEn": "TB-01T",
    "categoryLabelEn": "Furniture",
    "subcategoryEn": "Furniture",
    "descriptionEn": "Furniture selected for homes and interior projects, balancing design and material suitability."
  },
  {
    "id": "furniture-12",
    "name": "เก้าอี้ 01",
    "image": "./image/furniture/01-2.jpg",
    "gallery": [
      "./image/furniture/kl514011.jpg",
      "./image/furniture/kl5181310-8mm.jpg",
      "./image/furniture/kl5697212-6mm.jpg"
    ],
    "category": "furniture",
    "categoryLabel": "เฟอร์นิเจอร์",
    "subcategory": "เฟอร์นิเจอร์",
    "price": 0,
    "unit": "รายการ",
    "description": "เฟอร์นิเจอร์และวัสดุสำหรับงานตกแต่ง คัดสรรรูปแบบให้เข้ากับบ้านและโครงการหลากหลายสไตล์",
    "nameEn": "Chair 01",
    "categoryLabelEn": "Furniture",
    "subcategoryEn": "Furniture",
    "descriptionEn": "Furniture selected for homes and interior projects, balancing design and material suitability."
  },
  {
    "id": "furniture-13",
    "name": "เก้าอี้ 02",
    "image": "./image/furniture/02-2.jpg",
    "gallery": [
      "./image/furniture/kl514011.jpg",
      "./image/furniture/kl5181310-8mm.jpg",
      "./image/furniture/kl5697212-6mm.jpg"
    ],
    "category": "furniture",
    "categoryLabel": "เฟอร์นิเจอร์",
    "subcategory": "เฟอร์นิเจอร์",
    "price": 0,
    "unit": "รายการ",
    "description": "เฟอร์นิเจอร์และวัสดุสำหรับงานตกแต่ง คัดสรรรูปแบบให้เข้ากับบ้านและโครงการหลากหลายสไตล์",
    "nameEn": "Chair 02",
    "categoryLabelEn": "Furniture",
    "subcategoryEn": "Furniture",
    "descriptionEn": "Furniture selected for homes and interior projects, balancing design and material suitability."
  },
  {
    "id": "furniture-14",
    "name": "เก้าอี้ 03",
    "image": "./image/furniture/03.jpg",
    "gallery": [
      "./image/furniture/kl514011.jpg",
      "./image/furniture/kl5181310-8mm.jpg",
      "./image/furniture/kl5697212-6mm.jpg"
    ],
    "category": "furniture",
    "categoryLabel": "เฟอร์นิเจอร์",
    "subcategory": "เฟอร์นิเจอร์",
    "price": 0,
    "unit": "รายการ",
    "description": "เฟอร์นิเจอร์และวัสดุสำหรับงานตกแต่ง คัดสรรรูปแบบให้เข้ากับบ้านและโครงการหลากหลายสไตล์",
    "nameEn": "Chair 03",
    "categoryLabelEn": "Furniture",
    "subcategoryEn": "Furniture",
    "descriptionEn": "Furniture selected for homes and interior projects, balancing design and material suitability."
  },
  {
    "id": "furniture-15",
    "name": "โต๊ะ01",
    "image": "./image/furniture/01.jpg",
    "gallery": [
      "./image/furniture/kl514011.jpg",
      "./image/furniture/kl5181310-8mm.jpg",
      "./image/furniture/kl5697212-6mm.jpg"
    ],
    "category": "furniture",
    "categoryLabel": "เฟอร์นิเจอร์",
    "subcategory": "เฟอร์นิเจอร์",
    "price": 0,
    "unit": "รายการ",
    "description": "เฟอร์นิเจอร์และวัสดุสำหรับงานตกแต่ง คัดสรรรูปแบบให้เข้ากับบ้านและโครงการหลากหลายสไตล์",
    "nameEn": "Table 01",
    "categoryLabelEn": "Furniture",
    "subcategoryEn": "Furniture",
    "descriptionEn": "Furniture selected for homes and interior projects, balancing design and material suitability."
  },
  {
    "id": "furniture-16",
    "name": "โต๊ะ02",
    "image": "./image/furniture/02.jpg",
    "gallery": [
      "./image/furniture/kl514011.jpg",
      "./image/furniture/kl5181310-8mm.jpg",
      "./image/furniture/kl5697212-6mm.jpg"
    ],
    "category": "furniture",
    "categoryLabel": "เฟอร์นิเจอร์",
    "subcategory": "เฟอร์นิเจอร์",
    "price": 0,
    "unit": "รายการ",
    "description": "เฟอร์นิเจอร์และวัสดุสำหรับงานตกแต่ง คัดสรรรูปแบบให้เข้ากับบ้านและโครงการหลากหลายสไตล์",
    "nameEn": "Table 02",
    "categoryLabelEn": "Furniture",
    "subcategoryEn": "Furniture",
    "descriptionEn": "Furniture selected for homes and interior projects, balancing design and material suitability."
  },
  {
    "id": "furniture-17",
    "name": "โต๊ะ03",
    "image": "./image/furniture/03-2.jpg",
    "gallery": [
      "./image/furniture/kl514011.jpg",
      "./image/furniture/kl5181310-8mm.jpg",
      "./image/furniture/kl5697212-6mm.jpg"
    ],
    "category": "furniture",
    "categoryLabel": "เฟอร์นิเจอร์",
    "subcategory": "เฟอร์นิเจอร์",
    "price": 0,
    "unit": "รายการ",
    "description": "เฟอร์นิเจอร์และวัสดุสำหรับงานตกแต่ง คัดสรรรูปแบบให้เข้ากับบ้านและโครงการหลากหลายสไตล์",
    "nameEn": "Table 03",
    "categoryLabelEn": "Furniture",
    "subcategoryEn": "Furniture",
    "descriptionEn": "Furniture selected for homes and interior projects, balancing design and material suitability."
  },
  {
    "id": "furniture-18",
    "name": "โต๊ะกลางดีสนี่",
    "image": "./image/furniture/image.jpg",
    "gallery": [
      "./image/furniture/kl514011.jpg",
      "./image/furniture/kl5181310-8mm.jpg",
      "./image/furniture/kl5697212-6mm.jpg"
    ],
    "category": "furniture",
    "categoryLabel": "เฟอร์นิเจอร์",
    "subcategory": "เฟอร์นิเจอร์",
    "price": 0,
    "unit": "รายการ",
    "description": "เฟอร์นิเจอร์และวัสดุสำหรับงานตกแต่ง คัดสรรรูปแบบให้เข้ากับบ้านและโครงการหลากหลายสไตล์",
    "nameEn": "Disney Coffee Table",
    "categoryLabelEn": "Furniture",
    "subcategoryEn": "Furniture",
    "descriptionEn": "Furniture selected for homes and interior projects, balancing design and material suitability."
  },
  {
    "id": "wpc-1",
    "name": "BMC6002-3_0",
    "image": "./image/wpc/bmc6002-3_0.png",
    "gallery": [
      "./image//wpc/bmc6002-3_0.png",
      "./image//wpc/bmc6002-3_0.png",
      "./image//wpc/bmc6002-3_0.png"
    ],
    "category": "wpc",
    "categoryLabel": "ไม้เทียม WPC",
    "subcategory": "ไม้เทียม WPC",
    "price": 0,
    "unit": "รายการ",
    "description": "ไม้เทียม WPC สำหรับงานตกแต่งและโครงการ โดยใช้ภาพตัวอย่างจากชุดไฟล์ปัจจุบัน กรุณาเปลี่ยนเป็นภาพสินค้าจริงเมื่อมีโฟลเดอร์ ไม้เทียม WPC",
    "nameEn": "BMC6002-3_0",
    "categoryLabelEn": "WPC Wood",
    "subcategoryEn": "WPC Wood",
    "descriptionEn": "WPC wood for decorative and project applications. Replace the current sample images with actual product images when the WPC product folder is available."
  },
  {
    "id": "wpc-2",
    "name": "BMC6002-5_0",
    "image": "./image/wpc/bmc6002-5_0.png",
    "gallery": [
      "./image/wpc/bmc6002-5_0.png",
      "./image/wpc/bmc6002-5_0.png",
      "./image/wpc/bmc6002-5_0.png"
    ],
    "category": "wpc",
    "categoryLabel": "ไม้เทียม WPC",
    "subcategory": "ไม้เทียม WPC",
    "price": 0,
    "unit": "รายการ",
    "description": "ไม้เทียม WPC สำหรับงานตกแต่งและโครงการ โดยใช้ภาพตัวอย่างจากชุดไฟล์ปัจจุบัน กรุณาเปลี่ยนเป็นภาพสินค้าจริงเมื่อมีโฟลเดอร์ ไม้เทียม WPC",
    "nameEn": "BMC6002-5_0",
    "categoryLabelEn": "WPC Wood",
    "subcategoryEn": "WPC Wood",
    "descriptionEn": "WPC wood for decorative and project applications. Replace the current sample images with actual product images when the WPC product folder is available."
  },
  {
    "id": "wpc-3",
    "name": "BMC6002-7_0",
    "image": "./image/wpc/bmc6002-7_0.png",
    "gallery": [
      "./image/wpc/bmc6002-7_0.png",
      "./image/wpc/bmc6002-7_0.png",
      "./image/wpc/bmc6002-7_0.png"
    ],
    "category": "wpc",
    "categoryLabel": "ไม้เทียม WPC",
    "subcategory": "ไม้เทียม WPC",
    "price": 0,
    "unit": "รายการ",
    "description": "ไม้เทียม WPC สำหรับงานตกแต่งและโครงการ โดยใช้ภาพตัวอย่างจากชุดไฟล์ปัจจุบัน กรุณาเปลี่ยนเป็นภาพสินค้าจริงเมื่อมีโฟลเดอร์ ไม้เทียม WPC",
    "nameEn": "BMC6002-7_0",
    "categoryLabelEn": "WPC Wood",
    "subcategoryEn": "WPC Wood",
    "descriptionEn": "WPC wood for decorative and project applications. Replace the current sample images with actual product images when the WPC product folder is available."
  },
    {
    "id": "wpc-4",
    "name": "BMC6009-1_0",
    "image": "./image/wpc/bmc6009-1_0.png",
    "gallery": [
      "./image/wpc/bmc6009-7_0.png",
      "./image/wpc/bmc6009-7_0.png",
      "./image/wpc/bmc6009-7_0.png"
    ],
    "category": "wpc",
    "categoryLabel": "ไม้เทียม WPC",
    "subcategory": "ไม้เทียม WPC",
    "price": 0,
    "unit": "รายการ",
    "description": "ไม้เทียม WPC สำหรับงานตกแต่งและโครงการ โดยใช้ภาพตัวอย่างจากชุดไฟล์ปัจจุบัน กรุณาเปลี่ยนเป็นภาพสินค้าจริงเมื่อมีโฟลเดอร์ ไม้เทียม WPC",
    "nameEn": "BMC6009-1_0",
    "categoryLabelEn": "WPC Wood",
    "subcategoryEn": "WPC Wood",
    "descriptionEn": "WPC wood for decorative and project applications. Replace the current sample images with actual product images when the WPC product folder is available."
  },
  {
    "id": "wpc-5",
    "name": "BMC6009-2_0",
    "image": "./image/wpc/bmc6009-2_0.png",
    "gallery": [
      "./image/wpc/bmc6009-2_0.png",
      "./image/wpc/bmc6009-2_0.png",
      "./image/wpc/bmc6009-2_0.png"
    ],
    "category": "wpc",
    "categoryLabel": "ไม้เทียม WPC",
    "subcategory": "ไม้เทียม WPC",
    "price": 0,
    "unit": "รายการ",
    "description": "ไม้เทียม WPC สำหรับงานตกแต่งและโครงการ โดยใช้ภาพตัวอย่างจากชุดไฟล์ปัจจุบัน กรุณาเปลี่ยนเป็นภาพสินค้าจริงเมื่อมีโฟลเดอร์ ไม้เทียม WPC",
    "nameEn": "BMC6009-2_0",
    "categoryLabelEn": "WPC Wood",
    "subcategoryEn": "WPC Wood",
    "descriptionEn": "WPC wood for decorative and project applications. Replace the current sample images with actual product images when the WPC product folder is available."
  },
    {
    "id": "wpc-6",
    "name": "BMC6009-3_0",
    "image": "./image/wpc/bmc6009-3_0.png",
    "gallery": [
      "./image/wpc/bmc6009-3_0.png",
      "./image/wpc/bmc6009-3_0.png",
      "./image/wpc/bmc6009-3_0.png"
    ],
    "category": "wpc",
    "categoryLabel": "ไม้เทียม WPC",
    "subcategory": "ไม้เทียม WPC",
    "price": 0,
    "unit": "รายการ",
    "description": "ไม้เทียม WPC สำหรับงานตกแต่งและโครงการ โดยใช้ภาพตัวอย่างจากชุดไฟล์ปัจจุบัน กรุณาเปลี่ยนเป็นภาพสินค้าจริงเมื่อมีโฟลเดอร์ ไม้เทียม WPC",
    "nameEn": "BMC6009-3_0",
    "categoryLabelEn": "WPC Wood",
    "subcategoryEn": "WPC Wood",
    "descriptionEn": "WPC wood for decorative and project applications. Replace the current sample images with actual product images when the WPC product folder is available."
  },
    {
    "id": "wpc-7",
    "name": "BMC6009-3_0",
    "image": "./image/wpc/bmc6009-3_0.png",
    "gallery": [
      "./image/wpc/bmc6009-3_0.png",
      "./image/wpc/bmc6009-3_0.png",
      "./image/wpc/bmc6009-3_0.png"
    ],
    "category": "wpc",
    "categoryLabel": "ไม้เทียม WPC",
    "subcategory": "ไม้เทียม WPC",
    "price": 0,
    "unit": "รายการ",
    "description": "ไม้เทียม WPC สำหรับงานตกแต่งและโครงการ โดยใช้ภาพตัวอย่างจากชุดไฟล์ปัจจุบัน กรุณาเปลี่ยนเป็นภาพสินค้าจริงเมื่อมีโฟลเดอร์ ไม้เทียม WPC",
    "nameEn": "BMC6009-3_0",
    "categoryLabelEn": "WPC Wood",
    "subcategoryEn": "WPC Wood",
    "descriptionEn": "WPC wood for decorative and project applications. Replace the current sample images with actual product images when the WPC product folder is available."
  },
    {
    "id": "wpc-8",
    "name": "BMC6009-4_0",
    "image": "./image/wpc/bmc6009-4_0.png",
    "gallery": [
      "./image/wpc/bmc6009-4_0.png",
      "./image/wpc/bmc6009-4_0.png",
      "./image/wpc/bmc6009-4_0.png"
    ],
    "category": "wpc",
    "categoryLabel": "ไม้เทียม WPC",
    "subcategory": "ไม้เทียม WPC",
    "price": 0,
    "unit": "รายการ",
    "description": "ไม้เทียม WPC สำหรับงานตกแต่งและโครงการ โดยใช้ภาพตัวอย่างจากชุดไฟล์ปัจจุบัน กรุณาเปลี่ยนเป็นภาพสินค้าจริงเมื่อมีโฟลเดอร์ ไม้เทียม WPC",
    "nameEn": "BMC6009-4_0",
    "categoryLabelEn": "WPC Wood",
    "subcategoryEn": "WPC Wood",
    "descriptionEn": "WPC wood for decorative and project applications. Replace the current sample images with actual product images when the WPC product folder is available."
  },
    {
    "id": "wpc-9",
    "name": "BMC6009-2_0",
    "image": "./image/wpc/bmc6009-5_0.png",
    "gallery": [
      "./image/wpc/bmc6009-5_0.png",
      "./image/wpc/bmc6009-5_0.png",
      "./image/wpc/bmc6009-5_0.png"
    ],
    "category": "wpc",
    "categoryLabel": "ไม้เทียม WPC",
    "subcategory": "ไม้เทียม WPC",
    "price": 0,
    "unit": "รายการ",
    "description": "ไม้เทียม WPC สำหรับงานตกแต่งและโครงการ โดยใช้ภาพตัวอย่างจากชุดไฟล์ปัจจุบัน กรุณาเปลี่ยนเป็นภาพสินค้าจริงเมื่อมีโฟลเดอร์ ไม้เทียม WPC",
    "nameEn": "BMC6009-5_0",
    "categoryLabelEn": "WPC Wood",
    "subcategoryEn": "WPC Wood",
    "descriptionEn": "WPC wood for decorative and project applications. Replace the current sample images with actual product images when the WPC product folder is available."
  },
    {
    "id": "wpc-10",
    "name": "BMC6009-6_0",
    "image": "./image/wpc/bmc6009-6_0.png",
    "gallery": [
      "./image/wpc/bmc6009-6_0.png",
      "./image/wpc/bmc6009-6_0.png",
      "./image/wpc/bmc6009-6_0.png"
    ],
    "category": "wpc",
    "categoryLabel": "ไม้เทียม WPC",
    "subcategory": "ไม้เทียม WPC",
    "price": 0,
    "unit": "รายการ",
    "description": "ไม้เทียม WPC สำหรับงานตกแต่งและโครงการ โดยใช้ภาพตัวอย่างจากชุดไฟล์ปัจจุบัน กรุณาเปลี่ยนเป็นภาพสินค้าจริงเมื่อมีโฟลเดอร์ ไม้เทียม WPC",
    "nameEn": "BMC6009-6_0",
    "categoryLabelEn": "WPC Wood",
    "subcategoryEn": "WPC Wood",
    "descriptionEn": "WPC wood for decorative and project applications. Replace the current sample images with actual product images when the WPC product folder is available."
  },
    {
    "id": "wpc-11",
    "name": "BMC6010-1_0",
    "image": "./image/wpc/bmc6010-1_0.png",
    "gallery": [
      "./image/wpc/bmc6010-1_0.png",
      "./image/wpc/bmc6010-1_0.png",
      "./image/wpc/bmc6010-1_0.png"
    ],
    "category": "wpc",
    "categoryLabel": "ไม้เทียม WPC",
    "subcategory": "ไม้เทียม WPC",
    "price": 0,
    "unit": "รายการ",
    "description": "ไม้เทียม WPC สำหรับงานตกแต่งและโครงการ โดยใช้ภาพตัวอย่างจากชุดไฟล์ปัจจุบัน กรุณาเปลี่ยนเป็นภาพสินค้าจริงเมื่อมีโฟลเดอร์ ไม้เทียม WPC",
    "nameEn": "BMC60010-1_0",
    "categoryLabelEn": "WPC Wood",
    "subcategoryEn": "WPC Wood",
    "descriptionEn": "WPC wood for decorative and project applications. Replace the current sample images with actual product images when the WPC product folder is available."
  },
  {
    "id": "spc-1",
    "name": "ไม้เทียม SPC 1",
    "image": "./image/spc/bmc6002-1.png",
    "gallery": [
      "./image/spc/bmc6002-1.png",
      "./image/spc/bmc6002-1.png",
      "./image/spc/bmc6002-1.png"
    ],
    "category": "spc",
    "categoryLabel": "ไม้เทียม SPC",
    "subcategory": "ไม้เทียม SPC",
    "price": 0,
    "unit": "รายการ",
    "description": "ไม้เทียม SPC สำหรับงานตกแต่งและโครงการ โดยใช้ภาพตัวอย่างจากชุดไฟล์ปัจจุบัน กรุณาเปลี่ยนเป็นภาพสินค้าจริงเมื่อมีโฟลเดอร์ ไม้เทียม SPC",
    "nameEn": "SPC Wood 1",
    "categoryLabelEn": "SPC Wood",
    "subcategoryEn": "SPC Wood",
    "descriptionEn": "SPC wood for decorative and project applications. Replace the current sample images with actual product images when the SPC product folder is available."
  },
  {
    "id": "spc-2",
    "name": "ไม้เทียม SPC 2",
    "image": "./image/spc/bmc6002-2.png",
    "gallery": [
      "./image/spc/bmc6002-2.png",
      "./image/spc/bmc6002-2.png",
      "./image/spc/bmc6002-2.png"
    ],
    "category": "spc",
    "categoryLabel": "ไม้เทียม SPC",
    "subcategory": "ไม้เทียม SPC",
    "price": 0,
    "unit": "รายการ",
    "description": "ไม้เทียม SPC สำหรับงานตกแต่งและโครงการ โดยใช้ภาพตัวอย่างจากชุดไฟล์ปัจจุบัน กรุณาเปลี่ยนเป็นภาพสินค้าจริงเมื่อมีโฟลเดอร์ ไม้เทียม SPC",
    "nameEn": "SPC Wood 2",
    "categoryLabelEn": "SPC Wood",
    "subcategoryEn": "SPC Wood",
    "descriptionEn": "SPC wood for decorative and project applications. Replace the current sample images with actual product images when the SPC product folder is available."
  },
  {
    "id": "spc-3",
    "name": "ไม้เทียม SPC 3",
    "image": "./image/spc/bmc6002-3.png",
    "gallery": [
      "./image/spc/bmc6002-3.png",
      "./image/spc/bmc6002-3.png",
      "./image/spc/bmc6002-3.png"
    ],
    "category": "spc",
    "categoryLabel": "ไม้เทียม SPC",
    "subcategory": "ไม้เทียม SPC",
    "price": 0,
    "unit": "รายการ",
    "description": "ไม้เทียม SPC สำหรับงานตกแต่งและโครงการ โดยใช้ภาพตัวอย่างจากชุดไฟล์ปัจจุบัน กรุณาเปลี่ยนเป็นภาพสินค้าจริงเมื่อมีโฟลเดอร์ ไม้เทียม SPC",
    "nameEn": "SPC Wood 3",
    "categoryLabelEn": "SPC Wood",
    "subcategoryEn": "SPC Wood",
    "descriptionEn": "SPC wood for decorative and project applications. Replace the current sample images with actual product images when the SPC product folder is available."
  },
   {
    "id": "spc-5",
    "name": "ไม้เทียม SPC 4",
    "image": "./image/spc/bmc6002-5.png",
    "gallery": [
      "./image/spc/bmc6002-5.png",
      "./image/spc/bmc6002-5.png",
      "./image/spc/bmc6002-5.png"
    ],
    "category": "spc",
    "categoryLabel": "ไม้เทียม SPC",
    "subcategory": "ไม้เทียม SPC",
    "price": 0,
    "unit": "รายการ",
    "description": "ไม้เทียม SPC สำหรับงานตกแต่งและโครงการ โดยใช้ภาพตัวอย่างจากชุดไฟล์ปัจจุบัน กรุณาเปลี่ยนเป็นภาพสินค้าจริงเมื่อมีโฟลเดอร์ ไม้เทียม SPC",
    "nameEn": "SPC Wood 4",
    "categoryLabelEn": "SPC Wood",
    "subcategoryEn": "SPC Wood",
    "descriptionEn": "SPC wood for decorative and project applications. Replace the current sample images with actual product images when the SPC product folder is available."
  },
   {
    "id": "spc-5",
    "name": "ไม้เทียม SPC 5",
    "image": "./image/spc/bmc6002-7.png",
    "gallery": [
      "./image/spc/bmc6002-7.png",
      "./image/spc/bmc6002-7.png",
      "./image/spc/bmc6002-7.png"
    ],
    "category": "spc",
    "categoryLabel": "ไม้เทียม SPC",
    "subcategory": "ไม้เทียม SPC",
    "price": 0,
    "unit": "รายการ",
    "description": "ไม้เทียม SPC สำหรับงานตกแต่งและโครงการ โดยใช้ภาพตัวอย่างจากชุดไฟล์ปัจจุบัน กรุณาเปลี่ยนเป็นภาพสินค้าจริงเมื่อมีโฟลเดอร์ ไม้เทียม SPC",
    "nameEn": "SPC Wood 5",
    "categoryLabelEn": "SPC Wood",
    "subcategoryEn": "SPC Wood",
    "descriptionEn": "SPC wood for decorative and project applications. Replace the current sample images with actual product images when the SPC product folder is available."
  },
   {
    "id": "spc-6",
    "name": "ไม้เทียม SPC 6",
    "image": "./image/spc/bmc6009-1.png",
    "gallery": [
      "./image/spc/bmc6009-1.png",
      "./image/spc/bmc6009-1.png",
      "./image/spc/bmc6009-1.png"
    ],
    "category": "spc",
    "categoryLabel": "ไม้เทียม SPC",
    "subcategory": "ไม้เทียม SPC",
    "price": 0,
    "unit": "รายการ",
    "description": "ไม้เทียม SPC สำหรับงานตกแต่งและโครงการ โดยใช้ภาพตัวอย่างจากชุดไฟล์ปัจจุบัน กรุณาเปลี่ยนเป็นภาพสินค้าจริงเมื่อมีโฟลเดอร์ ไม้เทียม SPC",
    "nameEn": "SPC Wood 6",
    "categoryLabelEn": "SPC Wood",
    "subcategoryEn": "SPC Wood",
    "descriptionEn": "SPC wood for decorative and project applications. Replace the current sample images with actual product images when the SPC product folder is available."
  },
   {
    "id": "spc-7",
    "name": "ไม้เทียม SPC 7",
    "image": "./image/spc/bmc6009-2.png",
    "gallery": [
      "./image/spc/bmc6009-2.png",
      "./image/spc/bmc6009-2.png",
      "./image/spc/bmc6009-2.png"
    ],
    "category": "spc",
    "categoryLabel": "ไม้เทียม SPC",
    "subcategory": "ไม้เทียม SPC",
    "price": 0,
    "unit": "รายการ",
    "description": "ไม้เทียม SPC สำหรับงานตกแต่งและโครงการ โดยใช้ภาพตัวอย่างจากชุดไฟล์ปัจจุบัน กรุณาเปลี่ยนเป็นภาพสินค้าจริงเมื่อมีโฟลเดอร์ ไม้เทียม SPC",
    "nameEn": "SPC Wood 7",
    "categoryLabelEn": "SPC Wood",
    "subcategoryEn": "SPC Wood",
    "descriptionEn": "SPC wood for decorative and project applications. Replace the current sample images with actual product images when the SPC product folder is available."
  },
  {
    "id": "ceramic-1",
    "name": "กระเบื้องเซรามิก 1",
    "image": "./image/marble-tiles/ct2-msd8816p.jpg",
    "gallery": [
      "./image/marble-tiles/ct2-msd8816p.jpg",
      "./image/marble-tiles/ct2-msd8818p.jpg",
      "./image/marble-tiles/ct2-msd8825p.jpg"
    ],
    "category": "ceramic",
    "categoryLabel": "กระเบื้องเซรามิก",
    "subcategory": "กระเบื้องเซรามิก",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องเซรามิก สำหรับงานตกแต่งและโครงการ โดยใช้ภาพตัวอย่างจากชุดไฟล์ปัจจุบัน กรุณาเปลี่ยนเป็นภาพสินค้าจริงเมื่อมีโฟลเดอร์ กระเบื้องเซรามิก",
    "nameEn": "Ceramic Tile 1",
    "categoryLabelEn": "Ceramic Tile",
    "subcategoryEn": "Ceramic Tile",
    "descriptionEn": "Ceramic tiles for floors and walls, available in a variety of styles for different interiors."
  },
  {
    "id": "ceramic-2",
    "name": "กระเบื้องเซรามิก 2",
    "image": "./image/marble-tiles/ct2-msd8818p.jpg",
    "gallery": [
      "./image/marble-tiles/ct2-msd8816p.jpg",
      "./image/marble-tiles/ct2-msd8818p.jpg",
      "./image/marble-tiles/ct2-msd8825p.jpg"
    ],
    "category": "ceramic",
    "categoryLabel": "กระเบื้องเซรามิก",
    "subcategory": "กระเบื้องเซรามิก",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องเซรามิก สำหรับงานตกแต่งและโครงการ โดยใช้ภาพตัวอย่างจากชุดไฟล์ปัจจุบัน กรุณาเปลี่ยนเป็นภาพสินค้าจริงเมื่อมีโฟลเดอร์ กระเบื้องเซรามิก",
    "nameEn": "Ceramic Tile 2",
    "categoryLabelEn": "Ceramic Tile",
    "subcategoryEn": "Ceramic Tile",
    "descriptionEn": "Ceramic tiles for floors and walls, available in a variety of styles for different interiors."
  },
  {
    "id": "ceramic-3",
    "name": "กระเบื้องเซรามิก 3",
    "image": "./image/marble-tiles/ct2-msd8825p.jpg",
    "gallery": [
      "./image/marble-tiles/ct2-msd8816p.jpg",
      "./image/marble-tiles/ct2-msd8818p.jpg",
      "./image/marble-tiles/ct2-msd8825p.jpg"
    ],
    "category": "ceramic",
    "categoryLabel": "กระเบื้องเซรามิก",
    "subcategory": "กระเบื้องเซรามิก",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องเซรามิก สำหรับงานตกแต่งและโครงการ โดยใช้ภาพตัวอย่างจากชุดไฟล์ปัจจุบัน กรุณาเปลี่ยนเป็นภาพสินค้าจริงเมื่อมีโฟลเดอร์ กระเบื้องเซรามิก",
    "nameEn": "Ceramic Tile 3",
    "categoryLabelEn": "Ceramic Tile",
    "subcategoryEn": "Ceramic Tile",
    "descriptionEn": "Ceramic tiles for floors and walls, available in a variety of styles for different interiors."
  },
  {
    "id": "porcelain-1",
    "name": "กระเบื้องพอซเซเลน 1",
    "image": "./image/marble-tiles/ct2-msd8816p.jpg",
    "gallery": [
      "./image/marble-tiles/ct2-msd8816p.jpg",
      "./image/marble-tiles/ct2-msd8818p.jpg",
      "./image/marble-tiles/ct2-msd8825p.jpg"
    ],
    "category": "porcelain",
    "categoryLabel": "กระเบื้องพอซเซเลน",
    "subcategory": "กระเบื้องพอซเซเลน",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องพอซเซเลน สำหรับงานตกแต่งและโครงการ โดยใช้ภาพตัวอย่างจากชุดไฟล์ปัจจุบัน กรุณาเปลี่ยนเป็นภาพสินค้าจริงเมื่อมีโฟลเดอร์ กระเบื้องพอซเซเลน",
    "nameEn": "Porcelain Tile 1",
    "categoryLabelEn": "Porcelain Tile",
    "subcategoryEn": "Porcelain Tile",
    "descriptionEn": "Porcelain tiles for decorative and project applications. Replace the current sample images with actual product images when the porcelain-tile product folder is available."
  },
  {
    "id": "porcelain-2",
    "name": "กระเบื้องพอซเซเลน 2",
    "image": "./image/marble-tiles/ct2-msd8818p.jpg",
    "gallery": [
      "./image/marble-tiles/ct2-msd8816p.jpg",
      "./image/marble-tiles/ct2-msd8818p.jpg",
      "./image/marble-tiles/ct2-msd8825p.jpg"
    ],
    "category": "porcelain",
    "categoryLabel": "กระเบื้องพอซเซเลน",
    "subcategory": "กระเบื้องพอซเซเลน",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องพอซเซเลน สำหรับงานตกแต่งและโครงการ โดยใช้ภาพตัวอย่างจากชุดไฟล์ปัจจุบัน กรุณาเปลี่ยนเป็นภาพสินค้าจริงเมื่อมีโฟลเดอร์ กระเบื้องพอซเซเลน",
    "nameEn": "Porcelain Tile 2",
    "categoryLabelEn": "Porcelain Tile",
    "subcategoryEn": "Porcelain Tile",
    "descriptionEn": "Porcelain tiles for decorative and project applications. Replace the current sample images with actual product images when the porcelain-tile product folder is available."
  },
  {
    "id": "porcelain-3",
    "name": "กระเบื้องพอซเซเลน 3",
    "image": "./image/marble-tiles/ct2-msd8825p.jpg",
    "gallery": [
      "./image/marble-tiles/ct2-msd8816p.jpg",
      "./image/marble-tiles/ct2-msd8818p.jpg",
      "./image/marble-tiles/ct2-msd8825p.jpg"
    ],
    "category": "porcelain",
    "categoryLabel": "กระเบื้องพอซเซเลน",
    "subcategory": "กระเบื้องพอซเซเลน",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องพอซเซเลน สำหรับงานตกแต่งและโครงการ โดยใช้ภาพตัวอย่างจากชุดไฟล์ปัจจุบัน กรุณาเปลี่ยนเป็นภาพสินค้าจริงเมื่อมีโฟลเดอร์ กระเบื้องพอซเซเลน",
    "nameEn": "Porcelain Tile 3",
    "categoryLabelEn": "Porcelain Tile",
    "subcategoryEn": "Porcelain Tile",
    "descriptionEn": "Porcelain tiles for decorative and project applications. Replace the current sample images with actual product images when the porcelain-tile product folder is available."
  },
  {
    "id": "quartzite-da-vinci",
    "name": "Da Vinci",
    "nameEn": "Da Vinci",
    "image": "./image/quartz-stone/da-vinci.jpg",
    "gallery": [
      "./image/quartz-stone/da-vinci.jpg"
    ],
    "category": "quartzite",
    "categoryLabel": "หินควอตไซต์",
    "categoryLabelEn": "Quartzite",
    "subcategory": "หินควอตไซต์",
    "subcategoryEn": "Quartzite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินควอตไซต์ธรรมชาติ มีความแข็งแรงสูง ลวดลายโดดเด่น เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งระดับพรีเมียม",
    "descriptionEn": "Natural quartzite with high durability and distinctive patterns, suitable for floors, walls, countertops and premium interiors."
  },
  {
    "id": "quartzite-explosion-blue",
    "name": "Explosion Blue",
    "nameEn": "Explosion Blue",
    "image": "./image/quartz-stone/explosion-blue.jpg",
    "gallery": [
      "./image/quartz-stone/explosion-blue.jpg"
    ],
    "category": "quartzite",
    "categoryLabel": "หินควอตไซต์",
    "categoryLabelEn": "Quartzite",
    "subcategory": "หินควอตไซต์",
    "subcategoryEn": "Quartzite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินควอตไซต์ธรรมชาติ มีความแข็งแรงสูง ลวดลายโดดเด่น เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งระดับพรีเมียม",
    "descriptionEn": "Natural quartzite with high durability and distinctive patterns, suitable for floors, walls, countertops and premium interiors."
  },
  {
    "id": "quartzite-la-valle",
    "name": "La Valle",
    "nameEn": "La Valle",
    "image": "./image/quartz-stone/la-valle.jpg",
    "gallery": [
      "./image/quartz-stone/la-valle.jpg"
    ],
    "category": "quartzite",
    "categoryLabel": "หินควอตไซต์",
    "categoryLabelEn": "Quartzite",
    "subcategory": "หินควอตไซต์",
    "subcategoryEn": "Quartzite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินควอตไซต์ธรรมชาติ มีความแข็งแรงสูง ลวดลายโดดเด่น เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งระดับพรีเมียม",
    "descriptionEn": "Natural quartzite with high durability and distinctive patterns, suitable for floors, walls, countertops and premium interiors."
  },
  {
    "id": "quartzite-mont-blanc",
    "name": "Mont Blanc",
    "nameEn": "Mont Blanc",
    "image": "./image/quartz-stone/mont-blanc.jpg",
    "gallery": [
      "./image/quartz-stone/mont-blanc.jpg"
    ],
    "category": "quartzite",
    "categoryLabel": "หินควอตไซต์",
    "categoryLabelEn": "Quartzite",
    "subcategory": "หินควอตไซต์",
    "subcategoryEn": "Quartzite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินควอตไซต์ธรรมชาติ มีความแข็งแรงสูง ลวดลายโดดเด่น เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งระดับพรีเมียม",
    "descriptionEn": "Natural quartzite with high durability and distinctive patterns, suitable for floors, walls, countertops and premium interiors."
  },
  {
    "id": "quartzite-pink-lake",
    "name": "Pink Lake",
    "nameEn": "Pink Lake",
    "image": "./image/quartz-stone/pink-lake.jpg",
    "gallery": [
      "./image/quartz-stone/pink-lake.jpg"
    ],
    "category": "quartzite",
    "categoryLabel": "หินควอตไซต์",
    "categoryLabelEn": "Quartzite",
    "subcategory": "หินควอตไซต์",
    "subcategoryEn": "Quartzite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินควอตไซต์ธรรมชาติ มีความแข็งแรงสูง ลวดลายโดดเด่น เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งระดับพรีเมียม",
    "descriptionEn": "Natural quartzite with high durability and distinctive patterns, suitable for floors, walls, countertops and premium interiors."
  },
  {
    "id": "quartzite-starry-night",
    "name": "Starry Night",
    "nameEn": "Starry Night",
    "image": "./image/quartz-stone/starry-night.jpg",
    "gallery": [
      "./image/quartz-stone/starry-night.jpg"
    ],
    "category": "quartzite",
    "categoryLabel": "หินควอตไซต์",
    "categoryLabelEn": "Quartzite",
    "subcategory": "หินควอตไซต์",
    "subcategoryEn": "Quartzite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินควอตไซต์ธรรมชาติ มีความแข็งแรงสูง ลวดลายโดดเด่น เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งระดับพรีเมียม",
    "descriptionEn": "Natural quartzite with high durability and distinctive patterns, suitable for floors, walls, countertops and premium interiors."
  },
  {
    "id": "limestone-mocca-cream",
    "name": "Mocca Cream",
    "nameEn": "Mocca Cream",
    "image": "./image/limestone-stone/mocca-cream.jpg",
    "gallery": [
      "./image/limestone-stone/mocca-cream.jpg"
    ],
    "category": "limestone",
    "categoryLabel": "หินไลม์สโตน",
    "categoryLabelEn": "Limestone",
    "subcategory": "หินไลม์สโตน",
    "subcategoryEn": "Limestone",
    "price": 0,
    "unit": "รายการ",
    "description": "หินไลม์สโตนโทนธรรมชาติ ให้พื้นผิวอบอุ่น เหมาะสำหรับพื้น ผนัง งานภูมิทัศน์ และงานภายนอก",
    "descriptionEn": "Natural limestone with warm tones, suitable for floors, walls, landscaping and exterior applications."
  },
  {
    "id": "limestone-rava-beige",
    "name": "Rava Beige",
    "nameEn": "Rava Beige",
    "image": "./image/limestone-stone/rava-beige.jpg",
    "gallery": [
      "./image/limestone-stone/rava-beige.jpg"
    ],
    "category": "limestone",
    "categoryLabel": "หินไลม์สโตน",
    "categoryLabelEn": "Limestone",
    "subcategory": "หินไลม์สโตน",
    "subcategoryEn": "Limestone",
    "price": 0,
    "unit": "รายการ",
    "description": "หินไลม์สโตนโทนธรรมชาติ ให้พื้นผิวอบอุ่น เหมาะสำหรับพื้น ผนัง งานภูมิทัศน์ และงานภายนอก",
    "descriptionEn": "Natural limestone with warm tones, suitable for floors, walls, landscaping and exterior applications."
  },
  {
    "id": "travertine-silver-travertine",
    "name": "Silver Travertine",
    "nameEn": "Silver Travertine",
    "image": "./image/travertine-stone/silver-travertine.jpg",
    "gallery": [
      "./image/travertine-stone/silver-travertine.jpg"
    ],
    "category": "travertine",
    "categoryLabel": "หินทราเวอร์ทีน",
    "categoryLabelEn": "Travertine",
    "subcategory": "หินทราเวอร์ทีน",
    "subcategoryEn": "Travertine",
    "price": 0,
    "unit": "รายการ",
    "description": "หินทราเวอร์ทีนมีเอกลักษณ์จากลวดลายและรูพรุนตามธรรมชาติ เหมาะสำหรับพื้น ผนัง และงานตกแต่ง",
    "descriptionEn": "Travertine with naturally distinctive texture and pores, suitable for floors, walls and decorative applications."
  },
  {
    "id": "travertine-white-travertine",
    "name": "White Travertine",
    "nameEn": "White Travertine",
    "image": "./image/travertine-stone/white-travertine.jpg",
    "gallery": [
      "./image/travertine-stone/white-travertine.jpg"
    ],
    "category": "travertine",
    "categoryLabel": "หินทราเวอร์ทีน",
    "categoryLabelEn": "Travertine",
    "subcategory": "หินทราเวอร์ทีน",
    "subcategoryEn": "Travertine",
    "price": 0,
    "unit": "รายการ",
    "description": "หินทราเวอร์ทีนมีเอกลักษณ์จากลวดลายและรูพรุนตามธรรมชาติ เหมาะสำหรับพื้น ผนัง และงานตกแต่ง",
    "descriptionEn": "Travertine with naturally distinctive texture and pores, suitable for floors, walls and decorative applications."
  },
  {
    "id": "travertine-yellow-travertine",
    "name": "Yellow Travertine",
    "nameEn": "Yellow Travertine",
    "image": "./image/travertine-stone/yellow-travertine.jpg",
    "gallery": [
      "./image/travertine-stone/yellow-travertine.jpg"
    ],
    "category": "travertine",
    "categoryLabel": "หินทราเวอร์ทีน",
    "categoryLabelEn": "Travertine",
    "subcategory": "หินทราเวอร์ทีน",
    "subcategoryEn": "Travertine",
    "price": 0,
    "unit": "รายการ",
    "description": "หินทราเวอร์ทีนมีเอกลักษณ์จากลวดลายและรูพรุนตามธรรมชาติ เหมาะสำหรับพื้น ผนัง และงานตกแต่ง",
    "descriptionEn": "Travertine with naturally distinctive texture and pores, suitable for floors, walls and decorative applications."
  },
  {
    "id": "onyx-cola-onyx",
    "name": "Cola Onyx",
    "nameEn": "Cola Onyx",
    "image": "./image/onyx-stone/cola-onyx.jpg",
    "gallery": [
      "./image/onyx-stone/cola-onyx.jpg"
    ],
    "category": "onyx",
    "categoryLabel": "หินออนิกซ์",
    "categoryLabelEn": "Onyx",
    "subcategory": "หินออนิกซ์",
    "subcategoryEn": "Onyx",
    "price": 0,
    "unit": "รายการ",
    "description": "หินออนิกซ์มีลวดลายและความโปร่งแสงโดดเด่น เหมาะสำหรับงานตกแต่งที่ต้องการความหรูหรา",
    "descriptionEn": "Onyx with striking patterns and translucency, ideal for luxurious decorative applications."
  },
  {
    "id": "onyx-damra-onyx",
    "name": "Damra Onyx",
    "nameEn": "Damra Onyx",
    "image": "./image/onyx-stone/damra-onyx.jpg",
    "gallery": [
      "./image/onyx-stone/damra-onyx.jpg"
    ],
    "category": "onyx",
    "categoryLabel": "หินออนิกซ์",
    "categoryLabelEn": "Onyx",
    "subcategory": "หินออนิกซ์",
    "subcategoryEn": "Onyx",
    "price": 0,
    "unit": "รายการ",
    "description": "หินออนิกซ์มีลวดลายและความโปร่งแสงโดดเด่น เหมาะสำหรับงานตกแต่งที่ต้องการความหรูหรา",
    "descriptionEn": "Onyx with striking patterns and translucency, ideal for luxurious decorative applications."
  },
  {
    "id": "onyx-grey-onyx",
    "name": "Grey Onyx",
    "nameEn": "Grey Onyx",
    "image": "./image/onyx-stone/grey-onyx.jpg",
    "gallery": [
      "./image/onyx-stone/grey-onyx.jpg"
    ],
    "category": "onyx",
    "categoryLabel": "หินออนิกซ์",
    "categoryLabelEn": "Onyx",
    "subcategory": "หินออนิกซ์",
    "subcategoryEn": "Onyx",
    "price": 0,
    "unit": "รายการ",
    "description": "หินออนิกซ์มีลวดลายและความโปร่งแสงโดดเด่น เหมาะสำหรับงานตกแต่งที่ต้องการความหรูหรา",
    "descriptionEn": "Onyx with striking patterns and translucency, ideal for luxurious decorative applications."
  },
  {
    "id": "onyx-honey-onyx",
    "name": "Honey Onyx",
    "nameEn": "Honey Onyx",
    "image": "./image/onyx-stone/honey-onyx.jpg",
    "gallery": [
      "./image/onyx-stone/honey-onyx.jpg"
    ],
    "category": "onyx",
    "categoryLabel": "หินออนิกซ์",
    "categoryLabelEn": "Onyx",
    "subcategory": "หินออนิกซ์",
    "subcategoryEn": "Onyx",
    "price": 0,
    "unit": "รายการ",
    "description": "หินออนิกซ์มีลวดลายและความโปร่งแสงโดดเด่น เหมาะสำหรับงานตกแต่งที่ต้องการความหรูหรา",
    "descriptionEn": "Onyx with striking patterns and translucency, ideal for luxurious decorative applications."
  },
  {
    "id": "onyx-oriental-onyx",
    "name": "Oriental Onyx",
    "nameEn": "Oriental Onyx",
    "image": "./image/onyx-stone/oriental-onyx.jpg",
    "gallery": [
      "./image/onyx-stone/oriental-onyx.jpg"
    ],
    "category": "onyx",
    "categoryLabel": "หินออนิกซ์",
    "categoryLabelEn": "Onyx",
    "subcategory": "หินออนิกซ์",
    "subcategoryEn": "Onyx",
    "price": 0,
    "unit": "รายการ",
    "description": "หินออนิกซ์มีลวดลายและความโปร่งแสงโดดเด่น เหมาะสำหรับงานตกแต่งที่ต้องการความหรูหรา",
    "descriptionEn": "Onyx with striking patterns and translucency, ideal for luxurious decorative applications."
  },
  {
    "id": "onyx-rustica-onyx",
    "name": "Rustica Onyx",
    "nameEn": "Rustica Onyx",
    "image": "./image/onyx-stone/rustica-onyx.jpg",
    "gallery": [
      "./image/onyx-stone/rustica-onyx.jpg"
    ],
    "category": "onyx",
    "categoryLabel": "หินออนิกซ์",
    "categoryLabelEn": "Onyx",
    "subcategory": "หินออนิกซ์",
    "subcategoryEn": "Onyx",
    "price": 0,
    "unit": "รายการ",
    "description": "หินออนิกซ์มีลวดลายและความโปร่งแสงโดดเด่น เหมาะสำหรับงานตกแต่งที่ต้องการความหรูหรา",
    "descriptionEn": "Onyx with striking patterns and translucency, ideal for luxurious decorative applications."
  },
  {
    "id": "onyx-valencia-onyx",
    "name": "Valencia Onyx",
    "nameEn": "Valencia Onyx",
    "image": "./image/onyx-stone/valencia-onyx.jpg",
    "gallery": [
      "./image/onyx-stone/valencia-onyx.jpg"
    ],
    "category": "onyx",
    "categoryLabel": "หินออนิกซ์",
    "categoryLabelEn": "Onyx",
    "subcategory": "หินออนิกซ์",
    "subcategoryEn": "Onyx",
    "price": 0,
    "unit": "รายการ",
    "description": "หินออนิกซ์มีลวดลายและความโปร่งแสงโดดเด่น เหมาะสำหรับงานตกแต่งที่ต้องการความหรูหรา",
    "descriptionEn": "Onyx with striking patterns and translucency, ideal for luxurious decorative applications."
  },
  {
    "id": "onyx-vedeci-onyx",
    "name": "Vedeci Onyx",
    "nameEn": "Vedeci Onyx",
    "image": "./image/onyx-stone/vedeci-onyx.jpg",
    "gallery": [
      "./image/onyx-stone/vedeci-onyx.jpg"
    ],
    "category": "onyx",
    "categoryLabel": "หินออนิกซ์",
    "categoryLabelEn": "Onyx",
    "subcategory": "หินออนิกซ์",
    "subcategoryEn": "Onyx",
    "price": 0,
    "unit": "รายการ",
    "description": "หินออนิกซ์มีลวดลายและความโปร่งแสงโดดเด่น เหมาะสำหรับงานตกแต่งที่ต้องการความหรูหรา",
    "descriptionEn": "Onyx with striking patterns and translucency, ideal for luxurious decorative applications."
  },
  {
    "id": "pool-11",
    "name": "11",
    "nameEn": "11",
    "image": "./image/pool-stone/11.jpg",
    "gallery": [
      "./image/pool-stone/11.jpg"
    ],
    "category": "pool",
    "categoryLabel": "ปูสระว่ายน้ำ",
    "categoryLabelEn": "Pool Stone",
    "subcategory": "ปูสระว่ายน้ำ",
    "subcategoryEn": "Pool Stone",
    "price": 0,
    "unit": "รายการ",
    "description": "หินสำหรับปูสระว่ายน้ำและพื้นที่รอบสระ คัดเลือกให้เหมาะกับงานภายนอก",
    "descriptionEn": "Stone selected for swimming pools and surrounding areas, suitable for exterior applications."
  },
  {
    "id": "pool-2-2",
    "name": "2",
    "nameEn": "2",
    "image": "./image/pool-stone/2.jpg",
    "gallery": [
      "./image/pool-stone/2.jpg"
    ],
    "category": "pool",
    "categoryLabel": "ปูสระว่ายน้ำ",
    "categoryLabelEn": "Pool Stone",
    "subcategory": "ปูสระว่ายน้ำ",
    "subcategoryEn": "Pool Stone",
    "price": 0,
    "unit": "รายการ",
    "description": "หินสำหรับปูสระว่ายน้ำและพื้นที่รอบสระ คัดเลือกให้เหมาะกับงานภายนอก",
    "descriptionEn": "Stone selected for swimming pools and surrounding areas, suitable for exterior applications."
  },
  {
    "id": "pool-4-2",
    "name": "4",
    "nameEn": "4",
    "image": "./image/pool-stone/4.jpg",
    "gallery": [
      "./image/pool-stone/4.jpg"
    ],
    "category": "pool",
    "categoryLabel": "ปูสระว่ายน้ำ",
    "categoryLabelEn": "Pool Stone",
    "subcategory": "ปูสระว่ายน้ำ",
    "subcategoryEn": "Pool Stone",
    "price": 0,
    "unit": "รายการ",
    "description": "หินสำหรับปูสระว่ายน้ำและพื้นที่รอบสระ คัดเลือกให้เหมาะกับงานภายนอก",
    "descriptionEn": "Stone selected for swimming pools and surrounding areas, suitable for exterior applications."
  },
  {
    "id": "pool-6-2",
    "name": "6",
    "nameEn": "6",
    "image": "./image/pool-stone/6.jpg",
    "gallery": [
      "./image/pool-stone/6.jpg"
    ],
    "category": "pool",
    "categoryLabel": "ปูสระว่ายน้ำ",
    "categoryLabelEn": "Pool Stone",
    "subcategory": "ปูสระว่ายน้ำ",
    "subcategoryEn": "Pool Stone",
    "price": 0,
    "unit": "รายการ",
    "description": "หินสำหรับปูสระว่ายน้ำและพื้นที่รอบสระ คัดเลือกให้เหมาะกับงานภายนอก",
    "descriptionEn": "Stone selected for swimming pools and surrounding areas, suitable for exterior applications."
  },
  {
    "id": "pool-7-2",
    "name": "7",
    "nameEn": "7",
    "image": "./image/pool-stone/7.jpg",
    "gallery": [
      "./image/pool-stone/7.jpg"
    ],
    "category": "pool",
    "categoryLabel": "ปูสระว่ายน้ำ",
    "categoryLabelEn": "Pool Stone",
    "subcategory": "ปูสระว่ายน้ำ",
    "subcategoryEn": "Pool Stone",
    "price": 0,
    "unit": "รายการ",
    "description": "หินสำหรับปูสระว่ายน้ำและพื้นที่รอบสระ คัดเลือกให้เหมาะกับงานภายนอก",
    "descriptionEn": "Stone selected for swimming pools and surrounding areas, suitable for exterior applications."
  },
  {
    "id": "pool-8-2",
    "name": "8",
    "nameEn": "8",
    "image": "./image/pool-stone/8.jpg",
    "gallery": [
      "./image/pool-stone/8.jpg"
    ],
    "category": "pool",
    "categoryLabel": "ปูสระว่ายน้ำ",
    "categoryLabelEn": "Pool Stone",
    "subcategory": "ปูสระว่ายน้ำ",
    "subcategoryEn": "Pool Stone",
    "price": 0,
    "unit": "รายการ",
    "description": "หินสำหรับปูสระว่ายน้ำและพื้นที่รอบสระ คัดเลือกให้เหมาะกับงานภายนอก",
    "descriptionEn": "Stone selected for swimming pools and surrounding areas, suitable for exterior applications."
  },
  {
    "id": "pool-9",
    "name": "9",
    "nameEn": "9",
    "image": "./image/pool-stone/9.jpg",
    "gallery": [
      "./image/pool-stone/9.jpg"
    ],
    "category": "pool",
    "categoryLabel": "ปูสระว่ายน้ำ",
    "categoryLabelEn": "Pool Stone",
    "subcategory": "ปูสระว่ายน้ำ",
    "subcategoryEn": "Pool Stone",
    "price": 0,
    "unit": "รายการ",
    "description": "หินสำหรับปูสระว่ายน้ำและพื้นที่รอบสระ คัดเลือกให้เหมาะกับงานภายนอก",
    "descriptionEn": "Stone selected for swimming pools and surrounding areas, suitable for exterior applications."
  },
  {
    "id": "compressed-marble-cf0012-rainbow",
    "name": "CF0012 Rainbow",
    "nameEn": "CF0012 Rainbow",
    "image": "./image/compressed-marble/cf0012-rainbow.jpg",
    "gallery": [
      "./image/compressed-marble/cf0012-rainbow.jpg"
    ],
    "category": "compressed-marble",
    "categoryLabel": "หินอ่อนอัด",
    "categoryLabelEn": "Compressed Marble",
    "subcategory": "หินอ่อนอัด",
    "subcategoryEn": "Compressed Marble",
    "price": 0,
    "unit": "รายการ",
    "description": "หินอ่อนอัดให้โทนสีและลวดลายสม่ำเสมอ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง",
    "descriptionEn": "Compressed marble with consistent colors and patterns, suitable for floors, walls, countertops and interiors."
  },
  {
    "id": "compressed-marble-cf0028-marfil-geige",
    "name": "CF0028 Marfil Geige",
    "nameEn": "CF0028 Marfil Geige",
    "image": "./image/compressed-marble/cf0028-marfil-geige.jpg",
    "gallery": [
      "./image/compressed-marble/cf0028-marfil-geige.jpg"
    ],
    "category": "compressed-marble",
    "categoryLabel": "หินอ่อนอัด",
    "categoryLabelEn": "Compressed Marble",
    "subcategory": "หินอ่อนอัด",
    "subcategoryEn": "Compressed Marble",
    "price": 0,
    "unit": "รายการ",
    "description": "หินอ่อนอัดให้โทนสีและลวดลายสม่ำเสมอ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง",
    "descriptionEn": "Compressed marble with consistent colors and patterns, suitable for floors, walls, countertops and interiors."
  },
  {
    "id": "compressed-marble-cf0030-atom-beige",
    "name": "CF0030 Atom Beige",
    "nameEn": "CF0030 Atom Beige",
    "image": "./image/compressed-marble/cf0030-atom-beige.jpg",
    "gallery": [
      "./image/compressed-marble/cf0030-atom-beige.jpg"
    ],
    "category": "compressed-marble",
    "categoryLabel": "หินอ่อนอัด",
    "categoryLabelEn": "Compressed Marble",
    "subcategory": "หินอ่อนอัด",
    "subcategoryEn": "Compressed Marble",
    "price": 0,
    "unit": "รายการ",
    "description": "หินอ่อนอัดให้โทนสีและลวดลายสม่ำเสมอ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง",
    "descriptionEn": "Compressed marble with consistent colors and patterns, suitable for floors, walls, countertops and interiors."
  },
  {
    "id": "compressed-marble-cf0031-golddust-red",
    "name": "CF0031 Golddust Red",
    "nameEn": "CF0031 Golddust Red",
    "image": "./image/compressed-marble/cf0031-golddust-red.jpg",
    "gallery": [
      "./image/compressed-marble/cf0031-golddust-red.jpg"
    ],
    "category": "compressed-marble",
    "categoryLabel": "หินอ่อนอัด",
    "categoryLabelEn": "Compressed Marble",
    "subcategory": "หินอ่อนอัด",
    "subcategoryEn": "Compressed Marble",
    "price": 0,
    "unit": "รายการ",
    "description": "หินอ่อนอัดให้โทนสีและลวดลายสม่ำเสมอ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง",
    "descriptionEn": "Compressed marble with consistent colors and patterns, suitable for floors, walls, countertops and interiors."
  },
  {
    "id": "compressed-marble-cf0032-new-beige",
    "name": "CF0032 New Beige",
    "nameEn": "CF0032 New Beige",
    "image": "./image/compressed-marble/cf0032-new-beige.jpg",
    "gallery": [
      "./image/compressed-marble/cf0032-new-beige.jpg"
    ],
    "category": "compressed-marble",
    "categoryLabel": "หินอ่อนอัด",
    "categoryLabelEn": "Compressed Marble",
    "subcategory": "หินอ่อนอัด",
    "subcategoryEn": "Compressed Marble",
    "price": 0,
    "unit": "รายการ",
    "description": "หินอ่อนอัดให้โทนสีและลวดลายสม่ำเสมอ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง",
    "descriptionEn": "Compressed marble with consistent colors and patterns, suitable for floors, walls, countertops and interiors."
  },
  {
    "id": "compressed-marble-cf0033-red-dot",
    "name": "CF0033 Red Dot",
    "nameEn": "CF0033 Red Dot",
    "image": "./image/compressed-marble/cf0033-red-dot.jpg",
    "gallery": [
      "./image/compressed-marble/cf0033-red-dot.jpg"
    ],
    "category": "compressed-marble",
    "categoryLabel": "หินอ่อนอัด",
    "categoryLabelEn": "Compressed Marble",
    "subcategory": "หินอ่อนอัด",
    "subcategoryEn": "Compressed Marble",
    "price": 0,
    "unit": "รายการ",
    "description": "หินอ่อนอัดให้โทนสีและลวดลายสม่ำเสมอ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง",
    "descriptionEn": "Compressed marble with consistent colors and patterns, suitable for floors, walls, countertops and interiors."
  },
  {
    "id": "compressed-marble-cf0034-ixoa",
    "name": "CF0034 Ixoa",
    "nameEn": "CF0034 Ixoa",
    "image": "./image/compressed-marble/cf0034-ixoa.jpg",
    "gallery": [
      "./image/compressed-marble/cf0034-ixoa.jpg"
    ],
    "category": "compressed-marble",
    "categoryLabel": "หินอ่อนอัด",
    "categoryLabelEn": "Compressed Marble",
    "subcategory": "หินอ่อนอัด",
    "subcategoryEn": "Compressed Marble",
    "price": 0,
    "unit": "รายการ",
    "description": "หินอ่อนอัดให้โทนสีและลวดลายสม่ำเสมอ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง",
    "descriptionEn": "Compressed marble with consistent colors and patterns, suitable for floors, walls, countertops and interiors."
  },
  {
    "id": "compressed-marble-cf0038-black-jade-with-star",
    "name": "CF0038 Black Jade With Star",
    "nameEn": "CF0038 Black Jade With Star",
    "image": "./image/compressed-marble/cf0038-black-jade-with-star.jpg",
    "gallery": [
      "./image/compressed-marble/cf0038-black-jade-with-star.jpg"
    ],
    "category": "compressed-marble",
    "categoryLabel": "หินอ่อนอัด",
    "categoryLabelEn": "Compressed Marble",
    "subcategory": "หินอ่อนอัด",
    "subcategoryEn": "Compressed Marble",
    "price": 0,
    "unit": "รายการ",
    "description": "หินอ่อนอัดให้โทนสีและลวดลายสม่ำเสมอ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง",
    "descriptionEn": "Compressed marble with consistent colors and patterns, suitable for floors, walls, countertops and interiors."
  },
  {
    "id": "terrazzo-sb101-pepesale-lev-img-7925",
    "name": "SB101_PEPESALE_LEV-IMG_7925",
    "nameEn": "SB101_PEPESALE_LEV-IMG_7925",
    "image": "./image/terrazzo-stone/sb101-pepesale-lev-img-7925.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb101-pepesale-lev-img-7925.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "categoryLabelEn": "Terrazzo",
    "subcategory": "หินเทอราซโซ่",
    "subcategoryEn": "Terrazzo",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง และงานตกแต่ง",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "terrazzo-sb102-grigio-chiaro-lev-img-7868",
    "name": "SB102_GRIGIO_CHIARO_LEV-IMG_7868",
    "nameEn": "SB102_GRIGIO_CHIARO_LEV-IMG_7868",
    "image": "./image/terrazzo-stone/sb102-grigio-chiaro-lev-img-7868.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb102-grigio-chiaro-lev-img-7868.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "categoryLabelEn": "Terrazzo",
    "subcategory": "หินเทอราซโซ่",
    "subcategoryEn": "Terrazzo",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง และงานตกแต่ง",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "terrazzo-sb103-grigio-medio-lev-sga9125",
    "name": "SB103_GRIGIO_MEDIO_LEV_SGA9125",
    "nameEn": "SB103_GRIGIO_MEDIO_LEV_SGA9125",
    "image": "./image/terrazzo-stone/sb103-grigio-medio-lev-sga9125.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb103-grigio-medio-lev-sga9125.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "categoryLabelEn": "Terrazzo",
    "subcategory": "หินเทอราซโซ่",
    "subcategoryEn": "Terrazzo",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง และงานตกแต่ง",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "terrazzo-sb105-antracite-lev-img-7949",
    "name": "SB105_ANTRACITE_LEV-IMG_7949",
    "nameEn": "SB105_ANTRACITE_LEV-IMG_7949",
    "image": "./image/terrazzo-stone/sb105-antracite-lev-img-7949.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb105-antracite-lev-img-7949.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "categoryLabelEn": "Terrazzo",
    "subcategory": "หินเทอราซโซ่",
    "subcategoryEn": "Terrazzo",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง และงานตกแต่ง",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "terrazzo-sb106-nero-lev-img-7964-1",
    "name": "SB106_NERO_LEV-IMG_7964-1",
    "nameEn": "SB106_NERO_LEV-IMG_7964-1",
    "image": "./image/terrazzo-stone/sb106-nero-lev-img-7964-1.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb106-nero-lev-img-7964-1.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "categoryLabelEn": "Terrazzo",
    "subcategory": "หินเทอราซโซ่",
    "subcategoryEn": "Terrazzo",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง และงานตกแต่ง",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "terrazzo-sb108-beige-lev-img-7904",
    "name": "SB108_BEIGE_LEV-IMG_7904",
    "nameEn": "SB108_BEIGE_LEV-IMG_7904",
    "image": "./image/terrazzo-stone/sb108-beige-lev-img-7904.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb108-beige-lev-img-7904.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "categoryLabelEn": "Terrazzo",
    "subcategory": "หินเทอราซโซ่",
    "subcategoryEn": "Terrazzo",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง และงานตกแต่ง",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "terrazzo-sb109-giallo-lev-img-7847",
    "name": "SB109_GIALLO_LEV-IMG_7847",
    "nameEn": "SB109_GIALLO_LEV-IMG_7847",
    "image": "./image/terrazzo-stone/sb109-giallo-lev-img-7847.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb109-giallo-lev-img-7847.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "categoryLabelEn": "Terrazzo",
    "subcategory": "หินเทอราซโซ่",
    "subcategoryEn": "Terrazzo",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง และงานตกแต่ง",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "terrazzo-sb111-verde-lev-img-7913",
    "name": "SB111_VERDE_LEV-IMG_7913",
    "nameEn": "SB111_VERDE_LEV-IMG_7913",
    "image": "./image/terrazzo-stone/sb111-verde-lev-img-7913.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb111-verde-lev-img-7913.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "categoryLabelEn": "Terrazzo",
    "subcategory": "หินเทอราซโซ่",
    "subcategoryEn": "Terrazzo",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง และงานตกแต่ง",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "terrazzo-sb112-verde-scuro-lev-img-8052",
    "name": "SB112_VERDE_SCURO_LEV-IMG_8052",
    "nameEn": "SB112_VERDE_SCURO_LEV-IMG_8052",
    "image": "./image/terrazzo-stone/sb112-verde-scuro-lev-img-8052.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb112-verde-scuro-lev-img-8052.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "categoryLabelEn": "Terrazzo",
    "subcategory": "หินเทอราซโซ่",
    "subcategoryEn": "Terrazzo",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง และงานตกแต่ง",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "terrazzo-sb113-multicolor-nero-lev-img-7979",
    "name": "SB113_MULTICOLOR_NERO_LEV-IMG_7979",
    "nameEn": "SB113_MULTICOLOR_NERO_LEV-IMG_7979",
    "image": "./image/terrazzo-stone/sb113-multicolor-nero-lev-img-7979.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb113-multicolor-nero-lev-img-7979.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "categoryLabelEn": "Terrazzo",
    "subcategory": "หินเทอราซโซ่",
    "subcategoryEn": "Terrazzo",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง และงานตกแต่ง",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "terrazzo-sb114-multicolor-grigio-lev-img-7703",
    "name": "SB114_MULTICOLOR_GRIGIO_LEV-IMG_7703",
    "nameEn": "SB114_MULTICOLOR_GRIGIO_LEV-IMG_7703",
    "image": "./image/terrazzo-stone/sb114-multicolor-grigio-lev-img-7703.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb114-multicolor-grigio-lev-img-7703.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "categoryLabelEn": "Terrazzo",
    "subcategory": "หินเทอราซโซ่",
    "subcategoryEn": "Terrazzo",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง และงานตกแต่ง",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "terrazzo-sb115-multicolor-verde-lev-img-7624",
    "name": "SB115_MULTICOLOR_VERDE_LEV-IMG_7624",
    "nameEn": "SB115_MULTICOLOR_VERDE_LEV-IMG_7624",
    "image": "./image/terrazzo-stone/sb115-multicolor-verde-lev-img-7624.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb115-multicolor-verde-lev-img-7624.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "categoryLabelEn": "Terrazzo",
    "subcategory": "หินเทอราซโซ่",
    "subcategoryEn": "Terrazzo",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง และงานตกแต่ง",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "terrazzo-sb119-pepegrigio-lev-img-8037",
    "name": "SB119_PEPEGRIGIO_LEV-IMG_8037",
    "nameEn": "SB119_PEPEGRIGIO_LEV-IMG_8037",
    "image": "./image/terrazzo-stone/sb119-pepegrigio-lev-img-8037.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb119-pepegrigio-lev-img-8037.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "categoryLabelEn": "Terrazzo",
    "subcategory": "หินเทอราซโซ่",
    "subcategoryEn": "Terrazzo",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง และงานตกแต่ง",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "terrazzo-sb124-grigio-rotondo-lev-img-7676",
    "name": "SB124_GRIGIO_ROTONDO_LEV-IMG_7676",
    "nameEn": "SB124_GRIGIO_ROTONDO_LEV-IMG_7676",
    "image": "./image/terrazzo-stone/sb124-grigio-rotondo-lev-img-7676.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb124-grigio-rotondo-lev-img-7676.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "categoryLabelEn": "Terrazzo",
    "subcategory": "หินเทอราซโซ่",
    "subcategoryEn": "Terrazzo",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง และงานตกแต่ง",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "terrazzo-sb125-bruno-rotondo-lev-img-7835-1",
    "name": "SB125_BRUNO_ROTONDO_LEV-IMG_7835-1",
    "nameEn": "SB125_BRUNO_ROTONDO_LEV-IMG_7835-1",
    "image": "./image/terrazzo-stone/sb125-bruno-rotondo-lev-img-7835-1.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb125-bruno-rotondo-lev-img-7835-1.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "categoryLabelEn": "Terrazzo",
    "subcategory": "หินเทอราซโซ่",
    "subcategoryEn": "Terrazzo",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง และงานตกแต่ง",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "terrazzo-sb128-grigio-nero-lev-img-7805",
    "name": "SB128_GRIGIO_NERO_LEV-IMG_7805",
    "nameEn": "SB128_GRIGIO_NERO_LEV-IMG_7805",
    "image": "./image/terrazzo-stone/sb128-grigio-nero-lev-img-7805.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb128-grigio-nero-lev-img-7805.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "categoryLabelEn": "Terrazzo",
    "subcategory": "หินเทอราซโซ่",
    "subcategoryEn": "Terrazzo",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง และงานตกแต่ง",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "terrazzo-sb130-aggloceppo-lev-img-7660",
    "name": "SB130_AGGLOCEPPO_LEV-IMG_7660",
    "nameEn": "SB130_AGGLOCEPPO_LEV-IMG_7660",
    "image": "./image/terrazzo-stone/sb130-aggloceppo-lev-img-7660.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb130-aggloceppo-lev-img-7660.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "categoryLabelEn": "Terrazzo",
    "subcategory": "หินเทอราซโซ่",
    "subcategoryEn": "Terrazzo",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง และงานตกแต่ง",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "terrazzo-sb136-bianco-vr-lux-img-7691",
    "name": "SB136_BIANCO_VR_LUX-IMG_7691",
    "nameEn": "SB136_BIANCO_VR_LUX-IMG_7691",
    "image": "./image/terrazzo-stone/sb136-bianco-vr-lux-img-7691.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb136-bianco-vr-lux-img-7691.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "categoryLabelEn": "Terrazzo",
    "subcategory": "หินเทอราซโซ่",
    "subcategoryEn": "Terrazzo",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง และงานตกแต่ง",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "terrazzo-sb138-ghiaccio-lev-img-7754",
    "name": "SB138_GHIACCIO_LEV-IMG_7754",
    "nameEn": "SB138_GHIACCIO_LEV-IMG_7754",
    "image": "./image/terrazzo-stone/sb138-ghiaccio-lev-img-7754.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb138-ghiaccio-lev-img-7754.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "categoryLabelEn": "Terrazzo",
    "subcategory": "หินเทอราซโซ่",
    "subcategoryEn": "Terrazzo",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง และงานตกแต่ง",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "terrazzo-sb140-ca-doro-lev-img-7639",
    "name": "SB140_CA-DORO_LEV-IMG_7639",
    "nameEn": "SB140_CA-DORO_LEV-IMG_7639",
    "image": "./image/terrazzo-stone/sb140-ca-doro-lev-img-7639.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb140-ca-doro-lev-img-7639.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "categoryLabelEn": "Terrazzo",
    "subcategory": "หินเทอราซโซ่",
    "subcategoryEn": "Terrazzo",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง และงานตกแต่ง",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "terrazzo-sb141-multicolor-verona-lev-img-7778-2",
    "name": "SB141_MULTICOLOR_VERONA_LEV-IMG_7778-2",
    "nameEn": "SB141_MULTICOLOR_VERONA_LEV-IMG_7778-2",
    "image": "./image/terrazzo-stone/sb141-multicolor-verona-lev-img-7778-2.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb141-multicolor-verona-lev-img-7778-2.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "categoryLabelEn": "Terrazzo",
    "subcategory": "หินเทอราซโซ่",
    "subcategoryEn": "Terrazzo",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง และงานตกแต่ง",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "terrazzo-sb143-bianco25-lev-img-7651",
    "name": "SB143_BIANCO25_LEV-IMG_7651",
    "nameEn": "SB143_BIANCO25_LEV-IMG_7651",
    "image": "./image/terrazzo-stone/sb143-bianco25-lev-img-7651.jpg",
    "gallery": [
      "./image/terrazzo-stone/sb143-bianco25-lev-img-7651.jpg"
    ],
    "category": "terrazzo",
    "categoryLabel": "หินเทอราซโซ่",
    "categoryLabelEn": "Terrazzo",
    "subcategory": "หินเทอราซโซ่",
    "subcategoryEn": "Terrazzo",
    "price": 0,
    "unit": "รายการ",
    "description": "หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง และงานตกแต่ง",
    "descriptionEn": "Terrazzo with distinctive aggregate patterns, suitable for floors, walls and decorative surfaces."
  },
  {
    "id": "solid-1",
    "name": "Oak-1",
    "nameEn": "Oak-1",
    "image": "./image/solid-wood/oak-1.jpg",
    "gallery": [
      "./image/solid-wood/oak-1.jpg"
    ],
    "category": "solid",
    "categoryLabel": "ไม้ Solid",
    "categoryLabelEn": "Solid Wood",
    "subcategory": "ไม้ Solid",
    "subcategoryEn": "Solid Wood",
    "price": 0,
    "unit": "รายการ",
    "description": "ไม้พื้น Solid ผลิตจากไม้จริง ให้สัมผัสและลวดลายธรรมชาติ เหมาะสำหรับงานพื้นและตกแต่งภายใน",
    "descriptionEn": "Solid wood flooring made from real wood, offering natural texture and grain for floors and interiors."
  },
  {
    "id": "solid-2",
    "name": "Oak-2",
    "nameEn": "Oak-2",
    "image": "./image/solid-wood/oak-2.jpg",
    "gallery": [
      "./image/solid-wood/oak-2.jpg"
    ],
    "category": "solid",
    "categoryLabel": "ไม้ Solid",
    "categoryLabelEn": "Solid Wood",
    "subcategory": "ไม้ Solid",
    "subcategoryEn": "Solid Wood",
    "price": 0,
    "unit": "รายการ",
    "description": "ไม้พื้น Solid ผลิตจากไม้จริง ให้สัมผัสและลวดลายธรรมชาติ เหมาะสำหรับงานพื้นและตกแต่งภายใน",
    "descriptionEn": "Solid wood flooring made from real wood, offering natural texture and grain for floors and interiors."
  },
  {
    "id": "solid-3",
    "name": "Oak-3",
    "nameEn": "Oak-3",
    "image": "./image/solid-wood/oak-3.jpg",
    "gallery": [
      "./image/solid-wood/oak-3.jpg"
    ],
    "category": "solid",
    "categoryLabel": "ไม้ Solid",
    "categoryLabelEn": "Solid Wood",
    "subcategory": "ไม้ Solid",
    "subcategoryEn": "Solid Wood",
    "price": 0,
    "unit": "รายการ",
    "description": "ไม้พื้น Solid ผลิตจากไม้จริง ให้สัมผัสและลวดลายธรรมชาติ เหมาะสำหรับงานพื้นและตกแต่งภายใน",
    "descriptionEn": "Solid wood flooring made from real wood, offering natural texture and grain for floors and interiors."
  },
  {
    "id": "solid-4",
    "name": "Oak-4",
    "nameEn": "Oak-4",
    "image": "./image/solid-wood/oak-4.jpg",
    "gallery": [
      "./image/solid-wood/oak-4.jpg"
    ],
    "category": "solid",
    "categoryLabel": "ไม้ Solid",
    "categoryLabelEn": "Solid Wood",
    "subcategory": "ไม้ Solid",
    "subcategoryEn": "Solid Wood",
    "price": 0,
    "unit": "รายการ",
    "description": "ไม้พื้น Solid ผลิตจากไม้จริง ให้สัมผัสและลวดลายธรรมชาติ เหมาะสำหรับงานพื้นและตกแต่งภายใน",
    "descriptionEn": "Solid wood flooring made from real wood, offering natural texture and grain for floors and interiors."
  },
  {
    "id": "solid-5",
    "name": "Oak-5",
    "nameEn": "Oak-5",
    "image": "./image/solid-wood/oak-5.jpg",
    "gallery": [
      "./image/solid-wood/oak-5.jpg"
    ],
    "category": "solid",
    "categoryLabel": "ไม้ Solid",
    "categoryLabelEn": "Solid Wood",
    "subcategory": "ไม้ Solid",
    "subcategoryEn": "Solid Wood",
    "price": 0,
    "unit": "รายการ",
    "description": "ไม้พื้น Solid ผลิตจากไม้จริง ให้สัมผัสและลวดลายธรรมชาติ เหมาะสำหรับงานพื้นและตกแต่งภายใน",
    "descriptionEn": "Solid wood flooring made from real wood, offering natural texture and grain for floors and interiors."
  },
  {
    "id": "solid-6",
    "name": "Oak-6",
    "nameEn": "Oak-6",
    "image": "./image/solid-wood/oak-6.jpg",
    "gallery": [
      "./image/solid-wood/oak-6.jpg"
    ],
    "category": "solid",
    "categoryLabel": "ไม้ Solid",
    "categoryLabelEn": "Solid Wood",
    "subcategory": "ไม้ Solid",
    "subcategoryEn": "Solid Wood",
    "price": 0,
    "unit": "รายการ",
    "description": "ไม้พื้น Solid ผลิตจากไม้จริง ให้สัมผัสและลวดลายธรรมชาติ เหมาะสำหรับงานพื้นและตกแต่งภายใน",
    "descriptionEn": "Solid wood flooring made from real wood, offering natural texture and grain for floors and interiors."
  },
  {
    "id": "solid-7",
    "name": "Oak-7",
    "nameEn": "Oak-7",
    "image": "./image/solid-wood/oak-7.jpg",
    "gallery": [
      "./image/solid-wood/oak-7.jpg"
    ],
    "category": "solid",
    "categoryLabel": "ไม้ Solid",
    "categoryLabelEn": "Solid Wood",
    "subcategory": "ไม้ Solid",
    "subcategoryEn": "Solid Wood",
    "price": 0,
    "unit": "รายการ",
    "description": "ไม้พื้น Solid ผลิตจากไม้จริง ให้สัมผัสและลวดลายธรรมชาติ เหมาะสำหรับงานพื้นและตกแต่งภายใน",
    "descriptionEn": "Solid wood flooring made from real wood, offering natural texture and grain for floors and interiors."
  },
  {
    "id": "solid-8",
    "name": "Oak-8",
    "nameEn": "Oak-8",
    "image": "./image/solid-wood/oak-8.jpg",
    "gallery": [
      "./image/solid-wood/oak-8.jpg"
    ],
    "category": "solid",
    "categoryLabel": "ไม้ Solid",
    "categoryLabelEn": "Solid Wood",
    "subcategory": "ไม้ Solid",
    "subcategoryEn": "Solid Wood",
    "price": 0,
    "unit": "รายการ",
    "description": "ไม้พื้น Solid ผลิตจากไม้จริง ให้สัมผัสและลวดลายธรรมชาติ เหมาะสำหรับงานพื้นและตกแต่งภายใน",
    "descriptionEn": "Solid wood flooring made from real wood, offering natural texture and grain for floors and interiors."
  },
  {
    "id": "solid-9",
    "name": "Oak-9",
    "nameEn": "Oak-9",
    "image": "./image/solid-wood/oak-9.jpg",
    "gallery": [
      "./image/solid-wood/oak-9.jpg"
    ],
    "category": "solid",
    "categoryLabel": "ไม้ Solid",
    "categoryLabelEn": "Solid Wood",
    "subcategory": "ไม้ Solid",
    "subcategoryEn": "Solid Wood",
    "price": 0,
    "unit": "รายการ",
    "description": "ไม้พื้น Solid ผลิตจากไม้จริง ให้สัมผัสและลวดลายธรรมชาติ เหมาะสำหรับงานพื้นและตกแต่งภายใน",
    "descriptionEn": "Solid wood flooring made from real wood, offering natural texture and grain for floors and interiors."
  },
  {
    "id": "solid-10",
    "name": "Oak-10",
    "nameEn": "Oak-10",
    "image": "./image/solid-wood/oak-10.jpg",
    "gallery": [
      "./image/solid-wood/oak-10.jpg"
    ],
    "category": "solid",
    "categoryLabel": "ไม้ Solid",
    "categoryLabelEn": "Solid Wood",
    "subcategory": "ไม้ Solid",
    "subcategoryEn": "Solid Wood",
    "price": 0,
    "unit": "รายการ",
    "description": "ไม้พื้น Solid ผลิตจากไม้จริง ให้สัมผัสและลวดลายธรรมชาติ เหมาะสำหรับงานพื้นและตกแต่งภายใน",
    "descriptionEn": "Solid wood flooring made from real wood, offering natural texture and grain for floors and interiors."
  },
  /*{
    "id": "solid-teak-2",
    "name": "TEAK",
    "nameEn": "TEAK",
    "image": "./image/solid-wood/teak.jpg",
    "gallery": [
      "./image/solid-wood/teak.jpg"
    ],
    "category": "solid",
    "categoryLabel": "ไม้ Solid",
    "categoryLabelEn": "Solid Wood",
    "subcategory": "ไม้ Solid",
    "subcategoryEn": "Solid Wood",
    "price": 0,
    "unit": "รายการ",
    "description": "ไม้พื้น Solid ผลิตจากไม้จริง ให้สัมผัสและลวดลายธรรมชาติ เหมาะสำหรับงานพื้นและตกแต่งภายใน",
    "descriptionEn": "Solid wood flooring made from real wood, offering natural texture and grain for floors and interiors."
  },*/
  {
    "id": "furniture-kl5181310-8mm",
    "name": "KL5181310    （8mm）",
    "nameEn": "KL5181310    （8mm）",
    "image": "./image/furniture/kl5181310-8mm.jpg",
    "gallery": [
      "./image/furniture/kl5181310-8mm.jpg"
    ],
    "category": "furniture",
    "categoryLabel": "เฟอร์นิเจอร์",
    "categoryLabelEn": "Furniture",
    "subcategory": "เฟอร์นิเจอร์",
    "subcategoryEn": "Furniture",
    "price": 0,
    "unit": "รายการ",
    "description": "เฟอร์นิเจอร์สำหรับงานบ้านและงานตกแต่ง คัดเลือกดีไซน์และวัสดุให้เหมาะกับพื้นที่",
    "descriptionEn": "Furniture selected for homes and interior projects, balancing design and material suitability."
  },
  {
    "id": "furniture-kl5297422-6mm",
    "name": "KL5297422（6mm）",
    "nameEn": "KL5297422（6mm）",
    "image": "./image/furniture/kl5297422-6mm.jpg",
    "gallery": [
      "./image/furniture/kl5297422-6mm.jpg"
    ],
    "category": "furniture",
    "categoryLabel": "เฟอร์นิเจอร์",
    "categoryLabelEn": "Furniture",
    "subcategory": "เฟอร์นิเจอร์",
    "subcategoryEn": "Furniture",
    "price": 0,
    "unit": "รายการ",
    "description": "เฟอร์นิเจอร์สำหรับงานบ้านและงานตกแต่ง คัดเลือกดีไซน์และวัสดุให้เหมาะกับพื้นที่",
    "descriptionEn": "Furniture selected for homes and interior projects, balancing design and material suitability."
  },
  {
    "id": "furniture-kl5593312",
    "name": "KL5593312",
    "nameEn": "KL5593312",
    "image": "./image/furniture/kl5593312.jpg",
    "gallery": [
      "./image/furniture/kl5593312.jpg"
    ],
    "category": "furniture",
    "categoryLabel": "เฟอร์นิเจอร์",
    "categoryLabelEn": "Furniture",
    "subcategory": "เฟอร์นิเจอร์",
    "subcategoryEn": "Furniture",
    "price": 0,
    "unit": "รายการ",
    "description": "เฟอร์นิเจอร์สำหรับงานบ้านและงานตกแต่ง คัดเลือกดีไซน์และวัสดุให้เหมาะกับพื้นที่",
    "descriptionEn": "Furniture selected for homes and interior projects, balancing design and material suitability."
  },
  {
    "id": "furniture-kl5599322-8mm",
    "name": "KL5599322    （8mm）",
    "nameEn": "KL5599322    （8mm）",
    "image": "./image/furniture/kl5599322-8mm.jpg",
    "gallery": [
      "./image/furniture/kl5599322-8mm.jpg"
    ],
    "category": "furniture",
    "categoryLabel": "เฟอร์นิเจอร์",
    "categoryLabelEn": "Furniture",
    "subcategory": "เฟอร์นิเจอร์",
    "subcategoryEn": "Furniture",
    "price": 0,
    "unit": "รายการ",
    "description": "เฟอร์นิเจอร์สำหรับงานบ้านและงานตกแต่ง คัดเลือกดีไซน์และวัสดุให้เหมาะกับพื้นที่",
    "descriptionEn": "Furniture selected for homes and interior projects, balancing design and material suitability."
  },
  {
    "id": "furniture-kl5668222-8mm",
    "name": "KL5668222    （8mm）",
    "nameEn": "KL5668222    （8mm）",
    "image": "./image/furniture/kl5668222-8mm.jpg",
    "gallery": [
      "./image/furniture/kl5668222-8mm.jpg"
    ],
    "category": "furniture",
    "categoryLabel": "เฟอร์นิเจอร์",
    "categoryLabelEn": "Furniture",
    "subcategory": "เฟอร์นิเจอร์",
    "subcategoryEn": "Furniture",
    "price": 0,
    "unit": "รายการ",
    "description": "เฟอร์นิเจอร์สำหรับงานบ้านและงานตกแต่ง คัดเลือกดีไซน์และวัสดุให้เหมาะกับพื้นที่",
    "descriptionEn": "Furniture selected for homes and interior projects, balancing design and material suitability."
  },
  {
    "id": "furniture-kl5693212",
    "name": "KL5693212",
    "nameEn": "KL5693212",
    "image": "./image/furniture/kl5693212.jpg",
    "gallery": [
      "./image/furniture/kl5693212.jpg"
    ],
    "category": "furniture",
    "categoryLabel": "เฟอร์นิเจอร์",
    "categoryLabelEn": "Furniture",
    "subcategory": "เฟอร์นิเจอร์",
    "subcategoryEn": "Furniture",
    "price": 0,
    "unit": "รายการ",
    "description": "เฟอร์นิเจอร์สำหรับงานบ้านและงานตกแต่ง คัดเลือกดีไซน์และวัสดุให้เหมาะกับพื้นที่",
    "descriptionEn": "Furniture selected for homes and interior projects, balancing design and material suitability."
  },
  {
    "id": "furniture-kl5697212-6mm",
    "name": "KL5697212（6mm）",
    "nameEn": "KL5697212（6mm）",
    "image": "./image/furniture/kl5697212-6mm.jpg",
    "gallery": [
      "./image/furniture/kl5697212-6mm.jpg"
    ],
    "category": "furniture",
    "categoryLabel": "เฟอร์นิเจอร์",
    "categoryLabelEn": "Furniture",
    "subcategory": "เฟอร์นิเจอร์",
    "subcategoryEn": "Furniture",
    "price": 0,
    "unit": "รายการ",
    "description": "เฟอร์นิเจอร์สำหรับงานบ้านและงานตกแต่ง คัดเลือกดีไซน์และวัสดุให้เหมาะกับพื้นที่",
    "descriptionEn": "Furniture selected for homes and interior projects, balancing design and material suitability."
  },
  {
    "id": "furniture-rtj-tb",
    "name": "RTJ-TB",
    "nameEn": "RTJ-TB",
    "image": "./image/furniture/rtj-tb.jpg",
    "gallery": [
      "./image/furniture/rtj-tb.jpg"
    ],
    "category": "furniture",
    "categoryLabel": "เฟอร์นิเจอร์",
    "categoryLabelEn": "Furniture",
    "subcategory": "เฟอร์นิเจอร์",
    "subcategoryEn": "Furniture",
    "price": 0,
    "unit": "รายการ",
    "description": "เฟอร์นิเจอร์สำหรับงานบ้านและงานตกแต่ง คัดเลือกดีไซน์และวัสดุให้เหมาะกับพื้นที่",
    "descriptionEn": "Furniture selected for homes and interior projects, balancing design and material suitability."
  },
  {
    "id": "furniture-tb-001-2",
    "name": "tb-001-2",
    "nameEn": "tb-001-2",
    "image": "./image/furniture/tb-001-2.jpg",
    "gallery": [
      "./image/furniture/tb-001-2.jpg"
    ],
    "category": "furniture",
    "categoryLabel": "เฟอร์นิเจอร์",
    "categoryLabelEn": "Furniture",
    "subcategory": "เฟอร์นิเจอร์",
    "subcategoryEn": "Furniture",
    "price": 0,
    "unit": "รายการ",
    "description": "เฟอร์นิเจอร์สำหรับงานบ้านและงานตกแต่ง คัดเลือกดีไซน์และวัสดุให้เหมาะกับพื้นที่",
    "descriptionEn": "Furniture selected for homes and interior projects, balancing design and material suitability."
  },
  {
    "id": "furniture-tb-01t",
    "name": "TB-01T",
    "nameEn": "TB-01T",
    "image": "./image/furniture/tb-01t.jpg",
    "gallery": [
      "./image/furniture/tb-01t.jpg"
    ],
    "category": "furniture",
    "categoryLabel": "เฟอร์นิเจอร์",
    "categoryLabelEn": "Furniture",
    "subcategory": "เฟอร์นิเจอร์",
    "subcategoryEn": "Furniture",
    "price": 0,
    "unit": "รายการ",
    "description": "เฟอร์นิเจอร์สำหรับงานบ้านและงานตกแต่ง คัดเลือกดีไซน์และวัสดุให้เหมาะกับพื้นที่",
    "descriptionEn": "Furniture selected for homes and interior projects, balancing design and material suitability."
  },
  {
    "id": "furniture-01",
    "name": "เก้าอี้ 01",
    "nameEn": "Chair 01",
    "image": "./image/furniture/01-2.jpg",
    "gallery": [
      "./image/furniture/01-2.jpg"
    ],
    "category": "furniture",
    "categoryLabel": "เฟอร์นิเจอร์",
    "categoryLabelEn": "Furniture",
    "subcategory": "เฟอร์นิเจอร์",
    "subcategoryEn": "Furniture",
    "price": 0,
    "unit": "รายการ",
    "description": "เฟอร์นิเจอร์สำหรับงานบ้านและงานตกแต่ง คัดเลือกดีไซน์และวัสดุให้เหมาะกับพื้นที่",
    "descriptionEn": "Furniture selected for homes and interior projects, balancing design and material suitability."
  },
  {
    "id": "furniture-02",
    "name": "เก้าอี้ 02",
    "nameEn": "Chair 02",
    "image": "./image/furniture/02-2.jpg",
    "gallery": [
      "./image/furniture/02-2.jpg"
    ],
    "category": "furniture",
    "categoryLabel": "เฟอร์นิเจอร์",
    "categoryLabelEn": "Furniture",
    "subcategory": "เฟอร์นิเจอร์",
    "subcategoryEn": "Furniture",
    "price": 0,
    "unit": "รายการ",
    "description": "เฟอร์นิเจอร์สำหรับงานบ้านและงานตกแต่ง คัดเลือกดีไซน์และวัสดุให้เหมาะกับพื้นที่",
    "descriptionEn": "Furniture selected for homes and interior projects, balancing design and material suitability."
  },
  {
    "id": "furniture-03",
    "name": "เก้าอี้ 03",
    "nameEn": "Chair 03",
    "image": "./image/furniture/03.jpg",
    "gallery": [
      "./image/furniture/03.jpg"
    ],
    "category": "furniture",
    "categoryLabel": "เฟอร์นิเจอร์",
    "categoryLabelEn": "Furniture",
    "subcategory": "เฟอร์นิเจอร์",
    "subcategoryEn": "Furniture",
    "price": 0,
    "unit": "รายการ",
    "description": "เฟอร์นิเจอร์สำหรับงานบ้านและงานตกแต่ง คัดเลือกดีไซน์และวัสดุให้เหมาะกับพื้นที่",
    "descriptionEn": "Furniture selected for homes and interior projects, balancing design and material suitability."
  },
  {
    "id": "furniture-01-2",
    "name": "โต๊ะ01",
    "nameEn": "Table 01",
    "image": "./image/furniture/01.jpg",
    "gallery": [
      "./image/furniture/01.jpg"
    ],
    "category": "furniture",
    "categoryLabel": "เฟอร์นิเจอร์",
    "categoryLabelEn": "Furniture",
    "subcategory": "เฟอร์นิเจอร์",
    "subcategoryEn": "Furniture",
    "price": 0,
    "unit": "รายการ",
    "description": "เฟอร์นิเจอร์สำหรับงานบ้านและงานตกแต่ง คัดเลือกดีไซน์และวัสดุให้เหมาะกับพื้นที่",
    "descriptionEn": "Furniture selected for homes and interior projects, balancing design and material suitability."
  },
  {
    "id": "furniture-02-2",
    "name": "โต๊ะ02",
    "nameEn": "Table 02",
    "image": "./image/furniture/02.jpg",
    "gallery": [
      "./image/furniture/02.jpg"
    ],
    "category": "furniture",
    "categoryLabel": "เฟอร์นิเจอร์",
    "categoryLabelEn": "Furniture",
    "subcategory": "เฟอร์นิเจอร์",
    "subcategoryEn": "Furniture",
    "price": 0,
    "unit": "รายการ",
    "description": "เฟอร์นิเจอร์สำหรับงานบ้านและงานตกแต่ง คัดเลือกดีไซน์และวัสดุให้เหมาะกับพื้นที่",
    "descriptionEn": "Furniture selected for homes and interior projects, balancing design and material suitability."
  },
  {
    "id": "furniture-03-2",
    "name": "โต๊ะ03",
    "nameEn": "Table 03",
    "image": "./image/furniture/03-2.jpg",
    "gallery": [
      "./image/furniture/03-2.jpg"
    ],
    "category": "furniture",
    "categoryLabel": "เฟอร์นิเจอร์",
    "categoryLabelEn": "Furniture",
    "subcategory": "เฟอร์นิเจอร์",
    "subcategoryEn": "Furniture",
    "price": 0,
    "unit": "รายการ",
    "description": "เฟอร์นิเจอร์สำหรับงานบ้านและงานตกแต่ง คัดเลือกดีไซน์และวัสดุให้เหมาะกับพื้นที่",
    "descriptionEn": "Furniture selected for homes and interior projects, balancing design and material suitability."
  },
  {
    "id": "furniture",
    "name": "โต๊ะกลางดีสนี่",
    "nameEn": "Disney Coffee Table",
    "image": "./image/furniture/image.jpg",
    "gallery": [
      "./image/furniture/image.jpg"
    ],
    "category": "furniture",
    "categoryLabel": "เฟอร์นิเจอร์",
    "categoryLabelEn": "Furniture",
    "subcategory": "เฟอร์นิเจอร์",
    "subcategoryEn": "Furniture",
    "price": 0,
    "unit": "รายการ",
    "description": "เฟอร์นิเจอร์สำหรับงานบ้านและงานตกแต่ง คัดเลือกดีไซน์และวัสดุให้เหมาะกับพื้นที่",
    "descriptionEn": "Furniture selected for homes and interior projects, balancing design and material suitability."
  },
  {
    "id": "ceramic-ct2-msd8830p",
    "name": "CT2-MSD8830P",
    "nameEn": "CT2-MSD8830P",
    "image": "./image/marble-tiles/ct2-msd8830p.jpg",
    "gallery": [
      "./image/marble-tiles/ct2-msd8830p.jpg"
    ],
    "category": "ceramic",
    "categoryLabel": "กระเบื้องเซรามิก",
    "categoryLabelEn": "Ceramic Tile",
    "subcategory": "กระเบื้องเซรามิก",
    "subcategoryEn": "Ceramic Tile",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องเซรามิกสำหรับพื้นและผนัง มีรูปแบบหลากหลาย เหมาะกับงานตกแต่งหลายสไตล์",
    "descriptionEn": "Ceramic tiles for floors and walls, available in a variety of styles for different interiors."
  },
  {
    "id": "ceramic-ct2-msd8836p",
    "name": "CT2-MSD8836P",
    "nameEn": "CT2-MSD8836P",
    "image": "./image/marble-tiles/ct2-msd8836p.jpg",
    "gallery": [
      "./image/marble-tiles/ct2-msd8836p.jpg"
    ],
    "category": "ceramic",
    "categoryLabel": "กระเบื้องเซรามิก",
    "categoryLabelEn": "Ceramic Tile",
    "subcategory": "กระเบื้องเซรามิก",
    "subcategoryEn": "Ceramic Tile",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องเซรามิกสำหรับพื้นและผนัง มีรูปแบบหลากหลาย เหมาะกับงานตกแต่งหลายสไตล์",
    "descriptionEn": "Ceramic tiles for floors and walls, available in a variety of styles for different interiors."
  },
  {
    "id": "ceramic-ct2-msd8880",
    "name": "CT2-MSD8880",
    "nameEn": "CT2-MSD8880",
    "image": "./image/marble-tiles/ct2-msd8880.jpg",
    "gallery": [
      "./image/marble-tiles/ct2-msd8880.jpg"
    ],
    "category": "ceramic",
    "categoryLabel": "กระเบื้องเซรามิก",
    "categoryLabelEn": "Ceramic Tile",
    "subcategory": "กระเบื้องเซรามิก",
    "subcategoryEn": "Ceramic Tile",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องเซรามิกสำหรับพื้นและผนัง มีรูปแบบหลากหลาย เหมาะกับงานตกแต่งหลายสไตล์",
    "descriptionEn": "Ceramic tiles for floors and walls, available in a variety of styles for different interiors."
  },
  {
    "id": "ceramic-ct6615-600x600",
    "name": "CT6615 600x600",
    "nameEn": "CT6615 600x600",
    "image": "./image/marble-tiles/ct6615-600x600.jpg",
    "gallery": [
      "./image/marble-tiles/ct6615-600x600.jpg"
    ],
    "category": "ceramic",
    "categoryLabel": "กระเบื้องเซรามิก",
    "categoryLabelEn": "Ceramic Tile",
    "subcategory": "กระเบื้องเซรามิก",
    "subcategoryEn": "Ceramic Tile",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องเซรามิกสำหรับพื้นและผนัง มีรูปแบบหลากหลาย เหมาะกับงานตกแต่งหลายสไตล์",
    "descriptionEn": "Ceramic tiles for floors and walls, available in a variety of styles for different interiors."
  },
  {
    "id": "ceramic-ct6616-600x600",
    "name": "CT6616 600x600",
    "nameEn": "CT6616 600x600",
    "image": "./image/marble-tiles/ct6616-600x600.jpg",
    "gallery": [
      "./image/marble-tiles/ct6616-600x600.jpg"
    ],
    "category": "ceramic",
    "categoryLabel": "กระเบื้องเซรามิก",
    "categoryLabelEn": "Ceramic Tile",
    "subcategory": "กระเบื้องเซรามิก",
    "subcategoryEn": "Ceramic Tile",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องเซรามิกสำหรับพื้นและผนัง มีรูปแบบหลากหลาย เหมาะกับงานตกแต่งหลายสไตล์",
    "descriptionEn": "Ceramic tiles for floors and walls, available in a variety of styles for different interiors."
  },
  {
    "id": "ceramic-ct6618-600x600",
    "name": "CT6618 600x600",
    "nameEn": "CT6618 600x600",
    "image": "./image/marble-tiles/ct6618-600x600.jpg",
    "gallery": [
      "./image/marble-tiles/ct6618-600x600.jpg"
    ],
    "category": "ceramic",
    "categoryLabel": "กระเบื้องเซรามิก",
    "categoryLabelEn": "Ceramic Tile",
    "subcategory": "กระเบื้องเซรามิก",
    "subcategoryEn": "Ceramic Tile",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องเซรามิกสำหรับพื้นและผนัง มีรูปแบบหลากหลาย เหมาะกับงานตกแต่งหลายสไตล์",
    "descriptionEn": "Ceramic tiles for floors and walls, available in a variety of styles for different interiors."
  },
  {
    "id": "ceramic-ct6619-600x600",
    "name": "CT6619 600x600",
    "nameEn": "CT6619 600x600",
    "image": "./image/marble-tiles/ct6619-600x600.jpg",
    "gallery": [
      "./image/marble-tiles/ct6619-600x600.jpg"
    ],
    "category": "ceramic",
    "categoryLabel": "กระเบื้องเซรามิก",
    "categoryLabelEn": "Ceramic Tile",
    "subcategory": "กระเบื้องเซรามิก",
    "subcategoryEn": "Ceramic Tile",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องเซรามิกสำหรับพื้นและผนัง มีรูปแบบหลากหลาย เหมาะกับงานตกแต่งหลายสไตล์",
    "descriptionEn": "Ceramic tiles for floors and walls, available in a variety of styles for different interiors."
  },
  {
    "id": "ceramic-ct8819",
    "name": "CT8819",
    "nameEn": "CT8819",
    "image": "./image/marble-tiles/ct8819.jpg",
    "gallery": [
      "./image/marble-tiles/ct8819.jpg"
    ],
    "category": "ceramic",
    "categoryLabel": "กระเบื้องเซรามิก",
    "categoryLabelEn": "Ceramic Tile",
    "subcategory": "กระเบื้องเซรามิก",
    "subcategoryEn": "Ceramic Tile",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องเซรามิกสำหรับพื้นและผนัง มีรูปแบบหลากหลาย เหมาะกับงานตกแต่งหลายสไตล์",
    "descriptionEn": "Ceramic tiles for floors and walls, available in a variety of styles for different interiors."
  },
  {
    "id": "ceramic-ctcds8153",
    "name": "CTCDS8153",
    "nameEn": "CTCDS8153",
    "image": "./image/marble-tiles/ctcds8153.jpg",
    "gallery": [
      "./image/marble-tiles/ctcds8153.jpg"
    ],
    "category": "ceramic",
    "categoryLabel": "กระเบื้องเซรามิก",
    "categoryLabelEn": "Ceramic Tile",
    "subcategory": "กระเบื้องเซรามิก",
    "subcategoryEn": "Ceramic Tile",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องเซรามิกสำหรับพื้นและผนัง มีรูปแบบหลากหลาย เหมาะกับงานตกแต่งหลายสไตล์",
    "descriptionEn": "Ceramic tiles for floors and walls, available in a variety of styles for different interiors."
  },
  {
    "id": "ceramic-cthd6304",
    "name": "CTHD6304",
    "nameEn": "CTHD6304",
    "image": "./image/marble-tiles/cthd6304.jpg",
    "gallery": [
      "./image/marble-tiles/cthd6304.jpg"
    ],
    "category": "ceramic",
    "categoryLabel": "กระเบื้องเซรามิก",
    "categoryLabelEn": "Ceramic Tile",
    "subcategory": "กระเบื้องเซรามิก",
    "subcategoryEn": "Ceramic Tile",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องเซรามิกสำหรับพื้นและผนัง มีรูปแบบหลากหลาย เหมาะกับงานตกแต่งหลายสไตล์",
    "descriptionEn": "Ceramic tiles for floors and walls, available in a variety of styles for different interiors."
  },
  {
    "id": "ceramic-cthd6305",
    "name": "CTHD6305",
    "nameEn": "CTHD6305",
    "image": "./image/marble-tiles/cthd6305.jpg",
    "gallery": [
      "./image/marble-tiles/cthd6305.jpg"
    ],
    "category": "ceramic",
    "categoryLabel": "กระเบื้องเซรามิก",
    "categoryLabelEn": "Ceramic Tile",
    "subcategory": "กระเบื้องเซรามิก",
    "subcategoryEn": "Ceramic Tile",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องเซรามิกสำหรับพื้นและผนัง มีรูปแบบหลากหลาย เหมาะกับงานตกแต่งหลายสไตล์",
    "descriptionEn": "Ceramic tiles for floors and walls, available in a variety of styles for different interiors."
  },
  {
    "id": "ceramic-cthd6666",
    "name": "CTHD6666",
    "nameEn": "CTHD6666",
    "image": "./image/marble-tiles/cthd6666.jpg",
    "gallery": [
      "./image/marble-tiles/cthd6666.jpg"
    ],
    "category": "ceramic",
    "categoryLabel": "กระเบื้องเซรามิก",
    "categoryLabelEn": "Ceramic Tile",
    "subcategory": "กระเบื้องเซรามิก",
    "subcategoryEn": "Ceramic Tile",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องเซรามิกสำหรับพื้นและผนัง มีรูปแบบหลากหลาย เหมาะกับงานตกแต่งหลายสไตล์",
    "descriptionEn": "Ceramic tiles for floors and walls, available in a variety of styles for different interiors."
  },
  {
    "id": "ceramic-cthd8809",
    "name": "CTHD8809",
    "nameEn": "CTHD8809",
    "image": "./image/marble-tiles/cthd8809.jpg",
    "gallery": [
      "./image/marble-tiles/cthd8809.jpg"
    ],
    "category": "ceramic",
    "categoryLabel": "กระเบื้องเซรามิก",
    "categoryLabelEn": "Ceramic Tile",
    "subcategory": "กระเบื้องเซรามิก",
    "subcategoryEn": "Ceramic Tile",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องเซรามิกสำหรับพื้นและผนัง มีรูปแบบหลากหลาย เหมาะกับงานตกแต่งหลายสไตล์",
    "descriptionEn": "Ceramic tiles for floors and walls, available in a variety of styles for different interiors."
  },
  {
    "id": "ceramic-ctk6681a",
    "name": "CTK6681A",
    "nameEn": "CTK6681A",
    "image": "./image/marble-tiles/ctk6681a.jpg",
    "gallery": [
      "./image/marble-tiles/ctk6681a.jpg"
    ],
    "category": "ceramic",
    "categoryLabel": "กระเบื้องเซรามิก",
    "categoryLabelEn": "Ceramic Tile",
    "subcategory": "กระเบื้องเซรามิก",
    "subcategoryEn": "Ceramic Tile",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องเซรามิกสำหรับพื้นและผนัง มีรูปแบบหลากหลาย เหมาะกับงานตกแต่งหลายสไตล์",
    "descriptionEn": "Ceramic tiles for floors and walls, available in a variety of styles for different interiors."
  },
  {
    "id": "ceramic-ctk6681b",
    "name": "CTK6681B",
    "nameEn": "CTK6681B",
    "image": "./image/marble-tiles/ctk6681b.jpg",
    "gallery": [
      "./image/marble-tiles/ctk6681b.jpg"
    ],
    "category": "ceramic",
    "categoryLabel": "กระเบื้องเซรามิก",
    "categoryLabelEn": "Ceramic Tile",
    "subcategory": "กระเบื้องเซรามิก",
    "subcategoryEn": "Ceramic Tile",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องเซรามิกสำหรับพื้นและผนัง มีรูปแบบหลากหลาย เหมาะกับงานตกแต่งหลายสไตล์",
    "descriptionEn": "Ceramic tiles for floors and walls, available in a variety of styles for different interiors."
  },
  {
    "id": "ceramic-ctk6681c",
    "name": "CTK6681C",
    "nameEn": "CTK6681C",
    "image": "./image/marble-tiles/ctk6681c.jpg",
    "gallery": [
      "./image/marble-tiles/ctk6681c.jpg"
    ],
    "category": "ceramic",
    "categoryLabel": "กระเบื้องเซรามิก",
    "categoryLabelEn": "Ceramic Tile",
    "subcategory": "กระเบื้องเซรามิก",
    "subcategoryEn": "Ceramic Tile",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องเซรามิกสำหรับพื้นและผนัง มีรูปแบบหลากหลาย เหมาะกับงานตกแต่งหลายสไตล์",
    "descriptionEn": "Ceramic tiles for floors and walls, available in a variety of styles for different interiors."
  },
  {
    "id": "ceramic-ctk6683a",
    "name": "CTK6683A",
    "nameEn": "CTK6683A",
    "image": "./image/marble-tiles/ctk6683a.jpg",
    "gallery": [
      "./image/marble-tiles/ctk6683a.jpg"
    ],
    "category": "ceramic",
    "categoryLabel": "กระเบื้องเซรามิก",
    "categoryLabelEn": "Ceramic Tile",
    "subcategory": "กระเบื้องเซรามิก",
    "subcategoryEn": "Ceramic Tile",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องเซรามิกสำหรับพื้นและผนัง มีรูปแบบหลากหลาย เหมาะกับงานตกแต่งหลายสไตล์",
    "descriptionEn": "Ceramic tiles for floors and walls, available in a variety of styles for different interiors."
  },
  {
    "id": "ceramic-ctk6683b",
    "name": "CTK6683B",
    "nameEn": "CTK6683B",
    "image": "./image/marble-tiles/ctk6683b.jpg",
    "gallery": [
      "./image/marble-tiles/ctk6683b.jpg"
    ],
    "category": "ceramic",
    "categoryLabel": "กระเบื้องเซรามิก",
    "categoryLabelEn": "Ceramic Tile",
    "subcategory": "กระเบื้องเซรามิก",
    "subcategoryEn": "Ceramic Tile",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องเซรามิกสำหรับพื้นและผนัง มีรูปแบบหลากหลาย เหมาะกับงานตกแต่งหลายสไตล์",
    "descriptionEn": "Ceramic tiles for floors and walls, available in a variety of styles for different interiors."
  },
  {
    "id": "ceramic-ctk6683c",
    "name": "CTK6683C",
    "nameEn": "CTK6683C",
    "image": "./image/marble-tiles/ctk6683c.jpg",
    "gallery": [
      "./image/marble-tiles/ctk6683c.jpg"
    ],
    "category": "ceramic",
    "categoryLabel": "กระเบื้องเซรามิก",
    "categoryLabelEn": "Ceramic Tile",
    "subcategory": "กระเบื้องเซรามิก",
    "subcategoryEn": "Ceramic Tile",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องเซรามิกสำหรับพื้นและผนัง มีรูปแบบหลากหลาย เหมาะกับงานตกแต่งหลายสไตล์",
    "descriptionEn": "Ceramic tiles for floors and walls, available in a variety of styles for different interiors."
  },
  {
    "id": "ceramic-ctk6683d",
    "name": "CTK6683D",
    "nameEn": "CTK6683D",
    "image": "./image/marble-tiles/ctk6683d.jpg",
    "gallery": [
      "./image/marble-tiles/ctk6683d.jpg"
    ],
    "category": "ceramic",
    "categoryLabel": "กระเบื้องเซรามิก",
    "categoryLabelEn": "Ceramic Tile",
    "subcategory": "กระเบื้องเซรามิก",
    "subcategoryEn": "Ceramic Tile",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องเซรามิกสำหรับพื้นและผนัง มีรูปแบบหลากหลาย เหมาะกับงานตกแต่งหลายสไตล์",
    "descriptionEn": "Ceramic tiles for floors and walls, available in a variety of styles for different interiors."
  },
  {
    "id": "ceramic-ctk6684a",
    "name": "CTK6684A",
    "nameEn": "CTK6684A",
    "image": "./image/marble-tiles/ctk6684a.jpg",
    "gallery": [
      "./image/marble-tiles/ctk6684a.jpg"
    ],
    "category": "ceramic",
    "categoryLabel": "กระเบื้องเซรามิก",
    "categoryLabelEn": "Ceramic Tile",
    "subcategory": "กระเบื้องเซรามิก",
    "subcategoryEn": "Ceramic Tile",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องเซรามิกสำหรับพื้นและผนัง มีรูปแบบหลากหลาย เหมาะกับงานตกแต่งหลายสไตล์",
    "descriptionEn": "Ceramic tiles for floors and walls, available in a variety of styles for different interiors."
  },
  {
    "id": "ceramic-ctk6684b",
    "name": "CTK6684B",
    "nameEn": "CTK6684B",
    "image": "./image/marble-tiles/ctk6684b.jpg",
    "gallery": [
      "./image/marble-tiles/ctk6684b.jpg"
    ],
    "category": "ceramic",
    "categoryLabel": "กระเบื้องเซรามิก",
    "categoryLabelEn": "Ceramic Tile",
    "subcategory": "กระเบื้องเซรามิก",
    "subcategoryEn": "Ceramic Tile",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องเซรามิกสำหรับพื้นและผนัง มีรูปแบบหลากหลาย เหมาะกับงานตกแต่งหลายสไตล์",
    "descriptionEn": "Ceramic tiles for floors and walls, available in a variety of styles for different interiors."
  },
  {
    "id": "ceramic-ctk6684c",
    "name": "CTK6684C",
    "nameEn": "CTK6684C",
    "image": "./image/marble-tiles/ctk6684c.jpg",
    "gallery": [
      "./image/marble-tiles/ctk6684c.jpg"
    ],
    "category": "ceramic",
    "categoryLabel": "กระเบื้องเซรามิก",
    "categoryLabelEn": "Ceramic Tile",
    "subcategory": "กระเบื้องเซรามิก",
    "subcategoryEn": "Ceramic Tile",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องเซรามิกสำหรับพื้นและผนัง มีรูปแบบหลากหลาย เหมาะกับงานตกแต่งหลายสไตล์",
    "descriptionEn": "Ceramic tiles for floors and walls, available in a variety of styles for different interiors."
  },
  {
    "id": "ceramic-ctk6684d",
    "name": "CTK6684D",
    "nameEn": "CTK6684D",
    "image": "./image/marble-tiles/ctk6684d.jpg",
    "gallery": [
      "./image/marble-tiles/ctk6684d.jpg"
    ],
    "category": "ceramic",
    "categoryLabel": "กระเบื้องเซรามิก",
    "categoryLabelEn": "Ceramic Tile",
    "subcategory": "กระเบื้องเซรามิก",
    "subcategoryEn": "Ceramic Tile",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องเซรามิกสำหรับพื้นและผนัง มีรูปแบบหลากหลาย เหมาะกับงานตกแต่งหลายสไตล์",
    "descriptionEn": "Ceramic tiles for floors and walls, available in a variety of styles for different interiors."
  },
  {
    "id": "ceramic-ctk6685a",
    "name": "CTK6685A",
    "nameEn": "CTK6685A",
    "image": "./image/marble-tiles/ctk6685a.jpg",
    "gallery": [
      "./image/marble-tiles/ctk6685a.jpg"
    ],
    "category": "ceramic",
    "categoryLabel": "กระเบื้องเซรามิก",
    "categoryLabelEn": "Ceramic Tile",
    "subcategory": "กระเบื้องเซรามิก",
    "subcategoryEn": "Ceramic Tile",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องเซรามิกสำหรับพื้นและผนัง มีรูปแบบหลากหลาย เหมาะกับงานตกแต่งหลายสไตล์",
    "descriptionEn": "Ceramic tiles for floors and walls, available in a variety of styles for different interiors."
  },
  {
    "id": "ceramic-ctk6685b",
    "name": "CTK6685B",
    "nameEn": "CTK6685B",
    "image": "./image/marble-tiles/ctk6685b.jpg",
    "gallery": [
      "./image/marble-tiles/ctk6685b.jpg"
    ],
    "category": "ceramic",
    "categoryLabel": "กระเบื้องเซรามิก",
    "categoryLabelEn": "Ceramic Tile",
    "subcategory": "กระเบื้องเซรามิก",
    "subcategoryEn": "Ceramic Tile",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องเซรามิกสำหรับพื้นและผนัง มีรูปแบบหลากหลาย เหมาะกับงานตกแต่งหลายสไตล์",
    "descriptionEn": "Ceramic tiles for floors and walls, available in a variety of styles for different interiors."
  },
  {
    "id": "ceramic-ctk6685c",
    "name": "CTK6685C",
    "nameEn": "CTK6685C",
    "image": "./image/marble-tiles/ctk6685c.jpg",
    "gallery": [
      "./image/marble-tiles/ctk6685c.jpg"
    ],
    "category": "ceramic",
    "categoryLabel": "กระเบื้องเซรามิก",
    "categoryLabelEn": "Ceramic Tile",
    "subcategory": "กระเบื้องเซรามิก",
    "subcategoryEn": "Ceramic Tile",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องเซรามิกสำหรับพื้นและผนัง มีรูปแบบหลากหลาย เหมาะกับงานตกแต่งหลายสไตล์",
    "descriptionEn": "Ceramic tiles for floors and walls, available in a variety of styles for different interiors."
  },
  {
    "id": "ceramic-ctk6685d",
    "name": "CTK6685D",
    "nameEn": "CTK6685D",
    "image": "./image/marble-tiles/ctk6685d.jpg",
    "gallery": [
      "./image/marble-tiles/ctk6685d.jpg"
    ],
    "category": "ceramic",
    "categoryLabel": "กระเบื้องเซรามิก",
    "categoryLabelEn": "Ceramic Tile",
    "subcategory": "กระเบื้องเซรามิก",
    "subcategoryEn": "Ceramic Tile",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องเซรามิกสำหรับพื้นและผนัง มีรูปแบบหลากหลาย เหมาะกับงานตกแต่งหลายสไตล์",
    "descriptionEn": "Ceramic tiles for floors and walls, available in a variety of styles for different interiors."
  },
  {
    "id": "ceramic-ctk6687a",
    "name": "CTK6687A",
    "nameEn": "CTK6687A",
    "image": "./image/marble-tiles/ctk6687a.jpg",
    "gallery": [
      "./image/marble-tiles/ctk6687a.jpg"
    ],
    "category": "ceramic",
    "categoryLabel": "กระเบื้องเซรามิก",
    "categoryLabelEn": "Ceramic Tile",
    "subcategory": "กระเบื้องเซรามิก",
    "subcategoryEn": "Ceramic Tile",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องเซรามิกสำหรับพื้นและผนัง มีรูปแบบหลากหลาย เหมาะกับงานตกแต่งหลายสไตล์",
    "descriptionEn": "Ceramic tiles for floors and walls, available in a variety of styles for different interiors."
  },
  {
    "id": "ceramic-ctk6687b",
    "name": "CTK6687B",
    "nameEn": "CTK6687B",
    "image": "./image/marble-tiles/ctk6687b.jpg",
    "gallery": [
      "./image/marble-tiles/ctk6687b.jpg"
    ],
    "category": "ceramic",
    "categoryLabel": "กระเบื้องเซรามิก",
    "categoryLabelEn": "Ceramic Tile",
    "subcategory": "กระเบื้องเซรามิก",
    "subcategoryEn": "Ceramic Tile",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องเซรามิกสำหรับพื้นและผนัง มีรูปแบบหลากหลาย เหมาะกับงานตกแต่งหลายสไตล์",
    "descriptionEn": "Ceramic tiles for floors and walls, available in a variety of styles for different interiors."
  },
  {
    "id": "ceramic-ctk6687c",
    "name": "CTK6687C",
    "nameEn": "CTK6687C",
    "image": "./image/marble-tiles/ctk6687c.jpg",
    "gallery": [
      "./image/marble-tiles/ctk6687c.jpg"
    ],
    "category": "ceramic",
    "categoryLabel": "กระเบื้องเซรามิก",
    "categoryLabelEn": "Ceramic Tile",
    "subcategory": "กระเบื้องเซรามิก",
    "subcategoryEn": "Ceramic Tile",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องเซรามิกสำหรับพื้นและผนัง มีรูปแบบหลากหลาย เหมาะกับงานตกแต่งหลายสไตล์",
    "descriptionEn": "Ceramic tiles for floors and walls, available in a variety of styles for different interiors."
  },
  {
    "id": "ceramic-ctlm14",
    "name": "CTLM14",
    "nameEn": "CTLM14",
    "image": "./image/marble-tiles/ctlm14.jpg",
    "gallery": [
      "./image/marble-tiles/ctlm14.jpg"
    ],
    "category": "ceramic",
    "categoryLabel": "กระเบื้องเซรามิก",
    "categoryLabelEn": "Ceramic Tile",
    "subcategory": "กระเบื้องเซรามิก",
    "subcategoryEn": "Ceramic Tile",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องเซรามิกสำหรับพื้นและผนัง มีรูปแบบหลากหลาย เหมาะกับงานตกแต่งหลายสไตล์",
    "descriptionEn": "Ceramic tiles for floors and walls, available in a variety of styles for different interiors."
  },
  {
    "id": "ceramic-ctlm15",
    "name": "CTLM15",
    "nameEn": "CTLM15",
    "image": "./image/marble-tiles/ctlm15.jpg",
    "gallery": [
      "./image/marble-tiles/ctlm15.jpg"
    ],
    "category": "ceramic",
    "categoryLabel": "กระเบื้องเซรามิก",
    "categoryLabelEn": "Ceramic Tile",
    "subcategory": "กระเบื้องเซรามิก",
    "subcategoryEn": "Ceramic Tile",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องเซรามิกสำหรับพื้นและผนัง มีรูปแบบหลากหลาย เหมาะกับงานตกแต่งหลายสไตล์",
    "descriptionEn": "Ceramic tiles for floors and walls, available in a variety of styles for different interiors."
  },
  {
    "id": "ceramic-ctlm16",
    "name": "CTLM16",
    "nameEn": "CTLM16",
    "image": "./image/marble-tiles/ctlm16.jpg",
    "gallery": [
      "./image/marble-tiles/ctlm16.jpg"
    ],
    "category": "ceramic",
    "categoryLabel": "กระเบื้องเซรามิก",
    "categoryLabelEn": "Ceramic Tile",
    "subcategory": "กระเบื้องเซรามิก",
    "subcategoryEn": "Ceramic Tile",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องเซรามิกสำหรับพื้นและผนัง มีรูปแบบหลากหลาย เหมาะกับงานตกแต่งหลายสไตล์",
    "descriptionEn": "Ceramic tiles for floors and walls, available in a variety of styles for different interiors."
  },
  {
    "id": "ceramic-ctlm17",
    "name": "CTLM17",
    "nameEn": "CTLM17",
    "image": "./image/marble-tiles/ctlm17.jpg",
    "gallery": [
      "./image/marble-tiles/ctlm17.jpg"
    ],
    "category": "ceramic",
    "categoryLabel": "กระเบื้องเซรามิก",
    "categoryLabelEn": "Ceramic Tile",
    "subcategory": "กระเบื้องเซรามิก",
    "subcategoryEn": "Ceramic Tile",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องเซรามิกสำหรับพื้นและผนัง มีรูปแบบหลากหลาย เหมาะกับงานตกแต่งหลายสไตล์",
    "descriptionEn": "Ceramic tiles for floors and walls, available in a variety of styles for different interiors."
  },
  {
    "id": "ceramic-ctlm18",
    "name": "CTLM18",
    "nameEn": "CTLM18",
    "image": "./image/marble-tiles/ctlm18.jpg",
    "gallery": [
      "./image/marble-tiles/ctlm18.jpg"
    ],
    "category": "ceramic",
    "categoryLabel": "กระเบื้องเซรามิก",
    "categoryLabelEn": "Ceramic Tile",
    "subcategory": "กระเบื้องเซรามิก",
    "subcategoryEn": "Ceramic Tile",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องเซรามิกสำหรับพื้นและผนัง มีรูปแบบหลากหลาย เหมาะกับงานตกแต่งหลายสไตล์",
    "descriptionEn": "Ceramic tiles for floors and walls, available in a variety of styles for different interiors."
  },
  {
    "id": "ceramic-ctlm19",
    "name": "CTLM19",
    "nameEn": "CTLM19",
    "image": "./image/marble-tiles/ctlm19.jpg",
    "gallery": [
      "./image/marble-tiles/ctlm19.jpg"
    ],
    "category": "ceramic",
    "categoryLabel": "กระเบื้องเซรามิก",
    "categoryLabelEn": "Ceramic Tile",
    "subcategory": "กระเบื้องเซรามิก",
    "subcategoryEn": "Ceramic Tile",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องเซรามิกสำหรับพื้นและผนัง มีรูปแบบหลากหลาย เหมาะกับงานตกแต่งหลายสไตล์",
    "descriptionEn": "Ceramic tiles for floors and walls, available in a variety of styles for different interiors."
  },
  {
    "id": "ceramic-ctlm20",
    "name": "CTLM20",
    "nameEn": "CTLM20",
    "image": "./image/marble-tiles/ctlm20.jpg",
    "gallery": [
      "./image/marble-tiles/ctlm20.jpg"
    ],
    "category": "ceramic",
    "categoryLabel": "กระเบื้องเซรามิก",
    "categoryLabelEn": "Ceramic Tile",
    "subcategory": "กระเบื้องเซรามิก",
    "subcategoryEn": "Ceramic Tile",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องเซรามิกสำหรับพื้นและผนัง มีรูปแบบหลากหลาย เหมาะกับงานตกแต่งหลายสไตล์",
    "descriptionEn": "Ceramic tiles for floors and walls, available in a variety of styles for different interiors."
  },
  {
    "id": "ceramic-ctlm21",
    "name": "CTLM21",
    "nameEn": "CTLM21",
    "image": "./image/marble-tiles/ctlm21.jpg",
    "gallery": [
      "./image/marble-tiles/ctlm21.jpg"
    ],
    "category": "ceramic",
    "categoryLabel": "กระเบื้องเซรามิก",
    "categoryLabelEn": "Ceramic Tile",
    "subcategory": "กระเบื้องเซรามิก",
    "subcategoryEn": "Ceramic Tile",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องเซรามิกสำหรับพื้นและผนัง มีรูปแบบหลากหลาย เหมาะกับงานตกแต่งหลายสไตล์",
    "descriptionEn": "Ceramic tiles for floors and walls, available in a variety of styles for different interiors."
  },
  {
    "id": "ceramic-ctt813",
    "name": "CTT813",
    "nameEn": "CTT813",
    "image": "./image/marble-tiles/ctt813.jpg",
    "gallery": [
      "./image/marble-tiles/ctt813.jpg"
    ],
    "category": "ceramic",
    "categoryLabel": "กระเบื้องเซรามิก",
    "categoryLabelEn": "Ceramic Tile",
    "subcategory": "กระเบื้องเซรามิก",
    "subcategoryEn": "Ceramic Tile",
    "price": 0,
    "unit": "รายการ",
    "description": "กระเบื้องเซรามิกสำหรับพื้นและผนัง มีรูปแบบหลากหลาย เหมาะกับงานตกแต่งหลายสไตล์",
    "descriptionEn": "Ceramic tiles for floors and walls, available in a variety of styles for different interiors."
  },
  {
    "id": "granite-watermarked-001",
    "name": "G655 Dark Flower-ดาร์ก ฟลาวเวอร์",
    "image": "./image/granite-watermark/g655-dark-flower.jpg",
    "gallery": [
      "./image/granite-watermark/g655-dark-flower.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "G655 Dark Flower",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  },
  {
    "id": "granite-watermarked-002",
    "name": "TG029 Black Africa- ดำอาฟริกา",
    "image": "./image/granite-watermark/tg029-black-africa.jpg",
    "gallery": [
      "./image/granite-watermark/tg029-black-africa.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "TG029 Black Africa",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  },
  {
    "id": "granite-watermarked-003",
    "name": "G911 Red Tiger-แดงลายเสีอ",
    "image": "./image/granite-watermark/g911-red-tiger.jpg",
    "gallery": [
      "./image/granite-watermark/g911-red-tiger.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "G911 Red Tiger",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  },
  {
    "id": "granite-watermarked-004",
    "name": "TG052 White G-ไวท์จี",
    "image": "./image/granite-watermark/tg052-white-g.jpg",
    "gallery": [
      "./image/granite-watermark/tg052-white-g.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "TG052 White G",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  },
  {
    "id": "granite-watermarked-005",
    "name": "GL1000 Absolue Black-แอ๊บโซลูทแบล็ค",
    "image": "./image/granite-watermark/gl1000-absolue-black.jpg",
    "gallery": [
      "./image/granite-watermark/gl1000-absolue-black.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "GL1000 Absolute Black",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  },
  {
    "id": "granite-watermarked-006",
    "name": "TF101 Top Black-ท็อปแบล็ค",
    "image": "./image/granite-watermark/tf101-top-black.jpg",
    "gallery": [
      "./image/granite-watermark/tf101-top-black.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "TF101 Top Black",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  },
  {
    "id": "granite-watermarked-007",
    "name": "G654 Black Dot-ดำลายจุด",
    "image": "./image/granite-watermark/g654-black-dot.jpg",
    "gallery": [
      "./image/granite-watermark/g654-black-dot.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "G654 Black Dot",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  },
  {
    "id": "granite-watermarked-008",
    "name": "G603 White Snow-ขาวเกร็ดหิมะ",
    "image": "./image/granite-watermark/g603-white-snow.jpg",
    "gallery": [
      "./image/granite-watermark/g603-white-snow.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "G603 White Snow",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  },
  {
    "id": "granite-watermarked-009",
    "name": "G602 White Lotus-ไวท์โลตัส",
    "image": "./image/granite-watermark/g602-white-lotus.jpg",
    "gallery": [
      "./image/granite-watermark/g602-white-lotus.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "G602 White Lotus",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  },
  {
    "id": "granite-watermarked-010",
    "name": "TG002 Black Galaxy-ดำเกล็ดทอง",
    "image": "./image/granite-watermark/tg002-black-galaxy.jpg",
    "gallery": [
      "./image/granite-watermark/tg002-black-galaxy.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "TG002 Black Galaxy",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  },
  {
    "id": "granite-watermarked-011",
    "name": "TG040 Yellow Bazil-เหลืองบราซิล",
    "image": "./image/granite-watermark/tg040-yellow-bazil.jpg",
    "gallery": [
      "./image/granite-watermark/tg040-yellow-bazil.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "TG040 Yellow Bazil",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  },
  {
    "id": "granite-watermarked-012",
    "name": "G301-3 Black Jubpo- ดำจัปโป้",
    "image": "./image/granite-watermark/g301-3-black-jubpo.jpg",
    "gallery": [
      "./image/granite-watermark/g301-3-black-jubpo.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "G301-3 Black Jubpo",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  },
  {
    "id": "granite-watermarked-013",
    "name": "TG047 Picasso Black-ปิกาโซ ดำ",
    "image": "./image/granite-watermark/tg047-picasso-black.jpg",
    "gallery": [
      "./image/granite-watermark/tg047-picasso-black.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "TG047 Picasso Black",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  },
  {
    "id": "granite-watermarked-014",
    "name": "TG038 Royal Crown Black-รอยอล์คราว์แบ็ค",
    "image": "./image/granite-watermark/tg038-royal-crown-black.jpg",
    "gallery": [
      "./image/granite-watermark/tg038-royal-crown-black.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "TG038 Royal Crown Black",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  },
  {
    "id": "granite-watermarked-015",
    "name": "G910 White Tiger-ขาวลายเสือ",
    "image": "./image/granite-watermark/g910-white-tiger.jpg",
    "gallery": [
      "./image/granite-watermark/g910-white-tiger.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "G910 White Tiger",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  },
  {
    "id": "granite-watermarked-016",
    "name": "TG028 Tanbrown-แทนบาร์ว",
    "image": "./image/granite-watermark/tg028-tanbrown.jpg",
    "gallery": [
      "./image/granite-watermark/tg028-tanbrown.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "TG028 Tanbrown",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  },
  {
    "id": "granite-watermarked-017",
    "name": "G681 Camilian Pink-คามิเลียพิงค์",
    "image": "./image/granite-watermark/g681-camilian-pink.jpg",
    "gallery": [
      "./image/granite-watermark/g681-camilian-pink.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "G681 Camilian Pink",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  },
  {
    "id": "granite-watermarked-018",
    "name": "TG010 Emeral Pear-เอ็มเมอร์รัลเพิลร์",
    "image": "./image/granite-watermark/tg010-emeral-pear.jpg",
    "gallery": [
      "./image/granite-watermark/tg010-emeral-pear.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "TG010 Emerald Pear",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  },
  {
    "id": "granite-watermarked-019",
    "name": "G640 Gray Clasic- เทาคลาสสิค",
    "image": "./image/granite-watermark/g640-gray-clasic.jpg",
    "gallery": [
      "./image/granite-watermark/g640-gray-clasic.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "G640 Gray Classic",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  },
  {
    "id": "granite-watermarked-020",
    "name": "G908 Rawsilk-รอลซิล",
    "image": "./image/granite-watermark/g908-rawsilk.jpg",
    "gallery": [
      "./image/granite-watermark/g908-rawsilk.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "G908 Rawsilk",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  },
  {
    "id": "granite-watermarked-021",
    "name": "G664 Pink Gems-พลอยชมพู",
    "image": "./image/granite-watermark/g664-pink-gems.jpg",
    "gallery": [
      "./image/granite-watermark/g664-pink-gems.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "G664 Pink Gems",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  },
  {
    "id": "granite-watermarked-022",
    "name": "G687 Orange Sakura-ซากุระส้ม",
    "image": "./image/granite-watermark/g687-orange-sakura.jpg",
    "gallery": [
      "./image/granite-watermark/g687-orange-sakura.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "G687 Orange Sakura",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  },
  {
    "id": "granite-watermarked-023",
    "name": "G6571 Mocha-มอคค่า",
    "image": "./image/granite-watermark/g6571-mocha.jpg",
    "gallery": [
      "./image/granite-watermark/g6571-mocha.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "G6571 Mocha",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  },
  {
    "id": "granite-watermarked-024",
    "name": "TG048 Picasso Gray-ปิกาโซ เทา",
    "image": "./image/granite-watermark/tg048-picasso-gray.jpg",
    "gallery": [
      "./image/granite-watermark/tg048-picasso-gray.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "TG048 Picasso Gray",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  },
  {
    "id": "granite-watermarked-025",
    "name": "TG011 Spoondrift White-เทาลายเมฆ",
    "image": "./image/granite-watermark/tg011-spoondrift-white.jpg",
    "gallery": [
      "./image/granite-watermark/tg011-spoondrift-white.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "TG011 Spoondrift White",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  },
  {
    "id": "granite-watermarked-026",
    "name": "TG023 India Red- แดงอินเดีย",
    "image": "./image/granite-watermark/tg023-india-red.jpg",
    "gallery": [
      "./image/granite-watermark/tg023-india-red.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "TG023 India Red",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  },
  {
    "id": "granite-watermarked-027",
    "name": "TG027 Blue Pearl-บูลเพิลร์-",
    "image": "./image/granite-watermark/tg027-blue-pearl.jpg",
    "gallery": [
      "./image/granite-watermark/tg027-blue-pearl.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "TG027 Blue Pearl",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  },
  {
    "id": "granite-watermarked-028",
    "name": "GL500 Light Black-ไรท์แบล็ค",
    "image": "./image/granite-watermark/gl500-light-black.jpg",
    "gallery": [
      "./image/granite-watermark/gl500-light-black.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "GL500 Light Black",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  },
  {
    "id": "granite-watermarked-029",
    "name": "TG049 Royal Champagne-รอยัลแชมเปญ",
    "image": "./image/granite-watermark/tg049-royal-champagne.jpg",
    "gallery": [
      "./image/granite-watermark/tg049-royal-champagne.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "TG049 Royal Champagne",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  },
  {
    "id": "granite-watermarked-030",
    "name": "G6231 Super Gray-ซุปเปอร์เกรย์",
    "image": "./image/granite-watermark/g6231-super-gray.jpg",
    "gallery": [
      "./image/granite-watermark/g6231-super-gray.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "G6231 Super Gray",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  },
  {
    "id": "granite-watermarked-031",
    "name": "G623 เทาจีน",
    "image": "./image/granite-watermark/g623.jpg",
    "gallery": [
      "./image/granite-watermark/g623.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "G623 Gray China",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  },
  {
    "id": "granite-watermarked-032",
    "name": "G562 Orange Bloom-ออเรนจ์บูม",
    "image": "./image/granite-watermark/g562-orange-bloom.jpg",
    "gallery": [
      "./image/granite-watermark/g562-orange-bloom.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "G562 Orange Bloom",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  },
  {
    "id": "granite-watermarked-033",
    "name": "TG041 Rose Yellow-โรสเยลโล่",
    "image": "./image/granite-watermark/tg041-rose-yellow.jpg",
    "gallery": [
      "./image/granite-watermark/tg041-rose-yellow.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "TG041 Rose Yellow",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  },
  {
    "id": "granite-watermarked-034",
    "name": "G912 Shanxi Black-ดำซาซี",
    "image": "./image/granite-watermark/g912-shanxi-black.jpg",
    "gallery": [
      "./image/granite-watermark/g912-shanxi-black.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "G912 Shanxi Black",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  },
  {
    "id": "granite-watermarked-035",
    "name": "G915 Cherry Red- เชอร์รี่เรด",
    "image": "./image/granite-watermark/g915-cherry-red.jpg",
    "gallery": [
      "./image/granite-watermark/g915-cherry-red.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "G915 Cherry Red",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  },
  {
    "id": "granite-watermarked-036",
    "name": "G636 Light Pink Jade-หยกชมพูอ่อน",
    "image": "./image/granite-watermark/g636-light-pink-jade.jpg",
    "gallery": [
      "./image/granite-watermark/g636-light-pink-jade.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "G636 Light Pink Jade",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  },
  {
    "id": "granite-watermarked-037",
    "name": "TG026 Super Black-ซุปเปอร์แบ็ค",
    "image": "./image/granite-watermark/tg026-super-black.jpg",
    "gallery": [
      "./image/granite-watermark/tg026-super-black.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "TG026 Super Black",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  },
  {
    "id": "granite-watermarked-038",
    "name": "TG042 Crown Black-คราว์แบ็ค",
    "image": "./image/granite-watermark/tg042-crown-black.jpg",
    "gallery": [
      "./image/granite-watermark/tg042-crown-black.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "TG042 Crown Black",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  },
  {
    "id": "granite-watermarked-039",
    "name": "G365  Yellow Snow-เหลืองเกล็ดหิมะ",
    "image": "./image/granite-watermark/g365-yellow-snow.jpg",
    "gallery": [
      "./image/granite-watermark/g365-yellow-snow.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "G365  Yellow Snow",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  },
  {
    "id": "granite-watermarked-040",
    "name": "G635 Dark Pink Jade-หยกชมพูเข้ม",
    "image": "./image/granite-watermark/g635-dark-pink-jade.jpg",
    "gallery": [
      "./image/granite-watermark/g635-dark-pink-jade.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "G635 Dark Pink Jade",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  },
  {
    "id": "granite-watermarked-041",
    "name": "TG056 VisconWhite-วิสคอนไวท์",
    "image": "./image/granite-watermark/tg056-visconwhite.jpg",
    "gallery": [
      "./image/granite-watermark/tg056-visconwhite.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "TG056 VisconWhite",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  },
  {
    "id": "granite-watermarked-042",
    "name": "G657 พิงค์เพอร์ริโน่",
    "image": "./image/granite-watermark/g657.jpg",
    "gallery": [
      "./image/granite-watermark/g657.jpg"
    ],
    "category": "granite",
    "categoryLabel": "หินแกรนิต",
    "subcategory": "Granite",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "G657 Pink Perrino",
    "categoryLabelEn": "Granite",
    "subcategoryEn": "Granite",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  },
  {
    "id": "crytral-1",
    "name": "CC0001 Crystral White",
    "image": "./image/crystal/cc0001-crystal-white.jpg",
    "gallery": [
      "./image/crystal/cc0001-crystal-white.jpg"
    ],
    "category": "crystal",
    "categoryLabel": "หินคริสตัล",
    "subcategory": "Crystal",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "CC0001 Crystral White",
    "categoryLabelEn": "Crystral",
    "subcategoryEn": "Crystral",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  },
  {
    "id": "crytral-2",
    "name": "CC0001",
    "image": "./image/crystal/cc0001.png",
    "gallery": [
      "./image/crystal/cc0001.png"
    ],
    "category": "crystal",
    "categoryLabel": "หินคริสตัล",
    "subcategory": "Crystal",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "CC0001",
    "categoryLabelEn": "Crystral",
    "subcategoryEn": "Crystral",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  },
  {
    "id": "crytral-3",
    "name": "CC0002",
    "image": "./image/crystal/cc0002.png",
    "gallery": [
      "./image/crystal/cc0002.png"
    ],
    "category": "crystal",
    "categoryLabel": "หินคริสตัล",
    "subcategory": "Crystal",
    "price": 0,
    "unit": "รายการ",
    "description": "หินแกรนิตสำหรับงานพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง มีความแข็งแรงและทนทาน เหมาะสำหรับงานบ้านและโครงการ",
    "nameEn": "CC0002",
    "categoryLabelEn": "Crystral",
    "subcategoryEn": "Crystral",
    "descriptionEn": "Granite for floors, walls, countertops and decorative applications, offering strength and durability for homes and projects."
  }

];
