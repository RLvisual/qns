var SHOP = "QNS Digital Printing";
var CATS = ["Semua", "Banner", "Stiker", "Jersey & Kaos", "Sablon", "Cetak A3", "Stempel"];
var ICONS = {
  banner: '<svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M7 20h10M9 16v4M15 16v4"/></svg>',
  xy: '<svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="6" y="2" width="12" height="16" rx="1.5"/><path d="M12 18v4M8 22l4-4 4 4"/></svg>',
  stiker: '<svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"/><path d="M15 3v6h6"/></svg>',
  jersey: '<svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>',
  kaos: '<svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>',
  sablon: '<svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2v6M12 22v-6M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M2 12h6M22 12h-6M4.93 19.07l4.24-4.24M14.83 9.17l4.24-4.24"/></svg>',
  a3: '<svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>',
  stempel: '<svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 22h14M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77ZM14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13"/></svg>'
};

var P = [
  { id: "banner", n: "Banner", cat: "Banner", col: "#d8161c", d: "Spanduk indoor dan outdoor, dihitung per meter.", mode: "area", u: "m²", opts: [["FX280", 22000], ["FX300", 25000], ["Korcin 440 gsm", 40000]], est: "1–2 hari" },
  { id: "xy", n: "X-Banner & Y-Banner", cat: "Banner", col: "#8f0f14", d: "Banner lengkap dengan standing, siap pakai.", mode: "fix", u: "pcs", opts: [["X-Banner FX280", 50000], ["Y-Banner FX280", 75000], ["X-Banner Korcin", 75000], ["Y-Banner Korcin", 90000]], est: "1–2 hari" },
  { id: "stiker", n: "Stiker Meteran", cat: "Stiker", col: "#1e2230", d: "Stiker per meter, pilih bahan sesuai kebutuhan.", mode: "area", u: "m²", opts: [["China", 70000], ["Quantac / Vinyl", 80000], ["Ritrama", 95000], ["Graftac", 100000], ["One way", 110000], ["Sandblast", 115000]], add: [{ n: "Cutting 1 warna", price: 50, per: "cm" }, { n: "Cutting 2 warna", price: 75, per: "cm" }, { n: "Cutting 3 warna", price: 100, per: "cm" }, { n: "Kiss cut (A3)", price: 50000, per: "order" }, { n: "Die cut (A3)", price: 65000, per: "order", note: "bisa tambah Rp5.000–10.000, dikonfirmasi admin" }], est: "1–3 hari" },
  { id: "jersey", n: "Jersey Full Print", cat: "Jersey & Kaos", col: "#d8161c", d: "Jersey custom full print, satuan atau tim.", mode: "fix", u: "pcs", opts: [["Pendek atasan", 85000], ["Pendek satu set", 135000], ["Panjang atasan", 120000], ["Panjang satu set", 150000], ["Wangky pendek", 130000]], est: "5–7 hari" },
  { id: "kaos", n: "Kaos 245", cat: "Jersey & Kaos", col: "#8f0f14", d: "Kaos polos ukuran anak dan dewasa.", mode: "fix", u: "pcs", opts: [["Anak M–XL", 40000], ["Anak XXL–XXXL", 43000], ["Dewasa M–XL", 45000], ["Dewasa XXL–XXXL", 55000]], est: "2–4 hari" },
  { id: "sablon", n: "Sablon DTF", cat: "Sablon", col: "#1e2230", d: "Cetak DTF untuk kaos dan bahan lain.", mode: "fix", u: "pcs", opts: [["DTF logo", 8000], ["DTF A5", 22000], ["DTF A4", 25000], ["DTF A3", 35000], ["Meteran 58 × 100 cm", 35000]], est: "1–2 hari" },
  { id: "a3", n: "Cetak A3", cat: "Cetak A3", col: "#d8161c", d: "Cetak A3 di berbagai bahan, bisa laminasi dan cutting.", mode: "fix", u: "lembar", opts: [["AP 150 gsm", 5000], ["AP 260 gsm", 6000], ["Chromo", 8000], ["Vinyl", 20000], ["Transparan", 20000]], add: [{ n: "Laminasi doff", price: 5000, per: "unit" }, { n: "Laminasi glossy", price: 5000, per: "unit" }, { n: "Cutting", price: 2000, per: "unit", note: "Rp2.000–6.000, dikonfirmasi admin sesuai kerumitan" }], est: "1 hari" },
  { id: "stempel", n: "Stempel Flash", cat: "Stempel", col: "#8f0f14", d: "Banyak varian ukuran dan bentuk. Harga dikonfirmasi admin setelah pesanan masuk.", mode: "quote", u: "pcs", opts: [["Sesuai permintaan", 0]], est: "1 hari" }
];
var STAT = ["Menunggu pembayaran", "Pembayaran dikonfirmasi", "Sedang diproses", "Selesai"];
var KEY = "printku_orders", ADMIN_PIN = "1234", OWNER_PIN = "9999", offline = false;

