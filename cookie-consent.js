/* =========================================================
   BMC HOMEMART - COOKIE CONSENT
   Stores only the visitor's consent choice in localStorage.
========================================================= */
(function(){
    const KEY = 'bmcCookieConsent';
    const existing = localStorage.getItem(KEY);

    function showBanner(){
        if(document.getElementById('bmcCookieConsent')) return;
        const box = document.createElement('div');
        box.id = 'bmcCookieConsent';
        box.className = 'cookie-consent';
        box.innerHTML = `
            <p>
                เว็บไซต์ BMC HOMEMART ใช้คุกกี้ที่จำเป็นต่อการทำงานของเว็บไซต์
                และอาจใช้คุกกี้เพื่อปรับปรุงประสบการณ์การใช้งานของคุณ
                <a href="cookie-policy.html">อ่านนโยบายการใช้งานคุกกี้</a>
            </p>
            <div class="cookie-actions">
                <button type="button" class="cookie-btn" id="bmcCookieReject">ปฏิเสธ</button>
                <button type="button" class="cookie-btn primary" id="bmcCookieAccept">ยอมรับทั้งหมด</button>
            </div>`;
        document.body.appendChild(box);

        document.getElementById('bmcCookieAccept').addEventListener('click', function(){
            localStorage.setItem(KEY, 'accepted');
            box.remove();
        });
        document.getElementById('bmcCookieReject').addEventListener('click', function(){
            localStorage.setItem(KEY, 'rejected');
            box.remove();
        });
    }

    if(!existing){
        if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', showBanner);
        else showBanner();
    }
})();
