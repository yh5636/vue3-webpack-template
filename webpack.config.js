//웹팩구성옵션작성
//import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')   //패키지를 해당 변수에 담아 가져오기
const CopyPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

// export
module.exports = {
    //해당 확장자는 생략해도 문제없게 설정
    resolve: {
        extensions:['.js', '.vue'],
        //경로를 별칭으로 만들어 지정(절대경로처럼 사용)
        alias: {
            '~': path.resolve(__dirname, 'src'),
            'assets': path.resolve(__dirname, 'src/assets')
        }
    },

    //파일을 읽어들이기 시작하는 진입점 설정(html이 아닌 js파일로 셋팅)
    entry: './src/main.js',

    //결과물(번들)을 반환하는 설정
    output : {
        //path: path.resolve(__dirname, 'dist'), 
        //filename:'main.js',
        clean: true //새롭게 빌드 명령을 실행했을 때, 그 전에 생성된 파일삭제
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.s?css$/,     //.css 확장자 파일은 test라는 속성으로 매칭(정규식으로 표현)
                use: [
                    //순서가 중요(밑에서분터 순서대로 적용됨) css loader를 먼저 적용 후 style-loader 적용
                    'vue-style-loader',
                    'style-loader', 
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                use: 'file-loader'
            }
        ]
    },

    //번들링 후 결과물의 처리 방식 등 다양한 플러그인을 설정
    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'static' }  //어느 폴더를(from) 목사할건지 지정 --> dist 폴더로(to) 붙여넣기됨
            ]
        }),
        new VueLoaderPlugin()
    ],

    devServer: {
        host: 'localhost'
    }
}