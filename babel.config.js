module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            "@/hooks": "./src/hooks",
            "@/querys":"./src/querys",
            "@/assets": "./src/assets",
            "@/models": "./src/models",
      	    "@/context":"./src/context",
      	    "@/configs":"./src/configs",
            "@/screens": "./src/screens",
            "@/services": "./src/services",
            "@/constants":"./src/constants",
            "@/validations":"./src/validations",
            "@/controllers": "./src/controllers",
            "@/atomic/designs": "./src/atomic/designs",
            "@/atomic/elements": "./src/atomic/elements",
            "@/atomic/theme": "./src/atomic/theme",
            "@/atomic/components": "./src/atomic/components",
          },
        },
      ],
      ["nativewind/babel"],
      [
        "module:react-native-dotenv",
        {
         'moduleName':'@env',
         'path':'.env',
        }
      ]
    ],
  };
};