var $ = function(s) { return document.querySelector(s); };
function rp(n) { return "Rp " + Math.round(n).toLocaleString("id-ID"); }
function esc(s) { var d = document.createElement("div"); d.textContent = s; return d.innerHTML; }
function load() { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; } }
function save(a) { try { localStorage.setItem(KEY, JSON.stringify(a)); } catch (e) {} }

var cat = "Semua", cur = null, draft = null;

function renderCatalog() {
  $("#chips").innerHTML = CATS.map(function(c) {
    return '<button class="chip" aria-pressed="' + (c === cat) + '" data-c="' + c + '">' + c + '</button>';
  }).join("");
  var list = P.filter(function(p) { return cat === "Semua" || p.cat === cat; });
  $("#grid").innerHTML = list.map(function(p) {
    var min = Math.min.apply(null, p.opts.map(function(o) { return o[1]; }));
    return '<article class="tile">' +
      '<div class="sw" style="background:linear-gradient(135deg, ' + p.col + ', #12141d)" aria-hidden="true">' +
        '<span class="tag">' + p.cat + '</span>' +
        '<span class="ico">' + (ICONS[p.id] || p.n.charAt(0)) + '</span>' +
      '</div>' +
      '<div class="bd">' +
        '<h3>' + p.n + '</h3>' +
        '<p>' + p.d + '</p>' +
        '<div class="pr">' + (min ? 'Mulai ' + rp(min) + ' / ' + p.u : 'Harga dikonfirmasi admin') + '</div>' +
        '<div class="est">⏱ Estimasi ' + p.est + '</div>' +
        '<button class="btn" data-o="' + p.id + '">Pesan Sekarang</button>' +
      '</div>' +
    '</article>';
  }).join("");
}

$("#chips").addEventListener("click", function(e) {
  var c = e.target.dataset.c;
  if (c) { cat = c; renderCatalog(); }
});
$("#grid").addEventListener("click", function(e) {
  var o = e.target.dataset.o;
  if (o) openOrder(o);
});

function open_(h) {
  $("#md").innerHTML = '<button class="x" aria-label="Tutup" data-close>×</button>' + h;
  $("#ov").classList.add("open");
}
function close_() {
  $("#ov").classList.remove("open");
}
$("#ov").addEventListener("click", function(e) {
  if (e.target.id === "ov" || e.target.hasAttribute("data-close")) close_();
});
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") close_();
});

