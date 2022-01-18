import dts from 'rollup-plugin-dts'

export default [
    {
        input: '.tmp/Index.js',
        watch: { clearScreen: true },
        output: [
            {
                file: 'dist/tween.umd.js',
                name: 'TWEEN',
                format: 'umd',
                exports: 'named',
            },
            {
                file: 'dist/tween.amd.js',
                format: 'amd',
                exports: 'named',
            },
            {
                file: 'dist/tween.cjs.js',
                format: 'cjs',
                exports: 'named',
            },
            {
                file: 'dist/tween.esm.js',
                format: 'es',
                exports: 'named',
            },
        ],
    },
    {
        input: './.tmp/Index.d.ts',
        watch: { clearScreen: true },
        output: [{ file: 'dist/tween.d.ts', format: 'es' }],
        plugins: [dts()],
    },
]
