# DARWASH OPS — Contexto del proyecto

## Qué es este proyecto
App PWA de gestión de operaciones ganaderas para Darwash SA y Bulltrade SRL.
Frontend: HTML/CSS/JS vanilla en un solo archivo (index.html).
Backend: Supabase (PostgreSQL) — proyecto darwash-operaciones.
Deploy: GitHub Pages → darwashsa-ux.github.io/darwash-operaciones

## Archivos del proyecto
- index.html → toda la app (lógica, estilos, HTML)
- arribo.html → página pública para que el chofer confirme el arribo
- manifest.json → configuración PWA
- sw.js → Service Worker

## Stack
- Supabase Auth → login de usuarios
- Supabase DB → tablas: operaciones, seguimiento, usuarios, frigorificos, romaneos
- Supabase Storage → bucket "operaciones" para fotos y PDFs
- Firebase FCM → push notifications
- Telegram Bot → notificaciones operativas
- Make.com → automatización de romaneos por mail con Gemini IA

## Roles de usuario
- admin → acceso total
- jefe → dashboard, nueva carga, seguimiento (puede editar/eliminar pendientes)
- pablo → dashboard, confirmaciones, seguimiento (puede hacer cargas excepcionales)
- dte → dashboard, emitir DTE, seguimiento

## Flujo operacional
pendiente → confirmada → dte_emitido → en_transito → finalizada

## Colores del sistema (CSS variables)
--accent: #00c896 (verde principal)
--accent2: #0088ff (azul)
--warn: #ff8c00 (naranja)
--danger: #ff3d5a (rojo)
--bg: #0a0e14 (fondo oscuro)

## Convenciones del código
- IDs de formulario: prefijo c- para nueva carga, pablo- para confirmaciones, eo- para edición
- Todas las notificaciones van por Telegram a ADMINS_TG
- Supabase URL: qkrrumlbvspbxjoxvxho.supabase.co
