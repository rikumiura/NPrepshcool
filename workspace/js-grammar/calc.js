// このコードは三角形の面積を求めるプログラムです。
document.write("幅3、高さ10の三角形の面積を求めます");
var w = 3; // 三角形の底辺
var h = 10; // 三角形の高さ
var area = (w * h) / 2; // 三角形の面積の公式「（底辺）×（高さ）÷2」を使って計算し、areaという名前の変数に代入する
document.write(area); // 面積を出力する

//半径12㎝のえんの面積を求める
document.write("半径12㎝の円の面積を求めます");
let r = 12;//半径
let pi = 3.14;//π
let menseki = r*r*pi;//面積
document.write(menseki);

//if文の練習
for (let index = 1; index <= 15; index++) {
    document.write(index + " ");
    if(index % 3 == 0)
        document.write("fizz");
    if(index % 5 == 0)
        document.write("buzz");
    document.write("\n");
}

/*
15 歳以下は 800 円、ポイント会員の場合には 1000 円、 そうではない場合には 1800 円の映画のチケットがあります。
年齢と会員であるかどうかを変数に代入すると、チケットの値段を教えてくれるプログラムを書いてみましょう。
なお、15 歳以下かつ会員の場合には、 800 円 になるものとします。
例として、16 歳の会員のチケットの値段を出して下さい。
*/

let age = 16;
let member = true;
if(age <= 15){
    document.write("800円");
}else if(member){
    document.write("1000円");
}else {
    document.write("1800円");
}

//ア行とカ行で2文字の組み合わせ全列挙
let ak = ['あ', 'い', 'う', 'え', 'お', 'か' , 'き', 'く', 'け', 'こ'];

for(let i = 0; i < ak.length; i++){
    for (let index = 0; index < ak.length; index++) {
        document.write('<p>'+ak[i]+ak[index]+'</p>')
    }
}