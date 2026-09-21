# Plan Estratégico, Diseño y Arquitectura Web - FAMESA C.A.

Este documento consolida el plan estratégico final, verificado y ampliado para el ecosistema digital B2B de FAMESA C.A., integrando la arquitectura de la página, el embudo dual y el sistema de diseño.

---

## 1. Validación de Credenciales (Verificado)
Se confirma a través de los registros de Instagram (análisis OCR en publicaciones directas de la empresa) que Famesa **sí cuenta con la certificación ASME y AWS**. Utilizaremos esto como el ancla principal de confianza corporativa, ya que elimina el riesgo para las empresas contratantes.

## 2. Sistema de Diseño Base (Sharp Catalog Adaptado)
El prototipo generado con la herramienta de diseño **Stitch** se rige por los siguientes Design Tokens:

- **Estética:** Industrial, minimalista, ingeniería de precisión (Sharp Catalog).
- **Esquinas:** `border-radius: 0px` estricto en todos los componentes. Sin sombras difusas.
- **Paleta de Colores:**
  - **Azul Corporativo (`#003AD7` / Azul Rey):** Transmite tecnología, solidez y seguridad. Uso exclusivo en CTAs primarios y headers.
  - **Blanco (`#FFFFFF`):** Máxima limpieza visual y legibilidad.
  - **Plateado / Gris Acero (`#E5E5E5` a `#A3A3A3`):** Para bordes de `1px` que simulan placas de metal unidas.
- **Tipografía:**
  - **Títulos:** Sans-serif condensada, gruesa y en mayúsculas (ej. *Barlow Condensed*, *DIN 2014*).
  - **Cuerpo:** Sans-serif neutra de alta legibilidad (ej. *Inter*, *Roboto*).

---

## 3. Arquitectura del Sitio (Rutas y Redirecciones)

### Landing Page Principal (`/`) - "La Landing ES el Catálogo"
- **Header:** Sticky, logo, CTA "Solicitar Cotización".
- **Hero:** Impacto visual con fotos de soldadores / instalaciones. Título gigante: *INGENIERÍA METALMECÁNICA Y SOLDADURAS ESPECIALES DE ALTA PRESIÓN*.
- **Barra de Social Proof:** Certificados ASME / AWS / Años de trayectoria.
- **Grid de Servicios (Catálogo B2B):**
  - Mantenimiento Industrial
  - Soldadura Especial (TIG/MIG)
  - Fabricación Metalmecánica
- **Sección de Autoridad (Realidad Operativa):** Fotos reales de las instalaciones en Valencia, el equipo trabajando, y métricas duras ("0 Accidentes").
- **Footer:** Datos de contacto formales, ubicación.

### Embudo Dual (Manejo de Leads)
1. **Ruta Rápida (Soporte Urgente):**
   - Todos los botones de contacto rápido (flotantes, íconos de chat) abren directamente `wa.me/584143410187` para paradas de planta o consultas inmediatas.
2. **Ruta Corporativa (Licitaciones / Grandes Proyectos):**
   - Los botones `[ COTIZAR PROYECTO ]` abren un panel lateral (Drawer) en lugar de recargar la página.
   - El Drawer incluye un formulario avanzado: Nombre, Empresa, Requerimiento y un campo crítico: **Subir Archivos (Planos, Especificaciones, RFPs)**.
   - **Acción:** Al enviar, redirige a una URL de éxito (`/gracias-cotizacion`) y envía un correo corporativo.

### Páginas Secundarias (Subpáginas Estratégicas)
- `/servicios/mantenimiento-industrial` (Redirección para tráfico SEO específico de mantenimiento de plantas).
- `/servicios/soldaduras-alta-presion` (Redirección SEO enfocada en certificaciones ASME/AWS).
- `/descargar-dossier` (Landing page para Lead Nurturing, donde los departamentos de compras dejan su correo a cambio del brochure de certificaciones y calidad).
- `/gracias-cotizacion` (Página de agradecimiento donde se indica que un ingeniero se comunicará en menos de 24 horas).

---

*Nota: Este documento base se almacenará en el repositorio oficial del proyecto para servir de mapa de ruta a desarrolladores y diseñadores en las fases de maquetado e implementación en código.*
