/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  _123: () => (/* reexport */ _123),
  afr: () => (/* reexport */ afr),
  ara: () => (/* reexport */ ara),
  ben: () => (/* reexport */ ben),
  bre: () => (/* reexport */ bre),
  bul: () => (/* reexport */ bul),
  cat: () => (/* reexport */ cat),
  ces: () => (/* reexport */ ces),
  dan: () => (/* reexport */ dan),
  deu: () => (/* reexport */ deu),
  ell: () => (/* reexport */ ell),
  eng: () => (/* reexport */ eng),
  epo: () => (/* reexport */ epo),
  est: () => (/* reexport */ est),
  eus: () => (/* reexport */ eus),
  fas: () => (/* reexport */ fas),
  fin: () => (/* reexport */ fin),
  fra: () => (/* reexport */ fra),
  gle: () => (/* reexport */ gle),
  glg: () => (/* reexport */ glg),
  guj: () => (/* reexport */ guj),
  hau: () => (/* reexport */ hau),
  heb: () => (/* reexport */ heb),
  hin: () => (/* reexport */ hin),
  hrv: () => (/* reexport */ hrv),
  hun: () => (/* reexport */ hun),
  hye: () => (/* reexport */ hye),
  ind: () => (/* reexport */ ind),
  ita: () => (/* reexport */ ita),
  jpn: () => (/* reexport */ jpn),
  kor: () => (/* reexport */ kor),
  kur: () => (/* reexport */ kur),
  lat: () => (/* reexport */ lat),
  lav: () => (/* reexport */ lav),
  lgg: () => (/* reexport */ lgg),
  lggNd: () => (/* reexport */ lggNd),
  lit: () => (/* reexport */ lit),
  mar: () => (/* reexport */ mar),
  msa: () => (/* reexport */ msa),
  mya: () => (/* reexport */ mya),
  nld: () => (/* reexport */ nld),
  nob: () => (/* reexport */ nob),
  panGu: () => (/* reexport */ panGu),
  pol: () => (/* reexport */ pol),
  por: () => (/* reexport */ por),
  porBr: () => (/* reexport */ porBr),
  removeStopwords: () => (/* binding */ removeStopwords),
  ron: () => (/* reexport */ ron),
  rus: () => (/* reexport */ rus),
  slk: () => (/* reexport */ slk),
  slv: () => (/* reexport */ slv),
  som: () => (/* reexport */ som),
  sot: () => (/* reexport */ sot),
  spa: () => (/* reexport */ spa),
  swa: () => (/* reexport */ swa),
  swe: () => (/* reexport */ swe),
  tgl: () => (/* reexport */ tgl),
  tha: () => (/* reexport */ tha),
  tur: () => (/* reexport */ tur),
  ukr: () => (/* reexport */ ukr),
  urd: () => (/* reexport */ urd),
  vie: () => (/* reexport */ vie),
  yor: () => (/* reexport */ yor),
  zho: () => (/* reexport */ zho),
  zul: () => (/* reexport */ zul)
});

;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords__123.js
const num123 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const numFas = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰']
const numKor = ['０', '１', '２', '３', '４', '５', '６', '７', '８', '９']
const numMya = ['၀', '၁', '၂', '၃', '၄', '၅', '၆', '၇', '၈', '၉']
const numTel = ['౦', '౧', '౨', '౩', '౪', '౫', '౬', '౭', '౮', '౯']
const _123 = [...num123, ...numFas, ...numKor, ...numMya, ...numTel]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_afr.js
/* Copyright 2016 Liam Doherty

Licensed under the Apache License,
  Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
  software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
  either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* This list is frequency sorted. That means it can be sliced from the bottom
and be less agressive in excluding stopwords */

