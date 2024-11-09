// تحديد عناصر الـ divs من القسمين section-1 و section-2
const divs = document.querySelectorAll('.section-1 div');

// تحديد عناصر النافذة المنبثقة
const modal = document.getElementById('pdfModal');
const closeModal = document.getElementById('closeModal');
const closeButton = document.getElementById('closeButton');
const expandButton = document.getElementById('expandButton');
const modalContent = document.querySelector('.modal-content');
const pdfViewer = document.getElementById('pdfViewer');

let isExpanded = false; // لتتبع حالة النافذة

// عند النقر على أي div داخل الـ section-1 أو section-2
divs.forEach(div => {
    div.onclick = function() {
        const pdfFile = div.getAttribute('data-pdf'); // الحصول على اسم الملف من الخاصية data-pdf
        pdfViewer.src = pdfFile; // تغيير مصدر الـ iframe
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // منع التمرير
    };
});

// إغلاق النافذة المنبثقة عند النقر على زر الإغلاق
closeModal.onclick = function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // السماح بالتمرير مرة أخرى
};

closeButton.onclick = function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // السماح بالتمرير مرة أخرى
};

// إغلاق النافذة المنبثقة عند النقر خارج المحتوى
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // السماح بالتمرير مرة أخرى
    }
};

// وظيفة التكبير والتصغير
expandButton.onclick = function() {
    if (!isExpanded) {
        modalContent.style.width = '100%';
        expandButton.innerHTML = '<span class="material-symbols-outlined">zoom_out_map</span>'; // تغيير الأيقونة إلى "تصغير"
    } else {
        modalContent.style.width = '80%';
        expandButton.innerHTML = '<span class="material-symbols-outlined">zoom_in_map</span>'; // تغيير الأيقونة إلى "تكبير"
    }
    isExpanded = !isExpanded; // تغيير الحالة
};

