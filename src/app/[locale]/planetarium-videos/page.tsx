"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useTranslations } from "next-intl";

const ITEMS_PER_PAGE = 12;

const allCategories = [
  {
    id: 1,
    title: "scoops of milky way",
    img: "https://api.adgrouptech.com/images/services/0395c6ce8e1238abf44027dd534fcaf31683446343.webp",
    cover:
      "https://api.adgrouptech.com/images/services/56e4744bb54621dc49b5ec35f3edee9f1683446344.webp",
    video: "https://www.youtube.com/watch?v=emnp5-Rc4NE",
    year: "2014",
    duration: "20 mins",
    rating: "HR / Rulesome",
    subtitle: "The story of the supernova 7+ | 20 mins | HR / Rulesome",
    studio: "Rocket Jonuals Publications Films",
    subject: "The 1776 Lists",
    languages: "English, French",
    description:
      "This bright and colorful film tells the story of a star's life cycle: from its birth in gas dust nebulae to the end of life in the form of a black hole or a supernova star. All these phenomena are explained to the maximum extent possible and are accessible for both children and students.",
  },
  {
    id: 2,
    title: "A Tale of scale",
    img: "https://api.adgrouptech.com/images/services/6485a52dd282f688874a027b873e080d1683446496.webp",
    cover:
      "https://api.adgrouptech.com/images/services/6485a52dd282f688874a027b873e080d1683446496.webp",
    video: "https://www.youtube.com/watch?v=26b-ghmjR7U",
    year: "2015",
    duration: "18 mins",
    rating: "HR / Rulesome",
    subtitle: "The story of scale 7+ | 18 mins | HR / Rulesome",
    studio: "Space Films Studio",
    subject: "Scale & Universe",
    languages: "English, French",
    description:
      "A fascinating journey exploring the immense scale of our universe, from the smallest subatomic particles to the largest galactic structures known to science.",
  },
  {
    id: 3,
    title: "Astralis",
    img: "https://api.adgrouptech.com/images/services/c41d48ad67d67cc7025ae7169d4bcdac1683446622.webp",
    cover:
      "https://api.adgrouptech.com/images/services/52bb8d6fdd92282c825ad5ed260bef3f1683446622.webp",
    video: "https://www.youtube.com/watch?v=ND9T-rNx5E8",
    year: "2016",
    duration: "22 mins",
    rating: "HR / Rulesome",
    subtitle: "Astralis 7+ | 22 mins | HR / Rulesome",
    studio: "Stellar Productions",
    subject: "Stars & Galaxies",
    languages: "English, Spanish",
    description:
      "Astralis takes viewers on a breathtaking visual journey through star clusters, nebulae, and the birth of new solar systems across the Milky Way galaxy.",
  },
  {
    id: 4,
    title: "Bizarre Moons",
    img: "https://api.adgrouptech.com/images/services/afd3da21d1211a8e80982cc01aebfccb1683446878.webp",
    cover:
      "https://api.adgrouptech.com/images/services/3ce12fa555b579e4d4508758c8075dea1683446878.webp",
    video: "https://www.youtube.com/watch?v=ND9T-rNx5E8",
    year: "2017",
    duration: "25 mins",
    rating: "HR / Rulesome",
    subtitle: "Bizarre Moons 7+ | 25 mins | HR / Rulesome",
    studio: "Cosmic Films",
    subject: "Moons & Planets",
    languages: "English, French",
    description:
      "Discover the strangest moons in our solar system — from Europa's icy ocean to Titan's methane lakes — and what they might tell us about life beyond Earth.",
  },
  {
    id: 5,
    title: "Enigma",
    img: "https://api.adgrouptech.com/images/services/794e024d427889bb1fa5abec2b7dcee71683447585.webp",
    cover:
      "https://api.adgrouptech.com/images/services/32795c31ecf6dce1995d0f5bf43a7c171683447585.webp",
    video: "https://www.youtube.com/watch?v=y-bvynYNIb4",
    year: "2021",
    duration: "24 mins",
    rating: "HR / Rulesome",
    subtitle: "Enigma 7+ | 24 mins | HR / Rulesome",
    studio: "Mystery Films",
    subject: "Dark Matter",
    languages: "English, French",
    description:
      "Explore the deepest mysteries of the cosmos — dark matter, dark energy, and the unseen forces that shape the fate of the entire universe.",
  },
  {
    id: 6,
    title: "Incredible Introduction to the solar system",
    img: "https://api.adgrouptech.com/images/services/a669cb7750da5c74a41d3259519bc7ee1683447868.webp",
    cover:
      "https://api.adgrouptech.com/images/services/208689df74033c800b5e17ed4310688d1683447868.webp",
    video: "https://www.youtube.com/watch?v=PC2P4V5vSOo",
    year: "2019",
    duration: "28 mins",
    rating: "HR / Rulesome",
    subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
    studio: "NASA Education",
    subject: "Solar System",
    languages: "English, French",
    description:
      "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
  },
  {
    id: 7,
    title: "Map to the Chocolate Planet",
    img: "https://api.adgrouptech.com/images/services/25dcef550ca6f6fc52eea168615b083c1683448161.webp",
    cover:
      "https://api.adgrouptech.com/images/services/cadcca09d4393af675140cce9a2f85f91683448161.webp",
    video: "https://www.youtube.com/watch?v=TgCqlCg54Tk",
    year: "2020",
    duration: "20 mins",
    rating: "HR / Rulesome",
    subtitle: "New Horizons 7+ | 20 mins | HR / Rulesome",
    studio: "Deep Space Films",
    subject: "Space Exploration",
    languages: "English",
    description:
      "Follow the New Horizons spacecraft on its historic mission past Pluto and into the mysterious Kuiper Belt at the edge of our solar system.",
  },
  {
    id: 8,
    title: "Once upon The Big Bang",
    img: "https://api.adgrouptech.com/images/services/a2e004e4c7e63b8ef24dfbb1178dabe81683012375.webp",
    cover:
      "https://api.adgrouptech.com/images/services/32795c31ecf6dce1995d0f5bf43a7c171683447585.webp",
    video: "https://www.youtube.com/watch?v=eZ6IT-_uGu8",
    year: "2021",
    duration: "24 mins",
    rating: "HR / Rulesome",
    subtitle: "Enigma 7+ | 24 mins | HR / Rulesome",
    studio: "Mystery Films",
    subject: "Dark Matter",
    languages: "English, French",
    description:
      "Explore the deepest mysteries of the cosmos — dark matter, dark energy, and the unseen forces that shape the fate of the entire universe.",
  },
  {
    id: 9,
    title: "Pursuing the Dwarfs Script",
    img: "https://api.adgrouptech.com/images/services/f9358c2e33645cf1f7b5c4327e41109f1683012626.webp",
    cover:
      "https://api.adgrouptech.com/images/services/954e50b8f18c543c3939efc7f6b900fe1683012626.webp",
    video: "https://www.youtube.com/watch?v=PC2P4V5vSOo",
    year: "2019",
    duration: "28 mins",
    rating: "HR / Rulesome",
    subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
    studio: "NASA Education",
    subject: "Solar System",
    languages: "English, French",
    description:
      "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
  },
  {
    id: 10,
    title: "Cosmix",
    img: "https://api.adgrouptech.com/images/services/abb5da9d1f408f69584bf95f83d42e251683012735.webp",
    cover:
      "https://api.adgrouptech.com/images/services/2cc02a5e3d7b2e2b13ae77d24b7faab91683012735.webp",
    video: "https://www.youtube.com/watch?v=sIdvo0gUzfg",
    year: "2019",
    duration: "28 mins",
    rating: "HR / Rulesome",
    subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
    studio: "NASA Education",
    subject: "Solar System",
    languages: "English, French",
    description:
      "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
  },
  {
    id: 11,
    title: "Satelix",
    img: "https://api.adgrouptech.com/images/services/8ae46d0fd512927cf573a29d38556bce1683012912.webp",
    cover:
      "https://api.adgrouptech.com/images/services/4f819c5ad011d69da0163834a8c9da3f1683012912.webp",
    video: "https://www.youtube.com/watch?v=KoHFUZAuS_A",
    year: "2019",
    duration: "28 mins",
    rating: "HR / Rulesome",
    subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
    studio: "NASA Education",
    subject: "Solar System",
    languages: "English, French",
    description:
      "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
  },
  {
    id: 12,
    title: "Cosmonaute 360",
    img: "https://api.adgrouptech.com/images/services/c5e444cd4cdf75e4c7c851bc16e83edf1683013328.webp",
    cover:
      "https://api.adgrouptech.com/images/services/1fb547dd605bb3980b9715f1eae9998f1683013328.webp",
    video: "https://www.youtube.com/watch?v=5_a596Y4XY4",
    year: "2014",
    duration: "28 mins",
    rating: "HR / Rulesome",
    subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
    studio: "NASA Education",
    subject: "Solar System",
    languages: "English, French",
    description:
      "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
  },
  {
    id: 13,
    title: "5000 Eyes : Mapping the Universe with DESI",
    img: "https://api.adgrouptech.com/images/services/7e5fba3b02b768c4c6d140d55a48117a1697469394.webp",
    cover:
      "https://api.adgrouptech.com/images/services/e83dc3776aa55acf8670d0f4c505d9c91697469394.webp",
    video: "https://www.youtube.com/watch?v=GeggpUt4Dec&t=4s",
    year: "2014",
    duration: "28 mins",
    rating: "HR / Rulesome",
    subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
    studio: "NASA Education",
    subject: "Solar System",
    languages: "English, French",
    description:
      "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
  },
  {
    id: 14,
    title: "Audio Universe: Tour of the Solar System",
    img: "https://api.adgrouptech.com/images/services/71e8fbf6cbf197a104c925ddd25f7ed31697469829.webp",
    cover:
      "https://api.adgrouptech.com/images/services/751d76594be85a26b6b153482bc9025d1697469829.webp",
    video: "https://www.youtube.com/watch?v=C_sNaaTeyjY",
    year: "2014",
    duration: "28 mins",
    rating: "HR / Rulesome",
    subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
    studio: "NASA Education",
    subject: "Solar System",
    languages: "English, French",
    description:
      "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
  },
  {
    id: 15,
    title: "Climate Change in Our Backyard",
    img: "https://api.adgrouptech.com/images/services/2fe1295274d28df5b89121e1522fc0961697470214.webp",
    cover:
      "https://api.adgrouptech.com/images/services/98b8371e308b0497f38e7e4f1563cac41697470214.webp",
    video: "https://www.youtube.com/watch?v=rwF7e1El3IM",
    year: "2014",
    duration: "28 mins",
    rating: "HR / Rulesome",
    subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
    studio: "NASA Education",
    subject: "Solar System",
    languages: "English, French",
    description:
      "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
  },
  {
    id: 16,
    title: "Clockwork Skies",
    img: "https://api.adgrouptech.com/images/services/74e15cec46616ca5429e505a063af44b1697470683.webp",
    cover:
      "https://api.adgrouptech.com/images/services/e486fda911e33ef99eec93551ac4c8851697470683.webp",
    video: "https://www.youtube.com/watch?v=hckyhYG2FYU&t=1s",
    year: "2014",
    duration: "28 mins",
    rating: "HR / Rulesome",
    subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
    studio: "NASA Education",
    subject: "Solar System",
    languages: "English, French",
    description:
      "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
  },
  {
    id: 17,
    title: "Cosmic Castaways",
    img: "https://api.adgrouptech.com/images/services/732517129f5d7e5472701c60e76b4f111697471270.webp",
    cover:
      "https://api.adgrouptech.com/images/services/75b0350f5873616057be15be4ff868f61697471270.webp",
    video: "https://www.youtube.com/watch?v=4kHToAtcRu4",
    year: "2014",
    duration: "28 mins",
    rating: "HR / Rulesome",
    subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
    studio: "NASA Education",
    subject: "Solar System",
    languages: "English, French",
    description:
      "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
  },
  {
    id: 18,
    title: "Cosmic Mashups: Gravity, Galaxies and Supermassive Black Holes",
    img: "https://api.adgrouptech.com/images/services/ca0006b359f7ae8a7db53706801918151697471786.webp",
    cover:
      "https://api.adgrouptech.com/images/services/e31b262511b767260d6f82c33f854bf41697471786.webp",
    video: "https://www.youtube.com/watch?v=NeaEAw4FTiM",
    year: "2014",
    duration: "28 mins",
    rating: "HR / Rulesome",
    subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
    studio: "NASA Education",
    subject: "Solar System",
    languages: "English, French",
    description:
      "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
  },
  {
    id: 19,
    title: "Dark understanding dark matter",
    img: "https://api.adgrouptech.com/images/services/70cb607f57c3c078829dfbd769ac6f2c1697472789.webp",
    cover:
      "https://api.adgrouptech.com/images/services/b9faa0a13b53de214fd497a7ca9b48d01697472789.webp",
    video: "https://www.youtube.com/watch?v=za67A38pPdg",
    year: "2014",
    duration: "28 mins",
    rating: "HR / Rulesome",
    subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
    studio: "NASA Education",
    subject: "Solar System",
    languages: "English, French",
    description:
      "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
  },
  {
    id: 20,
    title: "Distant Worlds - Alien Life?",
    img: "https://api.adgrouptech.com/images/services/0d56563e4e3e04439bbbc7224e9275271697474688.webp",
    cover:
      "https://api.adgrouptech.com/images/services/39762c2079eee114d38d4d4ea1cca9c91697474688.webp",
    video: "https://www.youtube.com/watch?v=9Ft8pQBUanQ",
    year: "2014",
    duration: "28 mins",
    rating: "HR / Rulesome",
    subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
    studio: "NASA Education",
    subject: "Solar System",
    languages: "English, French",
    description:
      "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
  },
  {
    id: 21,
    title: "Eclipses and Phases of the Moon",
    img: "https://api.adgrouptech.com/images/services/bc6961bb2a5a1b9f32a9abcd497822b71697475558.webp",
    cover:
      "https://api.adgrouptech.com/images/services/7ef7217337119d62a543982eb0b2122c1697475558.webp",
    video: "https://www.youtube.com/shorts/o7BRUUUR148",
    year: "2014",
    duration: "28 mins",
    rating: "HR / Rulesome",
    subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
    studio: "NASA Education",
    subject: "Solar System",
    languages: "English, French",
    description:
      "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
  },
  {
    id: 22,
    title: "From Earth to the Universe",
    img: "https://api.adgrouptech.com/images/services/9e252a55316228ad0b869836423a556f1697475714.webp",
    cover:
      "https://api.adgrouptech.com/images/services/d9af1b0c735e037a48ff0895a426e0a61697475714.webp",
    video: "https://www.youtube.com/watch?v=gPwsX3P-xrc",
    year: "2014",
    duration: "28 mins",
    rating: "HR / Rulesome",
    subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
    studio: "NASA Education",
    subject: "Solar System",
    languages: "English, French",
    description:
      "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
  },
  {
    id: 23,
    title: "HERA - the Planetary Defense Mission by ESA",
    img: "https://api.adgrouptech.com/images/services/bc8a4ac3a5185bb75047cdcdd0e05c141697476626.webp",
    cover:
      "https://api.adgrouptech.com/images/services/63c28de3901a2ca3d14de7cc651740851697476627.webp",
    video: "https://www.youtube.com/watch?v=aWFCZeP-5Qc",
    year: "2014",
    duration: "28 mins",
    rating: "HR / Rulesome",
    subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
    studio: "NASA Education",
    subject: "Solar System",
    languages: "English, French",
    description:
      "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
  },
  {
    id: 24,
    title: "The Hot and Energetic Universe",
    img: "https://api.adgrouptech.com/images/services/bf872c71264bbd117b8f02b04a30434b1697476780.webp",
    cover:
      "https://api.adgrouptech.com/images/services/8fb5245753653676c9d14247959ccc2f1697476780.webp",
    video: "https://www.youtube.com/watch?v=fbT4o3-FRII",
    year: "2014",
    duration: "28 mins",
    rating: "HR / Rulesome",
    subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
    studio: "NASA Education",
    subject: "Solar System",
    languages: "English, French",
    description:
      "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
  },
    {
      id: 25,
      title: "IBEX: Search for the Edge of the Solar System",
      img: "https://api.adgrouptech.com/images/services/a35dd472145724c5da8b7a161d371f2f1697477066.webp",
      cover:
        "https://api.adgrouptech.com/images/services/83946bd692d0757392c701b88f5ffae41697477066.webp",
      video: "https://www.youtube.com/watch?v=YPLkFUrkeEs",
      year: "2014",
      duration: "28 mins",
      rating: "HR / Rulesome",
      subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
      studio: "NASA Education",
      subject: "Solar System",
      languages: "English, French",
      description:
        "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
    },
    {
      id: 26,
      title: "Journey to the Centre of the Milky Way",
      img: "https://api.adgrouptech.com/images/services/5f1f5f5392ce3f395bdf1c129a8db6451697477571.webp",
      cover:
        "https://api.adgrouptech.com/images/services/65e018c81c51eeac414c4daa92a9259a1697477571.webp",
      video: "https://www.youtube.com/watch?v=tm4YJkPWot0",
      year: "2014",
      duration: "28 mins",
      rating: "HR / Rulesome",
      subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
      studio: "NASA Education",
      subject: "Solar System",
      languages: "English, French",
      description:
        "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
    },
    {
      id: 27,
      title: "Losing the Dark",
      img: "https://api.adgrouptech.com/images/services/9859e584aae69b544a1e64af0d3018b91697477663.webp",
      cover:
        "https://api.adgrouptech.com/images/services/b1831c5a2423d41eaf42afc4a911653d1697477663.webp",
      video: "https://www.youtube.com/watch?v=UNGlOkPKwIQ",
      year: "2014",
      duration: "28 mins",
      rating: "HR / Rulesome",
      subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
      studio: "NASA Education",
      subject: "Solar System",
      languages: "English, French",
      description:
        "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
    },
    {
      id: 28,
      title: "Mayan Archeoastronomy: Observers of the Universe",
      img: "https://api.adgrouptech.com/images/services/62850064a6eb0426a355435e778dae921697479699.webp",
      cover:
        "https://api.adgrouptech.com/images/services/3b002c321009ad616b65e349fc9ae7fb1697479699.webp",
      video: "https://www.youtube.com/watch?v=rpqTa994CrM",
      year: "2014",
      duration: "28 mins",
      rating: "HR / Rulesome",
      subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
      studio: "NASA Education",
      subject: "Solar System",
      languages: "English, French",
      description:
        "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
    },
    {
      id: 29,
      title: "Mexica Archaeoastronomy: Between Space and Time",
      img: "https://api.adgrouptech.com/images/services/5d9cc0fa871e7046c1e697b0ee8654f11697479988.webp",
      cover:
        "https://api.adgrouptech.com/images/services/b8acb1d2b61a51303acd67fa9cbc31441697479988.webp",
      video: "https://www.youtube.com/",
      year: "2014",
      duration: "28 mins",
      rating: "HR / Rulesome",
      subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
      studio: "NASA Education",
      subject: "Solar System",
      languages: "English, French",
      description:
        "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
    },
    {
      id: 30,
      title: "NASA’s Journey to Mars",
      img: "https://api.adgrouptech.com/images/services/a26bb874f787608247b871ccc252266a1697480126.webp",
      cover:
        "https://api.adgrouptech.com/images/services/258a27f77f6a6ccaaa78c303256aca7c1697480126.webp",
      video: "https://www.youtube.com/watch?v=dOOHJrqIJqY",
      year: "2014",
      duration: "28 mins",
      rating: "HR / Rulesome",
      subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
      studio: "NASA Education",
      subject: "Solar System",
      languages: "English, French",
      description:
        "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
    },
    {
      id: 31,
      title: "New Horizons",
      img: "https://api.adgrouptech.com/images/services/01e20ac84465edacaea661da45c6a5361697480323.webp",
      cover:
        "https://api.adgrouptech.com/images/services/980e686dea90e5f554273f658e5a728b1697480323.webp",
      video: "https://www.youtube.com/watch?v=r3Rjsi0lWHw",
      year: "2014",
      duration: "28 mins",
      rating: "HR / Rulesome",
      subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
      studio: "NASA Education",
      subject: "Solar System",
      languages: "English, French",
      description:
        "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
    },
    {
      id: 32,
      title: "One Sky Project",
      img: "https://api.adgrouptech.com/images/services/3f536081b14ca3f438845dc59ab0428c1697480431.webp",
      cover:
        "https://api.adgrouptech.com/images/services/3b322dfe291d37d641f91c014e2647591697480431.webp",
      video: "https://www.youtube.com/watch?v=QOYjGtWZNJ4",
      year: "2014",
      duration: "28 mins",
      rating: "HR / Rulesome",
      subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
      studio: "NASA Education",
      subject: "Solar System",
      languages: "English, French",
      description:
        "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
    },
    {
      id: 33,
      title: "Out There: The Quest for Extrasolar Worlds",
      img: "https://api.adgrouptech.com/images/services/7bf26779416a794dcb8cbca1481906521697480569.webp",
      cover:
        "https://api.adgrouptech.com/images/services/7ef2bc3e37e6e87e708434bf749a0c3d1697480569.webp",
      video: "https://www.youtube.com/watch?v=lxhxcqBK5Ok",
      year: "2014",
      duration: "28 mins",
      rating: "HR / Rulesome",
      subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
      studio: "NASA Education",
      subject: "Solar System",
      languages: "English, French",
      description:
        "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
    },
    {
      id: 34,
      title: "SEEING! - A Photon’s Journey Across Space, Time & Mind",
      img: "https://api.adgrouptech.com/images/services/07b591cd985de7ab2f11aaddf87bd7331697480769.webp",
      cover:
        "https://api.adgrouptech.com/images/services/9835bbdd7f465ec03c30f24b2ec8302e1697480769.webp",
      video: "https://www.youtube.com/watch?v=ijGyynKnj6s",
      year: "2014",
      duration: "28 mins",
      rating: "HR / Rulesome",
      subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
      studio: "NASA Education",
      subject: "Solar System",
      languages: "English, French",
      description:
        "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
    },
    {
      id: 35,
      title: "The Incredible Sun",
      img: "https://api.adgrouptech.com/images/services/57fc4f2b9a7823ff95534f346277af291683046485.webp",
      cover:
        "https://api.adgrouptech.com/images/services/9835bbdd7f465ec03c30f24b2ec8302e1697480769.webp",
      video: "https://www.youtube.com/watch?v=ijGyynKnj6s",
      year: "2014",
      duration: "28 mins",
      rating: "HR / Rulesome",
      subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
      studio: "NASA Education",
      subject: "Solar System",
      languages: "English, French",
      description:
        "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
    },
    {
      id: 36,
      title: "Shining Light on the Stars - the Hertzsprung-Russell Diagram",
      img: "https://api.adgrouptech.com/images/services/545815e0cdccf010ea74c0de0dff0e321697480869.webp",
      cover:
        "https://api.adgrouptech.com/images/services/0eeb4c9a8f625ebe4ce57373e82171bd1697480869.webp",
      video: "https://www.youtube.com/",
      year: "2014",
      duration: "28 mins",
      rating: "HR / Rulesome",
      subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
      studio: "NASA Education",
      subject: "Solar System",
      languages: "English, French",
      description:
        "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
    },
    {
      id: 37,
      title: "Sizing Up Space",
      img: "https://api.adgrouptech.com/images/services/2b39b0d961728ae7fe262bb2560449b71697481110.webp",
      cover:
        "https://api.adgrouptech.com/images/services/52a742428b2ad4a03faa1cdd507cef671697481110.webp",
      video: "https://www.youtube.com/watch?v=o-X-WKSkGR0",
      year: "2014",
      duration: "28 mins",
      rating: "HR / Rulesome",
      subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
      studio: "NASA Education",
      subject: "Solar System",
      languages: "English, French",
      description:
        "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
    },
    {
      id: 38,
      title: "Space Shapes",
      img: "https://api.adgrouptech.com/images/services/e0211eb6ed2d9293b5c70b20b199eff71697481193.webp",
      cover:
        "https://api.adgrouptech.com/images/services/5200b51a588eeb6372eb70e250a281a91697481193.webp",
      video: "https://www.youtube.com/watch?v=bfcpCnk4REU",
      year: "2014",
      duration: "28 mins",
      rating: "HR / Rulesome",
      subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
      studio: "NASA Education",
      subject: "Solar System",
      languages: "English, French",
      description:
        "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
    },
    {
      id: 39,
      title: "Sun Struck",
      img: "https://api.adgrouptech.com/images/services/f05f4f96e913854a4c9d81a72722866f1697482137.webp",
      cover:
        "https://api.adgrouptech.com/images/services/5200b51a588eeb6372eb70e250a281a91697481193.webp",
      video: "https://www.youtube.com/watch?v=OYtaEb7yjw8",
      year: "2014",
      duration: "28 mins",
      rating: "HR / Rulesome",
      subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
      studio: "NASA Education",
      subject: "Solar System",
      languages: "English, French",
      description:
        "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
    },
    {
      id: 40,
      title: "Ted's Space Adventure",
      img: "https://api.adgrouptech.com/images/services/500e31e11d8e8d641d8e3371c4d4eb491697482242.webp",
      cover:
        "https://api.adgrouptech.com/images/services/3a184bb690bdd98e62695e79ce3d9b531697482242.webp",
      video: "https://www.youtube.com/watch?v=WgtTRiKJeQc",
      year: "2014",
      duration: "28 mins",
      rating: "HR / Rulesome",
      subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
      studio: "NASA Education",
      subject: "Solar System",
      languages: "English, French",
      description:
        "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
    },
    {
      id: 41,
      title: "The Race to Earth",
      img: "https://api.adgrouptech.com/images/services/cc2a7c2e099d832b65879bbe7bea71531697482353.webp",
      cover:
        "https://api.adgrouptech.com/images/services/3a184bb690bdd98e62695e79ce3d9b531697482242.webp",
      video: "https://www.youtube.com/watch?v=XncSEwRxHtQ",
      year: "2014",
      duration: "28 mins",
      rating: "HR / Rulesome",
      subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
      studio: "NASA Education",
      subject: "Solar System",
      languages: "English, French",
      description:
        "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
    },
    {
      id: 42,
      title: "The Sun Our Living Star",
      img: "https://api.adgrouptech.com/images/services/52c4563df0bb68bb74f685c4890e74e91697482535.webp",
      cover:
        "https://api.adgrouptech.com/images/services/dba5b384f3b9cfa5b2f045bbc2dfff4e1697482535.webp",
      video: "https://www.youtube.com/watch?v=MC3qNQMIfx4",
      year: "2014",
      duration: "28 mins",
      rating: "HR / Rulesome",
      subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
      studio: "NASA Education",
      subject: "Solar System",
      languages: "English, French",
      description:
        "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
    },
    {
      id: 43,
      title: "World OF Curiosity",
      img: "https://api.adgrouptech.com/images/services/20ad35dc2fecf5fd9305fafa4741ae3e1697531983.webp",
      cover:
        "https://api.adgrouptech.com/images/services/e65f2aaa28b44aba2a6a01c2182602b41697531983.webp",
      video: "https://www.youtube.com/watch?v=ToQrwyopihM&t",
      year: "2014",
      duration: "28 mins",
      rating: "HR / Rulesome",
      subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
      studio: "NASA Education",
      subject: "Solar System",
      languages: "English, French",
      description:
        "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
    },
    {
      id: 44,
      title: "SIDA TSOATSOAS, Our Beginning",
      img: "https://api.adgrouptech.com/images/services/d97cd6cac589c3b74c43238fd660b69b1697532998.webp",
      cover:
        "https://api.adgrouptech.com/images/services/e65f2aaa28b44aba2a6a01c2182602b41697531983.webp",
      video: "https://www.youtube.com/watch?v=aZTSSSzrD_s",
      year: "2014",
      duration: "28 mins",
      rating: "HR / Rulesome",
      subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
      studio: "NASA Education",
      subject: "Solar System",
      languages: "English, French",
      description:
        "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
    },
    {
      id: 45,
      title: "Two Small Pieces of Glass",
      img: "https://api.adgrouptech.com/images/services/abf6959c3592614b3478f9014560ae751698103888.webp",
      cover:
        "https://api.adgrouptech.com/images/services/8b18ba4e1ad6f4012cd260e582ec5a701698103888.webp",
      video: "https://www.youtube.com/watch?v=38DZVfWTXoo",
      year: "2014",
      duration: "28 mins",
      rating: "HR / Rulesome",
      subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
      studio: "NASA Education",
      subject: "Solar System",
      languages: "English, French",
      description:
        "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
    },
    {
      id: 46,
      title: "Unveiling the Invisible Universe",
      img: "https://api.adgrouptech.com/images/services/74d7f8c363dda07d39390c9a305e2a651698103940.webp",
      cover:
        "https://api.adgrouptech.com/images/services/6449346da619c8c011042cc2a64b1fb51698103940.webp",
      video: "https://www.youtube.com/watch?v=58zioCtblAI&t",
      year: "2014",
      duration: "28 mins",
      rating: "HR / Rulesome",
      subtitle: "Solar System 7+ | 28 mins | HR / Rulesome",
      studio: "NASA Education",
      subject: "Solar System",
      languages: "English, French",
      description:
        "An incredible guided tour of our solar system — from the scorching surface of Mercury to the icy reaches of Pluto and beyond the Kuiper Belt.",
    },
];