const afr = [
  'die',
  'het',
  'en',
  'sy',
  'nie',
  'was',
  'hy',
  'te',
  'is',
  'ek',
  'om',
  'hulle',
  'in',
  'my',
  '\'n',
  'vir',
  'toe',
  'haar',
  'van',
  'dit',
  'op',
  'se',
  'wat',
  'met',
  'gaan',
  'baie',
  'ons',
  'jy',
  'na',
  'maar',
  'hom',
  'so',
  'n',
  'huis',
  'kan',
  'aan',
  'dat',
  'daar',
  'sal',
  'jou',
  'gesê',
  'by',
  'kom',
  'een',
  'ma',
  'as',
  'son',
  'groot',
  'begin',
  'al'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_ara.js
/*
The MIT License (MIT)

Copyright (c) 2016 Gene Diaz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the 'Software'), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

const ara = [
  '،',
  'ّآض',
  'آمينَ',
  'آه',
  'آهاً',
  'آي',
  'أ',
  'أب',
  'أجل',
  'أجمع',
  'أخ',
  'أخذ',
  'أصبح',
  'أضحى',
  'أقبل',
  'أقل',
  'أكثر',
  'ألا',
  'أم',
  'أما',
  'أمامك',
  'أمامكَ',
  'أمسى',
  'أمّا',
  'أن',
  'أنا',
  'أنت',
  'أنتم',
  'أنتما',
  'أنتن',
  'أنتِ',
  'أنشأ',
  'أنّى',
  'أو',
  'أوشك',
  'أولئك',
  'أولئكم',
  'أولاء',
  'أولالك',
  'أوّهْ',
  'أي',
  'أيا',
  'أين',
  'أينما',
  'أيّ',
  'أَنَّ',
  'أََيُّ',
  'أُفٍّ',
  'إذ',
  'إذا',
  'إذاً',
  'إذما',
  'إذن',
  'إلى',
  'إليكم',
  'إليكما',
  'إليكنّ',
  'إليكَ',
  'إلَيْكَ',
  'إلّا',
  'إمّا',
  'إن',
  'إنّما',
  'إي',
  'إياك',
  'إياكم',
  'إياكما',
  'إياكن',
  'إيانا',
  'إياه',
  'إياها',
  'إياهم',
  'إياهما',
  'إياهن',
  'إياي',
  'إيهٍ',
  'إِنَّ',
  'ا',
  'ابتدأ',
  'اثر',
  'اجل',
  'احد',
  'اخرى',
  'اخلولق',
  'اذا',
  'اربعة',
  'ارتدّ',
  'استحال',
  'اطار',
  'اعادة',
  'اعلنت',
  'اف',
  'اكثر',
  'اكد',
  'الألاء',
  'الألى',
  'الا',
  'الاخيرة',
  'الان',
  'الاول',
  'الاولى',
  'التى',
  'التي',
  'الثاني',
  'الثانية',
  'الذاتي',
  'الذى',
  'الذي',
  'الذين',
  'السابق',
  'الف',
  'اللائي',
  'اللاتي',
  'اللتان',
  'اللتيا',
  'اللتين',
  'اللذان',
  'اللذين',
  'اللواتي',
  'الماضي',
  'المقبل',
  'الوقت',
  'الى',
  'اليوم',
  'اما',
  'امام',
  'امس',
  'ان',
  'انبرى',
  'انقلب',
  'انه',
  'انها',
  'او',
  'اول',
  'اي',
  'ايار',
  'ايام',
  'ايضا',
  'ب',
  'بات',
  'باسم',
  'بان',
  'بخٍ',
  'برس',
  'بسبب',
  'بسّ',
  'بشكل',
  'بضع',
  'بطآن',
  'بعد',
  'بعض',
  'بك',
  'بكم',
  'بكما',
  'بكن',
  'بل',
  'بلى',
  'بما',
  'بماذا',
  'بمن',
  'بن',
  'بنا',
  'به',
  'بها',
  'بي',
  'بيد',
  'بين',
  'بَسْ',
  'بَلْهَ',
  'بِئْسَ',
  'تانِ',
  'تانِك',
  'تبدّل',
  'تجاه',
  'تحوّل',
  'تلقاء',
  'تلك',
  'تلكم',
  'تلكما',
  'تم',
  'تينك',
  'تَيْنِ',
  'تِه',
  'تِي',
  'ثلاثة',
  'ثم',
  'ثمّ',
  'ثمّة',
  'ثُمَّ',
  'جعل',
  'جلل',
  'جميع',
  'جير',
  'حار',
  'حاشا',
  'حاليا',
  'حاي',
  'حتى',
  'حرى',
  'حسب',
  'حم',
  'حوالى',
  'حول',
  'حيث',
  'حيثما',
  'حين',
  'حيَّ',
  'حَبَّذَا',
  'حَتَّى',
  'حَذارِ',
  'خلا',
  'خلال',
  'دون',
  'دونك',
  'ذا',
  'ذات',
  'ذاك',
  'ذانك',
  'ذانِ',
  'ذلك',
  'ذلكم',
  'ذلكما',
  'ذلكن',
  'ذو',
  'ذوا',
  'ذواتا',
  'ذواتي',
  'ذيت',
  'ذينك',
  'ذَيْنِ',
  'ذِه',
  'ذِي',
  'راح',
  'رجع',
  'رويدك',
  'ريث',
  'رُبَّ',
  'زيارة',
  'سبحان',
  'سرعان',
  'سنة',
  'سنوات',
  'سوف',
  'سوى',
  'سَاءَ',
  'سَاءَمَا',
  'شبه',
  'شخصا',
  'شرع',
  'شَتَّانَ',
  'صار',
  'صباح',
  'صفر',
  'صهٍ',
  'صهْ',
  'ضد',
  'ضمن',
  'طاق',
  'طالما',
  'طفق',
  'طَق',
  'ظلّ',
  'عاد',
  'عام',
  'عاما',
  'عامة',
  'عدا',
  'عدة',
  'عدد',
  'عدم',
  'عسى',
  'عشر',
  'عشرة',
  'علق',
  'على',
  'عليك',
  'عليه',
  'عليها',
  'علًّ',
  'عن',
  'عند',
  'عندما',
  'عوض',
  'عين',
  'عَدَسْ',
  'عَمَّا',
  'غدا',
  'غير',
  'ـ',
  'ف',
  'فان',
  'فلان',
  'فو',
  'فى',
  'في',
  'فيم',
  'فيما',
  'فيه',
  'فيها',
  'قال',
  'قام',
  'قبل',
  'قد',
  'قطّ',
  'قلما',
  'قوة',
  'كأنّما',
  'كأين',
  'كأيّ',
  'كأيّن',
  'كاد',
  'كان',
  'كانت',
  'كذا',
  'كذلك',
  'كرب',
  'كل',
  'كلا',
  'كلاهما',
  'كلتا',
  'كلم',
  'كليكما',
  'كليهما',
  'كلّما',
  'كلَّا',
  'كم',
  'كما',
  'كي',
  'كيت',
  'كيف',
  'كيفما',
  'كَأَنَّ',
  'كِخ',
  'لئن',
  'لا',
  'لات',
  'لاسيما',
  'لدن',
  'لدى',
  'لعمر',
  'لقاء',
  'لك',
  'لكم',
  'لكما',
  'لكن',
  'لكنَّما',
  'لكي',
  'لكيلا',
  'للامم',
  'لم',
  'لما',
  'لمّا',
  'لن',
  'لنا',
  'له',
  'لها',
  'لو',
  'لوكالة',
  'لولا',
  'لوما',
  'لي',
  'لَسْتَ',
  'لَسْتُ',
  'لَسْتُم',
  'لَسْتُمَا',
  'لَسْتُنَّ',
  'لَسْتِ',
  'لَسْنَ',
  'لَعَلَّ',
  'لَكِنَّ',
  'لَيْتَ',
  'لَيْسَ',
  'لَيْسَا',
  'لَيْسَتَا',
  'لَيْسَتْ',
  'لَيْسُوا',
  'لَِسْنَا',
  'ما',
  'ماانفك',
  'مابرح',
  'مادام',
  'ماذا',
  'مازال',
  'مافتئ',
  'مايو',
  'متى',
  'مثل',
  'مذ',
  'مساء',
  'مع',
  'معاذ',
  'مقابل',
  'مكانكم',
  'مكانكما',
  'مكانكنّ',
  'مكانَك',
  'مليار',
  'مليون',
  'مما',
  'ممن',
  'من',
  'منذ',
  'منها',
  'مه',
  'مهما',
  'مَنْ',
  'مِن',
  'نحن',
  'نحو',
  'نعم',
  'نفس',
  'نفسه',
  'نهاية',
  'نَخْ',
  'نِعِمّا',
  'نِعْمَ',
  'ها',
  'هاؤم',
  'هاكَ',
  'هاهنا',
  'هبّ',
  'هذا',
  'هذه',
  'هكذا',
  'هل',
  'هلمَّ',
  'هلّا',
  'هم',
  'هما',
  'هن',
  'هنا',
  'هناك',
  'هنالك',
  'هو',
  'هي',
  'هيا',
  'هيت',
  'هيّا',
  'هَؤلاء',
  'هَاتانِ',
  'هَاتَيْنِ',
  'هَاتِه',
  'هَاتِي',
  'هَجْ',
  'هَذا',
  'هَذانِ',
  'هَذَيْنِ',
  'هَذِه',
  'هَذِي',
  'هَيْهَاتَ',
  'و',
  'وا',
  'واحد',
  'واضاف',
  'واضافت',
  'واكد',
  'وان',
  'واهاً',
  'واوضح',
  'وراءَك',
  'وفي',
  'وقال',
  'وقالت',
  'وقد',
  'وقف',
  'وكان',
  'وكانت',
  'ولا',
  'ولم',
  'ومن',
  'وهو',
  'وهي',
  'ويكأنّ',
  'وَيْ',
  'وُشْكَانََ',
  'يكون',
  'يمكن',
  'يوم',
  'ّأيّان'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_hye.js
// Copyright (c) 2017 Peter Graham, contributors. Released under the Apache-2.0 license.

const hye = [
  'այդ',
  'այլ',
  'այն',
  'այս',
  'դու',
  'դուք',
  'եմ',
  'են',
  'ենք',
  'ես',
  'եք',
  'է',
  'էի',
  'էին',
  'էինք',
  'էիր',
  'էիք',
  'էր',
  'ըստ',
  'թ',
  'ի',
  'ին',
  'իսկ',
  'իր',
  'կամ',
  'համար',
  'հետ',
  'հետո',
  'մենք',
  'մեջ',
  'մի',
  'ն',
  'նա',
  'նաև',
  'նրա',
  'նրանք',
  'որ',
  'որը',
  'որոնք',
  'որպես',
  'ու',
  'ում',
  'պիտի',
  'վրա',
  'և'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_eus.js
// Copyright (c) 2017 Peter Graham, contributors. Released under the Apache-2.0 license.

const eus = [
  'al',
  'anitz',
  'arabera',
  'asko',
  'baina',
  'bat',
  'batean',
  'batek',
  'bati',
  'batzuei',
  'batzuek',
  'batzuetan',
  'batzuk',
  'bera',
  'beraiek',
  'berau',
  'berauek',
  'bere',
  'berori',
  'beroriek',
  'beste',
  'bezala',
  'da',
  'dago',
  'dira',
  'ditu',
  'du',
  'dute',
  'edo',
  'egin',
  'ere',
  'eta',
  'eurak',
  'ez',
  'gainera',
  'gu',
  'gutxi',
  'guzti',
  'haiei',
  'haiek',
  'haietan',
  'hainbeste',
  'hala',
  'han',
  'handik',
  'hango',
  'hara',
  'hari',
  'hark',
  'hartan',
  'hau',
  'hauei',
  'hauek',
  'hauetan',
  'hemen',
  'hemendik',
  'hemengo',
  'hi',
  'hona',
  'honek',
  'honela',
  'honetan',
  'honi',
  'hor',
  'hori',
  'horiei',
  'horiek',
  'horietan',
  'horko',
  'horra',
  'horrek',
  'horrela',
  'horretan',
  'horri',
  'hortik',
  'hura',
  'izan',
  'ni',
  'noiz',
  'nola',
  'non',
  'nondik',
  'nongo',
  'nor',
  'nora',
  'ze',
  'zein',
  'zen',
  'zenbait',
  'zenbat',
  'zer',
  'zergatik',
  'ziren',
  'zituen',
  'zu',
  'zuek',
  'zuen',
  'zuten'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_ben.js
/*
The MIT License (MIT)

Copyright (c) 2016 Gene Diaz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

const ben = [
  'অতএব',
  'অথচ',
  'অথবা',
  'অনুযায়ী',
  'অনেক',
  'অনেকে',
  'অনেকেই',
  'অন্তত',
  'অন্য',
  'অবধি',
  'অবশ্য',
  'অর্থাত',
  'আই',
  'আগামী',
  'আগে',
  'আগেই',
  'আছে',
  'আজ',
  'আদ্যভাগে',
  'আপনার',
  'আপনি',
  'আবার',
  'আমরা',
  'আমাকে',
  'আমাদের',
  'আমার',
  'আমি',
  'আর',
  'আরও',
  'ই',
  'ইত্যাদি',
  'ইহা',
  'উচিত',
  'উত্তর',
  'উনি',
  'উপর',
  'উপরে',
  'এ',
  'এঁদের',
  'এঁরা',
  'এই',
  'একই',
  'একটি',
  'একবার',
  'একে',
  'এক্',
  'এখন',
  'এখনও',
  'এখানে',
  'এখানেই',
  'এটা',
  'এটাই',
  'এটি',
  'এত',
  'এতটাই',
  'এতে',
  'এদের',
  'এব',
  'এবং',
  'এবার',
  'এমন',
  'এমনকী',
  'এমনি',
  'এর',
  'এরা',
  'এল',
  'এস',
  'এসে',
  'ঐ',
  'ও',
  'ওঁদের',
  'ওঁর',
  'ওঁরা',
  'ওই',
  'ওকে',
  'ওখানে',
  'ওদের',
  'ওর',
  'ওরা',
  'কখনও',
  'কত',
  'কবে',
  'কমনে',
  'কয়েক',
  'কয়েকটি',
  'করছে',
  'করছেন',
  'করতে',
  'করবে',
  'করবেন',
  'করলে',
  'করলেন',
  'করা',
  'করাই',
  'করায়',
  'করার',
  'করি',
  'করিতে',
  'করিয়া',
  'করিয়ে',
  'করে',
  'করেই',
  'করেছিলেন',
  'করেছে',
  'করেছেন',
  'করেন',
  'কাউকে',
  'কাছ',
  'কাছে',
  'কাজ',
  'কাজে',
  'কারও',
  'কারণ',
  'কি',
  'কিংবা',
  'কিছু',
  'কিছুই',
  'কিন্তু',
  'কী',
  'কে',
  'কেউ',
  'কেউই',
  'কেখা',
  'কেন',
  'কোটি',
  'কোন',
  'কোনও',
  'কোনো',
  'ক্ষেত্রে',
  'কয়েক',
  'খুব',
  'গিয়ে',
  'গিয়েছে',
  'গিয়ে',
  'গুলি',
  'গেছে',
  'গেল',
  'গেলে',
  'গোটা',
  'চলে',
  'চান',
  'চায়',
  'চার',
  'চালু',
  'চেয়ে',
  'চেষ্টা',
  'ছাড়া',
  'ছাড়াও',
  'ছিল',
  'ছিলেন',
  'জন',
  'জনকে',
  'জনের',
  'জন্য',
  'জন্যওজে',
  'জানতে',
  'জানা',
  'জানানো',
  'জানায়',
  'জানিয়ে',
  'জানিয়েছে',
  'জে',
  'জ্নজন',
  'টি',
  'ঠিক',
  'তখন',
  'তত',
  'তথা',
  'তবু',
  'তবে',
  'তা',
  'তাঁকে',
  'তাঁদের',
  'তাঁর',
  'তাঁরা',
  'তাঁাহারা',
  'তাই',
  'তাও',
  'তাকে',
  'তাতে',
  'তাদের',
  'তার',
  'তারপর',
  'তারা',
  'তারৈ',
  'তাহলে',
  'তাহা',
  'তাহাতে',
  'তাহার',
  'তিনঐ',
  'তিনি',
  'তিনিও',
  'তুমি',
  'তুলে',
  'তেমন',
  'তো',
  'তোমার',
  'থাকবে',
  'থাকবেন',
  'থাকা',
  'থাকায়',
  'থাকে',
  'থাকেন',
  'থেকে',
  'থেকেই',
  'থেকেও',
  'দিকে',
  'দিতে',
  'দিন',
  'দিয়ে',
  'দিয়েছে',
  'দিয়েছেন',
  'দিলেন',
  'দু',
  'দুই',
  'দুটি',
  'দুটো',
  'দেওয়া',
  'দেওয়ার',
  'দেওয়া',
  'দেখতে',
  'দেখা',
  'দেখে',
  'দেন',
  'দেয়',
  'দ্বারা',
  'ধরা',
  'ধরে',
  'ধামার',
  'নতুন',
  'নয়',
  'না',
  'নাই',
  'নাকি',
  'নাগাদ',
  'নানা',
  'নিজে',
  'নিজেই',
  'নিজেদের',
  'নিজের',
  'নিতে',
  'নিয়ে',
  'নিয়ে',
  'নেই',
  'নেওয়া',
  'নেওয়ার',
  'নেওয়া',
  'নয়',
  'পক্ষে',
  'পর',
  'পরে',
  'পরেই',
  'পরেও',
  'পর্যন্ত',
  'পাওয়া',
  'পাচ',
  'পারি',
  'পারে',
  'পারেন',
  'পি',
  'পেয়ে',
  'পেয়্র্',
  'প্রতি',
  'প্রথম',
  'প্রভৃতি',
  'প্রযন্ত',
  'প্রাথমিক',
  'প্রায়',
  'প্রায়',
  'ফলে',
  'ফিরে',
  'ফের',
  'বক্তব্য',
  'বদলে',
  'বন',
  'বরং',
  'বলতে',
  'বলল',
  'বললেন',
  'বলা',
  'বলে',
  'বলেছেন',
  'বলেন',
  'বসে',
  'বহু',
  'বা',
  'বাদে',
  'বার',
  'বি',
  'বিনা',
  'বিভিন্ন',
  'বিশেষ',
  'বিষয়টি',
  'বেশ',
  'বেশি',
  'ব্যবহার',
  'ব্যাপারে',
  'ভাবে',
  'ভাবেই',
  'মতো',
  'মতোই',
  'মধ্যভাগে',
  'মধ্যে',
  'মধ্যেই',
  'মধ্যেও',
  'মনে',
  'মাত্র',
  'মাধ্যমে',
  'মোট',
  'মোটেই',
  'যখন',
  'যত',
  'যতটা',
  'যথেষ্ট',
  'যদি',
  'যদিও',
  'যা',
  'যাঁর',
  'যাঁরা',
  'যাওয়া',
  'যাওয়ার',
  'যাওয়া',
  'যাকে',
  'যাচ্ছে',
  'যাতে',
  'যাদের',
  'যান',
  'যাবে',
  'যায়',
  'যার',
  'যারা',
  'যিনি',
  'যে',
  'যেখানে',
  'যেতে',
  'যেন',
  'যেমন',
  'র',
  'রকম',
  'রয়েছে',
  'রাখা',
  'রেখে',
  'লক্ষ',
  'শুধু',
  'শুরু',
  'সঙ্গে',
  'সঙ্গেও',
  'সব',
  'সবার',
  'সমস্ত',
  'সম্প্রতি',
  'সহ',
  'সহিত',
  'সাধারণ',
  'সামনে',
  'সি',
  'সুতরাং',
  'সে',
  'সেই',
  'সেখান',
  'সেখানে',
  'সেটা',
  'সেটাই',
  'সেটাও',
  'সেটি',
  'স্পষ্ট',
  'স্বয়ং',
  'হইতে',
  'হইবে',
  'হইয়া',
  'হওয়া',
  'হওয়ায়',
  'হওয়ার',
  'হচ্ছে',
  'হত',
  'হতে',
  'হতেই',
  'হন',
  'হবে',
  'হবেন',
  'হয়',
  'হয়তো',
  'হয়নি',
  'হয়ে',
  'হয়েই',
  'হয়েছিল',
  'হয়েছে',
  'হয়েছেন',
  'হল',
  'হলে',
  'হলেই',
  'হলেও',
  'হলো',
  'হাজার',
  'হিসাবে',
  'হৈলে',
  'হোক',
  'হয়'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_bre.js
// Copyright (c) 2017 Peter Graham, contributors. Released under the Apache-2.0 license.

const bre = [
  'a',
  'ainda',
  'alem',
  'ambas',
  'ambos',
  'antes',
  'ao',
  'aonde',
  'aos',
  'apos',
  'aquele',
  'aqueles',
  'as',
  'assim',
  'com',
  'como',
  'contra',
  'contudo',
  'cuja',
  'cujas',
  'cujo',
  'cujos',
  'da',
  'das',
  'de',
  'dela',
  'dele',
  'deles',
  'demais',
  'depois',
  'desde',
  'desta',
  'deste',
  'dispoe',
  'dispoem',
  'diversa',
  'diversas',
  'diversos',
  'do',
  'dos',
  'durante',
  'e',
  'ela',
  'elas',
  'ele',
  'eles',
  'em',
  'entao',
  'entre',
  'essa',
  'essas',
  'esse',
  'esses',
  'esta',
  'estas',
  'este',
  'estes',
  'ha',
  'isso',
  'isto',
  'logo',
  'mais',
  'mas',
  'mediante',
  'menos',
  'mesma',
  'mesmas',
  'mesmo',
  'mesmos',
  'na',
  'nao',
  'nas',
  'nem',
  'nesse',
  'neste',
  'nos',
  'o',
  'os',
  'ou',
  'outra',
  'outras',
  'outro',
  'outros',
  'pelas',
  'pelo',
  'pelos',
  'perante',
  'pois',
  'por',
  'porque',
  'portanto',
  'propios',
  'proprio',
  'quais',
  'qual',
  'qualquer',
  'quando',
  'quanto',
  'que',
  'quem',
  'quer',
  'se',
  'seja',
  'sem',
  'sendo',
  'seu',
  'seus',
  'sob',
  'sobre',
  'sua',
  'suas',
  'tal',
  'tambem',
  'teu',
  'teus',
  'toda',
  'todas',
  'todo',
  'todos',
  'tua',
  'tuas',
  'tudo',
  'um',
  'uma',
  'umas',
  'uns'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_bul.js
// Copyright (c) 2017 Peter Graham, contributors. Released under the Apache-2.0 license.

const bul = [
  'а',
  'автентичен',
  'аз',
  'ако',
  'ала',
  'бе',
  'без',
  'беше',
  'би',
  'бивш',
  'бивша',
  'бившо',
  'бил',
  'била',
  'били',
  'било',
  'благодаря',
  'близо',
  'бъдат',
  'бъде',
  'бяха',
  'в',
  'вас',
  'ваш',
  'ваша',
  'вероятно',
  'вече',
  'взема',
  'ви',
  'вие',
  'винаги',
  'внимава',
  'време',
  'все',
  'всеки',
  'всички',
  'всичко',
  'всяка',
  'във',
  'въпреки',
  'върху',
  'г',
  'ги',
  'главен',
  'главна',
  'главно',
  'глас',
  'го',
  'година',
  'години',
  'годишен',
  'д',
  'да',
  'дали',
  'два',
  'двама',
  'двамата',
  'две',
  'двете',
  'ден',
  'днес',
  'дни',
  'до',
  'добра',
  'добре',
  'добро',
  'добър',
  'докато',
  'докога',
  'дори',
  'досега',
  'доста',
  'друг',
  'друга',
  'други',
  'е',
  'евтин',
  'едва',
  'един',
  'една',
  'еднаква',
  'еднакви',
  'еднакъв',
  'едно',
  'екип',
  'ето',
  'живот',
  'за',
  'забавям',
  'зад',
  'заедно',
  'заради',
  'засега',
  'заспал',
  'затова',
  'защо',
  'защото',
  'и',
  'из',
  'или',
  'им',
  'има',
  'имат',
  'иска',
  'й',
  'каза',
  'как',
  'каква',
  'какво',
  'както',
  'какъв',
  'като',
  'кога',
  'когато',
  'което',
  'които',
  'кой',
  'който',
  'колко',
  'която',
  'къде',
  'където',
  'към',
  'лесен',
  'лесно',
  'ли',
  'лош',
  'м',
  'май',
  'малко',
  'ме',
  'между',
  'мек',
  'мен',
  'месец',
  'ми',
  'много',
  'мнозина',
  'мога',
  'могат',
  'може',
  'мокър',
  'моля',
  'момента',
  'му',
  'н',
  'на',
  'над',
  'назад',
  'най',
  'направи',
  'напред',
  'например',
  'нас',
  'не',
  'него',
  'нещо',
  'нея',
  'ни',
  'ние',
  'никой',
  'нито',
  'нищо',
  'но',
  'нов',
  'нова',
  'нови',
  'новина',
  'някои',
  'някой',
  'няколко',
  'няма',
  'обаче',
  'около',
  'освен',
  'особено',
  'от',
  'отгоре',
  'отново',
  'още',
  'пак',
  'по',
  'повече',
  'повечето',
  'под',
  'поне',
  'поради',
  'после',
  'почти',
  'прави',
  'пред',
  'преди',
  'през',
  'при',
  'пък',
  'първата',
  'първи',
  'първо',
  'пъти',
  'равен',
  'равна',
  'с',
  'са',
  'сам',
  'само',
  'се',
  'сега',
  'си',
  'син',
  'скоро',
  'след',
  'следващ',
  'сме',
  'смях',
  'според',
  'сред',
  'срещу',
  'сте',
  'съм',
  'със',
  'също',
  'т',
  'т.н.',
  'тази',
  'така',
  'такива',
  'такъв',
  'там',
  'твой',
  'те',
  'тези',
  'ти',
  'то',
  'това',
  'тогава',
  'този',
  'той',
  'толкова',
  'точно',
  'три',
  'трябва',
  'тук',
  'тъй',
  'тя',
  'тях',
  'у',
  'утре',
  'харесва',
  'хиляди',
  'ч',
  'часа',
  'че',
  'често',
  'чрез',
  'ще',
  'щом',
  'юмрук',
  'я',
  'як'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_cat.js
// Copyright (c) 2017 Peter Graham, contributors. Released under the Apache-2.0 license.

const cat = [
  'a',
  'abans',
  'ací',
  'ah',
  'així',
  'això',
  'al',
  'aleshores',
  'algun',
  'alguna',
  'algunes',
  'alguns',
  'alhora',
  'allà',
  'allí',
  'allò',
  'als',
  'altra',
  'altre',
  'altres',
  'amb',
  'ambdues',
  'ambdós',
  'apa',
  'aquell',
  'aquella',
  'aquelles',
  'aquells',
  'aquest',
  'aquesta',
  'aquestes',
  'aquests',
  'aquí',
  'baix',
  'cada',
  'cadascuna',
  'cadascunes',
  'cadascuns',
  'cadascú',
  'com',
  'contra',
  'd\'un',
  'd\'una',
  'd\'unes',
  'd\'uns',
  'dalt',
  'de',
  'del',
  'dels',
  'des',
  'després',
  'dins',
  'dintre',
  'donat',
  'doncs',
  'durant',
  'e',
  'eh',
  'el',
  'els',
  'em',
  'en',
  'encara',
  'ens',
  'entre',
  'eren',
  'es',
  'esta',
  'estaven',
  'esteu',
  'està',
  'estàvem',
  'estàveu',
  'et',
  'etc',
  'ets',
  'fins',
  'fora',
  'gairebé',
  'ha',
  'han',
  'has',
  'havia',
  'he',
  'hem',
  'heu',
  'hi',
  'ho',
  'i',
  'igual',
  'iguals',
  'ja',
  'l\'hi',
  'la',
  'les',
  'li',
  'li\'n',
  'llavors',
  'm\'he',
  'ma',
  'mal',
  'malgrat',
  'mateix',
  'mateixa',
  'mateixes',
  'mateixos',
  'me',
  'mentre',
  'meu',
  'meus',
  'meva',
  'meves',
  'molt',
  'molta',
  'moltes',
  'molts',
  'mon',
  'mons',
  'més',
  'n\'he',
  'n\'hi',
  'ne',
  'ni',
  'no',
  'nogensmenys',
  'només',
  'nosaltres',
  'nostra',
  'nostre',
  'nostres',
  'o',
  'oh',
  'oi',
  'on',
  'pas',
  'pel',
  'pels',
  'per',
  'perquè',
  'però',
  'poc',
  'poca',
  'pocs',
  'poques',
  'potser',
  'propi',
  'qual',
  'quals',
  'quan',
  'quant',
  'que',
  'quelcom',
  'qui',
  'quin',
  'quina',
  'quines',
  'quins',
  'què',
  's\'ha',
  's\'han',
  'sa',
  'semblant',
  'semblants',
  'ses',
  'seu',
  'seus',
  'seva',
  'seves',
  'si',
  'sobre',
  'sobretot',
  'solament',
  'sols',
  'son',
  'sons',
  'sota',
  'sou',
  'sóc',
  'són',
  't\'ha',
  't\'han',
  't\'he',
  'ta',
  'tal',
  'també',
  'tampoc',
  'tan',
  'tant',
  'tanta',
  'tantes',
  'teu',
  'teus',
  'teva',
  'teves',
  'ton',
  'tons',
  'tot',
  'tota',
  'totes',
  'tots',
  'un',
  'una',
  'unes',
  'uns',
  'us',
  'va',
  'vaig',
  'vam',
  'van',
  'vas',
  'veu',
  'vosaltres',
  'vostra',
  'vostre',
  'vostres',
  'érem',
  'éreu',
  'és'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_zho.js
/*
Copyright (c) 2011, David Przybilla, Chris Umbel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

const zho = [
  '的',
  '地',
  '得',
  '和',
  '跟',
  '与',
  '及',
  '向',
  '并',
  '等',
  '更',
  '已',
  '含',
  '做',
  '我',
  '你',
  '他',
  '她',
  '们',
  '某',
  '该',
  '各',
  '每',
  '这',
  '那',
  '哪',
  '什',
  '么',
  '谁',
  '年',
  '月',
  '日',
  '时',
  '分',
  '秒',
  '几',
  '多',
  '来',
  '在',
  '就',
  '又',
  '很',
  '呢',
  '吧',
  '吗',
  '了',
  '嘛',
  '哇',
  '儿',
  '哼',
  '啊',
  '嗯',
  '是',
  '着',
  '都',
  '不',
  '说',
  '也',
  '看',
  '把',
  '还',
  '个',
  '有',
  '小',
  '到',
  '一',
  '为',
  '中',
  '于',
  '对',
  '会',
  '之',
  '第',
  '此',
  '或',
  '共',
  '按',
  '请'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_hrv.js
// Copyright (c) 2017 Peter Graham, contributors. Released under the Apache-2.0 license.

const hrv = [
  'a',
  'ako',
  'ali',
  'bi',
  'bih',
  'bila',
  'bili',
  'bilo',
  'bio',
  'bismo',
  'biste',
  'biti',
  'bumo',
  'da',
  'do',
  'duž',
  'ga',
  'hoće',
  'hoćemo',
  'hoćete',
  'hoćeš',
  'hoću',
  'i',
  'iako',
  'ih',
  'ili',
  'iz',
  'ja',
  'je',
  'jedna',
  'jedne',
  'jedno',
  'jer',
  'jesam',
  'jesi',
  'jesmo',
  'jest',
  'jeste',
  'jesu',
  'jim',
  'joj',
  'još',
  'ju',
  'kada',
  'kako',
  'kao',
  'koja',
  'koje',
  'koji',
  'kojima',
  'koju',
  'kroz',
  'li',
  'me',
  'mene',
  'meni',
  'mi',
  'mimo',
  'moj',
  'moja',
  'moje',
  'mu',
  'na',
  'nad',
  'nakon',
  'nam',
  'nama',
  'nas',
  'naš',
  'naša',
  'naše',
  'našeg',
  'ne',
  'nego',
  'neka',
  'neki',
  'nekog',
  'neku',
  'nema',
  'netko',
  'neće',
  'nećemo',
  'nećete',
  'nećeš',
  'neću',
  'nešto',
  'ni',
  'nije',
  'nikoga',
  'nikoje',
  'nikoju',
  'nisam',
  'nisi',
  'nismo',
  'niste',
  'nisu',
  'njega',
  'njegov',
  'njegova',
  'njegovo',
  'njemu',
  'njezin',
  'njezina',
  'njezino',
  'njih',
  'njihov',
  'njihova',
  'njihovo',
  'njim',
  'njima',
  'njoj',
  'nju',
  'no',
  'o',
  'od',
  'odmah',
  'on',
  'ona',
  'oni',
  'ono',
  'ova',
  'pa',
  'pak',
  'po',
  'pod',
  'pored',
  'prije',
  's',
  'sa',
  'sam',
  'samo',
  'se',
  'sebe',
  'sebi',
  'si',
  'smo',
  'ste',
  'su',
  'sve',
  'svi',
  'svog',
  'svoj',
  'svoja',
  'svoje',
  'svom',
  'ta',
  'tada',
  'taj',
  'tako',
  'te',
  'tebe',
  'tebi',
  'ti',
  'to',
  'toj',
  'tome',
  'tu',
  'tvoj',
  'tvoja',
  'tvoje',
  'u',
  'uz',
  'vam',
  'vama',
  'vas',
  'vaš',
  'vaša',
  'vaše',
  'već',
  'vi',
  'vrlo',
  'za',
  'zar',
  'će',
  'ćemo',
  'ćete',
  'ćeš',
  'ću',
  'što'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_ces.js
// Copyright (c) 2017 Peter Graham, contributors. Released under the Apache-2.0 license.

const ces = [
  'a',
  'aby',
  'ahoj',
  'aj',
  'ale',
  'anebo',
  'ani',
  'ano',
  'asi',
  'aspoň',
  'atd',
  'atp',
  'ačkoli',
  'až',
  'bez',
  'beze',
  'blízko',
  'bohužel',
  'brzo',
  'bude',
  'budem',
  'budeme',
  'budete',
  'budeš',
  'budou',
  'budu',
  'by',
  'byl',
  'byla',
  'byli',
  'bylo',
  'byly',
  'bys',
  'být',
  'během',
  'chce',
  'chceme',
  'chcete',
  'chceš',
  'chci',
  'chtít',
  'chtějí',
  'chut\'',
  'chuti',
  'co',
  'což',
  'cz',
  'daleko',
  'další',
  'den',
  'deset',
  'devatenáct',
  'devět',
  'dnes',
  'do',
  'dobrý',
  'docela',
  'dva',
  'dvacet',
  'dvanáct',
  'dvě',
  'dál',
  'dále',
  'děkovat',
  'děkujeme',
  'děkuji',
  'ho',
  'hodně',
  'i',
  'jak',
  'jakmile',
  'jako',
  'jakož',
  'jde',
  'je',
  'jeden',
  'jedenáct',
  'jedna',
  'jedno',
  'jednou',
  'jedou',
  'jeho',
  'jehož',
  'jej',
  'jejich',
  'její',
  'jelikož',
  'jemu',
  'jen',
  'jenom',
  'jestli',
  'jestliže',
  'ještě',
  'jež',
  'ji',
  'jich',
  'jimi',
  'jinak',
  'jiné',
  'již',
  'jsem',
  'jseš',
  'jsi',
  'jsme',
  'jsou',
  'jste',
  'já',
  'jí',
  'jím',
  'jíž',
  'k',
  'kam',
  'kde',
  'kdo',
  'kdy',
  'když',
  'ke',
  'kolik',
  'kromě',
  'kterou',
  'která',
  'které',
  'který',
  'kteří',
  'kvůli',
  'mají',
  'mezi',
  'mi',
  'mne',
  'mnou',
  'mně',
  'moc',
  'mohl',
  'mohou',
  'moje',
  'moji',
  'možná',
  'musí',
  'my',
  'má',
  'málo',
  'mám',
  'máme',
  'máte',
  'máš',
  'mé',
  'mí',
  'mít',
  'mě',
  'můj',
  'může',
  'na',
  'nad',
  'nade',
  'napište',
  'naproti',
  'načež',
  'naše',
  'naši',
  'ne',
  'nebo',
  'nebyl',
  'nebyla',
  'nebyli',
  'nebyly',
  'nedělají',
  'nedělá',
  'nedělám',
  'neděláme',
  'neděláte',
  'neděláš',
  'neg',
  'nejsi',
  'nejsou',
  'nemají',
  'nemáme',
  'nemáte',
  'neměl',
  'není',
  'nestačí',
  'nevadí',
  'než',
  'nic',
  'nich',
  'nimi',
  'nové',
  'nový',
  'nula',
  'nám',
  'námi',
  'nás',
  'náš',
  'ním',
  'ně',
  'něco',
  'nějak',
  'někde',
  'někdo',
  'němu',
  'němuž',
  'o',
  'od',
  'ode',
  'on',
  'ona',
  'oni',
  'ono',
  'ony',
  'osm',
  'osmnáct',
  'pak',
  'patnáct',
  'po',
  'pod',
  'podle',
  'pokud',
  'potom',
  'pouze',
  'pozdě',
  'pořád',
  'pravé',
  'pro',
  'prostě',
  'prosím',
  'proti',
  'proto',
  'protože',
  'proč',
  'první',
  'pta',
  'pět',
  'před',
  'přes',
  'přese',
  'při',
  'přičemž',
  're',
  'rovně',
  's',
  'se',
  'sedm',
  'sedmnáct',
  'si',
  'skoro',
  'smí',
  'smějí',
  'snad',
  'spolu',
  'sta',
  'sto',
  'strana',
  'sté',
  'své',
  'svých',
  'svým',
  'svými',
  'ta',
  'tady',
  'tak',
  'takhle',
  'taky',
  'také',
  'takže',
  'tam',
  'tamhle',
  'tamhleto',
  'tamto',
  'tato',
  'tebe',
  'tebou',
  'ted\'',
  'tedy',
  'ten',
  'tento',
  'teto',
  'ti',
  'tipy',
  'tisíc',
  'tisíce',
  'to',
  'tobě',
  'tohle',
  'toho',
  'tohoto',
  'tom',
  'tomto',
  'tomu',
  'tomuto',
  'toto',
  'trošku',
  'tu',
  'tuto',
  'tvoje',
  'tvá',
  'tvé',
  'tvůj',
  'ty',
  'tyto',
  'téma',
  'tím',
  'tímto',
  'tě',
  'těm',
  'těmu',
  'třeba',
  'tři',
  'třináct',
  'u',
  'určitě',
  'už',
  'v',
  'vaše',
  'vaši',
  've',
  'vedle',
  'večer',
  'vlastně',
  'vy',
  'vám',
  'vámi',
  'vás',
  'váš',
  'více',
  'však',
  'všechno',
  'všichni',
  'vůbec',
  'vždy',
  'z',
  'za',
  'zatímco',
  'zač',
  'zda',
  'zde',
  'ze',
  'zprávy',
  'zpět',
  'čau',
  'či',
  'článku',
  'články',
  'čtrnáct',
  'čtyři',
  'šest',
  'šestnáct',
  'že'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_dan.js
/*
Creative Commons – Attribution / ShareAlike 3.0 license
http://creativecommons.org/licenses/by-sa/3.0/

List based on frequently used words in subtitles in 2012.

Thanks to
opensubtitles.org
https://invokeit.wordpress.com/frequency-word-lists/#comment-9707
*/

const dan = [
  'er',
  'jeg',
  'det',
  'du',
  'ikke',
  'i',
  'at',
  'en',
  'og',
  'har',
  'vi',
  'til',
  'på',
  'hvad',
  'med',
  'mig',
  'så',
  'for',
  'de',
  'dig',
  'der',
  'den',
  'han',
  'kan',
  'af',
  'vil',
  'var',
  'her',
  'et',
  'skal',
  'ved',
  'nu',
  'men',
  'om',
  'ja',
  'som',
  'nej',
  'min',
  'noget',
  'ham',
  'hun',
  'bare',
  'kom',
  'være',
  'din',
  'hvor',
  'dem',
  'ud',
  'os',
  'hvis',
  'må',
  'se',
  'godt',
  'have',
  'fra',
  'ville',
  'okay',
  'lige',
  'op',
  'alle',
  'lad',
  'hvorfor',
  'sig',
  'hvordan',
  'få',
  'kunne',
  'eller',
  'hvem',
  'man',
  'bliver',
  'havde',
  'da',
  'ingen',
  'efter',
  'når',
  'alt',
  'jo',
  'to',
  'mit',
  'ind',
  'hej',
  'aldrig',
  'lidt',
  'nogen',
  'over',
  'også',
  'mand',
  'far',
  'skulle',
  'selv',
  'får',
  'hans',
  'ser',
  'vores',
  'jer',
  'sådan',
  'dit',
  'kun',
  'deres',
  'ned',
  'mine',
  'komme',
  'tage',
  'denne',
  'sige',
  'dette',
  'blive',
  'helt',
  'fordi',
  'end',
  'tag',
  'før',
  'fik',
  'dine'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_nld.js
/*
Copyright (c) 2011, Chris Umbel, Martijn de Boer, Damien van Holten

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

// This dutch wordlist has been parsed from a list created by Damien van Holten
// source: http://www.damienvanholten.com/blog/dutch-stop-words/

const nld = [
  'aan',
  'af',
  'al',
  'alles',
  'als',
  'altijd',
  'andere',
  'ben',
  'bij',
  'daar',
  'dan',
  'dat',
  'de',
  'der',
  'deze',
  'die',
  'dit',
  'doch',
  'doen',
  'door',
  'dus',
  'een',
  'eens',
  'en',
  'er',
  'ge',
  'geen',
  'geweest',
  'haar',
  'had',
  'heb',
  'hebben',
  'heeft',
  'hem',
  'het',
  'hier',
  'hij',
  'hoe',
  'hun',
  'iemand',
  'iets',
  'ik',
  'in',
  'is',
  'ja',
  'je ',
  'kan',
  'kon',
  'kunnen',
  'maar',
  'me',
  'meer',
  'men',
  'met',
  'mij',
  'mijn',
  'moet',
  'na',
  'naar',
  'niet',
  'niets',
  'nog',
  'nu',
  'of',
  'om',
  'omdat',
  'ons',
  'ook',
  'op',
  'over',
  'reeds',
  'te',
  'tegen',
  'toch',
  'toen',
  'tot',
  'u',
  'uit',
  'uw',
  'van',
  'veel',
  'voor',
  'want',
  'waren',
  'was',
  'wat',
  'we',
  'wel',
  'werd',
  'wezen',
  'wie',
  'wij',
  'wil',
  'worden',
  'zal',
  'ze',
  'zei',
  'zelf',
  'zich',
  'zij',
  'zijn',
  'zo',
  'zonder',
  'zou'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_eng.js
/*
Copyright (c) 2011, Chris Umbel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

const eng = [
  'about',
  'after',
  'all',
  'also',
  'am',
  'an',
  'and',
  'another',
  'any',
  'are',
  'as',
  'at',
  'be',
  'because',
  'been',
  'before',
  'being',
  'between',
  'both',
  'but',
  'by',
  'came',
  'can',
  'come',
  'could',
  'did',
  'do',
  'each',
  'for',
  'from',
  'get',
  'got',
  'has',
  'had',
  'he',
  'have',
  'her',
  'here',
  'him',
  'himself',
  'his',
  'how',
  'if',
  'in',
  'into',
  'is',
  'it',
  'like',
  'make',
  'many',
  'me',
  'might',
  'more',
  'most',
  'much',
  'must',
  'my',
  'never',
  'now',
  'of',
  'on',
  'only',
  'or',
  'other',
  'our',
  'out',
  'over',
  'said',
  'same',
  'should',
  'since',
  'some',
  'still',
  'such',
  'take',
  'than',
  'that',
  'the',
  'their',
  'them',
  'then',
  'there',
  'these',
  'they',
  'this',
  'those',
  'through',
  'to',
  'too',
  'under',
  'up',
  'very',
  'was',
  'way',
  'we',
  'well',
  'were',
  'what',
  'where',
  'which',
  'while',
  'who',
  'with',
  'would',
  'you',
  'your',
  'a',
  'i'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_epo.js
// Copyright (c) 2017 Peter Graham, contributors. Released under the Apache-2.0 license.

const epo = [
  'adiaŭ',
  'ajn',
  'al',
  'ankoraŭ',
  'antaŭ',
  'aŭ',
  'bonan',
  'bonvole',
  'bonvolu',
  'bv',
  'ci',
  'cia',
  'cian',
  'cin',
  'd-ro',
  'da',
  'de',
  'dek',
  'deka',
  'do',
  'doktor\'',
  'doktoro',
  'du',
  'dua',
  'dum',
  'eble',
  'ekz',
  'ekzemple',
  'en',
  'estas',
  'estis',
  'estos',
  'estu',
  'estus',
  'eĉ',
  'f-no',
  'feliĉan',
  'for',
  'fraŭlino',
  'ha',
  'havas',
  'havis',
  'havos',
  'havu',
  'havus',
  'he',
  'ho',
  'hu',
  'ili',
  'ilia',
  'ilian',
  'ilin',
  'inter',
  'io',
  'ion',
  'iu',
  'iujn',
  'iun',
  'ja',
  'jam',
  'je',
  'jes',
  'k',
  'kaj',
  'ke',
  'kio',
  'kion',
  'kiu',
  'kiujn',
  'kiun',
  'kvankam',
  'kvar',
  'kvara',
  'kvazaŭ',
  'kvin',
  'kvina',
  'la',
  'li',
  'lia',
  'lian',
  'lin',
  'malantaŭ',
  'male',
  'malgraŭ',
  'mem',
  'mi',
  'mia',
  'mian',
  'min',
  'minus',
  'naŭ',
  'naŭa',
  'ne',
  'nek',
  'nenio',
  'nenion',
  'neniu',
  'neniun',
  'nepre',
  'ni',
  'nia',
  'nian',
  'nin',
  'nu',
  'nun',
  'nur',
  'ok',
  'oka',
  'oni',
  'onia',
  'onian',
  'onin',
  'plej',
  'pli',
  'plu',
  'plus',
  'por',
  'post',
  'preter',
  's-no',
  's-ro',
  'se',
  'sed',
  'sep',
  'sepa',
  'ses',
  'sesa',
  'si',
  'sia',
  'sian',
  'sin',
  'sinjor\'',
  'sinjorino',
  'sinjoro',
  'sub',
  'super',
  'supren',
  'sur',
  'tamen',
  'tio',
  'tion',
  'tiu',
  'tiujn',
  'tiun',
  'tra',
  'tri',
  'tria',
  'tuj',
  'tute',
  'unu',
  'unua',
  've',
  'verŝajne',
  'vi',
  'via',
  'vian',
  'vin',
  'ĉi',
  'ĉio',
  'ĉion',
  'ĉiu',
  'ĉiujn',
  'ĉiun',
  'ĉu',
  'ĝi',
  'ĝia',
  'ĝian',
  'ĝin',
  'ĝis',
  'ĵus',
  'ŝi',
  'ŝia',
  'ŝin'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_est.js
// Copyright (c) 2017 Peter Graham, contributors. Released under the Apache-2.0 license.

const est = [
  'aga',
  'ei',
  'et',
  'ja',
  'jah',
  'kas',
  'kui',
  'kõik',
  'ma',
  'me',
  'mida',
  'midagi',
  'mind',
  'minu',
  'mis',
  'mu',
  'mul',
  'mulle',
  'nad',
  'nii',
  'oled',
  'olen',
  'oli',
  'oma',
  'on',
  'pole',
  'sa',
  'seda',
  'see',
  'selle',
  'siin',
  'siis',
  'ta',
  'te',
  'ära'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_fin.js
/*
The MIT License (MIT)
Copyright (c) 2018 Espen Klem

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

/* This list is frequency sorted. That means it can be sliced from the bottom
and be less agressive in excluding stopwords */

const fin = [
  'ja',
  'on',
  'oli',
  'hän',
  'vuonna',
  'myös',
  'joka',
  'se',
  'sekä',
  'sen',
  'mutta',
  'ei',
  'ovat',
  'hänen',
  'n',
  'kanssa',
  'vuoden',
  'jälkeen',
  'että',
  's',
  'tai',
  'jonka',
  'jossa',
  'mukaan',
  'kun',
  'muun',
  'muassa',
  'hänet',
  'olivat',
  'kuitenkin',
  'noin',
  'vuosina',
  'aikana',
  'lisäksi',
  'kaksi',
  'kuin',
  'ollut',
  'the',
  'myöhemmin',
  'eli',
  'vain',
  'teki',
  'mm',
  'jotka',
  'ennen',
  'ensimmäinen',
  'a',
  '9',
  'jo',
  'kuten',
  'yksi',
  'ensimmäisen',
  'vastaan',
  'tämän',
  'vuodesta',
  'sitä',
  'voi',
  'luvun',
  'luvulla',
  'of',
  'ole',
  'kauden',
  'osa',
  'esimerkiksi',
  'jolloin',
  'yli',
  'de',
  'kaudella',
  'eri',
  'sillä',
  'kolme',
  'he',
  'vuotta'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_fra.js
/*
 Copyright (c) 2014, Ismaël Héry

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */

const fra = [
  'être',
  'avoir',
  'faire',
  'a',
  'au',
  'aux',
  'avec',
  'ce',
  'ces',
  'dans',
  'de',
  'des',
  'du',
  'elle',
  'en',
  'et',
  'eux',
  'il',
  'je',
  'la',
  'le',
  'leur',
  'lui',
  'ma',
  'mais',
  'me',
  'même',
  'mes',
  'moi',
  'mon',
  'ne',
  'nos',
  'notre',
  'nous',
  'on',
  'ou',
  'où',
  'par',
  'pas',
  'pour',
  'qu',
  'que',
  'qui',
  'sa',
  'se',
  'ses',
  'son',
  'sur',
  'ta',
  'te',
  'tes',
  'toi',
  'ton',
  'tu',
  'un',
  'une',
  'vos',
  'votre',
  'vous',
  'c',
  'd',
  'j',
  'l',
  'à',
  'm',
  'n',
  's',
  't',
  'y',
  'été',
  'étée',
  'étées',
  'étés',
  'étant',
  'suis',
  'es',
  'est',
  'sommes',
  'êtes',
  'sont',
  'serai',
  'seras',
  'sera',
  'serons',
  'serez',
  'seront',
  'serais',
  'serait',
  'serions',
  'seriez',
  'seraient',
  'étais',
  'était',
  'étions',
  'étiez',
  'étaient',
  'fus',
  'fut',
  'fûmes',
  'fûtes',
  'furent',
  'sois',
  'soit',
  'soyons',
  'soyez',
  'soient',
  'fusse',
  'fusses',
  'fût',
  'fussions',
  'fussiez',
  'fussent',
  'ayant',
  'eu',
  'eue',
  'eues',
  'eus',
  'ai',
  'as',
  'avons',
  'avez',
  'ont',
  'aurai',
  'auras',
  'aura',
  'aurons',
  'aurez',
  'auront',
  'aurais',
  'aurait',
  'aurions',
  'auriez',
  'auraient',
  'avais',
  'avait',
  'avions',
  'aviez',
  'avaient',
  'eut',
  'eûmes',
  'eûtes',
  'eurent',
  'aie',
  'aies',
  'ait',
  'ayons',
  'ayez',
  'aient',
  'eusse',
  'eusses',
  'eût',
  'eussions',
  'eussiez',
  'eussent',
  'ceci',
  'cela',
  'cet',
  'cette',
  'ici',
  'ils',
  'les',
  'leurs',
  'quel',
  'quels',
  'quelle',
  'quelles',
  'sans',
  'soi'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_glg.js
// Copyright (c) 2017 Peter Graham, contributors. Released under the Apache-2.0 license.

const glg = [
  'a',
  'alí',
  'ao',
  'aos',
  'aquel',
  'aquela',
  'aquelas',
  'aqueles',
  'aquilo',
  'aquí',
  'as',
  'así',
  'aínda',
  'ben',
  'cando',
  'che',
  'co',
  'coa',
  'coas',
  'comigo',
  'con',
  'connosco',
  'contigo',
  'convosco',
  'cos',
  'cun',
  'cunha',
  'cunhas',
  'cuns',
  'da',
  'dalgunha',
  'dalgunhas',
  'dalgún',
  'dalgúns',
  'das',
  'de',
  'del',
  'dela',
  'delas',
  'deles',
  'desde',
  'deste',
  'do',
  'dos',
  'dun',
  'dunha',
  'dunhas',
  'duns',
  'e',
  'el',
  'ela',
  'elas',
  'eles',
  'en',
  'era',
  'eran',
  'esa',
  'esas',
  'ese',
  'eses',
  'esta',
  'estaba',
  'estar',
  'este',
  'estes',
  'estiven',
  'estou',
  'está',
  'están',
  'eu',
  'facer',
  'foi',
  'foron',
  'fun',
  'había',
  'hai',
  'iso',
  'isto',
  'la',
  'las',
  'lle',
  'lles',
  'lo',
  'los',
  'mais',
  'me',
  'meu',
  'meus',
  'min',
  'miña',
  'miñas',
  'moi',
  'na',
  'nas',
  'neste',
  'nin',
  'no',
  'non',
  'nos',
  'nosa',
  'nosas',
  'noso',
  'nosos',
  'nun',
  'nunha',
  'nunhas',
  'nuns',
  'nós',
  'o',
  'os',
  'ou',
  'para',
  'pero',
  'pode',
  'pois',
  'pola',
  'polas',
  'polo',
  'polos',
  'por',
  'que',
  'se',
  'senón',
  'ser',
  'seu',
  'seus',
  'sexa',
  'sido',
  'sobre',
  'súa',
  'súas',
  'tamén',
  'tan',
  'te',
  'ten',
  'ter',
  'teu',
  'teus',
  'teñen',
  'teño',
  'ti',
  'tido',
  'tiven',
  'tiña',
  'túa',
  'túas',
  'un',
  'unha',
  'unhas',
  'uns',
  'vos',
  'vosa',
  'vosas',
  'voso',
  'vosos',
  'vós',
  'á',
  'é',
  'ó',
  'ós'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_deu.js
/*
The MIT License (MIT)

Copyright (c) 2016 Gene Diaz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

const deu = [
  'a',
  'ab',
  'aber',
  'ach',
  'acht',
  'achte',
  'achten',
  'achter',
  'achtes',
  'ag',
  'alle',
  'allein',
  'allem',
  'allen',
  'aller',
  'allerdings',
  'alles',
  'allgemeinen',
  'als',
  'also',
  'am',
  'an',
  'ander',
  'andere',
  'anderem',
  'anderen',
  'anderer',
  'anderes',
  'anderm',
  'andern',
  'anderr',
  'anders',
  'au',
  'auch',
  'auf',
  'aus',
  'ausser',
  'ausserdem',
  'außer',
  'außerdem',
  'b',
  'bald',
  'bei',
  'beide',
  'beiden',
  'beim',
  'beispiel',
  'bekannt',
  'bereits',
  'besonders',
  'besser',
  'besten',
  'bin',
  'bis',
  'bisher',
  'bist',
  'c',
  'd',
  'd.h',
  'da',
  'dabei',
  'dadurch',
  'dafür',
  'dagegen',
  'daher',
  'dahin',
  'dahinter',
  'damals',
  'damit',
  'danach',
  'daneben',
  'dank',
  'dann',
  'daran',
  'darauf',
  'daraus',
  'darf',
  'darfst',
  'darin',
  'darum',
  'darunter',
  'darüber',
  'das',
  'dasein',
  'daselbst',
  'dass',
  'dasselbe',
  'davon',
  'davor',
  'dazu',
  'dazwischen',
  'daß',
  'dein',
  'deine',
  'deinem',
  'deinen',
  'deiner',
  'deines',
  'dem',
  'dementsprechend',
  'demgegenüber',
  'demgemäss',
  'demgemäß',
  'demselben',
  'demzufolge',
  'den',
  'denen',
  'denn',
  'denselben',
  'der',
  'deren',
  'derer',
  'derjenige',
  'derjenigen',
  'dermassen',
  'dermaßen',
  'derselbe',
  'derselben',
  'des',
  'deshalb',
  'desselben',
  'dessen',
  'deswegen',
  'dich',
  'die',
  'diejenige',
  'diejenigen',
  'dies',
  'diese',
  'dieselbe',
  'dieselben',
  'diesem',
  'diesen',
  'dieser',
  'dieses',
  'dir',
  'doch',
  'dort',
  'drei',
  'drin',
  'dritte',
  'dritten',
  'dritter',
  'drittes',
  'du',
  'durch',
  'durchaus',
  'durfte',
  'durften',
  'dürfen',
  'dürft',
  'e',
  'eben',
  'ebenso',
  'ehrlich',
  'ei',
  'ei, ',
  'eigen',
  'eigene',
  'eigenen',
  'eigener',
  'eigenes',
  'ein',
  'einander',
  'eine',
  'einem',
  'einen',
  'einer',
  'eines',
  'einig',
  'einige',
  'einigem',
  'einigen',
  'einiger',
  'einiges',
  'einmal',
  'eins',
  'elf',
  'en',
  'ende',
  'endlich',
  'entweder',
  'er',
  'ernst',
  'erst',
  'erste',
  'ersten',
  'erster',
  'erstes',
  'es',
  'etwa',
  'etwas',
  'euch',
  'euer',
  'eure',
  'eurem',
  'euren',
  'eurer',
  'eures',
  'f',
  'folgende',
  'früher',
  'fünf',
  'fünfte',
  'fünften',
  'fünfter',
  'fünftes',
  'für',
  'g',
  'gab',
  'ganz',
  'ganze',
  'ganzen',
  'ganzer',
  'ganzes',
  'gar',
  'gedurft',
  'gegen',
  'gegenüber',
  'gehabt',
  'gehen',
  'geht',
  'gekannt',
  'gekonnt',
  'gemacht',
  'gemocht',
  'gemusst',
  'genug',
  'gerade',
  'gern',
  'gesagt',
  'geschweige',
  'gewesen',
  'gewollt',
  'geworden',
  'gibt',
  'ging',
  'gleich',
  'gott',
  'gross',
  'grosse',
  'grossen',
  'grosser',
  'grosses',
  'groß',
  'große',
  'großen',
  'großer',
  'großes',
  'gut',
  'gute',
  'guter',
  'gutes',
  'h',
  'hab',
  'habe',
  'haben',
  'habt',
  'hast',
  'hat',
  'hatte',
  'hatten',
  'hattest',
  'hattet',
  'heisst',
  'her',
  'heute',
  'hier',
  'hin',
  'hinter',
  'hoch',
  'hätte',
  'hätten',
  'i',
  'ich',
  'ihm',
  'ihn',
  'ihnen',
  'ihr',
  'ihre',
  'ihrem',
  'ihren',
  'ihrer',
  'ihres',
  'im',
  'immer',
  'in',
  'indem',
  'infolgedessen',
  'ins',
  'irgend',
  'ist',
  'j',
  'ja',
  'jahr',
  'jahre',
  'jahren',
  'je',
  'jede',
  'jedem',
  'jeden',
  'jeder',
  'jedermann',
  'jedermanns',
  'jedes',
  'jedoch',
  'jemand',
  'jemandem',
  'jemanden',
  'jene',
  'jenem',
  'jenen',
  'jener',
  'jenes',
  'jetzt',
  'k',
  'kam',
  'kann',
  'kannst',
  'kaum',
  'kein',
  'keine',
  'keinem',
  'keinen',
  'keiner',
  'keines',
  'kleine',
  'kleinen',
  'kleiner',
  'kleines',
  'kommen',
  'kommt',
  'konnte',
  'konnten',
  'kurz',
  'können',
  'könnt',
  'könnte',
  'l',
  'lang',
  'lange',
  'leicht',
  'leide',
  'lieber',
  'los',
  'm',
  'machen',
  'macht',
  'machte',
  'mag',
  'magst',
  'mahn',
  'mal',
  'man',
  'manche',
  'manchem',
  'manchen',
  'mancher',
  'manches',
  'mann',
  'mehr',
  'mein',
  'meine',
  'meinem',
  'meinen',
  'meiner',
  'meines',
  'mensch',
  'menschen',
  'mich',
  'mir',
  'mit',
  'mittel',
  'mochte',
  'mochten',
  'morgen',
  'muss',
  'musst',
  'musste',
  'mussten',
  'muß',
  'mußt',
  'möchte',
  'mögen',
  'möglich',
  'mögt',
  'müssen',
  'müsst',
  'müßt',
  'n',
  'na',
  'nach',
  'nachdem',
  'nahm',
  'natürlich',
  'neben',
  'nein',
  'neue',
  'neuen',
  'neun',
  'neunte',
  'neunten',
  'neunter',
  'neuntes',
  'nicht',
  'nichts',
  'nie',
  'niemand',
  'niemandem',
  'niemanden',
  'noch',
  'nun',
  'nur',
  'o',
  'ob',
  'oben',
  'oder',
  'offen',
  'oft',
  'ohne',
  'ordnung',
  'p',
  'q',
  'r',
  'recht',
  'rechte',
  'rechten',
  'rechter',
  'rechtes',
  'richtig',
  'rund',
  's',
  'sa',
  'sache',
  'sagt',
  'sagte',
  'sah',
  'satt',
  'schlecht',
  'schluss',
  'schon',
  'sechs',
  'sechste',
  'sechsten',
  'sechster',
  'sechstes',
  'sehr',
  'sei',
  'seid',
  'seien',
  'sein',
  'seine',
  'seinem',
  'seinen',
  'seiner',
  'seines',
  'seit',
  'seitdem',
  'selbst',
  'sich',
  'sie',
  'sieben',
  'siebente',
  'siebenten',
  'siebenter',
  'siebentes',
  'sind',
  'so',
  'solang',
  'solche',
  'solchem',
  'solchen',
  'solcher',
  'solches',
  'soll',
  'sollen',
  'sollst',
  'sollt',
  'sollte',
  'sollten',
  'sondern',
  'sonst',
  'soweit',
  'sowie',
  'später',
  'startseite',
  'statt',
  'steht',
  'suche',
  't',
  'tag',
  'tage',
  'tagen',
  'tat',
  'teil',
  'tel',
  'tritt',
  'trotzdem',
  'tun',
  'u',
  'uhr',
  'um',
  'und',
  'und?',
  'uns',
  'unse',
  'unsem',
  'unsen',
  'unser',
  'unsere',
  'unserer',
  'unses',
  'unter',
  'v',
  'vergangenen',
  'viel',
  'viele',
  'vielem',
  'vielen',
  'vielleicht',
  'vier',
  'vierte',
  'vierten',
  'vierter',
  'viertes',
  'vom',
  'von',
  'vor',
  'w',
  'wahr?',
  'wann',
  'war',
  'waren',
  'warst',
  'wart',
  'warum',
  'was',
  'weg',
  'wegen',
  'weil',
  'weit',
  'weiter',
  'weitere',
  'weiteren',
  'weiteres',
  'welche',
  'welchem',
  'welchen',
  'welcher',
  'welches',
  'wem',
  'wen',
  'wenig',
  'wenige',
  'weniger',
  'weniges',
  'wenigstens',
  'wenn',
  'wer',
  'werde',
  'werden',
  'werdet',
  'weshalb',
  'wessen',
  'wie',
  'wieder',
  'wieso',
  'will',
  'willst',
  'wir',
  'wird',
  'wirklich',
  'wirst',
  'wissen',
  'wo',
  'woher',
  'wohin',
  'wohl',
  'wollen',
  'wollt',
  'wollte',
  'wollten',
  'worden',
  'wurde',
  'wurden',
  'während',
  'währenddem',
  'währenddessen',
  'wäre',
  'würde',
  'würden',
  'x',
  'y',
  'z',
  'z.b',
  'zehn',
  'zehnte',
  'zehnten',
  'zehnter',
  'zehntes',
  'zeit',
  'zu',
  'zuerst',
  'zugleich',
  'zum',
  'zunächst',
  'zur',
  'zurück',
  'zusammen',
  'zwanzig',
  'zwar',
  'zwei',
  'zweite',
  'zweiten',
  'zweiter',
  'zweites',
  'zwischen',
  'zwölf',
  'über',
  'überhaupt',
  'übrigens'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_ell.js
// Copyright (c) 2017 Peter Graham, contributors. Released under the Apache-2.0 license.

const ell = [
  'αλλα',
  'αν',
  'αντι',
  'απο',
  'αυτα',
  'αυτεσ',
  'αυτη',
  'αυτο',
  'αυτοι',
  'αυτοσ',
  'αυτουσ',
  'αυτων',
  'για',
  'δε',
  'δεν',
  'εαν',
  'ειμαι',
  'ειμαστε',
  'ειναι',
  'εισαι',
  'ειστε',
  'εκεινα',
  'εκεινεσ',
  'εκεινη',
  'εκεινο',
  'εκεινοι',
  'εκεινοσ',
  'εκεινουσ',
  'εκεινων',
  'ενω',
  'επι',
  'η',
  'θα',
  'ισωσ',
  'κ',
  'και',
  'κατα',
  'κι',
  'μα',
  'με',
  'μετα',
  'μη',
  'μην',
  'να',
  'ο',
  'οι',
  'ομωσ',
  'οπωσ',
  'οσο',
  'οτι',
  'παρα',
  'ποια',
  'ποιεσ',
  'ποιο',
  'ποιοι',
  'ποιοσ',
  'ποιουσ',
  'ποιων',
  'που',
  'προσ',
  'πωσ',
  'σε',
  'στη',
  'στην',
  'στο',
  'στον',
  'τα',
  'την',
  'τησ',
  'το',
  'τον',
  'τοτε',
  'του',
  'των',
  'ωσ'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_guj.js
/* MIT License

Copyright (c) 2020 Stopwords ISO

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the 'Software'), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */

const guj = [
  'અંગે',
  'અંદર',
  'અથવા',
  'અને',
  'અમને',
  'અમારું',
  'અમે',
  'અહીં',
  'આ',
  'આગળ',
  'આથી',
  'આનું',
  'આને',
  'આપણને',
  'આપણું',
  'આપણે',
  'આપી',
  'આર',
  'આવી',
  'આવે',
  'ઉપર',
  'ઉભા',
  'ઊંચે',
  'ઊભું',
  'એ',
  'એક',
  'એન',
  'એના',
  'એનાં',
  'એની',
  'એનું',
  'એને',
  'એનો',
  'એમ',
  'એવા',
  'એવાં',
  'એવી',
  'એવું',
  'એવો',
  'ઓછું',
  'કંઈક',
  'કઈ',
  'કયું',
  'કયો',
  'કરતાં',
  'કરવું',
  'કરી',
  'કરીએ',
  'કરું',
  'કરે',
  'કરેલું',
  'કર્યા',
  'કર્યાં',
  'કર્યું',
  'કર્યો',
  'કાંઈ',
  'કે',
  'કેટલું',
  'કેમ',
  'કેવી',
  'કેવું',
  'કોઈ',
  'કોઈક',
  'કોણ',
  'કોણે',
  'કોને',
  'ક્યાં',
  'ક્યારે',
  'ખૂબ',
  'ગઈ',
  'ગયા',
  'ગયાં',
  'ગયું',
  'ગયો',
  'ઘણું',
  'છ',
  'છતાં',
  'છીએ',
  'છું',
  'છે',
  'છેક',
  'છો',
  'જ',
  'જાય',
  'જી',
  'જે',
  'જેટલું',
  'જેને',
  'જેમ',
  'જેવી',
  'જેવું',
  'જેવો',
  'જો',
  'જોઈએ',
  'જ્યાં',
  'જ્યારે',
  'ઝાઝું',
  'તને',
  'તમને',
  'તમારું',
  'તમે',
  'તા',
  'તારાથી',
  'તારામાં',
  'તારું',
  'તું',
  'તે',
  'તેં',
  'તેઓ',
  'તેણે',
  'તેથી',
  'તેના',
  'તેની',
  'તેનું',
  'તેને',
  'તેમ',
  'તેમનું',
  'તેમને',
  'તેવી',
  'તેવું',
  'તો',
  'ત્યાં',
  'ત્યારે',
  'થઇ',
  'થઈ',
  'થઈએ',
  'થતા',
  'થતાં',
  'થતી',
  'થતું',
  'થતો',
  'થયા',
  'થયાં',
  'થયું',
  'થયેલું',
  'થયો',
  'થવું',
  'થાઉં',
  'થાઓ',
  'થાય',
  'થી',
  'થોડું',
  'દરેક',
  'ન',
  'નં',
  'નં.',
  'નથી',
  'નહિ',
  'નહી',
  'નહીં',
  'ના',
  'ની',
  'નીચે',
  'નું',
  'ને',
  'નો',
  'પછી',
  'પણ',
  'પર',
  'પરંતુ',
  'પહેલાં',
  'પાછળ',
  'પાસે',
  'પોતાનું',
  'પ્રત્યેક',
  'ફક્ત',
  'ફરી',
  'ફરીથી',
  'બંને',
  'બધા',
  'બધું',
  'બની',
  'બહાર',
  'બહુ',
  'બાદ',
  'બે',
  'મને',
  'મા',
  'માં',
  'માટે',
  'માત્ર',
  'મારું',
  'મી',
  'મૂકવું',
  'મૂકી',
  'મૂક્યા',
  'મૂક્યાં',
  'મૂક્યું',
  'મેં',
  'રહી',
  'રહે',
  'રહેવું',
  'રહ્યા',
  'રહ્યાં',
  'રહ્યો',
  'રીતે',
  'રૂ.',
  'રૂા',
  'લેતા',
  'લેતું',
  'લેવા',
  'વગેરે',
  'વધુ',
  'શકે',
  'શા',
  'શું',
  'સરખું',
  'સામે',
  'સુધી',
  'હતા',
  'હતાં',
  'હતી',
  'હતું',
  'હવે',
  'હશે',
  'હશો',
  'હા',
  'હું',
  'હો',
  'હોઈ',
  'હોઈશ',
  'હોઈશું',
  'હોય',
  'હોવા'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_hau.js
/* Copyright 2016 Liam Doherty

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* This list is frequency sorted. That means it can be sliced from the bottom
and be less agressive in excluding stopwords */

const hau = [
  'ta',
  'da',
  'ya',
  'sai',
  'ba',
  'yi',
  'na',
  'kuma',
  'ma',
  'ji',
  'cikin',
  'in',
  'ni',
  'wata',
  'wani',
  'ce',
  'tana',
  'don',
  'za',
  'sun',
  'amma',
  'ga',
  'ina',
  'ne',
  'tselane',
  'mai',
  'suka',
  'wannan',
  'a',
  'ko',
  'lokacin',
  'su',
  'take',
  'kaka',
  'shi',
  'yake',
  'yana',
  'mulongo',
  'mata',
  'ka',
  'ban',
  'ita',
  'tafi',
  'shanshani',
  'kai',
  'daɗi',
  'mi',
  'ƙato',
  'fara',
  'rana'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_heb.js
/*
The MIT License (MIT)
Guy Saar - Stop words list
*/
const heb = [
  'אבל',
  'או',
  'אולי',
  'אותה',
  'אותו',
  'אותי',
  'אותך',
  'אותם',
  'אותן',
  'אותנו',
  'אז',
  'אחר',
  'אחרות',
  'אחרי',
  'אחריכן',
  'אחרים',
  'אחרת',
  'אי',
  'איזה',
  'איך',
  'אין',
  'איפה',
  'איתה',
  'איתו',
  'איתי',
  'איתך',
  'איתכם',
  'איתכן',
  'איתם',
  'איתן',
  'איתנו',
  'אך',
  'אל',
  'אלה',
  'אלו',
  'אם',
  'אנחנו',
  'אני',
  'אס',
  'אף',
  'אצל',
  'אשר',
  'את',
  'אתה',
  'אתכם',
  'אתכן',
  'אתם',
  'אתן',
  'באיזומידה',
  'באמצע',
  'באמצעות',
  'בגלל',
  'בין',
  'בלי',
  'במידה',
  'במקוםשבו',
  'ברם',
  'בשביל',
  'בשעהש',
  'בתוך',
  'גם',
  'דרך',
  'הוא',
  'היא',
  'היה',
  'היכן',
  'היתה',
  'היתי',
  'הם',
  'הן',
  'הנה',
  'הסיבהשבגללה',
  'הרי',
  'ואילו',
  'ואת',
  'זאת',
  'זה',
  'זות',
  'יהיה',
  'יוכל',
  'יוכלו',
  'יותרמדי',
  'יכול',
  'יכולה',
  'יכולות',
  'יכולים',
  'יכל',
  'יכלה',
  'יכלו',
  'יש',
  'כאן',
  'כאשר',
  'כולם',
  'כולן',
  'כזה',
  'כי',
  'כיצד',
  'כך',
  'ככה',
  'כל',
  'כלל',
  'כמו',
  'כן',
  'כפי',
  'כש',
  'לא',
  'לאו',
  'לאיזותכלית',
  'לאן',
  'לבין',
  'לה',
  'להיות',
  'להם',
  'להן',
  'לו',
  'לי',
  'לכם',
  'לכן',
  'למה',
  'למטה',
  'למעלה',
  'למקוםשבו',
  'למרות',
  'לנו',
  'לעבר',
  'לעיכן',
  'לפיכך',
  'לפני',
  'מאד',
  'מאחורי',
  'מאיזוסיבה',
  'מאין',
  'מאיפה',
  'מבלי',
  'מבעד',
  'מדוע',
  'מה',
  'מהיכן',
  'מול',
  'מחוץ',
  'מי',
  'מכאן',
  'מכיוון',
  'מלבד',
  'מן',
  'מנין',
  'מסוגל',
  'מעט',
  'מעטים',
  'מעל',
  'מצד',
  'מקוםבו',
  'מתחת',
  'מתי',
  'נגד',
  'נגר',
  'נו',
  'עד',
  'עז',
  'על',
  'עלי',
  'עליה',
  'עליהם',
  'עליהן',
  'עליו',
  'עליך',
  'עליכם',
  'עלינו',
  'עם',
  'עצמה',
  'עצמהם',
  'עצמהן',
  'עצמו',
  'עצמי',
  'עצמם',
  'עצמן',
  'עצמנו',
  'פה',
  'רק',
  'שוב',
  'של',
  'שלה',
  'שלהם',
  'שלהן',
  'שלו',
  'שלי',
  'שלך',
  'שלכה',
  'שלכם',
  'שלכן',
  'שלנו',
  'שם',
  'תהיה',
  'תחת'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_hin.js
/*
The MIT License (MIT)

Copyright (c) 2016 Gene Diaz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Originates from: https://github.com/stopwords-iso/stopwords-hi/
*/

const hin = [
  'अंदर',
  'अत',
  'अदि',
  'अप',
  'अपना',
  'अपनि',
  'अपनी',
  'अपने',
  'अभि',
  'अभी',
  'आदि',
  'आप',
  'इंहिं',
  'इंहें',
  'इंहों',
  'इतयादि',
  'इत्यादि',
  'इन',
  'इनका',
  'इन्हीं',
  'इन्हें',
  'इन्हों',
  'इस',
  'इसका',
  'इसकि',
  'इसकी',
  'इसके',
  'इसमें',
  'इसि',
  'इसी',
  'इसे',
  'उंहिं',
  'उंहें',
  'उंहों',
  'उन',
  'उनका',
  'उनकि',
  'उनकी',
  'उनके',
  'उनको',
  'उन्हीं',
  'उन्हें',
  'उन्हों',
  'उस',
  'उसके',
  'उसि',
  'उसी',
  'उसे',
  'एक',
  'एवं',
  'एस',
  'एसे',
  'ऐसे',
  'ओर',
  'और',
  'कइ',
  'कई',
  'कर',
  'करता',
  'करते',
  'करना',
  'करने',
  'करें',
  'कहते',
  'कहा',
  'का',
  'काफि',
  'काफ़ी',
  'कि',
  'किंहें',
  'किंहों',
  'कितना',
  'किन्हें',
  'किन्हों',
  'किया',
  'किर',
  'किस',
  'किसि',
  'किसी',
  'किसे',
  'की',
  'कुछ',
  'कुल',
  'के',
  'को',
  'कोइ',
  'कोई',
  'कोन',
  'कोनसा',
  'कौन',
  'कौनसा',
  'गया',
  'घर',
  'जब',
  'जहाँ',
  'जहां',
  'जा',
  'जिंहें',
  'जिंहों',
  'जितना',
  'जिधर',
  'जिन',
  'जिन्हें',
  'जिन्हों',
  'जिस',
  'जिसे',
  'जीधर',
  'जेसा',
  'जेसे',
  'जैसा',
  'जैसे',
  'जो',
  'तक',
  'तब',
  'तरह',
  'तिंहें',
  'तिंहों',
  'तिन',
  'तिन्हें',
  'तिन्हों',
  'तिस',
  'तिसे',
  'तो',
  'था',
  'थि',
  'थी',
  'थे',
  'दबारा',
  'दवारा',
  'दिया',
  'दुसरा',
  'दुसरे',
  'दूसरे',
  'दो',
  'द्वारा',
  'न',
  'नहिं',
  'नहीं',
  'ना',
  'निचे',
  'निहायत',
  'नीचे',
  'ने',
  'पर',
  'पहले',
  'पुरा',
  'पूरा',
  'पे',
  'फिर',
  'बनि',
  'बनी',
  'बहि',
  'बही',
  'बहुत',
  'बाद',
  'बाला',
  'बिलकुल',
  'भि',
  'भितर',
  'भी',
  'भीतर',
  'मगर',
  'मानो',
  'मे',
  'में',
  'यदि',
  'यह',
  'यहाँ',
  'यहां',
  'यहि',
  'यही',
  'या',
  'यिह',
  'ये',
  'रखें',
  'रवासा',
  'रहा',
  'रहे',
  'ऱ्वासा',
  'लिए',
  'लिये',
  'लेकिन',
  'व',
  'वगेरह',
  'वरग',
  'वर्ग',
  'वह',
  'वहाँ',
  'वहां',
  'वहिं',
  'वहीं',
  'वाले',
  'वुह',
  'वे',
  'वग़ैरह',
  'संग',
  'सकता',
  'सकते',
  'सबसे',
  'सभि',
  'सभी',
  'साथ',
  'साबुत',
  'साभ',
  'सारा',
  'से',
  'सो',
  'हि',
  'ही',
  'हुअ',
  'हुआ',
  'हुइ',
  'हुई',
  'हुए',
  'हे',
  'हें',
  'है',
  'हैं',
  'हो',
  'होता',
  'होति',
  'होती',
  'होते',
  'होना',
  'होने'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_gle.js
// Copyright (c) 2017 Peter Graham, contributors. Released under the Apache-2.0 license.

const gle = [
  'a',
  'ach',
  'ag',
  'agus',
  'an',
  'aon',
  'ar',
  'arna',
  'as',
  'b\'',
  'ba',
  'beirt',
  'bhúr',
  'caoga',
  'ceathair',
  'ceathrar',
  'chomh',
  'chtó',
  'chuig',
  'chun',
  'cois',
  'céad',
  'cúig',
  'cúigear',
  'd\'',
  'daichead',
  'dar',
  'de',
  'deich',
  'deichniúr',
  'den',
  'dhá',
  'do',
  'don',
  'dtí',
  'dá',
  'dár',
  'dó',
  'faoi',
  'faoin',
  'faoina',
  'faoinár',
  'fara',
  'fiche',
  'gach',
  'gan',
  'go',
  'gur',
  'haon',
  'hocht',
  'i',
  'iad',
  'idir',
  'in',
  'ina',
  'ins',
  'inár',
  'is',
  'le',
  'leis',
  'lena',
  'lenár',
  'm\'',
  'mar',
  'mo',
  'mé',
  'na',
  'nach',
  'naoi',
  'naonúr',
  'ná',
  'ní',
  'níor',
  'nó',
  'nócha',
  'ocht',
  'ochtar',
  'os',
  'roimh',
  'sa',
  'seacht',
  'seachtar',
  'seachtó',
  'seasca',
  'seisear',
  'siad',
  'sibh',
  'sinn',
  'sna',
  'sé',
  'sí',
  'tar',
  'thar',
  'thú',
  'triúr',
  'trí',
  'trína',
  'trínár',
  'tríocha',
  'tú',
  'um',
  'ár',
  'é',
  'éis',
  'í',
  'ó',
  'ón',
  'óna',
  'ónár'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_hun.js
// Copyright (c) 2017 Peter Graham, contributors. Released under the Apache-2.0 license.

const hun = [
  'a',
  'abba',
  'abban',
  'abból',
  'addig',
  'ahhoz',
  'ahogy',
  'ahol',
  'aki',
  'akik',
  'akkor',
  'akár',
  'alapján',
  'alatt',
  'alatta',
  'alattad',
  'alattam',
  'alattatok',
  'alattuk',
  'alattunk',
  'alá',
  'alád',
  'alájuk',
  'alám',
  'alánk',
  'alátok',
  'alól',
  'alóla',
  'alólad',
  'alólam',
  'alólatok',
  'alóluk',
  'alólunk',
  'amely',
  'amelyből',
  'amelyek',
  'amelyekben',
  'amelyeket',
  'amelyet',
  'amelyik',
  'amelynek',
  'ami',
  'amikor',
  'amit',
  'amolyan',
  'amott',
  'amíg',
  'annak',
  'annál',
  'arra',
  'arról',
  'attól',
  'az',
  'aznap',
  'azok',
  'azokat',
  'azokba',
  'azokban',
  'azokból',
  'azokhoz',
  'azokig',
  'azokkal',
  'azokká',
  'azoknak',
  'azoknál',
  'azokon',
  'azokra',
  'azokról',
  'azoktól',
  'azokért',
  'azon',
  'azonban',
  'azonnal',
  'azt',
  'aztán',
  'azután',
  'azzal',
  'azzá',
  'azért',
  'bal',
  'balra',
  'ban',
  'be',
  'belé',
  'beléd',
  'beléjük',
  'belém',
  'belénk',
  'belétek',
  'belül',
  'belőle',
  'belőled',
  'belőlem',
  'belőletek',
  'belőlük',
  'belőlünk',
  'ben',
  'benne',
  'benned',
  'bennem',
  'bennetek',
  'bennük',
  'bennünk',
  'bár',
  'bárcsak',
  'bármilyen',
  'búcsú',
  'cikk',
  'cikkek',
  'cikkeket',
  'csak',
  'csakhogy',
  'csupán',
  'de',
  'dehogy',
  'e',
  'ebbe',
  'ebben',
  'ebből',
  'eddig',
  'egy',
  'egyebek',
  'egyebet',
  'egyedül',
  'egyelőre',
  'egyes',
  'egyet',
  'egyetlen',
  'egyik',
  'egymás',
  'egyre',
  'egyszerre',
  'egyéb',
  'együtt',
  'egész',
  'egészen',
  'ehhez',
  'ekkor',
  'el',
  'eleinte',
  'ellen',
  'ellenes',
  'elleni',
  'ellenére',
  'elmondta',
  'első',
  'elsők',
  'elsősorban',
  'elsőt',
  'elé',
  'eléd',
  'elég',
  'eléjük',
  'elém',
  'elénk',
  'elétek',
  'elő',
  'előbb',
  'elől',
  'előle',
  'előled',
  'előlem',
  'előletek',
  'előlük',
  'előlünk',
  'először',
  'előtt',
  'előtte',
  'előtted',
  'előttem',
  'előttetek',
  'előttük',
  'előttünk',
  'előző',
  'emilyen',
  'engem',
  'ennek',
  'ennyi',
  'ennél',
  'enyém',
  'erre',
  'erről',
  'esetben',
  'ettől',
  'ez',
  'ezek',
  'ezekbe',
  'ezekben',
  'ezekből',
  'ezeken',
  'ezeket',
  'ezekhez',
  'ezekig',
  'ezekkel',
  'ezekké',
  'ezeknek',
  'ezeknél',
  'ezekre',
  'ezekről',
  'ezektől',
  'ezekért',
  'ezen',
  'ezentúl',
  'ezer',
  'ezret',
  'ezt',
  'ezután',
  'ezzel',
  'ezzé',
  'ezért',
  'fel',
  'fele',
  'felek',
  'felet',
  'felett',
  'felé',
  'fent',
  'fenti',
  'fél',
  'fölé',
  'gyakran',
  'ha',
  'halló',
  'hamar',
  'hanem',
  'harmadik',
  'harmadikat',
  'harminc',
  'hat',
  'hatodik',
  'hatodikat',
  'hatot',
  'hatvan',
  'helyett',
  'hetedik',
  'hetediket',
  'hetet',
  'hetven',
  'hirtelen',
  'hiszen',
  'hiába',
  'hogy',
  'hogyan',
  'hol',
  'holnap',
  'holnapot',
  'honnan',
  'hova',
  'hozzá',
  'hozzád',
  'hozzájuk',
  'hozzám',
  'hozzánk',
  'hozzátok',
  'hurrá',
  'huszadik',
  'hány',
  'hányszor',
  'hármat',
  'három',
  'hát',
  'hátha',
  'hátulsó',
  'hét',
  'húsz',
  'ide',
  'ide-оda',
  'idén',
  'igazán',
  'igen',
  'ill',
  'illetve',
  'ilyen',
  'ilyenkor',
  'immár',
  'inkább',
  'is',
  'ismét',
  'ison',
  'itt',
  'jelenleg',
  'jobban',
  'jobbra',
  'jó',
  'jól',
  'jólesik',
  'jóval',
  'jövőre',
  'kell',
  'kellene',
  'kellett',
  'kelljen',
  'keressünk',
  'keresztül',
  'ketten',
  'kettő',
  'kettőt',
  'kevés',
  'ki',
  'kiben',
  'kiből',
  'kicsit',
  'kicsoda',
  'kihez',
  'kik',
  'kikbe',
  'kikben',
  'kikből',
  'kiken',
  'kiket',
  'kikhez',
  'kikkel',
  'kikké',
  'kiknek',
  'kiknél',
  'kikre',
  'kikről',
  'kiktől',
  'kikért',
  'kilenc',
  'kilencedik',
  'kilencediket',
  'kilencet',
  'kilencven',
  'kin',
  'kinek',
  'kinél',
  'kire',
  'kiről',
  'kit',
  'kitől',
  'kivel',
  'kivé',
  'kié',
  'kiért',
  'korábban',
  'képest',
  'kérem',
  'kérlek',
  'kész',
  'késő',
  'később',
  'későn',
  'két',
  'kétszer',
  'kívül',
  'körül',
  'köszönhetően',
  'köszönöm',
  'közben',
  'közel',
  'közepesen',
  'közepén',
  'közé',
  'között',
  'közül',
  'külön',
  'különben',
  'különböző',
  'különbözőbb',
  'különbözőek',
  'lassan',
  'le',
  'legalább',
  'legyen',
  'lehet',
  'lehetetlen',
  'lehetett',
  'lehetőleg',
  'lehetőség',
  'lenne',
  'lenni',
  'lennék',
  'lennének',
  'lesz',
  'leszek',
  'lesznek',
  'leszünk',
  'lett',
  'lettek',
  'lettem',
  'lettünk',
  'lévő',
  'ma',
  'maga',
  'magad',
  'magam',
  'magatokat',
  'magukat',
  'magunkat',
  'magát',
  'mai',
  'majd',
  'majdnem',
  'manapság',
  'meg',
  'megcsinál',
  'megcsinálnak',
  'megint',
  'megvan',
  'mellett',
  'mellette',
  'melletted',
  'mellettem',
  'mellettetek',
  'mellettük',
  'mellettünk',
  'mellé',
  'melléd',
  'melléjük',
  'mellém',
  'mellénk',
  'mellétek',
  'mellől',
  'mellőle',
  'mellőled',
  'mellőlem',
  'mellőletek',
  'mellőlük',
  'mellőlünk',
  'mely',
  'melyek',
  'melyik',
  'mennyi',
  'mert',
  'mi',
  'miatt',
  'miatta',
  'miattad',
  'miattam',
  'miattatok',
  'miattuk',
  'miattunk',
  'mibe',
  'miben',
  'miből',
  'mihez',
  'mik',
  'mikbe',
  'mikben',
  'mikből',
  'miken',
  'miket',
  'mikhez',
  'mikkel',
  'mikké',
  'miknek',
  'miknél',
  'mikor',
  'mikre',
  'mikről',
  'miktől',
  'mikért',
  'milyen',
  'min',
  'mind',
  'mindegyik',
  'mindegyiket',
  'minden',
  'mindenesetre',
  'mindenki',
  'mindent',
  'mindenütt',
  'mindig',
  'mindketten',
  'minek',
  'minket',
  'mint',
  'mintha',
  'minél',
  'mire',
  'miről',
  'mit',
  'mitől',
  'mivel',
  'mivé',
  'miért',
  'mondta',
  'most',
  'mostanáig',
  'már',
  'más',
  'másik',
  'másikat',
  'másnap',
  'második',
  'másodszor',
  'mások',
  'másokat',
  'mást',
  'még',
  'mégis',
  'míg',
  'mögé',
  'mögéd',
  'mögéjük',
  'mögém',
  'mögénk',
  'mögétek',
  'mögött',
  'mögötte',
  'mögötted',
  'mögöttem',
  'mögöttetek',
  'mögöttük',
  'mögöttünk',
  'mögül',
  'mögüle',
  'mögüled',
  'mögülem',
  'mögületek',
  'mögülük',
  'mögülünk',
  'múltkor',
  'múlva',
  'na',
  'nagy',
  'nagyobb',
  'nagyon',
  'naponta',
  'napot',
  'ne',
  'negyedik',
  'negyediket',
  'negyven',
  'neked',
  'nekem',
  'neki',
  'nekik',
  'nektek',
  'nekünk',
  'nem',
  'nemcsak',
  'nemrég',
  'nincs',
  'nyolc',
  'nyolcadik',
  'nyolcadikat',
  'nyolcat',
  'nyolcvan',
  'nála',
  'nálad',
  'nálam',
  'nálatok',
  'náluk',
  'nálunk',
  'négy',
  'négyet',
  'néha',
  'néhány',
  'nélkül',
  'o',
  'oda',
  'ok',
  'olyan',
  'onnan',
  'ott',
  'pedig',
  'persze',
  'pár',
  'például',
  'rajta',
  'rajtad',
  'rajtam',
  'rajtatok',
  'rajtuk',
  'rajtunk',
  'rendben',
  'rosszul',
  'rá',
  'rád',
  'rájuk',
  'rám',
  'ránk',
  'rátok',
  'régen',
  'régóta',
  'részére',
  'róla',
  'rólad',
  'rólam',
  'rólatok',
  'róluk',
  'rólunk',
  'rögtön',
  's',
  'saját',
  'se',
  'sem',
  'semmi',
  'semmilyen',
  'semmiség',
  'senki',
  'soha',
  'sok',
  'sokan',
  'sokat',
  'sokkal',
  'sokszor',
  'sokáig',
  'során',
  'stb.',
  'szemben',
  'szerbusz',
  'szerint',
  'szerinte',
  'szerinted',
  'szerintem',
  'szerintetek',
  'szerintük',
  'szerintünk',
  'szervusz',
  'szinte',
  'számára',
  'száz',
  'századik',
  'százat',
  'szépen',
  'szét',
  'szíves',
  'szívesen',
  'szíveskedjék',
  'sőt',
  'talán',
  'tavaly',
  'te',
  'tegnap',
  'tegnapelőtt',
  'tehát',
  'tele',
  'teljes',
  'tessék',
  'ti',
  'tied',
  'titeket',
  'tizedik',
  'tizediket',
  'tizenegy',
  'tizenegyedik',
  'tizenhat',
  'tizenhárom',
  'tizenhét',
  'tizenkettedik',
  'tizenkettő',
  'tizenkilenc',
  'tizenkét',
  'tizennyolc',
  'tizennégy',
  'tizenöt',
  'tizet',
  'tovább',
  'további',
  'továbbá',
  'távol',
  'téged',
  'tényleg',
  'tíz',
  'több',
  'többi',
  'többször',
  'túl',
  'tőle',
  'tőled',
  'tőlem',
  'tőletek',
  'tőlük',
  'tőlünk',
  'ugyanakkor',
  'ugyanez',
  'ugyanis',
  'ugye',
  'urak',
  'uram',
  'urat',
  'utoljára',
  'utolsó',
  'után',
  'utána',
  'vagy',
  'vagyis',
  'vagyok',
  'vagytok',
  'vagyunk',
  'vajon',
  'valahol',
  'valaki',
  'valakit',
  'valamelyik',
  'valami',
  'valamint',
  'való',
  'van',
  'vannak',
  'vele',
  'veled',
  'velem',
  'veletek',
  'velük',
  'velünk',
  'vissza',
  'viszlát',
  'viszont',
  'viszontlátásra',
  'volna',
  'volnának',
  'volnék',
  'volt',
  'voltak',
  'voltam',
  'voltunk',
  'végre',
  'végén',
  'végül',
  'által',
  'általában',
  'ám',
  'át',
  'éljen',
  'én',
  'éppen',
  'érte',
  'érted',
  'értem',
  'értetek',
  'értük',
  'értünk',
  'és',
  'év',
  'évben',
  'éve',
  'évek',
  'éves',
  'évi',
  'évvel',
  'így',
  'óta',
  'ön',
  'önbe',
  'önben',
  'önből',
  'önhöz',
  'önnek',
  'önnel',
  'önnél',
  'önre',
  'önről',
  'önt',
  'öntől',
  'önért',
  'önök',
  'önökbe',
  'önökben',
  'önökből',
  'önöket',
  'önökhöz',
  'önökkel',
  'önöknek',
  'önöknél',
  'önökre',
  'önökről',
  'önöktől',
  'önökért',
  'önökön',
  'önön',
  'össze',
  'öt',
  'ötven',
  'ötödik',
  'ötödiket',
  'ötöt',
  'úgy',
  'úgyis',
  'úgynevezett',
  'új',
  'újabb',
  'újra',
  'úr',
  'ő',
  'ők',
  'őket',
  'őt'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_ind.js
/*
Copyright (c) 2019, Luthfi Azhari

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Originates from: https://github.com/stopwords-iso/stopwords-id/
*/

const ind = [
  'ada',
  'adalah',
  'adanya',
  'adapun',
  'agak',
  'agaknya',
  'agar',
  'akan',
  'akankah',
  'akhir',
  'akhiri',
  'akhirnya',
  'aku',
  'akulah',
  'amat',
  'amatlah',
  'anda',
  'andalah',
  'antar',
  'antara',
  'antaranya',
  'apa',
  'apaan',
  'apabila',
  'apakah',
  'apalagi',
  'apatah',
  'artinya',
  'asal',
  'asalkan',
  'atas',
  'atau',
  'ataukah',
  'ataupun',
  'awal',
  'awalnya',
  'bagai',
  'bagaikan',
  'bagaimana',
  'bagaimanakah',
  'bagaimanapun',
  'bagi',
  'bagian',
  'bahkan',
  'bahwa',
  'bahwasanya',
  'bakal',
  'bakalan',
  'balik',
  'banyak',
  'bapak',
  'baru',
  'bawah',
  'beberapa',
  'begini',
  'beginian',
  'beginikah',
  'beginilah',
  'begitu',
  'begitukah',
  'begitulah',
  'begitupun',
  'bekerja',
  'belakang',
  'belakangan',
  'belum',
  'belumlah',
  'benar',
  'benarkah',
  'benarlah',
  'berada',
  'berakhir',
  'berakhirlah',
  'berakhirnya',
  'berapa',
  'berapakah',
  'berapalah',
  'berapapun',
  'berarti',
  'berawal',
  'berbagai',
  'berdatangan',
  'beri',
  'berikan',
  'berikut',
  'berikutnya',
  'berjumlah',
  'berkali-kali',
  'berkata',
  'berkehendak',
  'berkeinginan',
  'berkenaan',
  'berlainan',
  'berlalu',
  'berlangsung',
  'berlebihan',
  'bermacam',
  'bermacam-macam',
  'bermaksud',
  'bermula',
  'bersama',
  'bersama-sama',
  'bersiap',
  'bersiap-siap',
  'bertanya',
  'bertanya-tanya',
  'berturut',
  'berturut-turut',
  'bertutur',
  'berujar',
  'berupa',
  'besar',
  'betul',
  'betulkah',
  'biasa',
  'biasanya',
  'bila',
  'bilakah',
  'bisa',
  'bisakah',
  'boleh',
  'bolehkah',
  'bolehlah',
  'buat',
  'bukan',
  'bukankah',
  'bukanlah',
  'bukannya',
  'bulan',
  'bung',
  'cara',
  'caranya',
  'cukup',
  'cukupkah',
  'cukuplah',
  'cuma',
  'dahulu',
  'dalam',
  'dan',
  'dapat',
  'dari',
  'daripada',
  'datang',
  'dekat',
  'demi',
  'demikian',
  'demikianlah',
  'dengan',
  'depan',
  'di',
  'dia',
  'diakhiri',
  'diakhirinya',
  'dialah',
  'diantara',
  'diantaranya',
  'diberi',
  'diberikan',
  'diberikannya',
  'dibuat',
  'dibuatnya',
  'didapat',
  'didatangkan',
  'digunakan',
  'diibaratkan',
  'diibaratkannya',
  'diingat',
  'diingatkan',
  'diinginkan',
  'dijawab',
  'dijelaskan',
  'dijelaskannya',
  'dikarenakan',
  'dikatakan',
  'dikatakannya',
  'dikerjakan',
  'diketahui',
  'diketahuinya',
  'dikira',
  'dilakukan',
  'dilalui',
  'dilihat',
  'dimaksud',
  'dimaksudkan',
  'dimaksudkannya',
  'dimaksudnya',
  'diminta',
  'dimintai',
  'dimisalkan',
  'dimulai',
  'dimulailah',
  'dimulainya',
  'dimungkinkan',
  'dini',
  'dipastikan',
  'diperbuat',
  'diperbuatnya',
  'dipergunakan',
  'diperkirakan',
  'diperlihatkan',
  'diperlukan',
  'diperlukannya',
  'dipersoalkan',
  'dipertanyakan',
  'dipunyai',
  'diri',
  'dirinya',
  'disampaikan',
  'disebut',
  'disebutkan',
  'disebutkannya',
  'disini',
  'disinilah',
  'ditambahkan',
  'ditandaskan',
  'ditanya',
  'ditanyai',
  'ditanyakan',
  'ditegaskan',
  'ditujukan',
  'ditunjuk',
  'ditunjuki',
  'ditunjukkan',
  'ditunjukkannya',
  'ditunjuknya',
  'dituturkan',
  'dituturkannya',
  'diucapkan',
  'diucapkannya',
  'diungkapkan',
  'dong',
  'dulu',
  'empat',
  'enggak',
  'enggaknya',
  'entah',
  'entahlah',
  'guna',
  'gunakan',
  'hal',
  'hampir',
  'hanya',
  'hanyalah',
  'harus',
  'haruslah',
  'harusnya',
  'hendak',
  'hendaklah',
  'hendaknya',
  'hingga',
  'ia',
  'ialah',
  'ibarat',
  'ibaratkan',
  'ibaratnya',
  'ikut',
  'ingat',
  'ingat-ingat',
  'ingin',
  'inginkah',
  'inginkan',
  'ini',
  'inikah',
  'inilah',
  'itu',
  'itukah',
  'itulah',
  'jadi',
  'jadilah',
  'jadinya',
  'jangan',
  'jangankan',
  'janganlah',
  'jauh',
  'jawab',
  'jawaban',
  'jawabnya',
  'jelas',
  'jelaskan',
  'jelaslah',
  'jelasnya',
  'jika',
  'jikalau',
  'juga',
  'jumlah',
  'jumlahnya',
  'justru',
  'kala',
  'kalau',
  'kalaulah',
  'kalaupun',
  'kalian',
  'kami',
  'kamilah',
  'kamu',
  'kamulah',
  'kan',
  'kapan',
  'kapankah',
  'kapanpun',
  'karena',
  'karenanya',
  'kasus',
  'kata',
  'katakan',
  'katakanlah',
  'katanya',
  'ke',
  'keadaan',
  'kebetulan',
  'kecil',
  'kedua',
  'keduanya',
  'keinginan',
  'kelamaan',
  'kelihatan',
  'kelihatannya',
  'kelima',
  'keluar',
  'kembali',
  'kemudian',
  'kemungkinan',
  'kemungkinannya',
  'kenapa',
  'kepada',
  'kepadanya',
  'kesampaian',
  'keseluruhan',
  'keseluruhannya',
  'keterlaluan',
  'ketika',
  'khususnya',
  'kini',
  'kinilah',
  'kira',
  'kira-kira',
  'kiranya',
  'kita',
  'kitalah',
  'kok',
  'kurang',
  'lagi',
  'lagian',
  'lah',
  'lain',
  'lainnya',
  'lalu',
  'lama',
  'lamanya',
  'lanjut',
  'lanjutnya',
  'lebih',
  'lewat',
  'lima',
  'luar',
  'macam',
  'maka',
  'makanya',
  'makin',
  'malah',
  'malahan',
  'mampu',
  'mampukah',
  'mana',
  'manakala',
  'manalagi',
  'masa',
  'masalah',
  'masalahnya',
  'masih',
  'masihkah',
  'masing',
  'masing-masing',
  'mau',
  'maupun',
  'melainkan',
  'melakukan',
  'melalui',
  'melihat',
  'melihatnya',
  'memang',
  'memastikan',
  'memberi',
  'memberikan',
  'membuat',
  'memerlukan',
  'memihak',
  'meminta',
  'memintakan',
  'memisalkan',
  'memperbuat',
  'mempergunakan',
  'memperkirakan',
  'memperlihatkan',
  'mempersiapkan',
  'mempersoalkan',
  'mempertanyakan',
  'mempunyai',
  'memulai',
  'memungkinkan',
  'menaiki',
  'menambahkan',
  'menandaskan',
  'menanti',
  'menanti-nanti',
  'menantikan',
  'menanya',
  'menanyai',
  'menanyakan',
  'mendapat',
  'mendapatkan',
  'mendatang',
  'mendatangi',
  'mendatangkan',
  'menegaskan',
  'mengakhiri',
  'mengapa',
  'mengatakan',
  'mengatakannya',
  'mengenai',
  'mengerjakan',
  'mengetahui',
  'menggunakan',
  'menghendaki',
  'mengibaratkan',
  'mengibaratkannya',
  'mengingat',
  'mengingatkan',
  'menginginkan',
  'mengira',
  'mengucapkan',
  'mengucapkannya',
  'mengungkapkan',
  'menjadi',
  'menjawab',
  'menjelaskan',
  'menuju',
  'menunjuk',
  'menunjuki',
  'menunjukkan',
  'menunjuknya',
  'menurut',
  'menuturkan',
  'menyampaikan',
  'menyangkut',
  'menyatakan',
  'menyebutkan',
  'menyeluruh',
  'menyiapkan',
  'merasa',
  'mereka',
  'merekalah',
  'merupakan',
  'meski',
  'meskipun',
  'meyakini',
  'meyakinkan',
  'minta',
  'mirip',
  'misal',
  'misalkan',
  'misalnya',
  'mula',
  'mulai',
  'mulailah',
  'mulanya',
  'mungkin',
  'mungkinkah',
  'nah',
  'naik',
  'namun',
  'nanti',
  'nantinya',
  'nyaris',
  'nyatanya',
  'oleh',
  'olehnya',
  'pada',
  'padahal',
  'padanya',
  'paling',
  'panjang',
  'pantas',
  'para',
  'pasti',
  'pastilah',
  'penting',
  'pentingnya',
  'per',
  'percuma',
  'perlu',
  'perlukah',
  'perlunya',
  'pernah',
  'persoalan',
  'pertama',
  'pertama-tama',
  'pertanyaan',
  'pertanyakan',
  'pihak',
  'pihaknya',
  'pukul',
  'pula',
  'pun',
  'punya',
  'rasa',
  'rasanya',
  'rata',
  'rupanya',
  'saat',
  'saatnya',
  'saja',
  'sajalah',
  'saling',
  'sama',
  'sama-sama',
  'sambil',
  'sampai',
  'sampai-sampai',
  'sampaikan',
  'sana',
  'sangat',
  'sangatlah',
  'satu',
  'saya',
  'sayalah',
  'se',
  'sebab',
  'sebabnya',
  'sebagai',
  'sebagaimana',
  'sebagainya',
  'sebagian',
  'sebaik',
  'sebaik-baiknya',
  'sebaiknya',
  'sebaliknya',
  'sebanyak',
  'sebegini',
  'sebegitu',
  'sebelum',
  'sebelumnya',
  'sebenarnya',
  'seberapa',
  'sebesar',
  'sebetulnya',
  'sebisanya',
  'sebuah',
  'sebut',
  'sebutlah',
  'sebutnya',
  'secara',
  'secukupnya',
  'sedang',
  'sedangkan',
  'sedemikian',
  'sedikit',
  'sedikitnya',
  'seenaknya',
  'segala',
  'segalanya',
  'segera',
  'seharusnya',
  'sehingga',
  'seingat',
  'sejak',
  'sejauh',
  'sejenak',
  'sejumlah',
  'sekadar',
  'sekadarnya',
  'sekali',
  'sekali-kali',
  'sekalian',
  'sekaligus',
  'sekalipun',
  'sekarang',
  'sekarang',
  'sekecil',
  'seketika',
  'sekiranya',
  'sekitar',
  'sekitarnya',
  'sekurang-kurangnya',
  'sekurangnya',
  'sela',
  'selain',
  'selaku',
  'selalu',
  'selama',
  'selama-lamanya',
  'selamanya',
  'selanjutnya',
  'seluruh',
  'seluruhnya',
  'semacam',
  'semakin',
  'semampu',
  'semampunya',
  'semasa',
  'semasih',
  'semata',
  'semata-mata',
  'semaunya',
  'sementara',
  'semisal',
  'semisalnya',
  'sempat',
  'semua',
  'semuanya',
  'semula',
  'sendiri',
  'sendirian',
  'sendirinya',
  'seolah',
  'seolah-olah',
  'seorang',
  'sepanjang',
  'sepantasnya',
  'sepantasnyalah',
  'seperlunya',
  'seperti',
  'sepertinya',
  'sepihak',
  'sering',
  'seringnya',
  'serta',
  'serupa',
  'sesaat',
  'sesama',
  'sesampai',
  'sesegera',
  'sesekali',
  'seseorang',
  'sesuatu',
  'sesuatunya',
  'sesudah',
  'sesudahnya',
  'setelah',
  'setempat',
  'setengah',
  'seterusnya',
  'setiap',
  'setiba',
  'setibanya',
  'setidak-tidaknya',
  'setidaknya',
  'setinggi',
  'seusai',
  'sewaktu',
  'siap',
  'siapa',
  'siapakah',
  'siapapun',
  'sini',
  'sinilah',
  'soal',
  'soalnya',
  'suatu',
  'sudah',
  'sudahkah',
  'sudahlah',
  'supaya',
  'tadi',
  'tadinya',
  'tahu',
  'tahun',
  'tak',
  'tambah',
  'tambahnya',
  'tampak',
  'tampaknya',
  'tandas',
  'tandasnya',
  'tanpa',
  'tanya',
  'tanyakan',
  'tanyanya',
  'tapi',
  'tegas',
  'tegasnya',
  'telah',
  'tempat',
  'tengah',
  'tentang',
  'tentu',
  'tentulah',
  'tentunya',
  'tepat',
  'terakhir',
  'terasa',
  'terbanyak',
  'terdahulu',
  'terdapat',
  'terdiri',
  'terhadap',
  'terhadapnya',
  'teringat',
  'teringat-ingat',
  'terjadi',
  'terjadilah',
  'terjadinya',
  'terkira',
  'terlalu',
  'terlebih',
  'terlihat',
  'termasuk',
  'ternyata',
  'tersampaikan',
  'tersebut',
  'tersebutlah',
  'tertentu',
  'tertuju',
  'terus',
  'terutama',
  'tetap',
  'tetapi',
  'tiap',
  'tiba',
  'tiba-tiba',
  'tidak',
  'tidakkah',
  'tidaklah',
  'tiga',
  'tinggi',
  'toh',
  'tunjuk',
  'turut',
  'tutur',
  'tuturnya',
  'ucap',
  'ucapnya',
  'ujar',
  'ujarnya',
  'umum',
  'umumnya',
  'ungkap',
  'ungkapnya',
  'untuk',
  'usah',
  'usai',
  'waduh',
  'wah',
  'wahai',
  'waktu',
  'waktunya',
  'walau',
  'walaupun',
  'wong',
  'yaitu',
  'yakin',
  'yakni',
  'yang'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_ita.js
/*
Copyright (c) 2011, David Przybilla, Chris Umbel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

const ita = [
  'ad',
  'al',
  'allo',
  'ai',
  'agli',
  'all',
  'agl',
  'alla',
  'alle',
  'con',
  'col',
  'coi',
  'da',
  'dal',
  'dallo',
  'dai',
  'dagli',
  'dall',
  'dagl',
  'dalla',
  'dalle',
  'di',
  'del',
  'dello',
  'dei',
  'degli',
  'dell',
  'degl',
  'della',
  'delle',
  'in',
  'nel',
  'nello',
  'nei',
  'negli',
  'nell',
  'negl',
  'nella',
  'nelle',
  'su',
  'sul',
  'sullo',
  'sui',
  'sugli',
  'sull',
  'sugl',
  'sulla',
  'sulle',
  'per',
  'tra',
  'contro',
  'io',
  'tu',
  'lui',
  'lei',
  'noi',
  'voi',
  'loro',
  'mio',
  'mia',
  'miei',
  'mie',
  'tuo',
  'tua',
  'tuoi',
  'tue',
  'suo',
  'sua',
  'suoi',
  'sue',
  'nostro',
  'nostra',
  'nostri',
  'nostre',
  'vostro',
  'vostra',
  'vostri',
  'vostre',
  'mi',
  'ti',
  'ci',
  'vi',
  'lo',
  'la',
  'li',
  'le',
  'gli',
  'ne',
  'il',
  'un',
  'uno',
  'una',
  'ma',
  'ed',
  'se',
  'perché',
  'anche',
  'come',
  'dov',
  'dove',
  'che',
  'chi',
  'cui',
  'non',
  'più',
  'quale',
  'quanto',
  'quanti',
  'quanta',
  'quante',
  'quello',
  'quelli',
  'quella',
  'quelle',
  'questo',
  'questi',
  'questa',
  'queste',
  'si',
  'tutto',
  'tutti',
  'a',
  'c',
  'e',
  'i',
  'l',
  'o',
  'ho',
  'hai',
  'ha',
  'abbiamo',
  'avete',
  'hanno',
  'abbia',
  'abbiate',
  'abbiano',
  'avrò',
  'avrai',
  'avrà',
  'avremo',
  'avrete',
  'avranno',
  'avrei',
  'avresti',
  'avrebbe',
  'avremmo',
  'avreste',
  'avrebbero',
  'avevo',
  'avevi',
  'aveva',
  'avevamo',
  'avevate',
  'avevano',
  'ebbi',
  'avesti',
  'ebbe',
  'avemmo',
  'aveste',
  'ebbero',
  'avessi',
  'avesse',
  'avessimo',
  'avessero',
  'avendo',
  'avuto',
  'avuta',
  'avuti',
  'avute',
  'sono',
  'sei',
  'è',
  'siamo',
  'siete',
  'sia',
  'siate',
  'siano',
  'sarò',
  'sarai',
  'sarà',
  'saremo',
  'sarete',
  'saranno',
  'sarei',
  'saresti',
  'sarebbe',
  'saremmo',
  'sareste',
  'sarebbero',
  'ero',
  'eri',
  'era',
  'eravamo',
  'eravate',
  'erano',
  'fui',
  'fosti',
  'fu',
  'fummo',
  'foste',
  'furono',
  'fossi',
  'fosse',
  'fossimo',
  'fossero',
  'essendo',
  'faccio',
  'fai',
  'facciamo',
  'fanno',
  'faccia',
  'facciate',
  'facciano',
  'farò',
  'farai',
  'farà',
  'faremo',
  'farete',
  'faranno',
  'farei',
  'faresti',
  'farebbe',
  'faremmo',
  'fareste',
  'farebbero',
  'facevo',
  'facevi',
  'faceva',
  'facevamo',
  'facevate',
  'facevano',
  'feci',
  'facesti',
  'fece',
  'facemmo',
  'faceste',
  'fecero',
  'facessi',
  'facesse',
  'facessimo',
  'facessero',
  'facendo',
  'sto',
  'stai',
  'sta',
  'stiamo',
  'stanno',
  'stia',
  'stiate',
  'stiano',
  'starò',
  'starai',
  'starà',
  'staremo',
  'starete',
  'staranno',
  'starei',
  'staresti',
  'starebbe',
  'staremmo',
  'stareste',
  'starebbero',
  'stavo',
  'stavi',
  'stava',
  'stavamo',
  'stavate',
  'stavano',
  'stetti',
  'stesti',
  'stette',
  'stemmo',
  'steste',
  'stettero',
  'stessi',
  'stesse',
  'stessimo',
  'stessero',
  'stando'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_jpn.js
// Original copyright:
/*
 Licensed to the Apache Software Foundation (ASF) under one or more
 contributor license agreements.  See the NOTICE file distributed with
 this work for additional information regarding copyright ownership.
 The ASF licenses this file to You under the Apache License, Version 2.0
 the "License"); you may not use this file except in compliance with
 the License.  You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/

// This version:
/* The MIT License (MIT)
Copyright (c) 2012, Guillaume Marty

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

// Original location:
// http://svn.apache.org/repos/asf/lucene/dev/trunk/lucene/analysis/kuromoji/src/resources/org/apache/lucene/analysis/ja/stopwords.txt

const jpn = [
  'の',
  'に',
  'は',
  'を',
  'た',
  'が',
  'で',
  'て',
  'と',
  'し',
  'れ',
  'さ',
  'ある',
  'いる',
  'も',
  'する',
  'から',
  'な',
  'こと',
  'として',
  'い',
  'や',
  'れる',
  'など',
  'なっ',
  'ない',
  'この',
  'ため',
  'その',
  'あっ',
  'よう',
  'また',
  'もの',
  'という',
  'あり',
  'まで',
  'られ',
  'なる',
  'へ',
  'か',
  'だ',
  'これ',
  'によって',
  'により',
  'おり',
  'より',
  'による',
  'ず',
  'なり',
  'られる',
  'において',
  'ば',
  'なかっ',
  'なく',
  'しかし',
  'について',
  'せ',
  'だっ',
  'その後',
  'できる',
  'それ',
  'う',
  'ので',
  'なお',
  'のみ',
  'でき',
  'き',
  'つ',
  'における',
  'および',
  'いう',
  'さらに',
  'でも',
  'ら',
  'たり',
  'その他',
  'に関する',
  'たち',
  'ます',
  'ん',
  'なら',
  'に対して',
  '特に',
  'せる',
  '及び',
  'これら',
  'とき',
  'では',
  'にて',
  'ほか',
  'ながら',
  'うち',
  'そして',
  'とともに',
  'ただし',
  'かつて',
  'それぞれ',
  'または',
  'お',
  'ほど',
  'ものの',
  'に対する',
  'ほとんど',
  'と共に',
  'といった',
  'です',
  'とも',
  'ところ',
  'ここ'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_kor.js
// Copyright (c) 2017 Peter Graham, contributors. Released under the Apache-2.0 license.

const kor = [
  '가',
  '가까스로',
  '가령',
  '각',
  '각각',
  '각자',
  '각종',
  '갖고말하자면',
  '같다',
  '같이',
  '개의치않고',
  '거니와',
  '거바',
  '거의',
  '것',
  '것과 같이',
  '것들',
  '게다가',
  '게우다',
  '겨우',
  '견지에서',
  '결과에 이르다',
  '결국',
  '결론을 낼 수 있다',
  '겸사겸사',
  '고려하면',
  '고로',
  '곧',
  '공동으로',
  '과',
  '과연',
  '관계가 있다',
  '관계없이',
  '관련이 있다',
  '관하여',
  '관한',
  '관해서는',
  '구',
  '구체적으로',
  '구토하다',
  '그',
  '그들',
  '그때',
  '그래',
  '그래도',
  '그래서',
  '그러나',
  '그러니',
  '그러니까',
  '그러면',
  '그러므로',
  '그러한즉',
  '그런 까닭에',
  '그런데',
  '그런즉',
  '그럼',
  '그럼에도 불구하고',
  '그렇게 함으로써',
  '그렇지',
  '그렇지 않다면',
  '그렇지 않으면',
  '그렇지만',
  '그렇지않으면',
  '그리고',
  '그리하여',
  '그만이다',
  '그에 따르는',
  '그위에',
  '그저',
  '그중에서',
  '그치지 않다',
  '근거로',
  '근거하여',
  '기대여',
  '기점으로',
  '기준으로',
  '기타',
  '까닭으로',
  '까악',
  '까지',
  '까지 미치다',
  '까지도',
  '꽈당',
  '끙끙',
  '끼익',
  '나',
  '나머지는',
  '남들',
  '남짓',
  '너',
  '너희',
  '너희들',
  '네',
  '넷',
  '년',
  '논하지 않다',
  '놀라다',
  '누가 알겠는가',
  '누구',
  '다른',
  '다른 방면으로',
  '다만',
  '다섯',
  '다소',
  '다수',
  '다시 말하자면',
  '다시말하면',
  '다음',
  '다음에',
  '다음으로',
  '단지',
  '답다',
  '당신',
  '당장',
  '대로 하다',
  '대하면',
  '대하여',
  '대해 말하자면',
  '대해서',
  '댕그',
  '더구나',
  '더군다나',
  '더라도',
  '더불어',
  '더욱더',
  '더욱이는',
  '도달하다',
  '도착하다',
  '동시에',
  '동안',
  '된바에야',
  '된이상',
  '두번째로',
  '둘',
  '둥둥',
  '뒤따라',
  '뒤이어',
  '든간에',
  '들',
  '등',
  '등등',
  '딩동',
  '따라',
  '따라서',
  '따위',
  '따지지 않다',
  '딱',
  '때',
  '때가 되어',
  '때문에',
  '또',
  '또한',
  '뚝뚝',
  '라 해도',
  '령',
  '로',
  '로 인하여',
  '로부터',
  '로써',
  '륙',
  '를',
  '마음대로',
  '마저',
  '마저도',
  '마치',
  '막론하고',
  '만 못하다',
  '만약',
  '만약에',
  '만은 아니다',
  '만이 아니다',
  '만일',
  '만큼',
  '말하자면',
  '말할것도 없고',
  '매',
  '매번',
  '메쓰겁다',
  '몇',
  '모',
  '모두',
  '무렵',
  '무릎쓰고',
  '무슨',
  '무엇',
  '무엇때문에',
  '물론',
  '및',
  '바꾸어말하면',
  '바꾸어말하자면',
  '바꾸어서 말하면',
  '바꾸어서 한다면',
  '바꿔 말하면',
  '바로',
  '바와같이',
  '밖에 안된다',
  '반대로',
  '반대로 말하자면',
  '반드시',
  '버금',
  '보는데서',
  '보다더',
  '보드득',
  '본대로',
  '봐',
  '봐라',
  '부류의 사람들',
  '부터',
  '불구하고',
  '불문하고',
  '붕붕',
  '비걱거리다',
  '비교적',
  '비길수 없다',
  '비로소',
  '비록',
  '비슷하다',
  '비추어 보아',
  '비하면',
  '뿐만 아니라',
  '뿐만아니라',
  '뿐이다',
  '삐걱',
  '삐걱거리다',
  '사',
  '삼',
  '상대적으로 말하자면',
  '생각한대로',
  '설령',
  '설마',
  '설사',
  '셋',
  '소생',
  '소인',
  '솨',
  '쉿',
  '습니까',
  '습니다',
  '시각',
  '시간',
  '시작하여',
  '시초에',
  '시키다',
  '실로',
  '심지어',
  '아',
  '아니',
  '아니나다를가',
  '아니라면',
  '아니면',
  '아니었다면',
  '아래윗',
  '아무거나',
  '아무도',
  '아야',
  '아울러',
  '아이',
  '아이고',
  '아이구',
  '아이야',
  '아이쿠',
  '아하',
  '아홉',
  '안 그러면',
  '않기 위하여',
  '않기 위해서',
  '알 수 있다',
  '알았어',
  '앗',
  '앞에서',
  '앞의것',
  '야',
  '약간',
  '양자',
  '어',
  '어기여차',
  '어느',
  '어느 년도',
  '어느것',
  '어느곳',
  '어느때',
  '어느쪽',
  '어느해',
  '어디',
  '어때',
  '어떠한',
  '어떤',
  '어떤것',
  '어떤것들',
  '어떻게',
  '어떻해',
  '어이',
  '어째서',
  '어쨋든',
  '어쩔수 없다',
  '어찌',
  '어찌됏든',
  '어찌됏어',
  '어찌하든지',
  '어찌하여',
  '언제',
  '언젠가',
  '얼마',
  '얼마 안 되는 것',
  '얼마간',
  '얼마나',
  '얼마든지',
  '얼마만큼',
  '얼마큼',
  '엉엉',
  '에',
  '에 가서',
  '에 달려 있다',
  '에 대해',
  '에 있다',
  '에 한하다',
  '에게',
  '에서',
  '여',
  '여기',
  '여덟',
  '여러분',
  '여보시오',
  '여부',
  '여섯',
  '여전히',
  '여차',
  '연관되다',
  '연이서',
  '영',
  '영차',
  '옆사람',
  '예',
  '예를 들면',
  '예를 들자면',
  '예컨대',
  '예하면',
  '오',
  '오로지',
  '오르다',
  '오자마자',
  '오직',
  '오호',
  '오히려',
  '와',
  '와 같은 사람들',
  '와르르',
  '와아',
  '왜',
  '왜냐하면',
  '외에도',
  '요만큼',
  '요만한 것',
  '요만한걸',
  '요컨대',
  '우르르',
  '우리',
  '우리들',
  '우선',
  '우에 종합한것과같이',
  '운운',
  '월',
  '위에서 서술한바와같이',
  '위하여',
  '위해서',
  '윙윙',
  '육',
  '으로',
  '으로 인하여',
  '으로서',
  '으로써',
  '을',
  '응',
  '응당',
  '의',
  '의거하여',
  '의지하여',
  '의해',
  '의해되다',
  '의해서',
  '이',
  '이 되다',
  '이 때문에',
  '이 밖에',
  '이 외에',
  '이 정도의',
  '이것',
  '이곳',
  '이때',
  '이라면',
  '이래',
  '이러이러하다',
  '이러한',
  '이런',
  '이럴정도로',
  '이렇게 많은 것',
  '이렇게되면',
  '이렇게말하자면',
  '이렇구나',
  '이로 인하여',
  '이르기까지',
  '이리하여',
  '이만큼',
  '이번',
  '이봐',
  '이상',
  '이어서',
  '이었다',
  '이와 같다',
  '이와 같은',
  '이와 반대로',
  '이와같다면',
  '이외에도',
  '이용하여',
  '이유만으로',
  '이젠',
  '이지만',
  '이쪽',
  '이천구',
  '이천육',
  '이천칠',
  '이천팔',
  '인 듯하다',
  '인젠',
  '일',
  '일것이다',
  '일곱',
  '일단',
  '일때',
  '일반적으로',
  '일지라도',
  '임에 틀림없다',
  '입각하여',
  '입장에서',
  '잇따라',
  '있다',
  '자',
  '자기',
  '자기집',
  '자마자',
  '자신',
  '잠깐',
  '잠시',
  '저',
  '저것',
  '저것만큼',
  '저기',
  '저쪽',
  '저희',
  '전부',
  '전자',
  '전후',
  '점에서 보아',
  '정도에 이르다',
  '제',
  '제각기',
  '제외하고',
  '조금',
  '조차',
  '조차도',
  '졸졸',
  '좀',
  '좋아',
  '좍좍',
  '주룩주룩',
  '주저하지 않고',
  '줄은 몰랏다',
  '줄은모른다',
  '중에서',
  '중의하나',
  '즈음하여',
  '즉',
  '즉시',
  '지든지',
  '지만',
  '지말고',
  '진짜로',
  '쪽으로',
  '차라리',
  '참',
  '참나',
  '첫번째로',
  '쳇',
  '총적으로',
  '총적으로 말하면',
  '총적으로 보면',
  '칠',
  '콸콸',
  '쾅쾅',
  '쿵',
  '타다',
  '타인',
  '탕탕',
  '토하다',
  '통하여',
  '툭',
  '퉤',
  '틈타',
  '팍',
  '팔',
  '퍽',
  '펄렁',
  '하',
  '하게될것이다',
  '하게하다',
  '하겠는가',
  '하고 있다',
  '하고있었다',
  '하곤하였다',
  '하구나',
  '하기 때문에',
  '하기 위하여',
  '하기는한데',
  '하기만 하면',
  '하기보다는',
  '하기에',
  '하나',
  '하느니',
  '하는 김에',
  '하는 편이 낫다',
  '하는것도',
  '하는것만 못하다',
  '하는것이 낫다',
  '하는바',
  '하더라도',
  '하도다',
  '하도록시키다',
  '하도록하다',
  '하든지',
  '하려고하다',
  '하마터면',
  '하면 할수록',
  '하면된다',
  '하면서',
  '하물며',
  '하여금',
  '하여야',
  '하자마자',
  '하지 않는다면',
  '하지 않도록',
  '하지마',
  '하지마라',
  '하지만',
  '하하',
  '한 까닭에',
  '한 이유는',
  '한 후',
  '한다면',
  '한다면 몰라도',
  '한데',
  '한마디',
  '한적이있다',
  '한켠으로는',
  '한항목',
  '할 따름이다',
  '할 생각이다',
  '할 줄 안다',
  '할 지경이다',
  '할 힘이 있다',
  '할때',
  '할만하다',
  '할망정',
  '할뿐',
  '할수있다',
  '할수있어',
  '할줄알다',
  '할지라도',
  '할지언정',
  '함께',
  '해도된다',
  '해도좋다',
  '해봐요',
  '해서는 안된다',
  '해야한다',
  '해요',
  '했어요',
  '향하다',
  '향하여',
  '향해서',
  '허',
  '허걱',
  '허허',
  '헉',
  '헉헉',
  '헐떡헐떡',
  '형식으로 쓰여',
  '혹시',
  '혹은',
  '혼자',
  '훨씬',
  '휘익',
  '휴',
  '흐흐',
  '흥',
  '힘입어',
  '︿',
  '～',
  '￥'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_kur.js
/* The MIT License (MIT)

Copyright (c) 2016 Gene Diaz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */

const kur = [
  'ئێمە',
  'ئێوە',
  'ئەم',
  'ئەو',
  'ئەوان',
  'ئەوەی',
  'بۆ',
  'بێ',
  'بێجگە',
  'بە',
  'بەبێ',
  'بەدەم',
  'بەردەم',
  'بەرلە',
  'بەرەوی',
  'بەرەوە',
  'بەلای',
  'بەپێی',
  'تۆ',
  'تێ',
  'جگە',
  'دوای',
  'دوو',
  'دە',
  'دەکات',
  'دەگەڵ',
  'سەر',
  'لێ',
  'لە',
  'لەبابەت',
  'لەباتی',
  'لەبارەی',
  'لەبرێتی',
  'لەبن',
  'لەبەر',
  'لەبەینی',
  'لەدەم',
  'لەرێ',
  'لەرێگا',
  'لەرەوی',
  'لەسەر',
  'لەلایەن',
  'لەناو',
  'لەنێو',
  'لەو',
  'لەپێناوی',
  'لەژێر',
  'لەگەڵ',
  'من',
  'ناو',
  'نێوان',
  'هەر',
  'هەروەها',
  'و',
  'وەک',
  'پاش',
  'پێ',
  'پێش',
  'چەند',
  'کرد',
  'کە',
  'ی'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_lat.js
// Copyright (c) 2017 Peter Graham, contributors. Released under the Apache-2.0 license.

const lat = [
  'a',
  'ab',
  'ac',
  'ad',
  'at',
  'atque',
  'aut',
  'autem',
  'cum',
  'de',
  'dum',
  'e',
  'erant',
  'erat',
  'est',
  'et',
  'etiam',
  'ex',
  'haec',
  'hic',
  'hoc',
  'in',
  'ita',
  'me',
  'nec',
  'neque',
  'non',
  'per',
  'qua',
  'quae',
  'quam',
  'qui',
  'quibus',
  'quidem',
  'quo',
  'quod',
  're',
  'rebus',
  'rem',
  'res',
  'sed',
  'si',
  'sic',
  'sunt',
  'tamen',
  'tandem',
  'te',
  'ut',
  'vel'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_lav.js
// Copyright (c) 2017 Peter Graham, contributors. Released under the Apache-2.0 license.

const lav = [
  'aiz',
  'ap',
  'apakš',
  'apakšpus',
  'ar',
  'arī',
  'augšpus',
  'bet',
  'bez',
  'bija',
  'biji',
  'biju',
  'bijām',
  'bijāt',
  'būs',
  'būsi',
  'būsiet',
  'būsim',
  'būt',
  'būšu',
  'caur',
  'diemžēl',
  'diezin',
  'droši',
  'dēļ',
  'esam',
  'esat',
  'esi',
  'esmu',
  'gan',
  'gar',
  'iekam',
  'iekams',
  'iekām',
  'iekāms',
  'iekš',
  'iekšpus',
  'ik',
  'ir',
  'it',
  'itin',
  'iz',
  'ja',
  'jau',
  'jeb',
  'jebšu',
  'jel',
  'jo',
  'jā',
  'ka',
  'kamēr',
  'kaut',
  'kolīdz',
  'kopš',
  'kā',
  'kļuva',
  'kļuvi',
  'kļuvu',
  'kļuvām',
  'kļuvāt',
  'kļūs',
  'kļūsi',
  'kļūsiet',
  'kļūsim',
  'kļūst',
  'kļūstam',
  'kļūstat',
  'kļūsti',
  'kļūstu',
  'kļūt',
  'kļūšu',
  'labad',
  'lai',
  'lejpus',
  'līdz',
  'līdzko',
  'ne',
  'nebūt',
  'nedz',
  'nekā',
  'nevis',
  'nezin',
  'no',
  'nu',
  'nē',
  'otrpus',
  'pa',
  'par',
  'pat',
  'pie',
  'pirms',
  'pret',
  'priekš',
  'pār',
  'pēc',
  'starp',
  'tad',
  'tak',
  'tapi',
  'taps',
  'tapsi',
  'tapsiet',
  'tapsim',
  'tapt',
  'tapāt',
  'tapšu',
  'taču',
  'te',
  'tiec',
  'tiek',
  'tiekam',
  'tiekat',
  'tieku',
  'tik',
  'tika',
  'tikai',
  'tiki',
  'tikko',
  'tiklab',
  'tiklīdz',
  'tiks',
  'tiksiet',
  'tiksim',
  'tikt',
  'tiku',
  'tikvien',
  'tikām',
  'tikāt',
  'tikšu',
  'tomēr',
  'topat',
  'turpretim',
  'turpretī',
  'tā',
  'tādēļ',
  'tālab',
  'tāpēc',
  'un',
  'uz',
  'vai',
  'var',
  'varat',
  'varēja',
  'varēji',
  'varēju',
  'varējām',
  'varējāt',
  'varēs',
  'varēsi',
  'varēsiet',
  'varēsim',
  'varēt',
  'varēšu',
  'vien',
  'virs',
  'virspus',
  'vis',
  'viņpus',
  'zem',
  'ārpus',
  'šaipus'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_lit.js
/* The MIT License (MIT)

Copyright (c) 2016 Gene Diaz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */

const lit = [
  'abi',
  'abidvi',
  'abiejose',
  'abiejuose',
  'abiejø',
  'abiem',
  'abigaliai',
  'abipus',
  'abu',
  'abudu',
  'ai',
  'ana',
  'anaiptol',
  'anaisiais',
  'anajai',
  'anajam',
  'anajame',
  'anapus',
  'anas',
  'anasai',
  'anasis',
  'anei',
  'aniedvi',
  'anieji',
  'aniesiems',
  'anoji',
  'anojo',
  'anojoje',
  'anokia',
  'anoks',
  'anosiomis',
  'anosioms',
  'anosios',
  'anosiose',
  'anot',
  'ant',
  'antai',
  'anuodu',
  'anuoju',
  'anuosiuose',
  'anuosius',
  'anàja',
  'anàjà',
  'anàjá',
  'anàsias',
  'anøjø',
  'apie',
  'aplink',
  'ar',
  'arba',
  'argi',
  'arti',
  'aukðèiau',
  'að',
  'be',
  'bei',
  'beje',
  'bemaþ',
  'bent',
  'bet',
  'betgi',
  'beveik',
  'dar',
  'dargi',
  'daugmaþ',
  'deja',
  'dëka',
  'dël',
  'dëlei',
  'dëlto',
  'ech',
  'et',
  'gal',
  'galbût',
  'galgi',
  'gan',
  'gana',
  'gi',
  'greta',
  'idant',
  'iki',
  'ir',
  'irgi',
  'it',
  'itin',
  'ið',
  'iðilgai',
  'iðvis',
  'jaisiais',
  'jajai',
  'jajam',
  'jajame',
  'jei',
  'jeigu',
  'ji',
  'jiedu',
  'jiedvi',
  'jieji',
  'jiesiems',
  'jinai',
  'jis',
  'jisai',
  'jog',
  'joji',
  'jojo',
  'jojoje',
  'jokia',
  'joks',
  'josiomis',
  'josioms',
  'josios',
  'josiose',
  'judu',
  'judvi',
  'juk',
  'jumis',
  'jums',
  'jumyse',
  'juodu',
  'juoju',
  'juosiuose',
  'juosius',
  'jus',
  'jàja',
  'jàjà',
  'jàsias',
  'jájá',
  'jøjø',
  'jûs',
  'jûsiðkis',
  'jûsiðkë',
  'jûsø',
  'kad',
  'kada',
  'kadangi',
  'kai',
  'kaip',
  'kaipgi',
  'kas',
  'katra',
  'katras',
  'katriedvi',
  'katruodu',
  'kaþin',
  'kaþkas',
  'kaþkatra',
  'kaþkatras',
  'kaþkokia',
  'kaþkoks',
  'kaþkuri',
  'kaþkuris',
  'kiaurai',
  'kiek',
  'kiekvienas',
  'kieno',
  'kita',
  'kitas',
  'kitokia',
  'kitoks',
  'kodël',
  'kokia',
  'koks',
  'kol',
  'kolei',
  'kone',
  'kuomet',
  'kur',
  'kurgi',
  'kuri',
  'kuriedvi',
  'kuris',
  'kuriuodu',
  'lai',
  'lig',
  'ligi',
  'link',
  'lyg',
  'man',
  'manaisiais',
  'manajai',
  'manajam',
  'manajame',
  'manas',
  'manasai',
  'manasis',
  'mane',
  'manieji',
  'maniesiems',
  'manim',
  'manimi',
  'maniðkis',
  'maniðkë',
  'mano',
  'manoji',
  'manojo',
  'manojoje',
  'manosiomis',
  'manosioms',
  'manosios',
  'manosiose',
  'manuoju',
  'manuosiuose',
  'manuosius',
  'manyje',
  'manàja',
  'manàjà',
  'manàjá',
  'manàsias',
  'manæs',
  'manøjø',
  'mat',
  'maþdaug',
  'maþne',
  'mes',
  'mudu',
  'mudvi',
  'mumis',
  'mums',
  'mumyse',
  'mus',
  'mûsiðkis',
  'mûsiðkë',
  'mûsø',
  'na',
  'nagi',
  'ne',
  'nebe',
  'nebent',
  'negi',
  'negu',
  'nei',
  'nejau',
  'nejaugi',
  'nekaip',
  'nelyginant',
  'nes',
  'net',
  'netgi',
  'netoli',
  'neva',
  'nors',
  'nuo',
  'në',
  'o',
  'ogi',
  'oi',
  'paeiliui',
  'pagal',
  'pakeliui',
  'palaipsniui',
  'palei',
  'pas',
  'pasak',
  'paskos',
  'paskui',
  'paskum',
  'pat',
  'pati',
  'patiems',
  'paties',
  'pats',
  'patys',
  'patá',
  'paèiais',
  'paèiam',
  'paèiame',
  'paèiu',
  'paèiuose',
  'paèius',
  'paèiø',
  'per',
  'pernelyg',
  'pirm',
  'pirma',
  'pirmiau',
  'po',
  'prie',
  'prieð',
  'prieðais',
  'pro',
  'pusiau',
  'rasi',
  'rodos',
  'sau',
  'savaisiais',
  'savajai',
  'savajam',
  'savajame',
  'savas',
  'savasai',
  'savasis',
  'save',
  'savieji',
  'saviesiems',
  'savimi',
  'saviðkis',
  'saviðkë',
  'savo',
  'savoji',
  'savojo',
  'savojoje',
  'savosiomis',
  'savosioms',
  'savosios',
  'savosiose',
  'savuoju',
  'savuosiuose',
  'savuosius',
  'savyje',
  'savàja',
  'savàjà',
  'savàjá',
  'savàsias',
  'savæs',
  'savøjø',
  'skersai',
  'skradþiai',
  'staèiai',
  'su',
  'sulig',
  'ta',
  'tad',
  'tai',
  'taigi',
  'taip',
  'taipogi',
  'taisiais',
  'tajai',
  'tajam',
  'tajame',
  'tamsta',
  'tarp',
  'tarsi',
  'tartum',
  'tarytum',
  'tas',
  'tasai',
  'tau',
  'tavaisiais',
  'tavajai',
  'tavajam',
  'tavajame',
  'tavas',
  'tavasai',
  'tavasis',
  'tave',
  'tavieji',
  'taviesiems',
  'tavimi',
  'taviðkis',
  'taviðkë',
  'tavo',
  'tavoji',
  'tavojo',
  'tavojoje',
  'tavosiomis',
  'tavosioms',
  'tavosios',
  'tavosiose',
  'tavuoju',
  'tavuosiuose',
  'tavuosius',
  'tavyje',
  'tavàja',
  'tavàjà',
  'tavàjá',
  'tavàsias',
  'tavæs',
  'tavøjø',
  'taèiau',
  'te',
  'tegu',
  'tegul',
  'tiedvi',
  'tieji',
  'ties',
  'tiesiems',
  'tiesiog',
  'tik',
  'tikriausiai',
  'tiktai',
  'toji',
  'tojo',
  'tojoje',
  'tokia',
  'toks',
  'tol',
  'tolei',
  'toliau',
  'tosiomis',
  'tosioms',
  'tosios',
  'tosiose',
  'tu',
  'tuodu',
  'tuoju',
  'tuosiuose',
  'tuosius',
  'turbût',
  'tàja',
  'tàjà',
  'tàjá',
  'tàsias',
  'tøjø',
  'tûlas',
  'uþ',
  'uþtat',
  'uþvis',
  'va',
  'vai',
  'viduj',
  'vidury',
  'vien',
  'vienas',
  'vienokia',
  'vienoks',
  'vietoj',
  'virð',
  'virðuj',
  'virðum',
  'vis',
  'vis dëlto',
  'visa',
  'visas',
  'visgi',
  'visokia',
  'visoks',
  'vos',
  'vël',
  'vëlgi',
  'ypaè',
  'á',
  'ákypai',
  'ástriþai',
  'ðalia',
  'ðe',
  'ði',
  'ðiaisiais',
  'ðiajai',
  'ðiajam',
  'ðiajame',
  'ðiapus',
  'ðiedvi',
  'ðieji',
  'ðiesiems',
  'ðioji',
  'ðiojo',
  'ðiojoje',
  'ðiokia',
  'ðioks',
  'ðiosiomis',
  'ðiosioms',
  'ðiosios',
  'ðiosiose',
  'ðis',
  'ðisai',
  'ðit',
  'ðita',
  'ðitas',
  'ðitiedvi',
  'ðitokia',
  'ðitoks',
  'ðituodu',
  'ðiuodu',
  'ðiuoju',
  'ðiuosiuose',
  'ðiuosius',
  'ðiàja',
  'ðiàjà',
  'ðiàsias',
  'ðiøjø',
  'ðtai',
  'ðájá',
  'þemiau'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_lgg.js
/* Copyright 2016 Liam Doherty

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* This list is frequency sorted. That means it can be sliced from the bottom
and be less agressive in excluding stopwords */

const lgg = [
  '́',
  '̀',
  'nɨ',
  'mà',
  'rɨ',
  'dɨ',
  'ɨ',
  '́nɨ',
  'èrɨ',
  '́á\'',
  'sɨ',
  'àzɨ',
  'yɨ',
  'rá',
  'vɨ',
  'nga',
  'be',
  'mɨ',
  'à',
  'dà',
  'kʉ',
  'bá',
  ' ́lé',
  'má',
  'e',
  'yo',
  '̀yɨ',
  'ma',
  'kɨ',
  'àlʉ',
  '́mà',
  'rʉ́',
  'drɨ',
  'patí',
  'a',
  'è',
  'yó',
  'te',
  '̀á',
  'mà',
  'mâ',
  'dálé',
  'yí',
  '̌',
  'pɨ',
  'e\'yó',
  'ndráa',
  'bo',
  'di',
  'drìá'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_lggNd.js
/* Copyright 2016 Liam Doherty

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* This list is frequency sorted. That means it can be sliced from the bottom
and be less agressive in excluding stopwords */

const lggNd = [
  'ma',
  'ni',
  'ri',
  'eri',
  'di',
  'yi',
  'si',
  'ba',
  'nga',
  'i',
  'ra',
  'ku',
  'be',
  'yo',
  'da',
  'azini',
  'dria',
  'ru',
  'azi',
  'mu',
  'te',
  'ndra',
  'diyi',
  'ima',
  'mi',
  'alu',
  'nde',
  'alia',
  'le',
  'vile',
  'dri',
  'pati',
  'aria',
  'bo',
  'e\'yo',
  'tu',
  'kini',
  'dii',
  'ama',
  'eyi',
  'dika',
  'pi',
  'e',
  'angu',
  'e\'do',
  'pie',
  'ka',
  'ti',
  'o\'du',
  'du'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_msa.js
/* The MIT License (MIT)

Copyright (c) 2016 Gene Diaz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */

const msa = [
  'abdul',
  'abdullah',
  'acara',
  'ada',
  'adalah',
  'ahmad',
  'air',
  'akan',
  'akhbar',
  'akhir',
  'aktiviti',
  'alam',
  'amat',
  'amerika',
  'anak',
  'anggota',
  'antara',
  'antarabangsa',
  'apa',
  'apabila',
  'april',
  'as',
  'asas',
  'asean',
  'asia',
  'asing',
  'atas',
  'atau',
  'australia',
  'awal',
  'awam',
  'bagaimanapun',
  'bagi',
  'bahagian',
  'bahan',
  'baharu',
  'bahawa',
  'baik',
  'bandar',
  'bank',
  'banyak',
  'barangan',
  'baru',
  'baru-baru',
  'bawah',
  'beberapa',
  'bekas',
  'beliau',
  'belum',
  'berada',
  'berakhir',
  'berbanding',
  'berdasarkan',
  'berharap',
  'berikutan',
  'berjaya',
  'berjumlah',
  'berkaitan',
  'berkata',
  'berkenaan',
  'berlaku',
  'bermula',
  'bernama',
  'bernilai',
  'bersama',
  'berubah',
  'besar',
  'bhd',
  'bidang',
  'bilion',
  'bn',
  'boleh',
  'bukan',
  'bulan',
  'bursa',
  'cadangan',
  'china',
  'dagangan',
  'dalam',
  'dan',
  'dana',
  'dapat',
  'dari',
  'daripada',
  'dasar',
  'datang',
  'datuk',
  'demikian',
  'dengan',
  'depan',
  'derivatives',
  'dewan',
  'di',
  'diadakan',
  'dibuka',
  'dicatatkan',
  'dijangka',
  'diniagakan',
  'dis',
  'disember',
  'ditutup',
  'dolar',
  'dr',
  'dua',
  'dunia',
  'ekonomi',
  'eksekutif',
  'eksport',
  'empat',
  'enam',
  'faedah',
  'feb',
  'global',
  'hadapan',
  'hanya',
  'harga',
  'hari',
  'hasil',
  'hingga',
  'hubungan',
  'ia',
  'iaitu',
  'ialah',
  'indeks',
  'india',
  'indonesia',
  'industri',
  'ini',
  'islam',
  'isnin',
  'isu',
  'itu',
  'jabatan',
  'jalan',
  'jan',
  'jawatan',
  'jawatankuasa',
  'jepun',
  'jika',
  'jualan',
  'juga',
  'julai',
  'jumaat',
  'jumlah',
  'jun',
  'juta',
  'kadar',
  'kalangan',
  'kali',
  'kami',
  'kata',
  'katanya',
  'kaunter',
  'kawasan',
  'ke',
  'keadaan',
  'kecil',
  'kedua',
  'kedua-dua',
  'kedudukan',
  'kekal',
  'kementerian',
  'kemudahan',
  'kenaikan',
  'kenyataan',
  'kepada',
  'kepentingan',
  'keputusan',
  'kerajaan',
  'kerana',
  'kereta',
  'kerja',
  'kerjasama',
  'kes',
  'keselamatan',
  'keseluruhan',
  'kesihatan',
  'ketika',
  'ketua',
  'keuntungan',
  'kewangan',
  'khamis',
  'kini',
  'kira-kira',
  'kita',
  'klci',
  'klibor',
  'komposit',
  'kontrak',
  'kos',
  'kuala',
  'kuasa',
  'kukuh',
  'kumpulan',
  'lagi',
  'lain',
  'langkah',
  'laporan',
  'lebih',
  'lepas',
  'lima',
  'lot',
  'luar',
  'lumpur',
  'mac',
  'mahkamah',
  'mahu',
  'majlis',
  'makanan',
  'maklumat',
  'malam',
  'malaysia',
  'mana',
  'manakala',
  'masa',
  'masalah',
  'masih',
  'masing-masing',
  'masyarakat',
  'mata',
  'media',
  'mei',
  'melalui',
  'melihat',
  'memandangkan',
  'memastikan',
  'membantu',
  'membawa',
  'memberi',
  'memberikan',
  'membolehkan',
  'membuat',
  'mempunyai',
  'menambah',
  'menarik',
  'menawarkan',
  'mencapai',
  'mencatatkan',
  'mendapat',
  'mendapatkan',
  'menerima',
  'menerusi',
  'mengadakan',
  'mengambil',
  'mengenai',
  'menggalakkan',
  'menggunakan',
  'mengikut',
  'mengumumkan',
  'mengurangkan',
  'meningkat',
  'meningkatkan',
  'menjadi',
  'menjelang',
  'menokok',
  'menteri',
  'menunjukkan',
  'menurut',
  'menyaksikan',
  'menyediakan',
  'mereka',
  'merosot',
  'merupakan',
  'mesyuarat',
  'minat',
  'minggu',
  'minyak',
  'modal',
  'mohd',
  'mudah',
  'mungkin',
  'naik',
  'najib',
  'nasional',
  'negara',
  'negara-negara',
  'negeri',
  'niaga',
  'nilai',
  'nov',
  'ogos',
  'okt',
  'oleh',
  'operasi',
  'orang',
  'pada',
  'pagi',
  'paling',
  'pameran',
  'papan',
  'para',
  'paras',
  'parlimen',
  'parti',
  'pasaran',
  'pasukan',
  'pegawai',
  'pejabat',
  'pekerja',
  'pelabur',
  'pelaburan',
  'pelancongan',
  'pelanggan',
  'pelbagai',
  'peluang',
  'pembangunan',
  'pemberita',
  'pembinaan',
  'pemimpin',
  'pendapatan',
  'pendidikan',
  'penduduk',
  'penerbangan',
  'pengarah',
  'pengeluaran',
  'pengerusi',
  'pengguna',
  'pengurusan',
  'peniaga',
  'peningkatan',
  'penting',
  'peratus',
  'perdagangan',
  'perdana',
  'peringkat',
  'perjanjian',
  'perkara',
  'perkhidmatan',
  'perladangan',
  'perlu',
  'permintaan',
  'perniagaan',
  'persekutuan',
  'persidangan',
  'pertama',
  'pertubuhan',
  'pertumbuhan',
  'perusahaan',
  'peserta',
  'petang',
  'pihak',
  'pilihan',
  'pinjaman',
  'polis',
  'politik',
  'presiden',
  'prestasi',
  'produk',
  'program',
  'projek',
  'proses',
  'proton',
  'pukul',
  'pula',
  'pusat',
  'rabu',
  'rakan',
  'rakyat',
  'ramai',
  'rantau',
  'raya',
  'rendah',
  'ringgit',
  'rumah',
  'sabah',
  'sahaja',
  'saham',
  'sama',
  'sarawak',
  'satu',
  'sawit',
  'saya',
  'sdn',
  'sebagai',
  'sebahagian',
  'sebanyak',
  'sebarang',
  'sebelum',
  'sebelumnya',
  'sebuah',
  'secara',
  'sedang',
  'segi',
  'sehingga',
  'sejak',
  'sekarang',
  'sektor',
  'sekuriti',
  'selain',
  'selama',
  'selasa',
  'selatan',
  'selepas',
  'seluruh',
  'semakin',
  'semalam',
  'semasa',
  'sementara',
  'semua',
  'semula',
  'sen',
  'sendiri',
  'seorang',
  'sepanjang',
  'seperti',
  'sept',
  'september',
  'serantau',
  'seri',
  'serta',
  'sesi',
  'setiap',
  'setiausaha',
  'sidang',
  'singapura',
  'sini',
  'sistem',
  'sokongan',
  'sri',
  'sudah',
  'sukan',
  'suku',
  'sumber',
  'supaya',
  'susut',
  'syarikat',
  'syed',
  'tahap',
  'tahun',
  'tan',
  'tanah',
  'tanpa',
  'tawaran',
  'teknologi',
  'telah',
  'tempat',
  'tempatan',
  'tempoh',
  'tenaga',
  'tengah',
  'tentang',
  'terbaik',
  'terbang',
  'terbesar',
  'terbuka',
  'terdapat',
  'terhadap',
  'termasuk',
  'tersebut',
  'terus',
  'tetapi',
  'thailand',
  'tiada',
  'tidak',
  'tiga',
  'timbalan',
  'timur',
  'tindakan',
  'tinggi',
  'tun',
  'tunai',
  'turun',
  'turut',
  'umno',
  'unit',
  'untuk',
  'untung',
  'urus',
  'usaha',
  'utama',
  'walaupun',
  'wang',
  'wanita',
  'wilayah',
  'yang'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_mar.js
// Copyright (c) 2017 Peter Graham, contributors. Released under the Apache-2.0 license.

const mar = [
  'अधिक',
  'अनेक',
  'अशी',
  'असलयाचे',
  'असलेल्या',
  'असा',
  'असून',
  'असे',
  'आज',
  'आणि',
  'आता',
  'आपल्या',
  'आला',
  'आली',
  'आले',
  'आहे',
  'आहेत',
  'एक',
  'एका',
  'कमी',
  'करणयात',
  'करून',
  'का',
  'काम',
  'काय',
  'काही',
  'किवा',
  'की',
  'केला',
  'केली',
  'केले',
  'कोटी',
  'गेल्या',
  'घेऊन',
  'जात',
  'झाला',
  'झाली',
  'झाले',
  'झालेल्या',
  'टा',
  'डॉ',
  'तर',
  'तरी',
  'तसेच',
  'ता',
  'ती',
  'तीन',
  'ते',
  'तो',
  'त्या',
  'त्याचा',
  'त्याची',
  'त्याच्या',
  'त्याना',
  'त्यानी',
  'त्यामुळे',
  'त्री',
  'दिली',
  'दोन',
  'न',
  'नाही',
  'निर्ण्य',
  'पण',
  'पम',
  'परयतन',
  'पाटील',
  'म',
  'मात्र',
  'माहिती',
  'मी',
  'मुबी',
  'म्हणजे',
  'म्हणाले',
  'म्हणून',
  'या',
  'याचा',
  'याची',
  'याच्या',
  'याना',
  'यानी',
  'येणार',
  'येत',
  'येथील',
  'येथे',
  'लाख',
  'व',
  'व्यकत',
  'सर्व',
  'सागित्ले',
  'सुरू',
  'हजार',
  'हा',
  'ही',
  'हे',
  'होणार',
  'होत',
  'होता',
  'होती',
  'होते'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_mya.js
/*
The MIT License (MIT)

Copyright (c) 2019 Kyaw-Zin-Thant

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the 'Software'), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

const mya = [
  'အပေါ်',
  'အနက်',
  'အမြဲတမ်း',
  'အတွင်းတွင်',
  'မကြာမီ',
  'မတိုင်မီ',
  'ဒါ့အပြင်',
  'အောက်မှာ',
  'အထဲမှာ',
  'ဘယ်တော့မျှ',
  'မကြာခဏ',
  'တော်တော်လေး',
  'စဉ်တွင်',
  'နှင့်အတူ',
  'နှင့်',
  'နှင့်တကွ',
  'ကျွန်တော်',
  'ကျွန်မ',
  'ငါ',
  'ကျုပ်',
  'ကျွနု်ပ်',
  'ကျနော်',
  'ကျမ',
  'သူ',
  'သူမ',
  'ထိုဟာ',
  'ထိုအရာ',
  'ဤအရာ',
  'ထို',
  '၄င်း',
  'ကျွန်တော်တို့',
  'ကျွန်မတို့',
  'ငါတို့',
  'ကျုပ်တို့',
  'ကျွနု်ပ်တို့',
  'ကျနော်တို့',
  'ကျမတို့',
  'သင်',
  'သင်တို့',
  'နင်တို့',
  'မင်း',
  'မင်းတို့',
  'သူတို့',
  'ကျွန်တော်အား',
  'ကျွန်တော်ကို',
  'ကျွန်မကို',
  'ငါကို',
  'ကျုပ်ကို',
  'ကျွနု်ပ်ကို',
  'သူ့ကို',
  'သူမကို',
  'ထိုအရာကို',
  'သင့်ကို',
  'သင်တို့ကို',
  'နင်တို့ကို',
  'မင်းကို',
  'မင်းတို့ကို',
  'ငါတို့ကို',
  'ကျုပ်တို့ကို',
  'ကျွနု်ပ်တို့ကို',
  'မိမိကိုယ်တိုင်',
  'မိမိဘာသာ',
  'မင်းကိုယ်တိုင်',
  'မင်းဘာသာ',
  'မင်းတို့ကိုယ်တိုင်',
  'မင်းတို့ဘာသာ',
  'သူကိုယ်တိုင်',
  'ကိုယ်တိုင်',
  'သူမကိုယ်တိုင်',
  'သူ့ဘာသာ',
  'သူ့ကိုယ်ကို',
  'ကိုယ့်ကိုယ်ကို',
  'မိမိကိုယ်ကို',
  '၄င်းပင်',
  'ထိုအရာပင်',
  'သည့်',
  'မည့်',
  'တဲ့',
  'ကျွနု်ပ်၏',
  'ကျွန်တော်၏',
  'ကျွန်မ၏',
  'ကျနော်၏',
  'ကျမ၏',
  'သူ၏',
  'သူမ၏',
  'ထိုအရာ၏',
  'ထိုဟာ၏',
  'ကျွနု်ပ်တို့၏',
  'ငါတို့၏',
  'ကျွန်တော်တို့၏',
  'ကျွန်မတို့၏',
  'ကျနော်တို့၏',
  'ကျမတို့၏',
  'သင်၏',
  'သင်တို့၏',
  'မင်း၏',
  'မင်းတို့၏',
  'သူတို့၏',
  'ကျွန်တော့်ဟာ',
  'ကျွန်မဟာ',
  'ကျနော်၏ဟာ',
  'ကျမ၏ဟာ',
  'ကျမဟာ',
  'ကျနော်ဟာ',
  'သူဟာ',
  'သူမဟာ',
  'သူ့ဟာ',
  'ကျွနု်ပ်တို့ဟာ',
  'ကျွန်တော်တို့ဟာ',
  'ကျွန်မတို့ဟာ',
  'သင်တို့ဟာ',
  'မင်းတို့ဟာ',
  'သူတို့ဟာ',
  'သူမတို့ဟာ',
  'ဤအရာ',
  'ဟောဒါ',
  'ဟောဒီ',
  'ဟောဒီဟာ',
  'ဒီဟာ',
  'ဒါ',
  'ထိုအရာ',
  '၄င်းအရာ',
  'ယင်းအရာ',
  'အဲဒါ',
  'ဟိုဟာ',
  'အချို့',
  'တစ်ခုခု',
  'အဘယ်မဆို',
  'ဘယ်အရာမဆို',
  'အဘယ်မည်သော',
  'အကြင်',
  'အရာရာတိုင်း',
  'စိုးစဉ်မျှ',
  'စိုးစဉ်းမျှ',
  'ဘယ်လောက်မဆို',
  'တစ်စုံတစ်ရာ',
  'တစုံတရာ',
  'အလျဉ်းမဟုတ်',
  'မည်သည့်နည်းနှင့်မျှမဟုတ်',
  'အလျဉ်းမရှိသော',
  'အခြားဖြစ်သော',
  'အခြားသော',
  'အခြားတစ်ခု',
  'အခြားတစ်ယောက်',
  'အားလုံး',
  'အရာရာတိုင်း',
  'အကုန်လုံး',
  'အလုံးစုံ',
  'အရာခပ်သိမ်း',
  'တစ်ခုစီ',
  'အသီးသီး',
  'တစ်ဦးဦး',
  'တစ်ခုခု',
  'ကိုယ်စီကိုယ်ငှ',
  'ကိုယ်စီ',
  'တစ်ဦးစီ',
  'တစ်ယောက်စီ',
  'တစ်ခုစီ',
  'အကုန်',
  'အပြည့်အစုံ',
  'လုံးလုံး',
  'နှစ်ခုလုံး',
  'နှစ်ယောက်လုံး',
  'နှစ်ဘက်လုံး',
  'တစ်စုံတစ်ရာ',
  'တစ်စုံတစ်ခု',
  'တစုံတခု',
  'တစ်စုံတစ်ယောက်',
  'တစုံတယောက်',
  'တစ်ယောက်ယောက်',
  'မည်သူမဆို',
  'ဘာမျှမရှိ',
  'ဘာမှမရှိ',
  'အဘယ်အရာမျှမရှိ',
  'လူတိုင်း',
  'လူတကာ',
  'နှင့်',
  'ပြီးလျှင်',
  '၄င်းနောက်',
  'သို့မဟုတ်',
  'သို့တည်းမဟုတ်',
  'သို့မဟုတ်လျှင်',
  'ဒါမှမဟုတ်',
  'ဖြစ်စေ',
  'သို့စေကာမူ',
  'ဒါပေမယ့်',
  'ဒါပေမဲ့',
  'မှတစ်ပါး',
  'မှလွဲလျှင်',
  'အဘယ်ကြောင့်ဆိုသော်',
  'သောကြောင့်',
  'သဖြင့်',
  '၍',
  'သည့်အတွက်ကြောင့်',
  'လျှင်',
  'ပါက',
  'အကယ်၍',
  'သော်ငြားလည်း',
  'စေကာမူ',
  'နည်းတူ',
  'ပေမယ့်',
  'ပေမဲ့',
  'ထိုနည်းတူစွာ',
  'ထိုနည်းတူ',
  'ကဲ့သို့',
  'သကဲ့သို့',
  'ယင်းကဲ့သို့',
  'ထိုကဲ့သို့',
  'နှင့်စပ်လျဉ်း၍',
  'ဤမျှ',
  'ဤမျှလောက်',
  'ဤကဲ့သို့',
  'အခုလောက်ထိ',
  'ဒါကတော့',
  'အဘယ်ကဲ့သလို့',
  'မည်ကဲ့သို့',
  'မည်သည့်နည်းနှင့်',
  'မည်သည့်နည်းဖြင့်',
  'မည်သည့်နည့်နှင့်မဆို',
  'မည်သည့်နည်းဖြင့်မဆို',
  'မည်သို့',
  'ဘယ်လိုလဲ',
  'သို့ပေတည့်',
  'သို့ပေမည့်',
  'ဘယ်နည်းနှင့်',
  'မည်ရွေ့မည်မျှ',
  'အဘယ်မျှလောက်',
  'ဘယ်လောက်',
  'မည်သူ',
  'ဘယ်သူ',
  'မည်သည့်အကြောင်းကြောင့်',
  'ဘာအတွက်ကြောင့်',
  'အဘယ်ကြောင့်',
  'မည်သည့်အတွက်ကြောင့်',
  'ဘာကြောင့်',
  'ဘာအတွက်နဲ့လဲ',
  'မည်သည်',
  'ဘာလဲ',
  'အဘယ်အရာနည်း',
  'မည်သည့်အရပ်မှာ',
  'ဘယ်နေရာတွင်',
  'မည်သည့်နေရာတွင်',
  'မည်သည့်နေရာသို့',
  'ဘယ်နေရာသို့',
  'ဘယ်နေရာမှာ',
  'ဘယ်သူ၏',
  'မည်သည့်အရာ၏',
  'မည်သည့်အခါ',
  'ဘယ်အချိန်',
  'ဘယ်အခါ',
  'မည်သည့်အချိန်',
  'ဘယ်တော့',
  'မည်သူကို',
  'မည်သူက',
  'ဘယ်သူ့ကို',
  'မည်သူမည်ဝါ',
  'မည်သည့်အရာ',
  'ဘယ်အရာ',
  'မည်သို့ပင်ဖြစ်စေ',
  'ဘယ်လိုပဲဖြစ်ဖြစ်',
  'မည်ရွေ့မည်မျှဖြစ်စေ',
  'မည်သည့်နည်းနှင့်မဆို',
  'ဘယ်နည်းနဲ့ဖြစ်ဖြစ်',
  'မည်သူမဆို',
  'ဘယ်သူမဆို',
  'အဘယ်သူမဆို',
  'မည်သည့်အရာမဆို',
  'ဘာဖြစ်ဖြစ်',
  'မည်သည့်အရာဖြစ်ဖြစ်',
  'မည်သည့်အရပ်၌မဆို',
  'မည်သည့်နေရာမဆို',
  'ဘယ်အခါမဆို',
  'ဘယ်အချိန်မဆို',
  'ဘယ်အခါဖြစ်ဖြစ်',
  'အချိန်အခါမရွေး'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_nob.js
/*
Copyright (c) 2014, Kristoffer Brabrand

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

const nob = [
  'og',
  'i',
  'jeg',
  'det',
  'at',
  'en',
  'et',
  'den',
  'til',
  'er',
  'som',
  'på',
  'de',
  'med',
  'han',
  'av',
  'ikke',
  'der',
  'så',
  'var',
  'meg',
  'seg',
  'men',
  'ett',
  'har',
  'om',
  'vi',
  'min',
  'mitt',
  'ha',
  'hadde',
  'hun',
  'nå',
  'over',
  'da',
  'ved',
  'fra',
  'du',
  'ut',
  'sin',
  'dem',
  'oss',
  'opp',
  'man',
  'kan',
  'hans',
  'hvor',
  'eller',
  'hva',
  'skal',
  'selv',
  'sjøl',
  'her',
  'alle',
  'vil',
  'bli',
  'ble',
  'blitt',
  'kunne',
  'inn',
  'når',
  'kom',
  'noen',
  'noe',
  'ville',
  'dere',
  'som',
  'deres',
  'kun',
  'ja',
  'etter',
  'ned',
  'skulle',
  'denne',
  'for',
  'deg',
  'si',
  'sine',
  'sitt',
  'mot',
  'å',
  'meget',
  'hvorfor',
  'dette',
  'disse',
  'uten',
  'hvordan',
  'ingen',
  'din',
  'ditt',
  'blir',
  'samme',
  'hvilken',
  'hvilke',
  'sånn',
  'inni',
  'mellom',
  'vår',
  'hver',
  'hvem',
  'vors',
  'hvis',
  'både',
  'bare',
  'enn',
  'fordi',
  'før',
  'mange',
  'også',
  'slik',
  'vært',
  'være',
  'begge',
  'siden',
  'henne',
  'hennar',
  'hennes'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_panGu.js
/* The MIT License (MIT)
Copyright (c) 2018-20 Espen Klem

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

/* This list is frequency sorted. That means it can be sliced from the bottom
and be less agressive in excluding stopwords */

const panGu = [
  'ਦੇ',
  'ਵਿੱਚ',
  'ਦਾ',
  'ਅਤੇ',
  'ਦੀ',
  'ਇੱਕ',
  'ਨੂੰ',
  'ਹੈ',
  'ਤੋਂ',
  'ਇਸ',
  'ਇਹ',
  'ਨੇ',
  'ਤੇ',
  'ਨਾਲ',
  'ਲਈ',
  'ਵੀ',
  'ਸੀ',
  'ਵਿਚ',
  'ਕਿ',
  'ਜੋ',
  'ਉਹ',
  'ਉਸ',
  'ਹਨ',
  'ਜਾਂਦਾ',
  'ਕੀਤਾ',
  'ਗਿਆ',
  'ਹੀ',
  'ਕੇ',
  'ਜਾਂ',
  'ਦੀਆਂ',
  'ਜਿਸ',
  'ਕਰਨ',
  'ਹੋ',
  'ਕਰ',
  'ਆਪਣੇ',
  'ਕੀਤੀ',
  'ਤੌਰ',
  'ਬਾਅਦ',
  'ਨਹੀਂ',
  'ਭਾਰਤੀ',
  'ਪਿੰਡ',
  'ਸਿੰਘ',
  'ਉੱਤੇ',
  'ਸਾਲ',
  '।',
  'ਪੰਜਾਬ',
  'ਸਭ',
  'ਭਾਰਤ',
  'ਉਨ੍ਹਾਂ',
  'ਹੁੰਦਾ',
  'ਤੱਕ',
  'ਇਕ',
  'ਹੋਇਆ',
  'ਜਨਮ',
  'ਬਹੁਤ',
  'ਪਰ',
  'ਦੁਆਰਾ',
  'ਰੂਪ',
  'ਹੋਰ',
  'ਕੰਮ',
  'ਆਪਣੀ',
  'ਤਾਂ',
  'ਸਮੇਂ',
  'ਪੰਜਾਬੀ',
  'ਗਈ',
  'ਦਿੱਤਾ',
  'ਦੋ',
  'ਕਿਸੇ',
  'ਕਈ',
  'ਜਾ',
  'ਵਾਲੇ',
  'ਸ਼ੁਰੂ',
  'ਉਸਨੇ',
  'ਕਿਹਾ',
  'ਹੋਣ',
  'ਲੋਕ',
  'ਜਾਂਦੀ',
  'ਵਿੱਚੋਂ',
  'ਨਾਮ',
  'ਜਦੋਂ',
  'ਪਹਿਲਾਂ',
  'ਕਰਦਾ',
  'ਹੁੰਦੀ',
  'ਹੋਏ',
  'ਸਨ',
  'ਵਜੋਂ',
  'ਰਾਜ',
  'ਮੁੱਖ',
  'ਕਰਦੇ',
  'ਕੁਝ',
  'ਸਾਰੇ',
  'ਹੁੰਦੇ',
  'ਸ਼ਹਿਰ',
  'ਭਾਸ਼ਾ',
  'ਹੋਈ',
  'ਅਨੁਸਾਰ',
  'ਸਕਦਾ',
  'ਆਮ',
  'ਵੱਖ',
  'ਕੋਈ',
  'ਵਾਰ',
  'ਗਏ',
  'ਖੇਤਰ',
  'ਜੀ',
  'ਕਾਰਨ',
  'ਕਰਕੇ',
  'ਜਿਵੇਂ',
  'ਜ਼ਿਲ੍ਹੇ',
  'ਲੋਕਾਂ',
  'ਚ',
  'ਸਾਹਿਤ',
  'ਸਦੀ',
  'ਬਾਰੇ',
  'ਜਾਂਦੇ',
  'ਵਾਲਾ',
  'ਜਾਣ',
  'ਪਹਿਲੀ',
  'ਪ੍ਰਾਪਤ',
  'ਰਿਹਾ',
  'ਵਾਲੀ',
  'ਨਾਂ',
  'ਦੌਰਾਨ',
  'ਤਰ੍ਹਾਂ',
  'ਯੂਨੀਵਰਸਿਟੀ',
  'ਨਾ',
  'ਏ',
  'ਤਿੰਨ',
  'ਇਨ੍ਹਾਂ',
  'ਗੁਰੂ',
  'ਇਸਨੂੰ',
  'ਇਹਨਾਂ',
  'ਪਿਤਾ',
  'ਲਿਆ',
  'ਸ਼ਾਮਲ',
  'ਸ਼ਬਦ',
  'ਅੰਗਰੇਜ਼ੀ',
  'ਉਸਨੂੰ',
  'ਉਹਨਾਂ',
  'ਸਥਿਤ',
  'ਫਿਰ',
  'ਜੀਵਨ',
  'ਸਕੂਲ',
  'ਹੁਣ',
  'ਦਿਨ',
  'ਕੀਤੇ',
  'ਆਦਿ',
  'ਵੱਧ',
  'ਲੈ',
  'ਘਰ',
  'ਵੱਲ',
  'ਦੇਸ਼',
  'ਵਲੋਂ',
  'ਬਣ',
  'ਵੀਂ',
  'ਫਿਲਮ',
  'ਉਮਰ',
  'ਬਲਾਕ',
  'ਰਹੇ',
  'ਸਾਹਿਬ',
  'ਕਰਦੀ',
  'ਹਰ',
  'ਪੈਦਾ',
  'ਘੱਟ',
  'ਲੇਖਕ',
  'ਹਿੱਸਾ',
  'ਫ਼ਿਲਮ',
  'ਮੌਤ',
  'ਜਿੱਥੇ',
  'ਵੱਡਾ',
  'ਵਿਖੇ',
  'ਆਪਣਾ',
  'ਪਹਿਲਾ',
  'ਵਰਤੋਂ',
  'ਆਪ',
  'ਕਰਨਾ',
  'ਵਿਆਹ',
  'ਰਹੀ',
  'ਰਾਹੀਂ',
  'ਦਿੱਤੀ',
  'ਉਸਦੇ',
  'ਪਰਿਵਾਰ',
  'ਆ',
  'ਦੂਜੇ',
  'ਅਮਰੀਕਾ',
  'ਮੰਨਿਆ',
  'ਇਸਦੇ',
  'ਈ',
  'ਕਾਲਜ',
  'ਸਰਕਾਰ',
  'ਇੱਥੇ',
  'ਪਾਕਿਸਤਾਨ',
  'ਸ਼ਾਮਿਲ',
  'ਵਿਗਿਆਨ',
  'ਉਸਦੀ',
  'ਪੇਸ਼',
  'ਕਿਉਂਕਿ',
  'ਪਹਿਲੇ',
  'ਧਰਮ',
  'ਮਸ਼ਹੂਰ',
  'ਅੰਦਰ',
  'ਵਿਚੋਂ',
  'ਜਿਨ੍ਹਾਂ',
  'ਜਾਣਿਆ',
  'ਪਾਣੀ',
  'ਇਲਾਵਾ',
  'ਅਰਥ',
  'ਚਾਰ',
  'ਪ੍ਰਸਿੱਧ',
  'ਨਾਵਲ',
  'ਵੱਡੇ',
  'ਵੱਲੋਂ',
  'ਕਹਾਣੀ',
  'ਵਿਸ਼ਵ',
  'ਮੂਲ',
  'ਅਮਰੀਕੀ',
  'ਸਥਾਨ',
  'ਇਤਿਹਾਸ',
  'ਕੁੱਝ',
  'ਵਿਕਾਸ',
  'ਉੱਤਰ',
  'ਸਿੱਖਿਆ',
  'ਹਿੰਦੀ',
  'ਪ੍ਰਮੁੱਖ',
  'ਰਚਨਾ',
  'ਬਣਾਇਆ',
  'ਵਿਸ਼ੇਸ਼',
  'ਡਾ',
  'ਉੱਪਰ',
  'ਪੱਛਮੀ',
  'ਦੇਣ',
  'ਇਸਦਾ',
  'ਸਕਦੇ',
  'ਰੱਖਿਆ',
  'ਕਵੀ',
  'ਦਿੱਲੀ',
  'ਵੱਡੀ',
  'ਭੂਮਿਕਾ',
  'ਸਮਾਜ',
  'ਕਾਵਿ',
  'ਕੀ',
  'ਕੋਲ',
  'ਦ',
  'ਗੱਲ',
  'ਸੰਸਾਰ',
  'ਭਾਗ',
  'ਆਈ',
  'ਦੱਖਣ',
  'ਅੱਜ',
  'ਸਿੱਖ',
  'ਕਹਿੰਦੇ',
  'ਸੰਗੀਤ',
  'ਕਿਲੋਮੀਟਰ',
  'ਜਿਹਨਾਂ',
  'ਸਭਾ',
  'ਜਿਸਦਾ',
  'ਜਨਵਰੀ',
  'ਕਵਿਤਾ',
  'ਮੈਂਬਰ',
  'ਲਿਖਿਆ',
  'ਮਾਂ',
  'ਕਲਾ',
  'ਪੰਜ',
  'ਥਾਂ',
  'ਹੇਠ',
  'ਜਿਆਦਾ',
  'ਵਰਤਿਆ',
  'ਮਾਰਚ',
  'ਡੀ',
  'ਅਕਤੂਬਰ',
  'ਤਕ',
  'ਨਾਟਕ',
  'ਬੀ',
  'ਖਾਸ',
  'ਇਸੇ',
  'ਆਧੁਨਿਕ',
  'ਅਗਸਤ',
  'ਤਿਆਰ',
  'ਮਾਤਾ',
  'ਬਣਾਉਣ',
  'ਨਵੰਬਰ',
  'ਵਿਅਕਤੀ',
  'ਦੱਖਣੀ',
  'ਦਸੰਬਰ',
  'ਆਫ',
  'ਗੀਤ',
  'ਗਿਣਤੀ',
  'ਕਾਲ',
  'ਖੋਜ',
  'ਸਾਲਾਂ',
  'ਪੂਰੀ',
  'ਸਮਾਂ',
  'ਜ਼ਿਆਦਾ',
  'ਇਸਦੀ',
  'ਸਕਦੀ',
  'ਵਿਚਕਾਰ',
  'ਰਾਜਧਾਨੀ',
  'ਉਸਦਾ',
  'ਜੁਲਾਈ',
  'ਜੂਨ',
  'ਅਧੀਨ',
  'ਸਥਾਪਨਾ',
  'ਸੇਵਾ',
  'ਭਾਵ',
  'ਵਰਗ',
  'ਛੋਟੇ',
  'ਦਿੰਦਾ',
  'ਸਮਾਜਿਕ',
  'ਹੁੰਦੀਆਂ',
  'ਟੀਮ',
  'ਔਰਤਾਂ',
  'ਅਕਸਰ',
  'ਪ੍ਰਕਾਸ਼ਿਤ',
  'ਉਰਦੂ',
  'ਰੰਗ',
  'ਪਾਰਟੀ',
  'ਬਣਾ',
  'ਪ੍ਰਭਾਵ',
  'ਸ਼ੁਰੂਆਤ',
  'ਲਗਭਗ',
  'ਮਈ',
  'ਸਿਰਫ',
  'ਨੇੜੇ',
  'ਜਿਸਨੂੰ',
  'ਹਾਲਾਂਕਿ',
  'ਦੂਰ',
  'ਸਤੰਬਰ',
  'ਕਿਤਾਬ',
  'ਕਦੇ',
  'ਉੱਤਰੀ',
  'ਪ੍ਰਕਾਰ',
  'ਇਸਨੇ',
  'ਪ੍ਰਦੇਸ਼',
  'ਅੱਗੇ',
  'ਸੰਯੁਕਤ',
  'ਪੜ੍ਹਾਈ',
  'ਵਧੇਰੇ',
  'ਨਾਲ਼',
  'ਮਨੁੱਖ',
  'ਬਾਕੀ',
  'ਪ੍ਰਧਾਨ',
  'ਦੂਜੀ',
  'ਕੁੱਲ',
  'ਆਫ਼',
  'ਅਧਿਐਨ',
  'ਰਾਸ਼ਟਰੀ',
  'ਪੁੱਤਰ',
  'ਅੰਤਰਰਾਸ਼ਟਰੀ',
  'ਧਰਤੀ',
  'ਕੇਂਦਰ',
  'ਦੇਸ਼ਾਂ',
  'ਮੱਧ',
  'ਜ਼ਿਲ੍ਹਾ',
  'ਸਾਰੀਆਂ',
  'ਪੱਧਰ',
  'ਹੋਵੇ',
  'ਜੇ',
  'ਭਾਈ',
  'ਰਹਿਣ',
  'ਪੁਰਸਕਾਰ',
  'ਸਭਿਆਚਾਰ',
  'ਪਤਾ',
  'ਪਾਸੇ',
  'ਨਵੇਂ',
  'ਕੰਪਨੀ',
  'ਬਾਹਰ',
  'ਵੇਲੇ',
  'ਸੰਨ',
  'ਪੂਰਬੀ',
  'ਵਿਚਾਰ',
  'ਕਾਰਜ',
  'ਪੀ',
  'ਮਹੱਤਵਪੂਰਨ',
  'ਦੁਨੀਆਂ',
  'ਧਾਰਮਿਕ',
  'ਮਨੁੱਖੀ',
  'ਸਮੂਹ',
  'ਅਜਿਹੇ',
  'ਲਾਲ',
  'ਦੂਜਾ',
  'ਭਰਾ',
  'ਸ੍ਰੀ',
  'ਅੰਤ',
  'ਜਾਂਦੀਆਂ',
  'ਸ਼ਾਹ',
  'ਰਹਿੰਦੇ',
  'ਮਹਾਨ',
  'ਚੀਨ',
  'ਮੀਟਰ',
  'ਵਰਗੇ',
  'ਨਾਲੋਂ',
  'ਹਾਸਲ',
  'ਕਿਸਮ',
  'ਅਜਿਹਾ',
  'ਬਣਿਆ',
  'ਭਰ',
  'ਛੱਡ',
  'ਲੈਣ',
  'ਹਿੱਸੇ',
  'ਟੀ',
  'ਲਿਖੇ',
  'ਮਿਲ',
  'ਮੌਜੂਦ',
  'ਦਿੱਤੇ',
  'ਵਾਸਤੇ',
  'ਵਾਲੀਆਂ',
  'ਵਧੀਆ',
  'ਰੂਸੀ',
  'ਜਾਰੀ',
  'ਸਰਕਾਰੀ',
  'ਡਿਗਰੀ',
  'ਪੱਛਮ',
  'ਲੜਾਈ',
  'ਭਾਸ਼ਾਵਾਂ',
  'ਰਾਜਾ',
  'ਜਲੰਧਰ',
  'ਹਿੰਦੂ',
  'ਔਰਤ',
  'ਜੰਗ',
  'ਬਾਬਾ',
  'ਬੱਚਿਆਂ',
  'ਮੰਤਰੀ',
  'ਪਟਿਆਲਾ',
  'ਵਾਂਗ',
  'ਆਉਣ',
  'ਭਾਵੇਂ',
  'ਕੇਵਲ',
  'ਐਸ',
  'ਪ੍ਰਾਚੀਨ',
  'ਰਹਿੰਦਾ',
  'ਬੋਲੀ',
  'ਅਵਾਰਡ',
  'ਨਗਰ',
  'ਖੇਡਾਂ',
  'ਫਿਲਮਾਂ',
  'ਬੱਚੇ',
  'ਕੌਰ',
  'ਤੋ',
  'ਪ੍ਰਤੀ',
  'ਕੁਆਂਟਮ',
  'ਅਬਾਦੀ',
  'ਪੁਸਤਕ',
  'ਐਮ',
  'ਰਾਮ',
  'ਖੇਤਰਾਂ',
  'ਫਰਵਰੀ',
  'ਕ੍ਰਿਕਟ',
  'ਪੈਂਦਾ',
  'ਇਤਿਹਾਸਕ',
  'ਲੱਗ',
  'ਬ੍ਰਿਟਿਸ਼',
  'ਆਇਆ',
  'ਮਿਲਦਾ'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_fas.js
/*
Copyright (c) 2011, Chris Umbel
Farsi Stop Words by Fardin Koochaki <me@fardinak.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the 'Software'), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to fdo so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

const fas = [
  'از',
  'با',
  'به',
  'برای',
  'و',
  'باید',
  'شاید',
  'اکنون',
  'اگر',
  'اگرچه',
  'الا',
  'اما',
  'اندر',
  'اینکه',
  'باری',
  'بالعکس',
  'بدون',
  'بر',
  'بلکه',
  'بنابراین',
  'بی',
  'پس',
  'تا',
  'جز',
  'چنانچه',
  'چه',
  'چون',
  'در',
  'را',
  'روی',
  'زیرا',
  'سپس',
  'غیر',
  'که',
  'لیکن',
  'مانند',
  'مثل',
  'مگر',
  'نه',
  'نیز',
  'هرچند',
  'هم',
  'همان',
  'وانگهی',
  'ولی',
  'ولو',
  'همانند',
  'همچو'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_pol.js
/*
Copyright (c) 2013, Paweł Łaskarzewski

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

// list based on: http://pl.wikipedia.org/wiki/Wikipedia:Stopwords

const pol = [
  'a',
  'aby',
  'ach',
  'acz',
  'aczkolwiek',
  'aj',
  'albo',
  'ale',
  'ależ',
  'ani',
  'aż',
  'bardziej',
  'bardzo',
  'bo',
  'bowiem',
  'by',
  'byli',
  'bynajmniej',
  'być',
  'był',
  'była',
  'było',
  'były',
  'będzie',
  'będą',
  'cali',
  'cała',
  'cały',
  'ci',
  'cię',
  'ciebie',
  'co',
  'cokolwiek',
  'coś',
  'czasami',
  'czasem',
  'czemu',
  'czy',
  'czyli',
  'daleko',
  'dla',
  'dlaczego',
  'dlatego',
  'do',
  'dobrze',
  'dokąd',
  'dość',
  'dużo',
  'dwa',
  'dwaj',
  'dwie',
  'dwoje',
  'dziś',
  'dzisiaj',
  'gdy',
  'gdyby',
  'gdyż',
  'gdzie',
  'gdziekolwiek',
  'gdzieś',
  'i',
  'ich',
  'ile',
  'im',
  'inna',
  'inne',
  'inny',
  'innych',
  'iż',
  'ja',
  'ją',
  'jak',
  'jakaś',
  'jakby',
  'jaki',
  'jakichś',
  'jakie',
  'jakiś',
  'jakiż',
  'jakkolwiek',
  'jako',
  'jakoś',
  'je',
  'jeden',
  'jedna',
  'jedno',
  'jednak',
  'jednakże',
  'jego',
  'jej',
  'jemu',
  'jest',
  'jestem',
  'jeszcze',
  'jeśli',
  'jeżeli',
  'już',
  'ją',
  'każdy',
  'kiedy',
  'kilka',
  'kimś',
  'kto',
  'ktokolwiek',
  'ktoś',
  'która',
  'które',
  'którego',
  'której',
  'który',
  'których',
  'którym',
  'którzy',
  'ku',
  'lat',
  'lecz',
  'lub',
  'ma',
  'mają',
  'mało',
  'mam',
  'mi',
  'mimo',
  'między',
  'mną',
  'mnie',
  'mogą',
  'moi',
  'moim',
  'moja',
  'moje',
  'może',
  'możliwe',
  'można',
  'mój',
  'mu',
  'musi',
  'my',
  'na',
  'nad',
  'nam',
  'nami',
  'nas',
  'nasi',
  'nasz',
  'nasza',
  'nasze',
  'naszego',
  'naszych',
  'natomiast',
  'natychmiast',
  'nawet',
  'nią',
  'nic',
  'nich',
  'nie',
  'niech',
  'niego',
  'niej',
  'niemu',
  'nigdy',
  'nim',
  'nimi',
  'niż',
  'no',
  'o',
  'obok',
  'od',
  'około',
  'on',
  'ona',
  'one',
  'oni',
  'ono',
  'oraz',
  'oto',
  'owszem',
  'pan',
  'pana',
  'pani',
  'po',
  'pod',
  'podczas',
  'pomimo',
  'ponad',
  'ponieważ',
  'powinien',
  'powinna',
  'powinni',
  'powinno',
  'poza',
  'prawie',
  'przecież',
  'przed',
  'przede',
  'przedtem',
  'przez',
  'przy',
  'roku',
  'również',
  'sam',
  'sama',
  'są',
  'się',
  'skąd',
  'sobie',
  'sobą',
  'sposób',
  'swoje',
  'ta',
  'tak',
  'taka',
  'taki',
  'takie',
  'także',
  'tam',
  'te',
  'tego',
  'tej',
  'temu',
  'ten',
  'teraz',
  'też',
  'to',
  'tobą',
  'tobie',
  'toteż',
  'trzeba',
  'tu',
  'tutaj',
  'twoi',
  'twoim',
  'twoja',
  'twoje',
  'twym',
  'twój',
  'ty',
  'tych',
  'tylko',
  'tym',
  'u',
  'w',
  'wam',
  'wami',
  'was',
  'wasz',
  'zaś',
  'wasza',
  'wasze',
  'we',
  'według',
  'wiele',
  'wielu',
  'więc',
  'więcej',
  'tę',
  'wszyscy',
  'wszystkich',
  'wszystkie',
  'wszystkim',
  'wszystko',
  'wtedy',
  'wy',
  'właśnie',
  'z',
  'za',
  'zapewne',
  'zawsze',
  'ze',
  'zł',
  'znowu',
  'znów',
  'został',
  'żaden',
  'żadna',
  'żadne',
  'żadnych',
  'że',
  'żeby'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_por.js
/*
Copyright (c) 2011, Luís Rodrigues

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

const por = [
  'a',
  'à',
  'ao',
  'aos',
  'aquela',
  'aquelas',
  'aquele',
  'aqueles',
  'aquilo',
  'as',
  'às',
  'até',
  'com',
  'como',
  'da',
  'das',
  'de',
  'dela',
  'delas',
  'dele',
  'deles',
  'depois',
  'do',
  'dos',
  'e',
  'ela',
  'elas',
  'ele',
  'eles',
  'em',
  'entre',
  'essa',
  'essas',
  'esse',
  'esses',
  'esta',
  'estas',
  'este',
  'estes',
  'eu',
  'isso',
  'isto',
  'já',
  'lhe',
  'lhes',
  'mais',
  'mas',
  'me',
  'mesmo',
  'meu',
  'meus',
  'minha',
  'minhas',
  'muito',
  'muitos',
  'na',
  'não',
  'nas',
  'nem',
  'no',
  'nos',
  'nós',
  'nossa',
  'nossas',
  'nosso',
  'nossos',
  'num',
  'nuns',
  'numa',
  'numas',
  'o',
  'os',
  'ou',
  'para',
  'pela',
  'pelas',
  'pelo',
  'pelos',
  'por',
  'quais',
  'qual',
  'quando',
  'que',
  'quem',
  'se',
  'sem',
  'seu',
  'seus',
  'só',
  'sua',
  'suas',
  'também',
  'te',
  'teu',
  'teus',
  'tu',
  'tua',
  'tuas',
  'um',
  'uma',
  'umas',
  'você',
  'vocês',
  'vos',
  'vosso',
  'vossos'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_porBr.js
/*
Copyright (c) 2017, Micael Levi and Fabrício Rodrigues

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

const porBr = [
  'a',
  'à',
  'adeus',
  'agora',
  'aí',
  'ainda',
  'além',
  'algo',
  'alguém',
  'algum',
  'alguma',
  'algumas',
  'alguns',
  'ali',
  'ampla',
  'amplas',
  'amplo',
  'amplos',
  'ano',
  'anos',
  'ante',
  'antes',
  'ao',
  'aos',
  'apenas',
  'apoio',
  'após',
  'aquela',
  'aquelas',
  'aquele',
  'aqueles',
  'aqui',
  'aquilo',
  'área',
  'as',
  'às',
  'assim',
  'até',
  'atrás',
  'através',
  'baixo',
  'bastante',
  'bem',
  'boa',
  'boas',
  'bom',
  'bons',
  'breve',
  'cá',
  'cada',
  'catorze',
  'cedo',
  'cento',
  'certamente',
  'certeza',
  'cima',
  'cinco',
  'coisa',
  'coisas',
  'com',
  'como',
  'conselho',
  'contra',
  'contudo',
  'custa',
  'da',
  'dá',
  'dão',
  'daquela',
  'daquelas',
  'daquele',
  'daqueles',
  'dar',
  'das',
  'de',
  'debaixo',
  'dela',
  'delas',
  'dele',
  'deles',
  'demais',
  'dentro',
  'depois',
  'desde',
  'dessa',
  'dessas',
  'desse',
  'desses',
  'desta',
  'destas',
  'deste',
  'destes',
  'deve',
  'devem',
  'devendo',
  'dever',
  'deverá',
  'deverão',
  'deveria',
  'deveriam',
  'devia',
  'deviam',
  'dez',
  'dezenove',
  'dezesseis',
  'dezessete',
  'dezoito',
  'dia',
  'diante',
  'disse',
  'disso',
  'disto',
  'dito',
  'diz',
  'dizem',
  'dizer',
  'do',
  'dois',
  'dos',
  'doze',
  'duas',
  'dúvida',
  'e',
  'é',
  'ela',
  'elas',
  'ele',
  'eles',
  'em',
  'embora',
  'enquanto',
  'entre',
  'era',
  'eram',
  'éramos',
  'és',
  'essa',
  'essas',
  'esse',
  'esses',
  'esta',
  'está',
  'estamos',
  'estão',
  'estar',
  'estas',
  'estás',
  'estava',
  'estavam',
  'estávamos',
  'este',
  'esteja',
  'estejam',
  'estejamos',
  'estes',
  'esteve',
  'estive',
  'estivemos',
  'estiver',
  'estivera',
  'estiveram',
  'estivéramos',
  'estiverem',
  'estivermos',
  'estivesse',
  'estivessem',
  'estivéssemos',
  'estiveste',
  'estivestes',
  'estou',
  'etc',
  'eu',
  'exemplo',
  'faço',
  'falta',
  'favor',
  'faz',
  'fazeis',
  'fazem',
  'fazemos',
  'fazendo',
  'fazer',
  'fazes',
  'feita',
  'feitas',
  'feito',
  'feitos',
  'fez',
  'fim',
  'final',
  'foi',
  'fomos',
  'for',
  'fora',
  'foram',
  'fôramos',
  'forem',
  'forma',
  'formos',
  'fosse',
  'fossem',
  'fôssemos',
  'foste',
  'fostes',
  'fui',
  'geral',
  'grande',
  'grandes',
  'grupo',
  'há',
  'haja',
  'hajam',
  'hajamos',
  'hão',
  'havemos',
  'havia',
  'hei',
  'hoje',
  'hora',
  'horas',
  'houve',
  'houvemos',
  'houver',
  'houvera',
  'houverá',
  'houveram',
  'houvéramos',
  'houverão',
  'houverei',
  'houverem',
  'houveremos',
  'houveria',
  'houveriam',
  'houveríamos',
  'houvermos',
  'houvesse',
  'houvessem',
  'houvéssemos',
  'isso',
  'isto',
  'já',
  'la',
  'lá',
  'lado',
  'lhe',
  'lhes',
  'lo',
  'local',
  'logo',
  'longe',
  'lugar',
  'maior',
  'maioria',
  'mais',
  'mal',
  'mas',
  'máximo',
  'me',
  'meio',
  'menor',
  'menos',
  'mês',
  'meses',
  'mesma',
  'mesmas',
  'mesmo',
  'mesmos',
  'meu',
  'meus',
  'mil',
  'minha',
  'minhas',
  'momento',
  'muita',
  'muitas',
  'muito',
  'muitos',
  'na',
  'nada',
  'não',
  'naquela',
  'naquelas',
  'naquele',
  'naqueles',
  'nas',
  'nem',
  'nenhum',
  'nenhuma',
  'nessa',
  'nessas',
  'nesse',
  'nesses',
  'nesta',
  'nestas',
  'neste',
  'nestes',
  'ninguém',
  'nível',
  'no',
  'noite',
  'nome',
  'nos',
  'nós',
  'nossa',
  'nossas',
  'nosso',
  'nossos',
  'nova',
  'novas',
  'nove',
  'novo',
  'novos',
  'num',
  'numa',
  'número',
  'nunca',
  'o',
  'obra',
  'obrigada',
  'obrigado',
  'oitava',
  'oitavo',
  'oito',
  'onde',
  'ontem',
  'onze',
  'os',
  'ou',
  'outra',
  'outras',
  'outro',
  'outros',
  'para',
  'parece',
  'parte',
  'partir',
  'paucas',
  'pela',
  'pelas',
  'pelo',
  'pelos',
  'pequena',
  'pequenas',
  'pequeno',
  'pequenos',
  'per',
  'perante',
  'perto',
  'pode',
  'pude',
  'pôde',
  'podem',
  'podendo',
  'poder',
  'poderia',
  'poderiam',
  'podia',
  'podiam',
  'põe',
  'põem',
  'pois',
  'ponto',
  'pontos',
  'por',
  'porém',
  'porque',
  'porquê',
  'posição',
  'possível',
  'possivelmente',
  'posso',
  'pouca',
  'poucas',
  'pouco',
  'poucos',
  'primeira',
  'primeiras',
  'primeiro',
  'primeiros',
  'própria',
  'próprias',
  'próprio',
  'próprios',
  'próxima',
  'próximas',
  'próximo',
  'próximos',
  'pude',
  'puderam',
  'quais',
  'quáis',
  'qual',
  'quando',
  'quanto',
  'quantos',
  'quarta',
  'quarto',
  'quatro',
  'que',
  'quê',
  'quem',
  'quer',
  'quereis',
  'querem',
  'queremas',
  'queres',
  'quero',
  'questão',
  'quinta',
  'quinto',
  'quinze',
  'relação',
  'sabe',
  'sabem',
  'são',
  'se',
  'segunda',
  'segundo',
  'sei',
  'seis',
  'seja',
  'sejam',
  'sejamos',
  'sem',
  'sempre',
  'sendo',
  'ser',
  'será',
  'serão',
  'serei',
  'seremos',
  'seria',
  'seriam',
  'seríamos',
  'sete',
  'sétima',
  'sétimo',
  'seu',
  'seus',
  'sexta',
  'sexto',
  'si',
  'sido',
  'sim',
  'sistema',
  'só',
  'sob',
  'sobre',
  'sois',
  'somos',
  'sou',
  'sua',
  'suas',
  'tal',
  'talvez',
  'também',
  'tampouco',
  'tanta',
  'tantas',
  'tanto',
  'tão',
  'tarde',
  'te',
  'tem',
  'tém',
  'têm',
  'temos',
  'tendes',
  'tendo',
  'tenha',
  'tenham',
  'tenhamos',
  'tenho',
  'tens',
  'ter',
  'terá',
  'terão',
  'terceira',
  'terceiro',
  'terei',
  'teremos',
  'teria',
  'teriam',
  'teríamos',
  'teu',
  'teus',
  'teve',
  'ti',
  'tido',
  'tinha',
  'tinham',
  'tínhamos',
  'tive',
  'tivemos',
  'tiver',
  'tivera',
  'tiveram',
  'tivéramos',
  'tiverem',
  'tivermos',
  'tivesse',
  'tivessem',
  'tivéssemos',
  'tiveste',
  'tivestes',
  'toda',
  'todas',
  'todavia',
  'todo',
  'todos',
  'trabalho',
  'três',
  'treze',
  'tu',
  'tua',
  'tuas',
  'tudo',
  'última',
  'últimas',
  'último',
  'últimos',
  'um',
  'uma',
  'umas',
  'uns',
  'vai',
  'vais',
  'vão',
  'vários',
  'vem',
  'vêm',
  'vendo',
  'vens',
  'ver',
  'vez',
  'vezes',
  'viagem',
  'vindo',
  'vinte',
  'vir',
  'você',
  'vocês',
  'vos',
  'vós',
  'vossa',
  'vossas',
  'vosso',
  'vossos',
  'zero'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_ron.js
// Copyright (c) 2017 Peter Graham, contributors. Released under the Apache-2.0 license.

const ron = [
  'acea',
  'aceasta',
  'această',
  'aceea',
  'acei',
  'aceia',
  'acel',
  'acela',
  'acele',
  'acelea',
  'acest',
  'acesta',
  'aceste',
  'acestea',
  'aceşti',
  'aceştia',
  'acolo',
  'acord',
  'acum',
  'ai',
  'aia',
  'aibă',
  'aici',
  'al',
  'ale',
  'alea',
  'altceva',
  'altcineva',
  'am',
  'ar',
  'are',
  'asemenea',
  'asta',
  'astea',
  'astăzi',
  'asupra',
  'au',
  'avea',
  'avem',
  'aveţi',
  'azi',
  'aş',
  'aşadar',
  'aţi',
  'bine',
  'bucur',
  'bună',
  'ca',
  'care',
  'caut',
  'ce',
  'cel',
  'ceva',
  'chiar',
  'cinci',
  'cine',
  'cineva',
  'contra',
  'cu',
  'cum',
  'cumva',
  'curând',
  'curînd',
  'când',
  'cât',
  'câte',
  'câtva',
  'câţi',
  'cînd',
  'cît',
  'cîte',
  'cîtva',
  'cîţi',
  'că',
  'căci',
  'cărei',
  'căror',
  'cărui',
  'către',
  'da',
  'dacă',
  'dar',
  'datorită',
  'dată',
  'dau',
  'de',
  'deci',
  'deja',
  'deoarece',
  'departe',
  'deşi',
  'din',
  'dinaintea',
  'dintr-',
  'dintre',
  'doi',
  'doilea',
  'două',
  'drept',
  'după',
  'dă',
  'ea',
  'ei',
  'el',
  'ele',
  'eram',
  'este',
  'eu',
  'eşti',
  'face',
  'fata',
  'fi',
  'fie',
  'fiecare',
  'fii',
  'fim',
  'fiu',
  'fiţi',
  'frumos',
  'fără',
  'graţie',
  'halbă',
  'iar',
  'ieri',
  'la',
  'le',
  'li',
  'lor',
  'lui',
  'lângă',
  'lîngă',
  'mai',
  'mea',
  'mei',
  'mele',
  'mereu',
  'meu',
  'mi',
  'mie',
  'mine',
  'mult',
  'multă',
  'mulţi',
  'mulţumesc',
  'mâine',
  'mîine',
  'mă',
  'ne',
  'nevoie',
  'nici',
  'nicăieri',
  'nimeni',
  'nimeri',
  'nimic',
  'nişte',
  'noastre',
  'noastră',
  'noi',
  'noroc',
  'nostru',
  'nouă',
  'noştri',
  'nu',
  'opt',
  'ori',
  'oricare',
  'orice',
  'oricine',
  'oricum',
  'oricând',
  'oricât',
  'oricînd',
  'oricît',
  'oriunde',
  'patra',
  'patru',
  'patrulea',
  'pe',
  'pentru',
  'peste',
  'pic',
  'poate',
  'pot',
  'prea',
  'prima',
  'primul',
  'prin',
  'printr-',
  'puţin',
  'puţina',
  'puţină',
  'până',
  'pînă',
  'rog',
  'sa',
  'sale',
  'sau',
  'se',
  'spate',
  'spre',
  'sub',
  'sunt',
  'suntem',
  'sunteţi',
  'sută',
  'sînt',
  'sîntem',
  'sînteţi',
  'să',
  'săi',
  'său',
  'ta',
  'tale',
  'te',
  'timp',
  'tine',
  'toate',
  'toată',
  'tot',
  'totuşi',
  'toţi',
  'trei',
  'treia',
  'treilea',
  'tu',
  'tăi',
  'tău',
  'un',
  'una',
  'unde',
  'undeva',
  'unei',
  'uneia',
  'unele',
  'uneori',
  'unii',
  'unor',
  'unora',
  'unu',
  'unui',
  'unuia',
  'unul',
  'vi',
  'voastre',
  'voastră',
  'voi',
  'vostru',
  'vouă',
  'voştri',
  'vreme',
  'vreo',
  'vreun',
  'vă',
  'zece',
  'zero',
  'zi',
  'zice',
  'îi',
  'îl',
  'îmi',
  'împotriva',
  'în',
  'înainte',
  'înaintea',
  'încotro',
  'încât',
  'încît',
  'între',
  'întrucât',
  'întrucît',
  'îţi',
  'ăla',
  'ălea',
  'ăsta',
  'ăstea',
  'ăştia',
  'şapte',
  'şase',
  'şi',
  'ştiu',
  'ţi',
  'ţie'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_rus.js
/*
Copyright (c) 2011, Polyakov Vladimir, Chris Umbel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

const rus = [
  'и',
  'в',
  'во',
  'не',
  'что',
  'он',
  'на',
  'я',
  'с',
  'со',
  'как',
  'а',
  'то',
  'все',
  'она',
  'так',
  'его',
  'но',
  'да',
  'ты',
  'к',
  'у',
  'же',
  'вы',
  'за',
  'бы',
  'по',
  'только',
  'ее',
  'мне',
  'было',
  'вот',
  'от',
  'меня',
  'еще',
  'нет',
  'о',
  'из',
  'ему',
  'теперь',
  'когда',
  'даже',
  'ну',
  'ли',
  'если',
  'уже',
  'или',
  'ни',
  'быть',
  'был',
  'него',
  'до',
  'вас',
  'нибудь',
  'уж',
  'вам',
  'сказал',
  'ведь',
  'там',
  'потом',
  'себя',
  'ничего',
  'ей',
  'может',
  'они',
  'тут',
  'где',
  'есть',
  'надо',
  'ней',
  'для',
  'мы',
  'тебя',
  'их',
  'чем',
  'была',
  'сам',
  'чтоб',
  'без',
  'будто',
  'чего',
  'раз',
  'тоже',
  'себе',
  'под',
  'будет',
  'ж',
  'тогда',
  'кто',
  'этот',
  'того',
  'потому',
  'этого',
  'какой',
  'совсем',
  'ним',
  'этом',
  'почти',
  'мой',
  'тем',
  'чтобы',
  'нее',
  'были',
  'куда',
  'всех',
  'никогда',
  'сегодня',
  'можно',
  'при',
  'об',
  'другой',
  'хоть',
  'после',
  'над',
  'больше',
  'тот',
  'через',
  'эти',
  'нас',
  'про',
  'всего',
  'них',
  'какая',
  'много',
  'разве',
  'эту',
  'моя',
  'свою',
  'этой',
  'перед',
  'иногда',
  'лучше',
  'чуть',
  'том',
  'нельзя',
  'такой',
  'им',
  'более',
  'всегда',
  'конечно',
  'всю',
  'между',
  'это',
  'лишь'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_slk.js
// Copyright (c) 2017 Peter Graham, contributors. Released under the Apache-2.0 license.

const slk = [
  'a',
  'aby',
  'aj',
  'ako',
  'aký',
  'ale',
  'alebo',
  'ani',
  'avšak',
  'ba',
  'bez',
  'buï',
  'cez',
  'do',
  'ho',
  'hoci',
  'i',
  'ich',
  'im',
  'ja',
  'jeho',
  'jej',
  'jemu',
  'ju',
  'k',
  'kam',
  'kde',
  'kedže',
  'keï',
  'kto',
  'ktorý',
  'ku',
  'lebo',
  'ma',
  'mi',
  'mne',
  'mnou',
  'mu',
  'my',
  'mòa',
  'môj',
  'na',
  'nad',
  'nami',
  'neho',
  'nej',
  'nemu',
  'nich',
  'nielen',
  'nim',
  'no',
  'nám',
  'nás',
  'náš',
  'ním',
  'o',
  'od',
  'on',
  'ona',
  'oni',
  'ono',
  'ony',
  'po',
  'pod',
  'pre',
  'pred',
  'pri',
  's',
  'sa',
  'seba',
  'sem',
  'so',
  'svoj',
  'taký',
  'tam',
  'teba',
  'tebe',
  'tebou',
  'tej',
  'ten',
  'ti',
  'tie',
  'to',
  'toho',
  'tomu',
  'tou',
  'tvoj',
  'ty',
  'tá',
  'tým',
  'v',
  'vami',
  'veï',
  'vo',
  'vy',
  'vám',
  'vás',
  'váš',
  'však',
  'z',
  'za',
  'zo',
  'a',
  'èi',
  'èo',
  'èí',
  'òom',
  'òou',
  'òu',
  'že'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_slv.js
// Copyright (c) 2017 Peter Graham, contributors. Released under the Apache-2.0 license.

const slv = [
  'a',
  'ali',
  'april',
  'avgust',
  'b',
  'bi',
  'bil',
  'bila',
  'bile',
  'bili',
  'bilo',
  'biti',
  'blizu',
  'bo',
  'bodo',
  'bojo',
  'bolj',
  'bom',
  'bomo',
  'boste',
  'bova',
  'boš',
  'brez',
  'c',
  'cel',
  'cela',
  'celi',
  'celo',
  'd',
  'da',
  'daleč',
  'dan',
  'danes',
  'datum',
  'december',
  'deset',
  'deseta',
  'deseti',
  'deseto',
  'devet',
  'deveta',
  'deveti',
  'deveto',
  'do',
  'dober',
  'dobra',
  'dobri',
  'dobro',
  'dokler',
  'dol',
  'dolg',
  'dolga',
  'dolgi',
  'dovolj',
  'drug',
  'druga',
  'drugi',
  'drugo',
  'dva',
  'dve',
  'e',
  'eden',
  'en',
  'ena',
  'ene',
  'eni',
  'enkrat',
  'eno',
  'etc.',
  'f',
  'februar',
  'g',
  'g.',
  'ga',
  'ga.',
  'gor',
  'gospa',
  'gospod',
  'h',
  'halo',
  'i',
  'idr.',
  'ii',
  'iii',
  'in',
  'iv',
  'ix',
  'iz',
  'j',
  'januar',
  'jaz',
  'je',
  'ji',
  'jih',
  'jim',
  'jo',
  'julij',
  'junij',
  'jutri',
  'k',
  'kadarkoli',
  'kaj',
  'kajti',
  'kako',
  'kakor',
  'kamor',
  'kamorkoli',
  'kar',
  'karkoli',
  'katerikoli',
  'kdaj',
  'kdo',
  'kdorkoli',
  'ker',
  'ki',
  'kje',
  'kjer',
  'kjerkoli',
  'ko',
  'koder',
  'koderkoli',
  'koga',
  'komu',
  'kot',
  'kratek',
  'kratka',
  'kratke',
  'kratki',
  'l',
  'lahka',
  'lahke',
  'lahki',
  'lahko',
  'le',
  'lep',
  'lepa',
  'lepe',
  'lepi',
  'lepo',
  'leto',
  'm',
  'maj',
  'majhen',
  'majhna',
  'majhni',
  'malce',
  'malo',
  'manj',
  'marec',
  'me',
  'med',
  'medtem',
  'mene',
  'mesec',
  'mi',
  'midva',
  'midve',
  'mnogo',
  'moj',
  'moja',
  'moje',
  'mora',
  'morajo',
  'moram',
  'moramo',
  'morate',
  'moraš',
  'morem',
  'mu',
  'n',
  'na',
  'nad',
  'naj',
  'najina',
  'najino',
  'najmanj',
  'naju',
  'največ',
  'nam',
  'narobe',
  'nas',
  'nato',
  'nazaj',
  'naš',
  'naša',
  'naše',
  'ne',
  'nedavno',
  'nedelja',
  'nek',
  'neka',
  'nekaj',
  'nekatere',
  'nekateri',
  'nekatero',
  'nekdo',
  'neke',
  'nekega',
  'neki',
  'nekje',
  'neko',
  'nekoga',
  'nekoč',
  'ni',
  'nikamor',
  'nikdar',
  'nikjer',
  'nikoli',
  'nič',
  'nje',
  'njega',
  'njegov',
  'njegova',
  'njegovo',
  'njej',
  'njemu',
  'njen',
  'njena',
  'njeno',
  'nji',
  'njih',
  'njihov',
  'njihova',
  'njihovo',
  'njiju',
  'njim',
  'njo',
  'njun',
  'njuna',
  'njuno',
  'no',
  'nocoj',
  'november',
  'npr.',
  'o',
  'ob',
  'oba',
  'obe',
  'oboje',
  'od',
  'odprt',
  'odprta',
  'odprti',
  'okoli',
  'oktober',
  'on',
  'onadva',
  'one',
  'oni',
  'onidve',
  'osem',
  'osma',
  'osmi',
  'osmo',
  'oz.',
  'p',
  'pa',
  'pet',
  'peta',
  'petek',
  'peti',
  'peto',
  'po',
  'pod',
  'pogosto',
  'poleg',
  'poln',
  'polna',
  'polni',
  'polno',
  'ponavadi',
  'ponedeljek',
  'ponovno',
  'potem',
  'povsod',
  'pozdravljen',
  'pozdravljeni',
  'prav',
  'prava',
  'prave',
  'pravi',
  'pravo',
  'prazen',
  'prazna',
  'prazno',
  'prbl.',
  'precej',
  'pred',
  'prej',
  'preko',
  'pri',
  'pribl.',
  'približno',
  'primer',
  'pripravljen',
  'pripravljena',
  'pripravljeni',
  'proti',
  'prva',
  'prvi',
  'prvo',
  'r',
  'ravno',
  'redko',
  'res',
  'reč',
  's',
  'saj',
  'sam',
  'sama',
  'same',
  'sami',
  'samo',
  'se',
  'sebe',
  'sebi',
  'sedaj',
  'sedem',
  'sedma',
  'sedmi',
  'sedmo',
  'sem',
  'september',
  'seveda',
  'si',
  'sicer',
  'skoraj',
  'skozi',
  'slab',
  'smo',
  'so',
  'sobota',
  'spet',
  'sreda',
  'srednja',
  'srednji',
  'sta',
  'ste',
  'stran',
  'stvar',
  'sva',
  't',
  'ta',
  'tak',
  'taka',
  'take',
  'taki',
  'tako',
  'takoj',
  'tam',
  'te',
  'tebe',
  'tebi',
  'tega',
  'težak',
  'težka',
  'težki',
  'težko',
  'ti',
  'tista',
  'tiste',
  'tisti',
  'tisto',
  'tj.',
  'tja',
  'to',
  'toda',
  'torek',
  'tretja',
  'tretje',
  'tretji',
  'tri',
  'tu',
  'tudi',
  'tukaj',
  'tvoj',
  'tvoja',
  'tvoje',
  'u',
  'v',
  'vaju',
  'vam',
  'vas',
  'vaš',
  'vaša',
  'vaše',
  've',
  'vedno',
  'velik',
  'velika',
  'veliki',
  'veliko',
  'vendar',
  'ves',
  'več',
  'vi',
  'vidva',
  'vii',
  'viii',
  'visok',
  'visoka',
  'visoke',
  'visoki',
  'vsa',
  'vsaj',
  'vsak',
  'vsaka',
  'vsakdo',
  'vsake',
  'vsaki',
  'vsakomur',
  'vse',
  'vsega',
  'vsi',
  'vso',
  'včasih',
  'včeraj',
  'x',
  'z',
  'za',
  'zadaj',
  'zadnji',
  'zakaj',
  'zaprta',
  'zaprti',
  'zaprto',
  'zdaj',
  'zelo',
  'zunaj',
  'č',
  'če',
  'često',
  'četrta',
  'četrtek',
  'četrti',
  'četrto',
  'čez',
  'čigav',
  'š',
  'šest',
  'šesta',
  'šesti',
  'šesto',
  'štiri',
  'ž',
  'že'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_som.js
/* Copyright 2016 Liam Doherty

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* This list is frequency sorted. That means it can be sliced from the bottom
and be less agressive in excluding stopwords */

const som = [
  'oo',
  'atabo',
  'ay',
  'ku',
  'waxeey',
  'uu',
  'lakin',
  'si',
  'ayuu',
  'soo',
  'waa',
  'ka',
  'kasoo',
  'kale',
  'waxuu',
  'ayee',
  'ayaa',
  'kuu',
  'isku',
  'ugu',
  'jiray',
  'dhan',
  'dambeestii',
  'inuu',
  'in',
  'jirtay',
  'uheestay',
  'aad',
  'uga',
  'hadana',
  'timaado',
  'timaaday'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_sot.js
/* Copyright 2016 Liam Doherty

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* This list is frequency sorted. That means it can be sliced from the bottom
and be less agressive in excluding stopwords */

const sot = [
  'a',
  'le',
  'o',
  'ba',
  'ho',
  'oa',
  'ea',
  'ka',
  'hae',
  'tselane',
  'eaba',
  'ke',
  'hore',
  'ha',
  'e',
  'ne',
  're',
  'bona',
  'me',
  'limo',
  'tsa',
  'haholo',
  'la',
  'empa',
  'ngoanake',
  'se',
  'moo',
  'm\'e',
  'bane',
  'mo',
  'tse',
  'sa',
  'li',
  'ena',
  'bina',
  'pina',
  'hape'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_spa.js
/*
Copyright (c) 2011, David Przybilla, Chris Umbel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

const spa = [
  'a',
  'un',
  'el',
  'ella',
  'y',
  'sobre',
  'de',
  'la',
  'que',
  'en',
  'los',
  'del',
  'se',
  'las',
  'por',
  'un',
  'para',
  'con',
  'no',
  'una',
  'su',
  'al',
  'lo',
  'como',
  'más',
  'pero',
  'sus',
  'le',
  'ya',
  'o',
  'porque',
  'cuando',
  'muy',
  'sin',
  'sobre',
  'también',
  'me',
  'hasta',
  'donde',
  'quien',
  'desde',
  'nos',
  'durante',
  'uno',
  'ni',
  'contra',
  'ese',
  'eso',
  'mí',
  'qué',
  'otro',
  'él',
  'cual',
  'poco',
  'mi',
  'tú',
  'te',
  'ti',
  'sí'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_swa.js
/*
Copyright (c) 2016 Liam Doherty

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// This list is frequency sorted. That means it can be sliced from the bottom
// and be less agressive in excluding stopwords */

const swa = [
  'na',
  'ya',
  'wa',
  'kwa',
  'ni',
  'za',
  'katika',
  'la',
  'kuwa',
  'kama',
  'kwamba',
  'cha',
  'hiyo',
  'lakini',
  'yake',
  'hata',
  'wakati',
  'hivyo',
  'sasa',
  'wake',
  'au',
  'watu',
  'hii',
  'zaidi',
  'vya',
  'huo',
  'tu',
  'kwenye',
  'si',
  'pia',
  'ili',
  'moja',
  'kila',
  'baada',
  'ambao',
  'ambayo',
  'yao',
  'wao',
  'kuna',
  'hilo',
  'kutoka',
  'kubwa',
  'pamoja',
  'bila',
  'huu',
  'hayo',
  'sana',
  'ndani',
  'mkuu',
  'hizo',
  'kufanya',
  'wengi',
  'hadi',
  'mmoja',
  'hili',
  'juu',
  'kwanza',
  'wetu',
  'kuhusu',
  'baadhi',
  'wote',
  'yetu',
  'hivi',
  'kweli',
  'mara',
  'wengine',
  'nini',
  'ndiyo',
  'zao',
  'kati',
  'hao',
  'hapa',
  'kutokana',
  'muda',
  'habari',
  'ambaye',
  'wenye',
  'nyingine',
  'hakuna',
  'tena',
  'hatua',
  'bado',
  'nafasi',
  'basi',
  'kabisa',
  'hicho',
  'nje',
  'huyo',
  'vile',
  'yote',
  'mkubwa',
  'alikuwa',
  'zote',
  'leo',
  'haya',
  'huko',
  'kutoa',
  'mwa',
  'kiasi',
  'hasa',
  'nyingi',
  'kabla',
  'wale',
  'chini',
  'gani',
  'hapo',
  'lazima',
  'mwingine',
  'bali',
  'huku',
  'zake',
  'ilikuwa',
  'tofauti',
  'kupata',
  'mbalimbali',
  'pale',
  'kusema',
  'badala',
  'wazi',
  'yeye',
  'alisema',
  'hawa',
  'ndio',
  'hizi',
  'tayari',
  'wala',
  'muhimu',
  'ile',
  'mpya',
  'ambazo',
  'dhidi',
  'kwenda',
  'sisi',
  'kwani',
  'jinsi',
  'binafsi',
  'kutumia',
  'mbili',
  'mbali',
  'kuu',
  'mengine',
  'mbele',
  'namna',
  'mengi',
  'upande'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_swe.js
/*
Creative Commons – Attribution / ShareAlike 3.0 license
http://creativecommons.org/licenses/by-sa/3.0/

List based on frequently used words in subtitles in 2012.

Thanks to
opensubtitles.org
https://invokeit.wordpress.com/frequency-word-lists/#comment-9707
*/

const swe = [
  'jag',
  'det',
  'är',
  'du',
  'inte',
  'att',
  'en',
  'och',
  'har',
  'vi',
  'på',
  'i',
  'för',
  'han',
  'vad',
  'med',
  'mig',
  'som',
  'här',
  'om',
  'dig',
  'var',
  'den',
  'så',
  'till',
  'kan',
  'de',
  'ni',
  'ska',
  'ett',
  'men',
  'av',
  'vill',
  'nu',
  'ja',
  'nej',
  'bara',
  'hon',
  'hur',
  'min',
  'där',
  'honom',
  'kom',
  'din',
  'då',
  'när',
  'ha',
  'er',
  'ta',
  'ut',
  'får',
  'man',
  'vara',
  'oss',
  'dem',
  'eller',
  'varför',
  'alla',
  'från',
  'upp',
  'igen',
  'sa',
  'hade',
  'allt',
  'in',
  'sig',
  'ingen',
  'henne',
  'vem',
  'mitt',
  'nåt',
  'blir',
  'än',
  'bli',
  'ju',
  'två',
  'tar',
  'hans',
  'ditt',
  'mina',
  'åt',
  'väl',
  'också',
  'nån',
  'låt',
  'detta',
  'va',
  'dina',
  'dom',
  'blev',
  'inga',
  'sin',
  'just',
  'många',
  'vart',
  'vilken',
  'ur',
  'ens',
  'sitt',
  'e',
  'jo',
  'era',
  'deras',
  'fem',
  'sex',
  'denna',
  'vilket',
  'fyra',
  'vårt',
  'emot',
  'tio',
  'ert',
  'sju',
  'åtta',
  'nånting',
  'ned',
  'ers',
  'nio',
  'mej'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_tha.js
// Copyright (c) 2017 Peter Graham, contributors. Released under the Apache-2.0 license.

const tha = [
  'กล่าว',
  'กว่า',
  'กัน',
  'กับ',
  'การ',
  'ก็',
  'ก่อน',
  'ขณะ',
  'ขอ',
  'ของ',
  'ขึ้น',
  'คง',
  'ครั้ง',
  'ความ',
  'คือ',
  'จะ',
  'จัด',
  'จาก',
  'จึง',
  'ช่วง',
  'ซึ่ง',
  'ดัง',
  'ด้วย',
  'ด้าน',
  'ตั้ง',
  'ตั้งแต่',
  'ตาม',
  'ต่อ',
  'ต่าง',
  'ต่างๆ',
  'ต้อง',
  'ถึง',
  'ถูก',
  'ถ้า',
  'ทั้ง',
  'ทั้งนี้',
  'ทาง',
  'ที่',
  'ที่สุด',
  'ทุก',
  'ทํา',
  'ทําให้',
  'นอกจาก',
  'นัก',
  'นั้น',
  'นี้',
  'น่า',
  'นํา',
  'บาง',
  'ผล',
  'ผ่าน',
  'พบ',
  'พร้อม',
  'มา',
  'มาก',
  'มี',
  'ยัง',
  'รวม',
  'ระหว่าง',
  'รับ',
  'ราย',
  'ร่วม',
  'ลง',
  'วัน',
  'ว่า',
  'สุด',
  'ส่ง',
  'ส่วน',
  'สําหรับ',
  'หนึ่ง',
  'หรือ',
  'หลัง',
  'หลังจาก',
  'หลาย',
  'หาก',
  'อยาก',
  'อยู่',
  'อย่าง',
  'ออก',
  'อะไร',
  'อาจ',
  'อีก',
  'เขา',
  'เข้า',
  'เคย',
  'เฉพาะ',
  'เช่น',
  'เดียว',
  'เดียวกัน',
  'เนื่องจาก',
  'เปิด',
  'เปิดเผย',
  'เป็น',
  'เป็นการ',
  'เพราะ',
  'เพื่อ',
  'เมื่อ',
  'เรา',
  'เริ่ม',
  'เลย',
  'เห็น',
  'เอง',
  'แต่',
  'แบบ',
  'แรก',
  'และ',
  'แล้ว',
  'แห่ง',
  'โดย',
  'ใน',
  'ให้',
  'ได้',
  'ไป',
  'ไม่',
  'ไว้'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_tgl.js
/* The MIT License (MIT)

Copyright (c) 2016 Gene Diaz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */

const tgl = [
  'akin',
  'aking',
  'ako',
  'alin',
  'am',
  'amin',
  'aming',
  'ang',
  'ano',
  'anumang',
  'apat',
  'at',
  'atin',
  'ating',
  'ay',
  'bababa',
  'bago',
  'bakit',
  'bawat',
  'bilang',
  'dahil',
  'dalawa',
  'dapat',
  'din',
  'dito',
  'doon',
  'gagawin',
  'gayunman',
  'ginagawa',
  'ginawa',
  'ginawang',
  'gumawa',
  'gusto',
  'habang',
  'hanggang',
  'hindi',
  'huwag',
  'iba',
  'ibaba',
  'ibabaw',
  'ibig',
  'ikaw',
  'ilagay',
  'ilalim',
  'ilan',
  'inyong',
  'isa',
  'isang',
  'itaas',
  'ito',
  'iyo',
  'iyon',
  'iyong',
  'ka',
  'kahit',
  'kailangan',
  'kailanman',
  'kami',
  'kanila',
  'kanilang',
  'kanino',
  'kanya',
  'kanyang',
  'kapag',
  'kapwa',
  'karamihan',
  'katiyakan',
  'katulad',
  'kaya',
  'kaysa',
  'ko',
  'kong',
  'kulang',
  'kumuha',
  'kung',
  'laban',
  'lahat',
  'lamang',
  'likod',
  'lima',
  'maaari',
  'maaaring',
  'maging',
  'mahusay',
  'makita',
  'marami',
  'marapat',
  'masyado',
  'may',
  'mayroon',
  'mga',
  'minsan',
  'mismo',
  'mula',
  'muli',
  'na',
  'nabanggit',
  'naging',
  'nagkaroon',
  'nais',
  'nakita',
  'namin',
  'napaka',
  'narito',
  'nasaan',
  'ng',
  'ngayon',
  'ni',
  'nila',
  'nilang',
  'nito',
  'niya',
  'niyang',
  'noon',
  'o',
  'pa',
  'paano',
  'pababa',
  'paggawa',
  'pagitan',
  'pagkakaroon',
  'pagkatapos',
  'palabas',
  'pamamagitan',
  'panahon',
  'pangalawa',
  'para',
  'paraan',
  'pareho',
  'pataas',
  'pero',
  'pumunta',
  'pumupunta',
  'sa',
  'saan',
  'sabi',
  'sabihin',
  'sarili',
  'sila',
  'sino',
  'siya',
  'tatlo',
  'tayo',
  'tulad',
  'tungkol',
  'una',
  'walang'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_tur.js
// Copyright (c) 2017 Peter Graham, contributors. Released under the Apache-2.0 license.

const tur = [
  'acaba',
  'acep',
  'adeta',
  'altmış',
  'altmış',
  'altı',
  'altı',
  'ama',
  'ancak',
  'arada',
  'artık',
  'aslında',
  'aynen',
  'ayrıca',
  'az',
  'bana',
  'bari',
  'bazen',
  'bazı',
  'bazı',
  'başka',
  'belki',
  'ben',
  'benden',
  'beni',
  'benim',
  'beri',
  'beş',
  'beş',
  'beş',
  'bile',
  'bin',
  'bir',
  'biraz',
  'biri',
  'birkaç',
  'birkez',
  'birçok',
  'birşey',
  'birşeyi',
  'birşey',
  'birşeyi',
  'birşey',
  'biz',
  'bizden',
  'bize',
  'bizi',
  'bizim',
  'bu',
  'buna',
  'bunda',
  'bundan',
  'bunlar',
  'bunları',
  'bunların',
  'bunu',
  'bunun',
  'burada',
  'böyle',
  'böylece',
  'bütün',
  'da',
  'daha',
  'dahi',
  'dahil',
  'daima',
  'dair',
  'dayanarak',
  'de',
  'defa',
  'deđil',
  'değil',
  'diye',
  'diđer',
  'diğer',
  'doksan',
  'dokuz',
  'dolayı',
  'dolayısıyla',
  'dört',
  'edecek',
  'eden',
  'ederek',
  'edilecek',
  'ediliyor',
  'edilmesi',
  'ediyor',
  'elli',
  'en',
  'etmesi',
  'etti',
  'ettiği',
  'ettiğini',
  'eđer',
  'eğer',
  'fakat',
  'gibi',
  'göre',
  'halbuki',
  'halen',
  'hangi',
  'hani',
  'hariç',
  'hatta',
  'hele',
  'hem',
  'henüz',
  'hep',
  'hepsi',
  'her',
  'herhangi',
  'herkes',
  'herkesin',
  'hiç',
  'hiçbir',
  'iken',
  'iki',
  'ila',
  'ile',
  'ilgili',
  'ilk',
  'illa',
  'ise',
  'itibaren',
  'itibariyle',
  'iyi',
  'iyice',
  'için',
  'işte',
  'işte',
  'kadar',
  'kanımca',
  'karşın',
  'katrilyon',
  'kendi',
  'kendilerine',
  'kendini',
  'kendisi',
  'kendisine',
  'kendisini',
  'kere',
  'kez',
  'keşke',
  'ki',
  'kim',
  'kimden',
  'kime',
  'kimi',
  'kimse',
  'kırk',
  'kısaca',
  'kırk',
  'lakin',
  'madem',
  'međer',
  'milyar',
  'milyon',
  'mu',
  'mü',
  'mı',
  'mı',
  'nasıl',
  'nasıl',
  'ne',
  'neden',
  'nedenle',
  'nerde',
  'nere',
  'nerede',
  'nereye',
  'nitekim',
  'niye',
  'niçin',
  'o',
  'olan',
  'olarak',
  'oldu',
  'olduklarını',
  'olduğu',
  'olduğunu',
  'olmadı',
  'olmadığı',
  'olmak',
  'olması',
  'olmayan',
  'olmaz',
  'olsa',
  'olsun',
  'olup',
  'olur',
  'olursa',
  'oluyor',
  'on',
  'ona',
  'ondan',
  'onlar',
  'onlardan',
  'onlari',
  'onların',
  'onları',
  'onların',
  'onu',
  'onun',
  'otuz',
  'oysa',
  'pek',
  'rağmen',
  'sadece',
  'sanki',
  'sekiz',
  'seksen',
  'sen',
  'senden',
  'seni',
  'senin',
  'siz',
  'sizden',
  'sizi',
  'sizin',
  'sonra',
  'tarafından',
  'trilyon',
  'tüm',
  'var',
  'vardı',
  've',
  'veya',
  'veyahut',
  'ya',
  'yahut',
  'yani',
  'yapacak',
  'yapmak',
  'yaptı',
  'yaptıkları',
  'yaptığı',
  'yaptığını',
  'yapılan',
  'yapılması',
  'yapıyor',
  'yedi',
  'yerine',
  'yetmiş',
  'yetmiş',
  'yetmiş',
  'yine',
  'yirmi',
  'yoksa',
  'yüz',
  'zaten',
  'çok',
  'çünkü',
  'öyle',
  'üzere',
  'üç',
  'şey',
  'şeyden',
  'şeyi',
  'şeyler',
  'şu',
  'şuna',
  'şunda',
  'şundan',
  'şunu',
  'şey',
  'şeyden',
  'şeyi',
  'şeyler',
  'şu',
  'şuna',
  'şunda',
  'şundan',
  'şunları',
  'şunu',
  'şöyle',
  'şayet',
  'şimdi',
  'şu',
  'şöyle'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_ukr.js
/* The MIT License (MIT)

Copyright (c) 2016 Gene Diaz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */

const ukr = [
  'авжеж',
  'адже',
  'але',
  'б',
  'без',
  'був',
  'була',
  'були',
  'було',
  'бути',
  'більш',
  'вам',
  'вас',
  'весь',
  'вздовж',
  'ви',
  'вниз',
  'внизу',
  'вона',
  'вони',
  'воно',
  'все',
  'всередині',
  'всіх',
  'від',
  'він',
  'да',
  'давай',
  'давати',
  'де',
  'дещо',
  'для',
  'до',
  'з',
  'завжди',
  'замість',
  'й',
  'коли',
  'ледве',
  'майже',
  'ми',
  'навколо',
  'навіть',
  'нам',
  'от',
  'отже',
  'отож',
  'поза',
  'про',
  'під',
  'та',
  'так',
  'такий',
  'також',
  'те',
  'ти',
  'тобто',
  'тож',
  'тощо',
  'хоча',
  'це',
  'цей',
  'чи',
  'чого',
  'що',
  'як',
  'який',
  'якої',
  'є',
  'із',
  'інших',
  'їх',
  'її'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_urd.js
/* The MIT License (MIT)

Copyright (c) 2016 Gene Diaz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */

const urd = [
  'آئی',
  'آئے',
  'آج',
  'آخر',
  'آخرکبر',
  'آدهی',
  'آًب',
  'آٹھ',
  'آیب',
  'اة',
  'اخبزت',
  'اختتبم',
  'ادھر',
  'ارد',
  'اردگرد',
  'ارکبى',
  'اش',
  'اضتعوبل',
  'اضتعوبلات',
  'اضطرذ',
  'اضکب',
  'اضکی',
  'اضکے',
  'اطراف',
  'اغیب',
  'افراد',
  'الگ',
  'اور',
  'اوًچب',
  'اوًچبئی',
  'اوًچی',
  'اوًچے',
  'اى',
  'اً',
  'اًذر',
  'اًہیں',
  'اٹھبًب',
  'اپٌب',
  'اپٌے',
  'اچھب',
  'اچھی',
  'اچھے',
  'اکثر',
  'اکٹھب',
  'اکٹھی',
  'اکٹھے',
  'اکیلا',
  'اکیلی',
  'اکیلے',
  'اگرچہ',
  'اہن',
  'ایطے',
  'ایک',
  'ب',
  'ت',
  'تبزٍ',
  'تت',
  'تر',
  'ترتیت',
  'تریي',
  'تعذاد',
  'تن',
  'تو',
  'توبم',
  'توہی',
  'توہیں',
  'تٌہب',
  'تک',
  'تھب',
  'تھوڑا',
  'تھوڑی',
  'تھوڑے',
  'تھی',
  'تھے',
  'تیي',
  'ثب',
  'ثبئیں',
  'ثبترتیت',
  'ثبری',
  'ثبرے',
  'ثبعث',
  'ثبلا',
  'ثبلترتیت',
  'ثبہر',
  'ثدبئے',
  'ثرآں',
  'ثراں',
  'ثرش',
  'ثعذ',
  'ثغیر',
  'ثلٌذ',
  'ثلٌذوثبلا',
  'ثلکہ',
  'ثي',
  'ثٌب',
  'ثٌبرہب',
  'ثٌبرہی',
  'ثٌبرہے',
  'ثٌبًب',
  'ثٌذ',
  'ثٌذکرو',
  'ثٌذکرًب',
  'ثٌذی',
  'ثڑا',
  'ثڑوں',
  'ثڑی',
  'ثڑے',
  'ثھر',
  'ثھرا',
  'ثھراہوا',
  'ثھرپور',
  'ثھی',
  'ثہت',
  'ثہتر',
  'ثہتری',
  'ثہتریي',
  'ثیچ',
  'ج',
  'خب',
  'خبرہب',
  'خبرہی',
  'خبرہے',
  'خبهوظ',
  'خبًب',
  'خبًتب',
  'خبًتی',
  'خبًتے',
  'خبًٌب',
  'خت',
  'ختن',
  'خجکہ',
  'خص',
  'خططرذ',
  'خلذی',
  'خو',
  'خواى',
  'خوًہی',
  'خوکہ',
  'خٌبة',
  'خگہ',
  'خگہوں',
  'خگہیں',
  'خیطب',
  'خیطبکہ',
  'در',
  'درخبت',
  'درخہ',
  'درخے',
  'درزقیقت',
  'درضت',
  'دش',
  'دفعہ',
  'دلچطپ',
  'دلچطپی',
  'دلچطپیبں',
  'دو',
  'دور',
  'دوراى',
  'دوضرا',
  'دوضروں',
  'دوضری',
  'دوضرے',
  'دوًوں',
  'دکھبئیں',
  'دکھبتب',
  'دکھبتی',
  'دکھبتے',
  'دکھبو',
  'دکھبًب',
  'دکھبیب',
  'دی',
  'دیب',
  'دیتب',
  'دیتی',
  'دیتے',
  'دیر',
  'دیٌب',
  'دیکھو',
  'دیکھٌب',
  'دیکھی',
  'دیکھیں',
  'دے',
  'ر',
  'راضتوں',
  'راضتہ',
  'راضتے',
  'رریعہ',
  'رریعے',
  'رکي',
  'رکھ',
  'رکھب',
  'رکھتب',
  'رکھتبہوں',
  'رکھتی',
  'رکھتے',
  'رکھی',
  'رکھے',
  'رہب',
  'رہی',
  'رہے',
  'ز',
  'زبصل',
  'زبضر',
  'زبل',
  'زبلات',
  'زبلیہ',
  'زصوں',
  'زصہ',
  'زصے',
  'زقبئق',
  'زقیتیں',
  'زقیقت',
  'زکن',
  'زکویہ',
  'زیبدٍ',
  'صبف',
  'صسیر',
  'صفر',
  'صورت',
  'صورتسبل',
  'صورتوں',
  'صورتیں',
  'ض',
  'ضبت',
  'ضبتھ',
  'ضبدٍ',
  'ضبرا',
  'ضبرے',
  'ضبل',
  'ضبلوں',
  'ضت',
  'ضرور',
  'ضرورت',
  'ضروری',
  'ضلطلہ',
  'ضوچ',
  'ضوچب',
  'ضوچتب',
  'ضوچتی',
  'ضوچتے',
  'ضوچو',
  'ضوچٌب',
  'ضوچی',
  'ضوچیں',
  'ضکب',
  'ضکتب',
  'ضکتی',
  'ضکتے',
  'ضکٌب',
  'ضکی',
  'ضکے',
  'ضیذھب',
  'ضیذھی',
  'ضیذھے',
  'ضیکٌڈ',
  'ضے',
  'طرف',
  'طریق',
  'طریقوں',
  'طریقہ',
  'طریقے',
  'طور',
  'طورپر',
  'ظبہر',
  'ع',
  'عذد',
  'عظین',
  'علاقوں',
  'علاقہ',
  'علاقے',
  'علاوٍ',
  'عووهی',
  'غبیذ',
  'غخص',
  'غذ',
  'غروع',
  'غروعبت',
  'غے',
  'فرد',
  'فی',
  'ق',
  'قجل',
  'قجیلہ',
  'قطن',
  'لئے',
  'لا',
  'لازهی',
  'لو',
  'لوجب',
  'لوجی',
  'لوجے',
  'لوسبت',
  'لوسہ',
  'لوگ',
  'لوگوں',
  'لڑکپي',
  'لگتب',
  'لگتی',
  'لگتے',
  'لگٌب',
  'لگی',
  'لگیں',
  'لگے',
  'لی',
  'لیب',
  'لیٌب',
  'لیں',
  'لے',
  'ه',
  'هتعلق',
  'هختلف',
  'هسترم',
  'هسترهہ',
  'هسطوش',
  'هسیذ',
  'هطئلہ',
  'هطئلے',
  'هطبئل',
  'هطتعول',
  'هطلق',
  'هعلوم',
  'هػتول',
  'هلا',
  'هوکي',
  'هوکٌبت',
  'هوکٌہ',
  'هٌبضت',
  'هڑا',
  'هڑًب',
  'هڑے',
  'هکول',
  'هگر',
  'هہرثبى',
  'هیرا',
  'هیری',
  'هیرے',
  'هیں',
  'و',
  'وار',
  'والے',
  'وٍ',
  'ًئی',
  'ًئے',
  'ًب',
  'ًبپطٌذ',
  'ًبگسیر',
  'ًطجت',
  'ًقطہ',
  'ًو',
  'ًوخواى',
  'ًکبلٌب',
  'ًکتہ',
  'ًہ',
  'ًہیں',
  'ًیب',
  'ًے',
  'ٓ آش',
  'ٹھیک',
  'پبئے',
  'پبش',
  'پبًب',
  'پبًچ',
  'پر',
  'پراًب',
  'پطٌذ',
  'پل',
  'پورا',
  'پوچھب',
  'پوچھتب',
  'پوچھتی',
  'پوچھتے',
  'پوچھو',
  'پوچھوں',
  'پوچھٌب',
  'پوچھیں',
  'پچھلا',
  'پھر',
  'پہلا',
  'پہلی',
  'پہلےضی',
  'پہلےضے',
  'پہلےضےہی',
  'پیع',
  'چبر',
  'چبہب',
  'چبہٌب',
  'چبہے',
  'چلا',
  'چلو',
  'چلیں',
  'چلے',
  'چکب',
  'چکی',
  'چکیں',
  'چکے',
  'چھوٹب',
  'چھوٹوں',
  'چھوٹی',
  'چھوٹے',
  'چھہ',
  'چیسیں',
  'ڈھوًڈا',
  'ڈھوًڈلیب',
  'ڈھوًڈو',
  'ڈھوًڈًب',
  'ڈھوًڈی',
  'ڈھوًڈیں',
  'ک',
  'کئی',
  'کئے',
  'کب',
  'کبفی',
  'کبم',
  'کت',
  'کجھی',
  'کرا',
  'کرتب',
  'کرتبہوں',
  'کرتی',
  'کرتے',
  'کرتےہو',
  'کررہب',
  'کررہی',
  'کررہے',
  'کرو',
  'کرًب',
  'کریں',
  'کرے',
  'کطی',
  'کل',
  'کن',
  'کوئی',
  'کوتر',
  'کورا',
  'کوروں',
  'کورٍ',
  'کورے',
  'کوطي',
  'کوى',
  'کوًطب',
  'کوًطی',
  'کوًطے',
  'کھولا',
  'کھولو',
  'کھولٌب',
  'کھولی',
  'کھولیں',
  'کھولے',
  'کہ',
  'کہب',
  'کہتب',
  'کہتی',
  'کہتے',
  'کہو',
  'کہوں',
  'کہٌب',
  'کہی',
  'کہیں',
  'کہے',
  'کی',
  'کیب',
  'کیطب',
  'کیطرف',
  'کیطے',
  'کیلئے',
  'کیوًکہ',
  'کیوں',
  'کیے',
  'کے',
  'کےثعذ',
  'کےرریعے',
  'گئی',
  'گئے',
  'گب',
  'گرد',
  'گروٍ',
  'گروپ',
  'گروہوں',
  'گٌتی',
  'گی',
  'گیب',
  'گے',
  'ہر',
  'ہن',
  'ہو',
  'ہوئی',
  'ہوئے',
  'ہوا',
  'ہوبرا',
  'ہوبری',
  'ہوبرے',
  'ہوتب',
  'ہوتی',
  'ہوتے',
  'ہورہب',
  'ہورہی',
  'ہورہے',
  'ہوضکتب',
  'ہوضکتی',
  'ہوضکتے',
  'ہوًب',
  'ہوًی',
  'ہوًے',
  'ہوچکب',
  'ہوچکی',
  'ہوچکے',
  'ہوگئی',
  'ہوگئے',
  'ہوگیب',
  'ہوں',
  'ہی',
  'ہیں',
  'ہے',
  'ی',
  'یقیٌی',
  'یہ',
  'یہبں'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_vie.js
/*
Copyright (c) 2011, David Przybilla, Chris Umbel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

const vie = [
  'bị',
  'bởi',
  'cả',
  'các',
  'cái',
  'cần',
  'càng',
  'chỉ',
  'chiếc',
  'cho',
  'chứ',
  'chưa',
  'chuyện',
  'có',
  'có thể',
  'cứ',
  'của',
  'cùng',
  'cũng',
  'đã',
  'đang',
  'để',
  'đến nỗi',
  'đều',
  'điều',
  'do',
  'đó',
  'được',
  'dưới',
  'gì',
  'khi',
  'không',
  'là',
  'lại',
  'lên',
  'lúc',
  'mà',
  'mỗi',
  'một cách',
  'này',
  'nên',
  'nếu',
  'ngay',
  'nhiều',
  'như',
  'nhưng',
  'những',
  'nơi',
  'nữa',
  'phải',
  'qua',
  'ra',
  'rằng',
  'rất',
  'rồi',
  'sau',
  'sẽ',
  'so',
  'sự',
  'tại',
  'theo',
  'thì',
  'trên',
  'trước',
  'từ',
  'từng',
  'và',
  'vẫn',
  'vào',
  'vậy',
  'vì',
  'việc',
  'với',
  'vừa',
  'vâng',
  'à',
  'ừ',
  'từ'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_yor.js
/* Copyright 2016 Liam Doherty

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* This list is frequency sorted. That means it can be sliced from the bottom
and be less agressive in excluding stopwords */

const yor = [
  'ó',
  'ní',
  'ìjàpá',
  'ṣe',
  'rẹ̀',
  'tí',
  'àwọn',
  'sí',
  'ni',
  'náà',
  'anansi',
  'láti',
  'kan',
  'ti',
  'ń',
  'lọ',
  'o',
  'bí',
  'padà',
  'sì',
  'wá',
  'wangari',
  'lè',
  'wà',
  'kí',
  'púpọ̀',
  'odò',
  'mi',
  'wọ́n',
  'pẹ̀lú',
  'a',
  'ṣùgbọ́n',
  'fún',
  'jẹ́',
  'fẹ́',
  'oúnjẹ',
  'rí',
  'igi',
  'kò',
  'ilé',
  'jù',
  'olóńgbò',
  'pé',
  'é',
  'gbogbo',
  'iṣu',
  'inú',
  'bẹ̀rẹ̀',
  'jẹ',
  'fi',
  'dúró',
  'alẹ́',
  'ọjọ́',
  'nítorí',
  'nǹkan',
  'ọ̀rẹ́',
  'àkókò',
  'sínú',
  'ṣ',
  'yìí'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopwords_zul.js
/* Copyright 2016 Liam Doherty

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* This list is frequency sorted. That means it can be sliced from the bottom
and be less agressive in excluding stopwords */

const zul = [
  'ukuthi',
  'kodwa',
  'futhi',
  'kakhulu',
  'wakhe',
  'kusho',
  'uma',
  'wathi',
  'umama',
  'kanye',
  'phansi',
  'ngesikhathi',
  'lapho',
  'u',
  'zakhe',
  'khona',
  'ukuba',
  'nje',
  'phezulu',
  'yakhe',
  'kungani',
  'wase',
  'la',
  'mina',
  'wami',
  'ukuze',
  'unonkungu',
  'wabona',
  'wahamba',
  'lakhe',
  'yami',
  'kanjani',
  'kwakukhona',
  'ngelinye'
]


;// CONCATENATED MODULE: ./node_modules/stopword/src/stopword.js

































































// default to english stopword list
const removeStopwords = (tokens, stopwords = eng) => {
  if (!Array.isArray(tokens) || !Array.isArray(stopwords)) {
    throw new Error('expected Arrays try: removeStopwords(Array[, Array])')
  }
  return tokens.filter(x => !stopwords.includes(x.toLowerCase()))
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// NAMESPACE OBJECT: ./node_modules/axios/lib/platform/common/utils.js
var common_utils_namespaceObject = {};
__webpack_require__.r(common_utils_namespaceObject);
__webpack_require__.d(common_utils_namespaceObject, {
  hasBrowserEnv: () => (hasBrowserEnv),
  hasStandardBrowserEnv: () => (hasStandardBrowserEnv),
  hasStandardBrowserWebWorkerEnv: () => (hasStandardBrowserWebWorkerEnv)
});

;// CONCATENATED MODULE: ./node_modules/js-cookie/dist/js.cookie.mjs
/*! js-cookie v3.0.5 | MIT */
/* eslint-disable no-var */
function js_cookie_assign (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      target[key] = source[key];
    }
  }
  return target
}
/* eslint-enable no-var */

/* eslint-disable no-var */
var defaultConverter = {
  read: function (value) {
    if (value[0] === '"') {
      value = value.slice(1, -1);
    }
    return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
  },
  write: function (value) {
    return encodeURIComponent(value).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    )
  }
};
/* eslint-enable no-var */

/* eslint-disable no-var */

function init (converter, defaultAttributes) {
  function set (name, value, attributes) {
    if (typeof document === 'undefined') {
      return
    }

    attributes = js_cookie_assign({}, defaultAttributes, attributes);

    if (typeof attributes.expires === 'number') {
      attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
    }
    if (attributes.expires) {
      attributes.expires = attributes.expires.toUTCString();
    }

    name = encodeURIComponent(name)
      .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
      .replace(/[()]/g, escape);

    var stringifiedAttributes = '';
    for (var attributeName in attributes) {
      if (!attributes[attributeName]) {
        continue
      }

      stringifiedAttributes += '; ' + attributeName;

      if (attributes[attributeName] === true) {
        continue
      }

      // Considers RFC 6265 section 5.2:
      // ...
      // 3.  If the remaining unparsed-attributes contains a %x3B (";")
      //     character:
      // Consume the characters of the unparsed-attributes up to,
      // not including, the first %x3B (";") character.
      // ...
      stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
    }

    return (document.cookie =
      name + '=' + converter.write(value, name) + stringifiedAttributes)
  }

  function get (name) {
    if (typeof document === 'undefined' || (arguments.length && !name)) {
      return
    }

    // To prevent the for loop in the first place assign an empty array
    // in case there are no cookies at all.
    var cookies = document.cookie ? document.cookie.split('; ') : [];
    var jar = {};
    for (var i = 0; i < cookies.length; i++) {
      var parts = cookies[i].split('=');
      var value = parts.slice(1).join('=');

      try {
        var found = decodeURIComponent(parts[0]);
        jar[found] = converter.read(value, found);

        if (name === found) {
          break
        }
      } catch (e) {}
    }

    return name ? jar[name] : jar
  }

  return Object.create(
    {
      set,
      get,
      remove: function (name, attributes) {
        set(
          name,
          '',
          js_cookie_assign({}, attributes, {
            expires: -1
          })
        );
      },
      withAttributes: function (attributes) {
        return init(this.converter, js_cookie_assign({}, this.attributes, attributes))
      },
      withConverter: function (converter) {
        return init(js_cookie_assign({}, this.converter, converter), this.attributes)
      }
    },
    {
      attributes: { value: Object.freeze(defaultAttributes) },
      converter: { value: Object.freeze(converter) }
    }
  )
}

var api = init(defaultConverter, { path: '/' });
/* eslint-enable no-var */



;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/bind.js


function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/utils.js




// utils is a library of generic helper functions non-specific to axios

const {toString: utils_toString} = Object.prototype;
const {getPrototypeOf} = Object;

const kindOf = (cache => thing => {
    const str = utils_toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));

const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type
}

const typeOfTest = type => thing => typeof thing === type;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const {isArray} = Array;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
const isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  let result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
const isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
const isObject = (thing) => thing !== null && typeof thing === 'object';

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
const isBoolean = thing => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = (val) => {
  if (kindOf(val) !== 'object') {
    return false;
  }

  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
}

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
const isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
const isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
const isStream = (val) => isObject(val) && isFunction(val.pipe);

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
const isFormData = (thing) => {
  let kind;
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) || (
      isFunction(thing.append) && (
        (kind = kindOf(thing)) === 'formdata' ||
        // detect form-data instance
        (kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]')
      )
    )
  )
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = (str) => str.trim ?
  str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn, {allOwnKeys = false} = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  let i;
  let l;

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;

    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}

function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}

const _global = (() => {
  /*eslint no-undef:0*/
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : (typeof window !== 'undefined' ? window : global)
})();

const isContextDefined = (context) => !isUndefined(context) && context !== _global;

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  const {caseless} = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  }

  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, {allOwnKeys}= {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {allOwnKeys});
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
}

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};

  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
}

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}


/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
const toArray = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
}

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
const isTypedArray = (TypedArray => {
  // eslint-disable-next-line func-names
  return thing => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];

  const iterator = generator.call(obj);

  let result;

  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
}

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];

  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }

  return arr;
}

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
const isHTMLForm = kindOfTest('HTMLFormElement');

const toCamelCase = str => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};

/* Creating a function that will check if an object has a property. */
const utils_hasOwnProperty = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
const isRegExp = kindOfTest('RegExp');

const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};

  forEach(descriptors, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });

  Object.defineProperties(obj, reducedDescriptors);
}

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    // skip restricted props in strict mode
    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }

    const value = obj[name];

    if (!isFunction(value)) return;

    descriptor.enumerable = false;

    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }

    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
}

const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};

  const define = (arr) => {
    arr.forEach(value => {
      obj[value] = true;
    });
  }

  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

  return obj;
}

const noop = () => {}

const toFiniteNumber = (value, defaultValue) => {
  value = +value;
  return Number.isFinite(value) ? value : defaultValue;
}

const ALPHA = 'abcdefghijklmnopqrstuvwxyz'

const DIGIT = '0123456789';

const ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
}

const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = '';
  const {length} = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length|0]
  }

  return str;
}

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
}

const toJSONObject = (obj) => {
  const stack = new Array(10);

  const visit = (source, i) => {

    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }

      if(!('toJSON' in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};

        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });

        stack[i] = undefined;

        return target;
      }
    }

    return source;
  }

  return visit(obj, 0);
}

