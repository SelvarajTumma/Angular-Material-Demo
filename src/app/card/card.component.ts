import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  products:any=[
    {
      "_id": "61b37cd68139c4b3728935ab",
      "product_id": "EEL000",
      "product_name": "Lenovo Chromebook Flex 3 11 Laptop, 11.6-Inch HD (1366 x 768) IPS Display, MediaTek MT8173C Processor, 4GB LPDDR3, 64 GB eMMC, Chrome OS, 82HG0006US, Blizzard White",
      "color": "Blizzard White",
      "brand": "Lenovo",
      "product_category": "Electronics",
      "price": 23000,
      "product_subCategory": "Laptops",
      "quantity": 199,
      "product_image": "https://rukminim1.flixcart.com/image/416/416/kt39jm80/computer/z/9/w/na-2-in-1-laptop-lenovo-original-imag6ggmgpafwrwn.jpeg?q=70",
      "__v": 0
  },
  {
      "_id": "61b37cd68139c4b3728935ac",
      "product_id": "EEL001",
      "product_name": "Lenovo Ideapad Slim3 Core i3 11th Gen - (8 GB/256 GB SSD/Windows 10 Home) 14 ITL 6 Thin and Light Laptop  (14 Inch, Arctic Grey, 1.41 KG, With MS Office)",
      "color": "Arctic Grey",
      "brand": "lenovo",
      "product_category": "Electronics",
      "price": 42990,
      "product_subCategory": "Laptops",
      "quantity": 97,
      "product_image": "https://rukminim1.flixcart.com/image/416/416/kpvivm80/computer/o/z/d/na-thin-and-light-laptop-lenovo-original-imag4yhhhzdgghca.jpeg?q=70",
      "__v": 0
  },
  {
      "_id": "61b37cd68139c4b3728935ad",
      "product_id": "EEL002",
      "product_name": "ASUS Ryzen 3 Dual Core 3250U 3rd Gen - (8 GB/256 GB SSD/Windows 10 Home) M515DA-BQ322TS Thin and Light Laptop  (15.6 inch, Transparent Silver, 1.80 kg, With MS Office)",
      "color": "Transparent Silver",
      "brand": "Asus",
      "product_category": "Electronics",
      "price": 36990,
      "product_subCategory": "Laptops",
      "quantity": 150,
      "product_image": "https://rukminim1.flixcart.com/image/416/416/ku4ezrk0/computer/y/v/b/na-thin-and-light-laptop-asus-original-imag7bh52qsvjgqh.jpeg?q=70",
      "__v": 0
  },
  {
      "_id": "61b37cd68139c4b3728935b0",
      "product_id": "EEL005",
      "product_name": "HP Pavilion Core i5 11th Gen - (16 GB/512 GB SSD/Windows 10 Home) 14-dv0054TU Thin and Light Laptop  (14 inch, Natural Silver, 1.41 kg, With MS Office)",
      "color": "Natural Silver",
      "brand": "Hp",
      "product_category": "Electronics",
      "price": 66990,
      "product_subCategory": "Laptops",
      "quantity": 150,
      "product_image": "https://rukminim1.flixcart.com/image/416/416/kl9rssw0/computer/v/n/e/hp-original-imagyfmhb29hsg6g.jpeg?q=70",
      "__v": 0
  },
  {
      "_id": "61b37cd68139c4b3728935ae",
      "product_id": "EEL003",
      "product_name": "acer Aspire 7 Core i5 10th Gen - (8 GB/512 GB SSD/Windows 10 Home/4 GB Graphics/NVIDIA GeForce GTX 1650) A715-75G-50TA/ A715-75G-41G Gaming Laptop  (15.6 inch, Black, 2.15 Kg)",
      "color": "Black",
      "brand": "Asus",
      "product_category": "Electronics",
      "price": 52990,
      "product_subCategory": "Laptops",
      "quantity": 148,
      "product_image": "https://rukminim1.flixcart.com/image/416/416/kp1imq80/computer/u/b/z/na-gaming-laptop-acer-original-imag3d63hk3h8nm2.jpeg?q=70",
      "__v": 0
  },
  {
      "_id": "61b37cd68139c4b3728935af",
      "product_id": "EEL004",
      "product_name": "HP Ryzen 3 Dual Core 3250U - (8 GB/256 GB SSD/Windows 10 Home) 15s-GY0501AU Thin and Light Laptop  (15.6 inch, Natural Silver, 1.69 kg, With MS Office)",
      "color": "Natural Silver",
      "brand": "Hp",
      "product_category": "Electronics",
      "price": 40490,
      "product_subCategory": "Laptops",
      "quantity": 150,
      "product_image": "https://rukminim1.flixcart.com/image/416/416/ktaeqvk0/computer/b/7/4/15s-gy0501au-thin-and-light-laptop-hp-original-imag6z6muntqnzzc.jpeg?q=70",
      "__v": 0
  },
  {
      "_id": "61b37cd68139c4b3728935b3",
      "product_id": "EEL008",
      "product_name": "MSI GF63 Thin Core i7 10th Gen - (16 GB/512 GB SSD/Windows 10 Home/4 GB Graphics/NVIDIA GeForce RTX 3050/144 Hz) GF63 Thin 10UC-606IN Gaming Laptop  (15.6 inch, Black, 1.86 kg)",
      "color": "Black",
      "brand": "Msi",
      "product_category": "Electronics",
      "price": 78990,
      "product_subCategory": "Laptops",
      "quantity": 150,
      "product_image": "https://rukminim1.flixcart.com/image/416/416/ktlu9ow0/computer/6/d/f/gf63-thin-10uc-606in-gaming-laptop-msi-original-imag6xfufgkdahu8.jpeg?q=70",
      "__v": 0
  },
  {
      "_id": "61b37cd68139c4b3728935b4",
      "product_id": "EEL009",
      "product_name": "ASUS VivoBook Ultra 14 Core i3 10th Gen - (4 GB/512 GB SSD/Windows 10 Home) X413JA-EK267T||X413JA-EB302T Thin and Light Laptop  (14 inch, Bespoke Black, 1.40 kg)",
      "color": "Bespoke Black",
      "brand": "Asus",
      "product_category": "Electronics",
      "price": 38990,
      "product_subCategory": "Laptops",
      "quantity": 150,
      "product_image": "https://rukminim1.flixcart.com/image/416/416/ku4ezrk0/computer/f/n/g/na-thin-and-light-laptop-asus-original-imag7bh6qmjxyqyt.jpeg?q=70",
      "__v": 0
  },
  {
    "_id": "61d31d499b3121969e655f92",
    "product_id": "BPP005",
    "product_name": "Nestle Cerelac Wheat Apple Cherry Cereal  (300 g, 8+ Months)",
    "color": "brown",
    "brand": "Nestle",
    "product_category": "baby essentials",
    "price": 230,
    "product_subCategory": "baby products",
    "quantity": 40,
    "product_image": "https://rukminim1.flixcart.com/image/416/416/k8t3jbk0/baby-cereal/h/x/e/300-wheat-apple-cherry-nestle-cerelac-original-imafqqqgzx5gbndp.jpeg?q=70",
    "__v": 0
},
{
    "_id": "61d31d499b3121969e655f91",
    "product_id": "BPP004",
    "product_name": "Timios Baby Cereal with Milk, Rice& Apple- From 6+Months|Insant and Healthy Food For Babies|300gm Cereal  (300 g, 6+ Months)",
    "color": "cereals",
    "brand": "Timios",
    "product_category": "baby essentials",
    "price": 370,
    "product_subCategory": "baby products",
    "quantity": 65,
    "product_image": "https://rukminim1.flixcart.com/image/416/416/kox8b680/baby-cereal/o/z/a/300-baby-cereal-with-milk-rice-apple-from-6-months-insant-and-original-imag39uuaykhtpvs.jpeg?q=70",
    "__v": 0
},
{
    "_id": "61d31d499b3121969e655f90",
    "product_id": "BPP003",
    "product_name": "Nestle Ceregrow Multi Grain Cereal with Milk & Fruits (3-6 Years ) Cereal  (300 g, 24+ Months)",
    "color": "white",
    "brand": "Nestle",
    "product_category": "baby essentials",
    "price": 400,
    "product_subCategory": "baby products",
    "quantity": 35,
    "product_image": "https://rukminim1.flixcart.com/image/416/416/ktg4ia80/baby-cereal/m/d/z/multi-grain-cereal-with-milk-fruits-nestle-ceregrow-original-imag6sbdyepxnyhg.jpeg?q=70",
    "__v": 0
},
{
    "_id": "61d31d499b3121969e655f94",
    "product_id": "BPP007",
    "product_name": "DEXOLAC Stage 2 Follow Up infant milk formula Powder for Babies  (400 g, 6+ Months)",
    "color": "white",
    "brand": "dexolic",
    "product_category": "baby essentials",
    "price": 320,
    "product_subCategory": "baby products",
    "quantity": 60,
    "product_image": "https://rukminim1.flixcart.com/image/416/416/kt1u3rk0/infant-formula/f/w/i/stage-2-follow-up-infant-milk-formula-powder-for-babies-dexolac-original-imag6hpgpcavhptk.jpeg?q=70",
    "__v": 0
},
{
    "_id": "61d31d499b3121969e655f95",
    "product_id": "BPP008",
    "product_name": "Timios Baby Cereal with Milk, Multigrain-Veg from 8+Months| Instant and Healthy Food for Babies",
    "color": "cereal",
    "brand": "Timios",
    "product_category": "baby essentials",
    "price": 3800,
    "product_subCategory": "baby products",
    "quantity": 45,
    "product_image": "https://rukminim1.flixcart.com/image/416/416/kr58yvk0/baby-cereal/4/d/k/300-baby-cereal-with-milk-multigrain-veg-from-8-months-instant-original-imag5ye5wuvzypff.jpeg?q=70",
    "__v": 0
},
{
    "_id": "61d31d499b3121969e655f96",
    "product_id": "BPP009",
    "product_name": "Nestle Lactogen Follow-up-Formula (Stage 4)  (400 g, 18+ Months)",
    "color": "brown",
    "brand": "Nestle",
    "product_category": "baby essentials",
    "price": 320,
    "product_subCategory": "baby products",
    "quantity": 90,
    "product_image": "https://rukminim1.flixcart.com/image/416/416/k8ro3gw0/infant-formula/z/v/d/400-follow-up-formula-stage-4-nestle-lactogen-original-imafqpjqqyhcvfba.jpeg?q=70",
    "__v": 0
},
{
  "_id": "61d31d4a9b3121969e656084",
  "product_id": "SSB015",
  "product_name": "VICKY Smash Bird Racquet Combo Badminton Kit",
  "color": "Black",
  "brand": "Vicky",
  "product_category": "Sports",
  "price": 5200,
  "product_subCategory": "badminton",
  "quantity": 20,
  "product_image": "https://rukminim1.flixcart.com/image/416/416/kflftzk0/kit/f/x/r/smash-bird-racquet-combo-na-vicky-original-imafwyyy9xxm9nz3.jpeg?q=70",
  "__v": 0
},
{
  "_id": "61d31d4a9b3121969e656085",
  "product_id": "SSB016",
  "product_name": "HRX Carbon Edge 1000 Red, Black Strung Badminton Racquet  (Pack of: 1, 82 g)",
  "color": "Black",
  "brand": "Hrx",
  "product_category": "Sports",
  "price": 990,
  "product_subCategory": "badminton",
  "quantity": 90,
  "product_image": "https://rukminim1.flixcart.com/image/416/416/ks7tuvk0/racquet/e/b/1/g3-8-89-cm-strung-carbon-edge-1000-1-hrxce1000-90-badminton-original-imag5uyqm2juyc4k.jpeg?q=70",
  "__v": 0
},
{
  "_id": "61d31d4a9b3121969e65607f",
  "product_id": "SSB010",
  "product_name": "JOJOMART Badminton Set Of 2 Piece Racquet with 6 Piece Plastic Shuttle Badminton Kit",
  "color": "Black",
  "brand": "Strung",
  "product_category": "Sports",
  "price": 395,
  "product_subCategory": "badminton",
  "quantity": 70,
  "product_image": "https://rukminim1.flixcart.com/image/416/416/kqse07k0/kit/h/h/x/badminton-set-of-2-piece-racquet-with-6-piece-plastic-shuttle-original-imag4pwdq78rzqgx.jpeg?q=70",
  "__v": 0
},
{
  "_id": "61d31d4a9b3121969e656082",
  "product_id": "SSB013",
  "product_name": "apacs Graphite 999 (Full Graphite, 30 LBS) Black, Green Strung Badminton Racquet  (Pack of: 1, 84 g)",
  "color": "Black",
  "brand": "apacs",
  "product_category": "Sports",
  "price": 1080,
  "product_subCategory": "badminton",
  "quantity": 55,
  "product_image": "https://rukminim1.flixcart.com/image/416/416/kv2pk7k0/racquet/3/a/d/g4-3-25-inches-graphite-999-full-graphite-30-lbs-strung-1-original-imag8fs44nfgbzhc.jpeg?q=70",
  "__v": 0
}
  ];
  constructor() { }

  ngOnInit() {
    this.truncate()
  }
  truncate(){
    for(let i=0;i<this.products.length;i++){
      let n=50;
      if(this.products[i].product_name.length <n ){
        continue
      }
      else{
        this.products[i].product_name=this.products[i].product_name.substr(0,n)+"...";
      }
    }
  }
}