function calc() {
  if (!$("#f-opt")) return { total: 0, adds: [] };
  var p = cur, i = +$("#f-opt").value, q = Math.max(1, +$("#f-q").value || 1), base = p.opts[i][1], sub = 0, names = [];
  var info = "";
  if (p.mode === "area") {
    var w = +$("#f-w").value || 0, h = +$("#f-h").value || 0, r50 = function(v) { return Math.ceil(v / 50) * 50; }, ar;
    if (p.id === "banner" && q === 1) {
      var W = r50(w), H = r50(h);
      ar = Math.max(1, W * H / 10000);
      info = "1 pcs: ukuran dibulatkan per 50 cm (" + W + " × " + H + " cm), minimal 1 m². Dihitung " + ar.toLocaleString("id-ID") + " m².";
    } else {
      ar = Math.max(w * h / 10000, 0.25) * q;
      info = "Dihitung " + ar.toLocaleString("id-ID") + " m²" + (q > 1 ? " (" + q + " pcs)" : "") + ".";
    }
    sub = ar * base;
  } else {
    sub = base * q;
  }
  if ($("#f-info")) $("#f-info").textContent = info;
  (p.add || []).forEach(function(a, k) {
    var c = $("#a" + k);
    if (c && c.checked) {
      names.push(a.n);
      sub += a.per === "cm" ? a.price * (+$("#cm" + k).value || 0) : a.per === "unit" ? a.price * q : a.price;
    }
  });
  var df = +$("#f-d").value || 0;
  sub += df;
  sub = Math.ceil(sub / 500) * 500;
  $("#f-tot").textContent = p.mode === "quote" ? "Dikonfirmasi admin" : rp(sub);
  return { total: p.mode === "quote" ? 0 : sub, adds: names, design: df };
}

function openOrder(id) {
  cur = P.filter(function(p) { return p.id === id; })[0];
  var p = cur,
    size = p.mode === "area" ? '<div class="fld"><label>Ukuran (cm)</label><div class="row"><input id="f-w" type="number" min="1" value="200" aria-label="Lebar cm"><input id="f-h" type="number" min="1" value="100" aria-label="Tinggi cm"><input id="f-q" type="number" min="1" value="1" aria-label="Jumlah"></div><div id="f-info" style="font-size:13px;color:var(--mut);margin-top:4px"></div></div>' : '<div class="fld"><label for="f-q">Jumlah (' + p.u + ')</label><input id="f-q" type="number" min="1" value="1"></div>',
    adds = (p.add || []).map(function(a, k) {
      return '<label style="font-weight:400;display:flex;gap:8px;align-items:center;margin:6px 0"><input id="a' + k + '" type="checkbox" style="width:auto"><span style="flex:1">' + a.n + ' · ' + (a.per === "cm" ? "Rp" + a.price + " / cm" : rp(a.price) + (a.per === "unit" ? " / " + p.u : "")) + (a.note ? ' <small style="color:var(--mut)">(' + a.note + ')</small>' : "") + '</span>' + (a.per === "cm" ? '<input id="cm' + k + '" type="number" min="1" value="100" style="width:84px" aria-label="Panjang cutting cm">' : "") + '</label>';
    }).join("");
  open_('<h3>Pesan ' + p.n + '</h3><div style="color:var(--mut);font-size:14px">Pengerjaan ' + p.est + '</div>' +
    '<div class="fld"><label for="f-opt">' + (p.mode === "area" ? "Bahan" : "Pilihan") + '</label><select id="f-opt">' + p.opts.map(function(o, i) { return '<option value="' + i + '">' + o[0] + (p.mode === "quote" ? "" : " — " + rp(o[1]) + (p.mode === "area" ? " / m²" : " / " + p.u)) + '</option>'; }).join("") + '</select></div>' + size +
    (adds ? '<div class="fld"><label>Tambahan</label>' + adds + '</div>' : "") +
    '<div class="fld"><label for="f-file">Desain</label><input id="f-file" type="file" accept="image/*,.pdf,.cdr,.ai"><label for="f-d" style="font-weight:600;margin-top:10px">Status desain</label><select id="f-d"><option value="0">Desain sudah siap</option><option value="15000">Desain perlu diedit (+Rp15.000)</option><option value="20000">Belum ada desain (+Rp20.000)</option></select><div style="font-size:13px;color:var(--mut);margin-top:4px">Versi percobaan hanya mencatat nama file.</div></div>' +
    '<div class="fld"><label for="f-n">Catatan</label><textarea id="f-n" rows="2" placeholder="Contoh: teks, warna, ukuran, deadline"></textarea></div>' +
    '<div class="tot"><span>Total</span><b id="f-tot">Rp 0</b></div><p class="err" id="f-e"></p><div class="acts"><button class="btn" id="f-go">Submit pesanan</button></div>');
  $("#md").oninput = $("#md").onchange = calc;
  calc();
  $("#f-go").onclick = function() {
    var i = +$("#f-opt").value, f = $("#f-file").files[0], r = calc();
    draft = { pid: p.id, item: p.n, opt: p.opts[i][0], q: Math.max(1, +$("#f-q").value || 1), w: p.mode === "area" ? +$("#f-w").value : 0, h: p.mode === "area" ? +$("#f-h").value : 0, adds: r.adds, desain: r.design, file: f ? f.name : "", note: $("#f-n").value.trim(), total: r.total, quote: p.mode === "quote" };
    if (p.mode === "area" && (!draft.w || !draft.h)) { $("#f-e").textContent = "Isi lebar dan tinggi dulu."; return; }
    askContact();
  };
}

