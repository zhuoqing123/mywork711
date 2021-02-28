var row=document.querySelector("#product-box"),pagination1=document.querySelector(".pagination");!async function(){var t=await promiseAjax({url:"../php/list.php",datatype:"json"});new Pagination(pagination1,{pageInfo:{pagenum:1,pagesize:12,totalsize:t.length,totalpage:Math.ceil(t.length/12)},textInfo:{first:"首页",prev:"上一页",next:"下一页",last:"尾页"},cb:function(a){var a=t.slice(12*(a-1),12*a),s="";a.forEach(a=>{s+=`
                <li class="product-item">
            <div class="item-tap">
                <p class="item-pic"><a href="./detail.html?id=${a.goods_id}"><img src="${a.goods_small_logo}"></a></p>
                <p class="item-price"><span class="price">￥${a.goods_price}</span></p>
                <p class="item-name">
                    <a  class="item-link">${a.goods_name}</a>
                </p>
                <p class="item-comment-dispatching">	              	<a href="#" class="comment"><span class="grey">已有</span>49380<span class="grey">人评价</span><a>
                </p>

                <p class="item-shop">	        	            	   <span class="nnamezy">自营</span>	            	      </p>
                <button class="shopcart">加入购物车</button>


            </div>
        </li>



                `}),row.innerHTML=s}})}();