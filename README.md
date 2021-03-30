# 김민기
## [03월 16일]
> 오늘 배운 요약
> 최근 날짜가 제일 뒤에 와야 한다.

> 여러 줄 요약

> 카톡 단톡방에 공지가 있다. [요망]
>


## 

 <h1>My First JavaScript</h1>
    <p>JavaScript cann change the content of ana HTML element : </p>

    <button type="button" onclick="myFunction()">Click Me!</button>

    <p id="demo">This is a demonstration.</p>


    <h1>My First JavaScript</h1>    
    <p id="demo2">JavaScript can change the style of an HTML element.</p>

    <script>
        function myFunction2(){
            document.getElementById("demo2").style.fontSize = "25px";

            document.getElementById("demo2").style.color = "red";

            document.getElementById("demo2").style.backgroundColor = "yellow";
        }
    </script>
    <button type="button" onclick="myFunction2()">Click me!</button>


    <script>
        function myFunction(){
            document.getElementById("demo").innerHTML = "Hello JavaScript!";
        }
    </script>

    <h1>My First JavaScript</h1>
    <p>Here, a JavaScript changes  the value of the src (source) attribute of an image.</p>

    <script>
        function light(sw){
            var pic;
            if(sw == 0){
                pic = "off.jpg"
            }else{
                pic = "on.jpg"
            }
            document.getElementById('myImage').src = pic;
        }
    </script>