function askContact() {
  open_('<h3>Data pemesan</h3><div style="color:var(--mut);font-size:14px">Wajib diisi sebelum pesanan dibuat.</div>' +
    '<div class="fld"><label for="c-n">Nama pesanan</label><input id="c-n" placeholder="Atas nama siapa" autocomplete="name"></div>' +
    '<div class="fld"><label for="c-w">Nomor WhatsApp</label><input id="c-w" type="tel" inputmode="tel" placeholder="08xxxxxxxxxx" autocomplete="tel"></div>' +
    '<p class="err" id="c-e"></p><div class="acts"><button class="btn" id="c-go">Lanjut</button><button class="btn ghost" data-close>Batal</button></div>');
  $("#c-go").onclick = function() {
    var n = $("#c-n").value.trim(), w = $("#c-w").value.replace(/[\s-]/g, "");
    if (!n) { $("#c-e").textContent = "Nama pesanan belum diisi."; return; }
    if (!/^(\+?62|0)8\d{7,12}$/.test(w)) { $("#c-e").textContent = "Nomor WhatsApp tidak valid. Contoh: 081234567890."; return; }
    var d = new Date(), code = "QNS-" + String(d.getFullYear()).slice(2) + ("0" + (d.getMonth() + 1)).slice(-2) + ("0" + d.getDate()).slice(-2) + "-" + Math.floor(100 + Math.random() * 900);
    var o = Object.assign({ code: code, nama: n, wa: w, status: 0, src: offline ? "offline" : "online", tgl: d.toISOString() }, draft);
    var a = load();
    a.unshift(o);
    save(a);
    showStruk(o);
    renderRecent();
    renderStats();
    setOff(false);
  };
}

function detail(o) {
  return o.opt + (o.w ? " · " + o.w + " × " + o.h + " cm" : "") + " · " + o.q + "x" + (o.adds && o.adds.length ? " · +" + o.adds.join(", ") : "");
}
function tot(o) {
  return o.quote && !o.total ? "Dikonfirmasi admin" : rp(o.total);
}

function showStruk(o) {
  open_('<h3>Pesanan dibuat</h3><span class="badge">' + STAT[o.status] + '</span> <span class="badge" style="background:var(--ln);color:var(--ink)">' + (o.src === "offline" ? "Offline" : "Online") + '</span><div class="struk"><div class="code">' + o.code + '</div>' +
    '<div><span>Nama</span><span>' + esc(o.nama) + '</span></div><div><span>WhatsApp</span><span>' + esc(o.wa) + '</span></div>' +
    '<div><span>Produk</span><span>' + o.item + '</span></div><div><span>Rincian</span><span style="text-align:right">' + esc(detail(o)) + '</span></div>' +
    (o.desain ? '<div><span>' + (o.desain === 20000 ? "Desain baru" : "Edit desain") + '</span><span>' + rp(o.desain) + '</span></div>' : '') + (o.file ? '<div><span>File desain</span><span>' + esc(o.file) + '</span></div>' : '') +
    (o.note ? '<div><span>Catatan</span><span style="text-align:right">' + esc(o.note) + '</span></div>' : '') +
    '<div style="border-top:1px dashed var(--ln);margin-top:6px;padding-top:8px;font-weight:700"><span>Total</span><span>' + tot(o) + '</span></div></div>' +
    '<div class="struk"><div style="font-weight:700">Cara bayar</div><div><span>Tunai</span><span>di toko</span></div><div><span>Transfer bank</span><span>1481648161 a.n. Agus Saman</span></div><div><span>DANA</span><span>082127109919</span></div></div>' +
    '<p style="font-size:14px;color:var(--mut)">Simpan kode pesanan untuk melacak status. Setelah bayar, admin akan mengonfirmasi pesananmu.</p><div class="acts"><button class="btn" id="s-cp">Salin kode</button><button class="btn ghost" onclick="window.print()">Cetak struk</button><button class="btn ghost" data-close>Tutup</button></div>');
  $("#s-cp").onclick = function() {
    try { navigator.clipboard.writeText(o.code); $("#s-cp").textContent = "Tersalin"; } catch (e) { $("#s-cp").textContent = o.code; }
  };
}

