<template>
    <v-app style="background-color:#f5f5dc;">
    
    <div>
        <v-card class="pa-6" outlined>
  <v-card-title class="text-h5 font-weight-bold">
    東京おすすめ観光ルート🚌
  </v-card-title>
  <v-card-text class="text-body-1">
    東京は歴史と最先端が共存する魅力あふれる都市です。本ルートでは、江戸情緒が残る浅草からスタートし、
    東京のシンボル・スカイツリー、自然と文化を楽しめる上野、そして洗練された銀座エリアまでを1日で巡るコースをご紹介します。
    伝統文化・近代的な景観・芸術・ショッピングをバランスよく体験できるため、初めて東京を訪れる方にもぴったりです。
  </v-card-text>
</v-card>

  <v-timeline align="start">

  
    <v-timeline-item dot-color="red-lighten-2" icon="mdi-map-marker" fill-dot>
      <v-card>
        <v-row>
          <v-col cols="8">
            <v-card-title class="text-h6 bg-red-lighten-2">
              10:00 - 浅草寺
            </v-card-title>
            <v-card-text>
              行き方：東京駅から地下鉄銀座線で約20分「浅草駅」下車。<br><br>
              ・浅草寺で参拝や御朱印集め。<br>
              ・仲見世通りで和菓子やお土産ショッピング。<br>
              ・浅草の人力車で街並み観光体験。<br><br>
              アピールポイント：江戸情緒を感じられるスポットで、東京の伝統文化を体験できます。<br>
              <a href="https://maps.google.com/?q=浅草寺">Googleマップで見る</a>
            </v-card-text>
          </v-col>
          <v-col cols="4">
            <v-img src="@/assets/asakusa.jpg" height="200" class="mr-4" />
          </v-col>
        </v-row>
      </v-card>
    </v-timeline-item>


    <v-timeline-item dot-color="blue-lighten-2" icon="mdi-map-marker" fill-dot>
      <v-card>
        <v-row>
          <v-col cols="8">
            <v-card-title class="text-h6 bg-blue-lighten-2">
              12:00 - 東京スカイツリー
            </v-card-title>
            <v-card-text>
              行き方：浅草駅から徒歩15分、または東武スカイツリーラインで1駅。<br><br>
              ・展望デッキから東京の大パノラマを満喫。<br>
              ・ソラマチでランチやショッピング。<br><br>
              アピールポイント：高さ634mの世界的なランドマークで、昼食や観光に最適。<br>
              <a href="https://maps.google.com/?q=東京スカイツリー">Googleマップで見る</a>
            </v-card-text>
          </v-col>
          <v-col cols="4">
            <v-img src="@/assets/sky.jpg" height="200" class="mr-4" />
          </v-col>
        </v-row>
      </v-card>
    </v-timeline-item>

    
    <v-timeline-item dot-color="green-lighten-2" icon="mdi-map-marker" fill-dot>
      <v-card>
        <v-row>
          <v-col cols="8">
            <v-card-title class="text-h6 bg-green-lighten-2">
              14:30 - 上野公園・博物館
            </v-card-title>
            <v-card-text>
              行き方：押上駅から半蔵門線・日比谷線を利用し、上野駅へ約20分。<br><br>
              ・国立博物館や動物園を見学。<br>
              ・不忍池の散策でリラックス。<br><br>
              アピールポイント：自然と文化を同時に楽しめるスポット。<br>
              <a href="https://maps.google.com/?q=上野公園">Googleマップで見る</a>
            </v-card-text>
          </v-col>
          <v-col cols="4">
            <v-img src="@/assets/ueno.jpg" height="200" class="mr-4" />
          </v-col>
        </v-row>
      </v-card>
    </v-timeline-item>


    <v-timeline-item dot-color="purple-lighten-2" icon="mdi-map-marker" fill-dot>
      <v-card>
        <v-row>
          <v-col cols="8">
            <v-card-title class="text-h6 bg-purple-lighten-2">
              17:00 - 銀座ショッピング
            </v-card-title>
            <v-card-text>
              行き方：上野駅からJR山手線で約10分「有楽町駅」下車、徒歩5分。<br><br>
              ・高級ブランドショップやデパート巡り。<br>
              ・カフェやレストランで休憩。<br><br>
              アピールポイント：東京を代表する洗練されたショッピングエリア。<br>
              <a href="https://maps.google.com/?q=銀座" >Googleマップで見る</a>
            </v-card-text>
          </v-col>
          <v-col cols="4">
            <v-img src="@/assets/ginz.jpg" height="200" class="mr-4" />
          </v-col>
        </v-row>
      </v-card>
    </v-timeline-item>

    <v-card class="mt-4">
  <v-card-title class="text-h5 font-weight-bold">
    まとめ🚶
  </v-card-title>
  <v-card-text class="text-body-1">
    本ルートでは、浅草で江戸の情緒を感じ、スカイツリーで東京の大パノラマを楽しみ、
    上野で自然と文化に触れ、銀座で洗練された街並みを体験できます。<br><br>
    1日で「伝統 × 近代 × 自然 × 都会」をバランスよく巡ることができる充実のコースです。
    初めて東京を訪れる方や、短時間で東京の魅力を効率よく体験したい方におすすめです。
  </v-card-text>
</v-card>


    

  </v-timeline>
</div>
</v-app>
</template>
<style>



</style>
