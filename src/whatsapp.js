import {products,money,sanitizeCart,total} from './catalog.js';
// Nomor admin yang diberikan: 085607746031. Format internasional WhatsApp: 6285607746031.
const phone='6285607746031';
export function getWhatsAppUrl(topic='help',input={}){
 const cart=sanitizeCart(input);
 const text=topic==='order'?'Halo Admin Makmul Sidogede, saya ingin pesan:\n\n'+products.filter(p=>cart[p.id]).map(p=>`• ${cart[p.id]} × ${p.name} — ${money(p.price*cart[p.id])}`).join('\n')+`\n\nSubtotal estimasi: ${money(total(cart))}\nBelum termasuk ongkir. Mohon konfirmasi harga aktual, ketersediaan, dan cara pengiriman/pengambilan. Terima kasih.`:'Halo Admin Makmul Sidogede, saya masih bingung memilih jajanan. Boleh minta rekomendasi menu dan informasi harga serta ketersediaannya?';
 return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
