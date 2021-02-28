var dt,id,search=location.search,box=document.querySelector(".panel");search?(id=search.split("=")[1],async function(){var t=`
        <div class="panel-heading">商品详细信息</div>
        <div class="panel-body">
            <div class="media">
            <div class="media-left media-middle" id="media-left" data-id="${(dt=await promiseAjax({url:"../php/detail.php",data:"id="+id,datatype:"json"})).goods_id}">
            <div class="show">
                <a href="#">
                    <img class="media-object" src="${dt.goods_small_logo}" alt="...">
                  </a>
                  <div class="mask">

                  </div>
            </div>
            <div class="enlarge" style=" background:url(${dt.goods_big_logo}) no-repeat;  background-size: 800px 800px;
            background-position: 0 0;">
                <!-- <img class="media-object" src="../images/product1.jpg" alt="..."> -->
            </div>
            
            



    </div>
                <div class="media-body">
                <h3 class="media-heading">${dt.goods_name}</h3>
                <h2>￥${dt.goods_price}</h2>
                <div class="btn-group" role="group" aria-label="...">
                    <button type="button" class="btn btn-default">XL</button>
                    <button type="button" class="btn btn-default">L</button>
                    <button type="button" class="btn btn-default">M</button>
                    <button type="button" class="btn btn-default">XM</button>
                    <button type="button" class="btn btn-default">XS</button>
                </div>
                <br/><br/>
                <a href="./shopcart.html" class="btn btn-info">立即购买</a>
                <a href="javascript:;" class="btn btn-success">加入购物车</a>
                </div>
            </div>
            <ul class="nav nav-tabs">
                <li role="presentation" class="active"><a href="#">Home</a></li>
                <li role="presentation"><a href="#">Profile</a></li>
                <li role="presentation"><a href="#">Messages</a></li>
            </ul>
            ${dt.goods_introduce}
        </div>
        `;box.innerHTML=t}()):console.log(1),box.onclick=function(t){var a;"加入购物车"==((t=t||window.event).target||t.srcElement).innerHTML&&((t=localStorage.getItem("cartList3"))?(t=JSON.parse(t),a=0,t.forEach(t=>{t.goods_id==dt.goods_id&&(a++,t.cart_number++)}),0==a&&(dt.cart_number=1,t.push(dt)),localStorage.setItem("cartList3",JSON.stringify(t))):(dt.cart_number=1,localStorage.setItem("cartList3",JSON.stringify([dt]))))};