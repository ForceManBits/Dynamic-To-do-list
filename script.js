function myFunction() {
    var input = document.getElementById("myInput").value;
    if(input != ""){
        var ul = document.getElementById("outerList");
        var node = document.createElement("li");
        var children = ul.children.length + 1;
        node.setAttribute("id", "element"+children);
        node.appendChild(document.createTextNode(input));
        ul.appendChild(node);

        var select = document.getElementById("mySelect");
        var opt = document.createElement("option");
        var childrensel = select.children.length + 1;
        opt.setAttribute("value", "element"+childrensel);
        opt.appendChild(document.createTextNode(input));
        select.appendChild(opt);
        document.getElementById("myInput").value = ''; 
    }
    else alert('Por favor insira um texto na aba "coloque uma tarefa.');
}

function myFunction1() {
    var ddlIndex = document.getElementById("mySelect").selectedIndex;
    var ddl = document.getElementById("mySelect").options;
   	var outer_ul = document.getElementById('outerList');
    var listItem = outer_ul.getElementsByTagName('li');
    var selectedID = document.getElementById("mySelect").value;
    var input1 = document.getElementById("myInput1").value;
    if(input1 != ""){
        var ul_length = document.getElementById(selectedID).childNodes.length;
        var inner_ul;
        if( ul_length <= 1 ){
            inner_ul = document.createElement("ul");
            document.getElementById(selectedID).appendChild(inner_ul); 
        }
        else{
            inner_ul = document.getElementById(selectedID).getElementsByTagName("ul")[0];
        }
        var node1 = document.createElement("li");
        var text1 = document.createTextNode(input1);
        node1.appendChild(text1);
        inner_ul.appendChild(node1);   
        document.getElementById("myInput1").value = ''; 
    }
    else alert('Por favor coloque uma tarefa adicional.');
}