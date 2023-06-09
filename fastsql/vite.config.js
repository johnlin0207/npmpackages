import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
// import legacy from "@vitejs/plugin-legacy";
import vue2 from "@vitejs/plugin-vue2";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue2(),
    // legacy({
    //   targets: ["ie >= 11"],
    //   additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    // }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: "dist", //输出文件名称
    lib: {
      entry: [
        path.resolve(__dirname, "./src/package/fastsql/index.js"),
        path.resolve(__dirname, "./src/lang/en.js"),
        path.resolve(__dirname, "./src/lang/zh_CN.js"),
      ], //指定组件编译入口文件
      name: "index",
      // fileName: "index",
    }, //库编译模式配置
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue", "element-ui"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
