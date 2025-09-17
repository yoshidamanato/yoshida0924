<template>
  <v-app style="background-color:#f5f5dc;">
    <div>
      <!-- メイントップカード -->
      <v-card class="pa-6" outlined>
        <v-card-title class="text-h5 font-weight-bold">
          京都おすすめ観光ルート🚌
        </v-card-title>
        <v-card-text class="text-body-1">
          京都は歴史と自然が調和する美しい都市です。本ルートでは、千年の歴史を感じる清水寺からスタートし、
          風情ある祇園、世界遺産の金閣寺、そして嵐山までを1日で巡るコースをご紹介します。
          伝統文化・自然・寺社巡り・街歩きをバランスよく体験できるため、初めて京都を訪れる方にもぴったりです。
        </v-card-text>
      </v-card>

      <v-timeline align="start">
       
        <v-timeline-item dot-color="red-lighten-2" icon="mdi-map-marker" fill-dot>
          <v-card>
            <v-row>
              <v-col cols="8">
                <v-card-title class="text-h6 bg-red-lighten-2">
                  9:00 - 清水寺
                </v-card-title>
                <v-card-text>
                  行き方：京都駅からバスで約15分「五条坂」下車。<br><br>
                  ・清水の舞台からの絶景を楽しむ。<br>
                  ・音羽の滝でお水を飲んで開運祈願。<br>
                  ・周辺の土産物店で京都限定商品を購入。<br><br>
                  アピールポイント：京都を代表する歴史ある寺院で、千年の風情を体験できます。<br>
                  <a href="https://maps.google.com/?q=清水寺">📍 Googleマップで見る</a>
                </v-card-text>
              </v-col>
              <v-col cols="4">
                <v-img src="@/assets/spot2.jpg" height="200" class="mr-4" />
              </v-col>
            </v-row>
          </v-card>
        </v-timeline-item>

       
        <v-timeline-item dot-color="blue-lighten-2" icon="mdi-map-marker" fill-dot>
          <v-card>
            <v-row>
              <v-col cols="8">
                <v-card-title class="text-h6 bg-blue-lighten-2">
                  11:30 - 祇園散策
                </v-card-title>
                <v-card-text>
                  行き方：清水寺から徒歩15分。<br><br>
                  ・花見小路通りで伝統的な町家や舞妓さんに出会う。<br>
                  ・甘味処やカフェで京都スイーツを堪能。<br><br>
                  アピールポイント：京都ならではの町並みと文化を間近に楽しめるエリアです。<br>
                  <a href="https://maps.google.com/?q=祇園">📍 Googleマップで見る</a>
                </v-card-text>
              </v-col>
              <v-col cols="4">
                <v-img src="@/assets/gion.jpg" height="200" class="mr-4" />
              </v-col>
            </v-row>
          </v-card>
        </v-timeline-item>

   
        <v-timeline-item dot-color="green-lighten-2" icon="mdi-map-marker" fill-dot>
          <v-card>
            <v-row>
              <v-col cols="8">
                <v-card-title class="text-h6 bg-green-lighten-2">
                  13:30 - 金閣寺
                </v-card-title>
                <v-card-text>
                  行き方：祇園から市バスで約40分「金閣寺道」下車。<br><br>
                  ・庭園と池に映る黄金の寺を鑑賞。<br>
                  ・境内を散策し、日本庭園の美しさを体感。<br><br>
                  アピールポイント：世界遺産に登録された京都の名所で、写真スポットも充実。<br>
                  <a href="https://maps.google.com/?q=金閣寺">📍 Googleマップで見る</a>
                </v-card-text>
              </v-col>
              <v-col cols="4">
                <v-img src="@/assets/kinkaku.jpg" height="200" class="mr-4" />
              </v-col>
            </v-row>
          </v-card>
        </v-timeline-item>

      
        <v-timeline-item dot-color="purple-lighten-2" icon="mdi-map-marker" fill-dot>
          <v-card>
            <v-row>
              <v-col cols="8">
                <v-card-title class="text-h6 bg-purple-lighten-2">
                  16:00 - 嵐山
                </v-card-title>
                <v-card-text>
                  行き方：金閣寺からバスで約50分「嵐山駅」下車。<br><br>
                  ・竹林の小径を散策。<br>
                  ・渡月橋で自然と景観を楽しむ。<br>
                  ・地元グルメや和菓子を味わう。<br><br>
                  アピールポイント：自然豊かで四季折々の美しさを感じられるエリア。<br>
                  <a href="https://maps.google.com/?q=嵐山">📍 Googleマップで見る</a>
                </v-card-text>
              </v-col>
              <v-col cols="4">
                <v-img src="@/assets/arashiyama.jpg" height="200" class="mr-4" />
              </v-col>
            </v-row>
          </v-card>
        </v-timeline-item>

     
        <v-card class="mt-4">
          <v-card-title class="text-h5 font-weight-bold">
            まとめ🚶
          </v-card-title>
          <v-card-text class="text-body-1">
            本ルートでは、清水寺で京都の歴史を感じ、祇園で伝統的な町並みを散策、
            金閣寺で世界遺産の美しさを堪能し、嵐山で自然と景観を楽しめます。<br><br>
            1日で「歴史 × 伝統 × 自然 × 町歩き」をバランスよく巡ることができる充実のコースです。
            初めて京都を訪れる方や、短時間で京都の魅力を効率よく体験したい方におすすめです。
          </v-card-text>
        </v-card>

      </v-timeline>
    </div>
  </v-app>
</template>