const isAsyncFn = kindOfTest('AsyncFunction');

const isThenable = (thing) =>
  thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);

/* harmony default export */ const utils = ({
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty: utils_hasOwnProperty,
  hasOwnProp: utils_hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/AxiosError.js




/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack;
  }

  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}

utils.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});

const AxiosError_prototype = AxiosError.prototype;
const descriptors = {};

[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(code => {
  descriptors[code] = {value: code};
});

Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(AxiosError_prototype, 'isAxiosError', {value: true});

// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(AxiosError_prototype);

  utils.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, prop => {
    return prop !== 'isAxiosError';
  });

  AxiosError.call(axiosError, error.message, code, config, request, response);

  axiosError.cause = error;

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

/* harmony default export */ const core_AxiosError = (AxiosError);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/null.js
// eslint-disable-next-line strict
/* harmony default export */ const helpers_null = (null);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/toFormData.js




// temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored


/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return utils.isPlainObject(thing) || utils.isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return utils.endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return utils.isArray(arr) && !arr.some(isVisitable);
}

const predicates = utils.toFlatObject(utils, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!utils.isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (helpers_null || FormData)();

  // eslint-disable-next-line no-param-reassign
  options = utils.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !utils.isUndefined(source[option]);
  });

  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  const useBlob = _Blob && utils.isSpecCompliantForm(formData);

  if (!utils.isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }

  function convertValue(value) {
    if (value === null) return '';

    if (utils.isDate(value)) {
      return value.toISOString();
    }

    if (!useBlob && utils.isBlob(value)) {
      throw new core_AxiosError('Blob is not supported. Use a Buffer instead.');
    }

    if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    let arr = value;

    if (value && !path && typeof value === 'object') {
      if (utils.endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (
        (utils.isArray(value) && isFlatArray(value)) ||
        ((utils.isFileList(value) || utils.endsWith(key, '[]')) && (arr = utils.toArray(value))
        )) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);

        arr.forEach(function each(el, index) {
          !(utils.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : (indexes === null ? key : key + '[]'),
            convertValue(el)
          );
        });
        return false;
      }
    }

    if (isVisitable(value)) {
      return true;
    }

    formData.append(renderKey(path, key, dots), convertValue(value));

    return false;
  }

  const stack = [];

  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });

  function build(value, path) {
    if (utils.isUndefined(value)) return;

    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }

    stack.push(value);

    utils.forEach(value, function each(el, key) {
      const result = !(utils.isUndefined(el) || el === null) && visitor.call(
        formData, el, utils.isString(key) ? key.trim() : key, path, exposedHelpers
      );

      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });

    stack.pop();
  }

  if (!utils.isObject(obj)) {
    throw new TypeError('data must be an object');
  }

  build(obj);

  return formData;
}