export default function Videos() {
  const t = useTranslations('planet_videos');
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState(allCategories[0]);

  const filtered = allCategories.filter((cat) =>
    cat.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handleCategoryClick = (cat: (typeof allCategories)[0]) => {
    setActiveCategory(cat);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const openVideo = () => {
    window.open(activeCategory.video, "_blank");
  };

  return (
    <div
      className="min-h-screen bg-[#f7f8fa]"
      style={{ fontFamily: "'Segoe UI', Arial, sans-serif" }}
    >
      {/* ── Hero Section ── */}
      <section className="relative h-screen overflow-hidden">
        {/* Background */}
        <img
          src={activeCategory.cover}
          alt={activeCategory.title}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src = activeCategory.img;
          }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/10" />

        {/* Content */}
        <div className="relative h-full max-w-[1200px] mx-auto px-8 flex items-center">
          <div className="max-w-[580px] text-white">
            <p className="text-[25px] text-gray-300 mb-2.5">
              {activeCategory.subtitle}
            </p>

            <h1 className="text-[42px] font-extrabold mb-4 leading-tight tracking-tight">
              {activeCategory.title}{" "}
              <span className="font-normal text-[32px] text-gray-300">
                ({activeCategory.year})
              </span>
            </h1>

            <p className="text-lg leading-relaxed text-gray-200 mb-6 max-w-[520px]">
              {activeCategory.description}
            </p>

            <div className="flex gap-10 mb-7">
              <div>
                <p className="text-[11px] text-gray-400 mb-1 uppercase tracking-wide">
                  {t('hero.mainInfo')}
                </p>
                <p className="text-gray-300">{activeCategory.studio}</p>
                <p className="text-gray-300">{activeCategory.subject}</p>
              </div>
              <div>
                <p className="text-[11px] text-gray-400 mb-1 uppercase tracking-wide">
                  {t('hero.languages')}
                </p>
                <p className="text-gray-300">{activeCategory.languages}</p>
              </div>
            </div>

            <button
              onClick={openVideo}
              className="inline-flex mt-10 items-center px-6 py-3 rounded-xl text-white text-lg font-medium bg-gradient-to-r from-[#A88EEF] to-[#79B9CE] shadow-lg hover:opacity-90 transition"
            >
              <Play size={16} fill="white" className="mr-2" />
              {t('hero.startWatching')}
            </button>
          </div>
        </div>
      </section>

      {/* ── Catalogue Section ── */}
      <section className="py-[60px]">
        <div className="max-w-[1100px] mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-3">
            <h2 className="text-3xl font-bold text-gray-900 mt-20">
              {t('catalogue.title')}
            </h2>
            <p className="text-gray-500 text-sm mt-1.5">
              {t('catalogue.subtitle')}
            </p>
          </div>

          {/* Search */}
          <div className="flex justify-center mb-10">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder={t('catalogue.searchPlaceholder')}
                value={searchQuery}
                onChange={handleSearchChange}
                className="pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm outline-none w-full bg-white text-gray-700 shadow-sm focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition"
              />
            </div>
          </div>

          {/* Grid */}
          {paginated.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              {t('catalogue.noResults', { query: searchQuery })}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-start">
              {paginated.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category)}
                  className="group text-left p-0 bg-transparent border-none outline-none cursor-pointer"
                >
                  {/* Card image — portrait 3:4 */}
           <div
  className="relative w-full overflow-hidden rounded-2xl bg-black"
  style={{ aspectRatio: "3 / 4" }}
>
                    <Image
                      src={category.img}
                      alt={category.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="w-full h-screen transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          `https://placehold.co/400x530/dde1ea/9ca3af?text=${encodeURIComponent(category.title)}`;
                      }}
                    />
                  </div>

                  {/* Title */}
                  <h2 className="mt-3 text-sm font-normal text-gray-800 leading-snug px-0.5">
                    {category.title}
                  </h2>
                </button>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-14 mb-16">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={18} />
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`
                    w-10 h-10 rounded-lg font-medium transition-colors
                    ${
                      currentPage === i + 1
                        ? "bg-purple-500 text-white"
                        : "border border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
                    }
                  `}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
