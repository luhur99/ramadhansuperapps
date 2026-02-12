
import React from 'react';
import { Feature, Testimonial, FAQ, ContentItem } from './types';
import { CONFIG } from './config';

export const problems: ContentItem[] = [
  {
    title: "Anak Bingung Mau Ngapain?",
    text: "Bunda sering merasa bersalah kalau si kecil cuma main gadget atau nonton YouTube seharian selama bulan puasa?",
    icon: "😔"
  },
  {
    title: "Ibadah Masih Harus Disuruh-suruh?",
    text: "Capek banget ya Bun kalau setiap mau sholat atau ngaji harus 'drama' dulu? Padahal pengennya anak sadar sendiri.",
    icon: "😤"
  },
  {
    title: "Ramadhan Lewat Begitu Saja?",
    text: "Sayang banget kalau bulan penuh berkah ini cuma jadi bulan 'lapar' buat anak tanpa ada nilai keteladanan yang masuk ke hati mereka.",
    icon: "🥀"
  }
];

export const solutions: ContentItem[] = [
  {
    title: "Ibadah Jadi Seru!",
    text: "Ubah mindset anak bahwa ibadah itu bukan beban, tapi tantangan seru yang bisa mereka tracking sendiri progresnya.",
    icon: "✨"
  },
  {
    title: "Kisah Teladan Visual",
    text: "Dukung perkembangan moral anak dengan kisah-kisah Islami yang didesain menarik secara visual dan audio.",
    icon: "📖"
  },
  {
    title: "Quality Time Keluarga",
    text: "Bunda nggak perlu bingung cari bahan main, karena ada fitur kuis yang bisa dimainkan bareng ayah dan saudara.",
    icon: "👨‍👩‍👧‍👦"
  }
];

export const features: Feature[] = [
  {
    id: "tracker",
    title: "Ibadah Tracker",
    description: "Pencatat target ibadah si kecil mulai dari sholat wajib, sunnah, hingga bacaan Quran. Dilengkapi jadwal sholat, imsak, dan buka puasa. Pantau evaluasinya dengan mudah!",
    image: CONFIG.images.features.tracker
  },
  {
    id: "story",
    title: "Ramadhan Kids Story",
    description: "Berisi 17 kisah tauladan Islami dengan gambar menarik dan fitur suara. Biarkan si kecil mendengarkan kisah inspiratif yang membuat Ramadhan makin bermakna.",
    image: CONFIG.images.features.story
  },
  {
    id: "journal",
    title: "Jurnal Ramadhan Ceria",
    description: "Bikin si kecil semangat! Bunda bisa buat target hadiah dan pencatatan yang dipersonalisasi. Ada kumpulan hadis dan ayat Al-Quran penyemangat juga lho!",
    image: CONFIG.images.features.journal
  },
  {
    id: "quiz",
    title: "Kuis Ramadhan",
    description: "Seru-seruan bareng keluarga! Kuis interaktif yang bisa dimainkan bareng Ayah, Bunda, Kakak, dan Adik untuk menguji pengetahuan seputar Islam.",
    image: CONFIG.images.features.quiz
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Bunda Sarah",
    role: "Ibu Rumah Tangga, 32th",
    content: "Awalnya bingung gimana ngajak si kakak puasa tahun ini. Pas nyoba aplikasi ini, dia malah yang nagih pengen centang Ibadah Tracker-nya. Makasih Ramadhan.Top!",
    avatar: "https://picsum.photos/100/100?random=11",
    verified: true
  },
  {
    name: "Bunda Maya",
    role: "Homeschooling Mom, 35th",
    content: "Fitur Kids Story-nya juara! Gambarnya bagus dan ada suaranya, jadi anak saya yang belum lancar baca pun bisa menikmati ceritanya sendiri.",
    avatar: "https://picsum.photos/100/100?random=12",
    verified: true
  },
  {
    name: "Bunda Fitri",
    role: "Working Mom, 38th",
    content: "Sangat membantu buat saya yang sibuk tapi pengen tetep pantau ibadah anak. Jurnal Ramadhan Ceria bener-bener bikin anak saya termotivasi kejar target.",
    avatar: "https://picsum.photos/100/100?random=13",
    verified: true
  }
];

export const faqs: FAQ[] = [
  {
    question: "Apakah aplikasi ini bisa diakses selamanya?",
    answer: "Betul sekali, Bun! Sekali beli, Bunda bisa akses semua fiturnya selamanya tanpa biaya bulanan lagi."
  },
  {
    question: "Bisa dipakai untuk berapa anak?",
    answer: "Aplikasi ini didesain agar bisa digunakan untuk satu akun keluarga, namun Bunda bisa menyesuaikan target untuk masing-masing anak secara bergantian."
  },
  {
    question: "Apakah perlu koneksi internet terus?",
    answer: "Beberapa fitur memerlukan internet untuk loading awal, namun setelah itu bisa diakses dengan lebih ringan. Sangat hemat kuota!"
  }
];
