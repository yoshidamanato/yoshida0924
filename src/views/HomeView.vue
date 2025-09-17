<template>
  <v-container fluid class="pa-0 main-container">
 
    <v-btn text to="/tomorrowView" tag="router-link" class="search">Search</v-btn>
    
    <v-row justify="center" class="ma-0 pa-0">
      <v-col cols="12" class="text-center mb-2">
        <h2 class="section-title">OUR SERVICES INCLUDE</h2>
      </v-col>
    </v-row>


    <v-row justify="center" class="ma-0 pa-0">
      <v-col cols="12">
        <div class="explain-section">

        
          <div class="explain-row">
            <div class="explain-image">
              <img src="@/assets/setumei1.jpg" alt="説明1" />
            </div>
            <div class="explain-text">
              
              <h3>最適な旅行ルートを自動で提案</h3>
              <p>出発地や目的地、訪れたいスポットを入力すると、システムが自動で最適な旅行ルートを作成します。
移動時間を短縮しながら、効率よく観光地を巡れるように設計されているので、時間を無駄にせず充実した旅を楽しめます。
初めて訪れる場所でも安心して旅行を計画できます。</p>
   
            </div>
          </div>

          
          <div class="explain-row reverse">
            <div class="explain-image">
              <img src="@/assets/setumei2.jpg" alt="説明2" />
            </div>
            <div class="explain-text">
              <h3>現在地をマップに表示</h3>
              <p>GPS機能を利用して、あなたの現在地を地図上にリアルタイムで表示します。
周辺スポットやルートも同時に確認できるので、初めて訪れる場所でも迷わず移動できます。
目的地までの道順もわかりやすく表示され、安心して観光を楽しめます。</p>

            </div>
          </div>

          <div class="explain-row">
            <div class="explain-image">
              <img src="@/assets/setumei3.jpg" alt="説明3" />
            </div>
            <div class="explain-text">
              <h3>観光地の口コミ共有</h3>
              <p>他の旅行者が投稿した口コミや評価を閲覧できます。
自分の体験やおすすめ情報も投稿できるので、旅行計画に役立てられます。
リアルな体験談を参考にすることで、より満足度の高い観光プランを立てられます。</p>

            </div>
          </div>

        </div>
      </v-col>
    </v-row>

  
    <img src="@/assets/na.jpg" class="bana" />

    <v-row justify="center" class="ma-0 pa-0">
      <v-col cols="12" class="text-center mb-2">
        <h2 class="text-R">Top Travel Plans</h2>
      </v-col>
    </v-row>

 
   <v-row justify="center" class="spot-R" style="max-width: 1200px; margin: 0 auto;">
  
  <v-col cols="12" md="3">
    <v-card outlined to="/routes/tokyo" tag="router-link">
      <v-img src="@/assets/spot1.jpg" height="200px" cover />
      <v-card-title>東京ルート</v-card-title>
      <v-card-text>
        最新の都市文化と伝統が融合した大都市。ショッピング・グルメが充実。
      </v-card-text>
    </v-card>
  </v-col>

  <v-col cols="12" md="3">
    <v-card outlined to="/routes/kyoto" tag="router-link">
      <v-img src="@/assets/spot2.jpg" height="200px" cover />
      <v-card-title>京都ルート</v-card-title>
      <v-card-text>
        古都ならではの寺社仏閣や伝統文化を体験できる。桜や紅葉の名所も多数。
      </v-card-text>
    </v-card>
  </v-col>

  
  <v-col cols="12" md="3">
    <v-card outlined to="/routes/hokkaido" tag="router-link">
      <v-img src="@/assets/spot3.jpg" height="200px" cover />
      <v-card-title>北海道ルート</v-card-title>
      <v-card-text>
        広大な自然と四季折々の風景、美味しい海産物や温泉を楽しめる。
      </v-card-text>
    </v-card>
  </v-col>
</v-row>

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
      current: 0,
      koukokuImages: [
        require("@/assets/koukoku1.png"),
        require("@/assets/koukoku2.png"),
        require("@/assets/koukoku3.png"),
        require("@/assets/koukoku4.png")
      ]
    };
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
