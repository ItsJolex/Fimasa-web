document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#' || !targetId) return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form submission handling (Embudo Corporativo)
    const form = document.querySelector('form');
    if (form) {
        // Override the default inline onsubmit from Stitch
        form.removeAttribute('onsubmit');
        form.addEventListener('submit', (e: Event) => {
            e.preventDefault();
            
            // Simular envío de RFQ
            const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement | null;
            if (!btn) return;

            const originalText = btn.innerHTML;
            
            btn.innerHTML = '<span class="material-symbols-outlined animate-spin text-[20px]">sync</span> ENVIANDO...';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerHTML = '<span class="material-symbols-outlined text-[20px]">check_circle</span> REQUERIMIENTO ENVIADO';
                btn.classList.replace('bg-primary-container', 'bg-green-600');
                
                alert('Su requerimiento B2B ha sido enviado exitosamente al Departamento de Ingeniería de Costos de FAMESA C.A. Un ingeniero se pondrá en contacto con usted en menos de 24 horas.');
                
                form.reset();
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.classList.replace('bg-green-600', 'bg-primary-container');
                    btn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }
});
