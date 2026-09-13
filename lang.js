/*
BMC HOMEMART — ระบบภาษา TH/EN
หน้าที่: เปลี่ยนข้อความ data-th/data-en, แปลข้อความที่มี dictionary, placeholder, aria-label และ title
หลักการ: เก็บข้อความไทยเดิมไว้และสลับภาษาโดยไม่ทำลายข้อมูลสินค้า/โครงสร้าง HTML
*/
/* BMC HOMEMART - bilingual site language engine */
(function(){
  const dict = {
    'หน้าแรก':'Home','เกี่ยวกับเรา':'About Us','สินค้า':'Products','บริการ':'Services','ผลงาน':'Projects','ติดต่อเรา':'Contact Us',
    'โทรหาเรา':'Call Us','อ่านต่อเพิ่มเติม →':'Read More →','อ่านต่อเพิ่มเติม':'Read More','เลือกดูวัสดุ →':'View Materials →','เลือกดูวัสดุ':'View Materials →','ดูรายละเอียด →':'View Details →',
    'ศูนย์รวมหินธรรมชาติ หินสังเคราะห์':'Natural & Engineered Stone','กระเบื้อง ไม้ปูพื้น พร้อมบริการติดตั้ง':'Tiles, Flooring & Professional Installation',
    'ศูนย์รวมวัสดุคุณภาพสำหรับบ้าน งานตกแต่ง และโครงการ คัดสรรวัสดุที่ตอบโจทย์ทุกพื้นที่':'Quality materials for homes, interiors and projects, carefully selected for every space.',
    'ศูนย์รวมวัสดุตกแต่ง สำหรับบ้านและโครงการ':'Decorative materials for homes and projects',
    'BMC HOMEMART บริษัท บางกอก แมททีเรียล จำกัด ผู้จัดจำหน่ายวัสดุตกแต่งและวัสดุก่อสร้าง คัดสรรสินค้าคุณภาพสำหรับบ้าน งานออกแบบตกแต่งภายใน และโครงการต่าง ๆ':'BMC HOMEMART, Bangkok Material Co., Ltd., supplies carefully selected decorative and construction materials for homes, interior design and projects.',
    'เราให้ความสำคัญกับคุณภาพของสินค้า การบริการ และความต้องการของลูกค้า พร้อมให้คำปรึกษาและช่วยเลือกวัสดุ ให้เหมาะสมกับรูปแบบการใช้งาน':'We focus on product quality, service and customer needs, providing advice to help select the right materials for each application.',
    'หินธรรมชาติ':'Natural Stone','หินสังเคราะห์':'Engineered Stone','สินค้าอื่นๆ':'Other Products','ไม้พื้น ของเรา':'Our Wood Flooring',
    'รวมวัสดุหินธรรมชาติของ BMC HOMEMART สำหรับพื้น ผนัง เคาน์เตอร์ งานตกแต่ง และงานภายนอก':'Natural stone materials for floors, walls, countertops, decorative and exterior applications.',
    'รวมวัสดุหินสังเคราะห์ที่ตอบโจทย์งานเคาน์เตอร์ พื้น ผนัง และงานตกแต่งภายใน':'Engineered stone materials for countertops, floors, walls and interior applications.',
    'รวมวัสดุไม้สำหรับพื้น งานตกแต่ง และบันได เลือกตามคุณสมบัติและรูปแบบการใช้งาน':'Wood materials for flooring, interiors and stairs, selected by performance and application.',
    'รวมวัสดุสำหรับงานพื้น ผนัง และงานตกแต่งเพิ่มเติม':'Additional materials for floors, walls and decorative applications.',
    'หินควอตไซต์':'Quartzite','หินไลม์สโตน':'Limestone','หินทราเวอร์ทีน':'Travertine','หินออนิกซ์':'Onyx','หินปูสระว่ายน้ำ':'Pool Stone','หินโมเสค':'Stone Mosaic',
    'หินควอตซ์':'Quartz','หินอ่อนอัด':'Compressed Marble','หินเทอราซโซ่':'Terrazzo',
    'ไม้ Solid':'Solid Wood','ไม้เทียม WPC':'WPC Wood','ไม้เทียม SPC':'SPC Wood','ไม้บันได':'Stair Wood','ไม้เอ็นจิเนียร์':'Engineered Wood','ไม้ลาบิเนต':'Laminate Flooring','ไม้ลามิเนต':'Laminate Flooring','ไม้ Engineered':'Engineered Wood','ไม้ Laminate':'Laminate Flooring',
    'กระเบื้องหินอ่อน':'Marble Tile','กระเบื้องเซรามิก':'Ceramic Tile','กระเบื้องพอซเซเลน':'Porcelain Tile','เฟอร์นิเจอร์':'Furniture','โมเสค':'Mosaic',
    'หินอ่อน':'Marble','หินแกรนิต':'Granite','พื้นไม้':'Wood Flooring','ประตู':'Doors','ทุกหมวดสินค้า':'All Categories','ทั้งหมด':'All',
    'คุณภาพ':'Quality','ดูแลรักษาง่าย':'Easy Maintenance','พื้น':'Flooring','ผนัง':'Walls','ลวดลาย':'Patterns','ตกแต่ง':'Decorative',
    'หินควอตไซต์ธรรมชาติ มีความแข็งแรงสูง ลวดลายโดดเด่น เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งระดับพรีเมียม':'Natural quartzite offers high durability and distinctive patterns, ideal for floors, walls, countertops and premium interiors.',
    'หินไลม์สโตนโทนธรรมชาติ ให้พื้นผิวอบอุ่น เหมาะสำหรับพื้น ผนัง งานภูมิทัศน์ และงานภายนอก':'Natural limestone provides warm tones and texture, suitable for floors, walls, landscaping and exterior applications.',
    'หินทราเวอร์ทีนมีเอกลักษณ์จากลวดลายและรูพรุนตามธรรมชาติ เหมาะสำหรับพื้น ผนัง และงานตกแต่ง':'Travertine has distinctive natural patterns and pores, suitable for floors, walls and decorative applications.',
    'หินออนิกซ์มีลวดลายและความโปร่งแสงโดดเด่น เหมาะสำหรับงานตกแต่งที่ต้องการความหรูหรา':'Onyx features striking patterns and translucency, ideal for luxurious decorative applications.',
    'หินสำหรับปูสระว่ายน้ำและพื้นที่รอบสระ คัดเลือกให้เหมาะกับงานภายนอก':'Stone selected for swimming pools and surrounding areas, suitable for exterior applications.',
    'โมเสคสำหรับผนัง พื้น และงานตกแต่ง เพิ่มรายละเอียดและเอกลักษณ์ให้กับพื้นที่':'Mosaic for walls, floors and decorative applications, adding detail and character to spaces.',
    'หินควอตซ์/หินสังเคราะห์ พื้นผิวสม่ำเสมอ ดูแลรักษาง่าย เหมาะสำหรับเคาน์เตอร์ Island top โต๊ะ และงานตกแต่งภายใน':'Quartz / engineered stone has a consistent surface and is easy to maintain, ideal for countertops, island tops, tables and interiors.',
    'หินอ่อนอัดเป็นวัสดุที่ผลิตให้มีลวดลายและโทนสีสม่ำเสมอ เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่ง':'Compressed marble is manufactured for consistent patterns and tones, suitable for floors, walls, countertops and decorative applications.',
    'หินเทอราซโซ่โดดเด่นด้วยเม็ดวัสดุและลวดลายเฉพาะตัว เหมาะสำหรับพื้น ผนัง เคาน์เตอร์ และงานตกแต่งที่ต้องการความโดดเด่น':'Terrazzo is defined by distinctive aggregate patterns, suitable for floors, walls, countertops and statement interiors.',
    'พื้นไม้ Solid ผลิตจากไม้จริง ให้สัมผัสและลวดลายธรรมชาติ เหมาะสำหรับงานพื้นและตกแต่งภายใน':'Solid wood flooring is made from real wood with natural texture and grain, ideal for floors and interiors.',
    'ไม้เทียม WPC สำหรับงานภายนอกและพื้นที่ที่ต้องการความทนทานต่อการใช้งาน':'WPC wood is suitable for exterior areas and spaces requiring durable performance.',
    'ไม้เทียม SPC สำหรับงานพื้น ดูแลรักษาง่าย เหมาะกับงานตกแต่งภายใน':'SPC flooring is easy to maintain and suitable for interior applications.',
    'ไม้บันไดสำหรับงานตกแต่งและติดตั้งบันได โดยใช้ภาพจากชุดไม้ PVC':'Stair wood for decorative and staircase applications, using images from the PVC wood set.',
    'ไม้เอ็นจิเนียร์ให้ความสวยงามแบบไม้จริงและมีโครงสร้างหลายชั้น เหมาะสำหรับงานพื้นภายใน':'Engineered wood combines the beauty of real wood with a multi-layer structure, ideal for interior flooring.',
    'ไม้ลามิเนตดูแลรักษาง่าย มีลวดลายหลากหลาย เหมาะสำหรับพื้นที่ภายในอาคาร':'Laminate flooring is easy to maintain and available in many patterns, suitable for indoor spaces.',
    'เฟอร์นิเจอร์สำหรับงานบ้านและงานตกแต่ง คัดเลือกดีไซน์และวัสดุให้เหมาะกับพื้นที่':'Furniture selected for homes and interiors, balancing design and material suitability.',
    'กระเบื้องเซรามิกสำหรับพื้นและผนัง มีรูปแบบหลากหลาย เหมาะกับงานตกแต่งหลายสไตล์':'Ceramic tiles for floors and walls, available in a variety of styles for different interiors.',
    'กระเบื้องพอซเซเลนสำหรับพื้นและผนัง ให้ความแข็งแรงและดูแลรักษาง่าย':'Porcelain tiles for floors and walls, offering durability and easy maintenance.',
    'สินค้าของเรา':'Our Products','เลือกวัสดุที่เหมาะกับพื้นที่และสไตล์ของคุณ จากแคตตาล็อกสินค้าของ BMC HOMEMART':'Choose materials that suit your space and style from the BMC HOMEMART catalog.',
    'ค้นหาชื่อวัสดุหรือสินค้า...':'Search products or materials...','เรียงตามลำดับ':'Default order','ราคาต่ำ → สูง':'Price: Low → High','ราคาสูง → ต่ำ':'Price: High → Low','ชื่อสินค้า A → Z':'Name A → Z',
    'สินค้าในแคตตาล็อก':'Products in catalog','รายการ':'items','ไม่พบสินค้าที่ค้นหา':'No products found','ลองเปลี่ยนคำค้นหาหรือเลือกหมวดสินค้าอื่น':'Try another search or category.',
    'สอบถามราคา':'Price on request','สอบถาม':'Inquiry','+ เพิ่ม':'+ Add','เพิ่มลงตะกร้า':'Add to Cart','ไปที่ตะกร้าสินค้า':'Go to Cart','กลับไปหน้าสินค้า':'Back to Products',
    'รายการสินค้าที่เลือก':'Selected Products','ขอใบเสนอราคา':'Request a Quote','กรอกข้อมูลด้านล่างเพื่อส่งรายการสินค้าให้ทีมงาน BMC HOMEMART ติดต่อกลับ':'Fill in the details below and the BMC HOMEMART team will contact you.',
    'กรอกข้อมูลด้านล่างเพื่อส่งรายการสินค้า ให้ทีมงาน BMC HOMEMART ติดต่อกลับ':'Fill in the details below and the BMC HOMEMART team will contact you.',
    'ชื่อ - นามสกุล':'Full name','เบอร์โทรศัพท์':'Phone number','อีเมล':'Email','รายละเอียดเพิ่มเติม':'Additional details','ส่งคำขอใบเสนอราคา':'Submit quote request',
    'นโยบายความเป็นส่วนตัว':'Privacy Policy','นโยบายการใช้งานคุกกี้':'Cookie Policy','กลับหน้าหลัก':'Back to Home','← กลับหน้าหลัก':'← Back to Home',
    'เริ่มต้นโครงการของคุณ':'Start Your Project','ส่งแบบหรือพูดคุยความต้องการกับทีม BMC HOMEMART เพื่อช่วยเลือกวัสดุและแนวทางการใช้งานให้เหมาะกับโครงการ':'Send your plans or discuss your requirements with BMC HOMEMART to choose suitable materials and solutions for your project.',
    'ติดต่อเรา':'Contact Us','บริการของ BMC HOMEMART':'BMC HOMEMART Services','สอบถามบริการ':'Service Inquiry','ขั้นตอนการทำงาน':'Our Process','ประเมินหน้างาน':'Site Assessment','วางแผนงาน':'Planning','ตรวจและส่งมอบ':'Inspection & Handover',
    'บริการที่ใส่ใจรายละเอียด':'Detail-focused service','เลือกวิธีให้เหมาะกับวัสดุ':'Methods suited to each material','ประสานงานเป็นขั้นตอน':'Step-by-step coordination','เน้นความเรียบร้อย':'Attention to detail',
    'วัสดุคุณภาพสำหรับบ้าน งานออกแบบ และโครงการ':'Quality materials for homes, design and projects','จากการเลือกวัสดุ สู่พื้นที่ที่ใช้งานได้จริง':'From material selection to practical spaces','สิ่งที่เราให้ความสำคัญ':'What We Value','คุณภาพวัสดุ':'Material Quality','ข้อมูลและคำแนะนำ':'Information & Advice','งานโครงการ':'Project Support',
    'ตัวอย่างรูปแบบงานและการใช้วัสดุ':'Project references and material applications','ประเภทงาน:':'Project type:','บ้านพักอาศัย':'Residential','แนวทางวัสดุ:':'Material approach:','หินและไม้สำหรับพื้นที่ส่วนกลางและพื้นที่อยู่อาศัย':'Stone and wood for common and living areas','จุดเน้น:':'Focus:','ความอบอุ่น ดูสะอาด และใช้งานได้จริง':'Warm, clean and practical',
    'งานตกแต่งภายใน':'Interior Design','หิน กระเบื้อง โมเสค และงานไม้':'Stone, tiles, mosaic and wood','จัดโทนวัสดุให้ต่อเนื่องและดูเป็นหนึ่งเดียว':'Create a consistent material palette and unified look','พื้น ผนัง และเคาน์เตอร์':'Floors, walls and countertops','หินอ่อน หินแกรนิต และหินสังเคราะห์':'Marble, granite and engineered stone','เลือกลายและพื้นผิวให้เหมาะกับการใช้งาน':'Select patterns and finishes for the intended use','งานเก็บรายละเอียด':'Finishing Details','งานเข้ามุม รอยต่อ และขอบวัสดุ':'Corners, joints and material edges','ความเรียบร้อยของรายละเอียดก่อนส่งมอบ':'Detail quality before handover','พื้นที่เชิงพาณิชย์':'Commercial Spaces','วัสดุที่ดูแลรักษาง่ายและรองรับการใช้งานต่อเนื่อง':'Easy-maintenance materials for continuous use','ภาพลักษณ์และความทนทาน':'Appearance and durability','งานติดตั้งและประสานงาน':'Installation & Coordination','วางลำดับงานให้เหมาะกับวัสดุแต่ละประเภท':'Plan the work sequence for each material type','ตรวจสอบหน้างานและส่งมอบอย่างเป็นระบบ':'Inspect the site and hand over systematically'
  };

  Object.assign(dict,{
    'ปรับปรุงล่าสุด: 7 กันยายน 2026':'Last updated: September 7, 2026','กลับหน้าหลัก':'Back to Home','← กลับหน้าหลัก':'← Back to Home',
    '1. คุกกี้คืออะไร':'1. What Are Cookies','2. ประเภทของคุกกี้':'2. Types of Cookies','3. การตั้งค่าความยินยอม':'3. Consent Settings','4. การจัดการคุกกี้ผ่านเบราว์เซอร์':'4. Managing Cookies in Your Browser','5. การเปลี่ยนแปลงนโยบาย':'5. Policy Changes','6. ติดต่อเรา':'6. Contact Us',
    'คุกกี้ที่จำเป็น:':'Necessary cookies:','คุกกี้เพื่อการตั้งค่า:':'Preference cookies:','คุกกี้เพื่อการวิเคราะห์:':'Analytics cookies:',
    'คุกกี้คือไฟล์ข้อมูลขนาดเล็กที่เว็บไซต์สามารถจัดเก็บไว้ในเบราว์เซอร์ของอุปกรณ์ เพื่อช่วยให้เว็บไซต์จดจำข้อมูลหรือการตั้งค่าบางอย่าง':'Cookies are small data files that a website can store in your device browser to remember information or settings.',
    'ช่วยให้ฟังก์ชันพื้นฐานของเว็บไซต์ทำงานได้ เช่น การรักษาสถานะการใช้งานบางส่วน':'They help basic website functions work, such as maintaining certain session states.',
    'ช่วยจดจำการตั้งค่าหรือความต้องการของผู้ใช้งาน หากเว็บไซต์มีการเปิดใช้ฟังก์ชันดังกล่าว':'They remember user preferences when such functions are enabled.',
    'อาจใช้เพื่อทำความเข้าใจการใช้งานเว็บไซต์และปรับปรุงเว็บไซต์ ทั้งนี้จะขึ้นอยู่กับบริการวิเคราะห์ที่มีการติดตั้งจริง':'They may be used to understand website usage and improve the site, depending on the analytics services actually installed.',
    '1. ข้อมูลที่เราอาจเก็บรวบรวม':'1. Information We May Collect','2. วัตถุประสงค์ในการใช้ข้อมูล':'2. Purposes of Use','3. การเปิดเผยข้อมูล':'3. Data Disclosure','4. การเก็บรักษาข้อมูล':'4. Data Retention','5. การรักษาความปลอดภัย':'5. Security','6. สิทธิของเจ้าของข้อมูล':'6. Data Subject Rights','7. การติดต่อ':'7. Contact',
    'ตอบคำถามและติดต่อกลับตามคำขอของคุณ':'Answer questions and respond to your requests','ให้ข้อมูลเกี่ยวกับสินค้า บริการ และการสั่งซื้อ':'Provide information about products, services and orders','ปรับปรุงเว็บไซต์ เนื้อหา และประสบการณ์การใช้งาน':'Improve the website, content and user experience','รักษาความปลอดภัยและป้องกันการใช้งานเว็บไซต์ในทางที่ไม่เหมาะสม':'Maintain security and prevent inappropriate use of the website','ปฏิบัติตามหน้าที่ตามกฎหมายเมื่อมีความจำเป็น':'Comply with legal obligations when necessary',
    'บริการติดตั้งวัสดุสำหรับบ้านและโครงการ':'Material installation services for homes and projects','พูดคุยความต้องการ ตรวจพื้นที่ และกำหนดแนวทางให้เหมาะกับวัสดุและรูปแบบงาน':'Discuss requirements, inspect the site and define an approach suited to the materials and project.',
    'เลือกวัสดุ วางลำดับงาน และเตรียมรายละเอียดสำหรับการดำเนินงาน':'Select materials, plan the work sequence and prepare project details.','ตรวจสอบรายละเอียดความเรียบร้อย พร้อมแนะนำแนวทางดูแลรักษาหลังงานเสร็จ':'Inspect the finished work and provide maintenance guidance.',
    'วัสดุคุณภาพ สำหรับบ้าน งานตกแต่ง และโครงการ':'Quality materials for homes, interiors and projects'
  });
  const aboutExtra = {'วัสดุคุณภาพสำหรับบ้าน': 'Quality Materials for Homes', 'งานออกแบบ และโครงการ': 'Design & Projects', 'BMC HOMEMART บริษัท บางกอก แมททีเรียล จำกัด มุ่งนำเสนอวัสดุตกแต่งและวัสดุก่อสร้างที่คัดสรรสำหรับบ้าน งานออกแบบ และโครงการ พร้อมการประสานงานและบริการที่ช่วยให้งานเดินหน้าได้อย่างเป็นระบบ': 'BMC HOMEMART, Bangkok Material Co., Ltd., offers carefully selected decorative and construction materials for homes, design work and projects, with coordinated services to help every project move forward smoothly.', 'จากการเลือกวัสดุ สู่พื้นที่ที่ใช้งานได้จริง': 'From Material Selection to Practical Spaces', 'BMC HOMEMART ให้ความสำคัญกับการคัดเลือกวัสดุสำหรับงานหิน กระเบื้อง โมเสค ประตู และงานไม้ เพื่อให้ลูกค้าสามารถเลือกวัสดุให้เหมาะกับรูปแบบพื้นที่ งบประมาณ และรายละเอียดของโครงการ': 'BMC HOMEMART carefully selects stone, tile, mosaic, door and wood materials so customers can choose materials that suit the space, budget and project details.', 'เรารองรับทั้งเจ้าของบ้าน นักออกแบบ ผู้รับเหมา และโครงการ โดยเน้นการให้ข้อมูลสินค้า การเลือกวัสดุ การประสานงาน และบริการหน้างาน': 'We support homeowners, designers, contractors and projects with product information, material selection, coordination and on-site services.', 'สิ่งที่เราให้ความสำคัญ': 'What We Value', 'คุณภาพวัสดุ': 'Material Quality', 'รวบรวมวัสดุหลายประเภทเพื่อให้เลือกตามการใช้งานและรูปแบบงาน': 'A range of materials selected for different applications and design styles.', 'ข้อมูลและคำแนะนำ': 'Information & Advice', 'ช่วยเปรียบเทียบวัสดุและเลือกแนวทางที่เหมาะกับพื้นที่': 'Compare materials and choose the right solution for your space.', 'งานโครงการ': 'Project Support', 'สนับสนุนการประสานงานตั้งแต่การเลือกวัสดุไปจนถึงงานบริการ': 'Support coordination from material selection through service delivery.', 'ตัวอย่างรูปแบบงานและการใช้วัสดุ': 'Project References & Material Applications', 'รวบรวมภาพอ้างอิงพร้อมรายละเอียด เพื่อใช้เป็นแนวทางในการเลือกวัสดุและวางภาพรวมของโครงการ': 'Reference images and details to guide material selection and overall project planning.', 'ประเภทงาน:': 'Project Type:', 'บ้านพักอาศัย': 'Residential', 'แนวทางวัสดุ:': 'Material Approach:', 'หินและไม้สำหรับพื้นที่ส่วนกลางและพื้นที่อยู่อาศัย': 'Stone and wood for common and living areas', 'จุดเน้น:': 'Focus:', 'ความอบอุ่น ดูสะอาด และใช้งานได้จริง': 'Warm, clean and practical', 'งานตกแต่งภายใน': 'Interior Design', 'หิน กระเบื้อง โมเสค และงานไม้': 'Stone, tile, mosaic and wood', 'จัดโทนวัสดุให้ต่อเนื่องและดูเป็นหนึ่งเดียว': 'Create a consistent material palette and unified look', 'พื้น ผนัง และเคาน์เตอร์': 'Floors, Walls & Countertops', 'หินอ่อน หินแกรนิต และหินสังเคราะห์': 'Marble, granite and engineered stone', 'เลือกลายและพื้นผิวให้เหมาะกับการใช้งาน': 'Select patterns and finishes suited to the intended use', 'งานเก็บรายละเอียด': 'Detail Work', 'งานเข้ามุม รอยต่อ และขอบวัสดุ': 'Corners, joints and material edges', 'ความเรียบร้อยของรายละเอียดก่อนส่งมอบ': 'Neat details before handover', 'พื้นที่เชิงพาณิชย์': 'Commercial Space', 'วัสดุที่ดูแลรักษาง่ายและรองรับการใช้งานต่อเนื่อง': 'Easy-to-maintain materials for continuous use', 'ภาพลักษณ์และความทนทาน': 'Appearance and durability', 'งานติดตั้งและประสานงาน': 'Installation & Coordination', 'วางลำดับงานให้เหมาะกับวัสดุแต่ละประเภท': 'Plan work sequences for each material type', 'ตรวจสอบหน้างานและส่งมอบอย่างเป็นระบบ': 'Inspect the site and hand over systematically', 'เริ่มต้นโครงการของคุณ': 'Start Your Project', 'ส่งแบบหรือพูดคุยความต้องการกับทีม BMC HOMEMART เพื่อช่วยเลือกวัสดุและแนวทางการใช้งานให้เหมาะกับโครงการ': 'Send your plans or discuss your requirements with BMC HOMEMART to choose suitable materials and solutions for your project.', 'ศูนย์รวมวัสดุคุณภาพ สำหรับบ้าน งานตกแต่ง และโครงการ': 'Quality materials for homes, interiors and projects', 'บริษัท บางกอก แมททีเรียล จำกัด': 'Bangkok Material Co., Ltd.', '2296 ถนนพระราม 9 แขวงพัฒนการ เขตสวนหลวง กรุงเทพมหานคร 10250': '2296 Rama 9 Road, Phatthanakan, Suan Luang, Bangkok 10250'};
  Object.assign(dict, aboutExtra);
  const reverse={}; Object.keys(dict).forEach(k=>reverse[dict[k]]=k);

  Object.assign(dict,{
    'ข้อความ':'Text','ปุ่มหลัก':'Main buttons','เมนูติดต่อ':'Contact menu','ปุ่มซ้าย':'Previous','ปุ่มขวา':'Next','จุดบอก Slide':'Slide indicators','ส่วนที่ 1':'Section 1','ส่วนที่ 2':'Section 2',
    'โทร : 02-3201087':'Tel: 02-3201087','บริษัท บางกอก แมททีเรียล จำกัด':'Bangkok Material Co., Ltd.','2296 ถนนพระราม9 แขวงพัฒนการ':'2296 Rama 9 Road, Phatthanakan','เขตสวนหลวง กรุงเทพมหานคร 10250':'Suan Luang, Bangkok 10250',
    'งานติดตั้ง':'Installation','งานฝีมือ':'Craftsmanship','งานขัด':'Polishing','ติดตั้งอย่างเป็นระบบ ตั้งแต่เตรียมพื้นที่ถึงส่งมอบ':'Systematic installation from site preparation to handover','รายละเอียดเล็ก ๆ ที่ทำให้งานดูแตกต่าง':'Small details that make a difference','ฟื้นฟูพื้นผิวให้กลับมาดูสะอาดและสวยงาม':'Restore surfaces to a clean and beautiful finish',
    'บริการติดตั้งวัสดุสำหรับบ้านและโครงการ โดยให้ความสำคัญกับการเตรียมพื้นที่ ลำดับงาน และความเรียบร้อยของหน้างาน':'Installation services for homes and projects, with focus on site preparation, work sequence and quality.',
    'งานเก็บรายละเอียด งานเข้ามุม งานประกอบ และงานตกแต่งที่ต้องอาศัยความประณีต':'Finishing, corner, assembly and decorative work requiring precision.',
    'บริการทำความสะอาด ขัด และดูแลพื้นผิวหิน โดยเลือกวิธีให้เหมาะกับสภาพและชนิดของวัสดุ':'Stone cleaning, polishing and surface-care services using methods suited to each material and condition.',
    '团队':'Team','หากมีคำถาม':'If you have questions',
    'เริ่มต้นโครงการของคุณ':'Start Your Project','ติดต่อ':'Contact','ส่งแบบหรือพูดคุยความต้องการกับทีม BMC HOMEMART เพื่อช่วยเลือกวัสดุและแนวทางการใช้งานให้เหมาะกับโครงการ':'Send your plans or discuss your requirements with BMC HOMEMART to choose suitable materials and solutions for your project.',
    'จากการเลือกวัสดุ สู่พื้นที่ที่ใช้งานได้จริง':'From material selection to practical spaces','BMC HOMEMART ให้ความสำคัญกับการคัดเลือกวัสดุสำหรับงานหิน กระเบื้อง โมเสค ประตู และงานไม้ เพื่อให้ลูกค้าสามารถเลือกวัสดุให้เหมาะกับรูปแบบพื้นที่ งบประมาณ และรายละเอียดของโครงการ':'BMC HOMEMART carefully selects stone, tile, mosaic, door and wood materials so customers can choose according to space, budget and project requirements.',
    'เรารองรับทั้งเจ้าของบ้าน นักออกแบบ ผู้รับเหมา และโครงการ โดยเน้นการให้ข้อมูลสินค้า การเลือกวัสดุ การประสานงาน และบริการหน้างาน':'We support homeowners, designers, contractors and projects with product information, material selection, coordination and site services.',
    'รวบรวมวัสดุหลายประเภทเพื่อให้เลือกตามการใช้งานและรูปแบบงาน':'A range of materials selected by application and design style','ช่วยเปรียบเทียบวัสดุและเลือกแนวทางที่เหมาะกับพื้นที่':'Compare materials and choose the right approach for your space','สนับสนุนการประสานงานตั้งแต่การเลือกวัสดุไปจนถึงงานบริการ':'Support coordination from material selection through service delivery',
    'รวบรวมภาพอ้างอิงพร้อมรายละเอียด เพื่อใช้เป็นแนวทางในการเลือกวัสดุและวางภาพรวมของโครงการ':'Reference images and details to guide material selection and project planning',
    'งานติดตั้งและประสานงาน':'Installation & Coordination','พื้นที่เชิงพาณิชย์':'Commercial Spaces',
    'หากมีคำถามเกี่ยวกับการใช้คุกกี้หรือการตั้งค่าความเป็นส่วนตัว กรุณาติดต่อ BMC HOMEMART ผ่านช่องทางติดต่อที่ระบุไว้ในเว็บไซต์':'If you have questions about cookies or privacy settings, please contact BMC HOMEMART through the contact channels listed on the website.',
    'BMC HOMEMART ให้ความสำคัญกับความเป็นส่วนตัวและการคุ้มครองข้อมูลส่วนบุคคลของผู้ใช้งานเว็บไซต์ นโยบายฉบับนี้อธิบายประเภทข้อมูลที่อาจได้รับ วัตถุประสงค์ในการใช้ข้อมูล และสิทธิของเจ้าของข้อมูล':'BMC HOMEMART values privacy and personal data protection. This policy explains information types, purposes of use and data subject rights.',
    'ข้อมูลที่คุณกรอกผ่านแบบฟอร์มติดต่อหรือการสอบถามสินค้า เช่น ชื่อ เบอร์โทรศัพท์ อีเมล และรายละเอียดที่คุณส่งให้เรา':'Information you provide through contact or product inquiry forms, such as your name, phone, email and submitted details.',
    'ข้อมูลเกี่ยวกับการใช้งานเว็บไซต์ เช่น หน้าที่เข้าชม อุปกรณ์ เบราว์เซอร์ และข้อมูลทางเทคนิคที่เว็บไซต์ได้รับตามการตั้งค่าของเบราว์เซอร์':'Website usage information such as pages viewed, device, browser and technical information received according to browser settings.',
    'ข้อมูลที่คุณเลือกส่งให้เราเพื่อให้สามารถติดต่อกลับหรือให้บริการได้':'Information you choose to send us so we can contact you or provide services.',
    'เราจะไม่ขายข้อมูลส่วนบุคคลของคุณ และจะเปิดเผยข้อมูลเท่าที่จำเป็นต่อการให้บริการ การดำเนินงานของเว็บไซต์ หรือเมื่อกฎหมายกำหนด ทั้งนี้รายละเอียดผู้ให้บริการภายนอกจะขึ้นอยู่กับบริการที่เว็บไซต์ใช้งานจริง':'We do not sell your personal data. We disclose information only as necessary for services, website operations or when required by law.',
    'เราจะเก็บข้อมูลเท่าที่จำเป็นตามวัตถุประสงค์ในการเก็บข้อมูลและระยะเวลาที่เหมาะสม โดยคำนึงถึงข้อกำหนดทางกฎหมายและความจำเป็นในการให้บริการ':'We retain information only as necessary for the stated purposes and an appropriate period, considering legal requirements and service needs.',
    'เราจะใช้มาตรการที่เหมาะสมเพื่อช่วยป้องกันข้อมูลส่วนบุคคลจากการเข้าถึง ใช้ เปลี่ยนแปลง หรือเปิดเผยโดยไม่ได้รับอนุญาต อย่างไรก็ตาม การส่งข้อมูลผ่านอินเทอร์เน็ตไม่สามารถรับประกันความปลอดภัยได้อย่างสมบูรณ์':'We use appropriate measures to help protect personal data from unauthorized access, use, alteration or disclosure. However, internet transmission cannot be guaranteed completely secure.',
    'ภายใต้กฎหมายที่ใช้บังคับ คุณอาจมีสิทธิขอเข้าถึง แก้ไข ลบ จำกัดการใช้ คัดค้าน หรือขอรับข้อมูลส่วนบุคคล รวมถึงถอนความยินยอมในกรณีที่การประมวลผลอาศัยความยินยอม ทั้งนี้สิทธิแต่ละประเภทอาจมีเงื่อนไขและข้อยกเว้นตามกฎหมาย':'Subject to applicable law, you may have rights to access, correct, delete, restrict, object to or receive personal data, and withdraw consent where applicable. Rights may have legal conditions and exceptions.',
    'หากต้องการสอบถามเกี่ยวกับนโยบายความเป็นส่วนตัวหรือใช้สิทธิของเจ้าของข้อมูล กรุณาติดต่อ BMC HOMEMART ผ่านช่องทางที่ระบุไว้ในเว็บไซต์':'For questions about this Privacy Policy or to exercise data subject rights, please contact BMC HOMEMART through the contact channels listed on the website.'
  });

    Object.assign(dict, {
      'ศูนย์รวมวัสดุตกแต่ง สำหรับบ้านและโครงการ':'A Center for Decorative Materials for Homes and Projects',
      'BMC HOMEMART บริษัท บางกอก แมททีเรียล จำกัด ผู้จัดจำหน่ายวัสดุตกแต่งและวัสดุก่อสร้าง คัดสรรสินค้าคุณภาพสำหรับบ้าน งานออกแบบตกแต่งภายใน และโครงการต่าง ๆ':'BMC HOMEMART, Bangkok Material Co., Ltd., supplies carefully selected decorative and construction materials for homes, interior design and projects.',
      'เราให้ความสำคัญกับคุณภาพของสินค้า การบริการ และความต้องการของลูกค้า พร้อมให้คำปรึกษาและช่วยเลือกวัสดุ ให้เหมาะสมกับรูปแบบการใช้งาน':'We focus on product quality, service and customer needs, providing advice and helping customers select materials that suit each application.',
      'บริการครบจบในที่เดียว':'Complete Services in One Place','งานติดตั้ง':'Installation','งานฝีมือ':'Craftsmanship','งานขัด':'Polishing',
      'บริการติดตั้งวัสดุสำหรับบ้านและโครงการ ตั้งแต่เตรียมพื้นที่ ประสานงานหน้างาน จนถึงตรวจรับและส่งมอบ':'Material installation services for homes and projects, from site preparation and coordination to inspection and handover.',
      'งานเก็บรายละเอียด งานเข้ามุม งานประกอบ และงานตกแต่งที่ต้องการความประณีตและความเรียบร้อย':'Detailed finishing, corners, assembly and decorative work requiring precision and care.',
      'บริการทำความสะอาด ขัด และดูแลพื้นผิวหิน ช่วยฟื้นฟูความเรียบร้อยและความสวยงามของพื้นที่':'Cleaning, polishing and stone surface care to restore the appearance and finish of your space.',
      'ผลงานที่เราได้มีส่วนร่วม':'Projects We Have Contributed To','ให้ BMC HOMEMART<br/> ช่วยสร้างพื้นที่ของคุณ':'Let BMC HOMEMART<br/> help create your space',
      'ติดต่อเรา':'Contact Us','ที่อยู่':'Address','โทรศัพท์':'Phone','แฟล็กซ์':'Fax','เวลาทำการ':'Opening Hours','ขอใบเสนอราคา':'Request a Quote','ส่งคำขอ':'Submit Request',
      'แจ้งรายละเอียดสินค้าหรือโครงการ ทีมงาน BMC HOMEMART จะติดต่อกลับ':'Tell us about your product or project and the BMC HOMEMART team will contact you.'
    });
  Object.keys(dict).forEach(k=>reverse[dict[k]]=k);
  const catEn={all:'All Categories',quartzite:'Quartzite',limestone:'Limestone',travertine:'Travertine',onyx:'Onyx',pool:'Pool Stone',mosaic:'Mosaic',quartz:'Quartz','compressed-marble':'Compressed Marble',terrazzo:'Terrazzo',solid:'Solid Wood',wpc:'WPC Wood',spc:'SPC Wood',stair:'Stair Wood',engineered:'Engineered Wood',laminate:'Laminate Flooring','marble-tile':'Marble Tile',ceramic:'Ceramic Tile',porcelain:'Porcelain Tile',furniture:'Furniture',marble:'Marble',granite:'Granite',door:'Doors',pvc:'PVC Wood'};
  const titles={
    'index.html':'BMC HOMEMART | Natural Stone & Materials','about.html':'About BMC HOMEMART | Project Reference','products.html':'Our Products | BMC HOMEMART','product-detail.html':'Product Details | BMC HOMEMART','cart.html':'Shopping Cart | BMC HOMEMART','service-detail.html':'Services | BMC HOMEMART','sevice-detail.html':'Services | BMC HOMEMART','privacy-policy.html':'Privacy Policy | BMC HOMEMART','cookie-policy.html':'Cookie Policy | BMC HOMEMART'
  };
  function isThai(s){return /[\u0E00-\u0E7F]/.test(s)}
  const originalText = new WeakMap();

  function translateString(s,en){
    const clean=s.replace(/\\n/g,'').trim();
    if(en){
      return dict[clean] || catEn[clean] || clean;
    }
    return reverse[clean] || clean;
  }

  function apply(){
    const en=(localStorage.getItem('bmcLang')||'th')==='en';
    document.documentElement.lang=en?'en':'th';
    document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active',b.dataset.lang===(en?'en':'th')));

    // Explicit bilingual elements always use their stored Thai/English values.
    document.querySelectorAll('[data-th][data-en]').forEach(el=>{
      if(el.matches('input,textarea,option')) return;
      el.textContent=en?el.dataset.en:el.dataset.th;
    });

    // Translate all remaining text nodes, while preserving the original Thai text.
    const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
    const nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node=>{
      const parent=node.parentElement;
      if(!parent || parent.closest('.language-switch,[data-th][data-en],script,style,svg')) return;
      if(!originalText.has(node)) originalText.set(node,node.nodeValue||'');
      const original=originalText.get(node).replace(/\\n/g,'');
      const leading=(original.match(/^\s*/)||[''])[0], trailing=(original.match(/\s*$/)||[''])[0];
      const core=original.trim();
      if(!core) return;
      node.nodeValue=leading+(en?translateString(core,true):core)+trailing;
    });

    document.querySelectorAll('input[placeholder],textarea[placeholder]').forEach(el=>{
      if(!el.dataset.thPlaceholder) el.dataset.thPlaceholder=el.placeholder;
      el.placeholder=en?translateString(el.dataset.thPlaceholder,true):el.dataset.thPlaceholder;
    });
    document.querySelectorAll('option').forEach(o=>{
      if(!o.dataset.th) o.dataset.th=o.textContent.trim();
      o.textContent=en?(catEn[o.value]||translateString(o.dataset.th,true)):o.dataset.th;
    });
    document.querySelectorAll('[aria-label]').forEach(el=>{
      if(!el.dataset.thAria) el.dataset.thAria=el.getAttribute('aria-label');
      const v=el.dataset.thAria;
      if(v) el.setAttribute('aria-label',en?translateString(v,true):v);
    });
    const file=location.pathname.split('/').pop()||'index.html';
    const thaiTitles={'index.html':'BMC HOMEMART | หินอ่อน หินแกรนิต','about.html':'เกี่ยวกับ BMC HOMEMART | Project Reference','products.html':'สินค้าของเรา | BMC HOMEMART','product-detail.html':'รายละเอียดสินค้า | BMC HOMEMART','cart.html':'ตะกร้าสินค้า | BMC HOMEMART','service-detail.html':'บริการ | BMC HOMEMART','sevice-detail.html':'บริการ | BMC HOMEMART','privacy-policy.html':'นโยบายความเป็นส่วนตัว | BMC HOMEMART','cookie-policy.html':'นโยบายการใช้งานคุกกี้ | BMC HOMEMART'};
    document.title=en?(titles[file]||document.title):(thaiTitles[file]||document.title);
    if(window.renderCatalog) window.renderCatalog();
    if(window.renderCart) window.renderCart();
    if(window.renderProductDetail) window.renderProductDetail();
  }
  function setLang(l){localStorage.setItem('bmcLang',l);apply();window.dispatchEvent(new CustomEvent('bmcLanguageChanged',{detail:{lang:l}}));}
  window.BMC_LANG={setLang,apply,get:()=>localStorage.getItem('bmcLang')||'th'};
  document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('.lang-btn').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));
    apply();
  });
})();