/* harmony default export */ const helpers_toFormData = (toFormData);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/AxiosURLSearchParams.js




/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];

  params && helpers_toFormData(params, this, options);
}

const AxiosURLSearchParams_prototype = AxiosURLSearchParams.prototype;

AxiosURLSearchParams_prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};

AxiosURLSearchParams_prototype.toString = function toString(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode);
  } : encode;

  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};

/* harmony default export */ const helpers_AxiosURLSearchParams = (AxiosURLSearchParams);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/buildURL.js





/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function buildURL_encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?object} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  
  const _encode = options && options.encode || buildURL_encode;

  const serializeFn = options && options.serialize;

  let serializedParams;

  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils.isURLSearchParams(params) ?
      params.toString() :
      new helpers_AxiosURLSearchParams(params, options).toString(_encode);
  }

  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/InterceptorManager.js




class InterceptorManager {
  constructor() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}

/* harmony default export */ const core_InterceptorManager = (InterceptorManager);

;// CONCATENATED MODULE: ./node_modules/axios/lib/defaults/transitional.js


/* harmony default export */ const defaults_transitional = ({
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js



/* harmony default export */ const classes_URLSearchParams = (typeof URLSearchParams !== 'undefined' ? URLSearchParams : helpers_AxiosURLSearchParams);

;// CONCATENATED MODULE: ./node_modules/axios/lib/platform/browser/classes/FormData.js


/* harmony default export */ const classes_FormData = (typeof FormData !== 'undefined' ? FormData : null);

;// CONCATENATED MODULE: ./node_modules/axios/lib/platform/browser/classes/Blob.js


/* harmony default export */ const classes_Blob = (typeof Blob !== 'undefined' ? Blob : null);

;// CONCATENATED MODULE: ./node_modules/axios/lib/platform/browser/index.js




/* harmony default export */ const browser = ({
  isBrowser: true,
  classes: {
    URLSearchParams: classes_URLSearchParams,
    FormData: classes_FormData,
    Blob: classes_Blob
  },
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/platform/common/utils.js
const hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined';

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
const hasStandardBrowserEnv = (
  (product) => {
    return hasBrowserEnv && ['ReactNative', 'NativeScript', 'NS'].indexOf(product) < 0
  })(typeof navigator !== 'undefined' && navigator.product);

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
const hasStandardBrowserWebWorkerEnv = (() => {
  return (
    typeof WorkerGlobalScope !== 'undefined' &&
    // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts === 'function'
  );
})();



;// CONCATENATED MODULE: ./node_modules/axios/lib/platform/index.js



/* harmony default export */ const platform = ({
  ...common_utils_namespaceObject,
  ...browser
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/toURLEncodedForm.js






function toURLEncodedForm(data, options) {
  return helpers_toFormData(data, new platform.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (platform.isNode && utils.isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }

      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/formDataToJSON.js




/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return utils.matchAll(/\w+|\[(\w*)]/g, name).map(match => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];

    if (name === '__proto__') return true;

    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils.isArray(target) ? target.length : name;

    if (isLast) {
      if (utils.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }

      return !isNumericKey;
    }

    if (!target[name] || !utils.isObject(target[name])) {
      target[name] = [];
    }

    const result = buildPath(path, value, target[name], index);

    if (result && utils.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }

    return !isNumericKey;
  }

  if (utils.isFormData(formData) && utils.isFunction(formData.entries)) {
    const obj = {};

    utils.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });

    return obj;
  }

  return null;
}

/* harmony default export */ const helpers_formDataToJSON = (formDataToJSON);

;// CONCATENATED MODULE: ./node_modules/axios/lib/defaults/index.js










/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

const defaults = {

  transitional: defaults_transitional,

  adapter: ['xhr', 'http'],

  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = utils.isObject(data);

    if (isObjectPayload && utils.isHTMLForm(data)) {
      data = new FormData(data);
    }

    const isFormData = utils.isFormData(data);

    if (isFormData) {
      if (!hasJSONContentType) {
        return data;
      }
      return hasJSONContentType ? JSON.stringify(helpers_formDataToJSON(data)) : data;
    }

    if (utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }

    let isFileList;

    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }

      if ((isFileList = utils.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const _FormData = this.env && this.env.FormData;

        return helpers_toFormData(
          isFileList ? {'files[]': data} : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }

    if (isObjectPayload || hasJSONContentType ) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    const transitional = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const JSONRequested = this.responseType === 'json';

    if (data && utils.isString(data) && ((forcedJSONParsing && !this.responseType) || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;

      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw core_AxiosError.from(e, core_AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: platform.classes.FormData,
    Blob: platform.classes.Blob
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': undefined
    }
  }
};

utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (method) => {
  defaults.headers[method] = {};
});

/* harmony default export */ const lib_defaults = (defaults);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/parseHeaders.js




// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = utils.toObjectSet([
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
]);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
/* harmony default export */ const parseHeaders = (rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;

  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();

    if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
      return;
    }

    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/AxiosHeaders.js





const $internals = Symbol('internals');

function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}

function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }

  return utils.isArray(value) ? value.map(normalizeValue) : String(value);
}

