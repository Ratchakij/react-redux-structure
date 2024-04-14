import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  /* optimizeDeps เป็นการกำหนดว่าโมดูลใดบ้างที่จะถูกนำเข้าและถูกตรวจสอบเพื่อให้ Vite 
  สามารถทำการจัดการและโมดูลเหล่านี้ให้พร้อมใช้งานในโปรเจกต์  */
  optimizeDeps: {
    include: ["@emotion/react", "@emotion/styled", "@mui/material/Tooltip"],
  },

  /* plugins เป็นการกำหนดการใช้งานของ plugin ในโปรเจกต์ ใช้ plugin react และกำหนด jsxImportSource เป็น '@emotion/react' เพื่อให้ Vite รู้ว่าใช้ React กับ Emotion ในการ import JSX 
  และกำหนดการใช้งานของ Babel plugin เป็น '@emotion/babel-plugin' เพื่อให้ Babel รู้ว่าต้องใช้ plugin Emotion เมื่อทำการคอมไพล์โค้ด JSX 
  นั่นคือการตั้งค่าเพื่อให้โมดูลและ plugin ใช้งานร่วมกันอย่างเหมาะสมเพื่อแก้ไขปัญหา TypeError ที่เกิดขึ้นจากการใช้งาน Autocomplete ของ MUI ในโปรเจกต์ React Vite */
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
  ],
  server: { open: true },
});
