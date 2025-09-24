<template>
  <v-container fluid class="pa-0 main-container">

    <!-- 言語切替プルダウン -->
    <v-row justify="end" class="ma-2">
      <v-col cols="auto">
        <v-select
          v-model="language"
          :items="languages"
          label="Language"
          dense
          outlined
        ></v-select>
      </v-col>
    </v-row>

    <v-btn text to="/tomorrowView" tag="router-link" class="search">Search</v-btn>


    <v-row justify="center" class="ma-0 pa-0">
      <v-col cols="12" class="text-center mb-2">
        <h2 class="section-title">OUR SERVICES INCLUDE</h2>
      </v-col>
    </v-row>

  
    <v-row justify="center" class="ma-0 pa-0">
      <v-col cols="12">
        <div class="explain-section">
          <div 
            class="explain-row"
            v-for="(item, index) in currentTexts" 
            :key="index"
            :class="{ reverse: index % 2 === 1 }"
          >
            <div class="explain-image">
              <img :src="item.img" :alt="'説明' + (index+1)" />
            </div>
            <div class="explain-text">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>

    <img src="@/assets/na.jpg" class="bana" />

    <!-- Top Travel Plans -->
    <v-row justify="center" class="ma-0 pa-0">
      <v-col cols="12" class="text-center mb-2">
        <h2 class="text-R">Top Travel Plans</h2>
      </v-col>
    </v-row>

    <v-row justify="center" class="spot-R" style="max-width: 1200px; margin: 0 auto;">
      <v-col cols="12" md="3" v-for="(card, index) in currentCards" :key="index">
  <v-card outlined :to="card.link" tag="router-link">
    <v-img :src="card.img" height="200px" cover />
    <v-card-title>{{ card.title }}</v-card-title>
    <v-card-text>{{ card.text }}</v-card-text>
  </v-card>
</v-col>

    </v-row>

    <!-- Discount Coupon -->
    <v-row justify="center" class="ma-0 pa-0">
      <v-col cols="12" class="text-center mb-2">
        <h2 class="koukoku-t">Discount Coupon</h2>
      </v-col>
    </v-row>

    <v-row justify="center" class="koukoku">
      <v-col cols="12" md="10">
        <div class="carousel-wrapper">
          <v-slide-group v-model="current" show-arrows>
            <v-slide-item v-for="(img, index) in koukokuImages" :key="index">
              <v-img :src="img" class="carousel-image"></v-img>
            </v-slide-item>
          </v-slide-group>
        </div>
      </v-col>
    </v-row>

    <v-row justify="center" class="ma-0 pa-0">
      <v-col cols="12" class="text-center mb-5">
        <img src="@/assets/situmon.png" alt="質問" class="situmon"/>
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script>
export default {
  name: "MainPage",
  data() {
    return {
      language: "ja",
      languages: [
        { text: "日本語", value: "ja" },
        { text: "English", value: "en" }
      ],
      current: 0,
      koukokuImages: [
        require("@/assets/koukoku1.png"),
        require("@/assets/koukoku2.png"),
        require("@/assets/koukoku3.png"),
        require("@/assets/koukoku4.png")
      ],
      texts: {
        ja: [
          { img: require("@/assets/setumei1.jpg"), title: "最適な旅行ルートを自動で提案", description: "出発地や目的地、訪れたいスポットを入力すると、システムが自動で最適な旅行ルートを作成します。移動時間を短縮しながら、効率よく観光地を巡れるように設計されているので、時間を無駄にせず充実した旅を楽しめます。初めて訪れる場所でも安心して旅行を計画できます。" },
          { img: require("@/assets/setumei2.jpg"), title: "現在地をマップに表示", description: "GPS機能を利用して、あなたの現在地を地図上にリアルタイムで表示します。周辺スポットやルートも同時に確認できるので、初めて訪れる場所でも迷わず移動できます。目的地までの道順もわかりやすく表示され、安心して観光を楽しめます。" },
          { img: require("@/assets/setumei3.jpg"), title: "観光地の口コミ共有", description: "他の旅行者が投稿した口コミや評価を閲覧できます。自分の体験やおすすめ情報も投稿できるので、旅行計画に役立てられます。リアルな体験談を参考にすることで、より満足度の高い観光プランを立てられます。" }
        ],
        en: [
          { img: require("@/assets/setumei1.jpg"), title: "Automatic Travel Route Suggestion", description: "Enter departure, destination, and spots you want to visit, and the system automatically creates the optimal travel route. It is designed to shorten travel time while efficiently visiting attractions, so you can enjoy a fulfilling trip without wasting time. You can plan your trip even if it's your first time visiting the area." },
          { img: require("@/assets/setumei2.jpg"), title: "Display Current Location on Map", description: "Using GPS, your current location is displayed in real time on the map. Nearby spots and routes can also be checked simultaneously, so you can move without getting lost even if it is your first visit. Directions to your destination are clearly displayed, ensuring a safe and enjoyable sightseeing experience." },
          { img: require("@/assets/setumei3.jpg"), title: "Share Travel Reviews", description: "You can view reviews and ratings posted by other travelers. You can also post your own experiences and recommendations, which helps with planning your trip. Referring to real experiences allows you to create a more satisfying travel plan." }
        ]
      },
      cards: {
  ja: [
    { img: require('@/assets/spot1.jpg'), title: '東京ルート', text: '最新の都市文化と伝統が融合した大都市。ショッピング・グルメが充実。', link: '/routes/tokyo' },
    { img: require('@/assets/spot2.jpg'), title: '京都ルート', text: '古都ならではの寺社仏閣や伝統文化を体験できる。桜や紅葉の名所も多数。', link: '/routes/kyoto' },
    { img: require('@/assets/spot3.jpg'), title: '北海道ルート', text: '広大な自然と四季折々の風景、美味しい海産物や温泉を楽しめる。', link: '/routes/hokkaido' }
  ],
  en: [
    { img: require('@/assets/spot1.jpg'), title: 'Tokyo Route', text: 'A large city where modern culture and tradition coexist. Shopping and gourmet spots are plentiful.', link: '/routes/tokyo' },
    { img: require('@/assets/spot2.jpg'), title: 'Kyoto Route', text: 'Experience temples, shrines, and traditional culture unique to the ancient capital. Many famous cherry blossom and autumn leaves spots.', link: '/routes/kyoto' },
    { img: require('@/assets/spot3.jpg'), title: 'Hokkaido Route', text: 'Enjoy vast nature, seasonal landscapes, delicious seafood, and hot springs.', link: '/routes/hokkaido' }
  ]
}

    };
  },
  computed: {
    currentTexts() {
      return this.texts[this.language];
      
    },
    currentCards() {
    return this.cards[this.language];
  }
    
  },
  mounted() {
    setInterval(() => {
      this.current = (this.current + 1) % this.koukokuImages.length;
    }, 3000);
  }
};
</script>