function track(code) {
  code = (code || "").trim().toUpperCase();
  var o = load().filter(function(x) { return x.code === code; })[0];
  if (!o) { $("#lr").innerHTML = '<p class="err">Kode tidak ditemukan di perangkat ini. Periksa lagi kodenya.</p>'; return; }
  $("#lr").innerHTML = '<h3 style="margin-top:22px;font-size:24px">' + o.code + '</h3><div style="color:var(--mut);font-size:14.5px">' + o.item + ' · ' + esc(detail(o)) + ' · ' + rp(o.total) + '</div><ul class="tl">' + STAT.map(function(s, i) { return '<li class="' + (i <= o.status ? "on" : "") + '">' + s + '</li>'; }).join("") + '</ul>';
}

function renderRecent() {
  var a = load().slice(0, 4);
  $("#recent").innerHTML = a.length ? 'Pesanan terakhir: ' + a.map(function(o) { return '<button data-k="' + o.code + '">' + o.code + '</button>'; }).join("") : "";
}
$("#recent").addEventListener("click", function(e) {
  var k = e.target.dataset.k;
  if (k) { $("#lk").value = k; track(k); }
});
$("#lf").addEventListener("submit", function(e) {
  e.preventDefault();
  track($("#lk").value);
});

var ST = { trx: 1250, jual: 3400, meter: [["Kepuasan pelanggan", 98], ["Kualitas hasil", 96], ["Ketepatan waktu", 95]] };
var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function countTo(sel, n) {
  var el = $(sel);
  if (reduce) { el.textContent = n.toLocaleString("id-ID"); return; }
  var t0 = null;
  function f(t) {
    if (!t0) t0 = t;
    var k = Math.min((t - t0) / 900, 1);
    el.textContent = Math.round(n * (1 - Math.pow(1 - k, 3))).toLocaleString("id-ID") + (k === 1 ? "+" : "");
    if (k < 1) requestAnimationFrame(f);
  }
  requestAnimationFrame(f);
}

function renderStats() {
  var a = load();
  countTo("#s-trx", ST.trx + a.length);
  countTo("#s-jual", ST.jual + a.reduce(function(s, o) { return s + o.q; }, 0));
  $("#mt").innerHTML = ST.meter.map(function(m) {
    return '<div class="mt"><div><span>' + m[0] + '</span><span>' + m[1] + '%</span></div><i><u data-w="' + m[1] + '"></u></i></div>';
  }).join("");
  setTimeout(function() {
    document.querySelectorAll(".mt u").forEach(function(u) { u.style.width = u.dataset.w + "%"; });
  }, 60);
}

var role = null, af = -1;
function setOff(v) {
  offline = v;
  $("#offbar").style.display = v ? "flex" : "none";
}
function waNum(w) {
  w = w.replace(/\D/g, "");
  return w.charAt(0) === "0" ? "62" + w.slice(1) : w;
}

