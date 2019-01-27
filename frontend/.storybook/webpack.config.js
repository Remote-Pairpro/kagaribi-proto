const path = require("path");
const webpack = require("webpack");

module.exports = (baseConfig, env, defaultConfig) => {
    defaultConfig.module.rules.push({
        test: /\.(ts|tsx)$/,
        include: path.resolve(__dirname, "../src"),
        loader: require.resolve("awesome-typescript-loader")
    });

    defaultConfig.resolve.extensions.push(".ts", ".tsx");

    defaultConfig.plugins.push(
        new webpack.DefinePlugin({
            "process.env": {
                FIREBASE_API_KEY: JSON.stringify(process.env.FIREBASE_API_KEY),
                FIREBASE_AUTH_DOMAIN: JSON.stringify(
                    process.env.FIREBASE_AUTH_DOMAIN
                )
            }
        })
    );
    return defaultConfig;
};
