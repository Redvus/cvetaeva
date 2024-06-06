import {defineConfig} from 'vite';

export default defineConfig({
    root: 'src/',
    publicDir: '../static/',
    base: './',
    server:
        {
            host: true, // Open to local network and display URL
            // open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env) // Open if it's not a CodeSandbox
        },
    build: {
        // sourcemap: true, // Add sourcemap
        outDir: '../dist/assets/games/cavetaeva/', // Output in the dist/ folder
        // emptyOutDir: true, // Empty the folder first
        rollupOptions: {
            output: {
                // chunkFileNames: 'assets/js/[name]-[hash].js',
                // entryFileNames: 'assets/js/[name]-[hash].js',
                chunkFileNames: 'js/app-min.js',
                entryFileNames: 'js/app-min.js',

                assetFileNames: ({name}) => {
                    if (/\.(gif|jpg|jpe?g|png|svg)$/.test(name ?? '')){
                        return 'images/[name]-[hash][extname]';
                    }

                    if (/\.css$/.test(name ?? '')) {
                        return 'css/main.css';
                    }

                    // default value
                    // ref: https://rollupjs.org/guide/en/#outputassetfilenames
                    return '[name]-[hash][extname]';
                },
            },
        }
    },
    css: {
        devSourcemap: true,
        // preprocessorOptions: {
        //     scss: {
        //         additionalData: `
        //             @import "./src/scss/_color.scss";
        //             @import "./src/scss/_layout.scss";
        //             @import "./src/scss/_layout.scss";
        //         `
        //     }
        // }
    }
});