function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;

  while ((match = tokensRE.exec(str))) {
    tokens[match[1]] = match[2];
  }

  return tokens;
}

const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());

function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (utils.isFunction(filter)) {
    return filter.call(this, value, header);
  }

  if (isHeaderNameFilter) {
    value = header;
  }

  if (!utils.isString(value)) return;

  if (utils.isString(filter)) {
    return value.indexOf(filter) !== -1;
  }

  if (utils.isRegExp(filter)) {
    return filter.test(value);
  }
}

function formatHeader(header) {
  return header.trim()
    .toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
}

function buildAccessors(obj, header) {
  const accessorName = utils.toCamelCase(' ' + header);

  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}

class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }

  set(header, valueOrRewrite, rewrite) {
    const self = this;

    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);

      if (!lHeader) {
        throw new Error('header name must be a non-empty string');
      }

      const key = utils.findKey(self, lHeader);

      if(!key || self[key] === undefined || _rewrite === true || (_rewrite === undefined && self[key] !== false)) {
        self[key || _header] = normalizeValue(_value);
      }
    }

    const setHeaders = (headers, _rewrite) =>
      utils.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

    if (utils.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite)
    } else if(utils.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }

    return this;
  }

  get(header, parser) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils.findKey(this, header);

      if (key) {
        const value = this[key];

        if (!parser) {
          return value;
        }

        if (parser === true) {
          return parseTokens(value);
        }

        if (utils.isFunction(parser)) {
          return parser.call(this, value, key);
        }

        if (utils.isRegExp(parser)) {
          return parser.exec(value);
        }

        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }

  has(header, matcher) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils.findKey(this, header);

      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }

    return false;
  }

  delete(header, matcher) {
    const self = this;
    let deleted = false;

    function deleteHeader(_header) {
      _header = normalizeHeader(_header);

      if (_header) {
        const key = utils.findKey(self, _header);

        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];

          deleted = true;
        }
      }
    }

    if (utils.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }

    return deleted;
  }

  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;

    while (i--) {
      const key = keys[i];
      if(!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }

    return deleted;
  }

  normalize(format) {
    const self = this;
    const headers = {};

    utils.forEach(this, (value, header) => {
      const key = utils.findKey(headers, header);

      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }

      const normalized = format ? formatHeader(header) : String(header).trim();

      if (normalized !== header) {
        delete self[header];
      }

      self[normalized] = normalizeValue(value);

      headers[normalized] = true;
    });

    return this;
  }

  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }

  toJSON(asStrings) {
    const obj = Object.create(null);

    utils.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils.isArray(value) ? value.join(', ') : value);
    });

    return obj;
  }

  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }

  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
  }

  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }

  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }

  static concat(first, ...targets) {
    const computed = new this(first);

    targets.forEach((target) => computed.set(target));

    return computed;
  }

  static accessor(header) {
    const internals = this[$internals] = (this[$internals] = {
      accessors: {}
    });

    const accessors = internals.accessors;
    const prototype = this.prototype;

    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);

      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }

    utils.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

    return this;
  }
}

AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

// reserved names hotfix
utils.reduceDescriptors(AxiosHeaders.prototype, ({value}, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  }
});

utils.freezeMethods(AxiosHeaders);

/* harmony default export */ const core_AxiosHeaders = (AxiosHeaders);

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/transformData.js






/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || lib_defaults;
  const context = response || config;
  const headers = core_AxiosHeaders.from(context.headers);
  let data = context.data;

  utils.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });

  headers.normalize();

  return data;
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/cancel/isCancel.js


function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/cancel/CanceledError.js





/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */
function CanceledError(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  core_AxiosError.call(this, message == null ? 'canceled' : message, core_AxiosError.ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}

utils.inherits(CanceledError, core_AxiosError, {
  __CANCEL__: true
});

/* harmony default export */ const cancel_CanceledError = (CanceledError);

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/settle.js




/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new core_AxiosError(
      'Request failed with status code ' + response.status,
      [core_AxiosError.ERR_BAD_REQUEST, core_AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/cookies.js



/* harmony default export */ const cookies = (platform.hasStandardBrowserEnv ?

  // Standard browser envs support document.cookie
  {
    write(name, value, expires, path, domain, secure) {
      const cookie = [name + '=' + encodeURIComponent(value)];

      utils.isNumber(expires) && cookie.push('expires=' + new Date(expires).toGMTString());

      utils.isString(path) && cookie.push('path=' + path);

      utils.isString(domain) && cookie.push('domain=' + domain);

      secure === true && cookie.push('secure');

      document.cookie = cookie.join('; ');
    },

    read(name) {
      const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return (match ? decodeURIComponent(match[3]) : null);
    },

    remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  }

  :

  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {},
    read() {
      return null;
    },
    remove() {}
  });


;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/isAbsoluteURL.js


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/combineURLs.js


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/?\/$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/buildFullPath.js





/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/isURLSameOrigin.js





/* harmony default export */ const isURLSameOrigin = (platform.hasStandardBrowserEnv ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement('a');
    let originURL;

    /**
    * Parse a URL to discover its components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      let href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
          urlParsingNode.pathname :
          '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      const parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
          parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })());

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/parseProtocol.js


function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/speedometer.js


/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;

  min = min !== undefined ? min : 1000;

  return function push(chunkLength) {
    const now = Date.now();

    const startedAt = timestamps[tail];

    if (!firstSampleTS) {
      firstSampleTS = now;
    }

    bytes[head] = chunkLength;
    timestamps[head] = now;

    let i = tail;
    let bytesCount = 0;

    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }

    head = (head + 1) % samplesCount;

    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }

    if (now - firstSampleTS < min) {
      return;
    }

    const passed = startedAt && now - startedAt;

    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}

/* harmony default export */ const helpers_speedometer = (speedometer);

;// CONCATENATED MODULE: ./node_modules/axios/lib/adapters/xhr.js
















function progressEventReducer(listener, isDownloadStream) {
  let bytesNotified = 0;
  const _speedometer = helpers_speedometer(50, 250);

  return e => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;

    bytesNotified = loaded;

    const data = {
      loaded,
      total,
      progress: total ? (loaded / total) : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e
    };

    data[isDownloadStream ? 'download' : 'upload'] = true;

    listener(data);
  };
}

const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

/* harmony default export */ const xhr = (isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    let requestData = config.data;
    const requestHeaders = core_AxiosHeaders.from(config.headers).normalize();
    let {responseType, withXSRFToken} = config;
    let onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    let contentType;

    if (utils.isFormData(requestData)) {
      if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv) {
        requestHeaders.setContentType(false); // Let the browser set it
      } else if ((contentType = requestHeaders.getContentType()) !== false) {
        // fix semicolon duplication issue for ReactNative FormData implementation
        const [type, ...tokens] = contentType ? contentType.split(';').map(token => token.trim()).filter(Boolean) : [];
        requestHeaders.setContentType([type || 'multipart/form-data', ...tokens].join('; '));
      }
    }

    let request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      const username = config.auth.username || '';
      const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.set('Authorization', 'Basic ' + btoa(username + ':' + password));
    }

    const fullPath = buildFullPath(config.baseURL, config.url);

    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      const responseHeaders = core_AxiosHeaders.from(
        'getAllResponseHeaders' in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ?
        request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(new core_AxiosError('Request aborted', core_AxiosError.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new core_AxiosError('Network Error', core_AxiosError.ERR_NETWORK, config, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      const transitional = config.transitional || defaults_transitional;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new core_AxiosError(
        timeoutErrorMessage,
        transitional.clarifyTimeoutError ? core_AxiosError.ETIMEDOUT : core_AxiosError.ECONNABORTED,
        config,
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if(platform.hasStandardBrowserEnv) {
      withXSRFToken && utils.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(config));

      if (withXSRFToken || (withXSRFToken !== false && isURLSameOrigin(fullPath))) {
        // Add xsrf header
        const xsrfValue = config.xsrfHeaderName && config.xsrfCookieName && cookies.read(config.xsrfCookieName);

        if (xsrfValue) {
          requestHeaders.set(config.xsrfHeaderName, xsrfValue);
        }
      }
    }

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', progressEventReducer(config.onDownloadProgress, true));
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', progressEventReducer(config.onUploadProgress));
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = cancel => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new cancel_CanceledError(null, config, request) : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    const protocol = parseProtocol(fullPath);

    if (protocol && platform.protocols.indexOf(protocol) === -1) {
      reject(new core_AxiosError('Unsupported protocol ' + protocol + ':', core_AxiosError.ERR_BAD_REQUEST, config));
      return;
    }


    // Send the request
    request.send(requestData || null);
  });
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/adapters/adapters.js





const knownAdapters = {
  http: helpers_null,
  xhr: xhr
}

utils.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, 'name', {value});
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {value});
  }
});

