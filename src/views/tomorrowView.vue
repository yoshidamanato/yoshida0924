<template>
  <v-container fluid class="pa-0">
    <!-- フォーム部分 -->
    <v-row justify="center" class="ma-0 pa-6">
      <v-col cols="12" md="6">
        <v-card class="foam" outlined>
          <v-card-text>
            <h2 class="mb-4">TRAVEL PLANNER ✈</h2>

            <v-form>
              <v-text-field label="出発地" v-model="id" type="text" dense outlined class="mb-3"/>
              <v-text-field label="出発時間" v-model="day" type="time" dense outlined class="mb-3"/>
              <v-text-field label="終了時間" v-model="deadline" type="time" dense outlined class="mb-3"/>
              <v-text-field label="条件" v-model="task" type="text" dense outlined class="mb-3"/>

              <v-row v-for="(spot, index) in spotList" :key="index" class="mb-2">
                <v-col>
                  <v-text-field label="スポット名" v-model="spot.name" outlined dense />
                </v-col>
                <v-col class="d-flex align-center">
                  <v-btn v-if="index > 0" color="grey" small icon @click="removeSpot(index)">
                    <v-icon>mdi-minus</v-icon>
                  </v-btn>
                </v-col>
              </v-row>

              <v-row>
                <v-btn color="#2a4073" small icon @click="addSpot">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-row>

              <v-row class="mt-6">
                <v-btn color="#2a4073" dark @click="insert">ルート検索をする</v-btn>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- 旅プラン結果表示部分 -->
    <div v-if="parsedResult && parsedResult.spots && parsedResult.spots.length">
      <v-card class="pa-4 rounded-xl elevation-2 mb-6">
        <v-card-title class="text-h6 font-weight-bold">
          ✈旅プラン
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
          結果
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
      visibleDetails: {}
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
      const Info = {
        id: this.id,
        day: this.day,
        deadline: this.deadline,
        task: this.task,
        spotList: this.spotList
      };
      const response = await this.$store.dispatch("chat/sendMessage", Info);
      this.result = response?.Content?.[0]?.Text;
    },
    toggleDetail(index) {
      this.$set(this.visibleDetails, index, !this.visibleDetails[index]);
    }
  }
};
</script>

<style scoped>
.foam {
  max-width: 1000px;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.1);
  color: white;
  backdrop-filter: blur(5px);
  padding: 20px;
  border-radius: 12px;
}
.foam h2 {
  color: #000000 !important;
}
.foam .v-label {
  color: white !important;
}
.foam .v-input input {
  color: black !important;
  background-color: rgb(0, 0, 0) !important;
  border-radius: 6px;
  padding: 8px;
}
.foam .v-input input::placeholder {
  color: #999 !important;
  opacity: 1;
}
.foam .v-icon {
  color: rgb(0, 0, 0) !important;
}
.detail-box {
  background-color: #f5f5f5;
  padding: 8px;
  border-radius: 6px;
  margin-top: 5px;
}
</style>