<style scoped>
.main-container {
  position: relative; 
}

.search{
  position: absolute;
  top: -200px;
  left: 50%;
  font-size: 20px;
  transform: translateX(-50%);
  z-index: 20;
  background-color: #0cbb23;
  color: #ffffff;
}

.situmon {
  width: 650px;  
  height: auto;  
  display: block;
  margin: 0 auto; 
  padding-top: 50px;
}

.mapOre{
  padding-top:50px;
}

.spot-R{
  display: flex;
  justify-content: center;
}

.koukoku-t{
  padding-top: 50px;
}

.text-R{
  padding-top:100px ;
}

.koukoku{
  padding-top: -20px;
}

.explain-section {
  max-width: 1000px;
  margin: 40px auto;
}
.explain-row {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}
.explain-row.reverse {
  flex-direction: row-reverse;
}
.explain-image img {
  width: 400px;
  height: 300px;
  object-fit: cover;
}
.explain-text {
  flex: 5;
  padding: 30px 20px;
}
.explain-text h3 {
  font-size: 30px;
  margin-bottom: 10px;
  color: #2a4073;
}
.explain-text p {
  font-size: 15px;
  line-height: 1.6;
  color: #000000;
}

.section-title {
  font-size: 28px;
  color: #000000;
  font-weight: bold;
  margin-bottom: 4px; 
}

.carousel-wrapper {
  overflow: hidden;
  white-space: nowrap;
  max-width: 1000px; 
  margin: 0 auto;
}
.carousel-image {
  width: 30%;            
  max-width: 300px;      
  height: 180px;        
  object-fit: cover;
  margin-right: 2%;
  border-radius: 8px;
  display: inline-block;
  border: 3px solid #000;
}

.bana {
  display: block;      
  margin: 30px auto;   
  width: 1000px;       
  height: 100px;        
}
</style>
