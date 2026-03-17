# Correções de Links — Bye Bye Solteiro

## Arquivos novos entregues
- `dashboard.html` — corrigido (sidebar completo com todos os links)
- `admin-metricas.html` — novo (página de métricas do painel admin)
- `link-patch.js` — script utilitário (opcional, conserta '#' automaticamente)

## Correções manuais necessárias nos demais arquivos

### 1. `login.html`
Linha com botão de submit — adicionar `onclick`:
```
ANTES: <button class="btn-submit"><span>Entrar na plataforma →</span></button>
DEPOIS: <button class="btn-submit" onclick="window.location.href='dashboard.html'"><span>Entrar na plataforma →</span></button>

ANTES: <button class="btn-submit"><span>Criar conta grátis →</span></button>
DEPOIS: <button class="btn-submit" onclick="window.location.href='dashboard.html'"><span>Criar conta grátis →</span></button>

ANTES: (dois botões btn-google)
DEPOIS: adicionar onclick="window.location.href='dashboard.html'" nos botões Google
```

### 2. `fornecedores.html`
9x vendor card — trocar todos os `href="#"` nos `.vendor-cta`:
```
ANTES: <a href="#" class="vendor-cta">Ver Perfil</a>
DEPOIS: <a href="perfil-fornecedor.html" class="vendor-cta">Ver Perfil</a>
```
Também adicionar seção "Conta" ao sidebar (antes de `</nav>`):
```html
<span class="snl" style="margin-top:16px">Conta</span>
<a href="meu-perfil.html" class="nav-item">👤 Meu Perfil</a>
<a href="configuracoes.html" class="nav-item">⚙️ Configurações</a>
```

### 3. `detalhe-evento.html`
**Sidebar:**
```
ANTES: <a href="#" class="nav-item">📸 Álbum</a>
DEPOIS: <a href="album-fotos.html" class="nav-item">📸 Álbum</a>

ANTES: <a href="#" class="nav-item">🛍️ Loja de Kits</a>
DEPOIS: <a href="loja-kits.html" class="nav-item">🛍️ Loja de Kits</a>
```
Adicionar seção Conta ao sidebar (igual acima).

**Tab Checklist — abrir como página separada:**
```
ANTES: onclick="switchTab('cl',this)"
DEPOIS: onclick="window.location.href='checklist.html'"
```

### 4. `split-pagamento.html`
Mesmo fix do sidebar:
```
ANTES: <a href="#" class="nav-item">📸 Álbum</a>
DEPOIS: <a href="album-fotos.html" class="nav-item">📸 Álbum</a>

ANTES: <a href="#" class="nav-item">🛍️ Loja de Kits</a>
DEPOIS: <a href="loja-kits.html" class="nav-item">🛍️ Loja de Kits</a>
```
Adicionar seção Conta ao sidebar.

### 5. `admin-dashboard.html`
Link já apontava para `admin-metricas.html` ✅ (agora a página existe)

---

## Alternativa rápida: incluir link-patch.js
Se preferir não editar todos os arquivos manualmente, inclua no `<head>` de cada HTML:
```html
<script src="link-patch.js" defer></script>
```
Isso conserta automaticamente a maioria dos '#' links.
