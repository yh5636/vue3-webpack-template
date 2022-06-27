module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "vue/html-closing-bracket-newline": ["error", {
            "singleline": "never",
            "multiline:": "always"
        }],
        "vue/html-self-closing": ["error", {
            "html": {
              "void": "always",
              "normal": "never",
              "component": "always"
            },
            "svg": "always",
            "math": "always"
          }]
    }
}
