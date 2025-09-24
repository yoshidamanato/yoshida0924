<template>
  <v-container fluid class="pa-0 background-container">

    <h1 class="title-T">✈PLAN SEARCH</h1>

    <h2 class="setumei">出発地、旅行を開始する出発時間と終了予定時間を入力してください。<br>
      旅行中の希望条件（電車を使用してなど）を入力してください。<br>
      訪れたいスポット名を入力すると最適な旅行ルートを提案します。</h2>
    
    <!-- フォーム部分 -->
    <v-row justify="center" class="ma-0 pa-6">
      <v-col cols="12" md="8">
        <v-card class="foam" outlined>
          <v-card-text>
            

            <v-form>
              <v-text-field
                label="出発地/Travel Plan"
                v-model="id"
                type="text"
                dense
                outlined
                prepend-inner-icon="mdi-map-marker"
                class="mb-3"
              />
              <v-text-field
                label="出発時間/Departure time"
                v-model="day"
                type="time"
                dense
                outlined
                prepend-inner-icon="mdi-clock-start"
                class="mb-3"
              />
              <v-text-field
                label="終了時間/End time"
                v-model="deadline"
                type="time"
                dense
                outlined
                prepend-inner-icon="mdi-clock-end"
                class="mb-3"
              />
              <v-text-field
                label="条件/Conditions"
                v-model="task"
                type="text"
                dense
                outlined
                prepend-inner-icon="mdi-clipboard-text"
                class="mb-6"
              />

              <!-- スポット入力欄 -->
              <v-row
                v-for="(spot, index) in spotList"
                :key="index"
                class="mb-2"
              >
                <v-col>
                  <v-text-field
                    label="スポット名/Spot"
                    v-model="spot.name"
                    outlined
                    dense
                    prepend-inner-icon="mdi-map"
                  />
                </v-col>
                <v-col class="d-flex align-center">
                  <v-btn
                    v-if="index > 0"
                    color="error"
                    small
                    icon
                    @click="removeSpot(index)"
                  >
                    <v-icon>mdi-minus</v-icon>
                  </v-btn>
                </v-col>
              </v-row>

              <v-row>
                <v-btn
                  color="primary"
                  small
                  icon
                  @click="addSpot"
                  class="mb-4"
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-row>

              <v-row class="mt-6 justify-center">
                <v-btn
                  color="#2a4073"
                  dark
                  large
                  elevation="3"
                  @click="insert"
                >
                 Spotsearch route
                </v-btn>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- 待機中オーバーレイ -->
    <v-overlay :value="loading" opacity="0.7">
      <v-progress-circular
        indeterminate
        size="64"
        width="6"
        color="primary"
      />
      <div class="mt-4 white--text">ルートを計算中です...</div>
    </v-overlay>

    <!-- 旅プラン結果表示部分 -->
    <div v-if="parsedResult && parsedResult.spots && parsedResult.spots.length">
      <v-card class="pa-4 rounded-xl elevation-2 mb-6">
        <v-card-title class="text-h6 font-weight-bold">
          ✈ Travel Plan
        </v-card-title>
        <v-card-text class="text-body-1">
          <strong>出発地：</strong>{{ departure }}<br />
          <strong>出発時間：</strong>{{ startTime }}<br />
          <strong>終了時間：</strong>{{ endTime }}
        </v-card-text>
      </v-card>

      <v-timeline side="end" dense>
        <v-timeline-item
          v-for="(spot, index) in spots"
          :key="spot.order"
          icon="mdi-map-marker"
          color="primary"
          size="small"
        >
          <v-card class="pa-3 rounded-lg elevation-1 mb-2">
            <strong>{{ spot.order }}. {{ spot.name }}</strong><br />
            <strong>到着時刻：</strong>{{ spot.arrivalTime }}<br />
            <strong>滞在時間：</strong>{{ spot.stayTime }}<br />
            <strong>移動時間：</strong>{{ spot.travelTime }}<br />

            <div
              @click="toggleDetail(index)"
              style="cursor: pointer; color: #1976d2; text-decoration: underline; margin-top: 5px;"
            >
              <strong>移動手段：</strong>{{ spot.transportation }}
            </div>

            <v-expand-transition>
              <div v-if="visibleDetails[index]" class="detail-box">
                <p><strong>詳細：</strong>{{ spot.idou }}</p>
              </div>
            </v-expand-transition>

            <strong>案内：</strong>{{ spot.notes }}
          </v-card>
        </v-timeline-item>
      </v-timeline>

      <v-card class="pa-4 rounded-xl elevation-2 mt-6">
        <v-card-title class="text-h6 font-weight-bold">
          Result
        </v-card-title>
        <v-card-text class="text-body-1">
          <strong>総移動時間：</strong>{{ totalTravelTime }}<br />
          <strong>総滞在時間：</strong>{{ totalStayTime }}<br />
          <strong>アドバイス：</strong>{{ advice }}
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "TravelPlanner",
  data() {
    return {
      id: "",
      day: "",
      deadline: "",
      task: "",
      spotList: [{ name: "" }],
      result: "",
      visibleDetails: {},
      loading: false
    };
  },
  computed: {
    parsedResult() {
      let result = this.result || this.$store.getters["chat/getResult"];
      if (typeof result === "string") {
        result = result.replace(/```json|```/g, "").trim();
        try {
          result = JSON.parse(result);
        } catch (e) {
          console.error("JSON parse error:", e, result);
          return {};
        }
      }
      return result;
    },
    departure() {
      return this.parsedResult.departure || "未設定";
    },
    startTime() {
      return this.parsedResult.startTime || "未設定";
    },
    endTime() {
      return this.parsedResult.endTime || "未設定";
    },
    spots() {
      return this.parsedResult.spots || [];
    },
    totalTravelTime() {
      return this.parsedResult.totalTravelTime;
    },
    totalStayTime() {
      return this.parsedResult.totalStayTime;
    },
    advice() {
      return this.parsedResult.advice;
    }
  },
  methods: {
    addSpot() {
      this.spotList.push({ name: "" });
    },
    removeSpot(index) {
      this.spotList.splice(index, 1);
    },
    async insert() {
      this.loading = true;
      const Info = {
        id: this.id,
        day: this.day,
        deadline: this.deadline,
        task: this.task,
        spotList: this.spotList
      };
      try {
        const response = await this.$store.dispatch("chat/sendMessage", Info);
        this.result = response?.Content?.[0]?.Text;
      } catch (e) {
        console.error("API error:", e);
      } finally {
        this.loading = false;
      }
    },
    toggleDetail(index) {
      this.$set(this.visibleDetails, index, !this.visibleDetails[index]);
    }
  }
};
</script>

<style scoped>
.background-container {
  position: relative;
  background-image: url('@/assets/igu3.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
  padding-bottom: 50px;
  z-index: 0; 
}


.background-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); 
  z-index: -1; 
}

.foam {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 16px;
  box-shadow: 0 6px 18px rgba(0,0,0,1);
}

.v-text-field input {
  font-size: 10rem;
  color: white;
}

.setumei{
  text-align: center;    
  color: white;          
  font-size: 1.5rem;  
}

.title-T{

  text-align: center;    
  color: white;          
  font-size: 10rem;  

}
</style>