function admLogin() {
  open_('<h3>Masuk admin</h3><div class="fld"><label for="pin">PIN</label><input id="pin" type="password" inputmode="numeric" autocomplete="off"></div><p class="err" id="pe"></p><div class="acts"><button class="btn" id="pgo">Masuk</button></div>');
  $("#pgo").onclick = function() {
    var v = $("#pin").value;
    role = v === OWNER_PIN ? "owner" : v === ADMIN_PIN ? "admin" : null;
    if (!role) { $("#pe").textContent = "PIN salah."; return; }
    close_();
    $("#adm").classList.add("open");
    admRender();
  };
}

function admRender() {
  var a = load(), own = role === "owner";
  $("#ah-t").textContent = "Dashboard " + (own ? "owner" : "admin");
  var omzet = a.filter(function(o) { return o.status >= 1; }).reduce(function(s, o) { return s + o.total; }, 0);
  $("#a-sum").innerHTML = '<div class="sumg">' + STAT.map(function(s, i) { return '<div><b>' + a.filter(function(o) { return o.status === i; }).length + '</b><span>' + s + '</span></div>'; }).join("") + (own ? '<div class="own"><b>' + rp(omzet) + '</b><span>Omzet (sudah dibayar)</span></div>' : "") + '</div>';
  $("#a-chips").innerHTML = [["Semua", -1]].concat(STAT.map(function(s, i) { return [s, i]; })).map(function(c) { return '<button class="chip" aria-pressed="' + (af === c[1]) + '" data-f="' + c[1] + '">' + c[0] + '</button>'; }).join("");
  var l = a.filter(function(o) { return af < 0 || o.status === af; });
  $("#a-list").innerHTML = l.length ? l.map(function(o) {
    var i = a.indexOf(o);
    return '<article class="oc"><div class="oh"><b>' + o.code + '</b><span class="badge">' + (o.src === "offline" ? "Offline" : "Online") + '</span><small>' + new Date(o.tgl).toLocaleString("id-ID") + '</small></div>' +
      '<div>' + esc(o.nama) + ' · <a href="https://wa.me/' + waNum(o.wa) + '" target="_blank" rel="noopener">' + esc(o.wa) + '</a></div>' +
      '<div style="color:var(--mut)">' + o.item + ' · ' + esc(detail(o)) + (o.file ? " · file: " + esc(o.file) : "") + (o.desain ? " · " + (o.desain === 20000 ? "desain baru " : "edit desain ") + rp(o.desain) : "") + '</div>' +
      (o.note ? '<div style="color:var(--mut)">Catatan: ' + esc(o.note) + '</div>' : "") +
      '<div class="ob"><b>' + (o.quote && !o.total ? "Harga belum diatur" : rp(o.total)) + '</b>' + (o.quote ? '<input type="number" min="0" placeholder="Atur harga" data-pr="' + i + '" style="width:130px"><button class="chip" data-sp="' + i + '">Simpan</button>' : "") +
      '<select data-st="' + i + '" aria-label="Status">' + STAT.map(function(s, k) { return '<option value="' + k + '"' + (k === o.status ? " selected" : "") + '>' + s + '</option>'; }).join("") + '</select></div></article>';
  }).join("") : '<p class="sub">Belum ada pesanan. Pesanan dari pelanggan muncul di sini.</p>';
}

$("#admlink").onclick = function(e) { e.preventDefault(); admLogin(); };
$("#a-out").onclick = function() { role = null; $("#adm").classList.remove("open"); };
$("#a-off").onclick = function() { $("#adm").classList.remove("open"); setOff(true); $("#layanan").scrollIntoView(); };
$("#off-x").onclick = function() { setOff(false); };
$("#a-chips").onclick = function(e) { var f = e.target.dataset.f; if (f !== undefined) { af = +f; admRender(); } };
$("#a-list").onchange = function(e) { var i = e.target.dataset.st; if (i === undefined) return; var a = load(); a[+i].status = +e.target.value; save(a); admRender(); renderStats(); };
$("#a-list").onclick = function(e) { var i = e.target.dataset.sp; if (i === undefined) return; var v = +document.querySelector('[data-pr="' + i + '"]').value; if (!(v > 0)) return; var a = load(); a[+i].total = v; save(a); admRender(); };

renderCatalog();
renderRecent();
renderStats();
