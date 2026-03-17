// link-patch.js — Correção automática de links quebrados
// Incluir no <head> de todas as páginas: <script src="link-patch.js"></script>
document.addEventListener('DOMContentLoaded', function() {
  const linkMap = {
    'album-fotos': 'album-fotos.html',
    'loja-kits': 'loja-kits.html', 
    'meu-perfil': 'meu-perfil.html',
    'configuracoes': 'configuracoes.html',
    'perfil-fornecedor': 'perfil-fornecedor.html',
    'produto-detalhe': 'produto-detalhe.html',
    'checklist': 'checklist.html',
    'admin-metricas': 'admin-metricas.html',
  };
  // Fix all anchor tags with href="#"
  document.querySelectorAll('a[href="#"]').forEach(a => {
    const text = a.textContent.trim().toLowerCase();
    if (text.includes('álbum') || text.includes('album')) a.href = 'album-fotos.html';
    else if (text.includes('loja') || text.includes('kits')) a.href = 'loja-kits.html';
    else if (text.includes('perfil')) a.href = 'meu-perfil.html';
    else if (text.includes('config')) a.href = 'configuracoes.html';
    else if (text.includes('fornecedor') && a.closest('.vendor-card')) a.href = 'perfil-fornecedor.html';
    else if (text.includes('métrica') || text.includes('kpi')) a.href = 'admin-metricas.html';
  });
});
