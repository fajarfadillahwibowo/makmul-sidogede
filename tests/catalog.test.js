import {test} from 'node:test';import assert from 'node:assert/strict';import {products,filterProducts,total,sanitizeCart} from '../src/catalog.js';
test('catalog contains all seven requested snacks',()=>{assert.equal(products.length,7);for(const id of ['risol-mayo','risol-ayam','risol-sayur','donat','dadar-gulung','martabak-tahu','klepon'])assert.ok(products.some(p=>p.id===id))});
test('category and search combine',()=>{assert.equal(filterProducts('risol','gurih').length,3);assert.equal(filterProducts('risol','manis').length,0)});
test('favorites filter and ordering work',()=>{assert.equal(filterProducts('','favorite',['klepon'])[0].id,'klepon');let list=filterProducts('','all',[],'low');assert.equal(list[0].price,3000)});
test('cart sanitizes corrupted data and caps quantity',()=>{assert.deepEqual(sanitizeCart(null),{});assert.deepEqual(sanitizeCart({'klepon':200,'risol-mayo':-1,'fake':4,'donat':'3'}),{klepon:99})});
test('subtotal follows menu prices',()=>assert.equal(total({'risol-mayo':2,'klepon':1}),13000));
