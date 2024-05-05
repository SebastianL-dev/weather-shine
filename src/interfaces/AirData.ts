export interface IAirData {
  list: {
    0: {
      components: {
        co: number;
        o3?: number;
        so2?: number;
        no2?: number;
        pm10?: number;
        pm2_5?: number;
      };
    };
  };
}
