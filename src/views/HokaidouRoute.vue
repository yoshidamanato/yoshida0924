<template>
  <v-app style="background-color:#f5f5dc;">
    <div>
      <v-card class="pa-6" outlined>
        <v-card-title class="text-h5 font-weight-bold">
          北海道おすすめ観光ルート🚌
        </v-card-title>
        <v-card-text class="text-body-1">
          北海道は雄大な自然と新鮮な食文化が魅力の地域です。本ルートでは、札幌からスタートし、
          小樽の歴史ある街並み、旭山動物園、富良野・美瑛の絶景スポットまでを1日で巡るコースをご紹介します。
          自然・文化・グルメをバランスよく体験できるため、初めて北海道を訪れる方にもぴったりです。
        </v-card-text>
      </v-card>

      <v-timeline align="start">
      
        <v-timeline-item dot-color="red-lighten-2" icon="mdi-map-marker" fill-dot>
          <v-card>
            <v-row>
              <v-col cols="8">
                <v-card-title class="text-h6 bg-red-lighten-2">
                  09:00 - 札幌時計台
                </v-card-title>
                <v-card-text>
                  行き方：札幌駅から徒歩10分。<br><br>
                  ・札幌のシンボルで記念撮影。<br>
                  ・歴史資料の見学。<br><br>
                  アピールポイント：北海道の歴史を感じられる観光スポット。<br>
                  <a href="https://maps.google.com/?q=札幌時計台">📍 Googleマップで見る</a>
                </v-card-text>
              </v-col>
              <v-col cols="4">
                <v-img src="@/assets/tokei.jpg" height="200" class="mr-4" />
              </v-col>
            </v-row>
          </v-card>
        </v-timeline-item>

       
        <v-timeline-item dot-color="blue-lighten-2" icon="mdi-map-marker" fill-dot>
          <v-card>
            <v-row>
              <v-col cols="8">
                <v-card-title class="text-h6 bg-blue-lighten-2">
                  11:00 - 小樽運河
                </v-card-title>
                <v-card-text>
                  行き方：札幌駅から電車で約40分「小樽駅」下車。<br><br>
                  ・運河沿いの歴史的建造物を散策。<br>
                  ・ガラス細工やお土産ショッピング。<br><br>
                  アピールポイント：ロマンチックな街並みと歴史文化が楽しめます。<br>
                  <a href="https://maps.google.com/?q=小樽運河">📍 Googleマップで見る</a>
                </v-card-text>
              </v-col>
              <v-col cols="4">
                <v-img src="@/assets/otaru.jpg" height="200" class="mr-4" />
              </v-col>
            </v-row>
          </v-card>
        </v-timeline-item>

      
        <v-timeline-item dot-color="green-lighten-2" icon="mdi-map-marker" fill-dot>
          <v-card>
            <v-row>
              <v-col cols="8">
                <v-card-title class="text-h6 bg-green-lighten-2">
                  14:00 - 旭山動物園
                </v-card-title>
                <v-card-text>
                  行き方：札幌から車で約2時間半。<br><br>
                  ・動物たちの行動展示を楽しむ。<br>
                  ・ペンギンの散歩など人気イベントを体験。<br><br>
                  アピールポイント：北海道ならではの動物観察ができる人気スポット。<br>
                  <a href="https://maps.google.com/?q=旭山動物園">📍 Googleマップで見る</a>
                </v-card-text>
              </v-col>
              <v-col cols="4">
                <v-img src="@/assets/pengin.jpg" height="200" class="mr-4" />
              </v-col>
            </v-row>
          </v-card>
        </v-timeline-item>

        
        <v-timeline-item dot-color="purple-lighten-2" icon="mdi-map-marker" fill-dot>
          <v-card>
            <v-row>
              <v-col cols="8">
                <v-card-title class="text-h6 bg-purple-lighten-2">
                  17:00 - 富良野・美瑛
                </v-card-title>
                <v-card-text>
                  行き方：旭川から車で約1時間半。<br><br>
                  ・ラベンダー畑や丘の絶景を楽しむ。<br>
                  ・地元カフェで休憩。<br><br>
                  アピールポイント：北海道の雄大な自然とフォトジェニックな風景を満喫。<br>
                  <a href="https://maps.google.com/?q=富良野">📍 Googleマップで見る</a>
                </v-card-text>
              </v-col>
              <v-col cols="4">
                <v-img src="@/assets/hurano.jpg" height="200" class="mr-4" />
              </v-col>
            </v-row>
          </v-card>
        </v-timeline-item>

       
        <v-card class="mt-4">
          <v-card-title class="text-h5 font-weight-bold">
            まとめ🚶
          </v-card-title>
          <v-card-text class="text-body-1">
            本ルートでは、札幌で歴史を感じ、小樽でロマンチックな街並みを散策、
            旭山動物園で動物観察、富良野・美瑛で北海道の絶景を楽しめます。<br><br>
            1日で「歴史 × 文化 × 自然 × グルメ」をバランスよく巡ることができる充実のコースです。
            初めて北海道を訪れる方や、短時間で北海道の魅力を効率よく体験したい方におすすめです。
          </v-card-text>
        </v-card>
      </v-timeline>
    </div>
  </v-app>
</template>


