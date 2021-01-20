 // alert('Hello')
        function changeColor() {
            // alert("Change Color Function.....")
            let Tcolor = document.querySelector('#in1').value;
            let Bcolor = document.querySelector('#in2').value;
            // alert(Tcolor)
            // alert(Bcolor)
            document.querySelector('h2').style.color = Tcolor;
            document.querySelector('h2').style.backgroundColor = Bcolor;
        }