var name1=getCookie("user"),box=document.querySelector(".panel"),url=location.href,cartList=localStorage.getItem("cartList3");function show(){var t,a,s;0<cartList.length?(t=cartList.every(t=>1==t.is_select),a=total(),s=`
        <div class="panel-heading">
            <input type="checkbox" name="quanxuan" ${t?"checked":""}>全选
            商品种类：<span>${cartList.length}</span>
            所选商品种类：<span>${a[0]}</span>
            所选商品价格：<span>￥${a[1]}</span>
            <a href="" class="btn btn-info btn-xs">去结算</a>
            <a href="" class="btn btn-success  btn-xs">清空购物车</a>
        </div>
        <div class="panel-body">
        `,cartList.forEach(t=>{s+=`
            <div class="media">
                <div class="media-left media-middle">
                <input type="checkbox" ${1==t.is_select?"checked":""} name="xuan" data-id="${t.goods_id}">
                <a href="#">
                    <img class="media-object" src="${t.goods_small_logo}" width="100" height="100" alt="...">
                </a>
                </div>
                <div class="media-body">
                <h4 class="media-heading">${t.goods_name}</h4>
                <h3>￥${t.goods_price}</h3>
                <button class="btn btn-info" data-id="${t.goods_id}">删除商品</button>
                <div class="btn-group" id="btn" role="group" aria-label="...">
                    <button type="button" class="btn btn-default" data-id="${t.goods_id}" ${t.cart_number<=1?"disabled":""}>-</button>
                    <button type="button" class="btn btn-default">${t.cart_number}</button>
                    <button type="button" class="btn btn-default" data-id="${t.goods_id}" ${t.goods_number<=t.cart_number?"disabled":""}>+</button>
                </div>
                </div>
            </div>

            `}),s+=`
        <div class="panel panel-default" id="jiesuan">
            <div class="panel-heading">
                <input type="checkbox" name="quan" id="quan2" ${t?"checked":""}>全选
                <span class="del">删除</span>

              
                   
                
                <span class="shop-right">已选<span class="tatal2">${a[0]}</span>件商品
                总计：<span class="zongji">${a[1]}</span>
                <button type="button" class="btn btn-success" id="goshop">去结算</button></span>
                
            </div>
            
          </div>
        
        
        </div>`,box.innerHTML=s):box.innerHTML=`
          <div class="jumbotron">
              <h1>您的购物车空空如也</h1>
              <p>点击下方按钮快去选购吧! ^_^</p>
              <p><a class="btn btn-primary btn-lg" href="./list.html" role="button">赶紧去选吧</a></p>
          </div>
        `}function total(){var a=0,s=0;return cartList.forEach(t=>{1==t.is_select&&(a++,s+=t.cart_number*t.goods_price)}),[a,s]}cartList=JSON.parse(cartList)||[],name1?show():(alert("你还没登录，请登录在进入"),location="./login.html?pathUrl="+url),box.onclick=function(t){var a,s=(t=t||window.event).target||t.srcElement;"+"==s.innerHTML&&(a=s.getAttribute("data-id"),cartList.forEach(t=>{t.goods_id==a&&t.cart_number++}),localStorage.setItem("cartList3",JSON.stringify(cartList)),show()),"-"==s.innerHTML&&(a=s.getAttribute("data-id"),cartList.forEach(t=>{t.goods_id==a&&t.cart_number--}),localStorage.setItem("cartList3",JSON.stringify(cartList)),show()),"删除商品"==s.innerHTML&&(a=s.getAttribute("data-id"),cartList=cartList.filter(t=>t.goods_id!=a),localStorage.setItem("cartList3",JSON.stringify(cartList)),show()),"quanxuan"==s.name&&(cartList.forEach(t=>{s.checked?t.is_select=1:t.is_select=0}),localStorage.setItem("cartList3",JSON.stringify(cartList)),show()),"quan"==s.name&&(cartList.forEach(t=>{s.checked?t.is_select=1:t.is_select=0}),localStorage.setItem("cartList3",JSON.stringify(cartList)),show()),"xuan"==s.name&&(a=s.getAttribute("data-id"),cartList.forEach(t=>{t.goods_id==a&&(t.is_select=1==t.is_select?"0":"1")}),localStorage.setItem("cartList3",JSON.stringify(cartList)),show()),"去结算"==s.innerHTML&&confirm("你确定要购买吗？")&&(alert("你需要支付：￥"+total()[1]),cartList=cartList.filter(t=>1!=t.is_select),localStorage.setItem("cartList3",JSON.stringify(cartList)),show()),"清空购物车"==s.innerHTML&&(localStorage.setItem("cartList3",JSON.stringify([])),show())};