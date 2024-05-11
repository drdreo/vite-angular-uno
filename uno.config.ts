
import { defineConfig } from 'unocss'

export default defineConfig({
    rules: [
        ['h-1', { 'font-size': '20px', color: '#daa420' }],
        [/^m-([\.\d]+)$/, ([_, num]) => ({ margin: `${num}px` })],
    ],
    cli: {
        entry: {
            /**
             * Glob patterns to match files
             * Include HTML and inline templates in components.
             */
            patterns: ["src/**/*.html", "src/**/*.ts"],
            /**
             * The output filename for the generated UnoCSS file
             */
            outFile: "./src/uno.css"
        },
    },
})