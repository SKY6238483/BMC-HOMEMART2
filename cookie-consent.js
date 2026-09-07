/* =========================================================
   BMC HOMEMART - COOKIE CONSENT
   แสดงแจ้งเตือนคุกกี้ทันทีเมื่อเปิดเว็บไซต์
========================================================= */
(function () {
    const KEY = 'bmcCookieConsentV2';

    function injectStyles() {
        if (document.getElementById('bmcCookieConsentStyles')) return;

        const style = document.createElement('style');
        style.id = 'bmcCookieConsentStyles';
        style.textContent = `
            #bmcCookieOverlay {
                position: fixed;
                inset: 0;
                background: rgba(0,0,0,.28);
                z-index: 999998;
                backdrop-filter: blur(2px);
                -webkit-backdrop-filter: blur(2px);
            }

            #bmcCookieConsent {
                position: fixed;
                left: 50%;
                bottom: 24px;
                transform: translateX(-50%);
                width: min(920px, calc(100% - 30px));
                background: #fff;
                color: #222;
                border-radius: 18px;
                padding: 24px 26px;
                box-shadow: 0 18px 55px rgba(0,0,0,.22);
                border: 1px solid #e8e5df;
                z-index: 999999;
                font-family: "Prompt", Arial, sans-serif;
                animation: bmcCookieIn .35s ease-out;
            }

            #bmcCookieConsent .cookie-title {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 8px;
                font-size: 20px;
                font-weight: 600;
            }

            #bmcCookieConsent .cookie-icon {
                font-size: 24px;
                line-height: 1;
            }

            #bmcCookieConsent p {
                margin: 0;
                color: #555;
                font-size: 14px;
                line-height: 1.8;
            }

            #bmcCookieConsent a {
                color: #a17a42;
                text-decoration: underline;
                font-weight: 500;
            }

            #bmcCookieConsent .cookie-actions {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                gap: 10px;
                margin-top: 18px;
            }

            #bmcCookieConsent .cookie-btn {
                min-width: 130px;
                padding: 11px 20px;
                border-radius: 8px;
                border: 1px solid #d8d4cd;
                background: #fff;
                color: #333;
                font-family: inherit;
                font-size: 14px;
                cursor: pointer;
                transition: .2s ease;
            }

            #bmcCookieConsent .cookie-btn:hover {
                border-color: #a17a42;
                color: #a17a42;
            }

            #bmcCookieConsent .cookie-btn.primary {
                background: #a17a42;
                border-color: #a17a42;
                color: #fff;
            }

            #bmcCookieConsent .cookie-btn.primary:hover {
                background: #856332;
                border-color: #856332;
                color: #fff;
            }

            @keyframes bmcCookieIn {
                from { opacity: 0; transform: translate(-50%, 18px); }
                to { opacity: 1; transform: translate(-50%, 0); }
            }

            @media (max-width: 600px) {
                #bmcCookieOverlay {
                    background: rgba(0,0,0,.22);
                }

                #bmcCookieConsent {
                    left: 12px;
                    bottom: 12px;
                    width: calc(100% - 24px);
                    transform: none;
                    padding: 20px;
                    border-radius: 16px;
                }

                #bmcCookieConsent .cookie-title {
                    font-size: 18px;
                }

                #bmcCookieConsent p {
                    font-size: 13px;
                    line-height: 1.7;
                }

                #bmcCookieConsent .cookie-actions {
                    flex-direction: column-reverse;
                    align-items: stretch;
                }

                #bmcCookieConsent .cookie-btn {
                    width: 100%;
                }

                @keyframes bmcCookieIn {
                    from { opacity: 0; transform: translateY(18px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            }
        `;
        document.head.appendChild(style);
    }

    function showBanner() {
        if (document.getElementById('bmcCookieConsent')) return;

        injectStyles();

        const overlay = document.createElement('div');
        overlay.id = 'bmcCookieOverlay';
        overlay.setAttribute('aria-hidden', 'true');

        const box = document.createElement('div');
        box.id = 'bmcCookieConsent';
        box.setAttribute('role', 'dialog');
        box.setAttribute('aria-modal', 'true');
        box.setAttribute('aria-labelledby', 'bmcCookieTitle');

        box.innerHTML = `
            <div class="cookie-title" id="bmcCookieTitle">
                <span class="cookie-icon" aria-hidden="true">🍪</span>
                การใช้คุกกี้ของเว็บไซต์
            </div>
            <p>
                เว็บไซต์ BMC HOMEMART ใช้คุกกี้ที่จำเป็นต่อการทำงานของเว็บไซต์
                และอาจใช้คุกกี้เพื่อปรับปรุงประสบการณ์การใช้งานของคุณ
                คุณสามารถอ่านรายละเอียดเพิ่มเติมได้ที่
                <a href="cookie-policy.html">นโยบายการใช้งานคุกกี้</a>
                และ <a href="privacy-policy.html">นโยบายความเป็นส่วนตัว</a>
            </p>
            <div class="cookie-actions">
                <button type="button" class="cookie-btn" id="bmcCookieReject">ปฏิเสธคุกกี้ที่ไม่จำเป็น</button>
                <button type="button" class="cookie-btn primary" id="bmcCookieAccept">ยอมรับคุกกี้ทั้งหมด</button>
            </div>
        `;

        document.body.appendChild(overlay);
        document.body.appendChild(box);
        document.body.style.overflow = 'hidden';

        function closeConsent(value) {
            localStorage.setItem(KEY, value);
            box.remove();
            overlay.remove();
            document.body.style.overflow = '';
        }

        document.getElementById('bmcCookieAccept').addEventListener('click', function () {
            closeConsent('accepted');
        });

        document.getElementById('bmcCookieReject').addEventListener('click', function () {
            closeConsent('rejected');
        });

        box.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                document.body.style.overflow = '';
            });
        });
    }

    function init() {
        if (localStorage.getItem(KEY)) return;
        showBanner();
    }

    // แสดงทันทีหลัง DOM พร้อมใช้งาน ไม่มีการหน่วงเวลา
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init, { once: true });
    } else {
        init();
    }
})();
