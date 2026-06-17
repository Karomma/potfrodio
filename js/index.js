// ข้อมูลโครงการผลงาน (Project Data)
const projects = [
    {
        id: 1,
        title: "E-Commerce Web Application",
        description: "ระบบร้านค้าออนไลน์แบบเต็มรูปแบบที่พัฒนาด้วย HTML5, CSS3 และ JavaScript แท้ (Vanilla JS) โดยมีการจำลองระบบตะกร้าสินค้าที่ตอบสนองอย่างรวดเร็ว (Reactive Cart System) ระบบค้นหาและกรองสินค้าตามประเภท ตลอดจนถึงการจัดระเบียบฟอร์มกรอกข้อมูลการสั่งซื้อสินค้าพร้อมระบบตรวจสอบความถูกต้องก่อนชำระเงิน เหมาะสำหรับการเรียนรู้และต่อยอดระบบพาณิชย์อิเล็กทรอนิกส์ในชีวิตจริง",
        image: "img/Screenshot 2026-06-17 133727.png",
        tags: ["HTML5", "CSS3 / Flexbox", "JavaScript", "Responsive Design"],
        demoLink: "https://example.com/demo1",
        codeLink: "https://github.com/peerapat-dev/ecommerce-app"
    },
    {
        id: 2,
        title: "Task Management Board",
        description: "แอปพลิเคชันสำหรับจัดการโครงการและติดตามภาระงานในทีม ออกแบบอินเตอร์เฟสตามสไตล์ Kanban Board ที่คุ้นเคย รองรับระบบลากและวาง (Drag & Drop Interface) เพื่อย้ายสถานะของงานได้อย่างลื่นไหล พร้อมระบบบันทึกข้อมูลภาระงานลงใน LocalStorage ของบราวเซอร์ ทำให้ข้อมูลไม่สูญหายเมื่อรีเฟรชหน้าเว็บ มีฟังก์ชันกรองความสำคัญของงาน (Priority tags) ช่วยยกระดับประสิทธิภาพการทำงานของทีม",
        image: "img/Screenshot 2026-06-17 133740.png",
        tags: ["HTML5", "CSS3 / Grid", "JavaScript (ES6)", "LocalStorage"],
        demoLink: "https://example.com/demo2",
        codeLink: "https://github.com/peerapat-dev/task-management"
    },
    {
        id: 3,
        title: "Admin Dashboard Console",
        description: "ระบบการจัดการข้อมูลสำหรับผู้ดูแลระบบ (Admin Console) ออกแบบ UI/UX ให้ทันสมัยและสะอาดตา แสดงผลข้อมูลสถิติต่างๆ ในรูปแบบกราฟิกและชาร์ตที่เข้าใจง่าย (Data Visualization) รองรับฟังก์ชันการจัดการรายชื่อผู้ใช้ ค้นหา คัดกรอง และแก้ไขข้อมูลสมาชิกได้อย่างสะดวกรวดเร็ว โครงสร้างหน้าเว็บได้รับการพัฒนาให้ปรับขนาดตามหน้าจอได้อย่างสมบูรณ์ (Responsive) ปลอดภัยและมีประสิทธิภาพสูง",
        image: "img/Screenshot 2026-06-17 133805.png",
        tags: ["HTML5", "CSS3 SASS", "JavaScript", "Charts.js API"],
        demoLink: "https://example.com/demo3",
        codeLink: "https://github.com/peerapat-dev/admin-dashboard"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------
    // 1. ระบบ Mobile Navigation Menu
    // ----------------------------------------
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const meuNav = document.querySelector('.meu-nav');
    
    if (mobileMenuBtn && meuNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            meuNav.classList.toggle('active');
        });

        // คลิกที่ลิงก์เมนูแล้วปิดแถบเมนูทันที
        const navLinks = meuNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                meuNav.classList.remove('active');
            });
        });
    }

    // ----------------------------------------
    // 2. ระบบ Modal แสดงรายละเอียดผลงาน
    // ----------------------------------------
    const modal = document.getElementById('project-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalOverlay = modal ? modal.querySelector('.modal-overlay') : null;
    const viewButtons = document.querySelectorAll('.btn-view');
    
    // องค์ประกอบภายใน Modal
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalTags = document.getElementById('modal-tags');
    const modalDemo = document.getElementById('modal-demo');
    const modalCode = document.getElementById('modal-code');

    // ฟังก์ชันเปิด Modal พร้อมโหลดข้อมูลผลงาน
    const openProjectModal = (projectId) => {
        const project = projects.find(p => p.id === parseInt(projectId));
        if (!project || !modal) return;

        // ใส่ข้อมูลใน Modal
        if (modalImg) modalImg.src = project.image;
        if (modalImg) modalImg.alt = project.title;
        if (modalTitle) modalTitle.textContent = project.title;
        if (modalDesc) modalDesc.textContent = project.description;
        
        // สร้าง Tags
        if (modalTags) {
            modalTags.innerHTML = '';
            project.tags.forEach(tag => {
                const tagSpan = document.createElement('span');
                tagSpan.className = 'tech-tag';
                tagSpan.textContent = tag;
                modalTags.appendChild(tagSpan);
            });
        }
        
        // ใส่ลิ้งก์เดโมและโค้ด
        if (modalDemo) modalDemo.href = project.demoLink;
        if (modalCode) modalCode.href = project.codeLink;

        // แสดง Modal
        modal.classList.add('open');
        document.body.style.overflow = 'hidden'; // ป้องกันการเลื่อนหน้าเว็บด้านหลัง
    };

    // ฟังก์ชันปิด Modal
    const closeProjectModal = () => {
        if (!modal) return;
        modal.classList.remove('open');
        document.body.style.overflow = ''; // คืนค่าการเลื่อนหน้าเว็บ
    };

    // ผูกเหตุการณ์กับปุ่มดูผลงานทุกปุ่ม
    viewButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const projectId = e.target.getAttribute('data-project-id');
            openProjectModal(projectId);
        });
    });

    // ผูกเหตุการณ์การปิด Modal
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeProjectModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeProjectModal);
    }

    // ปิด Modal เมื่อกดปุ่ม Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeProjectModal();
        }
    });

    // ----------------------------------------
    // 3. ระบบเปลี่ยนโหมดสว่าง/มืด (Theme Switcher Mock)
    // ----------------------------------------
    const themeBtn = document.querySelector('.btn-Sun');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            // แจ้งเตือนสั้นๆ หรือเปลี่ยนรูปไอคอน (ถ้าต้องการพัฒนาต่อในอนาคต)
            const img = themeBtn.querySelector('img');
            if (document.body.classList.contains('light-theme')) {
                // หากเปลี่ยนเป็นธีมสว่าง (สามารถเปลี่ยนไอคอนได้)
                themeBtn.style.transform = 'rotate(180deg)';
                themeBtn.style.transition = 'transform 0.5s ease';
            } else {
                themeBtn.style.transform = 'rotate(0deg)';
            }
        });
    }
});
