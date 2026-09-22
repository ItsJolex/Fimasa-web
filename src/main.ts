document.addEventListener('DOMContentLoaded', () => {
    // Sidebar Mobile Logic
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-menu-btn');
    const sidebar = document.getElementById('sidebar-menu');
    const backdrop = document.getElementById('sidebar-backdrop');
    
    function toggleMenu() {
        if (!sidebar || !backdrop) return;
        
        const isOpen = !sidebar.classList.contains('-translate-x-full');
        
        if (isOpen) {
            // Close
            sidebar.classList.add('-translate-x-full');
            backdrop.classList.remove('opacity-100');
            backdrop.classList.add('opacity-0');
            setTimeout(() => backdrop.classList.add('hidden'), 300);
        } else {
            // Open
            backdrop.classList.remove('hidden');
            setTimeout(() => {
                backdrop.classList.remove('opacity-0');
                backdrop.classList.add('opacity-100');
                sidebar.classList.remove('-translate-x-full');
            }, 10);
        }
    }

    if (menuBtn) menuBtn.addEventListener('click', toggleMenu);
    if (closeBtn) closeBtn.addEventListener('click', toggleMenu);
    if (backdrop) backdrop.addEventListener('click', toggleMenu);
    
    // Cerrar al clickear un enlace en móvil
    const sidebarLinks = document.querySelectorAll('#sidebar-menu a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggleMenu();
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