const renderReason = (reason) => `- ${reason}`;

const isResolvedHandle = (adapter) => utils.isFunction(adapter) || adapter === null || adapter === false;

/* harmony default export */ const adapters = ({
  getAdapter: (adapters) => {
    adapters = utils.isArray(adapters) ? adapters : [adapters];

    const {length} = adapters;
    let nameOrAdapter;
    let adapter;

    const rejectedReasons = {};

    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      let id;

      adapter = nameOrAdapter;

      if (!isResolvedHandle(nameOrAdapter)) {
        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];

        if (adapter === undefined) {
          throw new core_AxiosError(`Unknown adapter '${id}'`);
        }
      }

      if (adapter) {
        break;
      }

      rejectedReasons[id || '#' + i] = adapter;
    }

    if (!adapter) {

      const reasons = Object.entries(rejectedReasons)
        .map(([id, state]) => `adapter ${id} ` +
          (state === false ? 'is not supported by the environment' : 'is not available in the build')
        );

      let s = length ?
        (reasons.length > 1 ? 'since :\n' + reasons.map(renderReason).join('\n') : ' ' + renderReason(reasons[0])) :
        'as no adapter specified';

      throw new core_AxiosError(
        `There is no suitable adapter to dispatch the request ` + s,
        'ERR_NOT_SUPPORT'
      );
    }

    return adapter;
  },
  adapters: knownAdapters
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/dispatchRequest.js









