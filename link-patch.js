// link-patch.js — Correção automática de links quebrados
// Bye Bye Solteiro — v1.0
document.addEventListener('DOMContentLoaded', function() {

  // 1. Fix sidebar '#' links by text content
  document.querySelectorAll('a[href="#"]').forEach(function(a) {
    var text = a.textContent.trim().toLowerCase();
    var icon = a.querySelector('.nav-icon') ? a.querySelector('.nav-icon').textContent : '';
    
    if (text.includes('álbum') || text.includes('album') || icon.includes('📸')) {
      a.href = 'album-fotos.html';
    } else if (text.includes('loja') || text.includes('kits') || icon.includes('🛍')) {
      a.href = 'loja-kits.html';
    } else if ((text.includes('meu perfil') || text.includes('perfil')) && !a.closest('.vendor-card') && icon.includes('👤')) {
      a.href = 'meu-perfil.html';
    } else if (text.includes('config') || icon.includes('⚙')) {
      a.href = 'configuracoes.html';
    } else if (text.includes('convidadas')) {
      a.href = 'admin-usuarios.html';
    } else if (text.includes('avalia')) {
      a.href = 'admin-fornecedores.html';
    } else if (text.includes('eventos') && a.closest('.sb-nav')) {
      a.href = 'admin-dashboard.html';
    } else if (text.includes('transações')) {
      a.href = 'admin-dashboard.html';
    } else if (text.includes('loja & pedidos')) {
      a.href = 'admin-dashboard.html';
    } else if (text.includes('receita') || text.includes('gmv')) {
      a.href = 'admin-metricas.html';
    } else if (text.includes('reembolso')) {
      a.href = 'admin-dashboard.html';
    } else if (text.includes('configura') && a.closest('.sb-nav')) {
      a.href = 'admin-dashboard.html';
    } else if (text.includes('logs') || text.includes('auditoria')) {
      a.href = 'admin-dashboard.html';
    }
  });

  // 2. Fix vendor card CTA buttons
  document.querySelectorAll('.vendor-cta[href="#"]').forEach(function(a) {
    a.href = 'perfil-fornecedor.html';
  });

  // 3. Fix login/cadastro submit buttons — redirect to dashboard
  var page = window.location.pathname.split('/').pop();
  if (page === 'login.html' || page === '') {
    document.querySelectorAll('.btn-submit').forEach(function(btn) {
      if (!btn.getAttribute('onclick')) {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          window.location.href = 'dashboard.html';
        });
      }
    });
    document.querySelectorAll('.btn-google').forEach(function(btn) {
      if (!btn.getAttribute('onclick')) {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          window.location.href = 'dashboard.html';
        });
      }
    });
  }

  // 4. Fix checklist tab in detalhe-evento to navigate to checklist.html
  if (page === 'detalhe-evento.html') {
    document.querySelectorAll('.tab-btn').forEach(function(btn) {
      if (btn.textContent.includes('Checklist')) {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          window.location.href = 'checklist.html';
        });
      }
    });
  }

  // 5. Add missing sidebar Conta section if not present
  var nav = document.querySelector('.sidebar-nav, .sb-nav');
  if (nav && !nav.querySelector('a[href="meu-perfil.html"]') && !nav.querySelector('a[href="admin-dashboard.html"]')) {
    var contaSection = document.createElement('div');
    contaSection.innerHTML = 
      '<span class="snl" style="margin-top:16px;font-size:.6rem;letter-spacing:.35em;text-transform:uppercase;color:rgba(255,255,255,.2);padding:0 28px;margin-bottom:8px;display:block">Conta</span>' +
      '<a href="meu-perfil.html" class="nav-item" style="display:flex;align-items:center;gap:12px;padding:12px 28px;color:rgba(255,255,255,.45);font-size:.82rem;text-decoration:none;transition:all .2s;cursor:none">👤 Meu Perfil</a>' +
      '<a href="configuracoes.html" class="nav-item" style="display:flex;align-items:center;gap:12px;padding:12px 28px;color:rgba(255,255,255,.45);font-size:.82rem;text-decoration:none;transition:all .2s;cursor:none">⚙️ Configurações</a>';
    nav.appendChild(contaSection);
  }

});
