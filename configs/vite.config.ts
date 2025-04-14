import { builtinModules } from 'module';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import chalk from 'chalk';
import Electron from 'vite-plugin-electron';
import EnvironmentPlugin from 'vite-plugin-environment';
import React from '@vitejs/plugin-react';
// import TsConfigPaths from 'vite-tsconfig-paths';
const TsConfigPaths = async () => (await import('vite-tsconfig-paths')).default;
import { port } from '../DevConfig.json';
import path from 'path';
// console.log(`${chalk.whiteBright.bold(' ✨ Start')} ${chalk.green.bold('Hacking...👨‍💻')}`);

export default defineConfig({
    resolve: {
        alias: { find: "@", replacement: path.resolve(__dirname, "src/renderer") },
    },
    base: './',
    clearScreen: false,
    publicDir: resolve('./src/renderer/public'),
    root: resolve('./src/renderer'),
    server: {
        port,
        proxy: {
            '/api': {
                target: 'https://s9rest.ngrok.io',
                changeOrigin: true,
                secure: false
            }
        }
    },
    build: {
        assetsDir: '',
        outDir: resolve('./app/dist/renderer'),
    },
    plugins: [
        React(),
        EnvironmentPlugin('all', { prefix: '' }),
        TsConfigPaths(),
        Electron({
            entry: [resolve('src/main/main.ts'), resolve('src/main/preload.ts')],
            onstart: (options) => {
                options.startup(['.', '--inspect=5858', '--remote-debugging-port=9227']);
            },
            vite: {
                build: {
                    assetsDir: '',
                    outDir: resolve('./app/dist/main'),
                    rollupOptions: {
                        external: ['electron', ...builtinModules],
                        output: {
                            format:'cjs'
                        }
                    },
                },
                optimizeDeps: {
                    exclude: ['electron']     // ✅ optimizeDeps에도 제외
                },
                plugins: [
                    EnvironmentPlugin('all', { prefix: '' }),
                    TsConfigPaths(),
                ],
            },
            tsconfig: {
                main: '../tsconfig.main.json',
                renderer: '../tsconfig.renderer.json'
            }
        }),
    ],
});