/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new cancel_CanceledError(null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  config.headers = core_AxiosHeaders.from(config.headers);

  // Transform request data
  config.data = transformData.call(
    config,
    config.transformRequest
  );

  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }

  const adapter = adapters.getAdapter(config.adapter || lib_defaults.adapter);

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      config.transformResponse,
      response
    );

    response.headers = core_AxiosHeaders.from(response.headers);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = core_AxiosHeaders.from(reason.response.headers);
      }
    }

    return Promise.reject(reason);
  });
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/mergeConfig.js





const headersToObject = (thing) => thing instanceof core_AxiosHeaders ? thing.toJSON() : thing;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  const config = {};

  function getMergedValue(target, source, caseless) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge.call({caseless}, target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(a, b, caseless) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(a, b, caseless);
    } else if (!utils.isUndefined(a)) {
      return getMergedValue(undefined, a, caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!utils.isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }

  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
  };

  utils.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge(config1[prop], config2[prop], prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/env/data.js
const VERSION = "1.6.5";
;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/validator.js





const validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new core_AxiosError(
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        core_AxiosError.ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new core_AxiosError('options must be an object', core_AxiosError.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new core_AxiosError('option ' + opt + ' must be ' + result, core_AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new core_AxiosError('Unknown option ' + opt, core_AxiosError.ERR_BAD_OPTION);
    }
  }
}

/* harmony default export */ const validator = ({
  assertOptions,
  validators
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/Axios.js











const Axios_validators = validator.validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new core_InterceptorManager(),
      response: new core_InterceptorManager()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }

    config = mergeConfig(this.defaults, config);

    const {transitional, paramsSerializer, headers} = config;

    if (transitional !== undefined) {
      validator.assertOptions(transitional, {
        silentJSONParsing: Axios_validators.transitional(Axios_validators.boolean),
        forcedJSONParsing: Axios_validators.transitional(Axios_validators.boolean),
        clarifyTimeoutError: Axios_validators.transitional(Axios_validators.boolean)
      }, false);
    }

    if (paramsSerializer != null) {
      if (utils.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        }
      } else {
        validator.assertOptions(paramsSerializer, {
          encode: Axios_validators.function,
          serialize: Axios_validators.function
        }, true);
      }
    }

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    // Flatten headers
    let contextHeaders = headers && utils.merge(
      headers.common,
      headers[config.method]
    );

    headers && utils.forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      (method) => {
        delete headers[method];
      }
    );

    config.headers = core_AxiosHeaders.concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }

      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });

    let promise;
    let i = 0;
    let len;

    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), undefined];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;

      promise = Promise.resolve(config);

      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }

      return promise;
    }

    len = requestInterceptorChain.length;

    let newConfig = config;

    i = 0;

    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }

    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }

    i = 0;
    len = responseInterceptorChain.length;

    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }

    return promise;
  }

  getUri(config) {
    config = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
}

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }

  Axios.prototype[method] = generateHTTPMethod();

  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});

/* harmony default export */ const core_Axios = (Axios);

;// CONCATENATED MODULE: ./node_modules/axios/lib/cancel/CancelToken.js




/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    let resolvePromise;

    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });

    const token = this;

    // eslint-disable-next-line func-names
    this.promise.then(cancel => {
      if (!token._listeners) return;

      let i = token._listeners.length;

      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = onfulfilled => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise(resolve => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);

      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };

      return promise;
    };

    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }

      token.reason = new cancel_CanceledError(message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Subscribe to the cancel signal
   */

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }

    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }

  /**
   * Unsubscribe from the cancel signal
   */

  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}

/* harmony default export */ const cancel_CancelToken = (CancelToken);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/spread.js


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/isAxiosError.js




/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return utils.isObject(payload) && (payload.isAxiosError === true);
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/HttpStatusCode.js
const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};

Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});

/* harmony default export */ const helpers_HttpStatusCode = (HttpStatusCode);

;// CONCATENATED MODULE: ./node_modules/axios/lib/axios.js




















/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new core_Axios(defaultConfig);
  const instance = bind(core_Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, core_Axios.prototype, context, {allOwnKeys: true});

  // Copy context to instance
  utils.extend(instance, context, null, {allOwnKeys: true});

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
const axios = createInstance(lib_defaults);

// Expose Axios class to allow class inheritance
axios.Axios = core_Axios;

// Expose Cancel & CancelToken
axios.CanceledError = cancel_CanceledError;
axios.CancelToken = cancel_CancelToken;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = helpers_toFormData;

// Expose AxiosError class
axios.AxiosError = core_AxiosError;

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = spread;

// Expose isAxiosError
axios.isAxiosError = isAxiosError;

// Expose mergeConfig
axios.mergeConfig = mergeConfig;

axios.AxiosHeaders = core_AxiosHeaders;

axios.formToJSON = thing => helpers_formDataToJSON(utils.isHTMLForm(thing) ? new FormData(thing) : thing);

axios.getAdapter = adapters.getAdapter;

axios.HttpStatusCode = helpers_HttpStatusCode;

axios.default = axios;

// this module should only have a default export
/* harmony default export */ const lib_axios = (axios);

;// CONCATENATED MODULE: ./src/utils/createSpinner.ts
function createSpinner() {
    const styleElement = document.createElement("style");
    styleElement.textContent = `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `;
    document.head.appendChild(styleElement);
    const spinner = document.createElement("div");
    spinner.id = "mySpinner";
    spinner.style.position = "fixed";
    spinner.style.zIndex = "99999";
    spinner.style.height = "50px";
    spinner.style.width = "50px";
    spinner.style.overflow = "show";
    spinner.style.margin = "auto";
    spinner.style.top = "0";
    spinner.style.left = "0";
    spinner.style.bottom = "0";
    spinner.style.right = "0";
    spinner.style.border = "5px solid #f3f3f3";
    spinner.style.borderRadius = "50%";
    spinner.style.borderTop = "5px solid #3498db";
    spinner.style.animation = "spin 1s linear infinite";
    document.body.appendChild(spinner);
    document.body.style.overflow = "hidden";
}


;// CONCATENATED MODULE: ./src/utils/processTitle.ts
function getTitleTag() {
    const allElements = document.querySelectorAll("*");
    let maxFontSize = -1;
    let targetElement = Element.prototype;
    allElements.forEach((element) => {
        if (element.textContent &&
            element.textContent.length >= 10 &&
            window.getComputedStyle(element).fontSize) {
            const fontSize = parseFloat(window.getComputedStyle(element).fontSize);
            if (fontSize > maxFontSize) {
                maxFontSize = fontSize;
                targetElement = element;
            }
        }
    });
    return targetElement;
}
function getTitle() {
    return getTitleTag().textContent || "";
}


;// CONCATENATED MODULE: ./src/utils/processBody.ts
const stopword = __webpack_require__(542);
function processArticleText(textContent) {
    return textContent.replace(/\s+/g, " ").replace(/\n+/g, " ");
}
function classifyBlock(block, MAX_LINK_DENSITY = 0.2, LENGTH_LOW = 70, LENGTH_HIGH = 200, STOPWORDS_LOW = 0.3, STOPWORDS_HIGH = 0.32) {
    const length = block.length;
    const linkDensity = (block.match(/<a.*?<\/a>/gs) || []).join("").length / length;
    const words = block.split(/\s+/);
    const stopwordsDensity = stopword.removeStopwords(words).length / words.length;
    if (linkDensity > MAX_LINK_DENSITY) {
        return -1;
    }
    if (length < LENGTH_LOW) {
        return -1;
    }
    if (stopwordsDensity > STOPWORDS_HIGH) {
        if (length > LENGTH_HIGH) {
            return 1;
        }
        else {
            return 0.5;
        }
    }
    if (stopwordsDensity > STOPWORDS_LOW) {
        return 0.5;
    }
    else {
        return -1;
    }
}
function preprocessElement(element) {
    const excludedTags = ["noscript", "script", "header", "footer", "style"];
    const clone = element.cloneNode(true);
    excludedTags.forEach((tag) => {
        const elementsToRemove = clone.querySelectorAll(tag);
        elementsToRemove.forEach((element) => element.parentNode.removeChild(element));
    });
    return clone;
}
// function findLargestFontSize(element) {
//     const childElements = element.getElementsByTagName('*');
//     let largestFontSize = 0;
//     for (let i = 0; i < childElements.length; i++) {
//       const currentElement = childElements[i];
//       const computedStyle = window.getComputedStyle(currentElement);
//       const fontSize = parseFloat(computedStyle.fontSize);
//       if (fontSize > largestFontSize) {
//         largestFontSize = fontSize;
//       }
//     }
//     return largestFontSize;
//   }
function extractBody() {
    const segmentationTags = [
        "blockquote",
        "caption",
        "center",
        "col",
        "colgroup",
        "dd",
        "div",
        "dl",
        "dt",
        "fieldset",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "legend",
        "li",
        "optgroup",
        "option",
        "p",
        "pre",
        "table",
        "td",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "tr",
        "ul",
    ];
    const texts = [];
    segmentationTags.forEach((tag) => {
        const elements = document.getElementsByTagName(tag);
        for (let i = 0; i < elements.length; i++) {
            const originalElement = elements[i];
            const element = preprocessElement(originalElement);
            const elementContent = element.outerHTML.trim();
            const classification = classifyBlock(elementContent);
            if (classification >= 0) {
                const textContent = processArticleText(element.textContent.trim());
                if (textContent.split(" ").length < 30) {
                    continue;
                }
                texts.push(textContent);
            }
        }
    });
    for (let i = 0; i < texts.length; i++) {
        for (let j = 0; j < texts.length; j++) {
            if (i === j) {
                continue;
            }
            if (texts[i].includes(texts[j])) {
                texts.splice(j, 1);
            }
        }
    }
    let content = "";
    for (let i = 0; i < texts.length; i++) {
        content += texts[i];
    }
    if (content.length > 4500) {
        console.log(content.slice(0, 4500));
        return content.slice(0, 4500);
    }
    return content;
}


;// CONCATENATED MODULE: ./src/content.tsx
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





const backendURL = "https://tuneintruth-2.vercel.app";
const axiosInstance = lib_axios.create({
    timeout: 120000,
});
function fun() {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            createSpinner();
            const div = getTitleTag();
            const res = yield fetchNews(window.location.href);
            div.innerHTML = res.rhymingHeadline;
            const div1 = document.createElement("div");
            div1.style.padding = "10px 0";
            div1.style.lineHeight = "1.5";
            div1.style.fontSize = "16px";
            div1.innerHTML = "<b>Bias report : </b>" + res.biasSummary;
            div.append(div1);
            yield uploadNews(res);
        }
        finally {
            const spinner = document.getElementById("mySpinner");
            if (!spinner)
                return;
            (_a = spinner.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(spinner);
            document.body.style.overflow = "auto";
        }
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        chrome.storage.onChanged.addListener(function (changes) {
            var _a;
            return __awaiter(this, void 0, void 0, function* () {
                if (((_a = changes["action"]) === null || _a === void 0 ? void 0 : _a.newValue) && !document.hidden) {
                    fun();
                }
            });
        });
        if (api.get("jwt")) {
            yield chrome.storage.sync.set({ token: api.get("jwt") });
        }
        if (api.get("email")) {
            yield chrome.storage.sync.set({ email: api.get("email") });
        }
    });
}
main();
const fetchNews = (articleLink) => __awaiter(void 0, void 0, void 0, function* () {
    const token = yield chrome.storage.sync.get(["token"]);
    const headline = getTitle();
    const content = extractBody();
    const news = {
        headline: headline,
        content: content,
    };
    try {
        const res1 = yield axiosInstance.post(backendURL + "/api/headlines/get-rhyming", {
            headline: news.headline,
            link: articleLink,
            override: false,
        }, {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token.token,
            },
        });
        if (res1.status === 401) {
            yield chrome.storage.sync.clear();
            window.location.reload();
        }
        const rhymingHeadline = res1.data;
        const res2 = yield axiosInstance.post(backendURL + "/api/bias", {
            content: news.content,
            link: articleLink,
        }, {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token.token,
            },
        });
        if (res2.status === 401) {
            yield chrome.storage.sync.clear();
            window.location.reload();
        }
        const biasSummary = res2.data;
        return {
            headline: news.headline,
            rhymingHeadline: rhymingHeadline,
            biasSummary: biasSummary,
            articleLink: articleLink,
        };
    }
    catch (error) {
        console.error(error);
        throw error;
    }
});
const uploadNews = (news) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = yield chrome.storage.sync.get(["token"]);
        const email = yield chrome.storage.sync.get(["email"]);
        const headers = {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token.token,
        };
        let res = yield axiosInstance.post(backendURL + "/api/mongodb/push-user-news", {
            headline: news.headline,
            rhyme: news.rhymingHeadline,
            bias: news.biasSummary,
            link: news.articleLink,
            email: email.email,
        }, { headers });
        if (res.status === 401) {
            yield chrome.storage.sync.clear();
            window.location.reload();
        }
        res = yield axiosInstance.post(backendURL + "/api/mongodb/push-news", {
            headline: news.headline,
            rhyme: news.rhymingHeadline,
            bias: news.biasSummary,
            link: news.articleLink,
        }, { headers });
        if (res.status === 401) {
            yield chrome.storage.sync.clear();
            window.location.reload();
        }
        res = yield axiosInstance.post(backendURL + "/api/pinecone/upsert", {
            headline: news.headline,
            rhyme: news.rhymingHeadline,
            link: news.articleLink,
        }, { headers });
        if (res.status === 401) {
            yield chrome.storage.sync.clear();
            window.location.reload();
        }
    }
    catch (err) {
        console.error(err);
    }
});

})();

/******/ })()
;