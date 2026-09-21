document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
        });
        
        // Cierra el menú al hacer clic en un enlace (móvil)
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 1024) { // lg breakpoint
                    mobileMenu.classList.add('hidden');
                    mobileMenu.classList.remove('flex');
                }
            });
        });
    }

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

    // Form submission handling (Embudo Corporativo hacia WhatsApp)
    const form = document.querySelector('form');
    if (form) {
        form.removeAttribute('onsubmit');
        form.addEventListener('submit', (e: Event) => {
            e.preventDefault();
            
            const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement | null;
            if (!btn) return;

            // Extract values by field types and positions
            const inputs = form.querySelectorAll('input');
            const selects = form.querySelectorAll('select');
            const textareas = form.querySelectorAll('textarea');

            const empresa = inputs[0]?.value || 'No especificada';
            const correo = inputs[1]?.value || 'No especificado';
            const servicio = selects[0]?.value || 'No especificado';
            const norma = inputs[2]?.value || 'No especificada';
            const descripcion = textareas[0]?.value || 'No especificada';

            // Construir el mensaje de WhatsApp
            let mensaje = `*NUEVO REQUERIMIENTO TÉCNICO B2B*\n\n`;
            mensaje += `*Empresa:* ${empresa}\n`;
            mensaje += `*Correo:* ${correo}\n`;
            mensaje += `*Servicio:* ${servicio}\n`;
            mensaje += `*Norma:* ${norma}\n`;
            mensaje += `*Descripción:* ${descripcion}\n`;

            const encodedMessage = encodeURIComponent(mensaje);
            const whatsappUrl = `https://wa.me/584149428999?text=${encodedMessage}`;

            const originalText = btn.innerHTML;
            btn.innerHTML = '<span class="material-symbols-outlined animate-spin text-[20px]">sync</span> PROCESANDO...';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerHTML = '<span class="material-symbols-outlined text-[20px]">check_circle</span> REDIRIGIENDO A WHATSAPP';
                btn.classList.replace('bg-primary-container', 'bg-green-600');
                
                // Redirigir a WhatsApp
                window.open(whatsappUrl, '_blank');
                
                form.reset();
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.classList.replace('bg-green-600', 'bg-primary-container');
                    btn.disabled = false;
                }, 3000);
            }, 1000);
        });
    }
});
